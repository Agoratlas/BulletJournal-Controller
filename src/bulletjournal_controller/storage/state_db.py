from __future__ import annotations

import sqlite3
from collections.abc import Iterator
from contextlib import contextmanager
from pathlib import Path

from bulletjournal_controller.config import DB_TIMEOUT_SECONDS
from bulletjournal_controller.domain.enums import JobStatus
from bulletjournal_controller.storage.migrations import MIGRATIONS
from bulletjournal_controller.utils import utc_now_iso


class StateDB:
    def __init__(self, path: Path):
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._initialize()

    def connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.path, timeout=DB_TIMEOUT_SECONDS)
        connection.row_factory = sqlite3.Row
        connection.execute(f"PRAGMA busy_timeout = {int(DB_TIMEOUT_SECONDS * 1000)}")
        connection.execute("PRAGMA foreign_keys = ON")
        return connection

    @contextmanager
    def read(self) -> Iterator[sqlite3.Connection]:
        connection = self.connect()
        try:
            yield connection
        finally:
            connection.close()

    @contextmanager
    def transaction(self) -> Iterator[sqlite3.Connection]:
        connection = self.connect()
        try:
            yield connection
            connection.commit()
        except Exception:
            connection.rollback()
            raise
        finally:
            connection.close()

    def _initialize(self) -> None:
        with self.connect() as connection:
            connection.execute("PRAGMA journal_mode = WAL")
            connection.execute("PRAGMA synchronous = NORMAL")
            table_exists = (
                connection.execute(
                    "SELECT 1 FROM sqlite_master WHERE type = ? AND name = ?",
                    ("table", "schema_migrations"),
                ).fetchone()
                is not None
            )
            for name, sql in MIGRATIONS:
                if table_exists:
                    applied = connection.execute(
                        "SELECT 1 FROM schema_migrations WHERE name = ?",
                        (name,),
                    ).fetchone()
                    if applied is not None:
                        continue
                if name == "009_project_rbac" and not self._table_exists(connection, "users"):
                    connection.execute(
                        "INSERT OR IGNORE INTO schema_migrations (name, applied_at) VALUES (?, ?)",
                        (name, utc_now_iso()),
                    )
                    continue
                try:
                    connection.executescript(sql)
                except sqlite3.OperationalError as exc:
                    if "duplicate column name" not in str(exc).lower():
                        raise
                if name == "009_project_rbac" and self._table_exists(connection, "projects") and self._table_exists(connection, "users"):
                    connection.execute(
                        "INSERT OR IGNORE INTO project_role_grants (project_id, subject_kind, user_id, role, created_at, updated_at) "
                        "SELECT p.project_id, 'user', p.created_by_user_id, 'project_admin', p.created_at, p.updated_at "
                        "FROM projects p JOIN users u ON u.user_id = p.created_by_user_id "
                        "WHERE p.created_by_user_id != 'user-system'"
                    )
                    connection.execute(
                        "INSERT OR IGNORE INTO project_role_grants (project_id, subject_kind, user_id, role, created_at, updated_at) "
                        "SELECT project_id, 'all_users', NULL, 'editor', created_at, updated_at FROM projects"
                    )
                connection.execute(
                    "INSERT OR IGNORE INTO schema_migrations (name, applied_at) VALUES (?, ?)",
                    (name, utc_now_iso()),
                )
                table_exists = True

    @staticmethod
    def _table_exists(connection: sqlite3.Connection, name: str) -> bool:
        return connection.execute(
            "SELECT 1 FROM sqlite_master WHERE type = ? AND name = ?", ("table", name)
        ).fetchone() is not None

    def abort_inflight_jobs(self) -> None:
        with self.transaction() as connection:
            connection.execute(
                "UPDATE jobs SET status = ?, finished_at = ?, error_message = ? WHERE status IN (?, ?)",
                (
                    JobStatus.ABORTED_ON_RESTART.value,
                    utc_now_iso(),
                    "Controller restarted before job completion.",
                    JobStatus.QUEUED.value,
                    JobStatus.RUNNING.value,
                ),
            )
