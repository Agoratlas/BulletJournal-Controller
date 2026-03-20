from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.storage import create_project_root, init_instance_root, require_instance_root


def test_init_instance_root_creates_required_layout(tmp_path: Path) -> None:
    root = tmp_path / 'instance'
    paths = init_instance_root(root)
    assert paths.instance_json_path.is_file()
    assert paths.state_db_path.is_file()
    assert paths.job_logs_dir.is_dir()
    assert paths.local_config_dir.is_dir()
    assert paths.local_runtime_dockerfile_path.is_file()
    assert paths.local_config_dir == root / 'config' / 'runtime'


def test_create_project_root_creates_required_directories(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / 'instance')
    project_paths = create_project_root(instance_paths, 'study-a')
    assert project_paths.graph_dir.is_dir()
    assert project_paths.metadata_dir.is_dir()
    assert project_paths.runtime_venv_dir.is_dir()


def test_require_instance_root_validates_existing_layout(tmp_path: Path) -> None:
    root = tmp_path / 'instance'
    init_instance_root(root)
    assert require_instance_root(root).root == root.resolve()
