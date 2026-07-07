from __future__ import annotations

import json
import sqlite3
from pathlib import Path

from bulletjournal.storage.project_fs import init_project_root
from bulletjournal_controller.config import default_instance_config
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.services.environment_service import EnvironmentService
from bulletjournal_controller.services.job_events import JobEventBroker
from bulletjournal_controller.services.job_service import JobService
from bulletjournal_controller.services.project_service import ProjectService
from bulletjournal_controller.storage import (
    JobRepository,
    ProjectRepository,
    StateDB,
    UserRepository,
    init_instance_root,
)


def test_job_log_prefixes_each_line_with_timestamp(tmp_path: Path) -> None:
    log_path = tmp_path / "job.log"
    instance_paths = init_instance_root(tmp_path / "instance")
    service = JobService(
        instance_paths=instance_paths,
        jobs=JobRepository(StateDB(instance_paths.state_db_path)),
    )
    service._log(log_path, "first line\nsecond line")
    lines = log_path.read_text(encoding="utf-8").splitlines()
    assert len(lines) == 2
    assert lines[0].endswith(" first line")
    assert lines[1].endswith(" second line")
    assert "T" in lines[0].split(" ", 1)[0]
    assert "T" in lines[1].split(" ", 1)[0]


def test_job_log_filename_is_prefixed_with_iso_timestamp(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    job = service.queue_job(
        job_type="start_project",
        requested_by_user_id="user-1",
        payload={"project_id": "study-a"},
        project_id="study-a",
        reject_on_conflict=False,
    )
    filename = Path(job.log_path).name
    assert filename.endswith(f"__{job.job_id}.log")
    assert "T" in filename.split("__", 1)[0]


def test_read_job_log_returns_trailing_lines(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    job = service.queue_job(
        job_type="start_project",
        requested_by_user_id="user-1",
        payload={"project_id": "study-a"},
        project_id="study-a",
        reject_on_conflict=False,
    )
    Path(job.log_path).write_text("1\n2\n3\n", encoding="utf-8")
    assert service.read_job_log(job.job_id, lines=2) == "2\n3\n"


def test_read_job_log_returns_full_log_when_lines_are_omitted(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    job = service.queue_job(
        job_type="start_project",
        requested_by_user_id="user-1",
        payload={"project_id": "study-a"},
        project_id="study-a",
        reject_on_conflict=False,
    )
    Path(job.log_path).write_text("1\n2\n3\n", encoding="utf-8")
    assert service.read_job_log(job.job_id, lines=None) == "1\n2\n3\n"


def test_read_job_log_lines_returns_trailing_lines(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    job = service.queue_job(
        job_type="start_project",
        requested_by_user_id="user-1",
        payload={"project_id": "study-a"},
        project_id="study-a",
        reject_on_conflict=False,
    )
    Path(job.log_path).write_text("1\n2\n3\n", encoding="utf-8")
    assert service.read_job_log_lines(job.job_id, lines=2) == ["2", "3"]


def test_queue_job_publishes_initial_job_event(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )

    published: list[dict[str, object]] = []

    class RecordingBroker(JobEventBroker):
        def publish(self, event: dict[str, object]) -> None:  # type: ignore[override]
            published.append(event)

    service = JobService(
        instance_paths=instance_paths,
        jobs=JobRepository(db),
        event_broker=RecordingBroker(),
    )

    job = service.queue_job(
        job_type="start_project",
        requested_by_user_id="user-1",
        payload={"project_id": "study-a"},
        project_id="study-a",
        reject_on_conflict=False,
    )

    assert published == [job.to_api()]


def test_log_publishes_job_log_events(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    published: list[dict[str, object]] = []

    class RecordingBroker(JobEventBroker):
        def publish(self, event: dict[str, object]) -> None:  # type: ignore[override]
            published.append(event)

    service = JobService(
        instance_paths=instance_paths,
        jobs=JobRepository(db),
        event_broker=RecordingBroker(),
    )
    log_path = instance_paths.job_logs_dir / "2026-01-01T00-00-00Z__job-1.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)

    service._log(log_path, "first line\nsecond line")

    assert published == [
        {"type": "job.log", "job_id": "job-1", "line": published[0]["line"]},
        {"type": "job.log", "job_id": "job-1", "line": published[1]["line"]},
    ]
    assert str(published[0]["line"]).endswith(" first line")
    assert str(published[1]["line"]).endswith(" second line")


class DummyRuntimeConfigService:
    runtime_config = type(
        "RuntimeConfig", (), {"runtime_image_name": "bulletjournal-runtime:local"}
    )()

    def default_dependencies_file(self):
        return None

    def additional_mounts(self):
        return []

    def env_file(self):
        return None


class DummyRuntimeService:
    def update_limits(self, *, project):
        return None

    def cleanup_project_container(self, project_id: str) -> None:
        return None

    def stop_project(self, *, project) -> None:
        return None


def test_delete_project_job_keeps_its_own_job_record(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    project_service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    project = project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_service.projects.update(
        project.project_id,
        status="stopped",
        install_status="ready",
    )

    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    service.bind_services(
        project_service=project_service,
        export_service=object(),
        runtime_service=DummyRuntimeService(),
        system_user_id="user-system",
    )

    job = service.queue_job(
        job_type="delete_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project.project_id},
        project_id=project.project_id,
        reject_on_conflict=False,
    )

    service._run_job(job)

    completed_job = service.get_job(job.job_id)
    assert completed_job is not None
    if completed_job.status != "succeeded":
        raise AssertionError(completed_job.error_message)
    assert completed_job.status == "succeeded"
    assert completed_job.result_json == '{"deleted": true, "project_id": "study-a"}'
    assert project_service.projects.get(project.project_id) is None


def test_archive_project_job_keeps_its_own_job_record(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / "instance")
    archive_dir = tmp_path / "archives"
    db = StateDB(instance_paths.state_db_path)
    user = UserRepository(db).create(
        user_id="user-1",
        username="tester",
        display_name="Tester",
        password_hash="hash",
        is_active=True,
    )
    environment_service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    project_service = ProjectService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        jobs=JobRepository(db),
        environment_service=environment_service,
        runtime_service=DummyRuntimeService(),
    )
    project = project_service.create_project(
        project_id="study-a",
        created_by_user_id=user.user_id,
        python_version="3.11",
        custom_requirements_text="bulletjournal-editor==0.1.0\n",
        cpu_limit_millis=1000,
        memory_limit_bytes=1024,
        disk_soft_limit_bytes=None,
        gpu_enabled=False,
    )
    project_service.projects.update(
        project.project_id,
        status="stopped",
        install_status="ready",
    )
    project_root = instance_paths.project_root(project.project_id)
    init_project_root(project_root, project_id="study-a")
    (project_root / "pyproject.toml").write_text(
        "[project]\nname='study-a'\ndependencies=['bulletjournal-editor==0.1.0']\n",
        encoding="utf-8",
    )
    (project_root / "uv.lock").write_text("version = 1\n", encoding="utf-8")
    (project_root / "metadata" / "project.json").write_text(
        json.dumps({"schema_version": 2, "project_id": "study-a"}),
        encoding="utf-8",
    )
    sqlite3.connect(project_root / "metadata" / "state.db").close()

    from bulletjournal_controller.services.export_service import ExportService

    export_service = ExportService(
        instance_paths=instance_paths,
        projects=ProjectRepository(db),
        default_created_by_user_id="user-system",
        archive_dir=str(archive_dir),
        archive_encryption_key="archive-secret",
    )

    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    service.bind_services(
        project_service=project_service,
        export_service=export_service,
        runtime_service=DummyRuntimeService(),
        system_user_id="user-system",
    )

    job = service.queue_job(
        job_type="archive_project",
        requested_by_user_id=user.user_id,
        payload={"project_id": project.project_id},
        project_id=project.project_id,
        reject_on_conflict=False,
    )

    service._run_job(job)

    completed_job = service.get_job(job.job_id)
    assert completed_job is not None
    assert completed_job.status == "succeeded"
    assert project_service.projects.get(project.project_id) is None
    assert (archive_dir / "study-a.zip.enc").is_file()
