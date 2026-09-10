from __future__ import annotations

from html import escape

from fastapi import APIRouter, Depends, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse

from bulletjournal_controller.api.auth import get_current_user, require_same_origin
from bulletjournal_controller.domain.errors import ValidationError

router = APIRouter(tags=["oauth"])


@router.get("/.well-known/oauth-authorization-server")
def authorization_server_metadata(request: Request):
    service = request.app.state.container.oauth_service
    return {
        "issuer": service.issuer,
        "authorization_endpoint": f"{service.issuer}/oauth/authorize",
        "token_endpoint": f"{service.issuer}/oauth/token",
        "registration_endpoint": f"{service.issuer}/oauth/register",
        "revocation_endpoint": f"{service.issuer}/oauth/revoke",
        "response_types_supported": ["code"],
        "grant_types_supported": ["authorization_code", "refresh_token"],
        "token_endpoint_auth_methods_supported": ["none"],
        "code_challenge_methods_supported": ["S256"],
        "scopes_supported": ["mcp:read", "mcp:write", "mcp:run"],
    }


@router.get("/.well-known/oauth-protected-resource")
@router.get("/.well-known/oauth-protected-resource/p/{project_id}/mcp")
def protected_resource_metadata(project_id: str | None = None, request: Request = None):
    service = request.app.state.container.oauth_service
    metadata = {"authorization_servers": [service.issuer]}
    if project_id:
        metadata["resource"] = service.resource_url(project_id)
    return metadata


@router.post("/oauth/register")
async def register_client(request: Request):
    payload = await request.json()
    if not isinstance(payload, dict):
        raise ValidationError("Client registration body must be a JSON object.")
    return request.app.state.container.oauth_service.register_client(payload)


@router.get("/oauth/authorize")
def authorize(
    request: Request,
    response_type: str,
    client_id: str,
    redirect_uri: str,
    resource: str,
    code_challenge: str,
    code_challenge_method: str,
    scope: str = "",
    state: str | None = None,
    user: object = Depends(get_current_user),
):
    service = request.app.state.container.oauth_service
    client, project_id, scopes = _validate_authorization_request(
        service=service,
        response_type=response_type,
        client_id=client_id,
        redirect_uri=redirect_uri,
        resource=resource,
        scope=scope,
        code_challenge=code_challenge,
        code_challenge_method=code_challenge_method,
    )
    return HTMLResponse(
        _consent_page(
            client_name=str(client["client_name"]),
            project_id=project_id,
            scopes=scopes,
            values={
                "response_type": response_type,
                "client_id": client_id,
                "redirect_uri": redirect_uri,
                "resource": resource,
                "code_challenge": code_challenge,
                "code_challenge_method": code_challenge_method,
                "scope": scope,
                "state": state or "",
            },
        )
    )


@router.post("/oauth/authorize", dependencies=[Depends(require_same_origin)])
def authorize_consent(
    request: Request,
    response_type: str = Form(),
    client_id: str = Form(),
    redirect_uri: str = Form(),
    resource: str = Form(),
    code_challenge: str = Form(),
    code_challenge_method: str = Form(),
    scope: str = Form(default=""),
    state: str = Form(default=""),
    user: object = Depends(get_current_user),
):
    service = request.app.state.container.oauth_service
    _, project_id, scopes = _validate_authorization_request(
        service=service,
        response_type=response_type,
        client_id=client_id,
        redirect_uri=redirect_uri,
        resource=resource,
        scope=scope,
        code_challenge=code_challenge,
        code_challenge_method=code_challenge_method,
    )
    return RedirectResponse(
        service.authorize(
            user=user,
            client_id=client_id,
            redirect_uri=redirect_uri,
            resource=resource,
            project_id=project_id,
            scopes=scopes,
            code_challenge=code_challenge,
            state=state or None,
        ),
        status_code=302,
    )


@router.post("/oauth/token")
async def token(request: Request):
    form = await request.form()
    service = request.app.state.container.oauth_service
    grant_type = str(form.get("grant_type") or "")
    client_id = str(form.get("client_id") or "")
    resource = str(form.get("resource") or "") or None
    if grant_type == "authorization_code":
        result = service.exchange_code(
            code=str(form.get("code") or ""),
            client_id=client_id,
            redirect_uri=str(form.get("redirect_uri") or ""),
            resource=resource,
            code_verifier=str(form.get("code_verifier") or ""),
        )
    elif grant_type == "refresh_token":
        result = service.refresh(
            str(form.get("refresh_token") or ""), client_id=client_id, resource=resource
        )
    else:
        raise ValidationError("Unsupported grant_type.")
    return JSONResponse(
        result, headers={"Cache-Control": "no-store", "Pragma": "no-cache"}
    )


@router.post("/oauth/revoke")
async def revoke(request: Request):
    form = await request.form()
    token = str(form.get("token") or "")
    if token:
        request.app.state.container.oauth_service.revoke(token)
    return JSONResponse({}, status_code=200)


def _project_id_for_resource(resource: str) -> str:
    marker = "/p/"
    if marker not in resource or not resource.endswith("/mcp"):
        raise ValidationError("resource must be a project MCP URL.")
    project_id = resource.rsplit(marker, 1)[1][:-4].strip("/")
    if not project_id or "/" in project_id:
        raise ValidationError("resource must be a project MCP URL.")
    return project_id


def _validate_authorization_request(
    *,
    service,
    response_type: str,
    client_id: str,
    redirect_uri: str,
    resource: str,
    scope: str,
    code_challenge: str,
    code_challenge_method: str,
) -> tuple[object, str, list[str]]:
    project_id = _project_id_for_resource(resource)
    if response_type != "code":
        raise ValidationError("response_type must be code.")
    client, scopes = service.validate_authorization_request(
        client_id=client_id,
        redirect_uri=redirect_uri,
        resource=resource,
        project_id=project_id,
        scope=scope,
        code_challenge=code_challenge,
        code_challenge_method=code_challenge_method,
    )
    return client, project_id, scopes


def _consent_page(
    *, client_name: str, project_id: str, scopes: list[str], values: dict[str, str]
) -> str:
    fields = "\n".join(
        f'<input type="hidden" name="{escape(name)}" value="{escape(value)}">'
        for name, value in values.items()
    )
    scope_list = "".join(f"<li>{escape(scope)}</li>" for scope in scopes)
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Authorize MCP access</title>
  <style>
    :root {{ color-scheme: light dark; --bg: #f4efdf; --paper: #fffaf0; --ink: #1f2929; --muted: #61716d; --accent: #1d7b6c; --line: rgba(31, 41, 41, .14); }}
    @media (prefers-color-scheme: dark) {{ :root {{ --bg: #171714; --paper: #20211d; --ink: #efe7d8; --muted: #b7afa2; --accent: #63c4b2; --line: rgba(239, 231, 216, .16); }} }}
    * {{ box-sizing: border-box; }}
    body {{ min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; color: var(--ink); background: radial-gradient(circle at top, rgba(29,123,108,.14), transparent 34rem), var(--bg); font: 16px/1.5 Inter, ui-sans-serif, system-ui, sans-serif; }}
    main {{ width: min(100%, 520px); padding: 32px; border: 1px solid var(--line); border-radius: 28px; background: var(--paper); box-shadow: 0 18px 54px rgba(39,42,40,.12); }}
    .eyebrow {{ margin: 0 0 10px; color: var(--accent); font-size: .78rem; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }}
    h1 {{ margin: 0; font-size: clamp(1.65rem, 5vw, 2.2rem); line-height: 1.12; }}
    p {{ color: var(--muted); }}
    .details {{ margin: 24px 0; padding: 18px; border: 1px solid var(--line); border-radius: 16px; }}
    dl {{ margin: 0; display: grid; gap: 14px; }} dt {{ color: var(--muted); font-size: .84rem; }} dd {{ margin: 2px 0 0; font-weight: 650; overflow-wrap: anywhere; }} ul {{ margin: 6px 0 0; padding-left: 20px; }}
    button {{ width: 100%; min-height: 44px; border: 0; border-radius: 999px; color: white; background: var(--accent); cursor: pointer; font: inherit; font-weight: 700; }} button:hover {{ filter: brightness(1.06); }} button:focus-visible {{ outline: 3px solid color-mix(in srgb, var(--accent), transparent 55%); outline-offset: 3px; }}
  </style>
</head>
<body>
  <main>
    <p class="eyebrow">BulletJournal Controller</p>
    <h1>Authorize MCP access?</h1>
    <p><strong>{escape(client_name)}</strong> is requesting access to your BulletJournal project.</p>
    <div class="details">
      <dl>
        <div><dt>Project</dt><dd>{escape(project_id)}</dd></div>
        <div><dt>Requested permissions</dt><dd><ul>{scope_list}</ul></dd></div>
      </dl>
    </div>
    <form method="post" action="/oauth/authorize">
      {fields}
      <button type="submit">Authorize access</button>
    </form>
  </main>
</body>
</html>"""
