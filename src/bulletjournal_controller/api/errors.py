from __future__ import annotations

from fastapi import FastAPI
from fastapi.responses import JSONResponse

from bulletjournal_controller.domain.errors import (
    AuthenticationError,
    AuthorizationError,
    ConfigurationError,
    ConflictError,
    NotFoundError,
    ProjectValidationError,
    RuntimeOperationError,
    ValidationError,
)


def install_error_handlers(app: FastAPI) -> None:
    app.add_exception_handler(AuthenticationError, _json_error_handler(401))
    app.add_exception_handler(AuthorizationError, _json_error_handler(403))
    app.add_exception_handler(NotFoundError, _json_error_handler(404))
    app.add_exception_handler(ConflictError, _json_error_handler(409))
    app.add_exception_handler(ProjectValidationError, _json_error_handler(422))
    app.add_exception_handler(ValidationError, _json_error_handler(422))
    app.add_exception_handler(ConfigurationError, _json_error_handler(500))
    app.add_exception_handler(RuntimeOperationError, _json_error_handler(502))


def _json_error_handler(status_code: int):
    def handler(_request, exc: Exception):
        return JSONResponse(status_code=status_code, content={'detail': str(exc)})

    return handler
