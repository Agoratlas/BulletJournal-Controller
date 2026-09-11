from __future__ import annotations

import pytest

from bulletjournal_controller.api.deps import SYSTEM_USER_ID, ServiceContainer
from bulletjournal_controller.cli.delete_user import delete_user
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.domain.errors import ConflictError, ValidationError
from bulletjournal_controller.storage import require_instance_root
from bulletjournal_controller.utils import utc_now_iso


def _container(instance_root) -> ServiceContainer:
    return ServiceContainer(
        instance_paths=require_instance_root(instance_root),
        server_config=ServerConfig(session_secret='test-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )


def _create_project(container: ServiceContainer, *, project_id: str, user_id: str) -> None:
    now = utc_now_iso()
    container.projects.create(
        project_id=project_id,
        controller_status_token='token',
        status='stopped',
        status_reason=None,
        root_path=str(container.instance_paths.projects_dir / project_id),
        created_by_user_id=user_id,
        created_at=now,
        updated_at=now,
        last_graph_edit_at=None,
        last_notebook_edit_at=None,
        last_edit_at=None,
        last_run_finished_at=None,
        idle_shutdown_eligible_at=None,
        python_version='3.11',
        bulletjournal_version='1.0.0',
        custom_requirements_text='',
        lock_sha256=None,
        runtime_venv_size_bytes=None,
        runtime_uv_cache_size_bytes=None,
        install_status='ready',
        last_install_at=None,
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
        container_name=None,
        container_id=None,
        container_port=None,
        runtime_started_at=None,
        runtime_stopped_at=None,
    )


def test_delete_user_rejects_a_sole_project_admin(instance_root) -> None:
    container = _container(instance_root)
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    _create_project(container, project_id='research', user_id=user.user_id)
    container.role_grants.create_for_project(
        'research',
        [{'subject_kind': 'user', 'user_id': user.user_id, 'role': 'project_admin'}],
    )

    with pytest.raises(ConflictError, match=r'sole admin.*research'):
        delete_user(str(instance_root), username='admin')

    assert container.users.get(user.user_id) is not None


def test_delete_user_removes_role_grants_sessions_and_reassigns_history(instance_root) -> None:
    container = _container(instance_root)
    admin = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    replacement = container.auth_service.create_user(
        username='replacement', display_name='Replacement', password='secret-pass'
    )
    _create_project(container, project_id='research', user_id=admin.user_id)
    container.role_grants.create_for_project(
        'research',
        [
            {'subject_kind': 'user', 'user_id': admin.user_id, 'role': 'project_admin'},
            {
                'subject_kind': 'user',
                'user_id': replacement.user_id,
                'role': 'project_admin',
            },
        ],
    )
    session = container.auth_service.create_session(user=admin, user_agent='pytest', remote_addr='127.0.0.1')
    now = utc_now_iso()
    container.jobs.create(
        job_id='job-1',
        project_id='research',
        job_type='create_project',
        status='succeeded',
        requested_by_user_id=admin.user_id,
        payload_json='{}',
        result_json='{}',
        log_path='/tmp/job-1.log',
        created_at=now,
        started_at=now,
        finished_at=now,
        error_message=None,
    )

    payload = delete_user(str(instance_root), username='admin')

    assert payload == {'deleted': True, 'user_id': admin.user_id, 'username': 'admin'}
    assert container.users.get(admin.user_id) is None
    assert container.sessions.get(session.session.session_id) is None
    assert container.projects.get('research').created_by_user_id == SYSTEM_USER_ID
    assert container.jobs.get('job-1').requested_by_user_id == SYSTEM_USER_ID
    assert [grant.user_id for grant in container.role_grants.list_for_project('research')] == [replacement.user_id]


def test_delete_user_rejects_the_system_account(instance_root) -> None:
    with pytest.raises(ValidationError, match='system user'):
        delete_user(str(instance_root), username='system')
