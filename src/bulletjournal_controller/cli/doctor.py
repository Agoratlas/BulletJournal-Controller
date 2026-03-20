from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.config import load_instance_config
from bulletjournal_controller.storage import require_instance_root


def doctor(instance_root: str) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    instance_config = load_instance_config(instance_paths.instance_json_path)
    return {
        'instance_root': str(instance_paths.root),
        'state_db_exists': instance_paths.state_db_path.exists(),
        'projects_dir_exists': instance_paths.projects_dir.exists(),
        'job_logs_dir_exists': instance_paths.job_logs_dir.exists(),
        'instance_id': instance_config.instance_id,
        'docker_runtime_image': instance_config.docker_runtime_image,
    }
