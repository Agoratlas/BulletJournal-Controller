from __future__ import annotations

import pytest

from bulletjournal_controller.observability import (
    Observability,
    normalized_project_endpoint,
    server_timing_app_seconds,
)


@pytest.mark.parametrize(
    ("method", "path", "expected"),
    [
        ("GET", "/p/study-a/api/v1/project/snapshot", "/api/v1/project/snapshot"),
        ("PATCH", "/p/study-a/api/v1/graph", "/api/v1/graph"),
        ("GET", "/p/study-a/api/v1/events", "/api/v1/events"),
        ("POST", "/p/study-a/api/v1/nodes/node-1/run", "/api/v1/nodes/{node_id}/run"),
        (
            "POST",
            "/p/study-a/api/v1/assets/node-1/chart/prepare",
            "/api/v1/assets/{node_id}/{asset_name}/prepare",
        ),
        (
            "GET",
            "/p/study-a/api/v1/edit/sessions/c140975eda47611f/assets/form-W6ZZMHnc.js",
            "/api/v1/edit/sessions/{session_id}/assets",
        ),
        (
            "GET",
            "/p/study-a/api/v1/edit/sessions/c140975eda47611f/api/manifest",
            "/api/v1/edit/sessions/{session_id}",
        ),
    ],
)
def test_normalized_project_endpoint(method: str, path: str, expected: str) -> None:
    assert normalized_project_endpoint(method=method, path=path) == expected


def test_server_timing_app_seconds_reads_only_app_metric() -> None:
    assert server_timing_app_seconds("app;dur=58.5, db;dur=3.2, disk;dur=0.3") == 0.0585


@pytest.mark.parametrize("value", [None, "db;dur=1", "app;dur=bad", "app;dur=-1", "app;dur=NaN"])
def test_server_timing_app_seconds_ignores_invalid_values(value: str | None) -> None:
    assert server_timing_app_seconds(value) is None


def test_project_status_gauge_is_reset_when_status_changes() -> None:
    observability = Observability()
    system = {"memory": None, "disk": None}

    observability.update_resources(
        system=system,
        projects=[{"project_id": "study-a", "status": "starting"}],
    )
    observability.update_resources(
        system=system,
        projects=[{"project_id": "study-a", "status": "running"}],
    )

    output = observability.render().decode("utf-8")
    assert 'bulletjournal_controller_project_status{project_id="study-a",status="running"} 1.0' in output
    assert 'bulletjournal_controller_project_status{project_id="study-a",status="starting"} 0.0' in output


def test_project_status_is_one_hot_and_deleted_project_series_are_removed() -> None:
    observability = Observability()
    system = {"memory": None, "disk": None}

    observability.update_resources(
        system=system,
        projects=[{"project_id": "study-a", "status": "error"}],
    )
    observability.observe_project_request(
        project_id="study-a", outcome="success", duration=0.1, app_duration=0.05
    )
    observability.update_resources(system=system, projects=[])

    output = observability.render().decode("utf-8")
    assert 'bulletjournal_controller_project_status{project_id="study-a"' not in output
    assert 'bulletjournal_controller_project_requests_total{outcome="success",project_id="study-a"}' not in output


def test_project_configured_limits_are_exported_without_runtime_metrics() -> None:
    observability = Observability()
    observability.update_resources(
        system={"memory": None, "disk": None},
        projects=[
            {
                "project_id": "stopped-project",
                "status": "stopped",
                "cpu_limit_millis": 2500,
                "memory_limit_bytes": 8 * 1024**3,
                "disk_soft_limit_bytes": 100 * 1024**3,
            }
        ],
    )

    output = observability.render().decode("utf-8")
    assert 'bulletjournal_controller_project_cpu_limit_cores{project_id="stopped-project"} 2.5' in output
    assert (
        'bulletjournal_controller_project_memory_limit_bytes{project_id="stopped-project"} 8.589934592e+09'
        in output
    )
    assert (
        'bulletjournal_controller_project_disk_soft_limit_bytes{project_id="stopped-project"} 1.073741824e+11'
        in output
    )
    assert 'bulletjournal_controller_project_cpu_percent{project_id="stopped-project"}' not in output
    assert 'bulletjournal_controller_project_memory_used_bytes{project_id="stopped-project"}' not in output


def test_project_unlimited_configured_limits_are_not_exported() -> None:
    observability = Observability()
    observability.update_resources(
        system={"memory": None, "disk": None},
        projects=[
            {
                "project_id": "unlimited-project",
                "status": "stopped",
                "cpu_limit_millis": None,
                "memory_limit_bytes": None,
                "disk_soft_limit_bytes": None,
            }
        ],
    )

    output = observability.render().decode("utf-8")
    assert 'bulletjournal_controller_project_cpu_limit_cores{project_id="unlimited-project"}' not in output
    assert 'bulletjournal_controller_project_memory_limit_bytes{project_id="unlimited-project"}' not in output
    assert 'bulletjournal_controller_project_disk_soft_limit_bytes{project_id="unlimited-project"}' not in output
