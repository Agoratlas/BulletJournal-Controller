from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.services.proxy_service import ProxyService


def test_proxy_http_uses_exact_incoming_request_path() -> None:
    service = ProxyService(project_service=SimpleNamespace(), job_service=SimpleNamespace())
    request = SimpleNamespace(
        url=SimpleNamespace(path='/p/test/'),
        query_params=SimpleNamespace(multi_items=lambda: []),
    )
    project = SimpleNamespace(container_port=8123)
    service.ensure_project_ready = lambda project_id: project  # type: ignore[method-assign]

    target_path = request.url.path
    target = f'http://127.0.0.1:{project.container_port}{target_path}'
    assert target == 'http://127.0.0.1:8123/p/test/'


def test_proxy_websocket_uses_exact_incoming_request_path() -> None:
    service = ProxyService(project_service=SimpleNamespace(), job_service=SimpleNamespace())
    websocket = SimpleNamespace(
        url=SimpleNamespace(path='/p/test/ws'),
        query_params=SimpleNamespace(multi_items=lambda: []),
    )
    project = SimpleNamespace(container_port=8123)
    service.ensure_project_ready = lambda project_id: project  # type: ignore[method-assign]

    target_path = websocket.url.path
    target = f'ws://127.0.0.1:{project.container_port}{target_path}'
    assert target == 'ws://127.0.0.1:8123/p/test/ws'
