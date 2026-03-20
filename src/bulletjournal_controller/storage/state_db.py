from __future__ import annotations

import sqlite3
from collections.abc import Iterator
from contextlib import contextmanager
from pathlib import Path

from bulletjournal_controller.config import DB_TIMEOUT_SECONDS
from bulletjournal_controller.domain.enums import JobStatus
from bulletjournal_controller.storage.migrations import MIGRATIONS
from bulletjournal_controller.utils import utc_now_iso


class StateDB:
    def __init__(self, path: Path):
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._initialize()

    def connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.path, timeout=DB_TIMEOUT_SECONDS)
        connection.row_factory = sqlite3.Row
        connection.execute('PRAGMA foreign_keys = ON')
        connection.execute('PRAGMA journal_mode = WAL')
        return connection

    @contextmanager
    def transaction(self) -> Iterator[sqlite3.Connection]:
        connection = self.connect()
        try:
            yield connection
            connection.commit()
        finally:
            connection.close()

    def _initialize(self) -> None:
        with self.transaction() as connection:
            table_exists = connection.execute(
                'SELECT 1 FROM sqlite_master WHERE type = ? AND name = ?',
                ('table', 'schema_migrations'),
            ).fetchone() is not None
            for name, sql in MIGRATIONS:
                if table_exists:
                    applied = connection.execute(
                        'SELECT 1 FROM schema_migrations WHERE name = ?',
                        (name,),
                    ).fetchone()
                    if applied is not None:
                        continue
                connection.executescript(sql)
                connection.execute(
                    'INSERT OR IGNORE INTO schema_migrations (name, applied_at) VALUES (?, ?)',
                    (name, utc_now_iso()),
                )
                table_exists = True

    def abort_inflight_jobs(self) -> None:
        with self.transaction() as connection:
            connection.execute(
                'UPDATE jobs SET status = ?, finished_at = ?, error_message = ? WHERE status IN (?, ?)',
                (
                    JobStatus.ABORTED_ON_RESTART.value,
                    utc_now_iso(),
                    'Controller restarted before job completion.',
                    JobStatus.QUEUED.value,
                    JobStatus.RUNNING.value,
                ),
            )
