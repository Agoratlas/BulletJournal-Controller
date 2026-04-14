from __future__ import annotations

import sqlite3

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


def test_resolve_session_skips_touch_for_recent_activity(
    instance_root, server_config, monkeypatch
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
    touches: list[str] = []
    original_touch = service.sessions.touch

    def spy_touch(
        session_id: str, *, expires_at: str, only_if_last_seen_at: str | None = None
    ) -> None:
        touches.append(session_id)
        original_touch(
            session_id,
            expires_at=expires_at,
            only_if_last_seen_at=only_if_last_seen_at,
        )

    monkeypatch.setattr(service.sessions, "touch", spy_touch)

    resolved = service.resolve_session(bundle.cookie_value)

    assert resolved is not None
    assert touches == []


def test_resolve_session_refreshes_stale_activity(
    instance_root, server_config, monkeypatch
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
    with db.transaction() as connection:
        connection.execute(
            "UPDATE sessions SET last_seen_at = ? WHERE session_id = ?",
            ("2000-01-01T00:00:00Z", bundle.session.session_id),
        )
    touches: list[str] = []
    original_touch = service.sessions.touch

    def spy_touch(
        session_id: str, *, expires_at: str, only_if_last_seen_at: str | None = None
    ) -> None:
        touches.append(session_id)
        original_touch(
            session_id,
            expires_at=expires_at,
            only_if_last_seen_at=only_if_last_seen_at,
        )

    monkeypatch.setattr(service.sessions, "touch", spy_touch)

    resolved = service.resolve_session(bundle.cookie_value)

    assert resolved is not None
    assert touches == [bundle.session.session_id]


def test_resolve_session_ignores_locked_touch_for_valid_session(
    instance_root, server_config, monkeypatch
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
    with db.transaction() as connection:
        connection.execute(
            "UPDATE sessions SET last_seen_at = ? WHERE session_id = ?",
            ("2000-01-01T00:00:00Z", bundle.session.session_id),
        )

    def locked_touch(
        session_id: str, *, expires_at: str, only_if_last_seen_at: str | None = None
    ) -> None:
        raise sqlite3.OperationalError("database is locked")

    monkeypatch.setattr(service.sessions, "touch", locked_touch)

    resolved = service.resolve_session(bundle.cookie_value)

    assert resolved is not None
    assert resolved.session.session_id == bundle.session.session_id
