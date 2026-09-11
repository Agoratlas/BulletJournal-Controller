from __future__ import annotations

from enum import StrEnum


class ProjectRole(StrEnum):
    PROJECT_ADMIN = 'project_admin'
    EDITOR = 'editor'


class RoleSubjectKind(StrEnum):
    USER = 'user'
    ALL_USERS = 'all_users'


class ProjectStatus(StrEnum):
    CREATING = 'creating'
    INSTALLING = 'installing'
    STOPPED = 'stopped'
    STARTING = 'starting'
    RUNNING = 'running'
    STOPPING = 'stopping'
    ERROR = 'error'


class ProjectStatusReason(StrEnum):
    MANUAL_STOP = 'manual_stop'
    IDLE_TIMEOUT = 'idle_timeout'
    CREATE_FAILED = 'create_failed'
    INSTALL_FAILED = 'install_failed'
    START_FAILED = 'start_failed'
    RUNTIME_CRASHED = 'runtime_crashed'


class InstallStatus(StrEnum):
    PENDING = 'pending'
    INSTALLING = 'installing'
    READY = 'ready'
    FAILED = 'failed'


class JobType(StrEnum):
    CREATE_PROJECT = 'create_project'
    INSTALL_ENVIRONMENT = 'install_environment'
    START_PROJECT = 'start_project'
    STOP_PROJECT = 'stop_project'
    UPDATE_ENVIRONMENT = 'update_environment'
    REINSTALL_ENVIRONMENT = 'reinstall_environment'
    EXPORT_PROJECT = 'export_project'
    ARCHIVE_PROJECT = 'archive_project'
    IMPORT_PROJECT = 'import_project'
    DELETE_PROJECT = 'delete_project'


class JobStatus(StrEnum):
    QUEUED = 'queued'
    RUNNING = 'running'
    SUCCEEDED = 'succeeded'
    FAILED = 'failed'
    CANCELLED = 'cancelled'
    ABORTED_ON_RESTART = 'aborted_on_restart'
