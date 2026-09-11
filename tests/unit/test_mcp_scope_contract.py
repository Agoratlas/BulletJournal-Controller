from __future__ import annotations

from bulletjournal_controller.api.proxy import _READ_TOOLS, _RUN_TOOLS, _WRITE_TOOLS, _mcp_scope


def test_mcp_scope_map_matches_the_shipped_runtime_tool_contract() -> None:
    assert {
        'list_templates',
        'get_template',
        'get_project_state',
        'get_run',
        'wait_for_run',
        'get_notebook_source',
        'get_execution_logs',
        'get_dashboard',
    } == _READ_TOOLS
    assert {
        'apply_graph_changes',
        'set_constant_value',
        'update_notebook_source',
        'patch_notebook_source',
        'create_dashboard',
        'update_dashboard',
    } == _WRITE_TOOLS
    assert {'start_run', 'cancel_run'} == _RUN_TOOLS


def test_mcp_scope_map_rejects_deferred_tools() -> None:
    payload = {'method': 'tools/call', 'params': {'name': 'get_artifact_preview'}}

    assert _mcp_scope(payload) is None
