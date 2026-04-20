from __future__ import annotations

import json
import os
from dataclasses import dataclass
from pathlib import Path

from bulletjournal_controller.domain.errors import ConfigurationError
from bulletjournal_controller.utils import env_bool


DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8780
INSTANCE_SCHEMA_VERSION = 1
EXPORT_MANIFEST_VERSION = 1
DEFAULT_IDLE_TIMEOUT_SECONDS = 86400
DEFAULT_SESSION_LIFETIME_SECONDS = 7 * 24 * 60 * 60
WEB_DIST_DIRNAME = "_web"
DEFAULTS_DIRNAME = "defaults"
JOB_POLL_INTERVAL_SECONDS = 0.2
RECONCILE_INTERVAL_SECONDS = 300
DEFAULT_RUNTIME_INTERNAL_PORT = 8765
DB_TIMEOUT_SECONDS = 30.0
MANAGED_RUNTIME_PACKAGE_NAME = "bulletjournal-editor"
MANAGED_RUNTIME_PACKAGE_ALIASES = frozenset(
    {MANAGED_RUNTIME_PACKAGE_NAME, "bulletjournal"}
)


@dataclass(slots=True, frozen=True)
class InstanceConfig:
    schema_version: int
    instance_id: str
    title: str
    project_root_dir: str
    exports_dir: str
    idle_timeout_seconds: int
    docker_runtime_image: str
    docker_network_mode: str
    default_python_version: str
    default_bulletjournal_version: str
    default_dependencies_file: str | None = None
    runtime_dockerfile: str | None = None
    runtime_build_context: str | None = None


@dataclass(slots=True, frozen=True)
class ServerConfig:
    host: str = DEFAULT_HOST
    port: int = DEFAULT_PORT
    public_origin: str | None = None
    log_level: str = "info"
    docker_host: str | None = None
    enable_gpu: bool = False
    cookie_secure: bool = False
    session_secret: str = ""
    dev_frontend_url: str | None = None


def package_root() -> Path:
    return Path(__file__).resolve().parent


def bundled_web_root() -> Path:
    return package_root() / WEB_DIST_DIRNAME


def bundled_defaults_root() -> Path:
    return package_root() / DEFAULTS_DIRNAME


def normalize_base_path(value: str | None) -> str:
    if value is None:
        return ""
    stripped = value.strip()
    if not stripped or stripped == "/":
        return ""
    return "/" + stripped.strip("/")


def default_instance_config() -> InstanceConfig:
    defaults_root = bundled_defaults_root()
    runtime_defaults_root = defaults_root / "runtime"
    return InstanceConfig(
        schema_version=INSTANCE_SCHEMA_VERSION,
        instance_id="main",
        title="BulletJournal Controller",
        project_root_dir="projects",
        exports_dir="exports",
        idle_timeout_seconds=DEFAULT_IDLE_TIMEOUT_SECONDS,
        docker_runtime_image="bulletjournal-runtime:local",
        docker_network_mode="bridge",
        default_python_version="3.11",
        default_bulletjournal_version="0.1.0",
        default_dependencies_file=str(
            runtime_defaults_root / "default-dependencies.txt"
        ),
        runtime_dockerfile=str(runtime_defaults_root / "Dockerfile"),
        runtime_build_context=str(runtime_defaults_root),
    )


def instance_config_from_dict(data: dict[str, object]) -> InstanceConfig:
    try:
        config = InstanceConfig(
            schema_version=_required_int(data, "schema_version"),
            instance_id=_required_str(data, "instance_id"),
            title=_required_str(data, "title"),
            project_root_dir=_required_str(data, "project_root_dir"),
            exports_dir=_required_str(data, "exports_dir"),
            idle_timeout_seconds=_required_int(data, "idle_timeout_seconds"),
            docker_runtime_image=_required_str(data, "docker_runtime_image"),
            docker_network_mode=_required_str(data, "docker_network_mode"),
            default_python_version=_required_str(data, "default_python_version"),
            default_bulletjournal_version=_required_str(
                data, "default_bulletjournal_version"
            ),
            default_dependencies_file=_optional_str(
                data.get("default_dependencies_file")
            ),
            runtime_dockerfile=_optional_str(data.get("runtime_dockerfile")),
            runtime_build_context=_optional_str(data.get("runtime_build_context")),
        )
    except KeyError as exc:
        raise ConfigurationError(
            f"Missing required instance configuration field: {exc.args[0]}"
        ) from exc
    validate_instance_config(config)
    return config


def validate_instance_config(config: InstanceConfig) -> None:
    if config.schema_version != INSTANCE_SCHEMA_VERSION:
        raise ConfigurationError(
            f"Unsupported instance schema version {config.schema_version}; expected {INSTANCE_SCHEMA_VERSION}.",
        )
    if not config.instance_id:
        raise ConfigurationError("instance_id must not be empty.")
    if not config.project_root_dir:
        raise ConfigurationError("project_root_dir must not be empty.")
    if not config.exports_dir:
        raise ConfigurationError("exports_dir must not be empty.")
    if config.idle_timeout_seconds <= 0:
        raise ConfigurationError("idle_timeout_seconds must be positive.")
    if not config.docker_runtime_image:
        raise ConfigurationError("docker_runtime_image must not be empty.")
    if not config.default_python_version:
        raise ConfigurationError("default_python_version must not be empty.")
    if not config.default_bulletjournal_version:
        raise ConfigurationError("default_bulletjournal_version must not be empty.")


def load_instance_config(path: Path) -> InstanceConfig:
    if not path.is_file():
        raise ConfigurationError(f"Instance configuration file not found: {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ConfigurationError("Instance configuration must be a JSON object.")
    return instance_config_from_dict(data)


def instance_config_json(config: InstanceConfig) -> str:
    data = {
        "schema_version": config.schema_version,
        "instance_id": config.instance_id,
        "title": config.title,
        "project_root_dir": config.project_root_dir,
        "exports_dir": config.exports_dir,
        "idle_timeout_seconds": config.idle_timeout_seconds,
        "docker_runtime_image": config.docker_runtime_image,
        "docker_network_mode": config.docker_network_mode,
        "default_python_version": config.default_python_version,
        "default_bulletjournal_version": config.default_bulletjournal_version,
        "default_dependencies_file": config.default_dependencies_file,
        "runtime_dockerfile": config.runtime_dockerfile,
        "runtime_build_context": config.runtime_build_context,
    }
    return json.dumps(data, indent=2, sort_keys=False) + "\n"


def load_server_config_from_env() -> ServerConfig:
    session_secret = (os.environ.get("BULLETJOURNAL_SESSION_SECRET") or "").strip()
    if not session_secret:
        raise ConfigurationError("BULLETJOURNAL_SESSION_SECRET is required.")
    cookie_secure = env_bool("BULLETJOURNAL_COOKIE_SECURE")
    if cookie_secure is None:
        raise ConfigurationError("BULLETJOURNAL_COOKIE_SECURE is required.")
    return ServerConfig(
        host=(os.environ.get("BULLETJOURNAL_HOST") or DEFAULT_HOST).strip()
        or DEFAULT_HOST,
        port=int((os.environ.get("BULLETJOURNAL_PORT") or str(DEFAULT_PORT)).strip()),
        public_origin=_optional_str(os.environ.get("BULLETJOURNAL_PUBLIC_ORIGIN")),
        log_level=(os.environ.get("BULLETJOURNAL_LOG_LEVEL") or "info").strip()
        or "info",
        docker_host=_optional_str(os.environ.get("BULLETJOURNAL_DOCKER_HOST")),
        enable_gpu=bool(env_bool("BULLETJOURNAL_ENABLE_GPU", default=False)),
        cookie_secure=bool(cookie_secure),
        session_secret=session_secret,
        dev_frontend_url=_optional_str(
            os.environ.get("BULLETJOURNAL_DEV_FRONTEND_URL")
        ),
    )


def _optional_str(value: object) -> str | None:
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def _required_str(data: dict[str, object], key: str) -> str:
    value = data[key]
    text = str(value).strip()
    if not text:
        raise ConfigurationError(f"{key} must not be empty.")
    return text


def _required_int(data: dict[str, object], key: str) -> int:
    value = data[key]
    if isinstance(value, bool):
        raise ConfigurationError(f"{key} must be an integer.")
    try:
        return int(str(value))
    except (TypeError, ValueError) as exc:
        raise ConfigurationError(f"{key} must be an integer.") from exc
