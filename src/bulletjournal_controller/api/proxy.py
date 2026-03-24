from __future__ import annotations

from fastapi import APIRouter, Depends, Request, WebSocket
from fastapi.responses import RedirectResponse

from bulletjournal_controller.api.auth import (
    get_current_session_bundle,
    require_same_origin,
)
from bulletjournal_controller.domain.enums import ProjectStatus
from bulletjournal_controller.domain.errors import AuthenticationError


router = APIRouter(tags=["proxy"])


@router.api_route(
    "/p/{project_id}", methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
)
async def proxy_http_root(
    project_id: str, request: Request, bundle=Depends(get_current_session_bundle)
):
    require_same_origin(request)
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
async def proxy_http(project_id: str, path: str, request: Request):
    require_same_origin(request)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    username = _proxy_username(request, path=path)
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path=path,
        request=request,
        authenticated_username=username,
    )


@router.websocket("/p/{project_id}/{path:path}")
async def proxy_websocket(websocket: WebSocket, project_id: str, path: str):
    username = _proxy_username(websocket, path=path)
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path=path,
        websocket=websocket,
        authenticated_username=username,
    )


@router.websocket("/p/{project_id}")
async def proxy_websocket_root(websocket: WebSocket, project_id: str):
    cookie = websocket.cookies.get("bulletjournal_session")
    bundle = websocket.app.state.container.auth_service.resolve_session(cookie)
    if bundle is None:
        await websocket.close(code=4401)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path="",
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


@router.websocket("/p/{project_id}/")
async def proxy_websocket_root_slash(websocket: WebSocket, project_id: str):
    cookie = websocket.cookies.get("bulletjournal_session")
    bundle = websocket.app.state.container.auth_service.resolve_session(cookie)
    if bundle is None:
        await websocket.close(code=4401)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path="",
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


def _proxy_username(connection: Request | WebSocket, *, path: str) -> str:
    cookie = connection.cookies.get("bulletjournal_session")
    bundle = connection.app.state.container.auth_service.resolve_session(cookie)
    if bundle is not None:
        return bundle.user.username
    if _is_public_editor_manifest_path(path):
        return "editor-session-manifest"
    raise AuthenticationError("Authentication required.")


def _is_public_editor_manifest_path(path: str) -> bool:
    return path.startswith("api/v1/edit/sessions/") and path.endswith("/manifest.json")


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
