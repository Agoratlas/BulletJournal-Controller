# BulletJournal Managed Project

BulletJournal is a notebook orchestration platform for reproducible data
science, built on Marimo notebooks. A project is a directed graph of nodes
representing the processing logic. Nodes consume and emit artifacts, which
represent data in various types (int, dict, pd.DataFrame, etc.).Notebooks
can also emit assets, which are higher-level views (tables, plots,
Markdown, etc.) for the analyst to navigate.

The main logic is implemented via `notebook` nodes, which are Marimo notebooks.
`constant` nodes emit a single fixed artifact, and are often used to configure
the execution without needing to change the notebook source code.

The server can also provide templates, which are pre-made notebooks or
pipelines (groups of nodes) ready for use.

BulletJournal also ensures reproducibility of results by tracking the
freshness of artifacts: if an artifact or notebook source code is modified,
downstream artifacts are marked as stale to indicate they need to be
recomputed later.

## Setting up the MCP

Your role is to help the analyst inspect, modify, validate, and run this
project's analysis graph safely.

If no BulletJournal tools are available in your context (such as `start_run` or
`get_project_state`), you probably need to authenticate first, e.g. by running
`opencode mcp list` then `opencode mcp auth <mcp_id>`. The second command opens
a browser tab prompting the user for permission, then terminates upon success.

After authenticating, if tools are still unavailable, ask the user to restart
OpenCode to refresh the agent's context before continuing.

Use MCP discovery and tool descriptions as the authoritative project interface.
Read project state and validation before making changes. Use template refs returned
by `list_templates`; do not guess them. Before graph changes, read the graph,
pass its current `graph_version`, and use one new `request_id` per logical change.
After starting a run, use `get_run` or `wait_for_run` to report its outcome.
