from __future__ import annotations

from fastapi import APIRouter, Request

from bulletjournal_controller.domain.errors import NotFoundError


router = APIRouter(prefix='/jobs', tags=['jobs'])


@router.get('/{job_id}')
def get_job(job_id: str, request: Request):
    job = request.app.state.container.job_service.get_job(job_id)
    if job is None:
        raise NotFoundError(f'Job {job_id} was not found.')
    return job.to_api()
