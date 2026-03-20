from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter


def test_docker_command_construction_has_labels_and_mounts() -> None:
    adapter = DockerAdapter(docker_host='unix:///var/run/docker.sock')
    command = adapter.build_run_command(
        image='runtime:latest',
        container_name='bulletjournal-study-a',
        instance_id='main',
        project_id='study-a',
        project_root=Path('/srv/projects/study-a'),
        host_port=49152,
        base_path='/p/study-a',
        controller_token=None,
        cpu_limit_millis=2000,
        memory_limit_bytes=4096,
        gpu_enabled=False,
        network_mode='bridge',
        additional_mounts=[(Path('/srv/ssh'), '/root/.ssh', True)],
    )
    joined = ' '.join(command)
    assert '-H unix:///var/run/docker.sock' in joined
    assert 'bulletjournal.project_id=study-a' in joined
    assert 'bulletjournal.instance_id=main' in joined
    assert 'type=bind,src=/srv/projects/study-a,dst=/project' in joined
    assert 'type=bind,src=/srv/ssh,dst=/root/.ssh,readonly' in joined
    assert '127.0.0.1:49152:8765' in joined
    assert '/project/.runtime/venv/bin/python -c from bulletjournal.cli.start import start_server; start_server("/project", host="0.0.0.0", port=8765, base_path="/p/study-a")' in joined


def test_docker_build_command_uses_local_dockerfile() -> None:
    adapter = DockerAdapter()
    command = adapter.build_image_command(
        image_name='bulletjournal-runtime:local',
        dockerfile_path=Path('/config/runtime/Dockerfile'),
        context_path=Path('/config'),
    )
    assert command == [
        'docker',
        'build',
        '--tag',
        'bulletjournal-runtime:local',
        '--file',
        '/config/runtime/Dockerfile',
        '/config',
    ]


def test_docker_list_by_label_command() -> None:
    adapter = DockerAdapter()
    assert adapter.build_list_by_label_command(label='bulletjournal.instance_id=main') == [
        'docker',
        'ps',
        '-a',
        '--filter',
        'label=bulletjournal.instance_id=main',
        '--format',
        '{{.Names}}',
    ]


def test_docker_logs_command() -> None:
    adapter = DockerAdapter()
    assert adapter.build_logs_command('bulletjournal-main-study-a') == ['docker', 'logs', 'bulletjournal-main-study-a']
