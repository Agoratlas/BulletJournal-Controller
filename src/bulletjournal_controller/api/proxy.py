from __future__ import annotations

from fastapi import APIRouter, Depends, Request, WebSocket
from fastapi.responses import RedirectResponse

from bulletjournal_controller.api.auth import (
    get_current_session_bundle,
    require_same_origin,
)
from bulletjournal_controller.domain.enums import ProjectStatus


router = APIRouter(tags=["proxy"])


@router.api_route(
    "/p/{project_id}", methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
)
async def proxy_http_root(
    project_id: str, request: Request, bundle=Depends(get_current_session_bundle)
):
    require_same_origin(request)
    request.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path="",
        request=request,
        authenticated_username=bundle.user.username,
        target_path_override=request.url.path
        if request.url.path.endswith("/")
        else f"{request.url.path}/",
    )


@router.api_route(
    "/p/{project_id}/", methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
)
async def proxy_http_root_slash(
    project_id: str, request: Request, bundle=Depends(get_current_session_bundle)
):
    require_same_origin(request)
    request.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path="",
        request=request,
        authenticated_username=bundle.user.username,
        target_path_override=request.url.path,
    )


@router.api_route(
    "/p/{project_id}/{path:path}",
    methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
)
async def proxy_http(project_id: str, path: str, request: Request, bundle=Depends(get_current_session_bundle)):
    require_same_origin(request)
    request.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path=path,
        request=request,
        authenticated_username=bundle.user.username,
    )


@router.websocket("/p/{project_id}/{path:path}")
async def proxy_websocket(websocket: WebSocket, project_id: str, path: str):
    bundle = _websocket_session_bundle(websocket)
    if bundle is None:
        await websocket.close(code=4401)
        return
    try:
        websocket.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    except Exception:
        await websocket.close(code=4404)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path=path,
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


@router.websocket("/p/{project_id}")
async def proxy_websocket_root(websocket: WebSocket, project_id: str):
    bundle = _websocket_session_bundle(websocket)
    if bundle is None:
        await websocket.close(code=4401)
        return
    try:
        websocket.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    except Exception:
        await websocket.close(code=4404)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path="",
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


@router.websocket("/p/{project_id}/")
async def proxy_websocket_root_slash(websocket: WebSocket, project_id: str):
    bundle = _websocket_session_bundle(websocket)
    if bundle is None:
        await websocket.close(code=4401)
        return
    try:
        websocket.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    except Exception:
        await websocket.close(code=4404)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path="",
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


def _websocket_session_bundle(websocket: WebSocket):
    return websocket.app.state.container.auth_service.resolve_session(
        websocket.cookies.get("bulletjournal_session")
    )

def _stopped_project_redirect_response(
    request: Request, project_id: str
) -> RedirectResponse | None:
    project = request.app.state.container.project_service.get_project(project_id)
    if (
        project.status == ProjectStatus.RUNNING.value
        and project.container_port is not None
    ):
        return None
    return RedirectResponse(url=f"/projects/{project_id}", status_code=307)
