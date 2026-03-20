from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.services.proxy_service import ProxyService


def test_proxy_http_uses_exact_incoming_request_path() -> None:
    request_path = '/p/test/'
    target = f'http://127.0.0.1:8123{request_path}'
    assert target == 'http://127.0.0.1:8123/p/test/'


def test_proxy_websocket_uses_exact_incoming_request_path() -> None:
    request_path = '/p/test/ws'
    target = f'ws://127.0.0.1:8123{request_path}'
    assert target == 'ws://127.0.0.1:8123/p/test/ws'


def test_rewrite_location_rewrites_upstream_localhost_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        'http://127.0.0.1:8123/edit/session-1',
        project_id='test',
        upstream_port=8123,
        request_host='127.0.0.1:8780',
        request_scheme='http',
    )
    assert rewritten == '/p/test/edit/session-1'


def test_rewrite_location_prefixes_relative_root_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        '/edit/session-1',
        project_id='test',
        upstream_port=8123,
        request_host='127.0.0.1:8780',
        request_scheme='http',
    )
    assert rewritten == '/p/test/edit/session-1'


def test_rewrite_location_prefixes_same_host_absolute_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        'http://127.0.0.1:8780/api/v1/edit/sessions/abc/',
        project_id='test',
        upstream_port=8123,
        request_host='127.0.0.1:8780',
        request_scheme='http',
    )
    assert rewritten == '/p/test/api/v1/edit/sessions/abc/'


def test_forward_headers_preserve_public_host_for_base_url_generation() -> None:
    service = ProxyService(project_service=SimpleNamespace(), job_service=SimpleNamespace())
    request = SimpleNamespace(
        headers={'host': '127.0.0.1:8780', 'accept': 'application/json'},
        url=SimpleNamespace(scheme='http'),
    )
    forwarded = service._forward_headers(request.headers, request=request, project_id='test', username='alice')
    assert forwarded['host'] == '127.0.0.1:8780'
    assert forwarded['X-Forwarded-Host'] == '127.0.0.1:8780'
