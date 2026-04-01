from __future__ import annotations

import getpass
import sys
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
    password_hash_stdin: bool = False,
    update: bool = False,
) -> dict[str, object]:
    provided_secret_sources = sum(
        [password is not None, password_hash is not None, password_hash_stdin]
    )
    if provided_secret_sources > 1:
        raise ValidationError(
            "Provide exactly one of password, password_hash, or password_hash_stdin."
        )
    if password_hash_stdin:
        password_hash = sys.stdin.read().strip()
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
        resolved_password_hash = password_hash
        if update:
            user, created = (
                container.auth_service.create_or_update_user_with_password_hash(
                    username=username,
                    display_name=display_name,
                    password_hash=resolved_password_hash,
                )
            )
        else:
            user = container.auth_service.create_user_with_password_hash(
                username=username,
                display_name=display_name,
                password_hash=resolved_password_hash,
            )
            created = True
    else:
        if resolved_password is None:
            raise ValidationError("Password is required.")
        if update:
            resolved_password_hash = container.auth_service.password_hasher.hash(
                resolved_password
            )
            user, created = (
                container.auth_service.create_or_update_user_with_password_hash(
                    username=username,
                    display_name=display_name,
                    password_hash=resolved_password_hash,
                )
            )
        else:
            user = container.auth_service.create_user(
                username=username,
                display_name=display_name,
                password=resolved_password,
            )
            created = True
    return {
        "created": created,
        "user_id": user.user_id,
        "username": user.username,
        "display_name": user.display_name,
        "is_active": user.is_active,
    }
