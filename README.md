# BulletJournal-Controller

`BulletJournal-Controller` is the multi-project control plane for managed `BulletJournal` runtimes.

It provides:

- authenticated access for multiple users
- project registration and on-disk provisioning
- environment generation from controller-owned `pyproject.toml` and `uv.lock`
- serialized jobs for create/start/stop/install/export/import workflows
- Docker-backed runtime isolation, one container per project
- authenticated reverse proxying under `/p/{project_id}/...`
- zip export and import for managed projects
- project archiving with optional OpenSSL encryption

## Runtime Configuration

The controller now expects a locally built runtime image rather than a hard-coded remote registry image.

- built-in defaults live under `src/bulletjournal_controller/defaults/`
- each instance gets its own editable runtime config scaffold under `instance_root/config/runtime/`
- deploy keys and other private assets live in that instance-local runtime config directory, not in the repo
- `additional_mounts` can bind-mount either individual files or whole directories into installer and runtime containers

Example instance-local runtime config layout:

```text
instance_root/config/runtime/
|- .env
|- runtime.json
|- default-dependencies.txt
|- runtime/
|  `- Dockerfile
|- ssh/
|  |- config
|  |- known_hosts
|  `- id_ed25519
`- mounts/
   `- shared-config/
```

Minimal `runtime.json`:

```json
{
  "schema_version": 2,
  "runtime_image_name": "bulletjournal-runtime:local",
  "runtime_dockerfile": "runtime/Dockerfile",
  "runtime_build_context": ".",
  "default_dependencies_file": "default-dependencies.txt",
  "env_file": ".env",
  "ssh_dir": "ssh",
  "additional_mounts": [
    {
      "source": "mounts/shared-config",
      "target": "/opt/bulletjournal/shared-config",
      "read_only": true
    }
  ]
}
```

The controller reads this directory each time it needs runtime defaults, so edits there take effect for newly created projects without restarting the controller.

The controller mounts `ssh_dir` read-only at `/home/bulletjournal/.ssh` for installer and runtime containers and runs those containers as the same uid/gid as the host controller process, so private GitHub dependencies can be resolved without root-owned SSH material.

If `additional_mounts` is configured, each entry adds a Docker bind mount for installer and runtime containers. `source` may point to either a file or a directory. Relative `source` paths are resolved against `instance_root/config/runtime/`, and `target` must be an absolute container path.

If `env_file` is configured, the controller passes it to Docker with `--env-file` for both install jobs and runtime containers, so the variables are available to Marimo sessions and orchestrated runs.

## Repository Layout

The repository mirrors the structure used by `BulletJournal`.
The source repository path remains `Agoratlas/BulletJournal`.

```text
src/bulletjournal_controller/
  api/
  cli/
  domain/
  runtime/
  services/
  storage/
  _web/
tests/
web/
docs/
```

## Quick Start

1. Create and activate a Python 3.11+ environment.
2. Install the package in editable mode:

```bash
pip install -e ".[dev]"
```

3. Create an instance root:

```bash
bulletjournal-controller init-instance ./instance
```

4. Set required secrets:

```bash
export BULLETJOURNAL_SESSION_SECRET="change-me"
export BULLETJOURNAL_COOKIE_SECURE=false
```

Optional archive settings:

```bash
export BULLETJOURNAL_ARCHIVE_DIR="/absolute/path/to/project-archives"
export BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY="change-this-too"
```

- `BULLETJOURNAL_ARCHIVE_DIR` must be an absolute path when set
- when `BULLETJOURNAL_ARCHIVE_DIR` is unset, archived projects are written to `instance_root/archives/`
- when `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY` is set, archive jobs write encrypted files as `<project_id>.zip.enc`
- when `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY` is unset, archive jobs write plaintext files as `<project_id>.zip`
- archive creation aborts if the target filename already exists

5. Create an initial user:

```bash
bulletjournal-controller create-user ./instance --username admin --display-name Admin
```

To create a server administrator, add `--server-admin`. Server administrators bypass project-specific grants; ordinary project access is managed as project-admin or editor roles in the controller UI.

For automation, you can also provide a precomputed Argon2 hash instead of a plaintext password:

```bash
bulletjournal-controller create-user ./instance --username admin --display-name Admin --password-hash '$argon2id$...'
```

Or read the hash from standard input and update an existing user in place during password rotation:

```bash
printf '%s' '$argon2id$...' | bulletjournal-controller create-user ./instance --username admin --display-name Admin --password-hash-stdin --update
```

6. Build the local runtime image:

```bash
bulletjournal-controller build-runtime ./instance
```

7. Start the server:

```bash
bulletjournal-controller start ./instance
```

## Container Cleanup

- project runtime containers are now namespaced by instance id, reducing cross-instance naming conflicts
- deleting a project attempts to remove its managed container even if controller metadata says the project is stopped
- archiving a project first creates a full project export, then removes the project metadata, on-disk project root, and managed container
- you can remove all controller-managed containers for one instance with:

```bash
bulletjournal-controller cleanup-instance ./instance
```

## Current Scope

This implementation establishes the MVP controller structure and core workflows described in `REQS_BULLETJOURNAL_CONTROLLER.md`:

- instance root initialization and validation
- SQLite metadata schema and repositories
- Argon2id-based authentication and cookie sessions
- project metadata APIs and environment generation
- background job queue with restart recovery
- Docker adapter and installer command construction
- zip export and import services
- minimal bundled web shell and separate `web/` workspace scaffold

## Documentation

- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/INSTANCE_FORMAT.md`
- `docs/PROJECT_ENVIRONMENT.md`
- `docs/OPERATIONS.md`
- `docs/TROUBLESHOOTING.md`
- `docs/SECURITY.md`
