from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import SYSTEM_USER_ID, ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def delete_user(instance_root: str, *, username: str) -> dict[str, object]:
    instance_paths = require_instance_root(Path(instance_root))
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret="cli-session-secret", cookie_secure=False),
        ensure_runtime_image=False,
        validate_server_config=False,
    )
    user = container.auth_service.delete_user(
        username=username,
        replacement_user_id=SYSTEM_USER_ID,
    )
    return {"deleted": True, "user_id": user.user_id, "username": user.username}
