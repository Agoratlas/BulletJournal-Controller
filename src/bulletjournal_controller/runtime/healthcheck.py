from __future__ import annotations

import time


def wait_for_project_health(*, host_port: int, timeout_seconds: float = 90.0) -> bool:
    import httpx

    deadline = time.monotonic() + timeout_seconds
    url = f'http://127.0.0.1:{host_port}/healthz'
    while time.monotonic() < deadline:
        try:
            response = httpx.get(url, timeout=5.0)
            if response.status_code == 200:
                return True
        except httpx.HTTPError:
            pass
        time.sleep(1.0)
    return False


def fetch_controller_status(*, host_port: int, project_id: str, controller_token: str | None = None) -> dict[str, object]:
    import httpx

    headers = {'authorization': f'Bearer {controller_token}'} if controller_token else None
    response = httpx.get(
        f'http://127.0.0.1:{host_port}/p/{project_id}/api/v1/controller/status',
        timeout=10.0,
        headers=headers,
    )
    response.raise_for_status()
    payload = response.json()
    if not isinstance(payload, dict):
        raise ValueError('Controller status payload must be an object.')
    return payload
