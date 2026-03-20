from __future__ import annotations

from enum import Enum


class ProjectStatus(str, Enum):
    CREATING = 'creating'
    INSTALLING = 'installing'
    STOPPED = 'stopped'
    STARTING = 'starting'
    RUNNING = 'running'
    STOPPING = 'stopping'
    ERROR = 'error'


class ProjectStatusReason(str, Enum):
    MANUAL_STOP = 'manual_stop'
    IDLE_TIMEOUT = 'idle_timeout'
    CREATE_FAILED = 'create_failed'
    INSTALL_FAILED = 'install_failed'
    START_FAILED = 'start_failed'
    RUNTIME_CRASHED = 'runtime_crashed'


class InstallStatus(str, Enum):
    PENDING = 'pending'
    INSTALLING = 'installing'
    READY = 'ready'
    FAILED = 'failed'


class JobType(str, Enum):
    CREATE_PROJECT = 'create_project'
    INSTALL_ENVIRONMENT = 'install_environment'
    START_PROJECT = 'start_project'
    STOP_PROJECT = 'stop_project'
    UPDATE_ENVIRONMENT = 'update_environment'
    REINSTALL_ENVIRONMENT = 'reinstall_environment'
    EXPORT_PROJECT = 'export_project'
    IMPORT_PROJECT = 'import_project'
    DELETE_PROJECT = 'delete_project'


class JobStatus(str, Enum):
    QUEUED = 'queued'
    RUNNING = 'running'
    SUCCEEDED = 'succeeded'
    FAILED = 'failed'
    CANCELLED = 'cancelled'
    ABORTED_ON_RESTART = 'aborted_on_restart'
