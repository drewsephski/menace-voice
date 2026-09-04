import copy
from contextlib import asynccontextmanager
from unittest.mock import patch

import pytest
from sqlalchemy import func, select

from api.db.models import OrganizationModel, UserModel, WorkflowTemplates
from api.db.workflow_template_client import (
    WorkflowTemplateChecksumCollisionError,
    WorkflowTemplateClient,
    WorkflowTemplateDowngradeError,
)
from api.services.workflow.guardrails import GuardrailService
from api.services.workflow.templates.hvac_missed_call import (
    HVAC_TEMPLATE_SLUG,
    BundleValidationError,
    install_bundle,
    load_bundle,
    validate_bundle,
)


def _bind_client(client: WorkflowTemplateClient, async_session):
    @asynccontextmanager
    async def use_test_session():
        yield async_session

    client.async_session = use_test_session
    return client


@pytest.mark.asyncio
async def test_existing_create_method_duplicates_unchanged_template(
    async_session,
):
    client = _bind_client(WorkflowTemplateClient(), async_session)
    payload = {"nodes": [], "edges": []}

    await client.create_workflow_template("baseline-duplicate", "baseline", payload)
    await client.create_workflow_template("baseline-duplicate", "baseline", payload)

    count = await async_session.scalar(
        select(func.count(WorkflowTemplates.id)).where(
            WorkflowTemplates.template_name == "baseline-duplicate"
        )
    )
    assert count == 2


def test_source_bundle_validates_checksum_graph_and_policy_contract():
    bundle = load_bundle()

    validate_bundle(bundle)

    metadata = bundle["template_bundle"]
    assert metadata["slug"] == HVAC_TEMPLATE_SLUG
    assert metadata["schema_version"] == 1
    assert metadata["version"] >= 1
    assert metadata["required_fields"] == [
        "caller_name",
        "callback_phone",
        "service_location",
        "reason_for_call",
        "urgency",
    ]
    assert metadata["callback_policy"]["conditionally_required_fields"] == {
        "preferred_callback_time": "live_escalation_not_successful"
    }
    assert metadata["template_context"]["defaults"]
    guardrails = metadata["default_workflow_configuration"]["guardrails"]
    assert guardrails["enabled"]
    assert guardrails["policy_schema_version"] == 1
    assert guardrails["input_rules"]
    assert guardrails["output_rules"]
    assert {rule["action"] for rule in guardrails["input_rules"]} == {"bypass"}
    assert {rule["action"] for rule in guardrails["output_rules"]} == {"replace"}
    assert len(metadata["disposition_map"]) == 9
    assert len(metadata["severe_categories"]) == 7

    serialized = str(bundle).casefold()
    assert "911" not in serialized
    assert "we will dispatch" not in serialized
    assert "technician is on the way" not in serialized
    assert metadata["escalation_policy"]["destinations"] == []

    guardrail_service = GuardrailService.from_workflow_configuration(
        metadata["default_workflow_configuration"]
    )
    assert guardrail_service.evaluate_input("I smell gas in the basement") is not None
    assert guardrail_service.evaluate_output("The price is 49 dollars") is not None


def test_malformed_bundle_is_refused_before_install():
    bundle = load_bundle()
    malformed = copy.deepcopy(bundle)
    del malformed["template_bundle"]["required_fields"]

    with pytest.raises(BundleValidationError, match="required_fields"):
        validate_bundle(malformed, verify_checksum=False)


@pytest.mark.asyncio
async def test_install_reinstall_upgrade_and_checksum_collision(async_session):
    client = _bind_client(WorkflowTemplateClient(), async_session)
    bundle = load_bundle()

    first = await install_bundle(client, bundle=bundle)
    identical = await install_bundle(client, bundle=bundle)

    assert first.action == "created"
    assert first.changed is True
    assert identical.action == "unchanged"
    assert identical.changed is False
    assert identical.template_id == first.template_id

    upgraded = copy.deepcopy(bundle)
    upgraded["template_bundle"]["version"] += 1
    upgraded["template_bundle"]["checksum"] = ""
    from api.services.workflow.templates.hvac_missed_call import with_checksum

    upgraded = with_checksum(upgraded)
    upgrade_result = await install_bundle(client, bundle=upgraded)
    assert upgrade_result.action == "updated"
    assert upgrade_result.template_id == first.template_id

    with pytest.raises(WorkflowTemplateDowngradeError):
        await install_bundle(client, bundle=bundle)

    collision = copy.deepcopy(upgraded)
    collision["template_bundle"]["description"] += " changed"
    collision["template_bundle"]["checksum"] = ""
    collision = with_checksum(collision)

    with pytest.raises(WorkflowTemplateChecksumCollisionError):
        await install_bundle(client, bundle=collision)

    stored = await client.get_workflow_template(first.template_id)
    assert stored.template_json == upgraded


@pytest.mark.asyncio
async def test_check_reports_required_write_without_mutating(async_session):
    client = _bind_client(WorkflowTemplateClient(), async_session)

    result = await install_bundle(client, check=True)

    assert result.action == "create_required"
    assert result.changed is False
    count = await async_session.scalar(
        select(func.count(WorkflowTemplates.id)).where(
            WorkflowTemplates.template_name == HVAC_TEMPLATE_SLUG
        )
    )
    assert count == 0


@pytest.mark.asyncio
async def test_two_organizations_duplicate_to_distinct_published_v1_definitions(
    async_session, db_session, test_client_factory
):
    template_client = _bind_client(WorkflowTemplateClient(), async_session)
    installed = await install_bundle(template_client)

    orgs_and_users = []
    for suffix in ("one", "two"):
        org = OrganizationModel(provider_id=f"hvac-template-org-{suffix}")
        async_session.add(org)
        await async_session.flush()
        user = UserModel(
            provider_id=f"hvac-template-user-{suffix}",
            selected_organization_id=org.id,
        )
        async_session.add(user)
        await async_session.flush()
        orgs_and_users.append((org, user))

    created = []
    with patch(
        "api.routes.workflow.WorkflowTemplateClient",
        return_value=template_client,
    ):
        for org, user in orgs_and_users:
            async with test_client_factory(user) as client:
                response = await client.post(
                    "/api/v1/workflow/templates/duplicate",
                    json={
                        "template_id": installed.template_id,
                        "workflow_name": f"{org.provider_id} missed calls",
                    },
                )
            assert response.status_code == 200, response.text
            created.append((org, response.json()))

    assert created[0][1]["id"] != created[1][1]["id"]
    for org, response in created:
        workflow = await db_session.get_workflow_by_id(response["id"])
        assert workflow.organization_id == org.id
        versions = await db_session.get_workflow_versions(workflow.id)
        assert len(versions) == 1
        assert versions[0].status == "published"
        assert versions[0].version_number == 1
        assert (
            versions[0].workflow_json["template_bundle"]["slug"] == HVAC_TEMPLATE_SLUG
        )
        assert workflow.released_definition_id == versions[0].id

    first_org, first_response = created[0]
    first_user = orgs_and_users[0][1]
    async with test_client_factory(first_user) as client:
        dynamic_response = await client.post(
            f"/api/v1/workflow/{first_response['id']}/duplicate"
        )
    assert dynamic_response.status_code == 200, dynamic_response.text
    duplicated_workflow = await db_session.get_workflow_by_id(
        dynamic_response.json()["id"]
    )
    assert duplicated_workflow.organization_id == first_org.id
