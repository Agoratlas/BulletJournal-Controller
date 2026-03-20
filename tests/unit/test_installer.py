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
