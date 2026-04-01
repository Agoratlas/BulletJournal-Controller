from __future__ import annotations

import sqlite3
from typing import Any, Generic, TypeVar

from bulletjournal_controller.domain.enums import JobStatus
from bulletjournal_controller.domain.errors import NotFoundError
from bulletjournal_controller.domain.models import (
    JobRecord,
    ProjectRecord,
    SessionRecord,
    UserRecord,
)
from bulletjournal_controller.storage.state_db import StateDB
from bulletjournal_controller.utils import utc_now_iso


T = TypeVar("T")


class BaseRepository(Generic[T]):
    def __init__(self, db: StateDB, model_type: type[T]):
        self.db = db
        self.model_type = model_type

    def _row_to_model(self, row: sqlite3.Row | None) -> T | None:
        if row is None:
            return None
        data = dict(row)
        for key, value in list(data.items()):
            if isinstance(value, int) and key.startswith("is_"):
                data[key] = bool(value)
            if key == "gpu_enabled":
                data[key] = bool(value)
        return self.model_type(**data)


class UserRepository(BaseRepository[UserRecord]):
    def __init__(self, db: StateDB):
        super().__init__(db, UserRecord)

    def create(
        self,
        *,
        user_id: str,
        username: str,
        display_name: str,
        password_hash: str,
        is_active: bool,
    ) -> UserRecord:
        now = utc_now_iso()
        with self.db.transaction() as connection:
            connection.execute(
                "INSERT INTO users (user_id, username, display_name, password_hash, is_active, created_at, updated_at, last_login_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, NULL)",
                (
                    user_id,
                    username,
                    display_name,
                    password_hash,
                    int(is_active),
                    now,
                    now,
                ),
            )
            row = connection.execute(
                "SELECT * FROM users WHERE user_id = ?", (user_id,)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def get_by_username(self, username: str) -> UserRecord | None:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT * FROM users WHERE username = ?", (username,)
            ).fetchone()
        return self._row_to_model(row)

    def get(self, user_id: str) -> UserRecord | None:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT * FROM users WHERE user_id = ?", (user_id,)
            ).fetchone()
        return self._row_to_model(row)

    def update(
        self, user_id: str, *, display_name: str, password_hash: str, is_active: bool
    ) -> UserRecord:
        now = utc_now_iso()
        with self.db.transaction() as connection:
            connection.execute(
                "UPDATE users SET display_name = ?, password_hash = ?, is_active = ?, updated_at = ? WHERE user_id = ?",
                (display_name, password_hash, int(is_active), now, user_id),
            )
            row = connection.execute(
                "SELECT * FROM users WHERE user_id = ?", (user_id,)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def touch_last_login(self, user_id: str) -> None:
        now = utc_now_iso()
        with self.db.transaction() as connection:
            connection.execute(
                "UPDATE users SET last_login_at = ?, updated_at = ? WHERE user_id = ?",
                (now, now, user_id),
            )


class SessionRepository(BaseRepository[SessionRecord]):
    def __init__(self, db: StateDB):
        super().__init__(db, SessionRecord)

    def create(
        self,
        *,
        session_id: str,
        user_id: str,
        secret_hash: str,
        created_at: str,
        expires_at: str,
        user_agent: str,
        remote_addr: str,
    ) -> SessionRecord:
        with self.db.transaction() as connection:
            connection.execute(
                "INSERT INTO sessions (session_id, user_id, secret_hash, created_at, expires_at, revoked_at, last_seen_at, user_agent, remote_addr) "
                "VALUES (?, ?, ?, ?, ?, NULL, ?, ?, ?)",
                (
                    session_id,
                    user_id,
                    secret_hash,
                    created_at,
                    expires_at,
                    created_at,
                    user_agent,
                    remote_addr,
                ),
            )
            row = connection.execute(
                "SELECT * FROM sessions WHERE session_id = ?", (session_id,)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def get(self, session_id: str) -> SessionRecord | None:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT * FROM sessions WHERE session_id = ?", (session_id,)
            ).fetchone()
        return self._row_to_model(row)

    def touch(self, session_id: str, *, expires_at: str) -> None:
        now = utc_now_iso()
        with self.db.transaction() as connection:
            connection.execute(
                "UPDATE sessions SET last_seen_at = ?, expires_at = ? WHERE session_id = ? AND revoked_at IS NULL",
                (now, expires_at, session_id),
            )

    def revoke(self, session_id: str) -> None:
        with self.db.transaction() as connection:
            connection.execute(
                "UPDATE sessions SET revoked_at = ? WHERE session_id = ?",
                (utc_now_iso(), session_id),
            )

    def delete_for_user(self, user_id: str) -> None:
        with self.db.transaction() as connection:
            connection.execute("DELETE FROM sessions WHERE user_id = ?", (user_id,))


class ProjectRepository(BaseRepository[ProjectRecord]):
    def __init__(self, db: StateDB):
        super().__init__(db, ProjectRecord)

    def create(self, **data: Any) -> ProjectRecord:
        columns = ", ".join(data.keys())
        placeholders = ", ".join("?" for _ in data)
        with self.db.transaction() as connection:
            connection.execute(
                f"INSERT INTO projects ({columns}) VALUES ({placeholders})",
                tuple(self._coerce_write_value(value) for value in data.values()),
            )
            row = connection.execute(
                "SELECT * FROM projects WHERE project_id = ?", (data["project_id"],)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def get(self, project_id: str) -> ProjectRecord | None:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT * FROM projects WHERE project_id = ?", (project_id,)
            ).fetchone()
        return self._row_to_model(row)

    def require(self, project_id: str) -> ProjectRecord:
        project = self.get(project_id)
        if project is None:
            raise NotFoundError(f"Project {project_id} was not found.")
        return project

    def list_all(self) -> list[ProjectRecord]:
        with self.db.transaction() as connection:
            rows = connection.execute(
                "SELECT * FROM projects ORDER BY project_id"
            ).fetchall()
        return [self._row_to_model(row) for row in rows if row is not None]  # type: ignore[list-item]

    def update(self, project_id: str, **changes: Any) -> ProjectRecord:
        changes = dict(changes)
        changes["updated_at"] = utc_now_iso()
        assignments = ", ".join(f"{key} = ?" for key in changes)
        params = [self._coerce_write_value(value) for value in changes.values()] + [
            project_id
        ]
        with self.db.transaction() as connection:
            connection.execute(
                f"UPDATE projects SET {assignments} WHERE project_id = ?", params
            )
            row = connection.execute(
                "SELECT * FROM projects WHERE project_id = ?", (project_id,)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def delete(self, project_id: str) -> None:
        with self.db.transaction() as connection:
            connection.execute(
                "DELETE FROM projects WHERE project_id = ?", (project_id,)
            )

    def clear_runtime(self, project_id: str) -> ProjectRecord:
        return self.update(
            project_id,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_stopped_at=utc_now_iso(),
        )

    @staticmethod
    def _coerce_write_value(value: Any) -> Any:
        if isinstance(value, bool):
            return int(value)
        return value


class JobRepository(BaseRepository[JobRecord]):
    def __init__(self, db: StateDB):
        super().__init__(db, JobRecord)

    def create(self, **data: Any) -> JobRecord:
        columns = ", ".join(data.keys())
        placeholders = ", ".join("?" for _ in data)
        with self.db.transaction() as connection:
            connection.execute(
                f"INSERT INTO jobs ({columns}) VALUES ({placeholders})",
                tuple(data.values()),
            )
            row = connection.execute(
                "SELECT * FROM jobs WHERE job_id = ?", (data["job_id"],)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def get(self, job_id: str) -> JobRecord | None:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT * FROM jobs WHERE job_id = ?", (job_id,)
            ).fetchone()
        return self._row_to_model(row)

    def update(self, job_id: str, **changes: Any) -> JobRecord:
        assignments = ", ".join(f"{key} = ?" for key in changes)
        params = list(changes.values()) + [job_id]
        with self.db.transaction() as connection:
            connection.execute(
                f"UPDATE jobs SET {assignments} WHERE job_id = ?", params
            )
            row = connection.execute(
                "SELECT * FROM jobs WHERE job_id = ?", (job_id,)
            ).fetchone()
        return self._row_to_model(row)  # type: ignore[return-value]

    def list_for_project(self, project_id: str, *, limit: int = 20) -> list[JobRecord]:
        with self.db.transaction() as connection:
            rows = connection.execute(
                "SELECT * FROM jobs WHERE project_id = ? ORDER BY created_at DESC, job_id DESC LIMIT ?",
                (project_id, limit),
            ).fetchall()
        return [self._row_to_model(row) for row in rows if row is not None]  # type: ignore[list-item]

    def has_active_mutation(self, project_id: str) -> bool:
        with self.db.transaction() as connection:
            row = connection.execute(
                "SELECT 1 FROM jobs WHERE project_id = ? AND status IN (?, ?) LIMIT 1",
                (project_id, JobStatus.QUEUED.value, JobStatus.RUNNING.value),
            ).fetchone()
        return row is not None

    def delete_for_project(self, project_id: str) -> None:
        with self.db.transaction() as connection:
            connection.execute("DELETE FROM jobs WHERE project_id = ?", (project_id,))
