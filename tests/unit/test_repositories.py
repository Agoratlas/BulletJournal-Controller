from __future__ import annotations

import sqlite3

from bulletjournal_controller.storage import (
    JobRepository,
    ProjectRepository,
    SessionRepository,
    StateDB,
    UserRepository,
)


def test_repository_crud_behaves_deterministically(instance_root) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    users = UserRepository(db)
    sessions = SessionRepository(db)
    projects = ProjectRepository(db)
    jobs = JobRepository(db)

    user = users.create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    assert users.get_by_username("admin") == user

    session = sessions.create(
        session_id="session-1",
        user_id=user.user_id,
        secret_hash="secret",
        created_at="2026-03-18T12:00:00Z",
        expires_at="2026-03-19T12:00:00Z",
        user_agent="pytest",
        remote_addr="127.0.0.1",
    )
    assert sessions.get(session.session_id) == session

    project = projects.create(
        project_id="study-a",
        controller_status_token="project-token",
        status="creating",
        status_reason=None,
        root_path="/tmp/study-a",
        created_by_user_id=user.user_id,
        created_at="2026-03-18T12:00:00Z",
        updated_at="2026-03-18T12:00:00Z",
        last_graph_edit_at=None,
        last_notebook_edit_at=None,
        last_edit_at=None,
        last_run_finished_at=None,
        idle_shutdown_eligible_at=None,
        python_version="3.11",
        bulletjournal_version="0.1.0",
        custom_requirements_text="",
        lock_sha256=None,
        runtime_venv_size_bytes=None,
        install_status="pending",
        last_install_at=None,
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
        container_name=None,
        container_id=None,
        container_port=None,
        runtime_started_at=None,
        runtime_stopped_at=None,
    )
    assert projects.get(project.project_id) == project
    assert project.to_api().get("controller_status_token") is None

    job = jobs.create(
        job_id="job-1",
        project_id=project.project_id,
        job_type="create_project",
        status="queued",
        requested_by_user_id=user.user_id,
        payload_json="{}",
        result_json=None,
        log_path="/tmp/job-1.log",
        created_at="2026-03-18T12:00:00Z",
        started_at=None,
        finished_at=None,
        error_message=None,
    )
    assert jobs.get(job.job_id) == job
    assert jobs.has_active_mutation(project.project_id) is True

    completed = jobs.update(job.job_id, status="succeeded")
    assert completed.status == "succeeded"
    assert jobs.has_active_mutation(project.project_id) is False


def test_read_queries_use_read_connection(instance_root, monkeypatch) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    users = UserRepository(db)
    sessions = SessionRepository(db)
    projects = ProjectRepository(db)
    jobs = JobRepository(db)
    user = users.create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    session = sessions.create(
        session_id="session-1",
        user_id=user.user_id,
        secret_hash="secret",
        created_at="2026-03-18T12:00:00Z",
        expires_at="2026-03-19T12:00:00Z",
        user_agent="pytest",
        remote_addr="127.0.0.1",
    )
    project = projects.create(
        project_id="study-a",
        controller_status_token="project-token",
        status="creating",
        status_reason=None,
        root_path="/tmp/study-a",
        created_by_user_id=user.user_id,
        created_at="2026-03-18T12:00:00Z",
        updated_at="2026-03-18T12:00:00Z",
        last_graph_edit_at=None,
        last_notebook_edit_at=None,
        last_edit_at=None,
        last_run_finished_at=None,
        idle_shutdown_eligible_at=None,
        python_version="3.11",
        bulletjournal_version="0.1.0",
        custom_requirements_text="",
        lock_sha256=None,
        runtime_venv_size_bytes=None,
        install_status="pending",
        last_install_at=None,
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
        container_name=None,
        container_id=None,
        container_port=None,
        runtime_started_at=None,
        runtime_stopped_at=None,
    )
    job = jobs.create(
        job_id="job-1",
        project_id=project.project_id,
        job_type="create_project",
        status="queued",
        requested_by_user_id=user.user_id,
        payload_json="{}",
        result_json=None,
        log_path="/tmp/job-1.log",
        created_at="2026-03-18T12:00:00Z",
        started_at=None,
        finished_at=None,
        error_message=None,
    )

    def fail_transaction():
        raise AssertionError("read path should not open a write transaction")

    monkeypatch.setattr(db, "transaction", fail_transaction)

    assert users.get_by_username("admin") == user
    assert users.get(user.user_id) == user
    assert sessions.get(session.session_id) == session
    assert projects.get(project.project_id) == project
    assert projects.list_all() == [project]
    assert jobs.get(job.job_id) == job
    assert jobs.list_for_project(project.project_id) == [job]
    assert jobs.list_log_paths_for_project(project.project_id) == ["/tmp/job-1.log"]
    assert jobs.has_active_mutation(project.project_id) is True


def test_read_connection_does_not_commit(instance_root, monkeypatch) -> None:
    db = StateDB(instance_root / "metadata" / "state.db")
    commits = 0
    original_connect = sqlite3.connect

    class RecordingConnection:
        def __init__(self, connection: sqlite3.Connection):
            object.__setattr__(self, "_connection", connection)

        def commit(self):
            nonlocal commits
            commits += 1
            return self._connection.commit()

        def __setattr__(self, name: str, value):
            setattr(self._connection, name, value)

        def __getattr__(self, name: str):
            return getattr(self._connection, name)

    def recording_connect(*args, **kwargs):
        return RecordingConnection(original_connect(*args, **kwargs))

    monkeypatch.setattr(sqlite3, "connect", recording_connect)

    with db.read() as connection:
        connection.execute("SELECT 1").fetchone()

    assert commits == 0
