from __future__ import annotations

from fastapi import Depends, Request, Response

from bulletjournal_controller.domain.errors import AuthenticationError, AuthorizationError
from bulletjournal_controller.services import SESSION_COOKIE_NAME


SAFE_METHODS = {'GET', 'HEAD', 'OPTIONS'}


def get_container(request: Request):
    return request.app.state.container


def require_same_origin(request: Request) -> None:
    if request.method.upper() in SAFE_METHODS:
        return
    public_origin = request.app.state.server_config.public_origin
    if not public_origin:
        return
    origin = request.headers.get('origin')
    referer = request.headers.get('referer')
    if origin and origin.startswith(public_origin):
        return
    if referer and referer.startswith(public_origin):
        return
    raise AuthorizationError('Mutating requests must come from the configured public origin.')


def get_current_session_bundle(request: Request):
    container = get_container(request)
    cookie = request.cookies.get(SESSION_COOKIE_NAME)
    bundle = container.auth_service.resolve_session(cookie)
    if bundle is None:
        raise AuthenticationError('Authentication required.')
    return bundle


def get_current_user(bundle=Depends(get_current_session_bundle)):
    return bundle.user


def set_session_cookie(response: Response, *, bundle, request: Request) -> None:
    response.set_cookie(
        key=SESSION_COOKIE_NAME,
        value=bundle.cookie_value,
        httponly=True,
        samesite='lax',
        secure=bool(request.app.state.server_config.cookie_secure),
        max_age=7 * 24 * 60 * 60,
        path='/',
    )


def clear_session_cookie(response: Response) -> None:
    response.delete_cookie(key=SESSION_COOKIE_NAME, path='/', httponly=True, samesite='lax')
