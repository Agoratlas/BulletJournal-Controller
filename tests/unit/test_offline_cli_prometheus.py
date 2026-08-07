from __future__ import annotations

import json
from pathlib import Path

import pytest

from bulletjournal_controller.cli.cleanup_instance import cleanup_instance
from bulletjournal_controller.cli.export_project import export_project
from bulletjournal_controller.cli.import_project import import_project
from bulletjournal_controller.cli.reconcile import reconcile
from bulletjournal_controller.services.export_service import ExportService
from bulletjournal_controller.services.reconcile_service import ReconcileService
from bulletjournal_controller.services.runtime_service import RuntimeService


@pytest.fixture()
def authenticated_metrics_instance(instance_root: Path) -> Path:
    instance_json_path = instance_root / "config" / "instance.json"
    instance_config = json.loads(instance_json_path.read_text(encoding="utf-8"))
    instance_config["prometheus_metrics_mode"] = "authenticated"
    instance_json_path.write_text(json.dumps(instance_config), encoding="utf-8")
    return instance_root


def test_cleanup_instance_does_not_require_prometheus_api_key(
    authenticated_metrics_instance: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    monkeypatch.setattr(
        RuntimeService, "cleanup_instance_containers", lambda self: ["runtime"]
    )

    result = cleanup_instance(str(authenticated_metrics_instance))

    assert result["removed_containers"] == ["runtime"]


def test_export_project_does_not_require_prometheus_api_key(
    authenticated_metrics_instance: Path, monkeypatch: pytest.MonkeyPatch, tmp_path: Path
) -> None:
    monkeypatch.setattr(
        "bulletjournal_controller.services.project_service.ProjectService.get_project",
        lambda self, project_id: object(),
    )
    monkeypatch.setattr(
        ExportService,
        "export_project",
        lambda self, **_: {"project_id": "study-a"},
    )

    result = export_project(
        str(authenticated_metrics_instance), "study-a", str(tmp_path / "study-a.zip")
    )

    assert result == {"project_id": "study-a"}


def test_import_project_does_not_require_prometheus_api_key(
    authenticated_metrics_instance: Path, monkeypatch: pytest.MonkeyPatch, tmp_path: Path
) -> None:
    monkeypatch.setattr(
        ExportService,
        "import_project",
        lambda self, **_: {"project_id": "study-a"},
    )

    result = import_project(str(authenticated_metrics_instance), str(tmp_path / "study-a.zip"))

    assert result == {"project_id": "study-a"}


def test_reconcile_does_not_require_prometheus_api_key(
    authenticated_metrics_instance: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    calls = []
    monkeypatch.setattr(ReconcileService, "run_once", lambda self: calls.append(True))

    assert reconcile(str(authenticated_metrics_instance)) == {"status": "ok"}
    assert calls == [True]
