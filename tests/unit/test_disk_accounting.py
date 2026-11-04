from __future__ import annotations

import json
import os

import pytest

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.storage import InstancePaths


def test_startup_backfill_deduplicates_and_is_one_off(instance_root, server_config, monkeypatch):
    container = ServiceContainer(
        instance_paths=InstancePaths(instance_root), server_config=server_config, ensure_runtime_image=False
    )
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
    paths = container.project_service.project_paths(project.project_id)
    installed = paths.runtime_venv_dir / 'shared.bin'
    installed.write_bytes(b'x' * 17)
    os.link(installed, paths.runtime_uv_cache_dir / 'shared.bin')
    os.link(installed, paths.runtime_uv_cache_dir / 'duplicate.bin')
    (paths.runtime_uv_cache_dir / 'extra.bin').write_bytes(b'x' * 19)
    container.projects.update(project.project_id, runtime_venv_size_bytes=17, runtime_uv_cache_size_bytes=53)
    container.project_service.backfill_runtime_size_bytes()
    migrated = container.projects.require(project.project_id)
    assert migrated.runtime_uv_cache_size_bytes == 19
    assert migrated.runtime_venv_size_bytes == 17
    assert json.loads(migrated.runtime_disk_accounting_json)['version'] == 1
    summary = json.loads(migrated.runtime_disk_accounting_json)
    assert 'shared_inodes' not in summary
    assert len(json.loads(container.projects.runtime_shared_inodes(project.project_id, summary['generation']))) == 1

    from bulletjournal_controller.services import project_service as project_module

    monkeypatch.setattr(
        project_module, 'runtime_disk_accounting', lambda *_: (_ for _ in ()).throw(AssertionError('must not rescan'))
    )
    restarted = ServiceContainer(
        instance_paths=InstancePaths(instance_root), server_config=server_config, ensure_runtime_image=False
    )
    restarted.project_service.backfill_runtime_size_bytes()
    assert (
        restarted.projects.require(project.project_id).runtime_disk_accounting_json
        == migrated.runtime_disk_accounting_json
    )
    metrics = restarted.metrics_service.project_metrics(migrated)
    assert metrics['disk_breakdown_bytes']['python_env'] == 17
    assert metrics['disk_breakdown_bytes']['uv_cache'] == 19
    monkeypatch.setattr(
        restarted.projects,
        'runtime_shared_inodes',
        lambda *_: (_ for _ in ()).throw(AssertionError('inode index must be cached')),
    )
    from bulletjournal_controller.services import metrics_service as metrics_module

    monkeypatch.setattr(metrics_module.time, 'monotonic', lambda: float('inf'))
    assert restarted.metrics_service.project_metrics(migrated) == metrics


def test_breakdown_is_deduplicated_and_cached_without_runtime_rescan(tmp_path, monkeypatch):
    from test_metrics_service import DummyJobs, RecordingDockerAdapter, make_project

    from bulletjournal_controller.services.metrics_service import MetricsService
    from bulletjournal_controller.storage.instance_fs import create_project_root, init_instance_root

    paths = init_instance_root(tmp_path / 'instance')
    project_paths = create_project_root(paths, 'study-a')
    shared = project_paths.runtime_venv_dir / 'package.bin'
    shared.write_bytes(b'x' * 10)
    os.link(shared, project_paths.runtime_uv_cache_dir / 'package.bin')
    (project_paths.runtime_uv_cache_dir / 'cache.bin').write_bytes(b'x' * 20)
    (project_paths.object_store_dir / 'object.bin').write_bytes(b'x' * 30)
    (project_paths.state_db_path).write_bytes(b'x' * 40)
    os.link(shared, project_paths.object_store_dir / 'runtime-link.bin')
    os.link(project_paths.object_store_dir / 'object.bin', project_paths.root / 'object-link.bin')
    os.link(project_paths.state_db_path, project_paths.root / 'database-link.bin')
    project_paths.state_db_path.with_name('state.db-wal').write_bytes(b'x' * 5)
    (project_paths.root / 'other.bin').write_bytes(b'x' * 50)
    from bulletjournal_controller.services.disk_accounting import runtime_disk_accounting

    snapshot = runtime_disk_accounting(project_paths)
    project = make_project(
        project_paths.root,
        runtime_disk_accounting_json=json.dumps(snapshot),
        runtime_venv_size_bytes=10,
        runtime_uv_cache_size_bytes=20,
        container_name='container-a',
    )
    service = MetricsService(
        instance_paths=paths, docker_adapter=RecordingDockerAdapter(), runtime_config_service=None, jobs=DummyJobs()
    )
    metrics = service.project_metrics(project)
    assert metrics['disk_breakdown_bytes'] == {
        'python_env': 10,
        'uv_cache': 20,
        'objects': 30,
        'database': 45,
        'others': 50 + 1234,
    }
    assert metrics['disk_used_bytes'] == sum(metrics['disk_breakdown_bytes'].values())
    assert service.cached_project_metrics_map([project])[project.project_id] == metrics
    shared.unlink()
    # Runtime snapshots are reused by periodic metrics collection.
    assert service.project_metrics(project) == metrics


def test_runtime_scan_does_not_follow_symlinks_and_fails_on_unreadable_directory(tmp_path, monkeypatch):
    from bulletjournal_controller.services.disk_accounting import runtime_disk_accounting
    from bulletjournal_controller.storage.instance_fs import ProjectPaths

    paths = ProjectPaths(tmp_path)
    paths.runtime_venv_dir.mkdir(parents=True)
    paths.runtime_uv_cache_dir.mkdir()
    target = tmp_path / 'external.bin'
    target.write_bytes(b'x' * 1000)
    link = paths.runtime_venv_dir / 'linked.bin'
    link.symlink_to(target)
    assert runtime_disk_accounting(paths)['python_env'] == link.lstat().st_size
    original = os.scandir

    def unreadable(path):
        if path == paths.runtime_uv_cache_dir:
            raise PermissionError('unreadable cache')
        return original(path)

    monkeypatch.setattr(os, 'scandir', unreadable)
    with pytest.raises(PermissionError):
        runtime_disk_accounting(paths)
