from __future__ import annotations

from bulletjournal_controller.config import default_instance_config
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.environment_service import EnvironmentService
from bulletjournal_controller.services.project_service import ProjectService
from bulletjournal_controller.storage import JobRepository, ProjectRepository, StateDB, UserRepository, init_instance_root


class DummyRuntimeConfigService:
    runtime_config = type('RuntimeConfig', (), {'runtime_image_name': 'bulletjournal-runtime:local', 'local_bulletjournal_source': None})()

    def default_dependencies_file(self):
        return None

    def additional_mounts(self):
        return []


class DummyRuntimeService:
    def update_limits(self, *, project):
        return None


def test_mark_install_succeeded_clears_status_reason_without_duplicate_kwargs(tmp_path) -> None:
    instance_paths = init_instance_root(tmp_path / 'instance')
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id='user-1',
        username='admin',
        display_name='Admin',
        password_hash='hash',
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
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        bulletjournal_version='0.1.0',
        custom_requirements_text='',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    service.mark_installing(project.project_id)
    updated = service.mark_install_succeeded(project.project_id, lock_sha256='abc123')
    assert updated.status == 'stopped'
    assert updated.status_reason is None
    assert updated.lock_sha256 == 'abc123'
