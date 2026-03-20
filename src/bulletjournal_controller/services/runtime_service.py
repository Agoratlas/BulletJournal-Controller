from __future__ import annotations

import json
import re
import socket
from dataclasses import dataclass

from bulletjournal_controller.config import DEFAULT_RUNTIME_INTERNAL_PORT, InstanceConfig, ServerConfig
from bulletjournal_controller.domain.enums import ProjectStatus, ProjectStatusReason
from bulletjournal_controller.domain.errors import RuntimeOperationError
from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.healthcheck import fetch_controller_status, wait_for_project_health
from bulletjournal_controller.storage.instance_fs import ProjectPaths
from bulletjournal_controller.utils import utc_now_iso


@dataclass(slots=True, frozen=True)
class RuntimeInfo:
    container_name: str
    container_id: str
    host_port: int
    started_at: str


class RuntimeService:
    def __init__(self, *, instance_config: InstanceConfig, server_config: ServerConfig, adapter: DockerAdapter, runtime_config_service):
        self.instance_config = instance_config
        self.server_config = server_config
        self.adapter = adapter
        self.runtime_config_service = runtime_config_service

    def container_name_for(self, project_id: str) -> str:
        return f'bulletjournal-{self.instance_namespace()}-{self._slug(project_id)}'

    def instance_namespace(self) -> str:
        return self._slug(self.instance_config.instance_id)

    def start_project(self, *, project: ProjectRecord, project_paths: ProjectPaths) -> RuntimeInfo:
        host_port = self._allocate_host_port()
        container_name = self.container_name_for(project.project_id)
        base_path = f'/p/{project.project_id}'
        self.remove_container_by_name(container_name)
        command = self.adapter.build_run_command(
            image=self.runtime_config_service.runtime_config.runtime_image_name,
            container_name=container_name,
            instance_id=self.instance_namespace(),
            project_id=project.project_id,
            project_root=project_paths.root,
            host_port=host_port,
            base_path=base_path,
            controller_token=self.server_config.session_secret,
            cpu_limit_millis=project.cpu_limit_millis,
            memory_limit_bytes=project.memory_limit_bytes,
            gpu_enabled=project.gpu_enabled,
            network_mode=self.instance_config.docker_network_mode,
            additional_mounts=self.runtime_config_service.additional_mounts(),
        )
        result = self.adapter.run(command, timeout=180)
        if result.returncode != 0:
            raise RuntimeOperationError(result.stderr.strip() or 'Docker run failed.')
        container_id = (result.stdout or '').strip() or container_name
        if not wait_for_project_health(host_port=host_port, timeout_seconds=90.0):
            logs = self.container_logs(container_name)
            self.remove_container_by_name(container_name)
            detail = 'Project did not become healthy within 90 seconds.'
            if logs:
                detail = f'{detail} Container logs:\n{logs}'
            raise RuntimeOperationError(detail)
        return RuntimeInfo(
            container_name=container_name,
            container_id=container_id,
            host_port=host_port,
            started_at=utc_now_iso(),
        )

    def stop_project(self, *, project: ProjectRecord) -> None:
        container_name = project.container_name or self.container_name_for(project.project_id)
        stop_result = self.adapter.run(self.adapter.build_stop_command(container_name), timeout=90)
        if stop_result.returncode != 0 and 'No such container' not in (stop_result.stderr or ''):
            raise RuntimeOperationError(stop_result.stderr.strip() or 'Docker stop failed.')
        remove_result = self.adapter.run(self.adapter.build_remove_command(container_name), timeout=90)
        if remove_result.returncode != 0 and 'No such container' not in (remove_result.stderr or ''):
            raise RuntimeOperationError(remove_result.stderr.strip() or 'Docker remove failed.')

    def remove_container_by_name(self, container_name: str) -> None:
        remove_result = self.adapter.run(self.adapter.build_remove_command(container_name), timeout=90)
        if remove_result.returncode != 0 and 'No such container' not in (remove_result.stderr or ''):
            raise RuntimeOperationError(remove_result.stderr.strip() or 'Docker remove failed.')

    def cleanup_project_container(self, project_id: str) -> None:
        self.remove_container_by_name(self.container_name_for(project_id))

    def container_logs(self, container_name: str) -> str:
        result = self.adapter.run(self.adapter.build_logs_command(container_name), timeout=90)
        if result.returncode != 0:
            return ''
        output = ((result.stdout or '') + ('\n' + result.stderr if result.stderr else '')).strip()
        return output

    def cleanup_instance_containers(self) -> list[str]:
        label = f'bulletjournal.instance_id={self.instance_namespace()}'
        result = self.adapter.run(self.adapter.build_list_by_label_command(label=label), timeout=90)
        if result.returncode != 0:
            raise RuntimeOperationError(result.stderr.strip() or 'Docker container list failed.')
        names = [line.strip() for line in (result.stdout or '').splitlines() if line.strip()]
        for name in names:
            self.remove_container_by_name(name)
        return names

    def reconcile_instance_projects(self, *, projects: list[ProjectRecord], projects_repo) -> None:
        for project in projects:
            container_name = project.container_name or self.container_name_for(project.project_id)
            runtime = self.inspect_container(container_name)
            if runtime is None:
                if project.status in {ProjectStatus.RUNNING.value, ProjectStatus.STARTING.value, ProjectStatus.STOPPING.value}:
                    projects_repo.update(
                        project.project_id,
                        status=ProjectStatus.STOPPED.value,
                        status_reason=ProjectStatusReason.MANUAL_STOP.value,
                        container_name=None,
                        container_id=None,
                        container_port=None,
                        runtime_stopped_at=utc_now_iso(),
                    )
                continue
            projects_repo.update(
                project.project_id,
                status=ProjectStatus.RUNNING.value,
                status_reason=None,
                container_name=runtime['container_name'],
                container_id=runtime['container_id'],
                container_port=runtime['container_port'],
                runtime_started_at=runtime['runtime_started_at'],
                runtime_stopped_at=None,
            )

    def inspect_container(self, container_name: str) -> dict[str, object] | None:
        result = self.adapter.run(self.adapter.build_inspect_command(container_name), timeout=90)
        stderr = result.stderr or ''
        if result.returncode != 0 and 'No such object' in stderr:
            return None
        if result.returncode != 0:
            raise RuntimeOperationError(stderr.strip() or 'Docker inspect failed.')
        payload = json.loads(result.stdout or '[]')
        if not isinstance(payload, list) or not payload:
            return None
        record = payload[0]
        if not isinstance(record, dict):
            return None
        state_obj = record.get('State')
        state = state_obj if isinstance(state_obj, dict) else {}
        if state.get('Running') is not True:
            return None
        network_obj = record.get('NetworkSettings')
        network = network_obj if isinstance(network_obj, dict) else {}
        ports_obj = network.get('Ports')
        ports = ports_obj if isinstance(ports_obj, dict) else {}
        binding_obj = ports.get('8765/tcp')
        bindings = binding_obj if isinstance(binding_obj, list) else []
        host_port = None
        if bindings:
            binding = bindings[0]
            if isinstance(binding, dict) and binding.get('HostPort'):
                host_port = int(binding['HostPort'])
        if host_port is None:
            return None
        return {
            'container_name': container_name,
            'container_id': str(record.get('Id') or container_name),
            'container_port': host_port,
            'runtime_started_at': str(state.get('StartedAt') or utc_now_iso()),
        }

    def update_limits(self, *, project: ProjectRecord) -> None:
        if not project.container_name:
            return
        result = self.adapter.run(
            self.adapter.build_update_command(
                container_name=project.container_name,
                cpu_limit_millis=project.cpu_limit_millis,
                memory_limit_bytes=project.memory_limit_bytes,
            ),
            timeout=90,
        )
        if result.returncode != 0:
            raise RuntimeOperationError(result.stderr.strip() or 'Docker update failed.')

    def fetch_project_status(self, *, project: ProjectRecord) -> dict[str, object]:
        if project.container_port is None:
            raise RuntimeOperationError('Project does not have a running container port.')
        return fetch_controller_status(
            host_port=project.container_port,
            project_id=project.project_id,
            controller_token=self.server_config.session_secret,
        )

    @staticmethod
    def _allocate_host_port() -> int:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.bind(('127.0.0.1', 0))
            sock.listen(1)
            return int(sock.getsockname()[1])

    @staticmethod
    def _slug(value: str) -> str:
        return re.sub(r'[^a-z0-9_.-]+', '-', value.strip().lower()).strip('-') or 'default'
