from __future__ import annotations


class BulletJournalControllerError(Exception):
    """Base application error."""


class ConfigurationError(BulletJournalControllerError):
    """Raised when controller configuration is invalid."""


class ValidationError(BulletJournalControllerError):
    """Raised when user input is invalid."""


class ProjectValidationError(ValidationError):
    """Raised when a project identifier or layout is invalid."""


class NotFoundError(BulletJournalControllerError):
    """Raised when a requested record does not exist."""


class ConflictError(BulletJournalControllerError):
    """Raised when a request conflicts with current state."""


class AuthenticationError(BulletJournalControllerError):
    """Raised when authentication fails."""


class AuthorizationError(BulletJournalControllerError):
    """Raised when authorization or origin checks fail."""


class RuntimeOperationError(BulletJournalControllerError):
    """Raised when runtime operations fail."""


class JobExecutionError(BulletJournalControllerError):
    """Raised when a queued job fails."""
