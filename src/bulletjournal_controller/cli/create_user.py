from __future__ import annotations

import getpass
from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.domain.errors import ValidationError
from bulletjournal_controller.storage import require_instance_root


def create_user(
    instance_root: str,
    *,
    username: str,
    display_name: str,
    password: str | None = None,
    password_hash: str | None = None,
) -> dict[str, object]:
    if password is not None and password_hash is not None:
        raise ValidationError("Provide either password or password_hash, not both.")
    if password is None and password_hash is None:
        resolved_password = getpass.getpass("Password: ")
    else:
        resolved_password = password
    instance_paths = require_instance_root(Path(instance_root))
    server_config = ServerConfig(
        session_secret="cli-session-secret", cookie_secure=False
    )
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=server_config,
        ensure_runtime_image=False,
    )
    if password_hash is not None:
        user = container.auth_service.create_user_with_password_hash(
            username=username,
            display_name=display_name,
            password_hash=password_hash,
        )
    else:
        if resolved_password is None:
            raise ValidationError("Password is required.")
        user = container.auth_service.create_user(
            username=username,
            display_name=display_name,
            password=resolved_password,
        )
    return {
        "user_id": user.user_id,
        "username": user.username,
        "display_name": user.display_name,
        "is_active": user.is_active,
    }
