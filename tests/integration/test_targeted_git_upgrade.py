from __future__ import annotations

import os
import shlex
import shutil
import subprocess
import sys
import tomllib
from pathlib import Path

import pytest

from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner


def test_targeted_upgrade_refreshes_git_branch_without_upgrading_other_packages(tmp_path: Path) -> None:
    uv = shutil.which('uv')
    git_executable = shutil.which('git')
    if uv is None or git_executable is None:
        pytest.skip('uv and git are required for the local Git resolution test')

    def git(repo: Path, *args: str) -> str:
        return subprocess.check_output(
            [git_executable, '-c', 'user.name=Test', '-c', 'user.email=test@example.com', *args],
            cwd=repo,
            text=True,
            stderr=subprocess.STDOUT,
        ).strip()

    repos = {}
    initial_commits = {}
    for name in ('custom-package', 'default-package'):
        repo = tmp_path / name
        repo.mkdir()
        (repo / 'pyproject.toml').write_text(
            f'[project]\nname = "{name}"\nversion = "1.0.0"\ndependencies = []\nrequires-python = ">=3.11"\n',
            encoding='utf-8',
        )
        git(repo, 'init', '-b', 'main')
        git(repo, 'add', 'pyproject.toml')
        git(repo, 'commit', '-m', 'Initial package')
        repos[name] = repo
        initial_commits[name] = git(repo, 'rev-parse', 'HEAD')

    project = tmp_path / 'project'
    project.mkdir()
    dependencies = ',\n'.join(f'"{name} @ git+{repo.as_uri()}@main"' for name, repo in repos.items())
    (project / 'pyproject.toml').write_text(
        '[project]\nname = "test-project"\nversion = "0.0.0"\nrequires-python = ">=3.11"\n'
        f'dependencies = [{dependencies}]\n[tool.uv]\npackage = false\n',
        encoding='utf-8',
    )

    def lock(*, upgrade_all: bool = False, upgrade_packages: list[str] | None = None) -> dict[str, str]:
        command = InstallerRunner(DockerAdapter()).build_install_command(
            image='unused',
            project_root=project,
            network_mode='bridge',
            gpu_enabled=False,
            upgrade_all=upgrade_all,
            upgrade_packages=upgrade_packages,
        )
        args = shlex.split(command[-1].split(' && ', 1)[0])
        args = [str(project) if arg == '/project' else arg for arg in args[1:]]
        result = subprocess.run(
            [uv, *args, '--python', sys.executable, '--no-index'],
            env={**os.environ, 'UV_CACHE_DIR': str(tmp_path / 'cache'), 'UV_PYTHON_DOWNLOADS': 'never'},
            capture_output=True,
            text=True,
            timeout=60,
        )
        assert result.returncode == 0, result.stderr
        data = tomllib.loads((project / 'uv.lock').read_text(encoding='utf-8'))
        packages = [package for package in data['package'] if 'git' in package['source']]
        assert all(package['version'] == '1.0.0' for package in packages)
        return {package['name']: package['source']['git'].rsplit('#', 1)[1] for package in packages}

    assert lock() == initial_commits
    latest_commits = {}
    for name, repo in repos.items():
        (repo / 'change.txt').write_text('New branch commit, same package version\n', encoding='utf-8')
        git(repo, 'add', 'change.txt')
        git(repo, 'commit', '-m', 'Advance branch')
        latest_commits[name] = git(repo, 'rev-parse', 'HEAD')

    assert lock() == initial_commits
    assert lock(upgrade_packages=['custom-package']) == {
        'custom-package': latest_commits['custom-package'],
        'default-package': initial_commits['default-package'],
    }
    assert lock(upgrade_all=True) == latest_commits
