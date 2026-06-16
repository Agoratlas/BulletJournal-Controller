from __future__ import annotations

import zipfile

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import require_instance_root


def test_export_import_round_trip(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret="test-secret", cookie_secure=False),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    project = container.project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    (project_root / "metadata").mkdir(parents=True, exist_ok=True)
    (project_root / "graph").mkdir(parents=True, exist_ok=True)
    (project_root / "objects").mkdir(parents=True, exist_ok=True)
    (project_root / "dashboards").mkdir(parents=True, exist_ok=True)
    (project_root / "checkpoints").mkdir(parents=True, exist_ok=True)
    (project_root / "temp" / "uploads").mkdir(parents=True, exist_ok=True)
    (project_root / "temp" / "execution_logs").mkdir(parents=True, exist_ok=True)
    (project_root / "temp" / "worker").mkdir(parents=True, exist_ok=True)
    (project_root / "metadata" / "project.json").write_text(
        '{"schema_version": 2, "project_id": "study-a", "created_at": "2026-06-04T00:00:00Z"}\n',
        encoding="utf-8",
    )
    (project_root / "metadata" / "state.db").write_bytes(b"")
    (project_root / "graph" / "meta.json").write_text(
        '{"schema_version": 1, "project_id": "study-a", "graph_version": 1, "updated_at": "2026-06-04T00:00:00Z"}\n',
        encoding="utf-8",
    )
    (project_root / "graph" / "nodes.json").write_text("[]\n", encoding="utf-8")
    (project_root / "graph" / "edges.json").write_text("[]\n", encoding="utf-8")
    (project_root / "graph" / "layout.json").write_text("[]\n", encoding="utf-8")
    archive = instance_paths.exports_dir / "study-a.zip"
    exported = container.export_service.export_project(
        project=project, archive_path=archive, include_artifacts=True
    )
    assert archive.is_file()
    container.project_service.delete_project("study-a")
    imported = container.export_service.import_project(
        archive_path=archive, project_id_override="study-b", include_install=False
    )
    assert imported["project_id"] == "study-b"
    imported_project = container.project_service.get_project("study-b")
    assert imported_project.controller_status_token
    assert imported_project.bulletjournal_version == "0.1.0"
    assert imported_project.custom_requirements_text == "bulletjournal-editor==0.1.0\n"


def test_export_skips_marimo_dirs_and_keeps_empty_artifacts_root(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret="test-secret", cookie_secure=False),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    project = container.project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    (project_root / "notebooks").mkdir(parents=True, exist_ok=True)
    (project_root / "notebooks" / "kept.py").write_text("print('ok')\n", encoding="utf-8")
    (project_root / "notebooks" / "__marimo__").mkdir(parents=True, exist_ok=True)
    (project_root / "notebooks" / "__marimo__" / "state.json").write_text(
        "temp\n", encoding="utf-8"
    )
    (
        project_root
        / "checkpoints"
        / "cp-1"
        / "notebooks"
        / "keep.py"
    ).parent.mkdir(parents=True, exist_ok=True)
    (
        project_root
        / "checkpoints"
        / "cp-1"
        / "notebooks"
        / "keep.py"
    ).write_text("print('checkpoint')\n", encoding="utf-8")
    (
        project_root
        / "checkpoints"
        / "cp-1"
        / "notebooks"
        / "__marimo__"
        / "cache.tmp"
    ).parent.mkdir(parents=True, exist_ok=True)
    (
        project_root
        / "checkpoints"
        / "cp-1"
        / "notebooks"
        / "__marimo__"
        / "cache.tmp"
    ).write_text("temp\n", encoding="utf-8")
    archive = instance_paths.exports_dir / "study-a-no-artifacts.zip"

    container.export_service.export_project(
        project=project, archive_path=archive, include_artifacts=False
    )

    with zipfile.ZipFile(archive, "r") as exported_archive:
        names = set(exported_archive.namelist())

    assert "project/notebooks/kept.py" in names
    assert "project/checkpoints/cp-1/notebooks/keep.py" in names
    assert "project/artifacts/objects/" in names
    assert not any(name.startswith("project/objects/") for name in names)
    assert not any(name.startswith("project/notebooks/__marimo__/") for name in names)
    assert not any(
        name.startswith("project/checkpoints/cp-1/notebooks/__marimo__/")
        for name in names
    )
