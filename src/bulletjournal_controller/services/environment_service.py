from __future__ import annotations

import os
import re
import time
from pathlib import Path

from bulletjournal_controller.config import InstanceConfig
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.storage.atomic_write import atomic_write_text
from bulletjournal_controller.storage.instance_fs import ProjectPaths
from bulletjournal_controller.utils import normalize_package_name, read_text_if_exists, sha256_file


DEPENDENCY_NAME_PATTERN = re.compile(r'^\s*([A-Za-z0-9][A-Za-z0-9._-]*)')
MISSING_BIND_MOUNT_PATTERN = re.compile(r'bind source path does not exist', re.IGNORECASE)
INSTALL_RETRY_DELAYS_SECONDS = (0.25, 0.75, 1.5, 3.0, 5.0, 8.0)


class EnvironmentService:
    def __init__(self, *, instance_config: InstanceConfig, installer: InstallerRunner, runtime_config_service):
        self.instance_config = instance_config
        self.installer = installer
        self.runtime_config_service = runtime_config_service

    def default_dependency_text(self) -> str:
        required = f'bulletjournal=={self.instance_config.default_bulletjournal_version}'
        runtime_defaults = self.runtime_config_service.default_dependencies_file()
        path = str(runtime_defaults) if runtime_defaults is not None else self.instance_config.default_dependencies_file
        if path is None:
            return required + '\n'
        text = read_text_if_exists(Path(path))
        if text is None:
            return required + '\n'
        lines = self.parse_dependency_text(text)
        if not any(self.dependency_identity(line) == 'bulletjournal' for line in lines):
            lines.insert(0, required)
        return ''.join(f'{line}\n' for line in lines)

    def parse_dependency_text(self, text: str) -> list[str]:
        lines: list[str] = []
        for raw_line in text.splitlines():
            line = raw_line.strip()
            if not line or line.startswith('#'):
                continue
            lines.append(line)
        return lines

    def dependency_identity(self, line: str) -> str:
        match = DEPENDENCY_NAME_PATTERN.match(line)
        if match is None:
            return normalize_package_name(line.strip())
        token = match.group(1)
        return normalize_package_name(token)

    def merge_dependency_lines(self, *, bulletjournal_version: str, custom_requirements_text: str) -> list[str]:
        defaults = self.parse_dependency_text(self.default_dependency_text())
        if not any(self.dependency_identity(line) == 'bulletjournal' for line in defaults):
            defaults.insert(0, f'bulletjournal=={bulletjournal_version}')
        defaults = [
            f'bulletjournal=={bulletjournal_version}' if self.dependency_identity(line) == 'bulletjournal' else line
            for line in defaults
        ]
        custom_lines = self.parse_dependency_text(custom_requirements_text)
        custom_map = {self.dependency_identity(line): line for line in custom_lines}
        result: list[str] = []
        seen: set[str] = set()
        for line in defaults:
            identity = self.dependency_identity(line)
            resolved = custom_map.get(identity, line)
            result.append(resolved)
            seen.add(identity)
        for line in custom_lines:
            identity = self.dependency_identity(line)
            if identity not in seen:
                result.append(line)
                seen.add(identity)
        return result

    def render_pyproject(
        self,
        *,
        project_id: str,
        python_version: str,
        dependencies: list[str],
    ) -> str:
        dependency_lines = '\n'.join(f'  "{line}",' for line in dependencies)
        source_block = self._local_source_block(dependencies)
        return (
            '[project]\n'
            f'name = "bulletjournal-project-{project_id}"\n'
            'version = "0.0.0"\n'
            f'requires-python = "=={python_version}.*"\n'
            'dependencies = [\n'
            f'{dependency_lines}\n'
            ']\n\n'
            f'{source_block}'
            '[tool.uv]\n'
            'package = false\n\n'
            '[tool.bulletjournal_controller]\n'
            'schema_version = 1\n'
            f'project_id = "{project_id}"\n'
        )

    def write_project_environment(
        self,
        *,
        project_paths: ProjectPaths,
        project_id: str,
        python_version: str,
        bulletjournal_version: str,
        custom_requirements_text: str,
    ) -> list[str]:
        dependencies = self.merge_dependency_lines(
            bulletjournal_version=bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )
        atomic_write_text(
            project_paths.pyproject_path,
            self.render_pyproject(project_id=project_id, python_version=python_version, dependencies=dependencies),
        )
        return dependencies

    def compute_lock_sha256(self, path: Path) -> str:
        return sha256_file(path)

    def install_environment(
        self,
        *,
        project: ProjectRecord,
        project_paths: ProjectPaths,
        log_writer,
        mark_all_artifacts_stale: bool,
        reason: str,
    ) -> str:
        command = self.installer.build_install_command(
            image=self.runtime_config_service.runtime_config.runtime_image_name,
            project_root=project_paths.root,
            network_mode=self.instance_config.docker_network_mode,
            gpu_enabled=project.gpu_enabled,
            additional_mounts=self.runtime_config_service.additional_mounts(),
        )
        log_writer(f'install command: {" ".join(command)}')
        result = self._run_with_mount_retry(
            command=command,
            project_root=project_paths.root,
            log_writer=log_writer,
        )
        if result.returncode != 0:
            raise RuntimeError('Environment install failed.')
        if mark_all_artifacts_stale:
            stale_command = self.installer.build_mark_stale_command(
                image=self.runtime_config_service.runtime_config.runtime_image_name,
                project_root=project_paths.root,
                network_mode=self.instance_config.docker_network_mode,
                reason=reason,
                additional_mounts=self.runtime_config_service.additional_mounts(),
            )
            log_writer(f'mark stale command: {" ".join(stale_command)}')
            stale_result = self.installer.run(stale_command)
            if stale_result.stdout:
                log_writer(stale_result.stdout.rstrip())
            if stale_result.stderr:
                log_writer(stale_result.stderr.rstrip())
            if stale_result.returncode != 0:
                raise RuntimeError('Artifact invalidation failed after environment install.')
        return self.compute_lock_sha256(project_paths.uv_lock_path)

    def _run_with_mount_retry(self, *, command: list[str], project_root: Path, log_writer):
        attempts = len(INSTALL_RETRY_DELAYS_SECONDS) + 1
        result = None
        for index in range(attempts):
            if not project_root.exists():
                raise RuntimeError(f'Project root disappeared before install: {project_root}')
            self._flush_project_root(project_root)
            result = self.installer.run(command)
            if result.stdout:
                log_writer(result.stdout.rstrip())
            if result.stderr:
                log_writer(result.stderr.rstrip())
            if result.returncode == 0:
                return result
            if not self._is_missing_bind_mount_error(result.stderr or ''):
                return result
            if index >= len(INSTALL_RETRY_DELAYS_SECONDS):
                return result
            delay = INSTALL_RETRY_DELAYS_SECONDS[index]
            log_writer(
                f'detected transient Docker bind mount visibility failure for {project_root}; retrying in {delay:.2f}s',
            )
            time.sleep(delay)
        if result is None:
            raise RuntimeError('Install command was never attempted.')
        return result

    @staticmethod
    def _is_missing_bind_mount_error(stderr: str) -> bool:
        return bool(MISSING_BIND_MOUNT_PATTERN.search(stderr))

    @staticmethod
    def _flush_project_root(project_root: Path) -> None:
        try:
            directory_fd = os.open(project_root, os.O_RDONLY)
        except OSError:
            return
        try:
            os.fsync(directory_fd)
        except OSError:
            return
        finally:
            os.close(directory_fd)

    def _local_source_block(self, dependencies: list[str]) -> str:
        local_source = self.runtime_config_service.runtime_config.local_bulletjournal_source
        if local_source is None:
            return ''
        if not any(self.dependency_identity(line) == 'bulletjournal' for line in dependencies):
            return ''
        return (
            '[tool.uv.sources]\n'
            'bulletjournal = { path = "/opt/bulletjournal/local-source/BulletJournal", editable = true }\n\n'
        )
