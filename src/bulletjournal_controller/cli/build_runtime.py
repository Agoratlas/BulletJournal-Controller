from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def build_runtime(instance_root: str) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='cli-session-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    runtime_config = container.runtime_config_service.runtime_config
    container.runtime_config_service.ensure_runtime_image(container.installer)
    return {
        'runtime_image_name': runtime_config.runtime_image_name,
        'runtime_dockerfile': str(runtime_config.runtime_dockerfile),
        'runtime_build_context': str(runtime_config.runtime_build_context),
    }
