from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.services.reconcile_service import ReconcileService


class DummyProjectService:
    def __init__(self, project):
        self.project = project
        self.applied_statuses = []
        self.stopped = []
        self.crashed = []

    def list_projects(self):
        return [self.project]

    def apply_runtime_status(
        self, *, project_id: str, status_payload: dict[str, object]
    ):
        self.applied_statuses.append((project_id, status_payload))

    def stop_project(self, project_id: str, *, reason: str | None = None):
        self.stopped.append((project_id, reason))

    def mark_runtime_crashed(self, project_id: str):
        self.crashed.append(project_id)


class DummyRuntimeService:
    def __init__(self, status_payload):
        self.status_payload = status_payload
        self.inspect_payload = None
        self.captured = []

    def fetch_project_status(self, *, project):
        _ = project
        return self.status_payload

    def inspect_container(self, container_name: str):
        _ = container_name
        return self.inspect_payload

    def write_crash_diagnostics(self, **kwargs):
        self.captured.append(kwargs)


def test_reconcile_does_not_stop_project_before_idle_timeout_elapsed() -> None:
    project = SimpleNamespace(
        project_id="study-a", status="running", container_port=8765
    )
    status_payload = {
        "idle_shutdown_eligible": True,
        "idle_shutdown_eligible_since": "2026-03-23T11:58:00Z",
    }
    project_service = DummyProjectService(project)
    runtime_service = DummyRuntimeService(status_payload)
    service = ReconcileService(
        project_service=project_service,
        runtime_service=runtime_service,
        idle_timeout_seconds=86400,
    )

    import bulletjournal_controller.services.reconcile_service as reconcile_module

    original_utc_now = reconcile_module.utc_now
    try:
        reconcile_module.utc_now = lambda: reconcile_module.parse_iso8601(
            "2026-03-23T12:03:00Z"
        )
        service.run_once()
    finally:
        reconcile_module.utc_now = original_utc_now

    assert project_service.applied_statuses == [("study-a", status_payload)]
    assert project_service.stopped == []


def test_reconcile_stops_project_after_idle_timeout_elapsed() -> None:
    project = SimpleNamespace(
        project_id="study-a", status="running", container_port=8765
    )
    status_payload = {
        "idle_shutdown_eligible": True,
        "idle_shutdown_eligible_since": "2026-03-22T10:00:00Z",
    }
    project_service = DummyProjectService(project)
    runtime_service = DummyRuntimeService(status_payload)
    service = ReconcileService(
        project_service=project_service,
        runtime_service=runtime_service,
        idle_timeout_seconds=86400,
    )

    import bulletjournal_controller.services.reconcile_service as reconcile_module

    original_utc_now = reconcile_module.utc_now
    try:
        reconcile_module.utc_now = lambda: reconcile_module.parse_iso8601(
            "2026-03-23T10:00:01Z"
        )
        service.run_once()
    finally:
        reconcile_module.utc_now = original_utc_now

    assert project_service.stopped == [("study-a", "idle_timeout")]


def test_reconcile_marks_project_crashed_when_status_fetch_fails_for_missing_container() -> (
    None
):
    project = SimpleNamespace(
        project_id="study-a",
        status="running",
        container_port=8765,
        container_name="bulletjournal-main-study-a",
    )
    project_service = DummyProjectService(project)
    runtime_service = DummyRuntimeService(status_payload={})

    def raise_fetch_error(*, project):
        _ = project
        raise RuntimeError("connection failed")

    runtime_service.fetch_project_status = raise_fetch_error
    service = ReconcileService(
        project_service=project_service,
        runtime_service=runtime_service,
        idle_timeout_seconds=86400,
    )

    service.run_once()

    assert project_service.crashed == ["study-a"]
    assert project_service.applied_statuses == []
    assert len(runtime_service.captured) == 1
