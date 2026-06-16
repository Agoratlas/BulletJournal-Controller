from __future__ import annotations

import asyncio
import threading
from typing import Any


class JobEventBroker:
    def __init__(self) -> None:
        self._subscribers: dict[
            asyncio.Queue[dict[str, Any] | None], asyncio.AbstractEventLoop
        ] = {}
        self._lock = threading.Lock()

    def publish(self, event: dict[str, Any]) -> None:
        with self._lock:
            subscribers = list(self._subscribers.items())
        for subscriber, loop in subscribers:
            try:
                loop.call_soon_threadsafe(self._safe_put, subscriber, event)
            except RuntimeError:
                continue

    async def subscribe(self) -> asyncio.Queue[dict[str, Any] | None]:
        loop = asyncio.get_running_loop()
        queue: asyncio.Queue[dict[str, Any] | None] = asyncio.Queue(maxsize=50)
        with self._lock:
            self._subscribers[queue] = loop
        return queue

    async def unsubscribe(self, subscriber: asyncio.Queue[dict[str, Any] | None]) -> None:
        with self._lock:
            self._subscribers.pop(subscriber, None)

    def close(self) -> None:
        with self._lock:
            subscribers = list(self._subscribers.items())
            self._subscribers.clear()
        for subscriber, loop in subscribers:
            try:
                loop.call_soon_threadsafe(self._safe_put, subscriber, None)
            except RuntimeError:
                continue

    @staticmethod
    def _safe_put(
        subscriber: asyncio.Queue[dict[str, Any] | None],
        event: dict[str, Any] | None,
    ) -> None:
        try:
            subscriber.put_nowait(event)
        except asyncio.QueueFull:
            return
