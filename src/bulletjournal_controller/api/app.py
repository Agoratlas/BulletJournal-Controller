from __future__ import annotations

from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import Depends, FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from bulletjournal_controller.api.auth import get_current_user
from bulletjournal_controller.api.deps import ServiceContainer
from bulletjournal_controller.api.errors import install_error_handlers
from bulletjournal_controller.api.proxy import router as proxy_router
from bulletjournal_controller.api.routes import auth, jobs, projects, system
from bulletjournal_controller.config import ServerConfig, bundled_web_root
from bulletjournal_controller.services import SESSION_COOKIE_NAME
from bulletjournal_controller.storage import require_instance_root


def create_app(*, instance_root: Path, server_config: ServerConfig) -> FastAPI:
    instance_paths = require_instance_root(instance_root)

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        app.state.container.start()
        try:
            yield
        finally:
            app.state.container.stop()

    app = FastAPI(title='BulletJournal-Controller', version='0.1.0', lifespan=lifespan)
    app.state.server_config = server_config
    app.state.instance_paths = instance_paths
    app.state.container = ServiceContainer(
        instance_paths=instance_paths,
        server_config=server_config,
        recover_inflight_jobs=True,
        ensure_runtime_image=False,
    )
    install_error_handlers(app)

    api_prefix = '/api/v1'
    app.include_router(auth.router, prefix=api_prefix)
    app.include_router(system.router, prefix=api_prefix, dependencies=[Depends(get_current_user)])
    app.include_router(projects.router, prefix=api_prefix)
    app.include_router(jobs.router, prefix=api_prefix, dependencies=[Depends(get_current_user)])
    app.include_router(proxy_router)

    web_root = bundled_web_root()
    assets_dir = web_root / 'assets'
    if assets_dir.exists():
        app.mount('/assets', StaticFiles(directory=assets_dir), name='assets')

    @app.get('/healthz')
    def healthz():
        return {'status': 'ok'}

    @app.get('/login')
    def login_page(request: Request):
        if _session_bundle_from_request(request) is not None:
            return RedirectResponse('/', status_code=302)
        return _serve_spa(web_root, route='login')

    @app.get('/')
    @app.get('/projects/{project_id}')
    def spa(request: Request, project_id: str | None = None):
        _ = project_id
        if _session_bundle_from_request(request) is None:
            return RedirectResponse('/login', status_code=302)
        return _serve_spa(web_root)

    return app


def _serve_spa(web_root: Path, *, route: str | None = None):
    if route == 'login':
        candidate = web_root / 'login.html'
        if candidate.exists():
            return HTMLResponse(candidate.read_text(encoding='utf-8'))
    index = web_root / 'index.html'
    if index.exists():
        return HTMLResponse(index.read_text(encoding='utf-8'))
    return JSONResponse(
        status_code=503,
        content={'detail': 'Frontend assets are not built yet. Use API endpoints directly or build the web app.'},
    )


def _session_bundle_from_request(request: Request):
    cookie = request.cookies.get(SESSION_COOKIE_NAME)
    return request.app.state.container.auth_service.resolve_session(cookie)
