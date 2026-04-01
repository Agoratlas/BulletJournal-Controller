from __future__ import annotations

from importlib import import_module

import pytest

from bulletjournal_controller.cli.create_user import create_user
from bulletjournal_controller.domain.errors import ValidationError


def test_create_user_accepts_password_hash(instance_root) -> None:
    password_hash = import_module("argon2").PasswordHasher().hash("secret-pass")

    payload = create_user(
        str(instance_root),
        username="admin",
        display_name="Admin",
        password_hash=password_hash,
    )

    assert payload["username"] == "admin"
    assert payload["display_name"] == "Admin"


def test_create_user_rejects_both_password_and_password_hash(instance_root) -> None:
    password_hash = import_module("argon2").PasswordHasher().hash("secret-pass")

    with pytest.raises(ValidationError, match="either password or password_hash"):
        create_user(
            str(instance_root),
            username="admin",
            display_name="Admin",
            password="secret-pass",
            password_hash=password_hash,
        )
