from __future__ import annotations

from bulletjournal_controller.api.proxy import _READ_TOOLS, _RUN_TOOLS, _WRITE_TOOLS, _mcp_scope


def test_mcp_scope_map_matches_the_shipped_runtime_tool_contract() -> None:
    assert _READ_TOOLS == {
        'list_templates',
        'get_template',
        'get_project_state',
        'get_run',
        'wait_for_run',
    }
    assert _WRITE_TOOLS == {'apply_graph_changes', 'set_constant_value'}
    assert _RUN_TOOLS == {'start_run', 'cancel_run'}


def test_mcp_scope_map_rejects_deferred_tools() -> None:
    payload = {'method': 'tools/call', 'params': {'name': 'get_artifact_preview'}}

    assert _mcp_scope(payload) is None
