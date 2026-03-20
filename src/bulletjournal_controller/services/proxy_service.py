from __future__ import annotations

import asyncio
from typing import TYPE_CHECKING, Any
from urllib.parse import urlencode

from bulletjournal_controller.domain.enums import ProjectStatus
from bulletjournal_controller.domain.errors import RuntimeOperationError

if TYPE_CHECKING:
    from fastapi import Request, WebSocket
    from fastapi.responses import Response


HOP_BY_HOP_HEADERS = {
    'connection',
    'keep-alive',
    'proxy-authenticate',
    'proxy-authorization',
    'te',
    'trailer',
    'transfer-encoding',
    'upgrade',
}


class ProxyService:
    def __init__(self, *, project_service):
        self.project_service = project_service

    def ensure_project_ready(self, project_id: str):
        project = self.project_service.get_project(project_id)
        if project.status == ProjectStatus.STOPPED.value:
            project = self.project_service.start_project(project_id)
        if project.container_port is None:
            raise RuntimeOperationError('Project runtime is unavailable.')
        return project

    async def proxy_http(self, *, project_id: str, path: str, request: Request, authenticated_username: str) -> Response:
        import httpx
        from fastapi.responses import StreamingResponse

        _ = path
        project = self.ensure_project_ready(project_id)
        query = urlencode(list(request.query_params.multi_items()))
        target_path = request.url.path
        target = f'http://127.0.0.1:{project.container_port}{target_path}'
        if query:
            target = f'{target}?{query}'
        body = await request.body()
        async with httpx.AsyncClient(timeout=None, follow_redirects=False) as client:
            upstream = client.build_request(
                request.method,
                target,
                content=body,
                headers=self._forward_headers(request.headers, request=request, project_id=project_id, username=authenticated_username),
            )
            response = await client.send(upstream, stream=True)

            async def body_iterator():
                async for chunk in response.aiter_bytes():
                    yield chunk
                await response.aclose()

            return StreamingResponse(
                body_iterator(),
                status_code=response.status_code,
                headers=self._response_headers(response.headers),
                media_type=response.headers.get('content-type'),
            )

    async def proxy_websocket(self, *, project_id: str, path: str, websocket: WebSocket, authenticated_username: str) -> None:
        from websockets.asyncio.client import connect as ws_connect

        _ = path
        project = self.ensure_project_ready(project_id)
        query = urlencode(list(websocket.query_params.multi_items()))
        target_path = websocket.url.path
        target = f'ws://127.0.0.1:{project.container_port}{target_path}'
        if query:
            target = f'{target}?{query}'
        requested_subprotocols = [item for item in websocket.scope.get('subprotocols', []) if item]
        async with ws_connect(
            target,
            additional_headers=list(self._websocket_headers(websocket, project_id=project_id, username=authenticated_username).items()),
            subprotocols=requested_subprotocols or None,
            open_timeout=30,
        ) as upstream:
            await websocket.accept(subprotocol=upstream.subprotocol)
            await self._bridge_websocket(websocket, upstream)

    def _forward_headers(self, headers, *, request: Request, project_id: str, username: str) -> dict[str, str]:
        forwarded = {
            key: value
            for key, value in headers.items()
            if key.lower() not in HOP_BY_HOP_HEADERS and key.lower() not in {'host', 'content-length'}
        }
        forwarded['X-Forwarded-Host'] = request.headers.get('host', '')
        forwarded['X-Forwarded-Proto'] = request.url.scheme
        forwarded['X-Forwarded-Prefix'] = f'/p/{project_id}'
        forwarded['X-BulletJournal-Authenticated-User'] = username
        return forwarded

    def _websocket_headers(self, websocket: WebSocket, *, project_id: str, username: str) -> dict[str, str]:
        forwarded = {
            key: value
            for key, value in websocket.headers.items()
            if key.lower() not in HOP_BY_HOP_HEADERS and not key.lower().startswith('sec-websocket-') and key.lower() != 'host'
        }
        forwarded['X-Forwarded-Host'] = websocket.headers.get('host', '')
        forwarded['X-Forwarded-Proto'] = websocket.url.scheme
        forwarded['X-Forwarded-Prefix'] = f'/p/{project_id}'
        forwarded['X-BulletJournal-Authenticated-User'] = username
        return forwarded

    def _response_headers(self, headers) -> dict[str, str]:
        return {key: value for key, value in headers.items() if key.lower() not in HOP_BY_HOP_HEADERS and key.lower() != 'content-length'}

    async def _bridge_websocket(self, websocket: WebSocket, upstream: Any) -> None:
        from fastapi import WebSocketDisconnect
        from websockets.exceptions import ConnectionClosed

        async def client_to_upstream() -> None:
            try:
                while True:
                    message = await websocket.receive()
                    if message['type'] == 'websocket.disconnect':
                        break
                    if message.get('text') is not None:
                        await upstream.send(message['text'])
                    elif message.get('bytes') is not None:
                        await upstream.send(message['bytes'])
            except WebSocketDisconnect:
                pass
            finally:
                try:
                    await upstream.close()
                except ConnectionClosed:
                    pass

        async def upstream_to_client() -> None:
            try:
                while True:
                    message = await upstream.recv()
                    if isinstance(message, bytes):
                        await websocket.send_bytes(message)
                    else:
                        await websocket.send_text(message)
            except ConnectionClosed:
                pass
            finally:
                await self._safe_close_websocket(websocket)

        client_task = asyncio.create_task(client_to_upstream())
        upstream_task = asyncio.create_task(upstream_to_client())
        done, pending = await asyncio.wait({client_task, upstream_task}, return_when=asyncio.FIRST_COMPLETED)
        for task in pending:
            task.cancel()
        for task in done:
            await task

    async def _safe_close_websocket(self, websocket: WebSocket, code: int = 1000) -> None:
        from starlette.websockets import WebSocketState

        if websocket.client_state is WebSocketState.DISCONNECTED:
            return
        if websocket.application_state is WebSocketState.DISCONNECTED:
            return
        try:
            await websocket.close(code=code)
        except RuntimeError:
            return
