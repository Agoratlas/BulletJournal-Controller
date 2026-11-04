from __future__ import annotations

import json
import os
import stat
from pathlib import Path

DISK_ACCOUNTING_VERSION = 1
DISK_CATEGORIES = ('python_env', 'uv_cache', 'objects', 'database', 'others')


def disk_path_bytes(
    path: Path, *, seen: set[tuple[int, int]], exclude: tuple[Path, ...] = (), strict: bool = False
) -> int:
    """Count file lengths once per inode, including links themselves, not targets.

    Only multiply-linked inodes need tracking. Runtime scans are strict so an
    unreadable subtree cannot become a permanently cached zero-size snapshot.
    """
    total = 0
    pending = [path]
    excluded = set(exclude)
    while pending:
        current = pending.pop()
        if current in excluded:
            continue
        try:
            info = current.lstat()
            if stat.S_ISDIR(info.st_mode):
                with os.scandir(current) as entries:
                    pending.extend(Path(entry.path) for entry in entries)
                continue
            if not (stat.S_ISREG(info.st_mode) or stat.S_ISLNK(info.st_mode)):
                continue
            if info.st_nlink > 1:
                identity = (info.st_dev, info.st_ino)
                if identity in seen:
                    continue
                seen.add(identity)
            total += info.st_size
        except FileNotFoundError:
            # A missing root is empty (e.g. an uninstalled environment). Losing
            # a file during a strict traversal means the snapshot must be retried.
            if strict and current != path:
                raise
        except OSError:
            if strict:
                raise
    return total


def runtime_disk_accounting(project_paths) -> dict:
    seen: set[tuple[int, int]] = set()
    python_env = disk_path_bytes(project_paths.runtime_venv_dir, seen=seen, strict=True)
    uv_cache = disk_path_bytes(project_paths.runtime_uv_cache_dir, seen=seen, strict=True)
    return {
        'version': DISK_ACCOUNTING_VERSION,
        'root_path': str(project_paths.root),
        'python_env': python_env,
        'uv_cache': uv_cache,
        'shared_inodes': sorted(seen),
    }


def read_runtime_accounting(project) -> dict | None:
    try:
        value = json.loads(project.runtime_disk_accounting_json or 'null')
        if not isinstance(value, dict) or value.get('version') != DISK_ACCOUNTING_VERSION:
            return None
        if value.get('root_path') != project.root_path:
            return None
        if any(type(value.get(key)) is not int or value[key] < 0 for key in ('python_env', 'uv_cache')):
            return None
        if isinstance(value.get('generation'), str) and value['generation']:
            return value
        if not isinstance(value.get('shared_inodes'), list):
            return None
        if any(
            not isinstance(pair, list) or len(pair) != 2 or any(type(item) is not int for item in pair)
            for pair in value['shared_inodes']
        ):
            return None
        return value
    except (ValueError, TypeError, AttributeError):
        return None
