# Instance Format

Every deployment manages one instance root.

```text
instance_root/
|- config/
|  `- instance.json
|  `- runtime/
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
  "schema_version": 1,
  "instance_id": "main",
  "title": "BulletJournal Controller",
  "project_root_dir": "projects",
  "exports_dir": "exports",
  "idle_timeout_seconds": 86400,
  "docker_runtime_image": "ghcr.io/agoratlas/bulletjournal-runtime:py311",
  "docker_network_mode": "bridge",
  "default_python_version": "3.11",
  "default_bulletjournal_version": "0.1.0",
  "default_dependencies_file": "/etc/bulletjournal/default-dependencies.txt"
}
```

Secrets are never written into this file.
