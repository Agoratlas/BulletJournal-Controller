from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def cleanup_instance(instance_root: str) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='cli-session-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    removed = container.runtime_service.cleanup_instance_containers()
    return {'removed_containers': removed, 'instance_id': container.instance_config.instance_id}
