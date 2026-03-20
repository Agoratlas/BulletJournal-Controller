__all__ = ['DockerAdapter', 'InstallerRunner', 'fetch_controller_status', 'wait_for_project_health']


def __getattr__(name: str):
    if name == 'DockerAdapter':
        from bulletjournal_controller.runtime.docker_adapter import DockerAdapter

        return DockerAdapter
    if name == 'InstallerRunner':
        from bulletjournal_controller.runtime.installer import InstallerRunner

        return InstallerRunner
    if name in {'fetch_controller_status', 'wait_for_project_health'}:
        from bulletjournal_controller.runtime.healthcheck import fetch_controller_status, wait_for_project_health

        mapping = {
            'fetch_controller_status': fetch_controller_status,
            'wait_for_project_health': wait_for_project_health,
        }
        return mapping[name]
    raise AttributeError(name)
