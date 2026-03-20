from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def export_project(instance_root: str, project_id: str, archive: str, *, include_artifacts: bool = True) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='cli-session-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    project = container.project_service.get_project(project_id)
    return container.export_service.export_project(
        project=project,
        archive_path=Path(archive).resolve(),
        include_artifacts=include_artifacts,
    )
