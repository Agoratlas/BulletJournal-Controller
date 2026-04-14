from __future__ import annotations

from fastapi import APIRouter, Query, Request
from fastapi.responses import PlainTextResponse

from bulletjournal_controller.domain.errors import NotFoundError


router = APIRouter(prefix="/jobs", tags=["jobs"])


@router.get("/{job_id}")
def get_job(job_id: str, request: Request):
    job = request.app.state.container.job_service.get_job(job_id)
    if job is None:
        raise NotFoundError(f"Job {job_id} was not found.")
    return job.to_api()


@router.get("/{job_id}/log", response_class=PlainTextResponse)
def get_job_log(
    job_id: str, request: Request, lines: int = Query(default=200, ge=1, le=2000)
):
    return request.app.state.container.job_service.read_job_log(job_id, lines=lines)
