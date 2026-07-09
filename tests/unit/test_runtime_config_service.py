from __future__ import annotations

import json
import re
from pathlib import Path

import pytest

from bulletjournal_controller.domain.errors import ConfigurationError
from bulletjournal_controller.services.runtime_config_service import RuntimeConfigService
from bulletjournal_controller.storage import init_instance_root


def test_runtime_config_parses_additional_mounts_relative_to_runtime_config_dir(
    tmp_path: Path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    mount_source = instance_paths.local_config_dir / "mounts" / "service-account.json"
    mount_source.parent.mkdir(parents=True)
    mount_source.write_text("{}\n", encoding="utf-8")
    instance_paths.local_runtime_json_path.write_text(
        json.dumps(
            {
                "schema_version": 2,
                "runtime_image_name": "bulletjournal-runtime:local",
                "runtime_dockerfile": "Dockerfile",
                "runtime_build_context": ".",
                "default_dependencies_file": "default-dependencies.txt",
                "env_file": ".env",
                "ssh_dir": "ssh",
                "additional_mounts": [
                    {
                        "source": "mounts/service-account.json",
                        "target": "/opt/service-account.json",
                        "read_only": True,
                    }
                ],
            }
        ),
        encoding="utf-8",
    )

    service = RuntimeConfigService(instance_paths=instance_paths)

    assert service.additional_mounts() == [
        (instance_paths.local_ssh_dir, "/home/bulletjournal/.ssh", True),
        (mount_source.resolve(), "/opt/service-account.json", True),
    ]


def test_runtime_config_additional_mounts_defaults_read_only_to_false(
    tmp_path: Path,
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    mount_source = tmp_path / "shared-data"
    mount_source.mkdir()
    instance_paths.local_runtime_json_path.write_text(
        json.dumps(
            {
                "schema_version": 2,
                "runtime_image_name": "bulletjournal-runtime:local",
                "runtime_dockerfile": "Dockerfile",
                "runtime_build_context": ".",
                "default_dependencies_file": "default-dependencies.txt",
                "env_file": ".env",
                "additional_mounts": [
                    {"source": str(mount_source), "target": "/opt/shared-data"}
                ],
            }
        ),
        encoding="utf-8",
    )

    service = RuntimeConfigService(instance_paths=instance_paths)

    assert service.runtime_config.additional_mounts == (
        (mount_source.resolve(), "/opt/shared-data", False),
    )


def test_runtime_config_exposes_shared_uv_cache_dir(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    service = RuntimeConfigService(instance_paths=instance_paths)

    assert service.uv_cache_dir() == instance_paths.runtime_cache_dir / "uv"


@pytest.mark.parametrize(
    ("mounts", "message"),
    [
        ("bad", "runtime.json field additional_mounts must be a JSON array."),
        (["bad"], "runtime.json additional_mounts[1] must be a JSON object."),
        ([{}], "runtime.json additional_mounts[1].source is required."),
        (
            [{"source": "ssh"}],
            "runtime.json additional_mounts[1].target is required.",
        ),
        (
            [{"source": "ssh", "target": "relative/path"}],
            "runtime.json additional_mounts[1].target must be an absolute container path.",
        ),
        (
            [{"source": "ssh", "target": "/opt/path", "read_only": "yes"}],
            "runtime.json additional_mounts[1].read_only must be a boolean.",
        ),
    ],
)
def test_runtime_config_rejects_invalid_additional_mounts(
    tmp_path: Path, mounts: object, message: str
) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    instance_paths.local_runtime_json_path.write_text(
        json.dumps(
            {
                "schema_version": 2,
                "runtime_image_name": "bulletjournal-runtime:local",
                "runtime_dockerfile": "Dockerfile",
                "runtime_build_context": ".",
                "default_dependencies_file": "default-dependencies.txt",
                "env_file": ".env",
                "additional_mounts": mounts,
            }
        ),
        encoding="utf-8",
    )

    service = RuntimeConfigService(instance_paths=instance_paths)

    with pytest.raises(ConfigurationError, match=re.escape(message)):
        _ = service.runtime_config


def test_runtime_config_rejects_unsupported_schema_version(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    instance_paths.local_runtime_json_path.write_text(
        json.dumps(
            {
                "schema_version": 1,
                "runtime_image_name": "bulletjournal-runtime:local",
                "runtime_dockerfile": "Dockerfile",
                "runtime_build_context": ".",
                "default_dependencies_file": "default-dependencies.txt",
                "env_file": ".env",
                "additional_mounts": [],
            }
        ),
        encoding="utf-8",
    )

    service = RuntimeConfigService(instance_paths=instance_paths)

    with pytest.raises(
        ConfigurationError,
        match=re.escape("Unsupported runtime.json schema version 1; expected 2."),
    ):
        _ = service.runtime_config
