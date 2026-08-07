from __future__ import annotations

import threading

from bulletjournal_controller.config import load_instance_config
from bulletjournal_controller.domain.errors import ConfigurationError
from bulletjournal_controller.observability import Observability
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.auth_service import AuthService
from bulletjournal_controller.services.environment_service import EnvironmentService
from bulletjournal_controller.services.export_service import ExportService
from bulletjournal_controller.services.job_events import JobEventBroker
from bulletjournal_controller.services.job_service import JobService
from bulletjournal_controller.services.metrics_service import MetricsService
from bulletjournal_controller.services.project_service import ProjectService
from bulletjournal_controller.services.proxy_service import ProxyService
from bulletjournal_controller.services.reconcile_service import ReconcileService
from bulletjournal_controller.services.runtime_config_service import (
    RuntimeConfigService,
)
from bulletjournal_controller.services.runtime_service import RuntimeService
from bulletjournal_controller.storage import (
    InstancePaths,
    JobRepository,
    ProjectRepository,
    SessionRepository,
    StateDB,
    UserRepository,
)

SYSTEM_USER_ID = "user-system"
SYSTEM_USERNAME = "system"
RESOURCE_REFRESH_SECONDS = 5.0


class ServiceContainer:
    def __init__(
        self,
        *,
        instance_paths: InstancePaths,
        server_config,
        recover_inflight_jobs: bool = False,
        ensure_runtime_image: bool = True,
        validate_server_config: bool = True,
    ) -> None:
        self.instance_paths = instance_paths
        self.server_config = server_config
        self.instance_config = load_instance_config(instance_paths.instance_json_path)
        if validate_server_config:
            self._validate_server_config()
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
        self.runtime_config_service = RuntimeConfigService(
            instance_paths=instance_paths
        )
        if ensure_runtime_image:
            self.runtime_config_service.ensure_runtime_image(self.installer)

        self.auth_service = AuthService(
            users=self.users, sessions=self.sessions, server_config=server_config
        )
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
            gpu_enabled=server_config.enable_gpu,
        )
        self.metrics_service = MetricsService(
            instance_paths=instance_paths,
            docker_adapter=self.docker_adapter,
            runtime_config_service=self.runtime_config_service,
            jobs=self.jobs,
        )
        self.observability = Observability()
        self.export_service = ExportService(
            instance_paths=instance_paths,
            projects=self.projects,
            default_created_by_user_id=SYSTEM_USER_ID,
            archive_dir=server_config.archive_dir,
            archive_encryption_key=server_config.archive_encryption_key,
        )
        self.job_event_broker = JobEventBroker()
        self.job_service = JobService(
            instance_paths=instance_paths,
            jobs=self.jobs,
            event_broker=self.job_event_broker,
        )
        self.job_service.bind_services(
            project_service=self.project_service,
            export_service=self.export_service,
            runtime_service=self.runtime_service,
            system_user_id=SYSTEM_USER_ID,
        )
        self.proxy_service = ProxyService(
            project_service=self.project_service,
            job_service=self.job_service,
            observability=self.observability,
        )
        self.reconcile_service = ReconcileService(
            project_service=self.project_service,
            runtime_service=self.runtime_service,
            idle_timeout_seconds=self.instance_config.idle_timeout_seconds,
            job_service=self.job_service,
        )
        self._prometheus_resource_thread: threading.Thread | None = None
        self._prometheus_resource_stop_event = threading.Event()

    def _validate_server_config(self) -> None:
        if (
            self.instance_config.prometheus_metrics_mode == "authenticated"
            and not self.server_config.prometheus_api_key
        ):
            raise ConfigurationError(
                "BULLETJOURNAL_PROMETHEUS_API_KEY is required when prometheus_metrics_mode is `authenticated`."
            )

    def start(self) -> None:
        self.project_service.backfill_runtime_size_bytes()
        self.runtime_service.reconcile_instance_projects(
            projects=self.project_service.list_projects(), projects_repo=self.projects
        )
        self.job_service.start()
        self.reconcile_service.start()
        self._start_prometheus_resource_sampler()

    def stop(self) -> None:
        self.reconcile_service.stop()
        self.job_service.stop()
        self._stop_prometheus_resource_sampler()
        self.job_event_broker.close()

    async def aclose(self) -> None:
        await self.proxy_service.aclose()

    def system_info(self) -> dict[str, object]:
        return {
            "instance_id": self.instance_config.instance_id,
            "title": self.instance_config.title,
            "default_python_version": self.instance_config.default_python_version,
            "default_cpu_limit_cpus": self.instance_config.default_cpu_limit_cpus,
            "default_memory_limit_gb": self.instance_config.default_memory_limit_gb,
            "default_disk_soft_limit_gb": self.instance_config.default_disk_soft_limit_gb,
            "gpu_supported": self.server_config.enable_gpu,
            "default_dependencies_text": self.environment_service.default_dependency_text(),
            "runtime_image_name": self.runtime_config_service.runtime_config.runtime_image_name,
            "config_dir": str(self.instance_paths.local_config_dir),
            "project_count": len(self.project_service.list_projects()),
            "metrics": self.metrics_service.system_metrics(),
        }

    def refresh_prometheus_resources(self) -> None:
        projects = self.project_service.list_projects()
        metrics_map = self.metrics_service.project_metrics_map(projects)
        self.observability.update_resources(
            system=self.metrics_service.system_metrics(),
            projects=[
                {
                    "project_id": project.project_id,
                    "status": project.status,
                    "cpu_limit_millis": project.cpu_limit_millis,
                    "memory_limit_bytes": project.memory_limit_bytes,
                    "disk_soft_limit_bytes": project.disk_soft_limit_bytes,
                    **metrics_map.get(project.project_id, {}),
                }
                for project in projects
            ],
        )

    def _start_prometheus_resource_sampler(self) -> None:
        if self._prometheus_resource_thread is not None:
            return
        self._prometheus_resource_stop_event.clear()
        self._prometheus_resource_thread = threading.Thread(
            target=self._run_prometheus_resource_sampler,
            name="prometheus-resource-sampler",
            daemon=True,
        )
        self._prometheus_resource_thread.start()

    def _stop_prometheus_resource_sampler(self) -> None:
        self._prometheus_resource_stop_event.set()
        if self._prometheus_resource_thread is not None:
            self._prometheus_resource_thread.join(timeout=2.0)
            self._prometheus_resource_thread = None

    def _run_prometheus_resource_sampler(self) -> None:
        while not self._prometheus_resource_stop_event.is_set():
            try:
                self.refresh_prometheus_resources()
            except Exception:
                pass
            self._prometheus_resource_stop_event.wait(
                RESOURCE_REFRESH_SECONDS
            )

    def _ensure_system_user(self) -> None:
        if self.users.get(SYSTEM_USER_ID) is not None:
            return
        self.users.create(
            user_id=SYSTEM_USER_ID,
            username=SYSTEM_USERNAME,
            display_name="System",
            password_hash="!",
            is_active=False,
        )
