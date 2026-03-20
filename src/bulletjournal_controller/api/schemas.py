from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field


class StrictModel(BaseModel):
    model_config = ConfigDict(extra='forbid')


class LoginRequest(StrictModel):
    username: str
    password: str


class UserResponse(StrictModel):
    user_id: str
    username: str
    display_name: str
    is_active: bool


class SessionResponse(StrictModel):
    authenticated: bool
    user: UserResponse | None = None


class LimitsRequest(StrictModel):
    cpu_limit_millis: int = Field(gt=0)
    memory_limit_bytes: int = Field(gt=0)
    gpu_enabled: bool = False


class CreateProjectRequest(LimitsRequest):
    project_id: str
    python_version: str
    bulletjournal_version: str
    custom_requirements_text: str = ''


class UpdateProjectRequest(LimitsRequest):
    pass


class UpdateEnvironmentRequest(StrictModel):
    python_version: str
    bulletjournal_version: str
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
