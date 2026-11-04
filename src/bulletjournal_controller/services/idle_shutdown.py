from __future__ import annotations

from datetime import UTC, datetime

from bulletjournal_controller.utils import parse_iso8601


def effective_idle_since(project, status_payload: dict[str, object]) -> datetime | None:
    if status_payload.get('idle_shutdown_eligible') is not True:
        return None
    try:
        raw = status_payload.get('idle_shutdown_eligible_since')
        reported = parse_iso8601(raw if isinstance(raw, str) else None)
        started = parse_iso8601(getattr(project, 'runtime_started_at', None))
    except (ValueError, TypeError):
        return None
    if reported is None:
        return None
    reported = reported.replace(tzinfo=UTC) if reported.tzinfo is None else reported
    if started is not None:
        started = started.replace(tzinfo=UTC) if started.tzinfo is None else started
        reported = max(reported, started)
    return reported
