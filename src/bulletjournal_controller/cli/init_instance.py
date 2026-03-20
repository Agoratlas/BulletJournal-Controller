from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.storage import init_instance_root


def init_instance(path: str) -> str:
    paths = init_instance_root(Path(path))
    return str(paths.root)
