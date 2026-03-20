from __future__ import annotations

from bulletjournal_controller.api.proxy import _is_public_editor_manifest_path


def test_only_editor_manifest_path_is_allowlisted() -> None:
    assert _is_public_editor_manifest_path('api/v1/edit/sessions/abc/manifest.json') is True
    assert _is_public_editor_manifest_path('api/v1/edit/sessions/abc/assets/app.js') is False
    assert _is_public_editor_manifest_path('api/v1/projects') is False
