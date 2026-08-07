from __future__ import annotations

import io
import json
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


def test_create_user_does_not_require_prometheus_api_key(instance_root) -> None:
    instance_json_path = instance_root / "config" / "instance.json"
    instance_config = json.loads(instance_json_path.read_text(encoding="utf-8"))
    instance_config["prometheus_metrics_mode"] = "authenticated"
    instance_json_path.write_text(json.dumps(instance_config), encoding="utf-8")

    payload = create_user(
        str(instance_root),
        username="admin",
        display_name="Admin",
        password_hash=import_module("argon2").PasswordHasher().hash("secret-pass"),
    )

    assert payload["username"] == "admin"


def test_create_user_rejects_both_password_and_password_hash(instance_root) -> None:
    password_hash = import_module("argon2").PasswordHasher().hash("secret-pass")

    with pytest.raises(
        ValidationError,
        match="exactly one of password, password_hash, or password_hash_stdin",
    ):
        create_user(
            str(instance_root),
            username="admin",
            display_name="Admin",
            password="secret-pass",
            password_hash=password_hash,
        )


def test_create_user_accepts_password_hash_from_stdin(
    instance_root, monkeypatch: pytest.MonkeyPatch
) -> None:
    password_hash = import_module("argon2").PasswordHasher().hash("secret-pass")
    monkeypatch.setattr("sys.stdin", io.StringIO(password_hash + "\n"))

    payload = create_user(
        str(instance_root),
        username="admin",
        display_name="Admin",
        password_hash_stdin=True,
    )

    assert payload["username"] == "admin"
    assert payload["created"] is True


def test_create_user_update_reuses_existing_user(instance_root) -> None:
    password_hasher = import_module("argon2").PasswordHasher()
    initial = create_user(
        str(instance_root),
        username="admin",
        display_name="Admin",
        password_hash=password_hasher.hash("secret-pass"),
    )

    payload = create_user(
        str(instance_root),
        username="admin",
        display_name="Administrator",
        password_hash=password_hasher.hash("rotated-pass"),
        update=True,
    )

    assert payload["user_id"] == initial["user_id"]
    assert payload["display_name"] == "Administrator"
    assert payload["created"] is False
