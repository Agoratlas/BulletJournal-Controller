from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.cli.start import build_log_config
from bulletjournal_controller.storage import init_instance_root


def test_build_log_config_writes_to_controller_log_file(tmp_path: Path) -> None:
    log_path = tmp_path / "controller.log"

    config = build_log_config(log_path)

    handlers = config["handlers"]
    assert handlers["controller_file_default"]["filename"] == str(log_path)
    assert handlers["controller_file_access"]["filename"] == str(log_path)
    assert "controller_file_default" in config["loggers"]["uvicorn"]["handlers"]
    assert "controller_file_default" in config["loggers"]["uvicorn.error"]["handlers"]
    assert "controller_file_access" in config["loggers"]["uvicorn.access"]["handlers"]


def test_service_container_start_backfills_missing_runtime_venv_size(
    tmp_path: Path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=ServerConfig(session_secret="test-secret", cookie_secure=False),
        ensure_runtime_image=False,
    )
    project = container.project_service.create_project(
        project_id="study-a",
        created_by_user_id="user-system",
        python_version="3.11",
        bulletjournal_version="0.1.0",
        custom_requirements_text="",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        gpu_enabled=False,
    )
    container.projects.update(
        project.project_id, status="stopped", install_status="ready"
    )
    runtime_venv_dir = container.project_service.project_paths(
        project.project_id
    ).runtime_venv_dir
    runtime_venv_dir.mkdir(parents=True, exist_ok=True)
    (runtime_venv_dir / "cached.bin").write_bytes(b"x" * 17)

    container.runtime_service.reconcile_instance_projects = lambda **_: None
    container.job_service.start = lambda: None
    container.reconcile_service.start = lambda: None

    container.start()

    assert container.projects.require(project.project_id).runtime_venv_size_bytes == 17
