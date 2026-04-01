from __future__ import annotations

import subprocess
from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter


class InstallerRunner:
    def __init__(self, adapter: DockerAdapter):
        self.adapter = adapter

    def build_install_command(
        self,
        *,
        image: str,
        project_root: Path,
        network_mode: str,
        gpu_enabled: bool,
        env_file: Path | None = None,
        additional_mounts: list[tuple[Path, str, bool]] | None = None,
        upgrade_packages: list[str] | None = None,
        user_uid: int | None = None,
        user_gid: int | None = None,
    ) -> list[str]:
        lock_command = "uv lock --project /project"
        for package in upgrade_packages or []:
            lock_command += f" --upgrade-package {package}"
        options = [
            "--rm",
            "--network",
            network_mode,
            "--mount",
            f"type=bind,src={project_root},dst=/project",
            "--workdir",
            "/project",
            "--env",
            "UV_PROJECT_ENVIRONMENT=/project/.runtime/venv",
            image,
            "sh",
            "-lc",
            f"{lock_command} && uv sync --project /project --locked --no-install-project",
        ]
        if env_file is not None:
            options = ["--env-file", str(env_file)] + options
        if user_uid is not None and user_gid is not None:
            options = [
                "--user",
                f"{user_uid}:{user_gid}",
                "--env",
                "HOME=/home/bulletjournal",
            ] + options
        if gpu_enabled:
            options = ["--gpus", "all"] + options
        for mount_path, target, read_only in additional_mounts or []:
            mount_spec = f"type=bind,src={mount_path},dst={target}"
            if read_only:
                mount_spec += ",readonly"
            options = ["--mount", mount_spec] + options
        return self.adapter.docker_base_command() + ["run"] + options

    def build_mark_stale_command(
        self,
        *,
        image: str,
        project_root: Path,
        network_mode: str,
        reason: str,
        env_file: Path | None = None,
        additional_mounts: list[tuple[Path, str, bool]] | None = None,
        user_uid: int | None = None,
        user_gid: int | None = None,
    ) -> list[str]:
        options = [
            "--rm",
            "--network",
            network_mode,
            "--mount",
            f"type=bind,src={project_root},dst=/project",
            "--workdir",
            "/project",
            image,
            "/project/.runtime/venv/bin/bulletjournal",
            "mark-environment-changed",
            "/project",
            "--reason",
            reason,
        ]
        if env_file is not None:
            options = ["--env-file", str(env_file)] + options
        if user_uid is not None and user_gid is not None:
            options = [
                "--user",
                f"{user_uid}:{user_gid}",
                "--env",
                "HOME=/home/bulletjournal",
            ] + options
        for mount_path, target, read_only in additional_mounts or []:
            mount_spec = f"type=bind,src={mount_path},dst={target}"
            if read_only:
                mount_spec += ",readonly"
            options = ["--mount", mount_spec] + options
        return self.adapter.docker_base_command() + ["run"] + options

    def run(
        self, command: list[str], *, timeout: int = 1800
    ) -> subprocess.CompletedProcess[str]:
        return self.adapter.run(command, timeout=timeout)

    def build_image(
        self,
        *,
        image_name: str,
        dockerfile_path: Path,
        context_path: Path,
        user_uid: int | None = None,
        user_gid: int | None = None,
        timeout: int = 1800,
    ) -> subprocess.CompletedProcess[str]:
        command = self.adapter.build_image_command(
            image_name=image_name,
            dockerfile_path=dockerfile_path,
            context_path=context_path,
            user_uid=user_uid,
            user_gid=user_gid,
        )
        return self.adapter.run(command, timeout=timeout)
