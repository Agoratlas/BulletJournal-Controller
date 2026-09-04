from __future__ import annotations

from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.api.deps import ServiceContainer


def _login(app, username: str) -> TestClient:
    client = TestClient(app)
    response = client.post(
        "/api/v1/session/login", json={"username": username, "password": "secret-pass"}
    )
    assert response.status_code == 200
    return client


def _project(container: ServiceContainer, owner_id: str, project_id: str):
    return container.project_service.create_project(
        project_id=project_id,
        created_by_user_id=owner_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.3.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=2048,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )


def test_project_roles_filter_visibility_and_enforce_admin_actions(
    instance_root, server_config
) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    owner = container.auth_service.create_user(
        username="owner", display_name="Owner", password="secret-pass"
    )
    editor = container.auth_service.create_user(
        username="editor", display_name="Editor", password="secret-pass"
    )
    container.auth_service.create_user(
        username="stranger", display_name="Stranger", password="secret-pass"
    )
    project = _project(container, owner.user_id, "private-project")
    container.role_grants.replace_for_project(
        project.project_id,
        [
            {"subject_kind": "user", "user_id": owner.user_id, "role": "project_admin"},
            {"subject_kind": "user", "user_id": editor.user_id, "role": "editor"},
        ],
    )

    with _login(app, "editor") as client:
        listed = client.get("/api/v1/projects")
        assert [item["project_id"] for item in listed.json()] == [project.project_id]
        detail = client.get(f"/api/v1/projects/{project.project_id}")
        assert detail.status_code == 200
        assert detail.json()["effective_role"] == "editor"
        assert client.post(
            f"/api/v1/projects/{project.project_id}/start",
            headers={"origin": "http://testserver"},
        ).status_code in {202, 409}
        assert client.post(
            f"/api/v1/projects/{project.project_id}/limits",
            headers={"origin": "http://testserver"},
            json={"cpu_limit_millis": 1000, "memory_limit_bytes": 2048, "disk_soft_limit_bytes": None, "gpu_enabled": False},
        ).status_code == 404

    with _login(app, "stranger") as client:
        assert client.get("/api/v1/projects").json() == []
        assert client.get(f"/api/v1/projects/{project.project_id}").status_code == 404
        assert client.get(f"/p/{project.project_id}/", follow_redirects=False).status_code == 404


def test_all_users_is_persisted_and_server_admin_bypasses_grants(
    instance_root, server_config
) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    owner = container.auth_service.create_user(
        username="owner", display_name="Owner", password="secret-pass"
    )
    container.auth_service.create_user(
        username="root", display_name="Root", password="secret-pass", is_server_admin=True
    )
    project = _project(container, owner.user_id, "shared-project")
    container.role_grants.replace_for_project(
        project.project_id,
        [
            {"subject_kind": "user", "user_id": owner.user_id, "role": "project_admin"},
            {"subject_kind": "all_users", "user_id": None, "role": "editor"},
        ],
    )
    future_user = container.auth_service.create_user(
        username="future", display_name="Future", password="secret-pass"
    )

    with _login(app, "future") as client:
        detail = client.get(f"/api/v1/projects/{project.project_id}")
        assert detail.status_code == 200
        assert detail.json()["roles"]["editors"]["all_users"] is True

    with _login(app, "root") as client:
        detail = client.get(f"/api/v1/projects/{project.project_id}")
        assert detail.json()["effective_role"] == "project_admin"
        session = client.get("/api/v1/session/current")
        assert session.json()["user"]["is_server_admin"] is True
        assignable = client.get("/api/v1/users/assignable")
        assert all("is_server_admin" not in user for user in assignable.json())

    assert future_user.user_id not in {
        grant.user_id for grant in container.role_grants.list_for_project(project.project_id)
    }
