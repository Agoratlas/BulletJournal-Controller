from __future__ import annotations

from fastapi import APIRouter, Depends, Query, Request
from fastapi.responses import PlainTextResponse, StreamingResponse
from starlette.background import BackgroundTask

from bulletjournal_controller.api.auth import get_current_user

router = APIRouter(prefix='/jobs', tags=['jobs'])


@router.get('/{job_id}')
def get_job(job_id: str, request: Request, user=Depends(get_current_user)):
    job = request.app.state.container.authorization_service.require_job_viewer(user, job_id)
    return request.app.state.container.job_service.job_payload(job)


@router.get('/{job_id}/download')
def download_export(job_id: str, request: Request, user=Depends(get_current_user)):
    container = request.app.state.container
    job = container.authorization_service.require_job_viewer(user, job_id)
    container.authorization_service.require_project_admin(user, job.project_id)
    handle, metadata = container.job_service.export_downloads.open_download(job)

    def chunks():
        try:
            while chunk := handle.read(1024 * 1024):
                yield chunk
        finally:
            handle.close()

    return StreamingResponse(
        chunks(),
        media_type='application/zip',
        background=BackgroundTask(handle.close),
        headers={
            'Content-Disposition': f'attachment; filename="{metadata["filename"]}"',
            'Content-Length': str(metadata['size_bytes']),
            'Cache-Control': 'private, no-store',
        },
    )


@router.get('/{job_id}/log', response_class=PlainTextResponse)
def get_job_log(
    job_id: str,
    request: Request,
    lines: int | None = Query(default=200, ge=1, le=2000),
    full: bool = False,
    user=Depends(get_current_user),
):
    request.app.state.container.authorization_service.require_job_viewer(user, job_id)
    return request.app.state.container.job_service.read_job_log(job_id, lines=None if full else lines)
