from __future__ import annotations

import sqlite3

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
