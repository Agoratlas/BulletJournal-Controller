Use this directory for SSH configuration needed by the runtime container.

Typical contents include deploy keys, `config`, and `known_hosts` entries for cloning private repositories or accessing other SSH-backed services.

This directory is mounted read-only at `/root/.ssh` inside the runtime container.
