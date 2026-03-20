from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def import_project(
    instance_root: str,
    archive: str,
    *,
    project_id_override: str | None = None,
    include_install: bool = False,
) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='cli-session-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    return container.export_service.import_project(
        archive_path=Path(archive).resolve(),
        project_id_override=project_id_override,
        include_install=include_install,
    )
