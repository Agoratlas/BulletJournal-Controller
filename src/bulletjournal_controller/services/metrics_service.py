from __future__ import annotations

import json
import os
import shutil
import subprocess
import time
from pathlib import Path

from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.services.disk_accounting import disk_path_bytes, read_runtime_accounting
from bulletjournal_controller.storage.instance_fs import ProjectPaths
from bulletjournal_controller.utils import path_size_bytes

PROJECT_DISK_USAGE_TTL_SECONDS = 15.0
DOCKER_STATS_TTL_SECONDS = 5.0
CONTAINER_RW_SIZE_TTL_SECONDS = 15.0
SYSTEM_METRICS_TTL_SECONDS = 5.0


class MetricsService:
    def __init__(
        self,
        *,
        instance_paths,
        docker_adapter,
        runtime_config_service,
        jobs,
        projects=None,
    ):
        self.instance_paths = instance_paths
        self.docker_adapter = docker_adapter
        self.runtime_config_service = runtime_config_service
        self.jobs = jobs
        self.projects = projects
        self._runtime_inode_cache: dict[str, tuple[str, set[tuple[int, int]]]] = {}
        self._project_disk_usage_cache: dict[str, tuple[str, int | None, int | None, float, int]] = {}
        self._project_disk_breakdown_cache: dict[str, tuple[str, dict[str, int]]] = {}
        self._docker_stats_cache: dict[tuple[str, ...], tuple[float, dict[str, dict[str, object]]]] = {}
        self._container_rw_size_cache: dict[str, tuple[float, int | None]] = {}
        self._system_metrics_cache: tuple[float, dict[str, object]] | None = None

    def system_metrics(self) -> dict[str, object]:
        cached = self._system_metrics_cache
        now = time.monotonic()
        if cached is not None and now < cached[0]:
            return cached[1]
        disk = shutil.disk_usage(self.instance_paths.root)
        metrics = {
            'cpu_percent': self._system_cpu_percent(),
            'memory': self._system_memory_metrics(),
            'disk': {
                'used_bytes': int(disk.used),
                'total_bytes': int(disk.total),
            },
        }
        self._system_metrics_cache = (now + SYSTEM_METRICS_TTL_SECONDS, metrics)
        return metrics

    def project_metrics_map(self, projects: list[ProjectRecord]) -> dict[str, dict[str, object]]:
        runtime_metrics = self._docker_stats_by_container_name(
            [project.container_name for project in projects if project.container_name]
        )
        metrics: dict[str, dict[str, object]] = {}
        for project in projects:
            disk_used_bytes = self._project_disk_usage(project)
            project_metrics: dict[str, object] = {
                'disk_used_bytes': disk_used_bytes,
            }
            cached_breakdown = self._project_disk_breakdown_cache.get(project.project_id)
            if cached_breakdown is not None:
                project_metrics['disk_breakdown_bytes'] = dict(cached_breakdown[1])
            if project.container_name:
                runtime = runtime_metrics.get(project.container_name)
                if runtime is not None:
                    project_metrics['cpu_percent'] = runtime.get('cpu_percent')
                    project_metrics['memory_used_bytes'] = runtime.get('memory_used_bytes')
                    project_metrics['memory_limit_bytes'] = runtime.get('memory_limit_bytes')
                size_bytes = self._container_rw_size(project.container_name)
                if size_bytes is not None:
                    project_metrics['disk_used_bytes'] = disk_used_bytes + size_bytes
                    if 'disk_breakdown_bytes' in project_metrics:
                        project_metrics['disk_breakdown_bytes']['others'] += size_bytes
            metrics[project.project_id] = project_metrics
        return metrics

    def project_metrics(self, project: ProjectRecord) -> dict[str, object]:
        return self.project_metrics_map([project]).get(project.project_id, {})

    def prune_projects(self, projects: list[ProjectRecord]) -> None:
        project_ids = {project.project_id for project in projects}
        for cache in (self._runtime_inode_cache, self._project_disk_usage_cache, self._project_disk_breakdown_cache):
            for project_id in set(cache) - project_ids:
                cache.pop(project_id, None)

    def cached_project_metrics_map(self, projects: list[ProjectRecord]) -> dict[str, dict[str, object]]:
        """Return the latest collected values without blocking on metric collection."""
        metrics: dict[str, dict[str, object]] = {}
        for project in projects:
            project_metrics: dict[str, object] = {}
            cached_disk = self._project_disk_usage_cache.get(project.project_id)
            if cached_disk is not None:
                _, _, _, _, total = cached_disk
                project_metrics['disk_used_bytes'] = total
                cached_breakdown = self._project_disk_breakdown_cache.get(project.project_id)
                if cached_breakdown is not None:
                    project_metrics['disk_breakdown_bytes'] = dict(cached_breakdown[1])
            if project.container_name:
                for _, stats in self._docker_stats_cache.values():
                    runtime = stats.get(project.container_name)
                    if runtime is not None:
                        project_metrics.update(runtime)
                        break
                cached_size = self._container_rw_size_cache.get(project.container_name)
                if cached_size is not None and 'disk_used_bytes' in project_metrics:
                    _, size_rw = cached_size
                    if size_rw is not None:
                        project_metrics['disk_used_bytes'] += size_rw
                        if 'disk_breakdown_bytes' in project_metrics:
                            project_metrics['disk_breakdown_bytes']['others'] += size_rw
            metrics[project.project_id] = project_metrics
        return metrics

    def _project_disk_usage(self, project: ProjectRecord) -> int:
        cached = self._project_disk_usage_cache.get(project.project_id)
        now = time.monotonic()
        if cached is not None:
            (
                cached_root_path,
                cached_venv_size,
                cached_uv_cache_size,
                deadline,
                cached_total,
            ) = cached
            if (
                cached_root_path == project.root_path
                and cached_venv_size == project.runtime_venv_size_bytes
                and cached_uv_cache_size == project.runtime_uv_cache_size_bytes
                and now < deadline
                and (
                    project.runtime_disk_accounting_json is None
                    or self._project_disk_breakdown_cache.get(project.project_id, (None,))[0]
                    == project.runtime_disk_accounting_json
                )
            ):
                return cached_total
        snapshot = read_runtime_accounting(project)
        runtime_inodes = self._runtime_inodes(project, snapshot) if snapshot is not None else None
        if runtime_inodes is None:
            snapshot = None
        if snapshot is not None:
            paths = ProjectPaths(Path(project.root_path))
            seen = set(runtime_inodes)
            database_paths = tuple(
                paths.metadata_dir / name for name in ('state.db', 'state.db-wal', 'state.db-shm', 'state.db-journal')
            )
            breakdown = {
                'python_env': snapshot['python_env'],
                'uv_cache': snapshot['uv_cache'],
                'objects': disk_path_bytes(paths.object_store_dir, seen=seen),
                'database': sum(disk_path_bytes(path, seen=seen) for path in database_paths),
                'others': disk_path_bytes(
                    paths.root,
                    seen=seen,
                    exclude=(
                        paths.runtime_venv_dir,
                        paths.runtime_uv_cache_dir,
                        paths.object_store_dir,
                        *database_paths,
                    ),
                ),
            }
            for log_path in self.jobs.list_log_paths_for_project(project.project_id):
                breakdown['others'] += disk_path_bytes(Path(log_path), seen=seen)
            self._project_disk_breakdown_cache[project.project_id] = (project.runtime_disk_accounting_json, breakdown)
            total = sum(breakdown.values())
        else:
            self._project_disk_breakdown_cache.pop(project.project_id, None)
            total = self._legacy_project_disk_usage(project)
        self._project_disk_usage_cache[project.project_id] = (
            project.root_path,
            project.runtime_venv_size_bytes,
            project.runtime_uv_cache_size_bytes,
            now + PROJECT_DISK_USAGE_TTL_SECONDS,
            total,
        )
        return total

    def _runtime_inodes(self, project, snapshot) -> set[tuple[int, int]] | None:
        cached = self._runtime_inode_cache.get(project.project_id)
        if cached is not None and cached[0] == project.runtime_disk_accounting_json:
            return cached[1]
        identities = snapshot.get('shared_inodes')
        if identities is None and self.projects is not None:
            encoded = self.projects.runtime_shared_inodes(project.project_id, snapshot['generation'])
            if encoded is None:
                return None
            identities = json.loads(encoded)
        if identities is None:
            return None
        seen = {tuple(pair) for pair in identities}
        self._runtime_inode_cache[project.project_id] = (project.runtime_disk_accounting_json, seen)
        return seen

    def _legacy_project_disk_usage(self, project: ProjectRecord) -> int:
        total = (
            path_size_bytes(
                Path(project.root_path),
                exclude=(
                    Path(project.root_path) / '.runtime' / 'venv',
                    Path(project.root_path) / '.runtime' / 'uv-cache',
                ),
            )
            + int(project.runtime_venv_size_bytes or 0)
            + int(project.runtime_uv_cache_size_bytes or 0)
        )
        for log_path_text in self.jobs.list_log_paths_for_project(project.project_id):
            total += path_size_bytes(Path(log_path_text))
        return total

    def _docker_stats_by_container_name(self, container_names: list[str]) -> dict[str, dict[str, object]]:
        resolved_names = [name for name in container_names if name]
        if not resolved_names:
            return {}
        cache_key = tuple(sorted(resolved_names))
        cached = self._docker_stats_cache.get(cache_key)
        now = time.monotonic()
        if cached is not None:
            deadline, stats = cached
            if now < deadline:
                return stats
        command = [
            *self.docker_adapter.docker_base_command(),
            'stats',
            '--no-stream',
            '--format',
            '{{json .}}',
            *resolved_names,
        ]
        try:
            result = self.docker_adapter.run(command, timeout=30)
        except Exception:
            return {}
        if result.returncode != 0:
            return {}
        stats: dict[str, dict[str, object]] = {}
        for line in (result.stdout or '').splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                payload = json.loads(line)
            except json.JSONDecodeError:
                continue
            name = str(payload.get('Name') or '').strip()
            if not name:
                continue
            memory_used_bytes, memory_limit_bytes = self._parse_memory_usage(str(payload.get('MemUsage') or ''))
            stats[name] = {
                'cpu_percent': self._parse_percentage(str(payload.get('CPUPerc') or '')),
                'memory_used_bytes': memory_used_bytes,
                'memory_limit_bytes': memory_limit_bytes,
            }
        self._docker_stats_cache[cache_key] = (
            now + DOCKER_STATS_TTL_SECONDS,
            stats,
        )
        return stats

    def _container_rw_size(self, container_name: str) -> int | None:
        cached = self._container_rw_size_cache.get(container_name)
        now = time.monotonic()
        if cached is not None:
            deadline, size_rw = cached
            if now < deadline:
                return size_rw
        command = [*self.docker_adapter.docker_base_command(), 'inspect', '--size', container_name]
        try:
            result = self.docker_adapter.run(command, timeout=30)
        except Exception:
            return None
        if result.returncode != 0:
            return None
        try:
            payload = json.loads(result.stdout or '[]')
        except json.JSONDecodeError:
            return None
        if not isinstance(payload, list) or not payload:
            return None
        record = payload[0]
        if not isinstance(record, dict):
            return None
        size_rw = record.get('SizeRw')
        if isinstance(size_rw, int):
            self._container_rw_size_cache[container_name] = (
                now + CONTAINER_RW_SIZE_TTL_SECONDS,
                size_rw,
            )
            return size_rw
        return None

    def _system_cpu_percent(self) -> float | None:
        try:
            cpu_count = os.cpu_count() or 1
            result = subprocess.run(  # noqa: S603, RUF100 - Fixed local system probe command.
                ['/bin/ps', '-A', '-o', '%cpu='],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
            if result.returncode == 0:
                total = 0.0
                for line in result.stdout.splitlines():
                    line = line.strip()
                    if not line:
                        continue
                    total += float(line)
                return round(max(0.0, min(100.0, total / cpu_count)), 1)
        except Exception:  # noqa: S110 - Fall back to load average when ps is unavailable or malformed.
            pass
        try:
            cpu_count = os.cpu_count() or 1
            return round(min(100.0, (os.getloadavg()[0] / cpu_count) * 100.0), 1)
        except Exception:
            return None

    def _system_memory_metrics(self) -> dict[str, int] | None:
        total = self._sysctl_int('hw.memsize')
        if total is not None:
            page_size = self._sysctl_int('hw.pagesize') or 4096
            vm_stats = self._vm_stat_pages()
            if vm_stats is not None:
                available_pages = vm_stats.get('Pages free', 0) + vm_stats.get('Pages speculative', 0)
                used_bytes = max(0, total - (available_pages * page_size))
                return {
                    'used_bytes': int(used_bytes),
                    'total_bytes': int(total),
                }
        return self._linux_memory_metrics()

    @staticmethod
    def _parse_percentage(value: str) -> float | None:
        stripped = value.strip().removesuffix('%')
        if not stripped:
            return None
        try:
            return round(float(stripped), 1)
        except ValueError:
            return None

    @staticmethod
    def _parse_memory_usage(value: str) -> tuple[int | None, int | None]:
        if not value or '/' not in value:
            return None, None
        used_text, limit_text = [part.strip() for part in value.split('/', 1)]
        return MetricsService._parse_size(used_text), MetricsService._parse_size(limit_text)

    @staticmethod
    def _parse_size(value: str) -> int | None:
        text = value.strip()
        if not text:
            return None
        parts = text.split()
        token = parts[0]
        index = 0
        while index < len(token) and (token[index].isdigit() or token[index] in '.-'):
            index += 1
        number_text = token[:index]
        unit = token[index:] if index < len(token) else (parts[1] if len(parts) > 1 else 'B')
        try:
            number = float(number_text)
        except ValueError:
            return None
        multipliers = {
            'b': 1,
            'kb': 1000,
            'kib': 1024,
            'mb': 1000**2,
            'mib': 1024**2,
            'gb': 1000**3,
            'gib': 1024**3,
            'tb': 1000**4,
            'tib': 1024**4,
        }
        multiplier = multipliers.get(unit.strip().lower())
        if multiplier is None:
            return None
        return int(number * multiplier)

    @staticmethod
    def _sysctl_int(name: str) -> int | None:
        try:
            result = subprocess.run(  # noqa: S603, RUF100 - Fixed system probe command with a validated sysctl key.
                ['/usr/sbin/sysctl', '-n', name],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
        except Exception:
            return None
        if result.returncode != 0:
            return None
        text = result.stdout.strip()
        if not text:
            return None
        try:
            return int(text)
        except ValueError:
            return None

    @staticmethod
    def _vm_stat_pages() -> dict[str, int] | None:
        try:
            result = subprocess.run(  # noqa: S603, RUF100 - Fixed local system probe command.
                ['/usr/bin/vm_stat'],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
        except Exception:
            return None
        if result.returncode != 0:
            return None
        pages: dict[str, int] = {}
        for line in result.stdout.splitlines():
            if ':' not in line:
                continue
            name, raw_value = line.split(':', 1)
            cleaned = raw_value.strip().rstrip('.').replace('.', '')
            try:
                pages[name.strip()] = int(cleaned)
            except ValueError:
                continue
        return pages

    @staticmethod
    def _linux_memory_metrics() -> dict[str, int] | None:
        meminfo = Path('/proc/meminfo')
        if not meminfo.exists():
            return None
        values: dict[str, int] = {}
        for line in meminfo.read_text(encoding='utf-8').splitlines():
            if ':' not in line:
                continue
            key, raw_value = line.split(':', 1)
            parts = raw_value.strip().split()
            if not parts:
                continue
            try:
                values[key] = int(parts[0]) * 1024
            except ValueError:
                continue
        total = values.get('MemTotal')
        available = values.get('MemAvailable')
        if total is None or available is None:
            return None
        return {
            'used_bytes': max(0, total - available),
            'total_bytes': total,
        }
