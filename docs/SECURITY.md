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
- runtime controller access now uses a unique per-project `BULLETJOURNAL_CONTROLLER_TOKEN` instead of reusing the global session secret
- project-scoped controller tokens are stored in controller metadata and are never exposed by project API responses
- `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY` is consumed only by the controller process for archive jobs and should not be written to instance config files
- encrypted archive jobs use OpenSSL with PBKDF2 and salt rather than storing plaintext archives when an archive key is configured

To decrypt an archived project created with `BULLETJOURNAL_ARCHIVE_ENCRYPTION_KEY`, use the same key with OpenSSL:

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -in project-id.zip.enc -out project-id.zip
```
