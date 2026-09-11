from __future__ import annotations

import io
import json
import zipfile

from bulletjournal_controller.config import canonical_public_origin
from bulletjournal_controller.domain.errors import ConfigurationError

MAX_AGENTS_BYTES = 64 * 1024
MAX_ARCHIVE_BYTES = 128 * 1024


class McpConfigService:
    def __init__(self, *, instance_paths, instance_config, server_config) -> None:
        self.instance_paths = instance_paths
        self.instance_config = instance_config
        self.server_config = server_config

    def opencode_archive(self, project_id: str) -> tuple[bytes, str]:
        try:
            agents = self.instance_paths.agents_instructions_path.read_bytes()
            agents.decode('utf-8')
        except (OSError, UnicodeDecodeError) as exc:
            raise ConfigurationError(
                'Controller AGENTS.md is missing or unreadable. Run init-instance to seed it.'
            ) from exc
        if len(agents) > MAX_AGENTS_BYTES:
            raise ConfigurationError('Controller AGENTS.md exceeds the 64 KiB setup-bundle limit.')
        origin = canonical_public_origin(
            self.server_config.public_origin,
            allow_http=not self.server_config.cookie_secure,
        )
        instance_id = self.instance_config.instance_id
        name = f'bulletjournal_{project_id}_{instance_id}'
        config = {
            '$schema': 'https://opencode.ai/config.json',
            'mcp': {
                name: {
                    'type': 'remote',
                    'url': f'{origin}/p/{project_id}/mcp',
                    'enabled': True,
                    'oauth': {},
                }
            },
        }
        output = io.BytesIO()
        with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
            for filename, contents in (
                ('AGENTS.md', agents),
                (
                    'opencode.json',
                    json.dumps(config, indent=2, sort_keys=True).encode() + b'\n',
                ),
            ):
                entry = zipfile.ZipInfo(filename, date_time=(1980, 1, 1, 0, 0, 0))
                entry.external_attr = 0o100644 << 16
                archive.writestr(entry, contents)
        result = output.getvalue()
        if len(result) > MAX_ARCHIVE_BYTES:
            raise ConfigurationError('Generated MCP setup archive exceeds the 128 KiB limit.')
        return result, f'bulletjournal_{instance_id}_{project_id}.zip'
