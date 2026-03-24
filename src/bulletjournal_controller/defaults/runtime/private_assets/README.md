Use this directory for private runtime files that should be mounted into every project container.

Typical contents include `.env` files, service account credentials, or other local secrets that should not live in git.

This directory is mounted read-only at `/opt/bulletjournal/private_assets` inside the runtime container.
