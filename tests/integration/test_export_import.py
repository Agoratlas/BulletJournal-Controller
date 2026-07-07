from __future__ import annotations

import zipfile

import pytest

from bulletjournal.storage.project_fs import init_project_root
from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.domain.errors import ConflictError
from bulletjournal_controller.services.export_service import ProjectExportMode
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
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id="study-a")
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")
    archive = instance_paths.exports_dir / "study-a.zip"
    exported = container.export_service.export_project(
        project=project,
        archive_path=archive,
        mode=ProjectExportMode.FULL,
    )
    assert archive.is_file()
    container.project_service.delete_project("study-a")
    imported = container.export_service.import_project(
        archive_path=archive, include_install=False
    )
    assert imported["project_id"] == "study-a"
    imported_project = container.project_service.get_project("study-a")
    assert imported_project.controller_status_token
    assert imported_project.bulletjournal_version == "0.1.0"
    assert imported_project.custom_requirements_text == "bulletjournal-editor==0.1.0\n"


def test_export_modes_follow_bulletjournal_archive_layout(instance_root) -> None:
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
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id="study-a")
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")
    (project_root / "notebooks").mkdir(parents=True, exist_ok=True)
    (project_root / "notebooks" / "kept.py").write_text("print('ok')\n", encoding="utf-8")
    (project_root / "notebooks" / "__marimo__").mkdir(parents=True, exist_ok=True)
    (project_root / "notebooks" / "__marimo__" / "state.json").write_text(
        "temp\n", encoding="utf-8"
    )
    (
        project_root
        / "objects"
        / "artifact.bin"
    ).parent.mkdir(parents=True, exist_ok=True)
    (project_root / "objects" / "artifact.bin").write_bytes(b"artifact")
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

    archives = {
        ProjectExportMode.CODE_ONLY: instance_paths.exports_dir / "study-a-code-only.zip",
        ProjectExportMode.CODE_AND_DATA: instance_paths.exports_dir
        / "study-a-code-and-data.zip",
        ProjectExportMode.FULL: instance_paths.exports_dir / "study-a-full.zip",
    }

    exported_names: dict[ProjectExportMode, set[str]] = {}
    for mode, archive in archives.items():
        container.export_service.export_project(
            project=project,
            archive_path=archive,
            mode=mode,
        )
        with zipfile.ZipFile(archive, "r") as exported_archive:
            exported_names[mode] = set(exported_archive.namelist())

    for mode, names in exported_names.items():
        assert "graph/" in names
        assert "notebooks/" in names
        assert "objects/" in names
        assert "metadata/" in names
        assert "checkpoints/" in names
        assert "notebooks/kept.py" in names
        assert "graph/meta.json" in names
        assert "metadata/project.json" in names
        assert "metadata/state.db" in names
        assert "pyproject.toml" in names
        assert "uv.lock" in names
        assert not any(name.startswith("notebooks/__marimo__/") for name in names)
        assert not any(
            name.startswith("checkpoints/cp-1/notebooks/__marimo__/")
            for name in names
        )
        assert "export_manifest.json" not in names

    assert not any(
        name.startswith("objects/") and name != "objects/"
        for name in exported_names[ProjectExportMode.CODE_ONLY]
    )
    assert "objects/" in exported_names[ProjectExportMode.CODE_ONLY]
    assert "checkpoints/" in exported_names[ProjectExportMode.CODE_ONLY]
    assert not any(
        name.startswith("checkpoints/") and name != "checkpoints/"
        for name in exported_names[ProjectExportMode.CODE_ONLY]
    )
    assert "objects/artifact.bin" in exported_names[ProjectExportMode.CODE_AND_DATA]
    assert not any(
        name.startswith("checkpoints/") and name != "checkpoints/"
        for name in exported_names[ProjectExportMode.CODE_AND_DATA]
    )
    assert "objects/artifact.bin" in exported_names[ProjectExportMode.FULL]
    assert "checkpoints/cp-1/notebooks/keep.py" in exported_names[
        ProjectExportMode.FULL
    ]


def test_archive_project_removes_project_after_writing_encrypted_archive(
    instance_root,
) -> None:
    instance_paths = require_instance_root(instance_root)
    archive_dir = instance_root / "external-archives"
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            archive_dir=str(archive_dir),
            archive_encryption_key="archive-secret",
        ),
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
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id="study-a")
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")
    container.projects.update(
        project.project_id, status="stopped", install_status="ready"
    )

    archived = container.export_service.archive_project(
        project=project,
        log_writer=lambda _message: None,
    )
    container.project_service.delete_project(project.project_id)

    archive_path = archive_dir / "study-a.zip.enc"
    assert archived["encrypted"] is True
    assert archived["archive_filename"] == "study-a.zip.enc"
    assert archive_path.is_file()
    assert container.project_service.projects.get(project.project_id) is None
    assert not project_root.exists()


def test_archive_project_aborts_if_target_archive_exists(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    archive_dir = instance_root / "external-archives"
    archive_dir.mkdir(parents=True, exist_ok=True)
    (archive_dir / "study-a.zip").write_text("existing\n", encoding="utf-8")
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            archive_dir=str(archive_dir),
        ),
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
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id="study-a")
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")

    with pytest.raises(ConflictError, match="Archive already exists"):
        container.export_service.archive_project(
            project=project,
            log_writer=lambda _message: None,
        )

    assert container.project_service.get_project(project.project_id).project_id == "study-a"
    assert project_root.exists()
