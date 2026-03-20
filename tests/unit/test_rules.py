from __future__ import annotations

import pytest

from bulletjournal_controller.domain.errors import ConflictError, ProjectValidationError
from bulletjournal_controller.domain.rules import ensure_transition_allowed, validate_project_id


def test_validate_project_id_accepts_expected_pattern() -> None:
    assert validate_project_id('study-a_1') == 'study-a_1'


@pytest.mark.parametrize('candidate', ['Study-A', 'a', 'bad space', '../oops'])
def test_validate_project_id_rejects_invalid_values(candidate: str) -> None:
    with pytest.raises(ProjectValidationError):
        validate_project_id(candidate)


def test_transition_rules_reject_invalid_move() -> None:
    with pytest.raises(ConflictError):
        ensure_transition_allowed('running', 'starting')
