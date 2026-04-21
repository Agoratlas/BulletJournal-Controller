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


def test_project_create_list_detail_update_delete(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    with _auth_client(app) as client:
        response = client.post(
            "/api/v1/projects",
            headers={"origin": "http://testserver"},
            json={
                "project_id": "study-a",
                "python_version": "3.11",
                "custom_requirements_text": "bulletjournal-editor==0.3.0\nalpha\n",
                "cpu_limit_millis": 2000,
                "memory_limit_bytes": 4096,
                "gpu_enabled": False,
            },
        )
        assert response.status_code == 201

        projects = client.get("/api/v1/projects")
        assert projects.status_code == 200
        assert len(projects.json()) == 1

        detail = client.get("/api/v1/projects/study-a")
        assert detail.status_code == 200
        assert "controller_status_token" not in detail.json()
        assert detail.json()["bulletjournal_version"] == "0.3.0"

        updated = client.patch(
            "/api/v1/projects/study-a",
            headers={"origin": "http://testserver"},
            json={
                "cpu_limit_millis": 3000,
                "memory_limit_bytes": 8192,
                "gpu_enabled": False,
            },
        )
        assert updated.status_code == 200
        assert updated.json()["limits"]["cpu_limit_millis"] == 3000

        blocked_delete = client.delete(
            "/api/v1/projects/study-a", headers={"origin": "http://testserver"}
        )
        assert blocked_delete.status_code == 409

        admin = container.users.get_by_username("admin")
        assert admin is not None
        project = container.project_service.create_project(
            project_id="study-b",
            created_by_user_id=admin.user_id,
            python_version="3.11",
            custom_requirements_text="bulletjournal-editor==0.1.0\n",
            cpu_limit_millis=1000,
            memory_limit_bytes=2048,
            gpu_enabled=False,
        )
        container.projects.update(
            project.project_id, status="stopped", install_status="ready"
        )
        deleted = client.delete(
            "/api/v1/projects/study-b", headers={"origin": "http://testserver"}
        )
        assert deleted.status_code == 202
        assert deleted.json()["job"]["job_type"] == "delete_project"


def test_invalid_request_shape_returns_422(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    with _auth_client(app) as client:
        response = client.post(
            "/api/v1/projects",
            headers={"origin": "http://testserver"},
            json={"project_id": "bad", "unexpected": True},
        )
        assert response.status_code == 422


def test_project_create_requires_bulletjournal_dependency_line(
    instance_root, server_config
) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    with _auth_client(app) as client:
        response = client.post(
            "/api/v1/projects",
            headers={"origin": "http://testserver"},
            json={
                "project_id": "study-a",
                "python_version": "3.11",
                "custom_requirements_text": "alpha\n",
                "cpu_limit_millis": 2000,
                "memory_limit_bytes": 4096,
                "gpu_enabled": False,
            },
        )

        assert response.status_code == 422
        assert "custom_requirements_text" in response.json()["detail"]
