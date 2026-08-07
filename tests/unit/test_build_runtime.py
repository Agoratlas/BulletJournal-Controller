from __future__ import annotations

import json
from pathlib import Path

from bulletjournal_controller.cli.build_runtime import build_runtime
from bulletjournal_controller.services.runtime_config_service import (
    RuntimeConfigService,
)


def test_build_runtime_does_not_require_prometheus_api_key(
    instance_root: Path, monkeypatch
) -> None:
    instance_json_path = instance_root / "config" / "instance.json"
    instance_config = json.loads(instance_json_path.read_text(encoding="utf-8"))
    instance_config["prometheus_metrics_mode"] = "authenticated"
    instance_json_path.write_text(json.dumps(instance_config), encoding="utf-8")

    built_with = {}

    def ensure_runtime_image(self, installer) -> None:
        built_with["runtime_image_name"] = self.runtime_config.runtime_image_name

    monkeypatch.setattr(
        RuntimeConfigService, "ensure_runtime_image", ensure_runtime_image
    )

    result = build_runtime(str(instance_root))

    assert result["runtime_image_name"] == "bulletjournal-runtime:local"
    assert built_with == {"runtime_image_name": "bulletjournal-runtime:local"}
