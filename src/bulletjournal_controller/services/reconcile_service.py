from __future__ import annotations

import threading
import time

from bulletjournal_controller.config import RECONCILE_INTERVAL_SECONDS
from bulletjournal_controller.domain.enums import ProjectStatus, ProjectStatusReason


class ReconcileService:
    def __init__(self, *, project_service, runtime_service):
        self.project_service = project_service
        self.runtime_service = runtime_service
        self._thread: threading.Thread | None = None
        self._stop_event = threading.Event()

    def start(self) -> None:
        if self._thread is not None:
            return
        self._stop_event.clear()
        self._thread = threading.Thread(target=self._run_loop, name='reconcile-worker', daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop_event.set()
        if self._thread is not None:
            self._thread.join(timeout=2.0)
            self._thread = None

    def run_once(self) -> None:
        for project in self.project_service.list_projects():
            if project.status != ProjectStatus.RUNNING.value or project.container_port is None:
                continue
            status = self.runtime_service.fetch_project_status(project=project)
            self.project_service.apply_runtime_status(project_id=project.project_id, status_payload=status)
            if status.get('idle_shutdown_eligible') is True and status.get('idle_shutdown_eligible_since'):
                self.project_service.stop_project(project.project_id, reason=ProjectStatusReason.IDLE_TIMEOUT.value)

    def _run_loop(self) -> None:
        while not self._stop_event.wait(RECONCILE_INTERVAL_SECONDS):
            try:
                self.run_once()
            except Exception:
                time.sleep(1.0)
