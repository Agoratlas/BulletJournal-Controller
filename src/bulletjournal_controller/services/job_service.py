from __future__ import annotations

import json
import queue
import threading
from pathlib import Path
from typing import Any

from bulletjournal_controller.domain.enums import JobStatus, JobType, ProjectStatus, ProjectStatusReason
from bulletjournal_controller.domain.errors import ConflictError, JobExecutionError, NotFoundError
from bulletjournal_controller.domain.models import JobRecord
from bulletjournal_controller.storage.instance_fs import InstancePaths
from bulletjournal_controller.storage.repositories import JobRepository
from bulletjournal_controller.utils import json_dumps, random_token, utc_now_iso


class JobService:
    def __init__(self, *, instance_paths: InstancePaths, jobs: JobRepository):
        self.instance_paths = instance_paths
        self.jobs = jobs
        self._queue: queue.Queue[str] = queue.Queue()
        self._thread: threading.Thread | None = None
        self._stop_event = threading.Event()
        self.project_service = None
        self.export_service = None

    def bind_services(self, *, project_service, export_service) -> None:
        self.project_service = project_service
        self.export_service = export_service

    def start(self) -> None:
        if self._thread is not None:
            return
        self._stop_event.clear()
        self._thread = threading.Thread(target=self._run_loop, name='job-worker', daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop_event.set()
        if self._thread is not None:
            self._thread.join(timeout=2.0)
            self._thread = None

    def queue_job(
        self,
        *,
        job_type: str,
        requested_by_user_id: str,
        payload: dict[str, Any],
        project_id: str | None = None,
        reject_on_conflict: bool = True,
    ) -> JobRecord:
        if reject_on_conflict and project_id is not None and self.jobs.has_active_mutation(project_id):
            raise ConflictError(f'Project {project_id} already has a queued or running mutation.')
        job_id = f'job-{random_token(bytes_length=12)}'
        log_path = self.instance_paths.job_logs_dir / f'{job_id}.log'
        log_path.parent.mkdir(parents=True, exist_ok=True)
        log_path.write_text('', encoding='utf-8')
        job = self.jobs.create(
            job_id=job_id,
            project_id=project_id,
            job_type=job_type,
            status=JobStatus.QUEUED.value,
            requested_by_user_id=requested_by_user_id,
            payload_json=json_dumps(payload),
            result_json=None,
            log_path=str(log_path),
            created_at=utc_now_iso(),
            started_at=None,
            finished_at=None,
            error_message=None,
        )
        self._queue.put(job_id)
        return job

    def get_job(self, job_id: str) -> JobRecord | None:
        return self.jobs.get(job_id)

    def _run_loop(self) -> None:
        while not self._stop_event.is_set():
            try:
                job_id = self._queue.get(timeout=0.2)
            except queue.Empty:
                continue
            job = self.jobs.get(job_id)
            if job is None:
                continue
            self._run_job(job)

    def _run_job(self, job: JobRecord) -> None:
        self.jobs.update(job.job_id, status=JobStatus.RUNNING.value, started_at=utc_now_iso(), error_message=None)
        try:
            result = self._dispatch(job)
        except Exception as exc:
            try:
                self._apply_project_failure_state(job)
            except Exception as state_exc:
                self._log(Path(job.log_path), f'failed to apply project failure state: {state_exc}')
            self._log(Path(job.log_path), f'job failed: {exc}')
            self.jobs.update(
                job.job_id,
                status=JobStatus.FAILED.value,
                finished_at=utc_now_iso(),
                error_message=str(exc),
            )
            return
        self.jobs.update(
            job.job_id,
            status=JobStatus.SUCCEEDED.value,
            finished_at=utc_now_iso(),
            result_json=json.dumps(result, sort_keys=True),
            error_message=None,
        )

    def _dispatch(self, job: JobRecord) -> dict[str, Any]:
        payload = json.loads(job.payload_json)
        log_path = Path(job.log_path)
        log_writer = lambda message: self._log(log_path, message)
        if self.project_service is None or self.export_service is None:
            raise JobExecutionError('Job service is not fully bound.')
        if job.job_type == JobType.CREATE_PROJECT.value:
            project = self.project_service.mark_installing(job.project_id)
            project = self.project_service.get_project(project.project_id)
            lock_sha = self.project_service.environment_service.install_environment(
                project=project,
                project_paths=self.project_service.project_paths(project.project_id),
                log_writer=log_writer,
                mark_all_artifacts_stale=False,
                reason='initial environment creation',
            )
            project = self.project_service.mark_install_succeeded(project.project_id, lock_sha256=lock_sha)
            return {'project_id': project.project_id, 'status': project.status, 'install_status': project.install_status}
        if job.job_type == JobType.START_PROJECT.value:
            project = self.project_service.start_project(job.project_id)
            return {'project_id': project.project_id, 'status': project.status}
        if job.job_type == JobType.STOP_PROJECT.value:
            project = self.project_service.get_project(job.project_id)
            if project.status == ProjectStatus.STOPPED.value:
                return {'project_id': project.project_id, 'status': project.status}
            project = self.project_service.stop_project(job.project_id, reason=ProjectStatusReason.MANUAL_STOP.value)
            return {'project_id': project.project_id, 'status': project.status}
        if job.job_type in {JobType.UPDATE_ENVIRONMENT.value, JobType.REINSTALL_ENVIRONMENT.value}:
            project = self.project_service.get_project(job.project_id)
            restart_if_running = bool(payload.get('restart_if_running', True))
            mark_all_artifacts_stale = bool(payload.get('mark_all_artifacts_stale', True))
            was_running = project.status == ProjectStatus.RUNNING.value
            if was_running:
                self.project_service.stop_project(project.project_id, reason=ProjectStatusReason.MANUAL_STOP.value)
            if job.job_type == JobType.UPDATE_ENVIRONMENT.value:
                project = self.project_service.update_environment_inputs(
                    project_id=project.project_id,
                    python_version=str(payload['python_version']),
                    bulletjournal_version=str(payload['bulletjournal_version']),
                    custom_requirements_text=str(payload['custom_requirements_text']),
                )
            self.project_service.mark_installing(project.project_id)
            current = self.project_service.get_project(project.project_id)
            lock_sha = self.project_service.environment_service.install_environment(
                project=current,
                project_paths=self.project_service.project_paths(project.project_id),
                log_writer=log_writer,
                mark_all_artifacts_stale=mark_all_artifacts_stale,
                reason='controller-managed environment update',
            )
            project = self.project_service.mark_install_succeeded(project.project_id, lock_sha256=lock_sha)
            if was_running and restart_if_running:
                project = self.project_service.start_project(project.project_id)
            return {'project_id': project.project_id, 'status': project.status, 'install_status': project.install_status}
        if job.job_type == JobType.EXPORT_PROJECT.value:
            project = self.project_service.get_project(job.project_id)
            include_artifacts = bool(payload.get('include_artifacts', True))
            archive_name = str(payload.get('archive_name') or f'{project.project_id}.zip')
            archive_path = self.instance_paths.exports_dir / archive_name
            return self.export_service.export_project(project=project, archive_path=archive_path, include_artifacts=include_artifacts)
        if job.job_type == JobType.IMPORT_PROJECT.value:
            imported = self.export_service.import_project(
                archive_path=Path(str(payload['archive_path'])),
                project_id_override=payload.get('project_id_override'),
                include_install=bool(payload.get('include_install', False)),
            )
            if bool(payload.get('include_install', False)):
                imported_project_id = str(imported['project_id'])
                self.project_service.mark_installing(imported_project_id)
                project = self.project_service.get_project(imported_project_id)
                lock_sha = self.project_service.environment_service.install_environment(
                    project=project,
                    project_paths=self.project_service.project_paths(imported_project_id),
                    log_writer=log_writer,
                    mark_all_artifacts_stale=False,
                    reason='project import install',
                )
                project = self.project_service.mark_install_succeeded(imported_project_id, lock_sha256=lock_sha)
                imported['project'] = project.to_api()
            return imported
        raise JobExecutionError(f'Unsupported job type {job.job_type}.')

    def _apply_project_failure_state(self, job: JobRecord) -> None:
        if job.project_id is None or self.project_service is None:
            return
        try:
            project = self.project_service.get_project(job.project_id)
        except NotFoundError:
            return
        if job.job_type == JobType.START_PROJECT.value and project.status == ProjectStatus.STARTING.value:
            self.project_service.set_status(
                project_id=project.project_id,
                status=ProjectStatus.ERROR.value,
                status_reason=ProjectStatusReason.START_FAILED.value,
            )
            return
        if job.job_type in {
            JobType.CREATE_PROJECT.value,
            JobType.UPDATE_ENVIRONMENT.value,
            JobType.REINSTALL_ENVIRONMENT.value,
        }:
            self.project_service.mark_install_failed(project.project_id)
            return
        if job.job_type == JobType.STOP_PROJECT.value and project.status == ProjectStatus.STOPPING.value:
            self.project_service.set_status(
                project_id=project.project_id,
                status=ProjectStatus.ERROR.value,
                status_reason=ProjectStatusReason.RUNTIME_CRASHED.value,
            )

    @staticmethod
    def _log(path: Path, message: str) -> None:
        with path.open('a', encoding='utf-8') as handle:
            handle.write(f'{utc_now_iso()} {message}\n')
