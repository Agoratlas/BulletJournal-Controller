from __future__ import annotations

import json
import tomllib
import zipfile
from pathlib import Path

from bulletjournal_controller import __version__
from bulletjournal_controller.config import EXPORT_MANIFEST_VERSION
from bulletjournal_controller.domain.errors import ConflictError, ValidationError
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.domain.enums import InstallStatus, ProjectStatus
from bulletjournal_controller.storage.instance_fs import InstancePaths, create_project_root
from bulletjournal_controller.storage.repositories import ProjectRepository
from bulletjournal_controller.utils import sha256_file, utc_now_iso


EXPORTABLE_NAMES = [
    'graph',
    'notebooks',
    'artifacts',
    'metadata',
    'checkpoints',
    'uploads',
    'pyproject.toml',
    'uv.lock',
]


class ExportService:
    def __init__(self, *, instance_paths: InstancePaths, projects: ProjectRepository, default_created_by_user_id: str):
        self.instance_paths = instance_paths
        self.projects = projects
        self.default_created_by_user_id = default_created_by_user_id

    def export_project(self, *, project: ProjectRecord, archive_path: Path, include_artifacts: bool) -> dict[str, object]:
        project_root = self.instance_paths.project_root(project.project_id)
        manifest = {
            'schema_version': EXPORT_MANIFEST_VERSION,
            'project_id': project.project_id,
            'exported_at': utc_now_iso(),
            'controller_version': __version__,
            'include_artifacts': include_artifacts,
            'bulletjournal_version': project.bulletjournal_version,
            'python_version': project.python_version,
            'lock_sha256': project.lock_sha256,
        }
        archive_path.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(archive_path, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
            archive.writestr('export_manifest.json', json.dumps(manifest, indent=2) + '\n')
            for name in EXPORTABLE_NAMES:
                if name == 'artifacts' and not include_artifacts:
                    continue
                path = project_root / name
                if not path.exists():
                    continue
                if path.is_file():
                    archive.write(path, f'project/{name}')
                    continue
                for child in sorted(path.rglob('*')):
                    if child.is_file():
                        archive.write(child, f'project/{child.relative_to(project_root).as_posix()}')
        return {'archive': str(archive_path), 'manifest': manifest}

    def import_project(
        self,
        *,
        archive_path: Path,
        project_id_override: str | None = None,
        include_install: bool = False,
    ) -> dict[str, object]:
        with zipfile.ZipFile(archive_path, 'r') as archive:
            manifest = json.loads(archive.read('export_manifest.json').decode('utf-8'))
            if not isinstance(manifest, dict):
                raise ValidationError('Invalid export manifest.')
            self._validate_manifest(manifest)
            project_id = str(project_id_override or manifest['project_id'])
            destination = self.instance_paths.project_root(project_id)
            if destination.exists():
                raise ConflictError(f'Project {project_id} already exists.')
            if self.projects.get(project_id) is not None:
                raise ConflictError(f'Project {project_id} already exists in controller metadata.')
            create_project_root(self.instance_paths, project_id)
            for member in archive.namelist():
                if not member.startswith('project/'):
                    continue
                relative = member.removeprefix('project/')
                if not relative or relative.startswith('.runtime/'):
                    continue
                target = destination / relative
                if member.endswith('/'):
                    target.mkdir(parents=True, exist_ok=True)
                    continue
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(archive.read(member))
        record = self._reconstruct_project_record(
            destination=destination,
            project_id=project_id,
            manifest=manifest,
            include_install=include_install,
        )
        return {'project_id': project_id, 'include_install': include_install, 'manifest': manifest, 'project': record.to_api()}

    def _reconstruct_project_record(
        self,
        *,
        destination: Path,
        project_id: str,
        manifest: dict[str, object],
        include_install: bool,
    ) -> ProjectRecord:
        pyproject = tomllib.loads((destination / 'pyproject.toml').read_text(encoding='utf-8'))
        project_section = pyproject.get('project', {}) if isinstance(pyproject, dict) else {}
        dependencies = project_section.get('dependencies', []) if isinstance(project_section, dict) else []
        resolved_dependencies = [str(item) for item in dependencies] if isinstance(dependencies, list) else []
        bulletjournal_version = str(manifest.get('bulletjournal_version') or self._resolve_bulletjournal_version(resolved_dependencies) or '0.1.0')
        python_version = str(manifest.get('python_version') or self._resolve_python_version(project_section) or '3.11')
        custom_requirements = [item for item in resolved_dependencies if not item.strip().startswith('bulletjournal')]
        now = utc_now_iso()
        lock_path = destination / 'uv.lock'
        lock_sha256 = str(manifest.get('lock_sha256') or sha256_file(lock_path)) if lock_path.is_file() else None
        return self.projects.create(
            project_id=project_id,
            status=ProjectStatus.STOPPED.value,
            status_reason=None,
            root_path=str(destination),
            created_by_user_id=self.default_created_by_user_id,
            created_at=now,
            updated_at=now,
            last_graph_edit_at=None,
            last_notebook_edit_at=None,
            last_edit_at=None,
            last_run_finished_at=None,
            idle_shutdown_eligible_at=None,
            python_version=python_version,
            bulletjournal_version=bulletjournal_version,
            custom_requirements_text=''.join(f'{line}\n' for line in custom_requirements),
            lock_sha256=lock_sha256,
            install_status=InstallStatus.PENDING.value if not include_install else InstallStatus.READY.value,
            last_install_at=now if include_install else None,
            cpu_limit_millis=1000,
            memory_limit_bytes=1073741824,
            gpu_enabled=False,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_started_at=None,
            runtime_stopped_at=now,
        )

    @staticmethod
    def _validate_manifest(manifest: dict[str, object]) -> None:
        required = {
            'schema_version': int,
            'project_id': str,
            'exported_at': str,
            'controller_version': str,
            'include_artifacts': bool,
            'bulletjournal_version': str,
            'python_version': str,
        }
        for key, expected_type in required.items():
            value = manifest.get(key)
            if type(value) is not expected_type:
                raise ValidationError(f'Invalid export manifest field: {key}')
        if int(manifest['schema_version']) != EXPORT_MANIFEST_VERSION:
            raise ValidationError('Unsupported export manifest schema version.')

    @staticmethod
    def _resolve_bulletjournal_version(dependencies: list[str]) -> str | None:
        for line in dependencies:
            if line.startswith('bulletjournal=='):
                return line.split('==', 1)[1].strip()
        return None

    @staticmethod
    def _resolve_python_version(project_section: object) -> str | None:
        if not isinstance(project_section, dict):
            return None
        requires_python = project_section.get('requires-python')
        if not isinstance(requires_python, str):
            return None
        candidate = requires_python.replace('==', '').replace('.*', '').strip()
        return candidate or None
