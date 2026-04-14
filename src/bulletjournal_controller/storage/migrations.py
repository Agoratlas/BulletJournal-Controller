from __future__ import annotations


MIGRATIONS: list[tuple[str, str]] = [
    (
        "001_initial",
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
            runtime_venv_size_bytes INTEGER,
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
    (
        "002_project_activity_columns",
        """
        ALTER TABLE projects ADD COLUMN last_graph_edit_at TEXT;
        ALTER TABLE projects ADD COLUMN last_notebook_edit_at TEXT;
        """,
    ),
    (
        "003_jobs_without_project_fk",
        """
        CREATE TABLE jobs_new (
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
            FOREIGN KEY(requested_by_user_id) REFERENCES users(user_id)
        );

        INSERT INTO jobs_new (
            job_id, project_id, job_type, status, requested_by_user_id, payload_json, result_json, log_path,
            created_at, started_at, finished_at, error_message
        )
        SELECT
            job_id, project_id, job_type, status, requested_by_user_id, payload_json, result_json, log_path,
            created_at, started_at, finished_at, error_message
        FROM jobs;

        DROP TABLE jobs;
        ALTER TABLE jobs_new RENAME TO jobs;

        CREATE INDEX IF NOT EXISTS idx_jobs_project_id ON jobs(project_id);
        CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
        """,
    ),
    (
        "004_project_controller_status_token",
        """
        ALTER TABLE projects ADD COLUMN controller_status_token TEXT;
        UPDATE projects
        SET controller_status_token = hex(randomblob(32))
        WHERE controller_status_token IS NULL OR controller_status_token = '';
        """,
    ),
    (
        "005_nullable_project_limits",
        """
        CREATE TABLE projects_new (
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
            runtime_venv_size_bytes INTEGER,
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
            last_notebook_edit_at TEXT,
            FOREIGN KEY(created_by_user_id) REFERENCES users(user_id)
        );

        INSERT INTO projects_new (
            project_id, controller_status_token, status, status_reason, root_path, created_by_user_id,
            created_at, updated_at, last_edit_at, last_run_finished_at, idle_shutdown_eligible_at,
            python_version, bulletjournal_version, custom_requirements_text, lock_sha256, runtime_venv_size_bytes, install_status,
            last_install_at, cpu_limit_millis, memory_limit_bytes, gpu_enabled, container_name, container_id,
            container_port, runtime_started_at, runtime_stopped_at, last_graph_edit_at, last_notebook_edit_at
        )
        SELECT
            project_id, controller_status_token, status, status_reason, root_path, created_by_user_id,
            created_at, updated_at, last_edit_at, last_run_finished_at, idle_shutdown_eligible_at,
            python_version, bulletjournal_version, custom_requirements_text, lock_sha256, NULL, install_status,
            last_install_at, cpu_limit_millis, memory_limit_bytes, gpu_enabled, container_name, container_id,
            container_port, runtime_started_at, runtime_stopped_at, last_graph_edit_at, last_notebook_edit_at
        FROM projects;

        DROP TABLE projects;
        ALTER TABLE projects_new RENAME TO projects;

        CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
        """,
    ),
    (
        "006_project_runtime_venv_size_bytes",
        """
        ALTER TABLE projects ADD COLUMN runtime_venv_size_bytes INTEGER;
        """,
    ),
]
