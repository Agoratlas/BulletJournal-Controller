from __future__ import annotations

import json

import pytest
from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.domain.errors import ConfigurationError


def _configure_metrics(instance_root, mode: str) -> None:
    path = instance_root / "config" / "instance.json"
    payload = json.loads(path.read_text(encoding="utf-8"))
    payload["prometheus_metrics_mode"] = mode
    path.write_text(json.dumps(payload) + "\n", encoding="utf-8")


def test_metrics_endpoint_is_disabled_by_default(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    with TestClient(app) as client:
        assert client.get("/metrics").status_code == 404


def test_metrics_endpoint_can_be_unauthenticated(instance_root, server_config) -> None:
    _configure_metrics(instance_root, "unauthenticated")
    app = create_app(instance_root=instance_root, server_config=server_config)
    with TestClient(app) as client:
        response = client.get("/metrics")
    assert response.status_code == 200
    assert "bulletjournal_controller_system_cpu_percent" in response.text


def test_metrics_scrape_does_not_refresh_resources(instance_root, server_config, monkeypatch) -> None:
    _configure_metrics(instance_root, "unauthenticated")
    app = create_app(instance_root=instance_root, server_config=server_config)
    container = app.state.container
    monkeypatch.setattr(
        container,
        "refresh_prometheus_resources",
        lambda: (_ for _ in ()).throw(AssertionError("scrape must not sample")),
    )
    with TestClient(app) as client:
        response = client.get("/metrics")
    assert response.status_code == 200


def test_metrics_endpoint_requires_configured_api_key(instance_root) -> None:
    _configure_metrics(instance_root, "authenticated")
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            prometheus_api_key="metrics-secret",
        ),
    )
    with TestClient(app) as client:
        assert client.get("/metrics").status_code == 401
        assert client.get("/metrics", headers={"X-API-Key": "incorrect"}).status_code == 401
        response = client.get("/metrics", headers={"X-API-Key": "metrics-secret"})
    assert response.status_code == 200


def test_authenticated_metrics_requires_server_api_key(instance_root, server_config) -> None:
    _configure_metrics(instance_root, "authenticated")
    with pytest.raises(ConfigurationError, match="BULLETJOURNAL_PROMETHEUS_API_KEY"):
        create_app(instance_root=instance_root, server_config=server_config)


def test_controller_http_metrics_use_route_templates_and_exclude_metrics(
    instance_root, server_config
) -> None:
    _configure_metrics(instance_root, "unauthenticated")
    app = create_app(instance_root=instance_root, server_config=server_config)
    container = app.state.container
    container.auth_service.create_user(
        username="admin", display_name="Admin", password="secret-pass"
    )
    with TestClient(app) as client:
        login = client.post(
            "/api/v1/session/login",
            json={"username": "admin", "password": "secret-pass"},
        )
        assert login.status_code == 200
        response = client.get("/api/v1/system/info")
        assert response.status_code == 200
        client.get("/metrics")

    output = container.observability.render().decode("utf-8")
    assert (
        'bulletjournal_controller_http_requests_total{method="GET",route="/api/v1/system/info",status_class="2xx"} 1.0'
        in output
    )
    assert 'route="/metrics"' not in output
