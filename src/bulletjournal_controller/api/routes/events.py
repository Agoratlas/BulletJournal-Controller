from __future__ import annotations

import asyncio
import json
from typing import AsyncIterator

from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse


router = APIRouter(prefix="/events", tags=["events"])


def _sse_payload(*, event: str, data: dict[str, object]) -> bytes:
    return f"event: {event}\ndata: {json.dumps(data, separators=(',', ':'))}\n\n".encode("utf-8")


@router.get("/jobs")
async def stream_job_events(request: Request):
    broker = request.app.state.container.job_event_broker
    subscriber = await broker.subscribe()

    async def event_stream() -> AsyncIterator[bytes]:
        try:
            yield b": connected\n\n"
            while True:
                if await request.is_disconnected():
                    break
                try:
                    event = await asyncio.wait_for(subscriber.get(), timeout=15.0)
                except asyncio.TimeoutError:
                    yield b": heartbeat\n\n"
                    continue
                if event is None:
                    break
                event_type = str(event.get("type") or "job.updated")
                payload = event if "type" not in event else {key: value for key, value in event.items() if key != "type"}
                yield _sse_payload(event=event_type, data=payload)
        finally:
            await broker.unsubscribe(subscriber)

    return StreamingResponse(
        event_stream(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )
