from __future__ import annotations

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
