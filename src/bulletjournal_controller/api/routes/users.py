from __future__ import annotations

from fastapi import APIRouter, Depends, Request

from bulletjournal_controller.api.auth import get_current_user
from bulletjournal_controller.api.schemas import AssignableUserResponse


router = APIRouter(prefix="/users", tags=["users"])


@router.get("/assignable", response_model=list[AssignableUserResponse])
def assignable_users(request: Request, _user=Depends(get_current_user)):
    return [
        AssignableUserResponse(
            user_id=user.user_id,
            username=user.username,
            display_name=user.display_name,
        )
        for user in request.app.state.container.users.list_active_assignable()
    ]
