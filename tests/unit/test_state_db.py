from __future__ import annotations

import sqlite3
from pathlib import Path

from bulletjournal_controller.storage.state_db import StateDB
from bulletjournal_controller.utils import utc_now_iso


def test_existing_projects_table_gains_runtime_venv_size_column(tmp_path) -> None:
    db_path = tmp_path / "state.db"
    connection = sqlite3.connect(db_path)
    try:
        connection.executescript(
            """
            CREATE TABLE schema_migrations (
                name TEXT PRIMARY KEY,
                applied_at TEXT NOT NULL
            );

            CREATE TABLE projects (
                project_id TEXT PRIMARY KEY,
                controller_status_token TEXT NOT NULL,
                status TEXT NOT NULL,
                status_reason TEXT,
                root_path TEXT UNIQUE NOT NULL,
                created_by_user_id TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                last_edit_at TEXT,
                last_run_finished_at TEXT,
                idle_shutdown_eligible_at TEXT,
                python_version TEXT NOT NULL,
                bulletjournal_version TEXT NOT NULL,
                custom_requirements_text TEXT NOT NULL,
                lock_sha256 TEXT,
                install_status TEXT NOT NULL,
                last_install_at TEXT,
                cpu_limit_millis INTEGER,
                memory_limit_bytes INTEGER,
                gpu_enabled INTEGER NOT NULL,
                container_name TEXT,
                container_id TEXT,
                container_port INTEGER,
                runtime_started_at TEXT,
                runtime_stopped_at TEXT,
                last_graph_edit_at TEXT,
                last_notebook_edit_at TEXT
            );
            """
        )
        for name in [
            "001_initial",
            "002_project_activity_columns",
            "003_jobs_without_project_fk",
            "004_project_controller_status_token",
            "005_nullable_project_limits",
        ]:
            connection.execute(
                "INSERT INTO schema_migrations (name, applied_at) VALUES (?, ?)",
                (name, utc_now_iso()),
            )
        connection.commit()
    finally:
        connection.close()

    StateDB(db_path)

    with sqlite3.connect(db_path) as connection:
        columns = {
            row[1]
            for row in connection.execute("PRAGMA table_info(projects)").fetchall()
        }

    assert "runtime_venv_size_bytes" in columns


def test_existing_projects_table_gains_runtime_uv_cache_size_column(tmp_path) -> None:
    db = StateDB(tmp_path / "state.db")
    now = utc_now_iso()
    with db.transaction() as connection:
        connection.execute(
            "INSERT INTO users (user_id, username, display_name, password_hash, is_active, created_at, updated_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?)",
            ("user-1", "admin", "Admin", "hash", 1, now, now),
        )
        connection.execute(
            "INSERT INTO projects (project_id, controller_status_token, status, root_path, created_by_user_id, "
            "created_at, updated_at, python_version, bulletjournal_version, custom_requirements_text, "
            "runtime_venv_size_bytes, install_status, gpu_enabled) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (
                "study-a",
                "token",
                "stopped",
                str(tmp_path / "study-a"),
                "user-1",
                now,
                now,
                "3.11",
                "0.1.0",
                "",
                17,
                "ready",
                0,
            ),
        )
        connection.execute("DELETE FROM schema_migrations WHERE name = ?", ("008_project_runtime_uv_cache_size_bytes",))

    StateDB(db.path)

    with db.read() as connection:
        stored_sizes = connection.execute(
            "SELECT runtime_venv_size_bytes, runtime_uv_cache_size_bytes FROM projects WHERE project_id = ?",
            ("study-a",),
        ).fetchone()

    assert tuple(stored_sizes) == (17, None)


def test_connect_does_not_reapply_journal_mode_after_initialization(monkeypatch, tmp_path) -> None:
    recorded_statements: list[str] = []
    original_connect = sqlite3.connect

    class RecordingConnection:
        def __init__(self, connection: sqlite3.Connection):
            object.__setattr__(self, "_connection", connection)

        def execute(self, sql: str, parameters=()):
            recorded_statements.append(sql)
            return self._connection.execute(sql, parameters)

        def __setattr__(self, name: str, value):
            setattr(self._connection, name, value)

        def __getattr__(self, name: str):
            return getattr(self._connection, name)

        def __enter__(self):
            self._connection.__enter__()
            return self

        def __exit__(self, exc_type, exc, tb):
            return self._connection.__exit__(exc_type, exc, tb)

    def recording_connect(path: str | Path, *args, **kwargs):
        return RecordingConnection(original_connect(path, *args, **kwargs))

    monkeypatch.setattr(sqlite3, "connect", recording_connect)

    db = StateDB(tmp_path / "state.db")
    recorded_after_init = list(recorded_statements)

    with db.read() as connection:
        connection.execute("SELECT 1").fetchone()

    assert "PRAGMA journal_mode = WAL" in recorded_after_init
    assert recorded_statements.count("PRAGMA journal_mode = WAL") == 1
    assert recorded_statements[-1] == "SELECT 1"
