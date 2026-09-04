"""Unit tests for AUTH_PROVIDER resolution (Stack vs local)."""

from api.constants import resolve_auth_provider


def test_explicit_local_wins_even_with_creds():
    assert (
        resolve_auth_provider(
            "local",
            project_id="proj",
            secret="ssk_secret",
        )
        == "local"
    )


def test_explicit_stack():
    assert (
        resolve_auth_provider(
            "stack",
            project_id="proj",
            secret="ssk_secret",
        )
        == "stack"
    )


def test_blank_with_creds_enables_stack():
    assert (
        resolve_auth_provider(
            "",
            project_id="proj",
            secret="ssk_secret",
        )
        == "stack"
    )
    assert (
        resolve_auth_provider(
            None,
            project_id="proj",
            secret="ssk_secret",
        )
        == "stack"
    )
    assert (
        resolve_auth_provider(
            "  ",
            project_id="proj",
            secret="ssk_secret",
        )
        == "stack"
    )


def test_blank_without_creds_stays_local():
    assert resolve_auth_provider(None, project_id=None, secret=None) == "local"
    assert resolve_auth_provider("", project_id="proj", secret=None) == "local"
    assert resolve_auth_provider("", project_id=None, secret="ssk") == "local"


def test_explicit_stack_without_creds_still_stack():
    # Health then omits stack_project_id; the UI logs and stays on a spinner.
    assert (
        resolve_auth_provider("stack", project_id=None, secret=None) == "stack"
    )
