from __future__ import annotations

from dataclasses import asdict, dataclass
from typing import Any


@dataclass(slots=True, frozen=True)
class UserRecord:
    user_id: str
    username: str
    display_name: str
    password_hash: str
    is_active: bool
    created_at: str
    updated_at: str
    last_login_at: str | None = None


@dataclass(slots=True, frozen=True)
class SessionRecord:
    session_id: str
    user_id: str
    secret_hash: str
    created_at: str
    expires_at: str
    revoked_at: str | None
    last_seen_at: str
    user_agent: str
    remote_addr: str


@dataclass(slots=True, frozen=True)
class ProjectRecord:
    project_id: str
    status: str
    status_reason: str | None
    root_path: str
    created_by_user_id: str
    created_at: str
    updated_at: str
    last_graph_edit_at: str | None
    last_notebook_edit_at: str | None
    last_edit_at: str | None
    last_run_finished_at: str | None
    idle_shutdown_eligible_at: str | None
    python_version: str
    bulletjournal_version: str
    custom_requirements_text: str
    lock_sha256: str | None
    install_status: str
    last_install_at: str | None
    cpu_limit_millis: int
    memory_limit_bytes: int
    gpu_enabled: bool
    container_name: str | None
    container_id: str | None
    container_port: int | None
    runtime_started_at: str | None
    runtime_stopped_at: str | None

    def to_api(self) -> dict[str, Any]:
        return {
            'project_id': self.project_id,
            'status': self.status,
            'status_reason': self.status_reason,
            'root_path': self.root_path,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'last_graph_edit_at': self.last_graph_edit_at,
            'last_notebook_edit_at': self.last_notebook_edit_at,
            'last_edit_at': self.last_edit_at,
            'last_run_finished_at': self.last_run_finished_at,
            'idle_shutdown_eligible_at': self.idle_shutdown_eligible_at,
            'python_version': self.python_version,
            'bulletjournal_version': self.bulletjournal_version,
            'custom_requirements_text': self.custom_requirements_text,
            'lock_sha256': self.lock_sha256,
            'install_status': self.install_status,
            'last_install_at': self.last_install_at,
            'limits': {
                'cpu_limit_millis': self.cpu_limit_millis,
                'memory_limit_bytes': self.memory_limit_bytes,
                'gpu_enabled': self.gpu_enabled,
            },
            'runtime': {
                'container_name': self.container_name,
                'container_id': self.container_id,
                'container_port': self.container_port,
                'runtime_started_at': self.runtime_started_at,
                'runtime_stopped_at': self.runtime_stopped_at,
            },
        }


@dataclass(slots=True, frozen=True)
class JobRecord:
    job_id: str
    project_id: str | None
    job_type: str
    status: str
    requested_by_user_id: str
    payload_json: str
    result_json: str | None
    log_path: str
    created_at: str
    started_at: str | None
    finished_at: str | None
    error_message: str | None

    def to_api(self) -> dict[str, Any]:
        return asdict(self)
