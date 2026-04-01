from __future__ import annotations

import pytest

from bulletjournal_controller.domain.errors import ConflictError, ValidationError
from bulletjournal_controller.services.auth_service import AuthService
from bulletjournal_controller.storage import SessionRepository, StateDB, UserRepository


def test_auth_hashing_and_session_lifecycle(instance_root, server_config) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    user = service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    assert service.verify_password(user.password_hash, "secret-pass") is True
    assert service.verify_password(user.password_hash, "wrong-pass") is False

    authenticated = service.authenticate_user(username="admin", password="secret-pass")
    bundle = service.create_session(
        user=authenticated, user_agent="pytest", remote_addr="127.0.0.1"
    )
    resolved = service.resolve_session(bundle.cookie_value)
    assert resolved is not None
    assert resolved.user.username == "admin"

    service.revoke_session(bundle.cookie_value)
    assert service.resolve_session(bundle.cookie_value) is None


def test_create_user_with_password_hash(instance_root, server_config) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    password_hash = service.password_hasher.hash("secret-pass")

    user = service.create_user_with_password_hash(
        username="admin",
        display_name="Admin",
        password_hash=password_hash,
    )

    assert user.username == "admin"
    assert user.password_hash == password_hash
    assert service.verify_password(user.password_hash, "secret-pass") is True


def test_create_user_with_invalid_password_hash_raises_validation_error(
    instance_root, server_config
) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )

    with pytest.raises(ValidationError, match="valid Argon2 hash"):
        service.create_user_with_password_hash(
            username="admin",
            display_name="Admin",
            password_hash="not-a-real-hash",
        )


def test_create_user_with_existing_username_raises_conflict(
    instance_root, server_config
) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    first_hash = service.password_hasher.hash("secret-pass")
    second_hash = service.password_hasher.hash("second-pass")

    service.create_user_with_password_hash(
        username="admin",
        display_name="Admin",
        password_hash=first_hash,
    )

    with pytest.raises(ConflictError, match="already exists"):
        service.create_user_with_password_hash(
            username="admin",
            display_name="Admin 2",
            password_hash=second_hash,
        )


def test_create_or_update_user_with_password_hash_updates_existing_user(
    instance_root, server_config
) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    first_hash = service.password_hasher.hash("secret-pass")
    second_hash = service.password_hasher.hash("second-pass")
    original = service.create_user_with_password_hash(
        username="admin",
        display_name="Admin",
        password_hash=first_hash,
    )

    updated, created = service.create_or_update_user_with_password_hash(
        username="admin",
        display_name="Administrator",
        password_hash=second_hash,
    )

    assert created is False
    assert updated.user_id == original.user_id
    assert updated.display_name == "Administrator"
    assert service.verify_password(updated.password_hash, "second-pass") is True


def test_create_or_update_user_with_password_hash_revokes_existing_sessions(
    instance_root, server_config
) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    user = service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    bundle = service.create_session(
        user=user, user_agent="pytest", remote_addr="127.0.0.1"
    )
    updated_hash = service.password_hasher.hash("rotated-pass")

    service.create_or_update_user_with_password_hash(
        username="admin",
        display_name="Admin",
        password_hash=updated_hash,
    )

    assert service.resolve_session(bundle.cookie_value) is None


def test_create_or_update_user_with_same_password_hash_keeps_existing_sessions(
    instance_root, server_config
) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    service = AuthService(
        users=UserRepository(db),
        sessions=SessionRepository(db),
        server_config=server_config,
    )
    password_hash = service.password_hasher.hash("secret-pass")
    user = service.create_user_with_password_hash(
        username="admin",
        display_name="Admin",
        password_hash=password_hash,
    )
    bundle = service.create_session(
        user=user, user_agent="pytest", remote_addr="127.0.0.1"
    )

    updated, created = service.create_or_update_user_with_password_hash(
        username="admin",
        display_name="Administrator",
        password_hash=password_hash,
    )

    assert created is False
    assert updated.display_name == "Administrator"
    assert service.resolve_session(bundle.cookie_value) is not None
