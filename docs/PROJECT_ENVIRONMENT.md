# Project Environment

The controller owns managed project environments.

## Authoritative Inputs

- generated `pyproject.toml`
- generated `uv.lock`

## Configurable Defaults

- default dependency text can come from the built-in defaults bundle or the instance-local runtime config directory
- the instance-local runtime config directory can also provide a runtime Dockerfile, SSH keys, private assets, and a local BulletJournal source checkout
- when `local_bulletjournal_source` is configured, managed projects use a `[tool.uv.sources]` entry pointing to the mounted local source inside the container

The controller re-reads these defaults when creating new projects, so changing `instance_root/config/runtime/default-dependencies.txt` or `instance_root/config/runtime/runtime.json` affects future project creation without a restart.

## Merge Rules

- default dependency lines come from the instance default dependency file
- project-specific dependency lines are stored in controller metadata
- dependency identity is normalized by package name
- custom lines override default lines deterministically

## Install Sequence

1. rewrite `pyproject.toml`
2. run `uv lock`
3. run `uv sync --locked` into `.runtime/venv`
4. compute and persist the lock SHA-256
5. optionally run `bulletjournal mark-environment-changed /project --reason <text>`
6. restart the runtime when requested and previously running
