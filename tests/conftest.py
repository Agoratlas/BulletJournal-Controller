from __future__ import annotations

import sys
import os
from pathlib import Path

import pytest

from bulletjournal_controller.config import ServerConfig
from bulletjournal_controller.storage import init_instance_root


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'src'
if str(SRC) not in sys.path:
    sys.path.insert(0, str(SRC))


@pytest.fixture()
def instance_root(tmp_path: Path) -> Path:
    path = tmp_path / 'instance'
    init_instance_root(path)
    return path


@pytest.fixture()
def server_config() -> ServerConfig:
    return ServerConfig(session_secret='test-secret', cookie_secure=False)


@pytest.fixture(autouse=True)
def clean_env(monkeypatch: pytest.MonkeyPatch):
    monkeypatch.delenv('BULLETJOURNAL_SESSION_SECRET', raising=False)
    monkeypatch.delenv('BULLETJOURNAL_COOKIE_SECURE', raising=False)
