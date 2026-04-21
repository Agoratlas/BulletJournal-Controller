from __future__ import annotations

from bulletjournal_controller.domain.enums import (
    InstallStatus,
    ProjectStatus,
    ProjectStatusReason,
)
from bulletjournal_controller.domain.errors import ConflictError, RuntimeOperationError
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.domain.rules import (
    ensure_transition_allowed,
    validate_project_id,
    validate_status_reason,
)
from bulletjournal_controller.storage.instance_fs import (
    InstancePaths,
    ProjectPaths,
    create_project_root,
    delete_project_root,
)
from bulletjournal_controller.storage.repositories import (
    JobRepository,
    ProjectRepository,
)
from bulletjournal_controller.utils import path_size_bytes, random_token, utc_now_iso


class ProjectService:
    def __init__(
        self,
        *,
        instance_paths: InstancePaths,
        projects: ProjectRepository,
        jobs: JobRepository,
        environment_service,
        runtime_service,
    ):
        self.instance_paths = instance_paths
        self.projects = projects
        self.jobs = jobs
        self.environment_service = environment_service
        self.runtime_service = runtime_service

    def list_projects(self) -> list[ProjectRecord]:
        return self.projects.list_all()

    def backfill_runtime_venv_size_bytes(self) -> None:
        for project in self.projects.list_all():
            if project.runtime_venv_size_bytes is not None:
                continue
            project_paths = self.instance_paths.project_paths(project.project_id)
            self.projects.update(
                project.project_id,
                runtime_venv_size_bytes=path_size_bytes(project_paths.runtime_venv_dir),
            )

    def get_project(self, project_id: str) -> ProjectRecord:
        return self.projects.require(validate_project_id(project_id))

    def create_project(
        self,
        *,
        project_id: str,
        created_by_user_id: str,
        python_version: str,
        custom_requirements_text: str,
        cpu_limit_millis: int | None,
        memory_limit_bytes: int | None,
        gpu_enabled: bool,
    ) -> ProjectRecord:
        resolved_project_id = validate_project_id(project_id)
        if self.projects.get(resolved_project_id) is not None:
            raise ConflictError(f"Project {resolved_project_id} already exists.")
        resolved_bulletjournal_version = (
            self.environment_service.resolve_bulletjournal_version(
                custom_requirements_text=custom_requirements_text
            )
        )
        project_paths = create_project_root(self.instance_paths, resolved_project_id)
        self.environment_service.write_project_environment(
            project_paths=project_paths,
            project_id=resolved_project_id,
            python_version=python_version,
            bulletjournal_version=resolved_bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )
        now = utc_now_iso()
        return self.projects.create(
            project_id=resolved_project_id,
            controller_status_token=random_token(),
            status=ProjectStatus.CREATING.value,
            status_reason=None,
            root_path=str(project_paths.root),
            created_by_user_id=created_by_user_id,
            created_at=now,
            updated_at=now,
            last_graph_edit_at=None,
            last_notebook_edit_at=None,
            last_edit_at=None,
            last_run_finished_at=None,
            idle_shutdown_eligible_at=None,
            python_version=python_version,
            bulletjournal_version=resolved_bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
            lock_sha256=None,
            runtime_venv_size_bytes=None,
            install_status=InstallStatus.PENDING.value,
            last_install_at=None,
            cpu_limit_millis=cpu_limit_millis,
            memory_limit_bytes=memory_limit_bytes,
            gpu_enabled=gpu_enabled,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_started_at=None,
            runtime_stopped_at=None,
        )

    def project_paths(self, project_id: str) -> ProjectPaths:
        project = self.get_project(project_id)
        return self.instance_paths.project_paths(project.project_id)

    def set_status(
        self,
        *,
        project_id: str,
        status: str,
        status_reason: str | None = None,
        **changes,
    ) -> ProjectRecord:
        current = self.get_project(project_id)
        if current.status != status:
            ensure_transition_allowed(current.status, status)
        validate_status_reason(ProjectStatus(status), status_reason)
        return self.projects.update(
            project_id, status=status, status_reason=status_reason, **changes
        )

    def update_limits(
        self,
        *,
        project_id: str,
        cpu_limit_millis: int | None,
        memory_limit_bytes: int | None,
        gpu_enabled: bool,
    ) -> ProjectRecord:
        project = self.projects.update(
            project_id,
            cpu_limit_millis=cpu_limit_millis,
            memory_limit_bytes=memory_limit_bytes,
            gpu_enabled=gpu_enabled,
        )
        if project.container_name:
            self.runtime_service.update_limits(project=project)
        return self.get_project(project_id)

    def mark_installing(self, project_id: str) -> ProjectRecord:
        project = self.get_project(project_id)
        updates = {"install_status": InstallStatus.INSTALLING.value}
        if project.status in {ProjectStatus.CREATING.value, ProjectStatus.ERROR.value}:
            return self.set_status(
                project_id=project_id,
                status=ProjectStatus.INSTALLING.value,
                status_reason=None,
                **updates,
            )
        return self.projects.update(project_id, **updates)

    def mark_install_succeeded(
        self,
        project_id: str,
        *,
        lock_sha256: str,
        runtime_venv_size_bytes: int | None = None,
    ) -> ProjectRecord:
        project = self.get_project(project_id)
        updates = {
            "install_status": InstallStatus.READY.value,
            "lock_sha256": lock_sha256,
            "runtime_venv_size_bytes": runtime_venv_size_bytes,
            "last_install_at": utc_now_iso(),
        }
        if project.status == ProjectStatus.INSTALLING.value:
            return self.set_status(
                project_id=project_id,
                status=ProjectStatus.STOPPED.value,
                status_reason=None,
                **updates,
            )
        return self.projects.update(project_id, **updates)

    def mark_install_failed(self, project_id: str) -> ProjectRecord:
        project = self.get_project(project_id)
        updates = {"install_status": InstallStatus.FAILED.value}
        if project.status == ProjectStatus.INSTALLING.value:
            return self.set_status(
                project_id=project_id,
                status=ProjectStatus.ERROR.value,
                status_reason=ProjectStatusReason.INSTALL_FAILED.value,
                **updates,
            )
        return self.projects.update(project_id, **updates)

    def start_project(self, project_id: str) -> ProjectRecord:
        project = self.get_project(project_id)
        if project.status == ProjectStatus.RUNNING.value:
            return project
        if project.status not in {
            ProjectStatus.STOPPED.value,
            ProjectStatus.ERROR.value,
        }:
            raise ConflictError(f"Cannot start project from status {project.status}.")
        self.set_status(
            project_id=project_id,
            status=ProjectStatus.STARTING.value,
            status_reason=None,
        )
        project = self.get_project(project_id)
        runtime = self.runtime_service.start_project(
            project=project, project_paths=self.project_paths(project_id)
        )
        return self.set_status(
            project_id=project_id,
            status=ProjectStatus.RUNNING.value,
            status_reason=None,
            container_name=runtime.container_name,
            container_id=runtime.container_id,
            container_port=runtime.host_port,
            runtime_started_at=runtime.started_at,
            runtime_stopped_at=None,
        )

    def stop_project(
        self, project_id: str, *, reason: str | None = None
    ) -> ProjectRecord:
        project = self.get_project(project_id)
        if project.status == ProjectStatus.STOPPED.value:
            return project
        if project.status != ProjectStatus.RUNNING.value:
            raise ConflictError(f"Cannot stop project from status {project.status}.")
        self.set_status(
            project_id=project_id,
            status=ProjectStatus.STOPPING.value,
            status_reason=None,
        )
        project = self.get_project(project_id)
        self.runtime_service.stop_project(project=project)
        return self.set_status(
            project_id=project_id,
            status=ProjectStatus.STOPPED.value,
            status_reason=reason,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_stopped_at=utc_now_iso(),
        )

    def mark_runtime_crashed(self, project_id: str) -> ProjectRecord:
        project = self.get_project(project_id)
        if project.status not in {
            ProjectStatus.RUNNING.value,
            ProjectStatus.STARTING.value,
            ProjectStatus.STOPPING.value,
        }:
            return project
        target_status = (
            ProjectStatus.STOPPED.value
            if project.status == ProjectStatus.STOPPING.value
            else ProjectStatus.ERROR.value
        )
        reason = (
            ProjectStatusReason.MANUAL_STOP.value
            if project.status == ProjectStatus.STOPPING.value
            else ProjectStatusReason.RUNTIME_CRASHED.value
        )
        return self.set_status(
            project_id=project_id,
            status=target_status,
            status_reason=reason,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_stopped_at=utc_now_iso(),
        )

    def apply_runtime_status(
        self, *, project_id: str, status_payload: dict[str, object]
    ) -> ProjectRecord:
        graph_edit = status_payload.get("last_graph_edit_at")
        notebook_edit = status_payload.get("last_notebook_edit_at")
        last_edit_at = max(
            [value for value in [graph_edit, notebook_edit] if isinstance(value, str)],
            default=None,
        )
        last_run_finished_at = status_payload.get("last_run_finished_at")
        idle_since = status_payload.get("idle_shutdown_eligible_since")
        return self.projects.update(
            project_id,
            last_graph_edit_at=graph_edit if isinstance(graph_edit, str) else None,
            last_notebook_edit_at=notebook_edit
            if isinstance(notebook_edit, str)
            else None,
            last_edit_at=last_edit_at,
            last_run_finished_at=last_run_finished_at
            if isinstance(last_run_finished_at, str)
            else None,
            idle_shutdown_eligible_at=idle_since
            if isinstance(idle_since, str)
            else None,
        )

    def update_environment_inputs(
        self,
        *,
        project_id: str,
        python_version: str,
        custom_requirements_text: str,
    ) -> ProjectRecord:
        resolved_bulletjournal_version = (
            self.environment_service.resolve_bulletjournal_version(
                custom_requirements_text=custom_requirements_text
            )
        )
        project_paths = self.project_paths(project_id)
        self.environment_service.write_project_environment(
            project_paths=project_paths,
            project_id=project_id,
            python_version=python_version,
            bulletjournal_version=resolved_bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )
        return self.projects.update(
            project_id,
            python_version=python_version,
            bulletjournal_version=resolved_bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )

    def delete_project(self, project_id: str) -> None:
        project = self.get_project(project_id)
        if project.status == ProjectStatus.RUNNING.value:
            self.stop_project(project_id, reason=ProjectStatusReason.MANUAL_STOP.value)
        else:
            try:
                self.runtime_service.cleanup_project_container(project_id)
            except RuntimeOperationError:
                pass
        self.jobs.delete_for_project(project_id)
        delete_project_root(self.instance_paths, project_id)
        self.projects.delete(project_id)
