from __future__ import annotations

import os
from pathlib import Path

import uvicorn

from bulletjournal_controller.api import create_app
from bulletjournal_controller.config import ServerConfig, load_server_config_from_env


def dev_server(instance_root: str) -> None:
    try:
        server_config = load_server_config_from_env()
    except Exception:
        server_config = ServerConfig(session_secret='dev-secret', cookie_secure=False, dev_frontend_url=os.environ.get('BULLETJOURNAL_DEV_FRONTEND_URL'))
    app = create_app(instance_root=Path(instance_root), server_config=server_config)
    uvicorn.run(app, host=server_config.host, port=server_config.port, log_level='debug')
