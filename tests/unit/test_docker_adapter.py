from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter


def test_docker_command_construction_has_labels_and_mounts() -> None:
    adapter = DockerAdapter(docker_host="unix:///var/run/docker.sock")
    command = adapter.build_run_command(
        image="runtime:latest",
        container_name="bulletjournal-study-a",
        instance_id="main",
        project_id="study-a",
        project_root=Path("/srv/projects/study-a"),
        host_port=49152,
        base_path="/p/study-a",
        controller_token="project-secret",
        cpu_limit_millis=2000,
        memory_limit_bytes=4096,
        gpu_enabled=False,
        network_mode="bridge",
        env_file=Path("/srv/runtime/.env"),
        additional_mounts=[(Path("/srv/ssh"), "/home/bulletjournal/.ssh", True)],
        user_uid=1000,
        user_gid=1000,
    )
    joined = " ".join(command)
    assert "-H unix:///var/run/docker.sock" in joined
    assert "--env-file /srv/runtime/.env" in joined
    assert "--user 1000:1000" in joined
    assert "HOME=/home/bulletjournal" in joined
    assert "BULLETJOURNAL_CONTROLLER_TOKEN=project-secret" in joined
    assert "bulletjournal.project_id=study-a" in joined
    assert "bulletjournal.instance_id=main" in joined
    assert "type=bind,src=/srv/projects/study-a,dst=/project" in joined
    assert "type=bind,src=/srv/ssh,dst=/home/bulletjournal/.ssh,readonly" in joined
    assert "127.0.0.1:49152:8765" in joined
    assert "/project/.runtime/venv/bin/python -X faulthandler -u -c" in joined
    assert "/project/.runtime/logs/server.log" in joined
    assert "BulletJournal server start" in joined
    assert "BulletJournal server exit" in joined
    assert "subprocess.Popen" in joined
    assert "-X','faulthandler" in joined
    assert 'start_server("/project", host="0.0.0.0", port=8765' in joined
    assert "/p/study-a" in joined


def test_build_server_bootstrap_appends_exit_code_marker() -> None:
    bootstrap = DockerAdapter._build_server_bootstrap(base_path="/p/study-a")
    assert "BulletJournal server exit" in bootstrap
    assert "code={returncode}" in bootstrap
    assert "faulthandler" in bootstrap


def test_docker_build_command_uses_local_dockerfile() -> None:
    adapter = DockerAdapter()
    command = adapter.build_image_command(
        image_name="bulletjournal-runtime:local",
        dockerfile_path=Path("/config/runtime/Dockerfile"),
        context_path=Path("/config"),
        user_uid=1000,
        user_gid=1000,
    )
    assert command == [
        "docker",
        "build",
        "--tag",
        "bulletjournal-runtime:local",
        "--file",
        "/config/runtime/Dockerfile",
        "--build-arg",
        "BULLETJOURNAL_UID=1000",
        "--build-arg",
        "BULLETJOURNAL_GID=1000",
        "/config",
    ]


def test_docker_list_by_label_command() -> None:
    adapter = DockerAdapter()
    assert adapter.build_list_by_label_command(
        label="bulletjournal.instance_id=main"
    ) == [
        "docker",
        "ps",
        "-a",
        "--filter",
        "label=bulletjournal.instance_id=main",
        "--format",
        "{{.Names}}",
    ]


def test_docker_logs_command() -> None:
    adapter = DockerAdapter()
    assert adapter.build_logs_command("bulletjournal-main-study-a") == [
        "docker",
        "logs",
        "bulletjournal-main-study-a",
    ]


def test_docker_run_command_omits_limit_flags_when_unset() -> None:
    adapter = DockerAdapter()
    command = adapter.build_run_command(
        image="runtime:latest",
        container_name="bulletjournal-study-a",
        instance_id="main",
        project_id="study-a",
        project_root=Path("/srv/projects/study-a"),
        host_port=49152,
        base_path="/p/study-a",
        controller_token=None,
        cpu_limit_millis=None,
        memory_limit_bytes=None,
        gpu_enabled=False,
        network_mode="bridge",
    )
    joined = " ".join(command)
    assert " --cpus " not in f" {joined} "
    assert " --memory " not in f" {joined} "
