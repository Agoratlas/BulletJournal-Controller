from __future__ import annotations

from bulletjournal_controller.services.auth_service import AuthService
from bulletjournal_controller.storage import SessionRepository, StateDB, UserRepository


def test_auth_hashing_and_session_lifecycle(instance_root, server_config) -> None:
    db = StateDB(instance_root / 'metadata' / 'state.db')
    service = AuthService(users=UserRepository(db), sessions=SessionRepository(db), server_config=server_config)
    user = service.create_user(username='admin', display_name='Admin', password='secret-pass')
    assert service.verify_password(user.password_hash, 'secret-pass') is True
    assert service.verify_password(user.password_hash, 'wrong-pass') is False

    authenticated = service.authenticate_user(username='admin', password='secret-pass')
    bundle = service.create_session(user=authenticated, user_agent='pytest', remote_addr='127.0.0.1')
    resolved = service.resolve_session(bundle.cookie_value)
    assert resolved is not None
    assert resolved.user.username == 'admin'

    service.revoke_session(bundle.cookie_value)
    assert service.resolve_session(bundle.cookie_value) is None
