from __future__ import annotations

from pathlib import Path

from bulletjournal_controller.services.job_service import JobService
from bulletjournal_controller.storage import JobRepository, StateDB, UserRepository, init_instance_root


def test_job_log_prefixes_each_line_with_timestamp(tmp_path: Path) -> None:
    log_path = tmp_path / 'job.log'
    JobService._log(log_path, 'first line\nsecond line')
    lines = log_path.read_text(encoding='utf-8').splitlines()
    assert len(lines) == 2
    assert lines[0].endswith(' first line')
    assert lines[1].endswith(' second line')
    assert 'T' in lines[0].split(' ', 1)[0]
    assert 'T' in lines[1].split(' ', 1)[0]


def test_job_log_filename_is_prefixed_with_iso_timestamp(tmp_path: Path) -> None:
    instance_paths = init_instance_root(tmp_path / 'instance')
    db = StateDB(instance_paths.state_db_path)
    UserRepository(db).create(
        user_id='user-1',
        username='tester',
        display_name='Tester',
        password_hash='hash',
        is_active=True,
    )
    service = JobService(instance_paths=instance_paths, jobs=JobRepository(db))
    job = service.queue_job(
        job_type='start_project',
        requested_by_user_id='user-1',
        payload={'project_id': 'study-a'},
        project_id='study-a',
        reject_on_conflict=False,
    )
    filename = Path(job.log_path).name
    assert filename.endswith(f'__{job.job_id}.log')
    assert 'T' in filename.split('__', 1)[0]
