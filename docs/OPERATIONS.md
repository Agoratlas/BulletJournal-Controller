# Operations

## Runtime Backend

The MVP runtime backend is Docker only.

The runtime image is built locally from a configured Dockerfile.

- default Dockerfile: `src/bulletjournal_controller/defaults/runtime/Dockerfile`
- instance-local override root: `instance_root/config/runtime/`
- build CLI: `bulletjournal-controller build-runtime <instance_root>`
- Offline administrative commands do not require server-only environment
  variables, including `BULLETJOURNAL_PROMETHEUS_API_KEY`.

Each project container:

- uses the locally built image name from `runtime.json`
- is named with the pattern `bulletjournal-<instance_id>-<project_id>`
- mounts the project root at `/project`
- exposes the BulletJournal server on internal port `8765`
- receives labels for project id and controller ownership
- receives an instance label for targeted cleanup
- publishes to `127.0.0.1` on a random host port

## Private Dependencies

Installer and runtime containers can mount operator-provided config assets:

- environment variables from configured `env_file` are loaded with Docker `--env-file`
- SSH material from configured `ssh_dir` is mounted read-only at `/home/bulletjournal/.ssh`
- entries from configured `additional_mounts` are passed through as Docker bind mounts

This keeps deploy keys and private configuration out of the repository.

Changes to `instance_root/config/runtime/` are picked up on subsequent operations for newly created projects and future installs; existing already-generated project files are not rewritten automatically.

## Cleanup

The project's export menu offers **Code and constants** (`code_and_constants`)
and **Full snapshot** (`snapshot`). Full snapshot saves current code, data heads,
dashboards, and status summaries without historical versions or execution logs.
Code and constants saves code and current constant values up to 1,000,000 bytes each.
The offline command supports `code_only`, `code_and_data`, `snapshot`, and `full`:

```bash
bulletjournal-controller export-project <instance_root> <project_id> snapshot.zip --mode snapshot
```

`full` is the default; `--without-artifacts` remains a shorthand for `code_only`.

- deleting a project triggers container cleanup for that project name
- archiving a project creates a snapshot before deleting the project and container from the instance; archives omit local virtual environments, historical versions, unreferenced objects, checkpoints, and execution logs
- archive targets default to `instance_root/archives/` and can be overridden with `BULLETJOURNAL_ARCHIVE_DIR`
- if `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY` is set, the controller encrypts archives with `openssl enc -aes-256-cbc -pbkdf2`
- archive jobs refuse to overwrite an existing `<project_id>.zip` or `<project_id>.zip.enc` target
- downloadable project exports use unique temporary directories under `instance_root/exports/<job_id>/`
- export downloads expire 24 hours after successful completion; expired ZIPs are removed at startup and by a cleanup worker every minute
- export cleanup leaves permanent archives and explicitly written CLI export files untouched
- `bulletjournal-controller cleanup-instance <instance_root>` removes all containers labeled for the instance
- when manually deleting an instance directory, run `cleanup-instance` first so no orphaned runtime containers remain

## Jobs

- jobs are written to SQLite and plain-text log files
- one worker thread serializes jobs globally
- restart recovery marks `queued` and `running` jobs as `aborted_on_restart`

## Idle Shutdown

- the reconciler polls running projects every five minutes
- it reads BulletJournal controller status
- it stops projects only when BulletJournal reports idle shutdown is safe
- each newly started project gets a fresh idle timeout, even when its last edit or run predates the container start
- queued idle shutdowns recheck current eligibility before stopping the runtime

## Project Disk Accounting

Project details include Python env, uv cache, Objects, Database, and Others.
Database includes `metadata/state.db` and SQLite WAL/SHM/journal sidecars.
Others includes remaining project files, controller job logs, and the container
writable layer. The dashboard continues showing aggregate disk usage only.

File sizes are deduplicated by filesystem device and inode. Files shared between
the virtualenv and uv cache are attributed to Python env; uv cache reports only
its additional files. Symlinks count their own length rather than their targets.
These are deduplicated file lengths, not filesystem-specific allocated-block or
copy-on-write extent measurements.

On the first startup after this upgrade, projects without current-version disk
accounting are scanned synchronously before background workers start. Both
runtime totals, hardlink identities, and an accounting version are saved atomically
in controller SQLite. The large hardlink index is stored separately from ordinary
project records and loaded once into the metrics cache, so project-list requests
do not repeatedly load it. Completed projects are skipped on subsequent starts; an
interrupted backfill resumes with only unfinished projects. Unreadable runtime
directories fail the scan rather than persisting an incorrect zero result.

Environment installs/reinstalls refresh this snapshot. Routine collection scans
the remaining files and reuses the runtime snapshot, preserving the existing
avoidance of frequent virtualenv/cache scans.

## Prometheus Metrics

Prometheus exposition is disabled by default. Set `prometheus_metrics_mode` in
`config/instance.json` to one of:

- `off`: `/metrics` returns 404.
- `unauthenticated`: `/metrics` is available without application authentication.
- `authenticated`: `/metrics` requires the `X-API-Key` header to match
  `BULLETJOURNAL_PROMETHEUS_API_KEY`.

`BULLETJOURNAL_PROMETHEUS_API_KEY` is required when starting a controller whose
metrics mode is `authenticated`; offline commands such as `build-runtime` do
not require it. This also applies to `create-user`, `cleanup-instance`,
`export-project`, `import-project`, and `reconcile`.

Keep `/metrics` on a trusted network even when API-key authentication is
enabled. The endpoint exports route metrics through
`bulletjournal_controller_requests_per_route_*`, with `route_type` set to
`controller` or `project`, project-level latency aggregates through
`bulletjournal_controller_requests_per_project_*`, and controller/project
resource gauges. Disk categories are exposed as
`bulletjournal_controller_project_disk_usage_bytes{project_id,category}`, with
categories `python_env`, `uv_cache`, `objects`, `database`, and `others`; their sum
matches `bulletjournal_controller_project_disk_used_bytes`.
The controller refreshes system and
project resources in a background sampler every 5 seconds, independently of
the web UI and scrape requests. Serving `/metrics` itself performs no Docker
call or filesystem scan.
# MCP Setup

Set `BULLETJOURNAL_PUBLIC_ORIGIN` to the canonical HTTPS Controller origin before
using OAuth or generating an OpenCode MCP setup archive. Instance initialization
seeds `<instance-root>/config/AGENTS.md` only when it is absent. Operators may
edit this file, but it is included in every authorized project setup download;
never put tokens, cookies, API keys, or other secrets in it.

Project viewers can download the OpenCode archive from the MCP setup menu. Extract
it into its own directory, add that directory through OpenCode's Add Project flow,
and complete OAuth when OpenCode first connects. Only OpenCode setup is shipped.

Managed MCP projects require `BULLETJOURNAL_ENABLE_MCP=true` in the instance
runtime `.env`. It is seeded for new instances; after changing it, restart each
affected project so its container receives the updated environment.
