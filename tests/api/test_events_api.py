from __future__ import annotations

import asyncio

from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.api.deps import ServiceContainer


def _auth_client(app):
    client = TestClient(app)
    response = client.post(
        "/api/v1/session/login", json={"username": "admin", "password": "secret-pass"}
    )
    assert response.status_code == 200
    return client


def test_job_events_stream_emits_job_updates(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    user = container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    project = container.project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.3.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=2048,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    container.jobs.create(
        job_id="job-1",
        project_id=project.project_id,
        job_type="start_project",
        status="running",
        requested_by_user_id=user.user_id,
        payload_json="{}",
        result_json=None,
        log_path=str(container.instance_paths.job_logs_dir / "job-1.log"),
        created_at="2026-01-01T00:00:00Z",
        started_at=None,
        finished_at=None,
        error_message=None,
    )

    class StubBroker:
        def __init__(self) -> None:
            self.unsubscribed = False

        async def subscribe(self):
            queue: asyncio.Queue[dict[str, str] | None] = asyncio.Queue()
            await queue.put({"job_id": "job-1", "status": "running"})
            await queue.put({"type": "job.log", "job_id": "job-1", "line": "2026-01-01T00:00:00Z hello"})
            await queue.put(None)
            return queue

        async def unsubscribe(self, subscriber) -> None:
            _ = subscriber
            self.unsubscribed = True

        def close(self) -> None:
            return

    broker = StubBroker()
    container.job_event_broker = broker

    with _auth_client(app) as client:
        with client.stream("GET", "/api/v1/events/jobs") as response:
            assert response.status_code == 200

            chunks = []
            for chunk in response.iter_text():
                chunks.append(chunk)
                if "event: job.log" in chunk and '"line":"2026-01-01T00:00:00Z hello"' in chunk:
                    break

            payload = "".join(chunks)
            assert "event: job.updated" in payload
            assert 'data: {"job_id":"job-1","status":"running"}' in payload
            assert "event: job.log" in payload
            assert 'data: {"job_id":"job-1","line":"2026-01-01T00:00:00Z hello"}' in payload
    assert broker.unsubscribed is True
