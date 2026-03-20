__all__ = [
    'AuthService',
    'EnvironmentService',
    'ExportService',
    'JobService',
    'ProjectService',
    'ProxyService',
    'ReconcileService',
    'RuntimeConfigService',
    'RuntimeInfo',
    'RuntimeService',
    'SESSION_COOKIE_NAME',
    'SessionBundle',
]


def __getattr__(name: str):
    if name in {'AuthService', 'SESSION_COOKIE_NAME', 'SessionBundle'}:
        from bulletjournal_controller.services.auth_service import AuthService, SESSION_COOKIE_NAME, SessionBundle

        mapping = {
            'AuthService': AuthService,
            'SESSION_COOKIE_NAME': SESSION_COOKIE_NAME,
            'SessionBundle': SessionBundle,
        }
        return mapping[name]
    if name == 'EnvironmentService':
        from bulletjournal_controller.services.environment_service import EnvironmentService

        return EnvironmentService
    if name == 'ExportService':
        from bulletjournal_controller.services.export_service import ExportService

        return ExportService
    if name == 'JobService':
        from bulletjournal_controller.services.job_service import JobService

        return JobService
    if name == 'ProjectService':
        from bulletjournal_controller.services.project_service import ProjectService

        return ProjectService
    if name == 'ProxyService':
        from bulletjournal_controller.services.proxy_service import ProxyService

        return ProxyService
    if name == 'ReconcileService':
        from bulletjournal_controller.services.reconcile_service import ReconcileService

        return ReconcileService
    if name == 'RuntimeConfigService':
        from bulletjournal_controller.services.runtime_config_service import RuntimeConfigService

        return RuntimeConfigService
    if name in {'RuntimeInfo', 'RuntimeService'}:
        from bulletjournal_controller.services.runtime_service import RuntimeInfo, RuntimeService

        mapping = {
            'RuntimeInfo': RuntimeInfo,
            'RuntimeService': RuntimeService,
        }
        return mapping[name]
    raise AttributeError(name)
