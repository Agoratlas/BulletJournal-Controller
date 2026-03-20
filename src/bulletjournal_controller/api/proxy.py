from __future__ import annotations

from fastapi import APIRouter, Depends, Request, WebSocket

from bulletjournal_controller.api.auth import get_current_session_bundle, require_same_origin


router = APIRouter(tags=['proxy'])


@router.api_route('/p/{project_id}', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])
async def proxy_http_root(project_id: str, request: Request, bundle=Depends(get_current_session_bundle)):
    require_same_origin(request)
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path='',
        request=request,
        authenticated_username=bundle.user.username,
    )


@router.api_route('/p/{project_id}/{path:path}', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'])
async def proxy_http(project_id: str, path: str, request: Request, bundle=Depends(get_current_session_bundle)):
    require_same_origin(request)
    return await request.app.state.container.proxy_service.proxy_http(
        project_id=project_id,
        path=path,
        request=request,
        authenticated_username=bundle.user.username,
    )


@router.websocket('/p/{project_id}/{path:path}')
async def proxy_websocket(websocket: WebSocket, project_id: str, path: str):
    cookie = websocket.cookies.get('bulletjournal_session')
    bundle = websocket.app.state.container.auth_service.resolve_session(cookie)
    if bundle is None:
        await websocket.close(code=4401)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path=path,
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )


@router.websocket('/p/{project_id}')
async def proxy_websocket_root(websocket: WebSocket, project_id: str):
    cookie = websocket.cookies.get('bulletjournal_session')
    bundle = websocket.app.state.container.auth_service.resolve_session(cookie)
    if bundle is None:
        await websocket.close(code=4401)
        return
    await websocket.app.state.container.proxy_service.proxy_websocket(
        project_id=project_id,
        path='',
        websocket=websocket,
        authenticated_username=bundle.user.username,
    )
