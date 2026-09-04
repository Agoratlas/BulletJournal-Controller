from __future__ import annotations

from fastapi import APIRouter, Depends, Query, Request, status
from fastapi.responses import FileResponse

from bulletjournal_controller.api.auth import get_current_user, require_same_origin
from bulletjournal_controller.api.schemas import (
    CreateProjectRequest,
    CreateProjectResponse,
    LimitsRequest,
    ProjectRolesRequest,
    ProjectJobResponse,
    ReinstallEnvironmentRequest,
    UpdateEnvironmentRequest,
    UpdateProjectRequest,
)
from bulletjournal_controller.domain.errors import NotFoundError
from bulletjournal_controller.services.export_service import ExportService


router = APIRouter(prefix="/projects", tags=["projects"])


def _project_payload(container, project, user, metrics: dict[str, object] | None = None):
    payload = project.to_api()
    payload["metrics"] = (
        metrics
        if metrics is not None
        else container.metrics_service.project_metrics(project)
    )
    payload["has_active_job"] = container.jobs.has_active_mutation(project.project_id)
    payload["roles"] = container.authorization_service.role_summary(project.project_id)
    payload["effective_role"] = container.authorization_service.effective_role(user, project.project_id)
    return payload


@router.get("")
def list_projects(request: Request, _user=Depends(get_current_user)):
    container = request.app.state.container
    projects = container.authorization_service.list_visible_projects(_user)
    metrics_map = container.metrics_service.cached_project_metrics_map(projects)
    return [
        _project_payload(container, project, _user, metrics_map.get(project.project_id))
        for project in projects
    ]


@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    response_model=CreateProjectResponse,
    dependencies=[Depends(require_same_origin)],
)
def create_project(
    payload: CreateProjectRequest, request: Request, user=Depends(get_current_user)
):
    container = request.app.state.container
    grants = container.authorization_service.normalize_role_payload(
        {
            "project_admins": (
                payload.project_admins.model_dump()
                if payload.project_admins is not None
                else {"all_users": False, "user_ids": [user.user_id]}
            ),
            "editors": (
                payload.editors.model_dump()
                if payload.editors is not None
                else {"all_users": True, "user_ids": []}
            ),
        }
    )
    python_version = (
        payload.python_version or container.instance_config.default_python_version
    )
    project = container.project_service.create_project(
        project_id=payload.project_id,
        created_by_user_id=user.user_id,
        python_version=python_version,
        custom_requirements_text=payload.custom_requirements_text,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        disk_soft_limit_bytes=payload.disk_soft_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    container.role_grants.replace_for_project(project.project_id, grants)
    job = container.job_service.queue_job(
        job_type="create_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project.project_id},
        project_id=project.project_id,
        reject_on_conflict=False,
    )
    return CreateProjectResponse(
        project={
            "project_id": project.project_id,
            "status": project.status,
            "status_reason": project.status_reason,
        },
        job=ProjectJobResponse(
            job_id=job.job_id, job_type=job.job_type, status=job.status
        ),
    )


@router.get("/{project_id}")
def get_project(project_id: str, request: Request, _user=Depends(get_current_user)):
    container = request.app.state.container
    project = container.authorization_service.require_project_viewer(_user, project_id)
    metrics = container.metrics_service.cached_project_metrics_map([project]).get(
        project.project_id
    )
    payload = _project_payload(container, project, _user, metrics)
    payload["recent_jobs"] = [
        job.to_api() for job in container.jobs.list_for_project(project_id)
    ]
    return payload


@router.get("/{project_id}/lockfile")
def download_project_lockfile(
    project_id: str, request: Request, _user=Depends(get_current_user)
):
    container = request.app.state.container
    project = container.authorization_service.require_project_viewer(_user, project_id)
    lockfile_path = container.instance_paths.project_paths(project.project_id).uv_lock_path
    if not lockfile_path.is_file():
        raise NotFoundError(f"Lockfile not found for project {project.project_id}.")
    return FileResponse(
        lockfile_path,
        media_type="text/plain; charset=utf-8",
        filename=f"{project.project_id}__uv.lock",
    )


@router.get("/{project_id}/export")
def download_project_export(
    project_id: str,
    request: Request,
    mode: str = Query(default="full"),
    _user=Depends(get_current_user),
):
    container = request.app.state.container
    project = container.authorization_service.require_project_admin(_user, project_id)
    export_mode = ExportService.parse_export_mode(mode)
    archive_path = (
        container.instance_paths.exports_dir
        / ExportService.download_filename(
            project_id=project.project_id,
            mode=export_mode,
        )
    )
    container.export_service.export_project(
        project=project,
        archive_path=archive_path,
        mode=export_mode,
    )
    return FileResponse(
        archive_path,
        media_type="application/zip",
        filename=archive_path.name,
    )


@router.patch("/{project_id}", dependencies=[Depends(require_same_origin)])
def update_project(
    project_id: str,
    payload: UpdateProjectRequest,
    request: Request,
    _user=Depends(get_current_user),
):
    container = request.app.state.container
    container.authorization_service.require_project_admin(_user, project_id)
    project = container.project_service.update_limits(
        project_id=project_id,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        disk_soft_limit_bytes=payload.disk_soft_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    return _project_payload(container, project, _user)


@router.delete(
    "/{project_id}",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def delete_project(project_id: str, request: Request, user=Depends(get_current_user)):
    request.app.state.container.authorization_service.require_project_admin(user, project_id)
    job = request.app.state.container.job_service.queue_job(
        job_type="delete_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project_id},
        project_id=project_id,
    )
    return {"job": job.to_api()}


@router.post(
    "/{project_id}/archive",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def archive_project(project_id: str, request: Request, user=Depends(get_current_user)):
    request.app.state.container.authorization_service.require_project_admin(user, project_id)
    job = request.app.state.container.job_service.queue_job(
        job_type="archive_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project_id},
        project_id=project_id,
    )
    return {"job": job.to_api()}


@router.post(
    "/{project_id}/start",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def start_project(project_id: str, request: Request, user=Depends(get_current_user)):
    current = request.app.state.container.authorization_service.require_project_viewer(user, project_id)
    if current.status == "running":
        return {"job": None, "project": current.to_api(), "already_running": True}
    job = request.app.state.container.job_service.queue_job(
        job_type="start_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project_id},
        project_id=project_id,
    )
    return {"job": job.to_api(), "project": None, "already_running": False}


@router.post(
    "/{project_id}/stop",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def stop_project(project_id: str, request: Request, user=Depends(get_current_user)):
    current = request.app.state.container.authorization_service.require_project_viewer(user, project_id)
    if current.status == "stopped":
        return {"job": None, "project": current.to_api(), "already_stopped": True}
    job = request.app.state.container.job_service.queue_job(
        job_type="stop_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project_id},
        project_id=project_id,
    )
    return {"job": job.to_api(), "project": None, "already_stopped": False}


@router.post(
    "/{project_id}/reinstall-environment",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def reinstall_environment(
    project_id: str,
    payload: ReinstallEnvironmentRequest,
    request: Request,
    user=Depends(get_current_user),
):
    request.app.state.container.authorization_service.require_project_admin(user, project_id)
    job = request.app.state.container.job_service.queue_job(
        job_type="reinstall_environment",
        requested_by_user_id=user.user_id,
        payload=payload.model_dump(),
        project_id=project_id,
    )
    return {"job": job.to_api()}


@router.post(
    "/{project_id}/update-environment",
    status_code=status.HTTP_202_ACCEPTED,
    dependencies=[Depends(require_same_origin)],
)
def update_environment(
    project_id: str,
    payload: UpdateEnvironmentRequest,
    request: Request,
    user=Depends(get_current_user),
):
    request.app.state.container.authorization_service.require_project_admin(user, project_id)
    job = request.app.state.container.job_service.queue_job(
        job_type="update_environment",
        requested_by_user_id=user.user_id,
        payload=payload.model_dump(),
        project_id=project_id,
    )
    return {"job": job.to_api()}


@router.post("/{project_id}/limits", dependencies=[Depends(require_same_origin)])
def update_limits(
    project_id: str,
    payload: LimitsRequest,
    request: Request,
    _user=Depends(get_current_user),
):
    container = request.app.state.container
    container.authorization_service.require_project_admin(_user, project_id)
    project = container.project_service.update_limits(
        project_id=project_id,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        disk_soft_limit_bytes=payload.disk_soft_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    return _project_payload(container, project, _user)


@router.get("/{project_id}/roles")
def get_project_roles(project_id: str, request: Request, user=Depends(get_current_user)):
    container = request.app.state.container
    container.authorization_service.require_project_viewer(user, project_id)
    return container.authorization_service.role_summary(project_id)


@router.put("/{project_id}/roles", dependencies=[Depends(require_same_origin)])
def replace_project_roles(
    project_id: str,
    payload: ProjectRolesRequest,
    request: Request,
    user=Depends(get_current_user),
):
    container = request.app.state.container
    container.authorization_service.replace_project_roles(user, project_id, payload.model_dump())
    return container.authorization_service.role_summary(project_id)
