from __future__ import annotations

from copy import deepcopy
from pathlib import Path

import uvicorn
from uvicorn.config import LOGGING_CONFIG

from bulletjournal_controller.api import create_app
from bulletjournal_controller.config import load_server_config_from_env
from bulletjournal_controller.storage import require_instance_root


def start_server(instance_root: str) -> None:
    instance_paths = require_instance_root(Path(instance_root))
    server_config = load_server_config_from_env()
    app = create_app(instance_root=instance_paths.root, server_config=server_config)
    uvicorn.run(
        app,
        host=server_config.host,
        port=server_config.port,
        log_level=server_config.log_level,
        log_config=build_log_config(instance_paths.controller_log_path),
    )


def build_log_config(log_path: Path) -> dict[str, object]:
    log_config = deepcopy(LOGGING_CONFIG)
    handlers = log_config.setdefault("handlers", {})
    loggers = log_config.setdefault("loggers", {})
    handlers["controller_file_default"] = {
        "class": "logging.FileHandler",
        "formatter": "default",
        "filename": str(log_path),
        "mode": "a",
        "encoding": "utf-8",
    }
    handlers["controller_file_access"] = {
        "class": "logging.FileHandler",
        "formatter": "access",
        "filename": str(log_path),
        "mode": "a",
        "encoding": "utf-8",
    }
    _append_handler(loggers.setdefault("uvicorn", {}), "controller_file_default")
    _append_handler(loggers.setdefault("uvicorn.error", {}), "controller_file_default")
    _append_handler(loggers.setdefault("uvicorn.access", {}), "controller_file_access")
    root = log_config.setdefault("root", {"handlers": [], "level": "INFO"})
    _append_handler(root, "controller_file_default")
    return log_config


def _append_handler(config: dict[str, object], handler_name: str) -> None:
    handlers = config.setdefault("handlers", [])
    if isinstance(handlers, list) and handler_name not in handlers:
        handlers.append(handler_name)
