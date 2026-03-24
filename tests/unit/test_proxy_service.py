from __future__ import annotations

from types import SimpleNamespace
from typing import Any, cast

import pytest

from bulletjournal_controller.services.proxy_service import ProxyService


def test_proxy_http_uses_exact_incoming_request_path() -> None:
    request_path = "/p/test/"
    target = f"http://127.0.0.1:8123{request_path}"
    assert target == "http://127.0.0.1:8123/p/test/"


def test_proxy_websocket_uses_exact_incoming_request_path() -> None:
    request_path = "/p/test/ws"
    target = f"ws://127.0.0.1:8123{request_path}"
    assert target == "ws://127.0.0.1:8123/p/test/ws"


def test_rewrite_location_rewrites_upstream_localhost_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        "http://127.0.0.1:8123/edit/session-1",
        project_id="test",
        upstream_port=8123,
        request_host="127.0.0.1:8780",
        request_scheme="http",
    )
    assert rewritten == "/p/test/edit/session-1"


def test_rewrite_location_prefixes_relative_root_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        "/edit/session-1",
        project_id="test",
        upstream_port=8123,
        request_host="127.0.0.1:8780",
        request_scheme="http",
    )
    assert rewritten == "/p/test/edit/session-1"


def test_rewrite_location_prefixes_same_host_absolute_redirects() -> None:
    rewritten = ProxyService._rewrite_location(
        "http://127.0.0.1:8780/api/v1/edit/sessions/abc/",
        project_id="test",
        upstream_port=8123,
        request_host="127.0.0.1:8780",
        request_scheme="http",
    )
    assert rewritten == "/p/test/api/v1/edit/sessions/abc/"


def test_forward_headers_preserve_public_host_for_base_url_generation() -> None:
    service = ProxyService(
        project_service=SimpleNamespace(), job_service=SimpleNamespace()
    )
    request = SimpleNamespace(
        headers={"host": "127.0.0.1:8780", "accept": "application/json"},
        url=SimpleNamespace(scheme="http"),
    )
    forwarded = service._forward_headers(
        request.headers,
        request=cast(Any, request),
        project_id="test",
        username="alice",
    )
    assert forwarded["host"] == "127.0.0.1:8780"
    assert forwarded["X-Forwarded-Host"] == "127.0.0.1:8780"


def test_forward_headers_drop_origin_for_editor_session_requests() -> None:
    service = ProxyService(
        project_service=SimpleNamespace(), job_service=SimpleNamespace()
    )
    request = SimpleNamespace(
        headers={
            "host": "127.0.0.1:8780",
            "accept": "application/json",
            "origin": "http://127.0.0.1:8780",
        },
        url=SimpleNamespace(scheme="http"),
    )

    forwarded = service._forward_headers(
        request.headers,
        request=cast(Any, request),
        project_id="test",
        username="alice",
        target_path="/p/test/api/v1/edit/sessions/demo/manifest.json",
    )

    assert "origin" not in forwarded


def test_websocket_headers_override_host_for_editor_session_requests() -> None:
    service = ProxyService(
        project_service=SimpleNamespace(), job_service=SimpleNamespace()
    )
    websocket = SimpleNamespace(
        headers={
            "host": "127.0.0.1:8780",
            "origin": "http://127.0.0.1:8780",
            "cookie": "bulletjournal_session=abc",
        },
        url=SimpleNamespace(scheme="ws"),
    )

    forwarded = service._websocket_headers(
        cast(Any, websocket),
        project_id="test",
        username="alice",
        target_path="/p/test/api/v1/edit/sessions/demo/ws",
        upstream_port=8123,
    )

    assert "origin" not in forwarded
    assert forwarded["host"] == "127.0.0.1:8123"
    assert forwarded["X-Forwarded-Host"] == "127.0.0.1:8780"


def test_require_running_project_rejects_stopped_project() -> None:
    service = ProxyService(
        project_service=SimpleNamespace(
            get_project=lambda _project_id: SimpleNamespace(
                status="stopped",
                container_port=None,
            )
        ),
        job_service=SimpleNamespace(),
    )

    with pytest.raises(Exception, match="Project runtime is unavailable"):
        service.require_running_project("test")
