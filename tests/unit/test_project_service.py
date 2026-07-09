from __future__ import annotations

import pytest

from bulletjournal_controller.config import default_instance_config
from bulletjournal_controller.domain.errors import ValidationError
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.environment_service import EnvironmentService
from bulletjournal_controller.services.project_service import ProjectService
from bulletjournal_controller.storage import (
    JobRepository,
    ProjectRepository,
    StateDB,
    UserRepository,
    init_instance_root,
)


class DummyRuntimeConfigService:
    runtime_config = type(
        "RuntimeConfig", (), {"runtime_image_name": "bulletjournal-runtime:local"}
    )()

    def default_dependencies_file(self):
        return None

    def additional_mounts(self):
        return []

    def env_file(self):
        return None


class DummyRuntimeService:
    def __init__(self):
        self.stop_calls: list[object] = []
        self.status_payload: dict[str, object] | None = None
        self.fetch_status_calls: list[object] = []

    def update_limits(self, *, project):
        return None

    def fetch_project_status(self, *, project):
        self.fetch_status_calls.append(project)
        if self.status_payload is None:
            raise RuntimeError("status unavailable")
        return self.status_payload

    def stop_project(self, *, project) -> None:
        self.stop_calls.append(project)


class RecordingEnvironmentService(EnvironmentService):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.writes: list[dict[str, str]] = []

    def write_project_environment(
        self,
        *,
        project_paths,
        project_id: str,
        python_version: str,
        bulletjournal_version: str,
        custom_requirements_text: str,
    ) -> list[str]:
        self.writes.append(
            {
                "project_id": project_id,
                "python_version": python_version,
                "bulletjournal_version": bulletjournal_version,
                "custom_requirements_text": custom_requirements_text,
            }
        )
        return super().write_project_environment(
            project_paths=project_paths,
            project_id=project_id,
            python_version=python_version,
            bulletjournal_version=bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )


def test_mark_install_succeeded_clears_status_reason_without_duplicate_kwargs(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    project = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    service.mark_installing(project.project_id)
    updated = service.mark_install_succeeded(project.project_id, lock_sha256="abc123")
    assert updated.status == "stopped"
    assert updated.status_reason is None
    assert updated.lock_sha256 == "abc123"
    assert updated.controller_status_token


def test_create_project_uses_recorded_environment_service(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = RecordingEnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )

    service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.12",
        custom_requirements_text="bulletjournal-editor==0.2.0\nalpha==1\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )

    assert environment_service.writes[-1] == {
        "project_id": "study-a",
        "python_version": "3.12",
        "bulletjournal_version": "0.2.0",
        "custom_requirements_text": "bulletjournal-editor==0.2.0\nalpha==1\n",
    }
    created = service.get_project("study-a")
    assert created.controller_status_token
    assert created.bulletjournal_version == "0.2.0"


def test_create_project_derives_bulletjournal_version_from_dependency_text(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = RecordingEnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )

    created = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.12",
        custom_requirements_text="bulletjournal-editor==0.4.0\nalpha==1\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )

    assert environment_service.writes[-1]["bulletjournal_version"] == "0.4.0"
    assert created.bulletjournal_version == "0.4.0"


def test_update_environment_inputs_derives_bulletjournal_version_from_dependency_text(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = RecordingEnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    created = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )

    updated = service.update_environment_inputs(
        project_id=created.project_id,
        python_version="3.12",
        custom_requirements_text="bulletjournal-editor==0.5.0\nalpha==1\n",
    )

    assert environment_service.writes[-1]["bulletjournal_version"] == "0.5.0"
    assert updated.python_version == "3.12"
    assert updated.bulletjournal_version == "0.5.0"


def test_mark_install_succeeded_updates_bulletjournal_version_from_venv_metadata(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    project = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor @ git+https://github.com/Agoratlas/BulletJournal@main\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    dist_info = (
        service.project_paths(project.project_id).runtime_venv_dir
        / "lib"
        / "python3.11"
        / "site-packages"
        / "bulletjournal_editor-1.0.0.dist-info"
    )
    dist_info.mkdir(parents=True)
    (dist_info / "METADATA").write_text(
        "Metadata-Version: 2.4\nName: bulletjournal-editor\nVersion: 1.0.0\n",
        encoding="utf-8",
    )
    (dist_info / "direct_url.json").write_text(
        '{"url":"https://github.com/Agoratlas/BulletJournal","vcs_info":{"vcs":"git","commit_id":"4e8e21707279ead345c30fef1709726ea9e3f7c9"}}',
        encoding="utf-8",
    )

    service.mark_installing(project.project_id)
    updated = service.mark_install_succeeded(project.project_id, lock_sha256="abc123")

    assert updated.bulletjournal_version == "1.0.0 (4e8e217)"


def test_mark_runtime_crashed_sets_error_and_clears_runtime(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    project = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    service.projects.update(
        project.project_id,
        status="running",
        container_name="bulletjournal-main-study-a",
        container_id="container-1",
        container_port=8765,
    )

    updated = service.mark_runtime_crashed(project.project_id)

    assert updated.status == "error"
    assert updated.status_reason == "runtime_crashed"
    assert updated.container_name is None
    assert updated.container_port is None


def test_stop_project_refreshes_runtime_status_before_shutdown(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    runtime_service = DummyRuntimeService()
    runtime_service.status_payload = {
        "last_graph_edit_at": "2026-07-09T15:00:00Z",
        "last_notebook_edit_at": "2026-07-09T15:02:00Z",
        "last_run_finished_at": "2026-07-09T14:30:00Z",
        "idle_shutdown_eligible_since": "2026-07-09T14:45:00Z",
    }
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=runtime_service,
    )
    project = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    service.projects.update(
        project.project_id,
        status="running",
        container_name="bulletjournal-main-study-a",
        container_id="container-1",
        container_port=8765,
    )

    updated = service.stop_project(project.project_id, reason="manual_stop")

    assert len(runtime_service.fetch_status_calls) == 1
    assert len(runtime_service.stop_calls) == 1
    assert updated.status == "stopped"
    assert updated.status_reason == "manual_stop"
    assert updated.last_graph_edit_at == "2026-07-09T15:00:00Z"
    assert updated.last_notebook_edit_at == "2026-07-09T15:02:00Z"
    assert updated.last_edit_at == "2026-07-09T15:02:00Z"
    assert updated.last_run_finished_at == "2026-07-09T14:30:00Z"
    assert updated.idle_shutdown_eligible_at == "2026-07-09T14:45:00Z"


def test_stop_project_still_stops_when_runtime_status_refresh_fails(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    runtime_service = DummyRuntimeService()
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=runtime_service,
    )
    project = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    service.projects.update(
        project.project_id,
        status="running",
        container_name="bulletjournal-main-study-a",
        container_id="container-1",
        container_port=8765,
        last_edit_at="2026-07-09T12:00:00Z",
    )

    updated = service.stop_project(project.project_id, reason="manual_stop")

    assert len(runtime_service.fetch_status_calls) == 1
    assert len(runtime_service.stop_calls) == 1
    assert updated.status == "stopped"
    assert updated.last_edit_at == "2026-07-09T12:00:00Z"


def test_create_project_requires_bulletjournal_dependency_in_custom_requirements(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )

    with pytest.raises(ValidationError, match="custom_requirements_text"):
        service.create_project(
            project_id="study-a",
            created_by_user_id=user.user_id,
            python_version="3.11",
            custom_requirements_text="alpha==1\n",
            cpu_limit_millis=1000,
            memory_limit_bytes=1024,
            disk_soft_limit_bytes=None,
            gpu_enabled=False,
        )


def test_update_environment_inputs_requires_bulletjournal_dependency_in_custom_requirements(
    tmp_path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    created = service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )

    with pytest.raises(ValidationError, match="custom_requirements_text"):
        service.update_environment_inputs(
            project_id=created.project_id,
            python_version="3.12",
            custom_requirements_text="alpha==1\n",
        )


def test_create_project_rejects_gpu_when_instance_gpu_disabled(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="admin",
        display_name="Admin",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
        gpu_enabled=False,
    )

    with pytest.raises(ValidationError, match="GPU is not supported on this instance."):
        service.create_project(
            project_id="study-a",
            created_by_user_id=user.user_id,
            python_version="3.11",
            custom_requirements_text="bulletjournal-editor\n",
            cpu_limit_millis=None,
            memory_limit_bytes=None,
            disk_soft_limit_bytes=None,
            gpu_enabled=True,
        )
