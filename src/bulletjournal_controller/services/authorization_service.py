from __future__ import annotations

from bulletjournal_controller.domain.enums import ProjectRole, RoleSubjectKind
from bulletjournal_controller.domain.errors import NotFoundError, ValidationError
from bulletjournal_controller.domain.models import JobRecord, ProjectRecord, UserRecord
from bulletjournal_controller.storage.repositories import (
    JobRepository,
    ProjectRepository,
    ProjectRoleGrantRepository,
    UserRepository,
)


class AuthorizationService:
    def __init__(
        self,
        *,
        users: UserRepository,
        projects: ProjectRepository,
        jobs: JobRepository,
        role_grants: ProjectRoleGrantRepository,
    ) -> None:
        self.users = users
        self.projects = projects
        self.jobs = jobs
        self.role_grants = role_grants

    def effective_roles(self, user: UserRecord, project_id: str) -> set[ProjectRole]:
        if user.is_server_admin:
            return {ProjectRole.PROJECT_ADMIN}
        grants = self.role_grants.list_for_project(project_id)
        if not grants:
            project = self.projects.get(project_id)
            return (
                {ProjectRole.PROJECT_ADMIN}
                if project is not None and project.created_by_user_id == user.user_id
                else set()
            )
        return {
            ProjectRole(grant.role)
            for grant in grants
            if grant.subject_kind == RoleSubjectKind.ALL_USERS.value
            or grant.user_id == user.user_id
        }

    def effective_role(self, user: UserRecord, project_id: str) -> str | None:
        roles = self.effective_roles(user, project_id)
        if ProjectRole.PROJECT_ADMIN in roles:
            return ProjectRole.PROJECT_ADMIN.value
        if ProjectRole.EDITOR in roles:
            return ProjectRole.EDITOR.value
        return None

    def require_project_viewer(self, user: UserRecord, project_id: str) -> ProjectRecord:
        project = self.projects.get(project_id)
        if project is None or self.effective_role(user, project_id) is None:
            raise NotFoundError(f"Project {project_id} was not found.")
        return project

    def require_project_admin(self, user: UserRecord, project_id: str) -> ProjectRecord:
        project = self.projects.get(project_id)
        if project is None or self.effective_role(user, project_id) != ProjectRole.PROJECT_ADMIN.value:
            raise NotFoundError(f"Project {project_id} was not found.")
        return project

    def require_job_viewer(self, user: UserRecord, job_id: str) -> JobRecord:
        job = self.jobs.get(job_id)
        if job is None or job.project_id is None:
            raise NotFoundError(f"Job {job_id} was not found.")
        self.require_project_viewer(user, job.project_id)
        return job

    def list_visible_projects(self, user: UserRecord) -> list[ProjectRecord]:
        if user.is_server_admin:
            return self.projects.list_all()
        project_ids = self.role_grants.list_project_ids_visible_to(user.user_id)
        return [project for project_id in project_ids if (project := self.projects.get(project_id))]

    def role_summary(self, project_id: str) -> dict[str, object]:
        summary: dict[str, object] = {}
        for role, key in ((ProjectRole.PROJECT_ADMIN, "project_admins"), (ProjectRole.EDITOR, "editors")):
            grants = [grant for grant in self.role_grants.list_for_project(project_id) if grant.role == role.value]
            summary[key] = {
                "all_users": any(grant.subject_kind == RoleSubjectKind.ALL_USERS.value for grant in grants),
                "users": [
                    {"user_id": grant.user_id, "username": grant.username, "display_name": grant.display_name}
                    for grant in grants
                    if grant.subject_kind == RoleSubjectKind.USER.value
                ],
            }
        return summary

    def normalize_role_payload(self, payload: dict[str, object]) -> list[dict[str, str | None]]:
        grants: list[dict[str, str | None]] = []
        assignable = {user.user_id for user in self.users.list_active_assignable()}
        for role, key in ((ProjectRole.PROJECT_ADMIN, "project_admins"), (ProjectRole.EDITOR, "editors")):
            raw_subject = payload.get(key)
            if not isinstance(raw_subject, dict):
                raise ValidationError(f"{key} is required.")
            all_users = raw_subject.get("all_users")
            user_ids = raw_subject.get("user_ids")
            if not isinstance(all_users, bool) or not isinstance(user_ids, list) or not all(isinstance(value, str) for value in user_ids):
                raise ValidationError(f"{key} must contain all_users and user_ids.")
            if all_users:
                if user_ids:
                    raise ValidationError(f"{key}.user_ids must be empty when all_users is selected.")
                grants.append({"subject_kind": RoleSubjectKind.ALL_USERS.value, "user_id": None, "role": role.value})
                continue
            for user_id in sorted(set(user_ids)):
                if user_id not in assignable:
                    raise ValidationError(f"User {user_id} is not an active assignable user.")
                grants.append({"subject_kind": RoleSubjectKind.USER.value, "user_id": user_id, "role": role.value})
        if not any(grant["role"] == ProjectRole.PROJECT_ADMIN.value for grant in grants):
            raise ValidationError("At least one project admin must be selected.")
        return grants

    def replace_project_roles(self, user: UserRecord, project_id: str, payload: dict[str, object]) -> None:
        self.require_project_admin(user, project_id)
        self.role_grants.replace_for_project(project_id, self.normalize_role_payload(payload))
