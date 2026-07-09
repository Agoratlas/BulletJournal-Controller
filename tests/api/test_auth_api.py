from __future__ import annotations

import json

from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.api.deps import ServiceContainer


def test_login_logout_and_current_session(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    with TestClient(app) as client:
        response = client.get('/api/v1/system/info')
        assert response.status_code == 401

        login = client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'})
        assert login.status_code == 200
        current = client.get('/api/v1/session/current')
        assert current.status_code == 200
        assert current.json()['user']['username'] == 'admin'

        logout = client.post('/api/v1/session/logout', headers={'origin': 'http://testserver'})
        assert logout.status_code == 200
        assert client.get('/api/v1/session/current').status_code == 401


def test_logout_requires_authentication(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    with TestClient(app) as client:
        response = client.post('/api/v1/session/logout', headers={'origin': 'http://testserver'})
        assert response.status_code == 401


def test_serves_bundled_favicon(instance_root, server_config) -> None:
    app = create_app(instance_root=instance_root, server_config=server_config)
    with TestClient(app) as client:
        response = client.get('/favicon.svg')
        assert response.status_code == 200
        assert response.headers['content-type'] == 'image/svg+xml'
        assert '<svg' in response.text


def test_system_info_includes_default_project_limit_prefills(
    instance_root, server_config
) -> None:
    instance_json = instance_root / 'config' / 'instance.json'
    payload = json.loads(instance_json.read_text(encoding='utf-8'))
    assert payload['schema_version'] == 2
    payload['default_cpu_limit_cpus'] = 2.5
    payload['default_memory_limit_gb'] = 12
    payload['default_disk_soft_limit_gb'] = 80
    instance_json.write_text(json.dumps(payload, indent=2) + '\n', encoding='utf-8')

    app = create_app(instance_root=instance_root, server_config=server_config)
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    with TestClient(app) as client:
        login = client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'})
        assert login.status_code == 200

        response = client.get('/api/v1/system/info')

    assert response.status_code == 200
    assert response.json()['default_cpu_limit_cpus'] == 2.5
    assert response.json()['default_memory_limit_gb'] == 12
    assert response.json()['default_disk_soft_limit_gb'] == 80
    assert response.json()['gpu_supported'] is False


def test_system_info_reports_gpu_support_when_enabled(instance_root) -> None:
    from bulletjournal_controller.config import ServerConfig

    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret='test-secret',
            cookie_secure=False,
            enable_gpu=True,
        ),
    )
    container: ServiceContainer = app.state.container
    container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    with TestClient(app) as client:
        login = client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'})
        assert login.status_code == 200

        response = client.get('/api/v1/system/info')

    assert response.status_code == 200
    assert response.json()['gpu_supported'] is True
