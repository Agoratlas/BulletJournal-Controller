# Architecture

`BulletJournal-Controller` is a single-host control plane for many isolated `BulletJournal` project runtimes.

## Layers

- `api/` exposes HTTP routes, authentication dependencies, and proxy transport.
- `services/` owns business logic and orchestration.
- `domain/` defines enums, validation rules, and record models.
- `storage/` manages the instance filesystem, SQLite migrations, and repositories.
- `runtime/` builds Docker and installer invocations.
- `web/` is the editable frontend workspace.
- `src/bulletjournal_controller/_web/` is the bundled production web payload shipped with the Python package.

## Runtime Shape

- one controller process manages one instance root
- one running project maps to one Docker container
- one background worker thread serializes jobs globally
- one reconciler loop periodically polls running projects for idle shutdown eligibility

## Startup Flow

1. Load and validate environment configuration.
2. Load and validate `config/instance.json`.
3. Ensure `metadata/state.db` exists and apply migrations.
4. Mark interrupted jobs as `aborted_on_restart`.
5. Start the job worker and idle reconciler.
6. Expose API routes, web UI routes, and project proxy routes.

## State Ownership

- controller metadata lives in SQLite under `metadata/state.db`
- managed project content lives on disk under `projects/<project_id>/`
- environment definition is owned by generated `pyproject.toml` and `uv.lock`
- runtime activity semantics come from BulletJournal's controller-facing status endpoint
