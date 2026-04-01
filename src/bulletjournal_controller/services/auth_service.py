from __future__ import annotations

from dataclasses import dataclass
from importlib import import_module

from bulletjournal_controller.config import (
    DEFAULT_SESSION_LIFETIME_SECONDS,
    ServerConfig,
)
from bulletjournal_controller.domain.errors import (
    AuthenticationError,
    ConflictError,
    ValidationError,
)
from bulletjournal_controller.domain.models import SessionRecord, UserRecord
from bulletjournal_controller.storage.repositories import (
    SessionRepository,
    UserRepository,
)
from bulletjournal_controller.utils import (
    iso_after,
    random_token,
    sha256_text,
    utc_now_iso,
)


SESSION_COOKIE_NAME = "bulletjournal_session"


@dataclass(slots=True, frozen=True)
class SessionBundle:
    user: UserRecord
    session: SessionRecord
    cookie_value: str


class AuthService:
    def __init__(
        self,
        *,
        users: UserRepository,
        sessions: SessionRepository,
        server_config: ServerConfig,
    ):
        self.users = users
        self.sessions = sessions
        self.server_config = server_config
        argon2_module = import_module("argon2")
        argon2_exceptions = import_module("argon2.exceptions")
        self._invalid_hash_error = getattr(argon2_exceptions, "InvalidHashError")
        self._verify_mismatch_error = getattr(argon2_exceptions, "VerifyMismatchError")
        self.password_hasher = argon2_module.PasswordHasher()

    def create_user(
        self, *, username: str, display_name: str, password: str
    ) -> UserRecord:
        password_hash = self.password_hasher.hash(password)
        return self.create_user_with_password_hash(
            username=username,
            display_name=display_name,
            password_hash=password_hash,
        )

    def create_user_with_password_hash(
        self, *, username: str, display_name: str, password_hash: str
    ) -> UserRecord:
        normalized_username = self._normalize_username(username)
        normalized_display_name = self._normalize_display_name(display_name)
        normalized_password_hash = self._normalize_password_hash(password_hash)
        if self.users.get_by_username(normalized_username) is not None:
            raise ConflictError(f"User {normalized_username} already exists.")
        user_id = f"user-{random_token(bytes_length=12)}"
        return self.users.create(
            user_id=user_id,
            username=normalized_username,
            display_name=normalized_display_name,
            password_hash=normalized_password_hash,
            is_active=True,
        )

    def create_or_update_user_with_password_hash(
        self, *, username: str, display_name: str, password_hash: str
    ) -> tuple[UserRecord, bool]:
        normalized_username = self._normalize_username(username)
        normalized_display_name = self._normalize_display_name(display_name)
        normalized_password_hash = self._normalize_password_hash(password_hash)
        existing = self.users.get_by_username(normalized_username)
        if existing is None:
            return (
                self.create_user_with_password_hash(
                    username=normalized_username,
                    display_name=normalized_display_name,
                    password_hash=normalized_password_hash,
                ),
                True,
            )
        updated = self.users.update(
            existing.user_id,
            display_name=normalized_display_name,
            password_hash=normalized_password_hash,
            is_active=True,
        )
        if existing.password_hash != normalized_password_hash:
            self.sessions.delete_for_user(existing.user_id)
        return updated, False

    def verify_password(self, password_hash: str, password: str) -> bool:
        try:
            return bool(self.password_hasher.verify(password_hash, password))
        except self._verify_mismatch_error:
            return False

    def authenticate_user(self, *, username: str, password: str) -> UserRecord:
        user = self.users.get_by_username(username.strip())
        if (
            user is None
            or not user.is_active
            or not self.verify_password(user.password_hash, password)
        ):
            raise AuthenticationError("Invalid username or password.")
        self.users.touch_last_login(user.user_id)
        refreshed = self.users.get(user.user_id)
        if refreshed is None:
            raise AuthenticationError("User disappeared during login.")
        return refreshed

    @staticmethod
    def _normalize_username(username: str) -> str:
        normalized_username = username.strip()
        if not normalized_username:
            raise ValidationError("Username must not be empty.")
        return normalized_username

    @staticmethod
    def _normalize_display_name(display_name: str) -> str:
        normalized_display_name = display_name.strip()
        if not normalized_display_name:
            raise ValidationError("Display name must not be empty.")
        return normalized_display_name

    def _normalize_password_hash(self, password_hash: str) -> str:
        normalized_password_hash = password_hash.strip()
        if not normalized_password_hash:
            raise ValidationError("Password hash must not be empty.")
        try:
            self.password_hasher.check_needs_rehash(normalized_password_hash)
        except self._invalid_hash_error as exc:
            raise ValidationError("Password hash is not a valid Argon2 hash.") from exc
        return normalized_password_hash

    def create_session(
        self, *, user: UserRecord, user_agent: str, remote_addr: str
    ) -> SessionBundle:
        session_id = f"session-{random_token(bytes_length=12)}"
        secret = random_token(bytes_length=24)
        created_at = utc_now_iso()
        expires_at = iso_after(seconds=DEFAULT_SESSION_LIFETIME_SECONDS)
        session = self.sessions.create(
            session_id=session_id,
            user_id=user.user_id,
            secret_hash=sha256_text(secret),
            created_at=created_at,
            expires_at=expires_at,
            user_agent=user_agent or "unknown",
            remote_addr=remote_addr or "unknown",
        )
        return SessionBundle(
            user=user, session=session, cookie_value=f"{session_id}.{secret}"
        )

    def revoke_session(self, cookie_value: str | None) -> None:
        parsed = self._parse_cookie(cookie_value)
        if parsed is None:
            return
        session_id, _ = parsed
        self.sessions.revoke(session_id)

    def resolve_session(self, cookie_value: str | None) -> SessionBundle | None:
        parsed = self._parse_cookie(cookie_value)
        if parsed is None:
            return None
        session_id, secret = parsed
        session = self.sessions.get(session_id)
        if session is None or session.revoked_at is not None:
            return None
        if session.secret_hash != sha256_text(secret):
            return None
        if session.expires_at <= utc_now_iso():
            self.sessions.revoke(session_id)
            return None
        user = self.users.get(session.user_id)
        if user is None or not user.is_active:
            return None
        self.sessions.touch(
            session_id, expires_at=iso_after(seconds=DEFAULT_SESSION_LIFETIME_SECONDS)
        )
        refreshed = self.sessions.get(session_id)
        if refreshed is None:
            return None
        return SessionBundle(
            user=user, session=refreshed, cookie_value=f"{session_id}.{secret}"
        )

    @staticmethod
    def _parse_cookie(cookie_value: str | None) -> tuple[str, str] | None:
        if cookie_value is None:
            return None
        if "." not in cookie_value:
            return None
        session_id, secret = cookie_value.split(".", 1)
        session_id = session_id.strip()
        secret = secret.strip()
        if not session_id or not secret:
            return None
        return session_id, secret
