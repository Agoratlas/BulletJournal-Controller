from __future__ import annotations

import json
from types import SimpleNamespace
from typing import Any, cast

from bulletjournal_controller.config import InstanceConfig, ServerConfig
from bulletjournal_controller.domain.enums import ProjectStatusReason
from bulletjournal_controller.services.runtime_service import RuntimeService


class FakeAdapter:
    def __init__(self, outputs):
        self.outputs = outputs
        self.commands = []
        self.run_kwargs = None

    def build_remove_command(self, container_name: str):
        return ["docker", "rm", "-f", container_name]

    def build_list_by_label_command(self, *, label: str):
        return [
            "docker",
            "ps",
            "-a",
            "--filter",
            f"label={label}",
            "--format",
            "{{.Names}}",
        ]

    def build_logs_command(self, container_name: str):
        return ["docker", "logs", container_name]

    def build_inspect_command(self, container_name: str):
        return ["docker", "inspect", container_name]

    def build_run_command(self, **kwargs):
        self.run_kwargs = kwargs
        return ["docker", "run", "runtime"]

    def run(self, command, *, timeout=120, capture_output=True):
        _ = timeout
        _ = capture_output
        self.commands.append(command)
        return self.outputs.pop(0)


def _instance_config() -> InstanceConfig:
    return InstanceConfig(
        schema_version=1,
        instance_id="Main Instance",
        title="Controller",
        project_root_dir="projects",
        exports_dir="exports",
        idle_timeout_seconds=86400,
        docker_runtime_image="unused",
        docker_network_mode="bridge",
        default_python_version="3.11",
        default_bulletjournal_version="0.1.0",
        default_dependencies_file=None,
        runtime_dockerfile=None,
        runtime_build_context=None,
    )


def test_container_name_includes_instance_id_namespace() -> None:
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, FakeAdapter([])),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    assert (
        service.container_name_for("Test_Project")
        == "bulletjournal-main-instance-test_project"
    )


def test_cleanup_instance_containers_removes_all_matching_names() -> None:
    outputs = [
        SimpleNamespace(
            returncode=0,
            stdout="bulletjournal-main-a\nbulletjournal-main-b\n",
            stderr="",
        ),
        SimpleNamespace(returncode=0, stdout="", stderr=""),
        SimpleNamespace(returncode=0, stdout="", stderr=""),
    ]
    adapter = FakeAdapter(outputs)
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    removed = service.cleanup_instance_containers()
    assert removed == ["bulletjournal-main-a", "bulletjournal-main-b"]
    assert adapter.commands[0] == [
        "docker",
        "ps",
        "-a",
        "--filter",
        "label=bulletjournal.instance_id=main-instance",
        "--format",
        "{{.Names}}",
    ]


def test_inspect_container_treats_lowercase_no_such_object_as_missing() -> None:
    adapter = FakeAdapter(
        [
            SimpleNamespace(
                returncode=1,
                stdout="",
                stderr="error: no such object: bulletjournal-main-testproject",
            )
        ]
    )
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    assert service.inspect_container("bulletjournal-main-testproject") is None


def test_start_project_passes_runtime_env_file_to_adapter(monkeypatch) -> None:
    adapter = FakeAdapter(
        [SimpleNamespace(returncode=0, stdout="container-id\n", stderr="")]
    )
    env_file = "/srv/instance/config/runtime/.env"
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(
                runtime_image_name="img",
                container_uid=None,
                container_gid=None,
            ),
            env_file=lambda: env_file,
            additional_mounts=lambda: [],
        ),
    )
    monkeypatch.setattr(
        "bulletjournal_controller.services.runtime_service.wait_for_project_health",
        lambda **_kwargs: True,
    )
    monkeypatch.setattr(
        service,
        "remove_container_by_name",
        lambda _container_name: None,
    )
    project = SimpleNamespace(
        project_id="study-a",
        controller_status_token="project-token",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    project_paths = SimpleNamespace(root="/srv/projects/study-a")

    service.start_project(
        project=cast(Any, project), project_paths=cast(Any, project_paths)
    )

    assert adapter.run_kwargs is not None
    assert adapter.run_kwargs["env_file"] == env_file
    assert adapter.run_kwargs["controller_token"] == "project-token"


def test_start_project_passes_controller_uid_gid_to_adapter(monkeypatch) -> None:
    adapter = FakeAdapter(
        [SimpleNamespace(returncode=0, stdout="container-id\n", stderr="")]
    )
    runtime_config = SimpleNamespace(
        runtime_image_name="img",
        container_uid=1000,
        container_gid=1000,
    )
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=runtime_config,
            env_file=lambda: None,
            additional_mounts=lambda: [],
        ),
    )
    monkeypatch.setattr(
        "bulletjournal_controller.services.runtime_service.wait_for_project_health",
        lambda **_kwargs: True,
    )
    monkeypatch.setattr(
        service,
        "remove_container_by_name",
        lambda _container_name: None,
    )
    project = SimpleNamespace(
        project_id="study-a",
        controller_status_token="project-token",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    project_paths = SimpleNamespace(root="/srv/projects/study-a")

    service.start_project(
        project=cast(Any, project), project_paths=cast(Any, project_paths)
    )

    assert adapter.run_kwargs is not None
    assert adapter.run_kwargs["user_uid"] == 1000
    assert adapter.run_kwargs["user_gid"] == 1000


def test_fetch_project_status_uses_project_scoped_token(monkeypatch) -> None:
    adapter = FakeAdapter([])
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    captured: dict[str, object] = {}

    def fake_fetch_controller_status(**kwargs):
        captured.update(kwargs)
        return {"ok": True}

    monkeypatch.setattr(
        "bulletjournal_controller.services.runtime_service.fetch_controller_status",
        fake_fetch_controller_status,
    )
    project = SimpleNamespace(
        project_id="study-a",
        controller_status_token="project-token",
        container_port=8765,
    )

    result = service.fetch_project_status(project=cast(Any, project))

    assert result == {"ok": True}
    assert captured == {
        "host_port": 8765,
        "project_id": "study-a",
        "controller_token": "project-token",
    }


def test_fetch_project_status_falls_back_to_legacy_session_secret(monkeypatch) -> None:
    import httpx

    adapter = FakeAdapter([])
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="legacy-secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    calls: list[dict[str, object]] = []

    def fake_fetch_controller_status(**kwargs):
        calls.append(kwargs)
        if len(calls) == 1:
            request = httpx.Request("GET", "http://127.0.0.1:8765/status")
            response = httpx.Response(401, request=request)
            raise httpx.HTTPStatusError(
                "unauthorized", request=request, response=response
            )
        return {"ok": True}

    monkeypatch.setattr(
        "bulletjournal_controller.services.runtime_service.fetch_controller_status",
        fake_fetch_controller_status,
    )
    project = SimpleNamespace(
        project_id="study-a",
        controller_status_token="project-token",
        container_port=8765,
    )

    result = service.fetch_project_status(project=cast(Any, project))

    assert result == {"ok": True}
    assert calls == [
        {
            "host_port": 8765,
            "project_id": "study-a",
            "controller_token": "project-token",
        },
        {
            "host_port": 8765,
            "project_id": "study-a",
            "controller_token": "legacy-secret",
        },
    ]


def test_reconcile_instance_projects_marks_missing_running_container_crashed(
    tmp_path,
) -> None:
    adapter = FakeAdapter(
        [
            SimpleNamespace(
                returncode=1,
                stdout="",
                stderr="Error: No such object: bulletjournal-main-instance-study-a",
            ),
            SimpleNamespace(
                returncode=1,
                stdout="",
                stderr="Error: No such object: bulletjournal-main-instance-study-a",
            ),
            SimpleNamespace(
                returncode=1,
                stdout="",
                stderr="Error: No such object: bulletjournal-main-instance-study-a",
            ),
        ]
    )
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    updates = []
    projects_repo = SimpleNamespace(
        update=lambda project_id, **changes: updates.append((project_id, changes))
    )
    project = SimpleNamespace(
        project_id="study-a",
        status="running",
        container_name="bulletjournal-main-instance-study-a",
        root_path=str(tmp_path / "study-a"),
        container_id="container-1",
        status_reason=None,
    )

    service.reconcile_instance_projects(
        projects=[cast(Any, project)], projects_repo=projects_repo
    )

    assert len(updates) == 1
    project_id, changes = updates[0]
    assert project_id == "study-a"
    assert changes["status"] == "error"
    assert changes["status_reason"] == ProjectStatusReason.RUNTIME_CRASHED.value
    assert changes["container_name"] is None


def test_write_crash_diagnostics_persists_inspect_and_logs(tmp_path) -> None:
    inspect_payload = [
        {
            "Id": "container-1",
            "State": {"Running": False, "ExitCode": 135},
            "Config": {"Image": "runtime:latest"},
        }
    ]
    adapter = FakeAdapter(
        [
            SimpleNamespace(
                returncode=0,
                stdout=json.dumps(inspect_payload),
                stderr="",
            ),
            SimpleNamespace(returncode=0, stdout="line one\nline two\n", stderr=""),
        ]
    )
    project_root = tmp_path / "study-a"
    (project_root / ".runtime" / "logs").mkdir(parents=True)
    service = RuntimeService(
        instance_config=_instance_config(),
        server_config=ServerConfig(session_secret="secret", cookie_secure=False),
        adapter=cast(Any, adapter),
        runtime_config_service=SimpleNamespace(
            runtime_config=SimpleNamespace(runtime_image_name="img"),
            additional_mounts=lambda: [],
        ),
    )
    project = SimpleNamespace(
        project_id="study-a",
        status="running",
        status_reason=None,
        root_path=str(project_root),
        container_name="bulletjournal-main-instance-study-a",
        container_id="container-1",
    )

    crash_path = service.write_crash_diagnostics(project=cast(Any, project))

    content = crash_path.read_text(encoding="utf-8")
    assert crash_path.parent == project_root / ".runtime" / "logs"
    assert "BulletJournal runtime crash diagnostics" in content
    assert '"ExitCode": 135' in content
    assert "== docker logs ==" in content
    assert "line one" in content
