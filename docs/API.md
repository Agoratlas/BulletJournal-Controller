# API

Base API prefix: `/api/v1`

## Session

- `POST /session/login`
- `POST /session/logout`
- `GET /session/current`
- `GET /users/assignable`

## System

- `GET /system/info`

## Projects

- `GET /projects`
- `POST /projects`
- `GET /projects/{project_id}`
- `POST /projects/{project_id}/export`
- `PATCH /projects/{project_id}`
- `DELETE /projects/{project_id}`
- `POST /projects/{project_id}/archive`
- `POST /projects/{project_id}/start`
- `POST /projects/{project_id}/stop`
- `POST /projects/{project_id}/reinstall-environment`
- `POST /projects/{project_id}/update-environment`
- `POST /projects/{project_id}/limits`
- `GET /projects/{project_id}/roles`
- `PUT /projects/{project_id}/roles`

## Jobs

- `GET /jobs/{job_id}`
- `GET /jobs/{job_id}/download`

## Project Exports

`POST /projects/{project_id}/export` accepts `{"mode":"full"}` (`code_only`,
`code_and_constants`, `code_and_data`, `snapshot`, or `full`; default `full`) and returns `202` with a `job`.
ZIP generation runs in the existing serialized job worker. The previous
synchronous `GET /projects/{project_id}/export` is replaced by this workflow.

`snapshot` restores current source, graph/layout, dashboards, annotations, current
artifact/asset versions and their object blobs, notebook freshness and latest
status/error summaries, and the environment definition (`pyproject.toml` and
`uv.lock`). It excludes historical versions/runs, checkpoints, deleted-node
recovery data, temporary files, and execution logs.

The project UI offers **Code and constants** (`code_and_constants`) and
**Full snapshot** (`snapshot`). Code and constants includes current constant values
up to 1,000,000 bytes each and excludes other stored data and execution history.

Export jobs in project history, job GET responses, and job status events include
a `download` object with `available`, `url`, `filename`, `size_bytes`, `expires_at`,
and `unavailable_reason`. A successful export is downloadable for 24 hours after
completion. Expired jobs remain successful, but their download is unavailable.
Reasons are `not_ready`, `job_failed`, `expired`, or `missing`.

`GET /jobs/{job_id}/download` streams the ZIP and requires current project-admin
access. It returns `410` for expired exports and `404` for other unavailable
downloads. Downloads do not regenerate archives or extend their lifetime.

## Misc

- `GET /healthz`
- `ALL /p/{project_id}/{path:path}`
- `WS /p/{project_id}/{path:path}`

## Notes

- all API routes except `/healthz` and login/logout shell assets require authentication
- mutating routes enforce same-origin checks when `BULLETJOURNAL_PUBLIC_ORIGIN` is configured
- project start/stop/environment/export/archive/delete operations are queued as serialized jobs
- project access is role-based: editors can view, use the editor, and start/stop; project admins also manage roles, limits, environments, exports, archives, and deletion
- callers without a project role receive `404` for project, job, and editor routes so hidden projects are not disclosed
