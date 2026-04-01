from __future__ import annotations

from dataclasses import dataclass
import os
import re
import time
from pathlib import Path

from bulletjournal_controller.config import InstanceConfig
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.storage.atomic_write import atomic_write_text
from bulletjournal_controller.storage.instance_fs import ProjectPaths
from bulletjournal_controller.utils import (
    normalize_package_name,
    read_text_if_exists,
    sha256_file,
)


DEPENDENCY_NAME_PATTERN = re.compile(r"^\s*([A-Za-z0-9][A-Za-z0-9._-]*)")
INDEX_DIRECT_URL_PATTERN = re.compile(
    r"^\s*([A-Za-z0-9][A-Za-z0-9._-]*)\s*@\s*(https?://\S+)\s*$"
)
INLINE_INDEX_COMMENT_PATTERN = re.compile(
    r"^(?P<dependency>.+?)\s+#\s*index-url:\s*(?P<index_url>https?://\S+)\s*$"
)
VCS_DEPENDENCY_PATTERN = re.compile(
    r"^\s*(?P<name>[A-Za-z0-9][A-Za-z0-9._-]*)\s*@\s*(?P<url>(?:git|hg|svn|bzr)\+\S+)\s*$"
)
MISSING_BIND_MOUNT_PATTERN = re.compile(
    r"bind source path does not exist", re.IGNORECASE
)
INSTALL_RETRY_DELAYS_SECONDS = (0.25, 0.75, 1.5, 3.0, 5.0, 8.0)
ARCHIVE_SUFFIXES = (
    ".whl",
    ".tar.gz",
    ".zip",
    ".tar.bz2",
    ".tar.lz",
    ".tar.lzma",
    ".tar.xz",
    ".tar.zst",
    ".tar",
    ".tbz",
    ".tgz",
    ".tlz",
    ".txz",
)
VCS_PREFIXES = ("git+", "hg+", "svn+", "bzr+")


@dataclass(slots=True)
class DependencyConfig:
    dependency_lines: list[str]
    extra_index_urls: list[str]
    source_indexes: dict[str, str]


class EnvironmentService:
    def __init__(
        self,
        *,
        instance_config: InstanceConfig,
        installer: InstallerRunner,
        runtime_config_service,
    ):
        self.instance_config = instance_config
        self.installer = installer
        self.runtime_config_service = runtime_config_service

    def default_dependency_text(self) -> str:
        required = (
            f"bulletjournal=={self.instance_config.default_bulletjournal_version}"
        )
        runtime_defaults = self.runtime_config_service.default_dependencies_file()
        path = (
            str(runtime_defaults)
            if runtime_defaults is not None
            else self.instance_config.default_dependencies_file
        )
        if path is None:
            return required + "\n"
        text = read_text_if_exists(Path(path))
        if text is None:
            return required + "\n"
        rendered = text if text.endswith("\n") else f"{text}\n"
        config = self.parse_dependency_config(rendered)
        if not any(
            self.dependency_identity(line) == "bulletjournal"
            for line in config.dependency_lines
        ):
            return f"{required}\n{rendered}"
        return rendered

    def parse_dependency_text(self, text: str) -> list[str]:
        return self.parse_dependency_config(text).dependency_lines

    def parse_dependency_config(self, text: str) -> DependencyConfig:
        lines: list[str] = []
        extra_index_urls: list[str] = []
        source_indexes: dict[str, str] = {}
        for raw_line in text.splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#"):
                continue
            if line.startswith("--extra-index-url "):
                extra_index_urls.append(line.removeprefix("--extra-index-url ").strip())
                continue
            if line.startswith("--index-url "):
                extra_index_urls.append(line.removeprefix("--index-url ").strip())
                continue
            inline_index = self._inline_index_comment(line)
            if inline_index is not None:
                dependency_name, index_url = inline_index
                lines.append(dependency_name)
                extra_index_urls.append(index_url)
                source_indexes[normalize_package_name(dependency_name)] = index_url
                continue
            shorthand = self._index_shorthand(line)
            if shorthand is not None:
                dependency_name, index_url = shorthand
                lines.append(dependency_name)
                extra_index_urls.append(index_url)
                source_indexes[normalize_package_name(dependency_name)] = index_url
                continue
            lines.append(line)
        return DependencyConfig(
            dependency_lines=lines,
            extra_index_urls=self._dedupe(extra_index_urls),
            source_indexes=source_indexes,
        )

    def dependency_identity(self, line: str) -> str:
        match = DEPENDENCY_NAME_PATTERN.match(line)
        if match is None:
            return normalize_package_name(line.strip())
        token = match.group(1)
        return normalize_package_name(token)

    def floating_vcs_dependency_names(self, lines: list[str]) -> list[str]:
        packages: list[str] = []
        for line in lines:
            match = VCS_DEPENDENCY_PATTERN.match(line.strip())
            if match is None:
                continue
            url = match.group("url").strip()
            if not self._vcs_url_has_floating_ref(url):
                continue
            packages.append(normalize_package_name(match.group("name")))
        return self._dedupe(packages)

    def merge_dependency_lines(
        self, *, bulletjournal_version: str, custom_requirements_text: str
    ) -> list[str]:
        defaults = self.parse_dependency_config(self.default_dependency_text())
        default_lines = defaults.dependency_lines
        if not any(
            self.dependency_identity(line) == "bulletjournal" for line in default_lines
        ):
            default_lines.insert(0, f"bulletjournal=={bulletjournal_version}")
        default_lines = [
            f"bulletjournal=={bulletjournal_version}"
            if self.dependency_identity(line) == "bulletjournal"
            else line
            for line in default_lines
        ]
        custom = self.parse_dependency_config(custom_requirements_text)
        custom_lines = custom.dependency_lines
        custom_map = {self.dependency_identity(line): line for line in custom_lines}
        result: list[str] = []
        seen: set[str] = set()
        for line in default_lines:
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

    def merge_dependency_config(
        self, *, bulletjournal_version: str, custom_requirements_text: str
    ) -> DependencyConfig:
        default_config = self.parse_dependency_config(self.default_dependency_text())
        custom_config = self.parse_dependency_config(custom_requirements_text)
        dependency_lines = self.merge_dependency_lines(
            bulletjournal_version=bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )
        source_indexes = dict(default_config.source_indexes)
        source_indexes.update(custom_config.source_indexes)
        return DependencyConfig(
            dependency_lines=dependency_lines,
            extra_index_urls=self._dedupe(
                default_config.extra_index_urls + custom_config.extra_index_urls
            ),
            source_indexes=source_indexes,
        )

    def render_pyproject(
        self,
        *,
        project_id: str,
        python_version: str,
        dependencies: list[str],
        extra_index_urls: list[str] | None = None,
        source_indexes: dict[str, str] | None = None,
    ) -> str:
        dependency_lines = "\n".join(f'  "{line}",' for line in dependencies)
        source_block = self._source_block(
            dependencies=dependencies,
            extra_index_urls=extra_index_urls or [],
            source_indexes=source_indexes or {},
        )
        return (
            "[build-system]\n"
            'requires = ["setuptools>=68", "wheel"]\n'
            'build-backend = "setuptools.build_meta"\n\n'
            "[project]\n"
            f'name = "bulletjournal-project-{project_id}"\n'
            'version = "0.0.0"\n'
            f'requires-python = "=={python_version}.*"\n'
            "dependencies = [\n"
            f"{dependency_lines}\n"
            "]\n\n"
            f"{source_block}"
            "[tool.uv]\n"
            "package = false\n\n"
            "[tool.setuptools]\n"
            "packages = []\n\n"
            "[tool.bulletjournal_controller]\n"
            "schema_version = 1\n"
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
        config = self.merge_dependency_config(
            bulletjournal_version=bulletjournal_version,
            custom_requirements_text=custom_requirements_text,
        )
        atomic_write_text(
            project_paths.pyproject_path,
            self.render_pyproject(
                project_id=project_id,
                python_version=python_version,
                dependencies=config.dependency_lines,
                extra_index_urls=config.extra_index_urls,
                source_indexes=config.source_indexes,
            ),
        )
        return config.dependency_lines

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
        self.write_project_environment(
            project_paths=project_paths,
            project_id=project.project_id,
            python_version=project.python_version,
            bulletjournal_version=project.bulletjournal_version,
            custom_requirements_text=project.custom_requirements_text,
        )
        dependency_config = self.merge_dependency_config(
            bulletjournal_version=project.bulletjournal_version,
            custom_requirements_text=project.custom_requirements_text,
        )
        command = self.installer.build_install_command(
            image=self.runtime_config_service.runtime_config.runtime_image_name,
            project_root=project_paths.root,
            network_mode=self.instance_config.docker_network_mode,
            gpu_enabled=project.gpu_enabled,
            env_file=self.runtime_config_service.env_file(),
            additional_mounts=self.runtime_config_service.additional_mounts(),
            user_uid=self.runtime_config_service.runtime_config.container_uid,
            user_gid=self.runtime_config_service.runtime_config.container_gid,
            upgrade_packages=self.floating_vcs_dependency_names(
                dependency_config.dependency_lines
            ),
        )
        log_writer(f"install command: {' '.join(command)}")
        result = self._run_with_mount_retry(
            command=command,
            mount_paths=[
                project_paths.root,
                *[
                    mount_path
                    for mount_path, _target, _readonly in self.runtime_config_service.additional_mounts()
                ],
            ],
            log_writer=log_writer,
        )
        if result.returncode != 0:
            raise RuntimeError("Environment install failed.")
        if mark_all_artifacts_stale:
            stale_command = self.installer.build_mark_stale_command(
                image=self.runtime_config_service.runtime_config.runtime_image_name,
                project_root=project_paths.root,
                network_mode=self.instance_config.docker_network_mode,
                reason=reason,
                env_file=self.runtime_config_service.env_file(),
                additional_mounts=self.runtime_config_service.additional_mounts(),
                user_uid=self.runtime_config_service.runtime_config.container_uid,
                user_gid=self.runtime_config_service.runtime_config.container_gid,
            )
            log_writer(f"mark stale command: {' '.join(stale_command)}")
            stale_result = self.installer.run(stale_command)
            if stale_result.stdout:
                log_writer(stale_result.stdout.rstrip())
            if stale_result.stderr:
                log_writer(stale_result.stderr.rstrip())
            if stale_result.returncode != 0:
                raise RuntimeError(
                    "Artifact invalidation failed after environment install."
                )
        return self.compute_lock_sha256(project_paths.uv_lock_path)

    def _run_with_mount_retry(
        self, *, command: list[str], mount_paths: list[Path], log_writer
    ):
        attempts = len(INSTALL_RETRY_DELAYS_SECONDS) + 1
        result = None
        for index in range(attempts):
            for mount_path in mount_paths:
                if not mount_path.exists():
                    raise RuntimeError(
                        f"Container mount path disappeared before install: {mount_path}"
                    )
                self._flush_mount_path(mount_path)
            result = self.installer.run(command)
            if result.stdout:
                log_writer(result.stdout.rstrip())
            if result.stderr:
                log_writer(result.stderr.rstrip())
            if result.returncode == 0:
                return result
            if not self._is_missing_bind_mount_error(result.stderr or ""):
                return result
            if index >= len(INSTALL_RETRY_DELAYS_SECONDS):
                return result
            delay = INSTALL_RETRY_DELAYS_SECONDS[index]
            log_writer(
                f"detected transient Docker bind mount visibility failure; retrying in {delay:.2f}s",
            )
            time.sleep(delay)
        if result is None:
            raise RuntimeError("Install command was never attempted.")
        return result

    @staticmethod
    def _is_missing_bind_mount_error(stderr: str) -> bool:
        return bool(MISSING_BIND_MOUNT_PATTERN.search(stderr))

    @staticmethod
    def _flush_mount_path(project_root: Path) -> None:
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

    def _source_block(
        self,
        *,
        dependencies: list[str],
        extra_index_urls: list[str],
        source_indexes: dict[str, str],
    ) -> str:
        lines: list[str] = []
        index_names: dict[str, str] = {}
        for offset, index_url in enumerate(extra_index_urls, start=1):
            name = f"extra_index_{offset}"
            index_names[index_url] = name
            lines.append("[[tool.uv.index]]")
            lines.append(f'name = "{name}"')
            lines.append(f'url = "{index_url}"')
            lines.append("")

        source_lines: list[str] = []

        for dependency_name, index_url in source_indexes.items():
            index_name = index_names.get(index_url)
            if index_name:
                source_lines.append(f'{dependency_name} = {{ index = "{index_name}" }}')

        if source_lines:
            lines.append("[tool.uv.sources]")
            lines.extend(source_lines)
            lines.append("")

        return "" if not lines else "\n".join(lines) + "\n"

    @staticmethod
    def _dedupe(values: list[str]) -> list[str]:
        result: list[str] = []
        seen: set[str] = set()
        for value in values:
            if value not in seen:
                result.append(value)
                seen.add(value)
        return result

    @staticmethod
    def _index_shorthand(line: str) -> tuple[str, str] | None:
        match = INDEX_DIRECT_URL_PATTERN.match(line)
        if match is None:
            return None
        dependency_name = match.group(1).strip()
        url = match.group(2).strip()
        lowered = url.lower()
        if lowered.startswith(VCS_PREFIXES):
            return None
        if lowered.endswith(ARCHIVE_SUFFIXES):
            return None
        return dependency_name, url

    @staticmethod
    def _inline_index_comment(line: str) -> tuple[str, str] | None:
        match = INLINE_INDEX_COMMENT_PATTERN.match(line)
        if match is None:
            return None
        dependency_name = match.group("dependency").strip()
        index_url = match.group("index_url").strip()
        return dependency_name, index_url

    @staticmethod
    def _vcs_url_has_floating_ref(url: str) -> bool:
        ref = url.rsplit("@", 1)[-1].strip() if "@" in url else ""
        if not ref:
            return True
        return not re.fullmatch(r"[0-9a-fA-F]{7,40}", ref)
