from __future__ import annotations

import json
import shutil
import sqlite3
from dataclasses import dataclass
from pathlib import Path

from bulletjournal_controller.config import InstanceConfig, default_instance_config, instance_config_json, load_instance_config
from bulletjournal_controller.domain.errors import ConfigurationError, NotFoundError, ProjectValidationError
from bulletjournal_controller.domain.rules import validate_project_id
from bulletjournal_controller.storage.atomic_write import atomic_write_text
from bulletjournal_controller.utils import ensure_directory, utc_now_iso


@dataclass(slots=True, frozen=True)
class ProjectPaths:
    root: Path

    @property
    def graph_dir(self) -> Path:
        return self.root / 'graph'

    @property
    def notebooks_dir(self) -> Path:
        return self.root / 'notebooks'

    @property
    def artifacts_dir(self) -> Path:
        return self.root / 'artifacts'

    @property
    def object_store_dir(self) -> Path:
        return self.artifacts_dir / 'objects'

    @property
    def metadata_dir(self) -> Path:
        return self.root / 'metadata'

    @property
    def project_json_path(self) -> Path:
        return self.metadata_dir / 'project.json'

    @property
    def state_db_path(self) -> Path:
        return self.metadata_dir / 'state.db'

    @property
    def checkpoints_dir(self) -> Path:
        return self.root / 'checkpoints'

    @property
    def uploads_dir(self) -> Path:
        return self.root / 'uploads'

    @property
    def uploads_temp_dir(self) -> Path:
        return self.uploads_dir / 'temp'

    @property
    def pyproject_path(self) -> Path:
        return self.root / 'pyproject.toml'

    @property
    def uv_lock_path(self) -> Path:
        return self.root / 'uv.lock'

    @property
    def runtime_dir(self) -> Path:
        return self.root / '.runtime'

    @property
    def runtime_venv_dir(self) -> Path:
        return self.runtime_dir / 'venv'

    @property
    def runtime_install_dir(self) -> Path:
        return self.runtime_dir / 'install'

    @property
    def runtime_logs_dir(self) -> Path:
        return self.runtime_dir / 'logs'


@dataclass(slots=True, frozen=True)
class InstancePaths:
    root: Path

    @property
    def config_dir(self) -> Path:
        return self.root / 'config'

    @property
    def instance_json_path(self) -> Path:
        return self.config_dir / 'instance.json'

    @property
    def metadata_dir(self) -> Path:
        return self.root / 'metadata'

    @property
    def state_db_path(self) -> Path:
        return self.metadata_dir / 'state.db'

    @property
    def projects_dir(self) -> Path:
        return self.root / 'projects'

    @property
    def exports_dir(self) -> Path:
        return self.root / 'exports'

    @property
    def logs_dir(self) -> Path:
        return self.root / 'logs'

    @property
    def controller_log_path(self) -> Path:
        return self.logs_dir / 'controller.log'

    @property
    def job_logs_dir(self) -> Path:
        return self.logs_dir / 'jobs'

    @property
    def runtime_dir(self) -> Path:
        return self.root / 'runtime'

    @property
    def runtime_cache_dir(self) -> Path:
        return self.runtime_dir / 'cache'

    @property
    def local_config_dir(self) -> Path:
        return self.root / 'config' / 'runtime'

    @property
    def local_ssh_dir(self) -> Path:
        return self.local_config_dir / 'ssh'

    @property
    def local_runtime_dir(self) -> Path:
        return self.local_config_dir / 'runtime'

    @property
    def local_runtime_dockerfile_path(self) -> Path:
        return self.local_runtime_dir / 'Dockerfile'

    @property
    def local_default_dependencies_path(self) -> Path:
        return self.local_config_dir / 'default-dependencies.txt'

    def project_root(self, project_id: str) -> Path:
        return self.projects_dir / validate_project_id(project_id)

    def project_paths(self, project_id: str) -> ProjectPaths:
        return ProjectPaths(self.project_root(project_id))


def init_instance_root(path: Path, *, config: InstanceConfig | None = None) -> InstancePaths:
    root = path.resolve()
    paths = InstancePaths(root)
    resolved_config = config or default_instance_config()
    ensure_directory(paths.config_dir)
    ensure_directory(paths.metadata_dir)
    ensure_directory(paths.projects_dir)
    ensure_directory(paths.exports_dir)
    ensure_directory(paths.logs_dir)
    ensure_directory(paths.job_logs_dir)
    ensure_directory(paths.runtime_cache_dir)
    ensure_directory(paths.local_config_dir)
    ensure_directory(paths.local_ssh_dir)
    ensure_directory(paths.local_runtime_dir)
    if not paths.controller_log_path.exists():
        paths.controller_log_path.write_text('', encoding='utf-8')
    if not paths.instance_json_path.exists():
        atomic_write_text(paths.instance_json_path, instance_config_json(resolved_config))
    _seed_local_config(paths, resolved_config)
    if not paths.state_db_path.exists():
        sqlite3.connect(paths.state_db_path).close()
    return paths


def require_instance_root(path: Path) -> InstancePaths:
    root = path.resolve()
    paths = InstancePaths(root)
    missing = [
        expected
        for expected in [
            paths.config_dir,
            paths.metadata_dir,
            paths.projects_dir,
            paths.exports_dir,
            paths.logs_dir,
            paths.job_logs_dir,
            paths.runtime_cache_dir,
            paths.local_config_dir,
            paths.local_runtime_dir,
            paths.local_ssh_dir,
            paths.instance_json_path,
            paths.state_db_path,
        ]
        if not expected.exists()
    ]
    if missing:
        raise ConfigurationError(f'Invalid instance root: missing {missing[0]}')
    load_instance_config(paths.instance_json_path)
    return paths


def create_project_root(paths: InstancePaths, project_id: str, *, title: str | None = None) -> ProjectPaths:
    resolved_project_id = validate_project_id(project_id)
    project_paths = paths.project_paths(resolved_project_id)
    if project_paths.root.exists() and any(project_paths.root.iterdir()):
        raise ProjectValidationError(f'Project root already exists for {resolved_project_id}.')
    ensure_directory(project_paths.graph_dir)
    ensure_directory(project_paths.notebooks_dir)
    ensure_directory(project_paths.object_store_dir)
    ensure_directory(project_paths.metadata_dir)
    ensure_directory(project_paths.checkpoints_dir)
    ensure_directory(project_paths.uploads_temp_dir)
    ensure_directory(project_paths.runtime_venv_dir)
    ensure_directory(project_paths.runtime_install_dir)
    ensure_directory(project_paths.runtime_logs_dir)
    now = utc_now_iso()
    meta = {
        'schema_version': 1,
        'project_id': resolved_project_id,
        'graph_version': 1,
        'updated_at': now,
    }
    atomic_write_text(project_paths.graph_dir / 'meta.json', json.dumps(meta, indent=2, sort_keys=True) + '\n')
    atomic_write_text(project_paths.graph_dir / 'nodes.json', '[]\n')
    atomic_write_text(project_paths.graph_dir / 'edges.json', '[]\n')
    atomic_write_text(project_paths.graph_dir / 'layout.json', '[]\n')
    project_meta = {
        'schema_version': 1,
        'project_id': resolved_project_id,
        'created_at': now,
    }
    if title is not None and title.strip():
        project_meta['title'] = title.strip()
    atomic_write_text(project_paths.project_json_path, json.dumps(project_meta, indent=2, sort_keys=True) + '\n')
    if not project_paths.state_db_path.exists():
        sqlite3.connect(project_paths.state_db_path).close()
    return project_paths


def load_project_json(project_paths: ProjectPaths) -> dict[str, object]:
    return json.loads(project_paths.project_json_path.read_text(encoding='utf-8'))


def require_project_root(paths: InstancePaths, project_id: str) -> ProjectPaths:
    project_paths = paths.project_paths(project_id)
    if not project_paths.root.exists():
        raise NotFoundError(f'Project {project_id} does not exist on disk.')
    required = [
        project_paths.graph_dir,
        project_paths.notebooks_dir,
        project_paths.object_store_dir,
        project_paths.metadata_dir,
        project_paths.project_json_path,
        project_paths.state_db_path,
        project_paths.pyproject_path,
        project_paths.runtime_dir,
    ]
    missing = [path for path in required if not path.exists()]
    if missing:
        raise ProjectValidationError(f'Invalid project root {project_paths.root}: missing {missing[0].name}.')
    return project_paths


def delete_project_root(paths: InstancePaths, project_id: str) -> None:
    project_root = paths.project_root(project_id)
    if project_root.exists():
        shutil.rmtree(project_root)


def _seed_local_config(paths: InstancePaths, config: InstanceConfig) -> None:
    if config.default_dependencies_file:
        source = Path(config.default_dependencies_file)
        if source.is_file() and not paths.local_default_dependencies_path.exists():
            atomic_write_text(paths.local_default_dependencies_path, source.read_text(encoding='utf-8'))
    if config.runtime_dockerfile:
        source = Path(config.runtime_dockerfile)
        if source.is_file() and not paths.local_runtime_dockerfile_path.exists():
            atomic_write_text(paths.local_runtime_dockerfile_path, source.read_text(encoding='utf-8'))
