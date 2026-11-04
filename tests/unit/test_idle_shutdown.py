from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.storage import InstancePaths
from bulletjournal_controller.utils import parse_iso8601


def test_start_clears_idle_state_and_delayed_idle_stop_rechecks_new_runtime(instance_root, server_config, monkeypatch):
    from bulletjournal_controller.services import project_service as project_module

    container = ServiceContainer(
        instance_paths=InstancePaths(instance_root), server_config=server_config, ensure_runtime_image=False
    )
    service = container.project_service
    service.idle_timeout_seconds = 3600
    project = service.create_project(
        project_id='study-a',
        created_by_user_id='user-system',
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor\n',
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    container.projects.update(project.project_id, status='stopped', idle_shutdown_eligible_at='2026-03-20T10:00:00Z')

    def start(**kwargs):
        assert kwargs['project'].idle_shutdown_eligible_at is None
        return SimpleNamespace(
            container_name='container', container_id='id', host_port=8765, started_at='2026-03-23T10:00:00Z'
        )

    monkeypatch.setattr(container.runtime_service, 'start_project', start)
    started = service.start_project(project.project_id)
    assert started.idle_shutdown_eligible_at is None
    status = {'idle_shutdown_eligible': True, 'idle_shutdown_eligible_since': '2026-03-20T10:00:00Z'}
    monkeypatch.setattr(container.runtime_service, 'fetch_project_status', lambda **_: status)
    stopped = []
    monkeypatch.setattr(container.runtime_service, 'stop_project', lambda **kwargs: stopped.append(kwargs))
    monkeypatch.setattr(project_module, 'utc_now', lambda: parse_iso8601('2026-03-23T10:05:00Z'))
    updated = service.stop_project(project.project_id, reason='idle_timeout')
    assert updated.status == 'running'
    assert updated.idle_shutdown_eligible_at == started.runtime_started_at
    assert stopped == []
    status['idle_shutdown_eligible'] = False
    monkeypatch.setattr(project_module, 'utc_now', lambda: parse_iso8601('2026-03-23T11:05:00Z'))
    assert service.stop_project(project.project_id, reason='idle_timeout').status == 'running'
    assert stopped == []
    assert service.stop_project(project.project_id, reason='manual_stop').status == 'stopped'
    assert len(stopped) == 1
