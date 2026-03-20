# Security

## Authentication

- password hashing uses Argon2id
- session cookies are `HttpOnly` and `SameSite=Lax`
- cookie `Secure` behavior is driven by `BULLETJOURNAL_COOKIE_SECURE`
- sessions expire after seven days of inactivity

## CSRF and Origin Checks

- mutating requests validate `Origin` or `Referer` against `BULLETJOURNAL_PUBLIC_ORIGIN` when configured

## Secret Handling

- secrets are environment-only
- `config/instance.json` is explicitly non-secret
- per-project private package access is passed through runtime and installer containers rather than stored in metadata
