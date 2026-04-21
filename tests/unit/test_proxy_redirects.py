from __future__ import annotations

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


def test_proxy_redirects_to_controller_project_page_when_project_is_stopped(
    instance_root, server_config
) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    project = container.project_service.create_project(
        project_id="study-a",
        created_by_user_id=container.users.get_by_username("admin").user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=2048,
        gpu_enabled=False,
    )
    container.projects.update(
        project.project_id, status="stopped", install_status="ready"
    )

    with _auth_client(app) as client:
        response = client.get("/p/study-a/", follow_redirects=False)

    assert response.status_code == 307
    assert response.headers["location"] == "/projects/study-a"
