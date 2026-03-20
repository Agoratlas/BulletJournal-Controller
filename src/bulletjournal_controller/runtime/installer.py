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
        additional_mounts: list[tuple[Path, str, bool]] | None = None,
    ) -> list[str]:
        options = [
            '--rm',
            '--network',
            network_mode,
            '--mount',
            f'type=bind,src={project_root},dst=/project',
            '--workdir',
            '/project',
            '--env',
            'UV_PROJECT_ENVIRONMENT=/project/.runtime/venv',
            image,
            'sh',
            '-lc',
            'uv lock --project /project && uv sync --project /project --locked',
        ]
        if gpu_enabled:
            options = ['--gpus', 'all'] + options
        for mount_path, target, read_only in additional_mounts or []:
            mount_spec = f'type=bind,src={mount_path},dst={target}'
            if read_only:
                mount_spec += ',readonly'
            options = ['--mount', mount_spec] + options
        return self.adapter.docker_base_command() + ['run'] + options

    def build_mark_stale_command(
        self,
        *,
        image: str,
        project_root: Path,
        network_mode: str,
        reason: str,
        additional_mounts: list[tuple[Path, str, bool]] | None = None,
    ) -> list[str]:
        options = [
            '--rm',
            '--network',
            network_mode,
            '--mount',
            f'type=bind,src={project_root},dst=/project',
            '--workdir',
            '/project',
            image,
            '/project/.runtime/venv/bin/bulletjournal',
            'mark-environment-changed',
            '/project',
            '--reason',
            reason,
        ]
        for mount_path, target, read_only in additional_mounts or []:
            mount_spec = f'type=bind,src={mount_path},dst={target}'
            if read_only:
                mount_spec += ',readonly'
            options = ['--mount', mount_spec] + options
        return self.adapter.docker_base_command() + ['run'] + options

    def run(self, command: list[str], *, timeout: int = 1800) -> subprocess.CompletedProcess[str]:
        return self.adapter.run(command, timeout=timeout)

    def build_image(self, *, image_name: str, dockerfile_path: Path, context_path: Path, timeout: int = 1800) -> subprocess.CompletedProcess[str]:
        command = self.adapter.build_image_command(
            image_name=image_name,
            dockerfile_path=dockerfile_path,
            context_path=context_path,
        )
        return self.adapter.run(command, timeout=timeout)
