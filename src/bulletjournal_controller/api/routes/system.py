from __future__ import annotations

from fastapi import APIRouter, Depends, Request

from bulletjournal_controller.api.auth import get_current_user


router = APIRouter(prefix="/system", tags=["system"])


@router.get("/info")
def system_info(request: Request, user=Depends(get_current_user)):
    payload = request.app.state.container.system_info()
    payload["visible_project_count"] = len(
        request.app.state.container.authorization_service.list_visible_projects(user)
    )
    payload.pop("project_count", None)
    return payload


@router.get("/metrics")
def system_metrics(request: Request, _user=Depends(get_current_user)):
    return request.app.state.container.metrics_service.system_metrics()


@router.get("/config")
def config_info(request: Request, user=Depends(get_current_user)):
    runtime_config = request.app.state.container.runtime_config_service.runtime_config
    return {
        "runtime_image_name": runtime_config.runtime_image_name,
        "runtime_dockerfile": str(runtime_config.runtime_dockerfile),
        "runtime_build_context": str(runtime_config.runtime_build_context),
        "default_dependencies_file": None
        if runtime_config.default_dependencies_file is None
        else str(runtime_config.default_dependencies_file),
        "ssh_dir": None
        if runtime_config.ssh_dir is None
        else str(runtime_config.ssh_dir),
        "additional_mounts": [
            {
                "source": str(source),
                "target": target,
                "read_only": read_only,
            }
            for source, target, read_only in runtime_config.additional_mounts
        ],
    }
