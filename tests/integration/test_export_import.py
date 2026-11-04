from __future__ import annotations

import zipfile

import pytest
from bulletjournal.api.app import create_app as create_editor_app
from bulletjournal.storage.project_fs import init_project_root, require_project_root
from fastapi.testclient import TestClient

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.domain.errors import ConflictError
from bulletjournal_controller.services.export_service import ProjectExportMode
from bulletjournal_controller.storage import require_instance_root


@pytest.mark.parametrize('mode', ['full', 'snapshot'])
def test_export_import_round_trip(instance_root, mode) -> None:
    instance_paths = require_instance_root(instance_root)
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='test-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    project = container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor==0.1.0\n',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id='study-a')
    (project_root / 'uv.lock').write_text('version = 1\n', encoding='utf-8')
    archive = instance_paths.exports_dir / 'study-a.zip'
    exported = container.export_service.export_project(
        project=project,
        archive_path=archive,
        mode=ProjectExportMode(mode),
    )
    assert archive.is_file()
    container.project_service.delete_project('study-a')
    imported = container.export_service.import_project(archive_path=archive, include_install=False)
    assert imported['project_id'] == 'study-a'
    imported_project = container.project_service.get_project('study-a')
    assert imported_project.controller_status_token
    assert imported_project.bulletjournal_version == '0.1.0'
    assert imported_project.custom_requirements_text == 'bulletjournal-editor==0.1.0\n'
    require_project_root(instance_paths.project_root('study-a'))


def test_export_modes_follow_bulletjournal_archive_layout(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret='test-secret', cookie_secure=False),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    project = container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor==0.1.0\n',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id='study-a')
    (project_root / 'uv.lock').write_text('version = 1\n', encoding='utf-8')
    (project_root / 'notebooks').mkdir(parents=True, exist_ok=True)
    (project_root / 'notebooks' / 'kept.py').write_text("print('ok')\n", encoding='utf-8')
    (project_root / 'notebooks' / '__marimo__').mkdir(parents=True, exist_ok=True)
    (project_root / 'notebooks' / '__marimo__' / 'state.json').write_text('temp\n', encoding='utf-8')
    (project_root / 'objects' / 'artifact.bin').parent.mkdir(parents=True, exist_ok=True)
    (project_root / 'objects' / 'artifact.bin').write_bytes(b'artifact')
    (project_root / 'checkpoints' / 'cp-1' / 'notebooks' / 'keep.py').parent.mkdir(parents=True, exist_ok=True)
    (project_root / 'checkpoints' / 'cp-1' / 'notebooks' / 'keep.py').write_text(
        "print('checkpoint')\n", encoding='utf-8'
    )
    (project_root / 'checkpoints' / 'cp-1' / 'notebooks' / '__marimo__' / 'cache.tmp').parent.mkdir(
        parents=True, exist_ok=True
    )
    (project_root / 'checkpoints' / 'cp-1' / 'notebooks' / '__marimo__' / 'cache.tmp').write_text(
        'temp\n', encoding='utf-8'
    )

    archives = {
        ProjectExportMode.CODE_ONLY: instance_paths.exports_dir / 'study-a-code-only.zip',
        ProjectExportMode.CODE_AND_DATA: instance_paths.exports_dir / 'study-a-code-and-data.zip',
        ProjectExportMode.SNAPSHOT: instance_paths.exports_dir / 'study-a-snapshot.zip',
        ProjectExportMode.FULL: instance_paths.exports_dir / 'study-a-full.zip',
    }

    exported_names: dict[ProjectExportMode, set[str]] = {}
    for mode, archive in archives.items():
        container.export_service.export_project(
            project=project,
            archive_path=archive,
            mode=mode,
        )
        with zipfile.ZipFile(archive, 'r') as exported_archive:
            exported_names[mode] = set(exported_archive.namelist())
            extracted = instance_root / f'extracted-{mode.value}'
            exported_archive.extractall(extracted)
            require_project_root(extracted)

    for names in exported_names.values():
        assert 'graph/' in names
        assert 'notebooks/' in names
        assert 'objects/' in names
        assert 'metadata/' in names
        assert 'checkpoints/' in names
        assert 'notebooks/kept.py' in names
        assert 'graph/meta.json' in names
        assert 'metadata/project.json' in names
        assert 'metadata/state.db' in names
        assert 'pyproject.toml' in names
        assert 'uv.lock' in names
        assert not any(name.startswith('notebooks/__marimo__/') for name in names)
        assert not any(name.startswith('checkpoints/cp-1/notebooks/__marimo__/') for name in names)
        assert 'export_manifest.json' not in names

    assert not any(
        name.startswith('objects/') and name != 'objects/' for name in exported_names[ProjectExportMode.CODE_ONLY]
    )
    assert 'objects/' in exported_names[ProjectExportMode.CODE_ONLY]
    assert 'checkpoints/' in exported_names[ProjectExportMode.CODE_ONLY]
    assert not any(
        name.startswith('checkpoints/') and name != 'checkpoints/'
        for name in exported_names[ProjectExportMode.CODE_ONLY]
    )
    assert 'objects/artifact.bin' in exported_names[ProjectExportMode.CODE_AND_DATA]
    assert not any(
        name.startswith('checkpoints/') and name != 'checkpoints/'
        for name in exported_names[ProjectExportMode.CODE_AND_DATA]
    )
    assert 'objects/artifact.bin' in exported_names[ProjectExportMode.FULL]
    assert 'checkpoints/cp-1/notebooks/keep.py' in exported_names[ProjectExportMode.FULL]
    assert 'objects/artifact.bin' not in exported_names[ProjectExportMode.SNAPSHOT]
    assert 'checkpoints/cp-1/notebooks/keep.py' not in exported_names[ProjectExportMode.SNAPSHOT]


@pytest.mark.parametrize('encryption_key', [None, 'archive-secret'])
def test_archive_project_removes_project_after_writing_snapshot_archive(
    instance_root,
    monkeypatch,
    encryption_key,
) -> None:
    instance_paths = require_instance_root(instance_root)
    archive_dir = instance_root / 'external-archives'
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(
            session_secret='test-secret',
            cookie_secure=False,
            archive_dir=str(archive_dir),
            archive_encryption_key=encryption_key,
        ),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    project = container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor==0.1.0\n',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id='study-a')
    (project_root / 'uv.lock').write_text('version = 1\n', encoding='utf-8')
    with TestClient(create_editor_app(project_path=project_root)) as client:
        version = client.get('/api/v1/graph').json()['meta']['graph_version']
        response = client.patch(
            '/api/v1/graph',
            json={
                'graph_version': version,
                'operations': [
                    {
                        'type': 'add_constant_node',
                        'node_id': 'count',
                        'title': 'Count',
                        'data_type': 'int',
                        'value': 1,
                    }
                ],
            },
        )
        assert response.status_code == 200, response.text
        old_hash = client.get('/api/v1/artifacts/count/value').json()['artifact_hash']
        response = client.post('/api/v1/constants/count/value', json={'value': 2})
        assert response.status_code == 200, response.text
        current_hash = response.json()['artifact_hash']
        assert client.post('/api/v1/checkpoints').status_code == 200
    environment_file = project_root / '.venv' / 'local-package.txt'
    environment_file.parent.mkdir()
    environment_file.write_text('local environment')
    export_modes = []
    export_project = container.export_service.export_project

    def capture_export_mode(**kwargs):
        export_modes.append(kwargs['mode'])
        return export_project(**kwargs)

    monkeypatch.setattr(container.export_service, 'export_project', capture_export_mode)
    container.projects.update(project.project_id, status='stopped', install_status='ready')

    archived = container.export_service.archive_project(
        project=project,
        log_writer=lambda _message: None,
    )
    assert export_modes == [ProjectExportMode.SNAPSHOT]
    container.project_service.delete_project(project.project_id)

    filename = 'study-a.zip.enc' if encryption_key else 'study-a.zip'
    archive_path = archive_dir / filename
    assert archived['encrypted'] is bool(encryption_key)
    assert archived['archive_filename'] == filename
    assert archive_path.is_file()
    if not encryption_key:
        with zipfile.ZipFile(archive_path) as archive:
            files = {info.filename for info in archive.infolist() if not info.is_dir()}
            assert {name for name in files if name.startswith('objects/')} == {
                f'objects/{current_hash[:2]}/{current_hash[2:]}'
            }
            assert f'objects/{old_hash[:2]}/{old_hash[2:]}' not in files
            assert not any(name.startswith(('.venv/', 'checkpoints/')) for name in files)
            extracted = instance_root / 'archived-snapshot'
            archive.extractall(extracted)
        require_project_root(extracted)
    assert container.project_service.projects.get(project.project_id) is None
    assert not project_root.exists()


def test_archive_project_aborts_if_target_archive_exists(instance_root) -> None:
    instance_paths = require_instance_root(instance_root)
    archive_dir = instance_root / 'external-archives'
    archive_dir.mkdir(parents=True, exist_ok=True)
    (archive_dir / 'study-a.zip').write_text('existing\n', encoding='utf-8')
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(
            session_secret='test-secret',
            cookie_secure=False,
            archive_dir=str(archive_dir),
        ),
        ensure_runtime_image=False,
    )
    user = container.auth_service.create_user(username='admin', display_name='Admin', password='secret-pass')
    project = container.project_service.create_project(
        project_id='study-a',
        created_by_user_id=user.user_id,
        python_version='3.11',
        custom_requirements_text='bulletjournal-editor==0.1.0\n',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id='study-a')
    (project_root / 'uv.lock').write_text('version = 1\n', encoding='utf-8')

    with pytest.raises(ConflictError, match='Archive already exists'):
        container.export_service.archive_project(
            project=project,
            log_writer=lambda _message: None,
        )

    assert container.project_service.get_project(project.project_id).project_id == 'study-a'
    assert project_root.exists()
