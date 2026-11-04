from __future__ import annotations

import contextlib
import json
import os
import shutil
import threading
from pathlib import Path

from fastapi import HTTPException

from bulletjournal_controller.utils import parse_iso8601, utc_now


class ExportDownloads:
    """Temporary, immutable job artifacts; expiry is enforced even before cleanup."""

    def __init__(self, *, instance_paths, jobs):
        self.instance_paths = instance_paths
        self.jobs = jobs
        self._lock = threading.RLock()
        self._stop = threading.Event()
        self._thread: threading.Thread | None = None

    @property
    def root(self) -> Path:
        return self.instance_paths.exports_dir

    def create(self, *, job, project, mode, export_service):
        directory = self.root / job.job_id
        directory.mkdir(parents=True, exist_ok=False)
        partial = directory / 'partial.zip'
        try:
            export_service.export_project(project=project, archive_path=partial, mode=mode)
            target = directory / 'archive.zip'
            os.replace(partial, target)
            return {
                'project_id': project.project_id,
                'download': {
                    'filename': export_service.download_filename(project_id=project.project_id, mode=mode),
                    'size_bytes': target.stat().st_size,
                },
            }
        except Exception:
            shutil.rmtree(directory)
            raise

    def metadata(self, job):
        if job.job_type != 'export_project':
            return None
        result = {}
        with contextlib.suppress(ValueError, TypeError):
            parsed = json.loads(job.result_json or '{}')
            if isinstance(parsed, dict) and isinstance(parsed.get('download'), dict):
                result = parsed['download']
        reason = None
        if job.status in {'queued', 'running'}:
            reason = 'not_ready'
        elif job.status != 'succeeded':
            reason = 'job_failed'
        else:
            try:
                expires = parse_iso8601(result.get('expires_at'))
                if expires is None or expires.tzinfo is None:
                    reason = 'missing'
                elif utc_now() >= expires:
                    reason = 'expired'
                elif not (self.root / job.job_id / 'archive.zip').is_file():
                    reason = 'missing'
            except (ValueError, TypeError, AttributeError):
                reason = 'missing'
        return {
            'available': reason is None,
            'url': f'/api/v1/jobs/{job.job_id}/download' if reason is None else None,
            'filename': result.get('filename'),
            'size_bytes': result.get('size_bytes'),
            'expires_at': result.get('expires_at'),
            'unavailable_reason': reason,
        }

    def open_download(self, job):
        # Open under the cleanup lock: an admitted stream retains its open file
        # descriptor and may finish even if the pathname is unlinked at expiry.
        with self._lock:
            metadata = self.metadata(job)
            if metadata is None:
                raise HTTPException(404, 'This job has no export download.')
            if not metadata['available']:
                reason = metadata['unavailable_reason']
                raise HTTPException(410 if reason == 'expired' else 404, f'Export unavailable: {reason}.')
            try:
                handle = (self.root / job.job_id / 'archive.zip').open('rb')
            except FileNotFoundError as exc:
                raise HTTPException(404, 'Export file is unavailable.') from exc
            return handle, metadata

    def cleanup(self):
        with self._lock:
            for directory in self.root.glob('job-*'):
                if not directory.is_dir() or directory.is_symlink():
                    continue
                job = self.jobs.get(directory.name)
                if job is not None and job.status in {'queued', 'running'}:
                    continue
                metadata = self.metadata(job) if job is not None else None
                if metadata is None or not metadata['available']:
                    # Retention remains enforced if deletion fails; retry on
                    # the next sweep rather than preventing controller startup.
                    with contextlib.suppress(OSError):
                        shutil.rmtree(directory)

    def start(self):
        if self._thread is not None:
            return
        self.cleanup()
        self._stop.clear()
        self._thread = threading.Thread(target=self._run, name='export-cleanup', daemon=True)
        self._thread.start()

    def stop(self):
        self._stop.set()
        if self._thread is not None:
            self._thread.join(timeout=2)
            self._thread = None

    def _run(self):
        while not self._stop.wait(60):
            with contextlib.suppress(OSError):
                self.cleanup()
