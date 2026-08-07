# Operations

## Runtime Backend

The MVP runtime backend is Docker only.

The runtime image is built locally from a configured Dockerfile.

- default Dockerfile: `src/bulletjournal_controller/defaults/runtime/Dockerfile`
- instance-local override root: `instance_root/config/runtime/`
- build CLI: `bulletjournal-controller build-runtime <instance_root>`
- `build-runtime` does not require server-only environment variables, including
  `BULLETJOURNAL_PROMETHEUS_API_KEY`.

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

- deleting a project triggers container cleanup for that project name
- archiving a project creates a full BulletJournal export before deleting the project and container from the instance
- archive targets default to `instance_root/archives/` and can be overridden with `BULLETJOURNAL_ARCHIVE_DIR`
- if `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY` is set, the controller encrypts archives with `openssl enc -aes-256-cbc -pbkdf2`
- archive jobs refuse to overwrite an existing `<project_id>.zip` or `<project_id>.zip.enc` target
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

## Prometheus Metrics

Prometheus exposition is disabled by default. Set `prometheus_metrics_mode` in
`config/instance.json` to one of:

- `off`: `/metrics` returns 404.
- `unauthenticated`: `/metrics` is available without application authentication.
- `authenticated`: `/metrics` requires the `X-API-Key` header to match
  `BULLETJOURNAL_PROMETHEUS_API_KEY`.

`BULLETJOURNAL_PROMETHEUS_API_KEY` is required when starting a controller whose
metrics mode is `authenticated`; offline commands such as `build-runtime` do
not require it.

Keep `/metrics` on a trusted network even when API-key authentication is
enabled. The endpoint exports normalized endpoint latencies across projects,
project-level latency aggregates, and controller/project resource gauges. When
metrics are enabled, the controller refreshes system and project resources in a
background sampler every 15 seconds, independently of the web UI and scrape
requests. Serving `/metrics` itself performs no Docker call or filesystem scan.
