from __future__ import annotations

from bulletjournal_controller.config import ServerConfig, load_instance_config
from bulletjournal_controller.services.mcp_config_service import McpConfigService
from bulletjournal_controller.storage import require_instance_root


def test_opencode_archive_filename_uses_configured_instance_id(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    service = McpConfigService(
        instance_paths=instance_paths,
        instance_config=load_instance_config(instance_paths.instance_json_path),
        server_config=ServerConfig(
            cookie_secure=False, public_origin="http://localhost:8780"
        ),
    )

    archive, filename = service.opencode_archive("study-a")

    assert archive
    assert filename == "bulletjournal_main_study-a.zip"
