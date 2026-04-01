from __future__ import annotations

from dataclasses import dataclass
from dataclasses import replace
from pathlib import Path
from typing import Any, cast

from bulletjournal_controller.config import default_instance_config
from bulletjournal_controller.runtime.installer import InstallerRunner
from bulletjournal_controller.runtime.docker_adapter import DockerAdapter
from bulletjournal_controller.services.environment_service import EnvironmentService


class DummyRuntimeConfigService:
    def __init__(
        self,
        default_dependencies_file: Path | None = None,
        env_file: Path | None = None,
    ):
        self._default_dependencies_file = default_dependencies_file
        self._env_file = env_file
        self.runtime_config = type(
            "RuntimeConfig",
            (),
            {
                "runtime_image_name": "bulletjournal-runtime:local",
            },
        )()

    def default_dependencies_file(self) -> Path | None:
        return self._default_dependencies_file

    def env_file(self) -> Path | None:
        return self._env_file

    def additional_mounts(self) -> list[tuple[Path, str, bool]]:
        return []


class DummyRuntimeConfigServiceWithMounts(DummyRuntimeConfigService):
    def __init__(self, additional_mounts: list[tuple[Path, str, bool]]):
        super().__init__()
        self._additional_mounts = additional_mounts

    def additional_mounts(self) -> list[tuple[Path, str, bool]]:
        return self._additional_mounts


@dataclass
class DummyProjectPaths:
    pyproject_path: Path
    uv_lock_path: Path


class FakeResult:
    def __init__(self, *, returncode: int, stdout: str = "", stderr: str = ""):
        self.returncode = returncode
        self.stdout = stdout
        self.stderr = stderr


class RetryingInstaller:
    def __init__(self, results: list[FakeResult]):
        self.results = results
        self.calls = 0

    def build_install_command(self, **kwargs):
        _ = kwargs
        return ["docker", "run", "test"]

    def build_mark_stale_command(self, **kwargs):
        _ = kwargs
        return ["docker", "run", "mark-stale"]

    def run(self, command):
        _ = command
        result = self.results[self.calls]
        self.calls += 1
        return result


@dataclass
class DummyProjectRecord:
    project_id: str = "study-a"
    python_version: str = "3.11"
    bulletjournal_version: str = "0.1.0"
    custom_requirements_text: str = ""
    gpu_enabled: bool = False


def make_project_paths(project_root: Path) -> Any:
    return type(
        "ProjectPaths",
        (),
        {
            "root": project_root,
            "pyproject_path": project_root / "pyproject.toml",
            "uv_lock_path": project_root / "uv.lock",
        },
    )()


def test_parse_default_dependencies_and_merge_precedence(tmp_path: Path) -> None:
    default_file = tmp_path / "deps.txt"
    default_file.write_text(
        "# comment\nbulletjournal==0.1.0\nalpha==1\nbeta\n", encoding="utf-8"
    )
    config = default_instance_config()
    config = replace(config, default_dependencies_file=str(default_file))
    service = EnvironmentService(
        instance_config=config,
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(default_file),
    )
    merged = service.merge_dependency_lines(
        bulletjournal_version="0.2.0",
        custom_requirements_text="beta==2\ngamma @ git+ssh://example/repo.git@abc123\n",
    )
    assert merged == [
        "bulletjournal==0.2.0",
        "alpha==1",
        "beta==2",
        "gamma @ git+ssh://example/repo.git@abc123",
    ]


def test_render_pyproject_contains_expected_fields() -> None:
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    rendered = service.render_pyproject(
        project_id="study-a",
        python_version="3.11",
        dependencies=["bulletjournal==0.1.0", "alpha"],
    )
    assert 'name = "bulletjournal-project-study-a"' in rendered
    assert 'requires-python = "==3.11.*"' in rendered
    assert "schema_version = 1" in rendered
    assert 'build-backend = "setuptools.build_meta"' in rendered
    assert "packages = []" in rendered


def test_parse_dependency_config_supports_index_shorthand() -> None:
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    config = service.parse_dependency_config(
        "cugraph-cu13 @ https://pypi.nvidia.com\npandas\n"
    )
    assert config.dependency_lines == ["cugraph-cu13", "pandas"]
    assert config.extra_index_urls == ["https://pypi.nvidia.com"]
    assert config.source_indexes == {"cugraph-cu13": "https://pypi.nvidia.com"}


def test_parse_dependency_config_supports_inline_index_comment() -> None:
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    config = service.parse_dependency_config(
        "cugraph-cu13 # index-url: https://pypi.nvidia.com\npandas\n"
    )
    assert config.dependency_lines == ["cugraph-cu13", "pandas"]
    assert config.extra_index_urls == ["https://pypi.nvidia.com"]
    assert config.source_indexes == {"cugraph-cu13": "https://pypi.nvidia.com"}


def test_render_pyproject_emits_uv_index_sources_for_shorthand_index() -> None:
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    rendered = service.render_pyproject(
        project_id="study-a",
        python_version="3.11",
        dependencies=["cugraph-cu13", "pandas"],
        extra_index_urls=["https://pypi.nvidia.com"],
        source_indexes={"cugraph-cu13": "https://pypi.nvidia.com"},
    )
    assert "[[tool.uv.index]]" in rendered
    assert 'url = "https://pypi.nvidia.com"' in rendered
    assert 'cugraph-cu13 = { index = "extra_index_1" }' in rendered


def test_default_dependency_text_reloads_from_runtime_config_service(
    tmp_path: Path,
) -> None:
    defaults_a = tmp_path / "defaults-a.txt"
    defaults_b = tmp_path / "defaults-b.txt"
    defaults_a.write_text("bulletjournal==0.1.0\nalpha==1\n", encoding="utf-8")
    defaults_b.write_text("bulletjournal==0.1.0\nbeta==2\n", encoding="utf-8")

    class MutableRuntimeConfigService(DummyRuntimeConfigService):
        def __init__(self, path: Path):
            super().__init__(path)
            self.path = path

        def default_dependencies_file(self) -> Path | None:
            return self.path

    runtime_config_service = MutableRuntimeConfigService(defaults_a)
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=runtime_config_service,
    )

    assert "alpha==1" in service.default_dependency_text()
    runtime_config_service.path = defaults_b
    assert "beta==2" in service.default_dependency_text()


def test_default_dependency_text_preserves_comments_for_ui(tmp_path: Path) -> None:
    defaults = tmp_path / "defaults.txt"
    defaults.write_text(
        "# comment\ncugraph-cu13 # index-url: https://pypi.nvidia.com\n",
        encoding="utf-8",
    )
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(defaults),
    )
    rendered = service.default_dependency_text()
    assert "# comment" in rendered
    assert "# index-url: https://pypi.nvidia.com" in rendered
    assert "bulletjournal==" in rendered


def test_floating_vcs_dependency_names_only_selects_non_pinned_refs() -> None:
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )

    packages = service.floating_vcs_dependency_names(
        [
            "fastreport @ git+ssh://github-fastreport/Agoratlas/FastReport@main",
            "snapshot @ git+ssh://example/repo.git@a1b2c3d4",
            "plain-package==1.0.0",
            "branchless @ git+ssh://example/repo.git",
        ]
    )

    assert packages == ["fastreport", "branchless"]


def test_write_project_environment_does_not_create_placeholder_lockfile(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    project_paths = DummyProjectPaths(
        pyproject_path=project_root / "pyproject.toml",
        uv_lock_path=project_root / "uv.lock",
    )
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=InstallerRunner(DockerAdapter()),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service.write_project_environment(
        project_paths=cast(Any, project_paths),
        project_id="study-a",
        python_version="3.11",
        bulletjournal_version="0.1.0",
        custom_requirements_text="",
    )
    assert project_paths.pyproject_path.is_file()
    assert not project_paths.uv_lock_path.exists()


def test_install_environment_retries_transient_missing_bind_mount(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    project_paths = make_project_paths(project_root)
    project_paths.uv_lock_path.write_text("lock = true\n", encoding="utf-8")
    installer = RetryingInstaller(
        [
            FakeResult(
                returncode=1,
                stderr='docker: Error response from daemon: invalid mount config for type "bind": bind source path does not exist',
            ),
            FakeResult(returncode=0),
        ],
    )
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigService(),
    )

    project = DummyProjectRecord()
    logs: list[str] = []
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]

    result = service.install_environment(
        project=cast(Any, project),
        project_paths=cast(Any, project_paths),
        log_writer=logs.append,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    assert result == "lock-sha"
    assert installer.calls == 2
    assert any("retrying" in entry for entry in logs)


def test_install_environment_uses_extended_retry_budget_for_mount_visibility(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    project_paths = make_project_paths(project_root)
    project_paths.uv_lock_path.write_text("lock = true\n", encoding="utf-8")
    installer = RetryingInstaller(
        [
            FakeResult(returncode=1, stderr="bind source path does not exist")
            for _ in range(6)
        ]
        + [FakeResult(returncode=0)]
    )
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]
    project = DummyProjectRecord()

    result = service.install_environment(
        project=cast(Any, project),
        project_paths=cast(Any, project_paths),
        log_writer=lambda _message: None,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    assert result == "lock-sha"
    assert installer.calls == 7


def test_install_environment_retries_when_additional_mount_is_not_immediately_visible(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    ssh_root = tmp_path / "ssh"
    ssh_root.mkdir(parents=True)
    project_paths = make_project_paths(project_root)
    project_paths.uv_lock_path.write_text("lock = true\n", encoding="utf-8")
    installer = RetryingInstaller(
        [
            FakeResult(
                returncode=1,
                stderr='docker: Error response from daemon: invalid mount config for type "bind": bind source path does not exist',
            ),
            FakeResult(returncode=0),
        ],
    )
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigServiceWithMounts(
            [(ssh_root, "/root/.ssh", True)]
        ),
    )
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]
    project = DummyProjectRecord()

    result = service.install_environment(
        project=cast(Any, project),
        project_paths=cast(Any, project_paths),
        log_writer=lambda _message: None,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    assert result == "lock-sha"
    assert installer.calls == 2


def test_install_environment_passes_runtime_env_file_to_installer(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    env_file = tmp_path / ".env"
    env_file.write_text("OPENAI_API_KEY=test\n", encoding="utf-8")
    project_paths = make_project_paths(project_root)
    project_paths.uv_lock_path.write_text("lock = true\n", encoding="utf-8")

    class RecordingInstaller(RetryingInstaller):
        def __init__(self):
            super().__init__([FakeResult(returncode=0)])
            self.install_kwargs = None

        def build_install_command(self, **kwargs):
            self.install_kwargs = kwargs
            return ["docker", "run", "test"]

    installer = RecordingInstaller()
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigService(env_file=env_file),
    )
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]
    project = DummyProjectRecord()

    result = service.install_environment(
        project=cast(Any, project),
        project_paths=cast(Any, project_paths),
        log_writer=lambda _message: None,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    assert result == "lock-sha"
    assert installer.install_kwargs is not None
    assert installer.install_kwargs["env_file"] == env_file


def test_install_environment_requests_upgrades_for_floating_vcs_dependencies(
    tmp_path: Path,
) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    project_paths = make_project_paths(project_root)
    project_paths.uv_lock_path.write_text("lock = true\n", encoding="utf-8")

    class RecordingInstaller(RetryingInstaller):
        def __init__(self):
            super().__init__([FakeResult(returncode=0)])
            self.install_kwargs = None

        def build_install_command(self, **kwargs):
            self.install_kwargs = kwargs
            return ["docker", "run", "test"]

    installer = RecordingInstaller()
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]

    service.install_environment(
        project=cast(
            Any,
            DummyProjectRecord(
                custom_requirements_text=(
                    "fastreport @ git+ssh://github-fastreport/Agoratlas/FastReport@main\n"
                    "snapshot @ git+ssh://example/repo.git@a1b2c3d4\n"
                ),
            ),
        ),
        project_paths=cast(Any, project_paths),
        log_writer=lambda _message: None,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    assert installer.install_kwargs is not None
    assert installer.install_kwargs["upgrade_packages"] == ["fastreport"]


def test_install_environment_rewrites_pyproject_before_locking(tmp_path: Path) -> None:
    project_root = tmp_path / "project"
    project_root.mkdir(parents=True)
    pyproject_path = project_root / "pyproject.toml"
    pyproject_path.write_text("stale = true\n", encoding="utf-8")
    lock_path = project_root / "uv.lock"
    lock_path.write_text("lock = true\n", encoding="utf-8")
    project_paths = make_project_paths(project_root)
    installer = RetryingInstaller([FakeResult(returncode=0)])
    service = EnvironmentService(
        instance_config=default_instance_config(),
        installer=cast(Any, installer),
        runtime_config_service=DummyRuntimeConfigService(),
    )
    service.compute_lock_sha256 = lambda _path: "lock-sha"  # type: ignore[method-assign]

    service.install_environment(
        project=cast(
            Any,
            DummyProjectRecord(
                bulletjournal_version="0.2.0",
                custom_requirements_text="alpha==1\n",
            ),
        ),
        project_paths=cast(Any, project_paths),
        log_writer=lambda _message: None,
        mark_all_artifacts_stale=False,
        reason="test",
    )

    rendered = pyproject_path.read_text(encoding="utf-8")
    assert 'requires-python = "==3.11.*"' in rendered
    assert '"bulletjournal==0.2.0"' in rendered
    assert '"alpha==1"' in rendered
