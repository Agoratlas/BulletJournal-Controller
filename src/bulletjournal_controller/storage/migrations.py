from __future__ import annotations


MIGRATIONS: list[tuple[str, str]] = [
    (
        '001_initial',
        """
        CREATE TABLE IF NOT EXISTS schema_migrations (
            name TEXT PRIMARY KEY,
            applied_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS users (
            user_id TEXT PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            display_name TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            is_active INTEGER NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            last_login_at TEXT
        );

        CREATE TABLE IF NOT EXISTS sessions (
            session_id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            secret_hash TEXT NOT NULL,
            created_at TEXT NOT NULL,
            expires_at TEXT NOT NULL,
            revoked_at TEXT,
            last_seen_at TEXT NOT NULL,
            user_agent TEXT NOT NULL,
            remote_addr TEXT NOT NULL,
            FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS projects (
            project_id TEXT PRIMARY KEY,
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
            cpu_limit_millis INTEGER NOT NULL,
            memory_limit_bytes INTEGER NOT NULL,
            gpu_enabled INTEGER NOT NULL,
            container_name TEXT,
            container_id TEXT,
            container_port INTEGER,
            runtime_started_at TEXT,
            runtime_stopped_at TEXT,
            FOREIGN KEY(created_by_user_id) REFERENCES users(user_id)
        );

        CREATE TABLE IF NOT EXISTS jobs (
            job_id TEXT PRIMARY KEY,
            project_id TEXT,
            job_type TEXT NOT NULL,
            status TEXT NOT NULL,
            requested_by_user_id TEXT NOT NULL,
            payload_json TEXT NOT NULL,
            result_json TEXT,
            log_path TEXT NOT NULL,
            created_at TEXT NOT NULL,
            started_at TEXT,
            finished_at TEXT,
            error_message TEXT,
            FOREIGN KEY(project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
            FOREIGN KEY(requested_by_user_id) REFERENCES users(user_id)
        );

        CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
        CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);
        CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
        CREATE INDEX IF NOT EXISTS idx_jobs_project_id ON jobs(project_id);
        CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
        """,
    ),
]
