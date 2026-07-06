from __future__ import annotations

import json
import zipfile

from bulletjournal.storage.project_fs import init_project_root
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
                "disk_soft_limit_bytes": 8192,
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
                "disk_soft_limit_bytes": 16384,
                "gpu_enabled": False,
            },
        )
        assert updated.status_code == 200
        assert updated.json()["limits"]["cpu_limit_millis"] == 3000
        assert updated.json()["limits"]["disk_soft_limit_bytes"] == 16384

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
            disk_soft_limit_bytes=None,
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


def test_project_lockfile_download(instance_root, server_config) -> None:
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
    lockfile_path = container.instance_paths.project_paths(project.project_id).uv_lock_path
    lockfile_path.write_text("version = 1\n", encoding="utf-8")

    with _auth_client(app) as client:
        response = client.get(f"/api/v1/projects/{project.project_id}/lockfile")

    assert response.status_code == 200
    assert response.text == "version = 1\n"
    assert 'attachment; filename="study-a__uv.lock"' in response.headers["content-disposition"]


def test_project_lockfile_download_returns_404_when_missing(
    instance_root, server_config
) -> None:
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
    lockfile_path = container.instance_paths.project_paths(project.project_id).uv_lock_path
    if lockfile_path.exists():
        lockfile_path.unlink()

    with _auth_client(app) as client:
        response = client.get(f"/api/v1/projects/{project.project_id}/lockfile")

    assert response.status_code == 404


def test_project_export_download_supports_modes(instance_root, server_config) -> None:
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
    project_root = container.instance_paths.project_paths(project.project_id).root
    init_project_root(project_root, project_id="study-a")
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")
    (project_root / "notebooks" / "alpha.py").write_text("print('ok')\n", encoding="utf-8")
    (project_root / "objects" / "artifact.bin").write_bytes(b"artifact")
    (
        project_root / "checkpoints" / "cp-1" / "notebooks" / "snap.py"
    ).parent.mkdir(parents=True, exist_ok=True)
    (project_root / "checkpoints" / "cp-1" / "notebooks" / "snap.py").write_text(
        "print('cp')\n", encoding="utf-8"
    )

    with _auth_client(app) as client:
        response = client.get(f"/api/v1/projects/{project.project_id}/export?mode=code_and_data")

    assert response.status_code == 200
    assert response.headers["content-type"].startswith("application/zip")
    assert 'attachment; filename="bulletjournal_export_study-a_code_and_data.zip"' in response.headers[
        "content-disposition"
    ]
    archive_path = (
        container.instance_paths.exports_dir
        / "bulletjournal_export_study-a_code_and_data.zip"
    )
    assert archive_path.is_file()
    with zipfile.ZipFile(archive_path, "r") as archive:
        names = set(archive.namelist())

    assert "export_manifest.json" not in names
    assert "objects/artifact.bin" in names
    assert not any(
        name.startswith("checkpoints/") and name != "checkpoints/" for name in names
    )


def test_project_export_download_rejects_unknown_mode(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    user = container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    container.project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.3.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=2048,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )

    with _auth_client(app) as client:
        response = client.get("/api/v1/projects/study-a/export?mode=invalid")

    assert response.status_code == 422


def test_system_config_reports_additional_mounts(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    runtime_root = container.instance_paths.local_config_dir
    mount_source = runtime_root / "mounts" / "service-account.json"
    mount_source.parent.mkdir(parents=True, exist_ok=True)
    mount_source.write_text("{}\n", encoding="utf-8")
    container.instance_paths.local_runtime_json_path.write_text(
        json.dumps(
            {
                "schema_version": 2,
                "runtime_image_name": "bulletjournal-runtime:local",
                "runtime_dockerfile": "Dockerfile",
                "runtime_build_context": ".",
                "default_dependencies_file": "default-dependencies.txt",
                "env_file": ".env",
                "ssh_dir": "ssh",
                "additional_mounts": [
                    {
                        "source": "mounts/service-account.json",
                        "target": "/opt/service-account.json",
                        "read_only": True,
                    }
                ],
            }
        ),
        encoding="utf-8",
    )

    with _auth_client(app) as client:
        response = client.get("/api/v1/system/config")

    assert response.status_code == 200
    payload = response.json()
    assert payload["ssh_dir"] == str(container.instance_paths.local_ssh_dir)
    assert payload["additional_mounts"] == [
        {
            "source": str(mount_source.resolve()),
            "target": "/opt/service-account.json",
            "read_only": True,
        }
    ]


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
                "disk_soft_limit_bytes": 8192,
                "gpu_enabled": False,
            },
        )

        assert response.status_code == 422
        assert "custom_requirements_text" in response.json()["detail"]
