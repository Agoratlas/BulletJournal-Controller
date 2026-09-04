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
- `GET /projects/{project_id}/export`
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

## Misc

- `GET /healthz`
- `ALL /p/{project_id}/{path:path}`
- `WS /p/{project_id}/{path:path}`

## Notes

- all API routes except `/healthz` and login/logout shell assets require authentication
- mutating routes enforce same-origin checks when `BULLETJOURNAL_PUBLIC_ORIGIN` is configured
- project start/stop/environment/archive/delete mutations are queued as serialized jobs
- project access is role-based: editors can view, use the editor, and start/stop; project admins also manage roles, limits, environments, exports, archives, and deletion
- callers without a project role receive `404` for project, job, and editor routes so hidden projects are not disclosed
