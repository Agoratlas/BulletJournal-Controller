from __future__ import annotations

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
