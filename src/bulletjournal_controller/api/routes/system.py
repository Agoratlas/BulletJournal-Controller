from __future__ import annotations

from fastapi import APIRouter, Request


router = APIRouter(prefix='/system', tags=['system'])


@router.get('/info')
def system_info(request: Request):
    return request.app.state.container.system_info()


@router.get('/config')
def config_info(request: Request):
    runtime_config = request.app.state.container.runtime_config_service.runtime_config
    return {
        'runtime_image_name': runtime_config.runtime_image_name,
        'runtime_dockerfile': str(runtime_config.runtime_dockerfile),
        'runtime_build_context': str(runtime_config.runtime_build_context),
        'default_dependencies_file': None if runtime_config.default_dependencies_file is None else str(runtime_config.default_dependencies_file),
        'ssh_dir': None if runtime_config.ssh_dir is None else str(runtime_config.ssh_dir),
        'private_assets_dir': None if runtime_config.private_assets_dir is None else str(runtime_config.private_assets_dir),
        'local_bulletjournal_source': None if runtime_config.local_bulletjournal_source is None else str(runtime_config.local_bulletjournal_source),
    }
