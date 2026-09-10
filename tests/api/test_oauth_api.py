from __future__ import annotations

import base64
import hashlib
from urllib.parse import parse_qs, urlsplit

from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.services.oauth_service import OAuthService


def test_authorization_server_metadata_supports_public_pkce_clients(
    instance_root,
) -> None:
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            public_origin="http://localhost:8780",
        ),
    )

    with TestClient(app) as client:
        response = client.get("/.well-known/oauth-authorization-server")

    assert response.status_code == 200
    metadata = response.json()
    assert metadata["issuer"] == "http://localhost:8780"
    assert metadata["response_types_supported"] == ["code"]
    assert metadata["grant_types_supported"] == ["authorization_code", "refresh_token"]
    assert metadata["token_endpoint_auth_methods_supported"] == ["none"]
    assert metadata["code_challenge_methods_supported"] == ["S256"]


def test_authorize_accepts_an_omitted_scope_before_session_authentication(
    instance_root,
) -> None:
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            public_origin="http://127.0.0.1:8780",
        ),
    )

    with TestClient(app) as client:
        response = client.get(
            "/oauth/authorize",
            params={
                "response_type": "code",
                "client_id": "client-test",
                "redirect_uri": "http://127.0.0.1:19876/mcp/oauth/callback",
                "resource": "http://127.0.0.1:8780/p/test1/mcp",
                "code_challenge": "challenge",
                "code_challenge_method": "S256",
            },
        )

    assert response.status_code == 401


def test_code_exchange_accepts_omitted_resource(instance_root) -> None:
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            public_origin="http://127.0.0.1:8780",
        ),
    )
    service: OAuthService = app.state.container.oauth_service
    user = app.state.container.auth_service.create_user(
        username="analyst", display_name="Analyst", password="secret-pass"
    )
    app.state.container.project_service.create_project(
        project_id="test1",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor",
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    client_id = service.register_client(
        {
            "redirect_uris": ["http://127.0.0.1:19876/mcp/oauth/callback"],
        }
    )["client_id"]
    verifier = "verifier"
    challenge = (
        base64.urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest())
        .rstrip(b"=")
        .decode()
    )
    redirect = service.authorize(
        user=user,
        client_id=str(client_id),
        redirect_uri="http://127.0.0.1:19876/mcp/oauth/callback",
        resource="http://127.0.0.1:8780/p/test1/mcp",
        project_id="test1",
        scopes=["mcp:read"],
        code_challenge=challenge,
        state="state",
    )
    code = parse_qs(urlsplit(redirect).query)["code"][0]

    tokens = service.exchange_code(
        code=code,
        client_id=str(client_id),
        redirect_uri="http://127.0.0.1:19876/mcp/oauth/callback",
        resource=None,
        code_verifier=verifier,
    )

    assert tokens["token_type"] == "Bearer"


def test_token_endpoint_returns_tokens_without_resource(instance_root) -> None:
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            public_origin="http://127.0.0.1:8780",
        ),
    )
    container = app.state.container
    service: OAuthService = container.oauth_service
    user = container.auth_service.create_user(
        username="analyst", display_name="Analyst", password="secret-pass"
    )
    container.project_service.create_project(
        project_id="test1",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor",
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    client_id = service.register_client(
        {"redirect_uris": ["http://127.0.0.1:19876/mcp/oauth/callback"]}
    )["client_id"]
    verifier = "verifier"
    challenge = (
        base64.urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest())
        .rstrip(b"=")
        .decode()
    )
    redirect = service.authorize(
        user=user,
        client_id=str(client_id),
        redirect_uri="http://127.0.0.1:19876/mcp/oauth/callback",
        resource="http://127.0.0.1:8780/p/test1/mcp",
        project_id="test1",
        scopes=["mcp:read"],
        code_challenge=challenge,
        state="state",
    )
    code = parse_qs(urlsplit(redirect).query)["code"][0]

    with TestClient(app) as client:
        response = client.post(
            "/oauth/token",
            data={
                "grant_type": "authorization_code",
                "code": code,
                "client_id": client_id,
                "redirect_uri": "http://127.0.0.1:19876/mcp/oauth/callback",
                "code_verifier": verifier,
            },
        )

    assert response.status_code == 200
    assert response.json()["token_type"] == "Bearer"
    assert response.json()["refresh_token"]


def test_authorize_requires_authenticated_user_consent(instance_root) -> None:
    app = create_app(
        instance_root=instance_root,
        server_config=ServerConfig(
            session_secret="test-secret",
            cookie_secure=False,
            public_origin="http://127.0.0.1:8780",
        ),
    )
    container = app.state.container
    user = container.auth_service.create_user(
        username="analyst", display_name="Analyst", password="secret-pass"
    )
    container.project_service.create_project(
        project_id="test1",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor",
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    client_id = container.oauth_service.register_client(
        {
            "client_name": "OpenCode",
            "redirect_uris": ["http://127.0.0.1:19876/mcp/oauth/callback"],
        }
    )["client_id"]
    verifier = "verifier"
    challenge = (
        base64.urlsafe_b64encode(hashlib.sha256(verifier.encode()).digest())
        .rstrip(b"=")
        .decode()
    )
    params = {
        "response_type": "code",
        "client_id": str(client_id),
        "redirect_uri": "http://127.0.0.1:19876/mcp/oauth/callback",
        "resource": "http://127.0.0.1:8780/p/test1/mcp",
        "code_challenge": challenge,
        "code_challenge_method": "S256",
        "scope": "mcp:read",
        "state": "state",
    }

    with TestClient(app) as client:
        login = client.post(
            "/api/v1/session/login",
            json={"username": "analyst", "password": "secret-pass"},
            headers={"Origin": "http://127.0.0.1:8780"},
        )
        assert login.status_code == 200

        prompt = client.get("/oauth/authorize", params=params)
        assert prompt.status_code == 200
        assert "Authorize MCP access?" in prompt.text
        assert "OpenCode" in prompt.text
        assert "mcp:read" in prompt.text
        assert "code=" not in prompt.text

        approved = client.post(
            "/oauth/authorize",
            data=params,
            headers={"Origin": "http://127.0.0.1:8780"},
            follow_redirects=False,
        )

    assert approved.status_code == 302
    assert parse_qs(urlsplit(approved.headers["location"]).query)["state"] == ["state"]
    assert parse_qs(urlsplit(approved.headers["location"]).query)["code"]
