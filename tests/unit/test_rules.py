from __future__ import annotations

import pytest

from bulletjournal_controller.domain.errors import ConflictError, ProjectValidationError
from bulletjournal_controller.domain.rules import ensure_transition_allowed, validate_project_id


@pytest.mark.parametrize('candidate', ['study-a_1', '2026_11_study', 'ab', 'a' * 63])
def test_validate_project_id_accepts_expected_pattern(candidate: str) -> None:
    assert validate_project_id(candidate) == candidate


@pytest.mark.parametrize(
    'candidate',
    ['Study-A', '', 'a', 'a' * 64, 'bad space', '../oops', 'study.a', '_study', '-study', '2026_11_', 'study-'],
)
def test_validate_project_id_rejects_invalid_values(candidate: str) -> None:
    with pytest.raises(ProjectValidationError):
        validate_project_id(candidate)


def test_validate_project_id_trims_surrounding_whitespace() -> None:
    assert validate_project_id(' study-a_1\n') == 'study-a_1'


def test_transition_rules_reject_invalid_move() -> None:
    with pytest.raises(ConflictError):
        ensure_transition_allowed('running', 'starting')
