from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path

from bulletjournal_controller.config import bundled_defaults_root
from bulletjournal_controller.domain.errors import ConfigurationError
from bulletjournal_controller.storage.instance_fs import InstancePaths


@dataclass(slots=True, frozen=True)
class RuntimeConfig:
    runtime_image_name: str
    runtime_dockerfile: Path
    runtime_build_context: Path
    default_dependencies_file: Path | None
    env_file: Path | None
    ssh_dir: Path | None
    private_assets: Path | None


class RuntimeConfigService:
    def __init__(self, *, instance_paths: InstancePaths):
        self.instance_paths = instance_paths

    @property
    def runtime_config(self) -> RuntimeConfig:
        return self._load_runtime_config()

    def additional_mounts(self) -> list[tuple[Path, str, bool]]:
        mounts: list[tuple[Path, str, bool]] = []
        if self.runtime_config.ssh_dir is not None:
            mounts.append((self.runtime_config.ssh_dir, "/root/.ssh", True))
        if self.runtime_config.private_assets is not None:
            mounts.append(
                (
                    self.runtime_config.private_assets,
                    "/opt/bulletjournal/private_assets",
                    True,
                )
            )
        return mounts

    def default_dependencies_file(self) -> Path | None:
        return self.runtime_config.default_dependencies_file

    def env_file(self) -> Path | None:
        return self.runtime_config.env_file

    def ensure_runtime_image(self, installer) -> None:
        result = installer.build_image(
            image_name=self.runtime_config.runtime_image_name,
            dockerfile_path=self.runtime_config.runtime_dockerfile,
            context_path=self.runtime_config.runtime_build_context,
        )
        if result.returncode != 0:
            raise ConfigurationError(
                result.stderr.strip() or "Failed to build local runtime image."
            )

    def _load_runtime_config(self) -> RuntimeConfig:
        defaults_root = bundled_defaults_root() / "runtime"
        configured_root = self.instance_paths.local_config_dir
        runtime_json_path = configured_root / "runtime.json"
        if runtime_json_path.is_file():
            data = json.loads(runtime_json_path.read_text(encoding="utf-8"))
        else:
            data = json.loads(
                (defaults_root / "runtime.json").read_text(encoding="utf-8")
            )
        if not isinstance(data, dict):
            raise ConfigurationError("runtime.json must contain a JSON object.")

        runtime_image_name = _required_str(data, "runtime_image_name")
        runtime_dockerfile = self._resolve_path(
            configured_root, defaults_root, data.get("runtime_dockerfile")
        )
        runtime_build_context = self._resolve_path(
            configured_root, defaults_root, data.get("runtime_build_context")
        )
        default_dependencies_file = self._resolve_optional_path(
            configured_root, defaults_root, data.get("default_dependencies_file")
        )
        env_file = self._resolve_optional_path(
            configured_root, defaults_root, data.get("env_file")
        )
        ssh_dir = self._resolve_optional_path(
            configured_root, defaults_root, data.get("ssh_dir")
        )
        private_assets = self._resolve_optional_path(
            configured_root,
            defaults_root,
            data.get("private_assets", data.get("private_assets_dir")),
        )
        return RuntimeConfig(
            runtime_image_name=runtime_image_name,
            runtime_dockerfile=runtime_dockerfile,
            runtime_build_context=runtime_build_context,
            default_dependencies_file=default_dependencies_file,
            env_file=env_file,
            ssh_dir=ssh_dir,
            private_assets=private_assets,
        )

    @staticmethod
    def _resolve_path(config_root: Path, defaults_root: Path, raw: object) -> Path:
        candidate = RuntimeConfigService._resolve_optional_path(
            config_root, defaults_root, raw
        )
        if candidate is None:
            raise ConfigurationError("runtime.json is missing a required path value.")
        return candidate

    @staticmethod
    def _resolve_optional_path(
        config_root: Path, defaults_root: Path, raw: object
    ) -> Path | None:
        if raw is None:
            return None
        text = str(raw).strip()
        if not text:
            return None
        candidate = Path(text).expanduser()
        if candidate.is_absolute():
            return candidate.resolve()
        preferred = (config_root / candidate).resolve()
        if preferred.exists():
            return preferred
        fallback = (defaults_root / candidate).resolve()
        return fallback


def _required_str(data: dict[str, object], key: str) -> str:
    value = str(data.get(key, "")).strip()
    if not value:
        raise ConfigurationError(f"runtime.json field {key} is required.")
    return value
