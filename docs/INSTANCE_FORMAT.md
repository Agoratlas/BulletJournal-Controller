# Instance Format

Every deployment manages one instance root.

```text
instance_root/
|- config/
|  `- instance.json
|  `- runtime/
|     |- .env
|     |- runtime.json
|     |- default-dependencies.txt
|     |- runtime/
|     |  `- Dockerfile
|     `- ssh/
|- metadata/
|  `- state.db
|- projects/
|- exports/
|- logs/
|  |- controller.log
|  `- jobs/
`- runtime/
   `- cache/
```

## `config/instance.json`

Canonical non-secret instance configuration:

```json
{
  "schema_version": 2,
  "instance_id": "main",
  "title": "BulletJournal Controller",
  "project_root_dir": "projects",
  "exports_dir": "exports",
  "idle_timeout_seconds": 86400,
  "docker_runtime_image": "ghcr.io/agoratlas/bulletjournal-runtime:py311",
  "docker_network_mode": "bridge",
  "default_python_version": "3.11",
  "default_cpu_limit_cpus": 2,
  "default_memory_limit_gb": 8,
  "default_disk_soft_limit_gb": 50,
  "default_dependencies_file": "/etc/bulletjournal/default-dependencies.txt"
}
```

Secrets are never written into this file.

- `default_cpu_limit_cpus`, `default_memory_limit_gb`, and `default_disk_soft_limit_gb` are optional
- these values are used to prefill the create-project form only
- users can still edit or clear the fields before creating a project
- disk remains a UI-only soft threshold and is not enforced as a container quota
- the managed BulletJournal dependency defaults to the latest available release
- to pin a different BulletJournal source or version, add it to `config/runtime/default-dependencies.txt`

## `config/runtime/.env`

Optional per-instance runtime environment variables.

- loaded into installer containers and project runtime containers via Docker `--env-file`
- available to BulletJournal runtime code in Marimo and orchestrated execution paths
- intended for per-instance secrets or service configuration that should not live in git

## `config/runtime/runtime.json`

Optional bind mounts can be declared with `additional_mounts`:

```json
{
  "schema_version": 2,
  "additional_mounts": [
    {
      "source": "mounts/service-account.json",
      "target": "/opt/bulletjournal/service-account.json",
      "read_only": true
    }
  ]
}
```

- `source` may be absolute or relative to `config/runtime/`
- `target` must be an absolute path inside the container
- `read_only` defaults to `false` when omitted
