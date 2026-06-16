from __future__ import annotations

import asyncio

from bulletjournal_controller.services.job_events import JobEventBroker


def test_job_event_broker_delivers_published_events() -> None:
    async def scenario() -> None:
        broker = JobEventBroker()
        subscriber = await broker.subscribe()

        broker.publish({"job_id": "job-1", "status": "running"})

        assert await asyncio.wait_for(subscriber.get(), timeout=1.0) == {
            "job_id": "job-1",
            "status": "running",
        }
        await broker.unsubscribe(subscriber)

    asyncio.run(scenario())


def test_job_event_broker_close_notifies_subscribers() -> None:
    async def scenario() -> None:
        broker = JobEventBroker()
        subscriber = await broker.subscribe()

        broker.close()

        assert await asyncio.wait_for(subscriber.get(), timeout=1.0) is None

    asyncio.run(scenario())
