from __future__ import annotations

import json

from fastapi import APIRouter, Depends, Request, WebSocket
from fastapi.responses import JSONResponse, RedirectResponse

from bulletjournal_controller.api.auth import (
    get_current_session_bundle,
    require_same_origin,
)
from bulletjournal_controller.domain.enums import ProjectStatus

router = APIRouter(tags=['proxy'])

_READ_TOOLS = {
    'list_templates',
    'get_template',
    'get_project_state',
    'get_run',
    'wait_for_run',
    'get_notebook_source',
    'get_execution_logs',
    'get_dashboard',
}
_WRITE_TOOLS = {
    'apply_graph_changes',
    'set_constant_value',
    'update_notebook_source',
    'patch_notebook_source',
    'create_dashboard',
    'update_dashboard',
}
_RUN_TOOLS = {'start_run', 'cancel_run'}


@router.api_route('/p/{project_id}/mcp', methods=['GET', 'POST', 'DELETE'])
async def proxy_mcp(project_id: str, request: Request):
    container = request.app.state.container
    try:
        user, token = container.oauth_service.authenticate(request.headers.get('authorization'), project_id=project_id)
    except Exception:
        return JSONResponse(
            {'code': 'unauthorized', 'message': 'Bearer authentication failed.'},
            status_code=401,
            headers={'WWW-Authenticate': 'Bearer'},
        )
    if request.method == 'POST':
        try:
            payload = json.loads(await request.body())
            required_scope = _mcp_scope(payload)
        except (UnicodeDecodeError, json.JSONDecodeError):
            return JSONResponse(
                {
                    'code': 'invalid_argument',
                    'message': 'MCP request must be valid JSON-RPC.',
                },
                status_code=400,
            )
        if required_scope is None:
            return JSONResponse(
                {
                    'code': 'insufficient_scope',
                    'message': 'Unknown MCP tool is not authorized.',
                },
                status_code=403,
            )
        if required_scope not in token.scopes.split():
            return JSONResponse(
                {
                    'code': 'insufficient_scope',
                    'message': 'Token does not grant this MCP capability.',
                },
                status_code=403,
                headers={'WWW-Authenticate': f'Bearer scope="{required_scope}"'},
            )
    return await container.proxy_service.proxy_mcp(project_id=project_id, request=request, username=user.username)


def _mcp_scope(payload: object) -> str | None:
    if not isinstance(payload, dict) or payload.get('method') != 'tools/call':
        return 'mcp:read'
    params = payload.get('params')
    name = params.get('name') if isinstance(params, dict) else None
    if name in _READ_TOOLS:
        return 'mcp:read'
    if name in _WRITE_TOOLS:
        return 'mcp:write'
    if name in _RUN_TOOLS:
        return 'mcp:run'
    return None


@router.api_route('/p/{project_id}', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])
async def proxy_http_root(project_id: str, request: Request, bundle=Depends(get_current_session_bundle)):
    require_same_origin(request)
    request.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path='',
        request=request,
        authenticated_username=bundle.user.username,
        target_path_override=request.url.path if request.url.path.endswith('/') else f'{request.url.path}/',
    )


@router.api_route('/p/{project_id}/', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])
async def proxy_http_root_slash(project_id: str, request: Request, bundle=Depends(get_current_session_bundle)):
    require_same_origin(request)
    request.app.state.container.authorization_service.require_project_viewer(bundle.user, project_id)
    stopped_redirect = _stopped_project_redirect_response(request, project_id)
    if stopped_redirect is not None:
        return stopped_redirect
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path='',
        request=request,
        authenticated_username=bundle.user.username,
        target_path_override=request.url.path,
    )


@router.api_route(
    '/p/{project_id}/{path:path}',
    methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
)
async def proxy_http(
    project_id: str,
    path: str,
    request: Request,
    bundle=Depends(get_current_session_bundle),
):
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


@router.websocket('/p/{project_id}/{path:path}')
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


@router.websocket('/p/{project_id}')
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
        path='',
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


@router.websocket('/p/{project_id}/')
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
        path='',
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


def _websocket_session_bundle(websocket: WebSocket):
    return websocket.app.state.container.auth_service.resolve_session(websocket.cookies.get('bulletjournal_session'))


def _stopped_project_redirect_response(request: Request, project_id: str) -> RedirectResponse | None:
    project = request.app.state.container.project_service.get_project(project_id)
    if project.status == ProjectStatus.RUNNING.value and project.container_port is not None:
        return None
    return RedirectResponse(url=f'/projects/{project_id}', status_code=307)
