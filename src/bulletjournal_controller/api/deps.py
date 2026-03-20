from __future__ import annotations

from bulletjournal_controller.config import load_instance_config
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.auth_service import AuthService
from bulletjournal_controller.services.environment_service import EnvironmentService
from bulletjournal_controller.services.export_service import ExportService
from bulletjournal_controller.services.job_service import JobService
from bulletjournal_controller.services.project_service import ProjectService
from bulletjournal_controller.services.proxy_service import ProxyService
from bulletjournal_controller.services.reconcile_service import ReconcileService
from bulletjournal_controller.services.runtime_config_service import RuntimeConfigService
from bulletjournal_controller.services.runtime_service import RuntimeService
from bulletjournal_controller.storage import InstancePaths, JobRepository, ProjectRepository, SessionRepository, StateDB, UserRepository


SYSTEM_USER_ID = 'user-system'
SYSTEM_USERNAME = 'system'


class ServiceContainer:
    def __init__(
        self,
        *,
        instance_paths: InstancePaths,
        server_config,
        recover_inflight_jobs: bool = False,
        ensure_runtime_image: bool = True,
    ) -> None:
        self.instance_paths = instance_paths
        self.server_config = server_config
        self.instance_config = load_instance_config(instance_paths.instance_json_path)
        self.state_db = StateDB(instance_paths.state_db_path)
        if recover_inflight_jobs:
            self.state_db.abort_inflight_jobs()

        self.users = UserRepository(self.state_db)
        self.sessions = SessionRepository(self.state_db)
        self.projects = ProjectRepository(self.state_db)
        self.jobs = JobRepository(self.state_db)
        self._ensure_system_user()

        self.docker_adapter = DockerAdapter(docker_host=server_config.docker_host)
        self.installer = InstallerRunner(self.docker_adapter)
        self.runtime_config_service = RuntimeConfigService(instance_paths=instance_paths)
        if ensure_runtime_image:
            self.runtime_config_service.ensure_runtime_image(self.installer)

        self.auth_service = AuthService(users=self.users, sessions=self.sessions, server_config=server_config)
        self.environment_service = EnvironmentService(
            instance_config=self.instance_config,
            installer=self.installer,
            runtime_config_service=self.runtime_config_service,
        )
        self.runtime_service = RuntimeService(
            instance_config=self.instance_config,
            server_config=server_config,
            adapter=self.docker_adapter,
            runtime_config_service=self.runtime_config_service,
        )
        self.project_service = ProjectService(
            instance_paths=instance_paths,
            projects=self.projects,
            jobs=self.jobs,
            environment_service=self.environment_service,
            runtime_service=self.runtime_service,
        )
        self.export_service = ExportService(
            instance_paths=instance_paths,
            projects=self.projects,
            default_created_by_user_id=SYSTEM_USER_ID,
        )
        self.job_service = JobService(instance_paths=instance_paths, jobs=self.jobs)
        self.job_service.bind_services(
            project_service=self.project_service,
            export_service=self.export_service,
            runtime_service=self.runtime_service,
            system_user_id=SYSTEM_USER_ID,
        )
        self.proxy_service = ProxyService(project_service=self.project_service, job_service=self.job_service)
        self.reconcile_service = ReconcileService(
            project_service=self.project_service,
            runtime_service=self.runtime_service,
        )

    def start(self) -> None:
        self.runtime_service.reconcile_instance_projects(projects=self.project_service.list_projects(), projects_repo=self.projects)
        self.job_service.start()
        self.reconcile_service.start()

    def stop(self) -> None:
        self.reconcile_service.stop()
        self.job_service.stop()

    def system_info(self) -> dict[str, object]:
        return {
            'instance_id': self.instance_config.instance_id,
            'title': self.instance_config.title,
            'default_python_version': self.instance_config.default_python_version,
            'default_bulletjournal_version': self.instance_config.default_bulletjournal_version,
            'default_dependencies_text': self.environment_service.default_dependency_text(),
            'runtime_image_name': self.runtime_config_service.runtime_config.runtime_image_name,
            'config_dir': str(self.instance_paths.local_config_dir),
            'project_count': len(self.project_service.list_projects()),
        }

    def _ensure_system_user(self) -> None:
        if self.users.get(SYSTEM_USER_ID) is not None:
            return
        self.users.create(
            user_id=SYSTEM_USER_ID,
            username=SYSTEM_USERNAME,
            display_name='System',
            password_hash='!',
            is_active=False,
        )
