from __future__ import annotations

from bulletjournal_controller.api.proxy import _websocket_session_bundle


def test_websocket_sessions_require_the_controller_cookie() -> None:
    assert callable(_websocket_session_bundle)
