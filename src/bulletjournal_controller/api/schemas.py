from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class StrictModel(BaseModel):
    model_config = ConfigDict(extra="forbid")


class LoginRequest(StrictModel):
    username: str
    password: str


class UserResponse(StrictModel):
    user_id: str
    username: str
    display_name: str
    is_active: bool
    is_server_admin: bool


class AssignableUserResponse(StrictModel):
    user_id: str
    username: str
    display_name: str


class SessionResponse(StrictModel):
    authenticated: bool
    user: UserResponse | None = None


class LimitsRequest(StrictModel):
    cpu_limit_millis: int | None = Field(default=None, ge=1)
    memory_limit_bytes: int | None = Field(default=None, ge=1)
    disk_soft_limit_bytes: int | None = Field(default=None, ge=1)
    gpu_enabled: bool = False


class RoleSubjectRequest(StrictModel):
    all_users: bool = False
    user_ids: list[str] = Field(default_factory=list)


class CreateProjectRequest(LimitsRequest):
    project_id: str
    python_version: str | None = None
    bulletjournal_version: str | None = None
    custom_requirements_text: str = ""
    project_admins: RoleSubjectRequest | None = None
    editors: RoleSubjectRequest | None = None


class ProjectRolesRequest(StrictModel):
    project_admins: RoleSubjectRequest
    editors: RoleSubjectRequest


class UpdateProjectRequest(LimitsRequest):
    pass


class UpdateEnvironmentRequest(StrictModel):
    bulletjournal_version: str | None = None
    custom_requirements_text: str
    mark_all_artifacts_stale: bool = True
    restart_if_running: bool = True


class ReinstallEnvironmentRequest(StrictModel):
    mark_all_artifacts_stale: bool = True
    restart_if_running: bool = True


class ProjectJobResponse(StrictModel):
    job_id: str
    job_type: str
    status: str


class CreateProjectResponse(StrictModel):
    project: dict
    job: ProjectJobResponse
