from __future__ import annotations

from fastapi import APIRouter, Depends, Request, Response

from bulletjournal_controller.api.auth import clear_session_cookie, get_current_session_bundle, require_same_origin, set_session_cookie
from bulletjournal_controller.api.schemas import LoginRequest, SessionResponse, UserResponse


router = APIRouter(prefix='/session', tags=['auth'])


@router.post('/login', response_model=SessionResponse, dependencies=[Depends(require_same_origin)])
def login(payload: LoginRequest, request: Request, response: Response):
    container = request.app.state.container
    user = container.auth_service.authenticate_user(username=payload.username, password=payload.password)
    bundle = container.auth_service.create_session(
        user=user,
        user_agent=request.headers.get('user-agent', ''),
        remote_addr=request.client.host if request.client is not None else 'unknown',
    )
    set_session_cookie(response, bundle=bundle, request=request)
    return SessionResponse(
        authenticated=True,
        user=UserResponse(
            user_id=bundle.user.user_id,
            username=bundle.user.username,
            display_name=bundle.user.display_name,
            is_active=bundle.user.is_active,
        ),
    )


@router.post('/logout', response_model=SessionResponse, dependencies=[Depends(require_same_origin)])
def logout(request: Request, response: Response, _bundle=Depends(get_current_session_bundle)):
    request.app.state.container.auth_service.revoke_session(request.cookies.get('bulletjournal_session'))
    clear_session_cookie(response)
    return SessionResponse(authenticated=False, user=None)


@router.get('/current', response_model=SessionResponse)
def current_session(bundle=Depends(get_current_session_bundle)):
    return SessionResponse(
        authenticated=True,
        user=UserResponse(
            user_id=bundle.user.user_id,
            username=bundle.user.username,
            display_name=bundle.user.display_name,
            is_active=bundle.user.is_active,
        ),
    )
