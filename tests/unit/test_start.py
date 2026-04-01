from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.cli.start import build_log_config


def test_build_log_config_writes_to_controller_log_file(tmp_path: Path) -> None:
    log_path = tmp_path / "controller.log"

    config = build_log_config(log_path)

    handlers = config["handlers"]
    assert handlers["controller_file_default"]["filename"] == str(log_path)
    assert handlers["controller_file_access"]["filename"] == str(log_path)
    assert "controller_file_default" in config["loggers"]["uvicorn"]["handlers"]
    assert "controller_file_default" in config["loggers"]["uvicorn.error"]["handlers"]
    assert "controller_file_access" in config["loggers"]["uvicorn.access"]["handlers"]
