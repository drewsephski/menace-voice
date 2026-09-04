import pytest


@pytest.mark.asyncio
async def test_user_email_writes_lowercase_and_looks_up_case_insensitively(
    db_session,
):
    user = await db_session.create_user_with_email(
        email="User@Example.COM",
        password_hash="hashed-password",
    )

    assert user.email == "user@example.com"

    fetched = await db_session.get_user_by_email("USER@example.com")

    assert fetched is not None
    assert fetched.id == user.id
    assert fetched.email == "user@example.com"


@pytest.mark.asyncio
async def test_stack_login_rebinds_existing_local_user_with_same_email(db_session):
    local_user = await db_session.create_user_with_email(
        email="drew@example.com",
        password_hash="hashed-password",
    )
    local_id = local_user.id
    assert local_user.provider_id.startswith("oss_")

    linked, created = await db_session.get_or_create_user_by_provider_id(
        "stack-user-abc",
        email="Drew@example.com",
    )

    assert created is False
    assert linked.id == local_id
    assert linked.provider_id == "stack-user-abc"
    assert linked.email == "drew@example.com"

    again, _ = await db_session.get_or_create_user_by_provider_id(
        "stack-user-abc",
        email="drew@example.com",
    )
    assert again.id == local_id


@pytest.mark.asyncio
async def test_stack_login_rebinds_after_stub_user_already_exists(db_session):
    local_user = await db_session.create_user_with_email(
        email="drew@example.com",
        password_hash="hashed-password",
    )
    stub, created = await db_session.get_or_create_user_by_provider_id("stack-user-abc")
    assert created is True
    assert stub.id != local_user.id

    linked, _ = await db_session.get_or_create_user_by_provider_id(
        "stack-user-abc",
        email="drew@example.com",
    )

    assert linked.id == local_user.id
    assert linked.provider_id == "stack-user-abc"


@pytest.mark.asyncio
async def test_stack_login_does_not_steal_email_from_another_stack_user(db_session):
    first, _ = await db_session.get_or_create_user_by_provider_id(
        "stack-user-one",
        email="shared@example.com",
    )
    second, created = await db_session.get_or_create_user_by_provider_id(
        "stack-user-two",
        email="shared@example.com",
    )

    assert created is True
    assert second.id != first.id
    assert first.email == "shared@example.com"
    assert second.email is None
