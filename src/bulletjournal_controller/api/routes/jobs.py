from __future__ import annotations

from fastapi import APIRouter, Depends, Query, Request
from fastapi.responses import PlainTextResponse

from bulletjournal_controller.domain.errors import NotFoundError
from bulletjournal_controller.api.auth import get_current_user


router = APIRouter(prefix="/jobs", tags=["jobs"])


@router.get("/{job_id}")
def get_job(job_id: str, request: Request, user=Depends(get_current_user)):
    job = request.app.state.container.authorization_service.require_job_viewer(user, job_id)
    return job.to_api()


@router.get("/{job_id}/log", response_class=PlainTextResponse)
def get_job_log(
    job_id: str,
    request: Request,
    lines: int | None = Query(default=200, ge=1, le=2000),
    full: bool = False,
    user=Depends(get_current_user),
):
    request.app.state.container.authorization_service.require_job_viewer(user, job_id)
    return request.app.state.container.job_service.read_job_log(
        job_id, lines=None if full else lines
    )
