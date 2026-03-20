from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import create_project_root, require_instance_root


def test_export_import_round_trip(instance_root) -> None:
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
        bulletjournal_version='0.1.0',
        custom_requirements_text='',
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    archive = instance_paths.exports_dir / 'study-a.zip'
    exported = container.export_service.export_project(project=project, archive_path=archive, include_artifacts=True)
    assert archive.is_file()
    container.project_service.delete_project('study-a')
    imported = container.export_service.import_project(archive_path=archive, project_id_override='study-b', include_install=False)
    assert imported['project_id'] == 'study-b'
