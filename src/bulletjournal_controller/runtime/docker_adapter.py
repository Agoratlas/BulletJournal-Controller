from __future__ import annotations

import subprocess
from pathlib import Path


class DockerAdapter:
    def __init__(self, *, docker_host: str | None = None):
        self.docker_host = docker_host

    def docker_base_command(self) -> list[str]:
        command = ['docker']
        if self.docker_host:
            command.extend(['-H', self.docker_host])
        return command

    def build_image_command(self, *, image_name: str, dockerfile_path: Path, context_path: Path) -> list[str]:
        return self.docker_base_command() + [
            'build',
            '--tag',
            image_name,
            '--file',
            str(dockerfile_path),
            str(context_path),
        ]

    def build_run_command(
        self,
        *,
        image: str,
        container_name: str,
        instance_id: str,
        project_id: str,
        project_root: Path,
        host_port: int,
        base_path: str,
        controller_token: str | None = None,
        cpu_limit_millis: int,
        memory_limit_bytes: int,
        gpu_enabled: bool,
        network_mode: str,
        additional_mounts: list[tuple[Path, str, bool]] | None = None,
    ) -> list[str]:
        options = [
            '--detach',
            '--name',
            container_name,
            '--label',
            f'bulletjournal.project_id={project_id}',
            '--label',
            f'bulletjournal.instance_id={instance_id}',
            '--label',
            'bulletjournal.managed_by=bulletjournal-controller',
            '--publish',
            f'127.0.0.1:{host_port}:8765',
            '--mount',
            f'type=bind,src={project_root},dst=/project',
            '--workdir',
            '/project',
            '--network',
            network_mode,
            '--cpus',
            str(max(cpu_limit_millis, 1) / 1000.0),
            '--memory',
            str(memory_limit_bytes),
            image,
            '/project/.runtime/venv/bin/python',
            '-c',
            (
                'from bulletjournal.cli.start import start_server; '
                f'start_server("/project", host="0.0.0.0", port=8765, base_path="{base_path}")'
            ),
        ]
        if controller_token:
            options = ['--env', f'BULLETJOURNAL_CONTROLLER_TOKEN={controller_token}'] + options
        if gpu_enabled:
            options = ['--gpus', 'all'] + options
        for mount_path, target, read_only in additional_mounts or []:
            mount_spec = f'type=bind,src={mount_path},dst={target}'
            if read_only:
                mount_spec += ',readonly'
            options = ['--mount', mount_spec] + options
        return self.docker_base_command() + ['run'] + options

    def build_stop_command(self, container_name: str) -> list[str]:
        return self.docker_base_command() + ['stop', container_name]

    def build_remove_command(self, container_name: str) -> list[str]:
        return self.docker_base_command() + ['rm', '-f', container_name]

    def build_inspect_command(self, container_name: str) -> list[str]:
        return self.docker_base_command() + ['inspect', container_name]

    def build_logs_command(self, container_name: str) -> list[str]:
        return self.docker_base_command() + ['logs', container_name]

    def build_list_by_label_command(self, *, label: str) -> list[str]:
        return self.docker_base_command() + ['ps', '-a', '--filter', f'label={label}', '--format', '{{.Names}}']

    def build_update_command(self, *, container_name: str, cpu_limit_millis: int, memory_limit_bytes: int) -> list[str]:
        return self.docker_base_command() + [
            'update',
            '--cpus',
            str(max(cpu_limit_millis, 1) / 1000.0),
            '--memory',
            str(memory_limit_bytes),
            container_name,
        ]

    def run(self, command: list[str], *, timeout: int = 120, capture_output: bool = True) -> subprocess.CompletedProcess[str]:
        return subprocess.run(command, capture_output=capture_output, text=True, check=False, timeout=timeout)
