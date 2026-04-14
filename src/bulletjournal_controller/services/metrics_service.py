from __future__ import annotations

import json
import os
import shutil
import subprocess
from pathlib import Path

from bulletjournal_controller.domain.models import ProjectRecord


class MetricsService:
    def __init__(
        self,
        *,
        instance_paths,
        docker_adapter,
        runtime_config_service,
        jobs,
    ):
        self.instance_paths = instance_paths
        self.docker_adapter = docker_adapter
        self.runtime_config_service = runtime_config_service
        self.jobs = jobs

    def system_metrics(self) -> dict[str, object]:
        disk = shutil.disk_usage(self.instance_paths.root)
        return {
            "cpu_percent": self._system_cpu_percent(),
            "memory": self._system_memory_metrics(),
            "disk": {
                "used_bytes": int(disk.used),
                "total_bytes": int(disk.total),
            },
        }

    def project_metrics_map(
        self, projects: list[ProjectRecord]
    ) -> dict[str, dict[str, object]]:
        runtime_metrics = self._docker_stats_by_container_name(
            [project.container_name for project in projects if project.container_name]
        )
        metrics: dict[str, dict[str, object]] = {}
        for project in projects:
            disk_used_bytes = self._project_disk_usage(project)
            project_metrics: dict[str, object] = {
                "disk_used_bytes": disk_used_bytes,
            }
            if project.container_name:
                runtime = runtime_metrics.get(project.container_name)
                if runtime is not None:
                    project_metrics["cpu_percent"] = runtime.get("cpu_percent")
                    project_metrics["memory_used_bytes"] = runtime.get(
                        "memory_used_bytes"
                    )
                    project_metrics["memory_limit_bytes"] = runtime.get(
                        "memory_limit_bytes"
                    )
                size_bytes = self._container_rw_size(project.container_name)
                if size_bytes is not None:
                    project_metrics["disk_used_bytes"] = disk_used_bytes + size_bytes
            metrics[project.project_id] = project_metrics
        return metrics

    def project_metrics(self, project: ProjectRecord) -> dict[str, object]:
        return self.project_metrics_map([project]).get(project.project_id, {})

    def _project_disk_usage(self, project: ProjectRecord) -> int:
        total = self._path_size(Path(project.root_path))
        for log_path_text in self.jobs.list_log_paths_for_project(project.project_id):
            total += self._path_size(Path(log_path_text))
        return total

    def _docker_stats_by_container_name(
        self, container_names: list[str]
    ) -> dict[str, dict[str, object]]:
        resolved_names = [name for name in container_names if name]
        if not resolved_names:
            return {}
        command = self.docker_adapter.docker_base_command() + [
            "stats",
            "--no-stream",
            "--format",
            "{{json .}}",
            *resolved_names,
        ]
        try:
            result = self.docker_adapter.run(command, timeout=30)
        except Exception:
            return {}
        if result.returncode != 0:
            return {}
        stats: dict[str, dict[str, object]] = {}
        for line in (result.stdout or "").splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                payload = json.loads(line)
            except json.JSONDecodeError:
                continue
            name = str(payload.get("Name") or "").strip()
            if not name:
                continue
            memory_used_bytes, memory_limit_bytes = self._parse_memory_usage(
                str(payload.get("MemUsage") or "")
            )
            stats[name] = {
                "cpu_percent": self._parse_percentage(
                    str(payload.get("CPUPerc") or "")
                ),
                "memory_used_bytes": memory_used_bytes,
                "memory_limit_bytes": memory_limit_bytes,
            }
        return stats

    def _container_rw_size(self, container_name: str) -> int | None:
        command = self.docker_adapter.docker_base_command() + [
            "inspect",
            "--size",
            container_name,
        ]
        try:
            result = self.docker_adapter.run(command, timeout=30)
        except Exception:
            return None
        if result.returncode != 0:
            return None
        try:
            payload = json.loads(result.stdout or "[]")
        except json.JSONDecodeError:
            return None
        if not isinstance(payload, list) or not payload:
            return None
        record = payload[0]
        if not isinstance(record, dict):
            return None
        size_rw = record.get("SizeRw")
        if isinstance(size_rw, int):
            return size_rw
        return None

    def _system_cpu_percent(self) -> float | None:
        try:
            cpu_count = os.cpu_count() or 1
            result = subprocess.run(
                ["ps", "-A", "-o", "%cpu="],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
            if result.returncode == 0:
                total = 0.0
                for line in result.stdout.splitlines():
                    line = line.strip()
                    if not line:
                        continue
                    total += float(line)
                return round(max(0.0, min(100.0, total / cpu_count)), 1)
        except Exception:
            pass
        try:
            cpu_count = os.cpu_count() or 1
            return round(min(100.0, (os.getloadavg()[0] / cpu_count) * 100.0), 1)
        except Exception:
            return None

    def _system_memory_metrics(self) -> dict[str, int] | None:
        total = self._sysctl_int("hw.memsize")
        if total is not None:
            page_size = self._sysctl_int("hw.pagesize") or 4096
            vm_stats = self._vm_stat_pages()
            if vm_stats is not None:
                available_pages = vm_stats.get("Pages free", 0) + vm_stats.get(
                    "Pages speculative", 0
                )
                used_bytes = max(0, total - (available_pages * page_size))
                return {
                    "used_bytes": int(used_bytes),
                    "total_bytes": int(total),
                }
        return self._linux_memory_metrics()

    @staticmethod
    def _path_size(path: Path) -> int:
        try:
            if path.is_file():
                return int(path.stat().st_size)
            if not path.exists():
                return 0
            total = 0
            for child in path.rglob("*"):
                try:
                    if child.is_file():
                        total += int(child.stat().st_size)
                except OSError:
                    continue
            return total
        except OSError:
            return 0

    @staticmethod
    def _parse_percentage(value: str) -> float | None:
        stripped = value.strip().removesuffix("%")
        if not stripped:
            return None
        try:
            return round(float(stripped), 1)
        except ValueError:
            return None

    @staticmethod
    def _parse_memory_usage(value: str) -> tuple[int | None, int | None]:
        if not value or "/" not in value:
            return None, None
        used_text, limit_text = [part.strip() for part in value.split("/", 1)]
        return MetricsService._parse_size(used_text), MetricsService._parse_size(
            limit_text
        )

    @staticmethod
    def _parse_size(value: str) -> int | None:
        text = value.strip()
        if not text:
            return None
        parts = text.split()
        token = parts[0]
        index = 0
        while index < len(token) and (token[index].isdigit() or token[index] in ".-"):
            index += 1
        number_text = token[:index]
        unit = (
            token[index:]
            if index < len(token)
            else (parts[1] if len(parts) > 1 else "B")
        )
        try:
            number = float(number_text)
        except ValueError:
            return None
        multipliers = {
            "b": 1,
            "kb": 1000,
            "kib": 1024,
            "mb": 1000**2,
            "mib": 1024**2,
            "gb": 1000**3,
            "gib": 1024**3,
            "tb": 1000**4,
            "tib": 1024**4,
        }
        multiplier = multipliers.get(unit.strip().lower())
        if multiplier is None:
            return None
        return int(number * multiplier)

    @staticmethod
    def _sysctl_int(name: str) -> int | None:
        try:
            result = subprocess.run(
                ["sysctl", "-n", name],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
        except Exception:
            return None
        if result.returncode != 0:
            return None
        text = result.stdout.strip()
        if not text:
            return None
        try:
            return int(text)
        except ValueError:
            return None

    @staticmethod
    def _vm_stat_pages() -> dict[str, int] | None:
        try:
            result = subprocess.run(
                ["vm_stat"],
                capture_output=True,
                text=True,
                check=False,
                timeout=10,
            )
        except Exception:
            return None
        if result.returncode != 0:
            return None
        pages: dict[str, int] = {}
        for line in result.stdout.splitlines():
            if ":" not in line:
                continue
            name, raw_value = line.split(":", 1)
            cleaned = raw_value.strip().rstrip(".").replace(".", "")
            try:
                pages[name.strip()] = int(cleaned)
            except ValueError:
                continue
        return pages

    @staticmethod
    def _linux_memory_metrics() -> dict[str, int] | None:
        meminfo = Path("/proc/meminfo")
        if not meminfo.exists():
            return None
        values: dict[str, int] = {}
        for line in meminfo.read_text(encoding="utf-8").splitlines():
            if ":" not in line:
                continue
            key, raw_value = line.split(":", 1)
            parts = raw_value.strip().split()
            if not parts:
                continue
            try:
                values[key] = int(parts[0]) * 1024
            except ValueError:
                continue
        total = values.get("MemTotal")
        available = values.get("MemAvailable")
        if total is None or available is None:
            return None
        return {
            "used_bytes": max(0, total - available),
            "total_bytes": total,
        }
