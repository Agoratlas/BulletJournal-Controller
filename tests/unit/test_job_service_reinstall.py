from __future__ import annotations

from types import SimpleNamespace

from bulletjournal_controller.domain.enums import JobType, ProjectStatus
from bulletjournal_controller.domain.errors import ConflictError
from bulletjournal_controller.services.job_service import JobService


def test_reinstall_environment_upgrades_all_packages() -> None:
    captured_install_call: dict | None = None

    class DummyEnvironmentService:
        def install_environment(self, **kwargs):
            nonlocal captured_install_call
            captured_install_call = kwargs
            return "lock-sha"

    class DummyProjectService:
        def __init__(self):
            self.environment_service = DummyEnvironmentService()

        def get_project(self, _project_id: str):
            return SimpleNamespace(
                project_id="study-a",
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
            )

        def mark_installing(self, project_id: str):
            return self.get_project(project_id)

        def mark_install_succeeded(
            self, project_id: str, *, lock_sha256: str, runtime_venv_size_bytes: int
        ):
            return SimpleNamespace(
                project_id=project_id,
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                lock_sha256=lock_sha256,
                runtime_venv_size_bytes=runtime_venv_size_bytes,
            )

        def project_paths(self, _project_id: str):
            return SimpleNamespace(root="/tmp/project")

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.export_service = object()
    service._runtime_venv_size_bytes = lambda _project_id: 123  # type: ignore[method-assign]

    result = service._dispatch(
        SimpleNamespace(
            job_type=JobType.REINSTALL_ENVIRONMENT.value,
            payload_json='{"restart_if_running": false, "mark_all_artifacts_stale": true}',
            log_path="/tmp/job.log",
            project_id="study-a",
        )
    )

    assert result["project_id"] == "study-a"
    assert captured_install_call is not None
    assert captured_install_call["upgrade_all"] is True


def test_update_environment_upgrades_all_packages() -> None:
    captured_install_call: dict | None = None

    class DummyEnvironmentService:
        def install_environment(self, **kwargs):
            nonlocal captured_install_call
            captured_install_call = kwargs
            return "lock-sha"

    class DummyProjectService:
        def __init__(self):
            self.environment_service = DummyEnvironmentService()

        def get_project(self, _project_id: str):
            return SimpleNamespace(
                project_id="study-a",
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                python_version="3.11",
            )

        def update_environment_inputs(
            self, *, project_id: str, python_version: str, custom_requirements_text: str
        ):
            assert project_id == "study-a"
            assert python_version == "3.11"
            assert custom_requirements_text == "bulletjournal-editor==0.1.0\n"
            return self.get_project(project_id)

        def mark_installing(self, project_id: str):
            return self.get_project(project_id)

        def mark_install_succeeded(
            self, project_id: str, *, lock_sha256: str, runtime_venv_size_bytes: int
        ):
            return SimpleNamespace(
                project_id=project_id,
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                lock_sha256=lock_sha256,
                runtime_venv_size_bytes=runtime_venv_size_bytes,
            )

        def project_paths(self, _project_id: str):
            return SimpleNamespace(root="/tmp/project")

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.export_service = object()
    service._runtime_venv_size_bytes = lambda _project_id: 123  # type: ignore[method-assign]

    result = service._dispatch(
        SimpleNamespace(
            job_type=JobType.UPDATE_ENVIRONMENT.value,
            payload_json='{"python_version": "3.11", "custom_requirements_text": "bulletjournal-editor==0.1.0\\n", "restart_if_running": false, "mark_all_artifacts_stale": true}',
            log_path="/tmp/job.log",
            project_id="study-a",
        )
    )

    assert result["project_id"] == "study-a"
    assert captured_install_call is not None
    assert captured_install_call["upgrade_all"] is True


def test_update_environment_reuses_project_python_version_when_payload_omits_it() -> None:
    captured_install_call: dict | None = None

    class DummyEnvironmentService:
        def install_environment(self, **kwargs):
            nonlocal captured_install_call
            captured_install_call = kwargs
            return "lock-sha"

    class DummyProjectService:
        def __init__(self):
            self.environment_service = DummyEnvironmentService()

        def get_project(self, _project_id: str):
            return SimpleNamespace(
                project_id="study-a",
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                python_version="3.12",
            )

        def update_environment_inputs(
            self, *, project_id: str, python_version: str, custom_requirements_text: str
        ):
            assert project_id == "study-a"
            assert python_version == "3.12"
            assert custom_requirements_text == "bulletjournal-editor==0.1.0\n"
            return self.get_project(project_id)

        def mark_installing(self, project_id: str):
            return self.get_project(project_id)

        def mark_install_succeeded(
            self, project_id: str, *, lock_sha256: str, runtime_venv_size_bytes: int
        ):
            return SimpleNamespace(
                project_id=project_id,
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                lock_sha256=lock_sha256,
                runtime_venv_size_bytes=runtime_venv_size_bytes,
            )

        def project_paths(self, _project_id: str):
            return SimpleNamespace(root="/tmp/project")

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.export_service = object()
    service._runtime_venv_size_bytes = lambda _project_id: 123  # type: ignore[method-assign]

    result = service._dispatch(
        SimpleNamespace(
            job_type=JobType.UPDATE_ENVIRONMENT.value,
            payload_json='{"custom_requirements_text": "bulletjournal-editor==0.1.0\\n", "restart_if_running": false, "mark_all_artifacts_stale": true}',
            log_path="/tmp/job.log",
            project_id="study-a",
        )
    )

    assert result["project_id"] == "study-a"
    assert captured_install_call is not None
    assert captured_install_call["upgrade_all"] is True


def test_reinstall_environment_defaults_to_marking_artifacts_stale() -> None:
    captured_install_call: dict | None = None

    class DummyEnvironmentService:
        def install_environment(self, **kwargs):
            nonlocal captured_install_call
            captured_install_call = kwargs
            return "lock-sha"

    class DummyProjectService:
        def __init__(self):
            self.environment_service = DummyEnvironmentService()

        def get_project(self, _project_id: str):
            return SimpleNamespace(
                project_id="study-a",
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
            )

        def mark_installing(self, project_id: str):
            return self.get_project(project_id)

        def mark_install_succeeded(
            self, project_id: str, *, lock_sha256: str, runtime_venv_size_bytes: int
        ):
            return SimpleNamespace(
                project_id=project_id,
                status=ProjectStatus.STOPPED.value,
                install_status="installed",
                lock_sha256=lock_sha256,
                runtime_venv_size_bytes=runtime_venv_size_bytes,
            )

        def project_paths(self, _project_id: str):
            return SimpleNamespace(root="/tmp/project")

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.export_service = object()
    service._runtime_venv_size_bytes = lambda _project_id: 123  # type: ignore[method-assign]

    result = service._dispatch(
        SimpleNamespace(
            job_type=JobType.REINSTALL_ENVIRONMENT.value,
            payload_json='{"restart_if_running": false}',
            log_path="/tmp/job.log",
            project_id="study-a",
        )
    )

    assert result["project_id"] == "study-a"
    assert captured_install_call is not None
    assert captured_install_call["mark_all_artifacts_stale"] is True


def test_stop_project_job_uses_payload_reason() -> None:
    class DummyProjectService:
        def __init__(self):
            self.stopped = []

        def get_project(self, _project_id: str):
            return SimpleNamespace(
                project_id="study-a",
                status=ProjectStatus.RUNNING.value,
            )

        def stop_project(self, project_id: str, *, reason: str | None = None):
            self.stopped.append((project_id, reason))
            return SimpleNamespace(project_id=project_id, status=ProjectStatus.STOPPED.value)

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.export_service = object()

    result = service._dispatch(
        SimpleNamespace(
            job_type=JobType.STOP_PROJECT.value,
            payload_json='{"project_id": "study-a", "reason": "idle_timeout"}',
            log_path="/tmp/job.log",
            project_id="study-a",
        )
    )

    assert result == {"project_id": "study-a", "status": ProjectStatus.STOPPED.value}
    assert service.project_service.stopped == [("study-a", "idle_timeout")]


def test_ensure_project_stopped_via_job_queues_idle_timeout_stop() -> None:
    queued = []

    class DummyProjectService:
        def get_project(self, _project_id: str):
            return SimpleNamespace(project_id="study-a", status=ProjectStatus.RUNNING.value)

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.system_user_id = "user-system"
    service.queue_job = lambda **kwargs: queued.append(kwargs)  # type: ignore[method-assign]

    service.ensure_project_stopped_via_job("study-a", reason="idle_timeout")

    assert queued == [
        {
            "job_type": JobType.STOP_PROJECT.value,
            "requested_by_user_id": "user-system",
            "payload": {"project_id": "study-a", "reason": "idle_timeout"},
            "project_id": "study-a",
        }
    ]


def test_ensure_project_stopped_via_job_ignores_conflict() -> None:
    class DummyProjectService:
        def get_project(self, _project_id: str):
            return SimpleNamespace(project_id="study-a", status=ProjectStatus.RUNNING.value)

    service = JobService(instance_paths=SimpleNamespace(), jobs=SimpleNamespace())
    service.project_service = DummyProjectService()
    service.system_user_id = "user-system"

    def raise_conflict(**_kwargs):
        raise ConflictError("already queued")

    service.queue_job = raise_conflict  # type: ignore[method-assign]

    service.ensure_project_stopped_via_job("study-a", reason="idle_timeout")
