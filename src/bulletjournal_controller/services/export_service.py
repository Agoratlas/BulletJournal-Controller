from __future__ import annotations

import os
import shutil
import subprocess
import tempfile
import tomllib
from pathlib import Path

from bulletjournal.storage.project_archive import (
    ProjectExportMode,
    export_project_archive,
    import_project_archive,
)

from bulletjournal_controller.config import MANAGED_RUNTIME_PACKAGE_ALIASES
from bulletjournal_controller.domain.enums import InstallStatus, ProjectStatus
from bulletjournal_controller.domain.errors import ConflictError, ValidationError
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.storage.instance_fs import InstancePaths
from bulletjournal_controller.storage.repositories import ProjectRepository
from bulletjournal_controller.utils import (
    normalize_package_name,
    random_token,
    sha256_file,
    utc_now_iso,
)


class ExportService:
    def __init__(
        self,
        *,
        instance_paths: InstancePaths,
        projects: ProjectRepository,
        default_created_by_user_id: str,
        archive_dir: str | None = None,
        archive_encryption_key: str | None = None,
    ):
        self.instance_paths = instance_paths
        self.projects = projects
        self.default_created_by_user_id = default_created_by_user_id
        self.archive_dir = archive_dir
        self.archive_encryption_key = archive_encryption_key

    def export_project(
        self,
        *,
        project: ProjectRecord,
        archive_path: Path,
        mode: ProjectExportMode = ProjectExportMode.FULL,
    ) -> dict[str, object]:
        project_root = self.instance_paths.project_root(project.project_id)
        return export_project_archive(project_root, archive_path, mode=mode)

    def import_project(
        self,
        *,
        archive_path: Path,
        project_id_override: str | None = None,
        include_install: bool = False,
    ) -> dict[str, object]:
        archive_project_id = self._archive_project_id(archive_path)
        target_project_id = project_id_override or archive_project_id
        if project_id_override is not None and project_id_override != archive_project_id:
            raise ValidationError(
                "Project id override is not supported by the installed BulletJournal import implementation."
            )
        destination = self.instance_paths.project_root(target_project_id)
        if destination.exists():
            raise ConflictError(f"Project {target_project_id} already exists.")
        if self.projects.get(target_project_id) is not None:
            raise ConflictError(
                f"Project {target_project_id} already exists in controller metadata."
            )
        imported = import_project_archive(
            archive_path,
            destination,
        )
        project_id = str(imported["project_id"])
        record = self._reconstruct_project_record(
            destination=destination,
            project_id=project_id,
            include_install=include_install,
        )
        return {
            "project_id": project_id,
            "include_install": include_install,
            "project": record.to_api(),
        }

    def archive_project(
        self,
        *,
        project: ProjectRecord,
        log_writer,
    ) -> dict[str, object]:
        archive_dir = self.resolve_archive_dir()
        archive_dir.mkdir(parents=True, exist_ok=True)
        encrypted = bool(self.archive_encryption_key)
        target_path = archive_dir / self.archive_filename(
            project.project_id, encrypted=encrypted
        )
        if target_path.exists():
            raise ConflictError(
                f"Archive already exists for project {project.project_id}: {target_path.name}"
            )

        with tempfile.TemporaryDirectory(dir=archive_dir) as temp_dir_name:
            temp_dir = Path(temp_dir_name)
            export_path = temp_dir / self._plaintext_archive_filename(project.project_id)
            log_writer(
                f"creating full archive for project {project.project_id} at {export_path.name}"
            )
            self.export_project(
                project=project,
                archive_path=export_path,
                mode=ProjectExportMode.FULL,
            )
            exported_size = export_path.stat().st_size
            final_path = target_path
            if encrypted:
                log_writer(
                    f"encrypting archive with openssl to {target_path.name}"
                )
                self._encrypt_archive(
                    source_path=export_path,
                    target_path=target_path,
                )
                export_path.unlink(missing_ok=True)
            else:
                log_writer(f"moving archive into place at {target_path.name}")
                shutil.move(str(export_path), str(target_path))
            final_size = final_path.stat().st_size

        return {
            "project_id": project.project_id,
            "archive_path": str(final_path),
            "archive_filename": final_path.name,
            "encrypted": encrypted,
            "exported_size_bytes": exported_size,
            "archive_size_bytes": final_size,
        }

    @staticmethod
    def parse_export_mode(value: str | None) -> ProjectExportMode:
        if value is None:
            return ProjectExportMode.FULL
        try:
            return ProjectExportMode(value)
        except ValueError as exc:
            raise ValidationError(f"Unsupported export mode: {value}") from exc

    @staticmethod
    def download_filename(*, project_id: str, mode: ProjectExportMode) -> str:
        suffix = {
            ProjectExportMode.CODE_ONLY: "code",
            ProjectExportMode.CODE_AND_DATA: "code_and_data",
            ProjectExportMode.FULL: "full",
        }[mode]
        return f"bulletjournal_export_{project_id}_{suffix}.zip"

    @staticmethod
    def archive_filename(project_id: str, *, encrypted: bool) -> str:
        return f"{project_id}.zip.enc" if encrypted else f"{project_id}.zip"

    @staticmethod
    def _plaintext_archive_filename(project_id: str) -> str:
        return f"{project_id}.zip"

    def resolve_archive_dir(self) -> Path:
        if self.archive_dir is None:
            return self.instance_paths.root / "archives"
        candidate = Path(self.archive_dir)
        if not candidate.is_absolute():
            raise ValidationError(
                "BULLETJOURNAL_ARCHIVE_DIR must be an absolute path."
            )
        return candidate

    def _encrypt_archive(self, *, source_path: Path, target_path: Path) -> None:
        if not self.archive_encryption_key:
            raise ValidationError("Archive encryption key is not configured.")
        command = [
            "openssl",
            "enc",
            "-aes-256-cbc",
            "-pbkdf2",
            "-salt",
            "-in",
            str(source_path),
            "-out",
            str(target_path),
            "-pass",
            "env:BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY",
        ]
        env = os.environ.copy()
        env["BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY"] = self.archive_encryption_key
        try:
            subprocess.run(
                command,
                check=True,
                capture_output=True,
                text=True,
                env=env,
            )
        except FileNotFoundError as exc:
            raise ValidationError(
                "OpenSSL is required to encrypt archives but was not found on PATH."
            ) from exc
        except subprocess.CalledProcessError as exc:
            detail = (exc.stderr or exc.stdout or "").strip()
            raise ValidationError(
                f"Archive encryption failed{': ' + detail if detail else '.'}"
            ) from exc

    def _reconstruct_project_record(
        self,
        *,
        destination: Path,
        project_id: str,
        include_install: bool,
    ) -> ProjectRecord:
        pyproject = tomllib.loads(
            (destination / "pyproject.toml").read_text(encoding="utf-8")
        )
        project_section = (
            pyproject.get("project", {}) if isinstance(pyproject, dict) else {}
        )
        dependencies = (
            project_section.get("dependencies", [])
            if isinstance(project_section, dict)
            else []
        )
        resolved_dependencies = (
            [str(item) for item in dependencies]
            if isinstance(dependencies, list)
            else []
        )
        bulletjournal_version = str(
            self._resolve_bulletjournal_version(resolved_dependencies) or "0.1.0"
        )
        python_version = str(self._resolve_python_version(project_section) or "3.11")
        now = utc_now_iso()
        lock_path = destination / "uv.lock"
        lock_sha256 = sha256_file(lock_path) if lock_path.is_file() else None
        return self.projects.create(
            project_id=project_id,
            controller_status_token=random_token(),
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
            custom_requirements_text="".join(
                f"{line}\n" for line in resolved_dependencies
            ),
            lock_sha256=lock_sha256,
            runtime_venv_size_bytes=None,
            runtime_uv_cache_size_bytes=None,
            install_status=InstallStatus.PENDING.value
            if not include_install
            else InstallStatus.READY.value,
            last_install_at=now if include_install else None,
            cpu_limit_millis=1000,
            memory_limit_bytes=1073741824,
            disk_soft_limit_bytes=None,
            gpu_enabled=False,
            container_name=None,
            container_id=None,
            container_port=None,
            runtime_started_at=None,
            runtime_stopped_at=now,
        )

    @staticmethod
    def _archive_project_id(archive_path: Path) -> str:
        import json
        import zipfile

        with zipfile.ZipFile(archive_path, "r") as archive:
            project_json = json.loads(
                archive.read("metadata/project.json").decode("utf-8")
            )
        if not isinstance(project_json, dict):
            raise ValidationError("Invalid project metadata in archive.")
        project_id = str(project_json.get("project_id") or "")
        if not project_id:
            raise ValidationError("Archive project metadata is missing project_id.")
        return project_id

    @staticmethod
    def _resolve_bulletjournal_version(dependencies: list[str]) -> str | None:
        for line in dependencies:
            if (
                ExportService._dependency_identity(line)
                not in MANAGED_RUNTIME_PACKAGE_ALIASES
            ):
                continue
            if "==" in line:
                return line.split("==", 1)[1].strip()
            if " @ " in line:
                return line.split(" @ ", 1)[1].strip()
            return line.strip()
        return None

    @staticmethod
    def _dependency_identity(line: str) -> str:
        import re

        pattern = re.compile(r"^\s*([A-Za-z0-9][A-Za-z0-9._-]*)")
        match = pattern.match(line)
        if match is None:
            return normalize_package_name(line.strip())
        return normalize_package_name(match.group(1))

    @staticmethod
    def _resolve_python_version(project_section: object) -> str | None:
        if not isinstance(project_section, dict):
            return None
        requires_python = project_section.get("requires-python")
        if not isinstance(requires_python, str):
            return None
        candidate = requires_python.replace("==", "").replace(".*", "").strip()
        return candidate or None
