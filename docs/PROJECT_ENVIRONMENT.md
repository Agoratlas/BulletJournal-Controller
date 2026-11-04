# Project Environment

The controller owns managed project environments.

## Authoritative Inputs

- generated `pyproject.toml`
- generated `uv.lock`

## Configurable Defaults

- default dependency text can come from the built-in defaults bundle or the instance-local runtime config directory
- the instance-local runtime config directory can also provide a runtime Dockerfile, a `.env` file, SSH keys, and arbitrary bind-mounted files or directories via `additional_mounts`
- when `env_file` is configured in `runtime.json`, Docker loads it for install jobs and runtime containers so the variables are available inside the BulletJournal runtime
- when `additional_mounts` is configured in `runtime.json`, each mount is available in both install jobs and runtime containers

The controller re-reads these defaults when creating new projects, so changing `instance_root/config/runtime/default-dependencies.txt` or `instance_root/config/runtime/runtime.json` affects future project creation without a restart.

## Merge Rules

- default dependency lines come from the instance default dependency file
- project-specific dependency lines are stored in controller metadata
- dependency identity is normalized by package name
- custom lines override default lines deterministically

## Package Indexes

Use an inline index annotation to select the source of an individual package:

```text
torch # index-url: https://download.pytorch.org/whl/cu130
```

Version pins and extras are supported, for example:

```text
torch[opt-einsum]==2.9.1+cu130 # index-url: https://download.pytorch.org/whl/cu130
```

The controller generates a `[tool.uv.sources]` mapping and an index with
`explicit = true`. Only packages mapped to that index use it; unrelated
dependencies such as `requests` continue to resolve from the global indexes or
PyPI. The shorthand `torch @ https://download.pytorch.org/whl/cu130` has the same
package-specific index behavior. Archive and VCS URLs remain direct references.

For a global additional index, use a separate requirements line:

```text
--extra-index-url https://packages.example.com/simple
```

Global declarations in either the instance defaults or custom requirements take
precedence over package-only isolation for the same URL. `--index-url` retains
its existing behavior as another global additional index.

If transitive dependencies also need an index, declare it globally. For example,
RAPIDS requirements can make the NVIDIA index available to CUDA dependencies
while keeping the PyTorch index package-specific:

```text
--extra-index-url https://pypi.nvidia.com
cugraph-cu13 # index-url: https://pypi.nvidia.com
cuml-cu13 # index-url: https://pypi.nvidia.com
torch # index-url: https://download.pytorch.org/whl/cu130
```

These rules apply uniformly to every index; there are no hostname-specific exceptions.

After upgrading the controller, the next environment update or reinstall
regenerates the project's index configuration from its requirements.

## Update Strategy

Both **Reinstall environment** and **Save and reinstall** upgrade only packages
explicitly listed in the project's custom requirements by default. The controller
passes one `--upgrade-package <name>` flag per unique package to `uv lock`.
Comments and index directives are excluded. Default-only packages and transitive
dependencies keep their locked versions where compatible; they may change when
required by updated dependency constraints.

For a requirement such as `my-package @ git+https://example.com/repo.git@main`,
the targeted upgrade resolves the latest commit on `main`, even if the package
version has not changed. Exact version pins and explicit Git commit pins remain
respected.

The **Upgrade all packages** checkbox is unchecked by default. Selecting it uses
`uv lock --upgrade` to upgrade all dependencies within the project's constraints.
API clients can select the same behavior with `upgrade_all: true`.

Initial installation and routine startup retain the existing lockfile preference.

## Install Sequence

1. rewrite `pyproject.toml`
2. run `uv lock`
3. run `uv sync --locked` into `.runtime/venv`
4. compute and persist the lock SHA-256
5. optionally run `bulletjournal mark-environment-changed /project --reason <text>`
6. restart the runtime when requested and previously running
