from __future__ import annotations

from pathlib import Path

import uvicorn

from bulletjournal_controller.api import create_app
from bulletjournal_controller.config import load_server_config_from_env


def start_server(instance_root: str) -> None:
    server_config = load_server_config_from_env()
    app = create_app(instance_root=Path(instance_root), server_config=server_config)
    uvicorn.run(app, host=server_config.host, port=server_config.port, log_level=server_config.log_level)
