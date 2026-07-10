from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner


def test_install_command_uses_no_install_project_flag() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        gpu_enabled=False,
    )
    joined = " ".join(command)
    assert "uv sync --project /project --locked --no-install-project" in joined
    assert "type=bind,src=/srv/project,dst=/project" in joined
    assert "UV_CACHE_DIR=/project/.runtime/uv-cache" in joined


def test_install_command_supports_runtime_env_file() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        gpu_enabled=False,
        env_file=Path("/srv/instance/config/runtime/.env"),
    )
    joined = " ".join(command)
    assert "--env-file /srv/instance/config/runtime/.env" in joined


def test_install_command_runs_as_supplied_uid_gid() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        gpu_enabled=False,
        user_uid=1000,
        user_gid=1000,
    )
    joined = " ".join(command)
    assert "--user 1000:1000" in joined
    assert "HOME=/home/bulletjournal" in joined


def test_install_command_supports_upgrading_all_packages_during_lock() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        gpu_enabled=False,
        upgrade_all=True,
    )
    joined = " ".join(command)
    assert "uv lock --project /project --upgrade" in joined


def test_project_init_command_invokes_bulletjournal_init_without_environment() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_project_init_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        project_id="study-a",
        network_mode="bridge",
    )
    joined = " ".join(command)
    assert (
        "uv run --project /project bulletjournal init /project --project-id study-a --skip-environment"
        in joined
    )
    assert "UV_CACHE_DIR=/project/.runtime/uv-cache" in joined


def test_validate_environment_command_uses_runtime_cli() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_validate_environment_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
    )
    joined = " ".join(command)
    assert "/project/.runtime/venv/bin/bulletjournal --help" in joined


def test_mark_stale_command_mounts_project_local_uv_cache() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_mark_stale_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        reason="test",
    )
    joined = " ".join(command)
    assert "UV_CACHE_DIR=/project/.runtime/uv-cache" in joined
