from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner


def test_install_command_uses_no_install_project_flag() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
    )
    joined = ' '.join(command)
    assert 'uv sync --project /project --locked --no-install-project' in joined
    assert 'type=bind,src=/srv/project,dst=/project' in joined
    assert 'UV_CACHE_DIR=/project/.runtime/uv-cache' in joined


def test_install_command_supports_runtime_env_file() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
        env_file=Path('/srv/instance/config/runtime/.env'),
    )
    joined = ' '.join(command)
    assert '--env-file /srv/instance/config/runtime/.env' in joined


def test_install_command_runs_as_supplied_uid_gid() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
        user_uid=1000,
        user_gid=1000,
    )
    joined = ' '.join(command)
    assert '--user 1000:1000' in joined
    assert 'HOME=/home/bulletjournal' in joined


def test_install_command_supports_upgrading_all_packages_during_lock() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
        upgrade_all=True,
    )
    joined = ' '.join(command)
    assert 'uv lock --project /project --upgrade' in joined


def test_install_command_supports_targeted_upgrades_during_lock() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
        upgrade_packages=['bulletjournal-editor', 'my-package'],
    )
    assert command[-1] == (
        'uv lock --project /project --upgrade-package bulletjournal-editor --upgrade-package my-package'
        ' && uv sync --project /project --locked --no-install-project'
    )


def test_install_command_uses_nvidia_runtime_when_gpu_enabled() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=True,
    )

    assert '--runtime nvidia' in ' '.join(command)
    assert 'NVIDIA_VISIBLE_DEVICES=all' in command
    assert 'NVIDIA_DRIVER_CAPABILITIES=compute,utility' in command
    assert '--gpus' not in command


def test_project_init_command_invokes_bulletjournal_init_without_environment() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_project_init_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        project_id='study-a',
        network_mode='bridge',
    )
    joined = ' '.join(command)
    assert '/project/.runtime/venv/bin/bulletjournal init /project --project-id study-a --skip-environment' in joined
    assert 'uv run' not in joined
    assert 'UV_CACHE_DIR=/project/.runtime/uv-cache' in joined


def test_validate_environment_command_uses_runtime_cli() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_validate_environment_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
    )
    joined = ' '.join(command)
    assert '/project/.runtime/venv/bin/bulletjournal --help' in joined


def test_mark_stale_command_mounts_project_local_uv_cache() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_mark_stale_command(
        image='bulletjournal-runtime:local',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        reason='test',
    )
    joined = ' '.join(command)
    assert 'UV_CACHE_DIR=/project/.runtime/uv-cache' in joined


def test_install_command_applies_device_write_bandwidth_limits() -> None:
    runner = InstallerRunner(DockerAdapter())
    command = runner.build_install_command(
        image='runtime',
        project_root=Path('/srv/project'),
        network_mode='bridge',
        gpu_enabled=False,
        device_write_bps={'/dev/sda': 10485760, '/dev/sdb': 20971520},
    )
    assert '--device-write-bps /dev/sda:10485760' in ' '.join(command)
    assert '--device-write-bps /dev/sdb:20971520' in ' '.join(command)


def test_install_command_defaults_to_unlimited_writes() -> None:
    command = InstallerRunner(DockerAdapter()).build_install_command(
        image='runtime', project_root=Path('/srv/project'), network_mode='bridge', gpu_enabled=False
    )
    assert '--device-write-bps' not in command
