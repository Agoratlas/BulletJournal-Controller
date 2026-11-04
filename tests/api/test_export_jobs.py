from __future__ import annotations

import json
from datetime import timedelta

import pytest
from fastapi.testclient import TestClient

from bulletjournal_controller.api import create_app
from bulletjournal_controller.utils import parse_iso8601


@pytest.mark.parametrize('mode', ['code_only', 'code_and_constants', 'code_and_data', 'snapshot', 'full'])
def test_export_is_queued_and_download_expires(instance_root, server_config, monkeypatch, mode):
    app = create_app(instance_root=instance_root, server_config=server_config)
    container = app.state.container
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor\n',
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    calls = []

    def export(**kwargs):
        calls.append(kwargs)
        kwargs['archive_path'].write_bytes(b'zip-content')
        return {'project_id': 'study-a'}

    monkeypatch.setattr(container.export_service, 'export_project', export)
    client = TestClient(app)
    assert (
        client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'}).status_code == 200
    )
    response = client.post('/api/v1/projects/study-a/export', json={'mode': mode})
    assert response.status_code == 202
    assert calls == []
    job_id = response.json()['job']['job_id']
    assert client.get(f'/api/v1/jobs/{job_id}').json()['download']['available'] is False
    assert client.post('/api/v1/projects/study-a/export', json={'mode': 'full'}).status_code == 409
    container.job_service._run_job(container.jobs.get(job_id))
    assert calls[0]['mode'].value == mode
    job = container.jobs.get(job_id)
    download = client.get(f'/api/v1/jobs/{job_id}').json()['download']
    assert download['available'] is True
    assert parse_iso8601(download['expires_at']) - parse_iso8601(job.finished_at) == timedelta(hours=24)
    response = client.get(download['url'])
    assert response.status_code == 200
    assert response.content == b'zip-content'
    suffix = 'code' if mode == 'code_only' else mode
    assert f'bulletjournal_export_study-a_{suffix}.zip' in response.headers['content-disposition']
    assert response.headers['cache-control'] == 'private, no-store'
    assert client.get('/api/v1/projects/study-a').json()['recent_jobs'][0]['download'] == download

    from bulletjournal_controller.services import export_downloads as download_module

    monkeypatch.setattr(download_module, 'utc_now', lambda: parse_iso8601(download['expires_at']))
    assert client.get(f'/api/v1/jobs/{job_id}').json()['download']['unavailable_reason'] == 'expired'
    assert client.get(download['url']).status_code == 410
    container.job_service.export_downloads.cleanup()
    assert not calls[0]['archive_path'].parent.joinpath('archive.zip').exists()
    assert container.jobs.get(job_id).status == 'succeeded'
    assert json.loads(container.jobs.get(job_id).result_json)['download']['expires_at'] == download['expires_at']


def test_export_rejects_invalid_mode_without_queueing(instance_root, server_config):
    app = create_app(instance_root=instance_root, server_config=server_config)
    container = app.state.container
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor\n',
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    client = TestClient(app)
    client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'})
    assert client.post('/api/v1/projects/study-a/export', json={'mode': 'invalid'}).status_code == 422
    assert container.jobs.list_for_project('study-a') == []


@pytest.fixture
def export_context(instance_root, server_config):
    app = create_app(instance_root=instance_root, server_config=server_config)
    container = app.state.container
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    project = container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor\n',
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    client = TestClient(app)
    client.post('/api/v1/session/login', json={'username': 'admin', 'password': 'secret-pass'})
    return container, client, project


def test_download_requires_current_admin_access_and_missing_file_is_reported(export_context, monkeypatch):
    container, admin, project = export_context
    monkeypatch.setattr(
        container.export_service, 'export_project', lambda **kwargs: kwargs['archive_path'].write_bytes(b'zip')
    )
    response = admin.post('/api/v1/projects/study-a/export', json={'mode': 'code_only'})
    job_id = response.json()['job']['job_id']
    container.job_service._run_job(container.jobs.get(job_id))
    editor = container.auth_service.create_user(username='editor', display_name='Editor', password='secret-pass')
    container.role_grants.create_for_project(
        project.project_id, [{'subject_kind': 'user', 'user_id': editor.user_id, 'role': 'editor'}]
    )
    client = TestClient(admin.app)
    client.post('/api/v1/session/login', json={'username': 'editor', 'password': 'secret-pass'})
    assert client.get(f'/api/v1/jobs/{job_id}').status_code == 200
    assert client.get(f'/api/v1/jobs/{job_id}/download').status_code == 404
    assert client.post('/api/v1/projects/study-a/export', json={'mode': 'full'}).status_code == 404
    (container.instance_paths.exports_dir / job_id / 'archive.zip').unlink()
    assert admin.get(f'/api/v1/jobs/{job_id}').json()['download']['unavailable_reason'] == 'missing'
    assert admin.get(f'/api/v1/jobs/{job_id}/download').status_code == 404


def test_failed_export_removes_partial_file_and_restart_cleans_orphans(export_context, monkeypatch):
    container, client, _ = export_context

    def fail(**kwargs):
        kwargs['archive_path'].write_bytes(b'partial')
        raise RuntimeError('export interrupted')

    monkeypatch.setattr(container.export_service, 'export_project', fail)
    job_id = client.post('/api/v1/projects/study-a/export', json={'mode': 'full'}).json()['job']['job_id']
    container.job_service._run_job(container.jobs.get(job_id))
    assert container.jobs.get(job_id).status == 'failed'
    assert not (container.instance_paths.exports_dir / job_id).exists()
    orphan = container.instance_paths.exports_dir / 'job-orphan'
    orphan.mkdir()
    (orphan / 'partial.zip').write_bytes(b'partial')
    explicit = container.instance_paths.exports_dir / 'cli-export.zip'
    explicit.write_bytes(b'permanent')
    container.job_service.export_downloads.cleanup()
    assert not orphan.exists()
    assert explicit.read_bytes() == b'permanent'


def test_download_open_before_expiry_survives_cleanup(export_context, monkeypatch):
    from bulletjournal_controller.services import export_downloads as download_module

    container, client, _ = export_context
    monkeypatch.setattr(
        container.export_service, 'export_project', lambda **kwargs: kwargs['archive_path'].write_bytes(b'zip')
    )
    job_id = client.post('/api/v1/projects/study-a/export', json={'mode': 'full'}).json()['job']['job_id']
    container.job_service._run_job(container.jobs.get(job_id))
    downloads = container.job_service.export_downloads
    handle, metadata = downloads.open_download(container.jobs.get(job_id))
    try:
        monkeypatch.setattr(download_module, 'utc_now', lambda: parse_iso8601(metadata['expires_at']))
        downloads.cleanup()
        assert handle.read() == b'zip'
        assert not (downloads.root / job_id).exists()
    finally:
        handle.close()
