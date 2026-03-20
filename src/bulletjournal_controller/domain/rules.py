from __future__ import annotations

import re

from bulletjournal_controller.domain.enums import ProjectStatus, ProjectStatusReason
from bulletjournal_controller.domain.errors import ConflictError, ProjectValidationError


PROJECT_ID_PATTERN = re.compile(r'^[a-z0-9][a-z0-9_-]{1,62}$')

ALLOWED_STATUS_TRANSITIONS: dict[ProjectStatus, set[ProjectStatus]] = {
    ProjectStatus.CREATING: {ProjectStatus.INSTALLING, ProjectStatus.ERROR},
    ProjectStatus.INSTALLING: {ProjectStatus.STOPPED, ProjectStatus.ERROR},
    ProjectStatus.STOPPED: {ProjectStatus.STARTING},
    ProjectStatus.STARTING: {ProjectStatus.RUNNING, ProjectStatus.ERROR},
    ProjectStatus.RUNNING: {ProjectStatus.STOPPING, ProjectStatus.ERROR},
    ProjectStatus.STOPPING: {ProjectStatus.STOPPED, ProjectStatus.ERROR},
    ProjectStatus.ERROR: {ProjectStatus.INSTALLING, ProjectStatus.STARTING, ProjectStatus.STOPPED},
}


def validate_project_id(project_id: str) -> str:
    candidate = project_id.strip()
    if not PROJECT_ID_PATTERN.fullmatch(candidate):
        raise ProjectValidationError('Project id must match ^[a-z0-9][a-z0-9_-]{1,62}$.')
    return candidate


def validate_status_reason(status: ProjectStatus, status_reason: str | None) -> None:
    if status_reason is None:
        return
    if status_reason == ProjectStatusReason.IDLE_TIMEOUT.value and status is not ProjectStatus.STOPPED:
        raise ConflictError('status_reason=idle_timeout is only valid when status=stopped.')
    if status_reason == ProjectStatusReason.MANUAL_STOP.value and status is not ProjectStatus.STOPPED:
        raise ConflictError('status_reason=manual_stop is only valid when status=stopped.')
    if status_reason in {
        ProjectStatusReason.CREATE_FAILED.value,
        ProjectStatusReason.INSTALL_FAILED.value,
        ProjectStatusReason.START_FAILED.value,
        ProjectStatusReason.RUNTIME_CRASHED.value,
    } and status is not ProjectStatus.ERROR:
        raise ConflictError('Failure status reasons are only valid when status=error.')


def ensure_transition_allowed(current_status: str, new_status: str) -> None:
    current = ProjectStatus(current_status)
    target = ProjectStatus(new_status)
    allowed = ALLOWED_STATUS_TRANSITIONS.get(current, set())
    if target not in allowed and current != target:
        raise ConflictError(f'Invalid project status transition: {current.value} -> {target.value}.')
