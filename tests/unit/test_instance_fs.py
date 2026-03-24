from __future__ import annotations

from pathlib import Path
import json

from bulletjournal_controller.config import bundled_defaults_root, load_instance_config
from bulletjournal_controller.storage import (
    create_project_root,
    init_instance_root,
    require_instance_root,
)


def test_init_instance_root_creates_required_layout(tmp_path: Path) -> None:
    root = tmp_path / "instance"
    paths = init_instance_root(root)
    assert paths.instance_json_path.is_file()
    assert paths.state_db_path.is_file()
    assert paths.job_logs_dir.is_dir()
    assert paths.local_config_dir.is_dir()
    assert paths.local_ssh_dir.is_dir()
    assert paths.local_private_assets_dir.is_dir()
    assert paths.local_runtime_dockerfile_path.is_file()
    assert paths.local_runtime_json_path.is_file()
    assert paths.local_ssh_readme_path.is_file()
    assert paths.local_private_assets_readme_path.is_file()
    assert paths.local_config_dir == root / "config" / "runtime"


def test_init_instance_root_points_instance_config_to_local_runtime_assets(
    tmp_path: Path,
) -> None:
    root = tmp_path / "instance"
    paths = init_instance_root(root)
    config = load_instance_config(paths.instance_json_path)
    assert config.default_dependencies_file == str(
        paths.local_default_dependencies_path
    )
    assert config.runtime_dockerfile == str(paths.local_runtime_dockerfile_path)
    assert config.runtime_build_context == str(paths.local_config_dir)


def test_init_instance_root_scaffolds_runtime_json_with_ssh_mount_enabled(
    tmp_path: Path,
) -> None:
    paths = init_instance_root(tmp_path / "instance")
    runtime_config = json.loads(
        paths.local_runtime_json_path.read_text(encoding="utf-8")
    )
    assert runtime_config["ssh_dir"] == "ssh"
    assert runtime_config["private_assets"] == "private_assets"


def test_init_instance_root_scaffolds_runtime_readmes(tmp_path: Path) -> None:
    paths = init_instance_root(tmp_path / "instance")
    ssh_readme = paths.local_ssh_readme_path.read_text(encoding="utf-8")
    private_assets_readme = paths.local_private_assets_readme_path.read_text(
        encoding="utf-8"
    )
    assert "/root/.ssh" in ssh_readme
    assert "deploy" in ssh_readme.lower()
    assert "/opt/bulletjournal/private_assets" in private_assets_readme
    assert ".env" in private_assets_readme


def test_bundled_defaults_runtime_layout_mirrors_instance_runtime_layout() -> None:
    runtime_defaults_root = bundled_defaults_root() / "runtime"
    assert (runtime_defaults_root / "runtime.json").is_file()
    assert (runtime_defaults_root / "default-dependencies.txt").is_file()
    assert (runtime_defaults_root / "ssh" / "README.md").is_file()
    assert (runtime_defaults_root / "private_assets" / "README.md").is_file()
    assert (runtime_defaults_root / "Dockerfile").is_file()


def test_create_project_root_creates_required_directories(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    project_paths = create_project_root(instance_paths, "study-a")
    assert project_paths.graph_dir.is_dir()
    assert project_paths.metadata_dir.is_dir()
    assert project_paths.runtime_venv_dir.is_dir()


def test_require_instance_root_validates_existing_layout(tmp_path: Path) -> None:
    root = tmp_path / "instance"
    init_instance_root(root)
    assert require_instance_root(root).root == root.resolve()
