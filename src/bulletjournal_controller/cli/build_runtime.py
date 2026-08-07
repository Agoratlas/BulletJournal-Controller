from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.runtime_config_service import (
    RuntimeConfigService,
)
from bulletjournal_controller.storage import require_instance_root


def build_runtime(instance_root: str) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    runtime_config_service = RuntimeConfigService(instance_paths=instance_paths)
    runtime_config = runtime_config_service.runtime_config
    runtime_config_service.ensure_runtime_image(InstallerRunner(DockerAdapter()))
    return {
        'runtime_image_name': runtime_config.runtime_image_name,
        'runtime_dockerfile': str(runtime_config.runtime_dockerfile),
        'runtime_build_context': str(runtime_config.runtime_build_context),
    }
