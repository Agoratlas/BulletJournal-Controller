from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.config import InstanceConfig, ServerConfig
from bulletjournal_controller.services.runtime_service import RuntimeService


class FakeAdapter:
    def __init__(self, outputs):
        self.outputs = outputs
        self.commands = []

    def build_remove_command(self, container_name: str):
        return ['docker', 'rm', '-f', container_name]

    def build_list_by_label_command(self, *, label: str):
        return ['docker', 'ps', '-a', '--filter', f'label={label}', '--format', '{{.Names}}']

    def build_logs_command(self, container_name: str):
        return ['docker', 'logs', container_name]

    def run(self, command, *, timeout=120, capture_output=True):
        _ = timeout
        _ = capture_output
        self.commands.append(command)
        return self.outputs.pop(0)


def _instance_config() -> InstanceConfig:
    return InstanceConfig(
        schema_version=1,
        instance_id='Main Instance',
        title='Controller',
        project_root_dir='projects',
        exports_dir='exports',
        idle_timeout_seconds=86400,
        docker_runtime_image='unused',
        docker_network_mode='bridge',
        default_python_version='3.11',
        default_bulletjournal_version='0.1.0',
        default_dependencies_file=None,
        runtime_dockerfile=None,
        runtime_build_context=None,
    )


def test_container_name_includes_instance_id_namespace() -> None:
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret='secret', cookie_secure=False),
        adapter=FakeAdapter([]),
        runtime_config_service=SimpleNamespace(runtime_config=SimpleNamespace(runtime_image_name='img'), additional_mounts=lambda: []),
    )
    assert service.container_name_for('Test_Project') == 'bulletjournal-main-instance-test_project'


def test_cleanup_instance_containers_removes_all_matching_names() -> None:
    outputs = [
        SimpleNamespace(returncode=0, stdout='bulletjournal-main-a\nbulletjournal-main-b\n', stderr=''),
        SimpleNamespace(returncode=0, stdout='', stderr=''),
        SimpleNamespace(returncode=0, stdout='', stderr=''),
    ]
    adapter = FakeAdapter(outputs)
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret='secret', cookie_secure=False),
        adapter=adapter,
        runtime_config_service=SimpleNamespace(runtime_config=SimpleNamespace(runtime_image_name='img'), additional_mounts=lambda: []),
    )
    removed = service.cleanup_instance_containers()
    assert removed == ['bulletjournal-main-a', 'bulletjournal-main-b']
    assert adapter.commands[0] == ['docker', 'ps', '-a', '--filter', 'label=bulletjournal.instance_id=main-instance', '--format', '{{.Names}}']
