from __future__ import annotations

import json
from pathlib import Path

from bulletjournal_controller.domain.models import ProjectRecord
from bulletjournal_controller.services import metrics_service as metrics_module
from bulletjournal_controller.services.metrics_service import MetricsService


class DummyJobs:
    def __init__(self, log_paths: list[str] | None = None):
        self.log_paths = log_paths or []

    def list_log_paths_for_project(self, project_id: str) -> list[str]:
        _ = project_id
        return list(self.log_paths)


class RecordingDockerAdapter:
    def __init__(self):
        self.calls: list[list[str]] = []

    def docker_base_command(self) -> list[str]:
        return ["docker"]

    def run(self, command: list[str], *, timeout: int = 30):
        _ = timeout
        self.calls.append(command)
        if command[1:3] == ["stats", "--no-stream"]:
            return type(
                "Result",
                (),
                {
                    "returncode": 0,
                    "stdout": json.dumps(
                        {
                            "Name": "container-a",
                            "CPUPerc": "1.5%",
                            "MemUsage": "10MiB / 1GiB",
                        }
                    )
                    + "\n",
                    "stderr": "",
                },
            )()
        if command[1:3] == ["inspect", "--size"]:
            return type(
                "Result",
                (),
                {
                    "returncode": 0,
                    "stdout": json.dumps([{"SizeRw": 1234}]),
                    "stderr": "",
                },
            )()
        raise AssertionError(f"Unexpected docker command: {command}")


def make_project(root: Path, **changes) -> ProjectRecord:
    data = {
        "project_id": "study-a",
        "controller_status_token": "token",
        "status": "running",
        "status_reason": None,
        "root_path": str(root),
        "created_by_user_id": "user-1",
        "created_at": "2026-04-14T00:00:00Z",
        "updated_at": "2026-04-14T00:00:00Z",
        "last_graph_edit_at": None,
        "last_notebook_edit_at": None,
        "last_edit_at": None,
        "last_run_finished_at": None,
        "idle_shutdown_eligible_at": None,
        "python_version": "3.11",
        "bulletjournal_version": "0.1.0",
        "custom_requirements_text": "",
        "lock_sha256": None,
        "runtime_venv_size_bytes": None,
        "install_status": "ready",
        "last_install_at": None,
        "cpu_limit_millis": 1000,
        "memory_limit_bytes": 1024,
        "gpu_enabled": False,
        "container_name": None,
        "container_id": None,
        "container_port": None,
        "runtime_started_at": None,
        "runtime_stopped_at": None,
    }
    data.update(changes)
    return ProjectRecord(**data)


def test_project_disk_usage_uses_cached_runtime_venv_size(
    tmp_path, monkeypatch
) -> None:
    project_root = tmp_path / "study-a"
    (project_root / "graph").mkdir(parents=True)
    (project_root / ".runtime" / "venv").mkdir(parents=True)
    (project_root / ".runtime" / "logs").mkdir(parents=True)
    (project_root / "graph" / "nodes.json").write_text("12345", encoding="utf-8")
    (project_root / ".runtime" / "logs" / "server.log").write_text(
        "1234567", encoding="utf-8"
    )
    (project_root / ".runtime" / "venv" / "cached.bin").write_bytes(b"x" * 11)
    project = make_project(project_root, runtime_venv_size_bytes=11)
    calls: list[tuple[Path, tuple[Path, ...]]] = []
    original = metrics_module.path_size_bytes

    def recording_path_size(path: Path, *, exclude: tuple[Path, ...] = ()) -> int:
        calls.append((path, exclude))
        return original(path, exclude=exclude)

    monkeypatch.setattr(metrics_module, "path_size_bytes", recording_path_size)
    service = MetricsService(
        instance_paths=type("InstancePaths", (), {"root": tmp_path})(),
        docker_adapter=RecordingDockerAdapter(),
        runtime_config_service=object(),
        jobs=DummyJobs(),
    )

    metrics = service.project_metrics(project)

    assert metrics["disk_used_bytes"] == 23
    assert calls == [
        (project_root, (project_root / ".runtime" / "venv",)),
    ]


def test_project_metrics_cache_avoids_repeated_filesystem_and_docker_work(
    tmp_path, monkeypatch
) -> None:
    project_root = tmp_path / "study-a"
    project_root.mkdir()
    project = make_project(
        project_root,
        runtime_venv_size_bytes=5,
        container_name="container-a",
        container_id="container-id",
        container_port=8765,
    )
    path_size_calls = 0

    def fake_path_size(path: Path, *, exclude: tuple[Path, ...] = ()) -> int:
        nonlocal path_size_calls
        _ = path, exclude
        path_size_calls += 1
        return 7

    monkeypatch.setattr(metrics_module, "path_size_bytes", fake_path_size)
    docker = RecordingDockerAdapter()
    service = MetricsService(
        instance_paths=type("InstancePaths", (), {"root": tmp_path})(),
        docker_adapter=docker,
        runtime_config_service=object(),
        jobs=DummyJobs(),
    )

    first = service.project_metrics(project)
    second = service.project_metrics(project)

    assert first == second
    assert first["disk_used_bytes"] == 7 + 5 + 1234
    assert first["cpu_percent"] == 1.5
    assert path_size_calls == 1
    assert len(docker.calls) == 2
