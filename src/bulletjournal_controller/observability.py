from __future__ import annotations

import math
from collections.abc import Iterable

from prometheus_client import (
    CollectorRegistry,
    Counter,
    Gauge,
    Histogram,
    generate_latest,
)

from bulletjournal_controller.domain.enums import ProjectStatus

LATENCY_BUCKETS = (0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10, 30, 60)


class Observability:
    def __init__(self) -> None:
        self.registry = CollectorRegistry()
        self.endpoint_requests = Counter(
            "bulletjournal_controller_endpoint_requests_total",
            "Proxied project requests by normalized endpoint.",
            ("endpoint", "method", "status_class"),
            registry=self.registry,
        )
        self.endpoint_duration = Histogram(
            "bulletjournal_controller_endpoint_request_duration_seconds",
            "End-to-end proxied project request duration by normalized endpoint.",
            ("endpoint", "method", "status_class"),
            buckets=LATENCY_BUCKETS,
            registry=self.registry,
        )
        self.project_requests = Counter(
            "bulletjournal_controller_project_requests_total",
            "Proxied project requests by project.",
            ("project_id", "outcome"),
            registry=self.registry,
        )
        self.project_duration = Histogram(
            "bulletjournal_controller_project_request_duration_seconds",
            "End-to-end proxied project request duration by project.",
            ("project_id", "outcome"),
            buckets=LATENCY_BUCKETS,
            registry=self.registry,
        )
        self.project_app_duration = Histogram(
            "bulletjournal_controller_project_app_duration_seconds",
            "BulletJournal application duration reported through Server-Timing.",
            ("project_id", "outcome"),
            buckets=LATENCY_BUCKETS,
            registry=self.registry,
        )
        self.project_proxy_overhead = Histogram(
            "bulletjournal_controller_project_proxy_overhead_seconds",
            "Proxy duration excluding the reported BulletJournal application duration.",
            ("project_id", "outcome"),
            buckets=LATENCY_BUCKETS,
            registry=self.registry,
        )
        self.system_cpu_percent = Gauge(
            "bulletjournal_controller_system_cpu_percent",
            "System CPU usage percentage.",
            registry=self.registry,
        )
        self.system_memory_used = Gauge(
            "bulletjournal_controller_system_memory_used_bytes",
            "System memory in use.",
            registry=self.registry,
        )
        self.system_memory_total = Gauge(
            "bulletjournal_controller_system_memory_total_bytes",
            "System memory capacity.",
            registry=self.registry,
        )
        self.system_disk_used = Gauge(
            "bulletjournal_controller_system_disk_used_bytes",
            "Instance filesystem bytes in use.",
            registry=self.registry,
        )
        self.system_disk_total = Gauge(
            "bulletjournal_controller_system_disk_total_bytes",
            "Instance filesystem capacity.",
            registry=self.registry,
        )
        self.project_cpu_percent = Gauge(
            "bulletjournal_controller_project_cpu_percent",
            "Current Docker-reported project CPU usage percentage.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_cpu_limit = Gauge(
            "bulletjournal_controller_project_cpu_limit_cores",
            "Configured project CPU limit in cores.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_memory_used = Gauge(
            "bulletjournal_controller_project_memory_used_bytes",
            "Current Docker-reported project memory use.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_memory_limit = Gauge(
            "bulletjournal_controller_project_memory_limit_bytes",
            "Configured Docker project memory limit.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_disk_used = Gauge(
            "bulletjournal_controller_project_disk_used_bytes",
            "Last cached project disk usage.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_disk_soft_limit = Gauge(
            "bulletjournal_controller_project_disk_soft_limit_bytes",
            "Configured project disk soft limit; this is not a Docker filesystem quota.",
            ("project_id",),
            registry=self.registry,
        )
        self.project_status = Gauge(
            "bulletjournal_controller_project_status",
            "Current controller status for each project; exactly one status is 1.",
            ("project_id", "status"),
            registry=self.registry,
        )
        self._project_statuses = tuple(status.value for status in ProjectStatus)
        self._known_project_ids: set[str] = set()
        self._project_outcomes: dict[str, set[str]] = {}

    def render(self) -> bytes:
        return generate_latest(self.registry)

    def update_resources(self, *, system: dict[str, object], projects: Iterable[dict[str, object]]) -> None:
        _set_if_number(self.system_cpu_percent, system.get("cpu_percent"))
        memory = system.get("memory")
        if isinstance(memory, dict):
            _set_if_number(self.system_memory_used, memory.get("used_bytes"))
            _set_if_number(self.system_memory_total, memory.get("total_bytes"))
        disk = system.get("disk")
        if isinstance(disk, dict):
            _set_if_number(self.system_disk_used, disk.get("used_bytes"))
            _set_if_number(self.system_disk_total, disk.get("total_bytes"))
        current_project_ids: set[str] = set()
        for project in projects:
            project_id = str(project["project_id"])
            status = str(project["status"])
            current_project_ids.add(project_id)
            _set_or_remove(
                self.project_cpu_percent, project_id, project.get("cpu_percent")
            )
            _set_or_remove(
                self.project_memory_used, project_id, project.get("memory_used_bytes")
            )
            _set_or_remove(
                self.project_disk_used, project_id, project.get("disk_used_bytes")
            )
            _set_or_remove(
                self.project_cpu_limit,
                project_id,
                _cores_from_millis(project.get("cpu_limit_millis")),
            )
            _set_or_remove(
                self.project_memory_limit,
                project_id,
                project.get("memory_limit_bytes"),
            )
            _set_or_remove(
                self.project_disk_soft_limit,
                project_id,
                project.get("disk_soft_limit_bytes"),
            )
            for candidate_status in self._project_statuses:
                self.project_status.labels(
                    project_id=project_id, status=candidate_status
                ).set(1 if candidate_status == status else 0)
        for project_id in self._known_project_ids - current_project_ids:
            self._remove_project(project_id)
        self._known_project_ids = current_project_ids

    def observe_project_request(
        self,
        *,
        project_id: str,
        outcome: str,
        duration: float,
        app_duration: float | None,
    ) -> None:
        self._known_project_ids.add(project_id)
        self._project_outcomes.setdefault(project_id, set()).add(outcome)
        labels = {"project_id": project_id, "outcome": outcome}
        self.project_requests.labels(**labels).inc()
        self.project_duration.labels(**labels).observe(duration)
        if app_duration is not None:
            self.project_app_duration.labels(**labels).observe(app_duration)
            self.project_proxy_overhead.labels(**labels).observe(
                max(0.0, duration - app_duration)
            )

    def _remove_project(self, project_id: str) -> None:
        _remove_labels(self.project_cpu_percent, project_id)
        _remove_labels(self.project_cpu_limit, project_id)
        _remove_labels(self.project_memory_used, project_id)
        _remove_labels(self.project_memory_limit, project_id)
        _remove_labels(self.project_disk_used, project_id)
        _remove_labels(self.project_disk_soft_limit, project_id)
        for status in self._project_statuses:
            _remove_labels(self.project_status, project_id, status)
        for outcome in self._project_outcomes.pop(project_id, set()):
            _remove_labels(self.project_requests, project_id, outcome)
            _remove_labels(self.project_duration, project_id, outcome)
            _remove_labels(self.project_app_duration, project_id, outcome)
            _remove_labels(self.project_proxy_overhead, project_id, outcome)


def normalized_project_endpoint(*, method: str, path: str) -> str:
    parts = path.split("/", 3)
    if len(parts) == 4 and parts[1] == "p":
        path = "/" + parts[3]
    normalized = path.rstrip("/") or "/"
    if normalized == "/api/v1/project/snapshot" and method == "GET":
        return "/api/v1/project/snapshot"
    if normalized == "/api/v1/graph" and method in {"GET", "PATCH"}:
        return "/api/v1/graph"
    if normalized.startswith("/api/v1/graph/tombstones/"):
        return "/api/v1/graph/tombstones/{tombstone_id}"
    if normalized == "/api/v1/events" and method == "GET":
        return "/api/v1/events"
    if normalized.startswith("/api/v1/edit/sessions/"):
        if "/assets/" in normalized:
            return "/api/v1/edit/sessions/{session_id}/assets"
        return "/api/v1/edit/sessions/{session_id}"
    if normalized.startswith("/api/v1/nodes/"):
        if normalized.endswith("/run"):
            return "/api/v1/nodes/{node_id}/run"
        if normalized.endswith("/assets"):
            return "/api/v1/nodes/{node_id}/assets"
        return "/api/v1/nodes/{node_id}"
    if normalized.startswith("/api/v1/assets/"):
        if normalized.endswith("/prepare"):
            return "/api/v1/assets/{node_id}/{asset_name}/prepare"
        return "/api/v1/assets/{node_id}/{asset_name}"
    if normalized.startswith("/api/v1/artifacts/"):
        return "/api/v1/artifacts/{node_id}/{artifact_name}"
    if normalized.startswith("/api/v1/dashboards/"):
        return "/api/v1/dashboards/{dashboard_id}"
    if normalized.startswith("/api/v1/runs/"):
        return "/api/v1/runs/{run_id}"
    if normalized.startswith("/api/v1/sessions/"):
        return "/api/v1/sessions/{session_id}"
    if normalized.startswith("/api/v1/"):
        return normalized
    if normalized.startswith("/assets/"):
        return "/assets/{asset}"
    return "/other"


def server_timing_app_seconds(header: str | None) -> float | None:
    if not header:
        return None
    for item in header.split(","):
        parts = [part.strip() for part in item.split(";")]
        if not parts or parts[0].lower() != "app":
            continue
        for parameter in parts[1:]:
            key, separator, value = parameter.partition("=")
            if key.lower() != "dur" or not separator:
                continue
            try:
                duration = float(value.strip().strip('"')) / 1000
            except ValueError:
                return None
            return duration if math.isfinite(duration) and duration >= 0 else None
    return None


def is_long_lived_endpoint(endpoint: str) -> bool:
    return endpoint == "/api/v1/events"


def _set_if_number(metric, value: object) -> None:
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        metric.set(value)


def _set_or_remove(metric, project_id: str, value: object) -> None:
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        metric.labels(project_id=project_id).set(value)
        return
    _remove_labels(metric, project_id)


def _cores_from_millis(value: object) -> float | None:
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        return value / 1000
    return None


def _remove_labels(metric, *label_values: str) -> None:
    try:
        metric.remove(*label_values)
    except KeyError:
        pass
