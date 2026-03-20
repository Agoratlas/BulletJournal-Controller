from __future__ import annotations

import getpass
from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def create_user(instance_root: str, *, username: str, display_name: str, password: str | None = None) -> dict[str, object]:
    resolved_password = password or getpass.getpass('Password: ')
    instance_paths = require_instance_root(Path(instance_root))
    server_config = ServerConfig(session_secret='cli-session-secret', cookie_secure=False)
    container = ServiceContainer(instance_paths=instance_paths, server_config=server_config, ensure_runtime_image=False)
    user = container.auth_service.create_user(username=username, display_name=display_name, password=resolved_password)
    return {
        'user_id': user.user_id,
        'username': user.username,
        'display_name': user.display_name,
        'is_active': user.is_active,
    }
