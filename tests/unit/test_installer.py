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


def test_install_command_upgrades_selected_packages_during_lock() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image="bulletjournal-runtime:local",
        project_root=Path("/srv/project"),
        network_mode="bridge",
        gpu_enabled=False,
        upgrade_packages=["fastreport", "bulletjournal"],
    )
    joined = " ".join(command)
    assert (
        "uv lock --project /project --upgrade-package fastreport --upgrade-package bulletjournal"
        in joined
    )
