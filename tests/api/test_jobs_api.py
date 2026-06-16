from __future__ import annotations

from pathlib import Path

from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.utils import utc_now_iso


def test_job_log_endpoint_returns_full_log_when_full_is_true(
    instance_root, server_config
) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    user = container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    created_at = utc_now_iso()
    log_path = container.instance_paths.job_logs_dir / "2026-01-01T00-00-00Z__job-download.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    job = container.jobs.create(
        job_id="job-download",
        job_type="start_project",
        requested_by_user_id=user.user_id,
        payload_json='{"project_id": "study-a"}',
        project_id="study-a",
        status="succeeded",
        result_json=None,
        log_path=str(log_path),
        created_at=created_at,
        started_at=created_at,
        finished_at=created_at,
        error_message=None,
    )
    Path(job.log_path).write_text("1\n2\n3\n", encoding="utf-8")

    with TestClient(app) as client:
        login = client.post(
            "/api/v1/session/login",
            json={"username": "admin", "password": "secret-pass"},
        )
        assert login.status_code == 200

        response = client.get(f"/api/v1/jobs/{job.job_id}/log", params={"full": "true"})

    assert response.status_code == 200
    assert response.text == "1\n2\n3\n"
