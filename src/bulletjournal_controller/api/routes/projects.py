from __future__ import annotations

from fastapi import APIRouter, Depends, Request, Response, status

from bulletjournal_controller.api.auth import get_current_user, require_same_origin
from bulletjournal_controller.api.schemas import (
    CreateProjectRequest,
    CreateProjectResponse,
    LimitsRequest,
    ProjectJobResponse,
    ReinstallEnvironmentRequest,
    UpdateEnvironmentRequest,
    UpdateProjectRequest,
)


router = APIRouter(prefix='/projects', tags=['projects'])


@router.get('')
def list_projects(request: Request, _user=Depends(get_current_user)):
    return [project.to_api() for project in request.app.state.container.project_service.list_projects()]


@router.post('', status_code=status.HTTP_201_CREATED, response_model=CreateProjectResponse, dependencies=[Depends(require_same_origin)])
def create_project(payload: CreateProjectRequest, request: Request, user=Depends(get_current_user)):
    container = request.app.state.container
    project = container.project_service.create_project(
        project_id=payload.project_id,
        created_by_user_id=user.user_id,
        python_version=payload.python_version,
        bulletjournal_version=payload.bulletjournal_version,
        custom_requirements_text=payload.custom_requirements_text,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    job = container.job_service.queue_job(
        job_type='create_project',
        requested_by_user_id=user.user_id,
        payload={'project_id': project.project_id},
        project_id=project.project_id,
        reject_on_conflict=False,
    )
    return CreateProjectResponse(
        project={'project_id': project.project_id, 'status': project.status, 'status_reason': project.status_reason},
        job=ProjectJobResponse(job_id=job.job_id, job_type=job.job_type, status=job.status),
    )


@router.get('/{project_id}')
def get_project(project_id: str, request: Request, _user=Depends(get_current_user)):
    project = request.app.state.container.project_service.get_project(project_id)
    payload = project.to_api()
    payload['recent_jobs'] = [job.to_api() for job in request.app.state.container.jobs.list_for_project(project_id)]
    return payload


@router.patch('/{project_id}', dependencies=[Depends(require_same_origin)])
def update_project(project_id: str, payload: UpdateProjectRequest, request: Request, _user=Depends(get_current_user)):
    project = request.app.state.container.project_service.update_limits(
        project_id=project_id,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    return project.to_api()


@router.delete('/{project_id}', status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(require_same_origin)])
def delete_project(project_id: str, request: Request, user=Depends(get_current_user)):
    job = request.app.state.container.job_service.queue_job(
        job_type='delete_project',
        requested_by_user_id=user.user_id,
        payload={'project_id': project_id},
        project_id=project_id,
    )
    return {'job': job.to_api()}


@router.post('/{project_id}/start', status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(require_same_origin)])
def start_project(project_id: str, request: Request, user=Depends(get_current_user)):
    current = request.app.state.container.project_service.get_project(project_id)
    if current.status == 'running':
        return {'job': None, 'project': current.to_api(), 'already_running': True}
    job = request.app.state.container.job_service.queue_job(
        job_type='start_project',
        requested_by_user_id=user.user_id,
        payload={'project_id': project_id},
        project_id=project_id,
    )
    return {'job': job.to_api(), 'project': None, 'already_running': False}


@router.post('/{project_id}/stop', status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(require_same_origin)])
def stop_project(project_id: str, request: Request, user=Depends(get_current_user)):
    current = request.app.state.container.project_service.get_project(project_id)
    if current.status == 'stopped':
        return {'job': None, 'project': current.to_api(), 'already_stopped': True}
    job = request.app.state.container.job_service.queue_job(
        job_type='stop_project',
        requested_by_user_id=user.user_id,
        payload={'project_id': project_id},
        project_id=project_id,
    )
    return {'job': job.to_api(), 'project': None, 'already_stopped': False}


@router.post('/{project_id}/reinstall-environment', status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(require_same_origin)])
def reinstall_environment(project_id: str, payload: ReinstallEnvironmentRequest, request: Request, user=Depends(get_current_user)):
    job = request.app.state.container.job_service.queue_job(
        job_type='reinstall_environment',
        requested_by_user_id=user.user_id,
        payload=payload.model_dump(),
        project_id=project_id,
    )
    return {'job': job.to_api()}


@router.post('/{project_id}/update-environment', status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(require_same_origin)])
def update_environment(project_id: str, payload: UpdateEnvironmentRequest, request: Request, user=Depends(get_current_user)):
    job = request.app.state.container.job_service.queue_job(
        job_type='update_environment',
        requested_by_user_id=user.user_id,
        payload=payload.model_dump(),
        project_id=project_id,
    )
    return {'job': job.to_api()}


@router.post('/{project_id}/limits', dependencies=[Depends(require_same_origin)])
def update_limits(project_id: str, payload: LimitsRequest, request: Request, _user=Depends(get_current_user)):
    project = request.app.state.container.project_service.update_limits(
        project_id=project_id,
        cpu_limit_millis=payload.cpu_limit_millis,
        memory_limit_bytes=payload.memory_limit_bytes,
        gpu_enabled=payload.gpu_enabled,
    )
    return project.to_api()
