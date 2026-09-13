from datetime import UTC, datetime
from types import SimpleNamespace
from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from fastapi import FastAPI
from httpx import ASGITransport, AsyncClient
from sqlalchemy.dialects import postgresql

from api.db.pilot_review_client import PilotReviewClient
from api.routes.pilot_review import router
from api.services.auth.depends import get_user
from api.services.pilot.review import PilotReviewPage, WebhookReview, project_run_review


def run_record(run_id=8, **changes):
    return {
        "id": run_id,
        "workflow_id": 3,
        "created_at": datetime(2026, 9, 1, tzinfo=UTC),
        "state": "completed",
        "mode": "twilio",
        "is_completed": True,
        "gathered_context": {},
        "usage_info": {},
        "cost_info": {},
        **changes,
    }


def test_missing_evidence_stays_unknown_and_omits_caller_data():
    record = run_record(gathered_context={"caller_name": "Private caller"})
    review = project_run_review(record, WebhookReview())
    assert review.disposition is None
    assert review.transfer == "not_recorded"
    assert review.actual_cost == "not_recorded"
    assert review.recorded_token_usage is None
    assert review.duration_seconds is None
    assert "Private caller" not in review.model_dump_json()


@pytest.mark.parametrize("currency", ["USD", "EUR"])
def test_legacy_cost_and_tokens_never_claim_authoritative_currency_cost(currency):
    record = run_record(
        cost_info={
            "dograh_token_usage": 125,
            "total_cost_usd": 1.25,
            "currency": currency,
        },
        usage_info={"call_duration_seconds": 0},
    )
    review = project_run_review(record, WebhookReview(accepted=1))
    assert review.recorded_token_usage == 125
    assert review.duration_seconds == 0
    assert review.actual_cost == "not_recorded"
    assert review.webhooks.human_receipt == "not_recorded"
    assert currency not in review.model_dump_json()


@pytest.mark.parametrize("value", [-1, float("nan"), float("inf"), True, "5"])
def test_invalid_numeric_evidence_is_not_reported(value):
    review = project_run_review(
        run_record(
            usage_info={"call_duration_seconds": value},
            cost_info={"dograh_token_usage": value},
        ),
        WebhookReview(),
    )
    assert review.duration_seconds is None
    assert review.recorded_token_usage is None


def test_disposition_does_not_imply_transfer_and_transfer_does_not_imply_receipt():
    classified = project_run_review(
        run_record(gathered_context={"call_disposition": "transfer_call"}),
        WebhookReview(),
    )
    assert classified.disposition == "transfer_call"
    assert classified.transfer == "not_recorded"
    mechanical = project_run_review(
        run_record(
            gathered_context={
                "call_status": "transfer_call",
                "error": "sensitive detail",
            }
        ),
        WebhookReview(accepted=2),
    )
    assert mechanical.transfer == "recorded_transfer"
    assert mechanical.error_recorded is True
    assert mechanical.webhooks.human_receipt == "not_recorded"
    assert "sensitive detail" not in mechanical.model_dump_json()


def mocked_client(results):
    client = object.__new__(PilotReviewClient)
    session = AsyncMock()
    session.execute.side_effect = results
    client.async_session = MagicMock()
    client.async_session.return_value.__aenter__.return_value = session
    return client, session


def sql(statement):
    return str(
        statement.compile(
            dialect=postgresql.dialect(), compile_kwargs={"literal_binds": True}
        )
    )


@pytest.mark.asyncio
async def test_foreign_workflow_returns_none_before_reading_runs_or_deliveries():
    ownership = MagicMock()
    ownership.scalar_one_or_none.return_value = None
    client, session = mocked_client([ownership])
    assert await client.get_pilot_review(organization_id=7, workflow_id=3) is None
    assert session.execute.await_count == 1
    query = sql(session.execute.await_args.args[0])
    assert "workflows.organization_id = 7" in query
    assert "workflows.id = 3" in query


@pytest.mark.asyncio
async def test_pages_are_keyset_bounded_and_delivery_queries_are_org_scoped():
    ownership = MagicMock()
    ownership.scalar_one_or_none.return_value = 3
    runs = MagicMock()
    runs.mappings.return_value.all.return_value = [
        run_record(8),
        run_record(7),
        run_record(6),
    ]
    deliveries = MagicMock()
    deliveries.all.return_value = [
        (8, "succeeded", 2),
        (8, "dead_letter", 1),
        (7, "pending", 1),
    ]
    client, session = mocked_client([ownership, runs, deliveries])

    page = await client.get_pilot_review(
        organization_id=7, workflow_id=3, limit=2, before_id=10
    )
    assert [run.run_id for run in page.runs] == [8, 7]
    assert page.next_before_id == 7
    assert page.runs[0].webhooks.accepted == 2
    assert page.runs[0].webhooks.failed == 1
    assert page.runs[0].webhooks.human_receipt == "not_recorded"
    assert page.runs[1].webhooks.queued == 1
    runs_query = sql(session.execute.await_args_list[1].args[0])
    assert "workflows.organization_id = 7" in runs_query
    assert "workflow_runs.workflow_id = 3" in runs_query
    assert "workflow_runs.id < 10" in runs_query
    assert "ORDER BY workflow_runs.id DESC" in runs_query
    assert "LIMIT 3" in runs_query
    delivery_query = sql(session.execute.await_args_list[2].args[0])
    assert "webhook_deliveries.organization_id = 7" in delivery_query
    assert "webhook_deliveries.workflow_run_id IN (8, 7)" in delivery_query


@pytest.mark.asyncio
async def test_empty_page_does_not_read_delivery_table():
    ownership = MagicMock()
    ownership.scalar_one_or_none.return_value = 3
    runs = MagicMock()
    runs.mappings.return_value.all.return_value = []
    client, session = mocked_client([ownership, runs])
    assert await client.get_pilot_review(7, 3) == PilotReviewPage(runs=[])
    assert session.execute.await_count == 2


@pytest.mark.asyncio
async def test_route_derives_tenant_from_auth_and_rejects_invalid_pagination():
    app = FastAPI()
    app.include_router(router)
    app.dependency_overrides[get_user] = lambda: SimpleNamespace(
        selected_organization_id=7
    )
    with patch(
        "api.routes.pilot_review.db_client.get_pilot_review", new_callable=AsyncMock
    ) as get_page:
        get_page.return_value = PilotReviewPage(runs=[])
        async with AsyncClient(
            transport=ASGITransport(app=app), base_url="http://test"
        ) as client:
            response = await client.get(
                "/workflow/3/pilot-review?organization_id=99&before_id=8&limit=2"
            )
            assert response.status_code == 200
            get_page.assert_awaited_once_with(
                organization_id=7, workflow_id=3, before_id=8, limit=2
            )
            for query in ("limit=101", "limit=0", "before_id=0"):
                assert (
                    await client.get(f"/workflow/3/pilot-review?{query}")
                ).status_code == 422
            get_page.return_value = None
            assert (await client.get("/workflow/3/pilot-review")).status_code == 404
            app.dependency_overrides[get_user] = lambda: SimpleNamespace(
                selected_organization_id=None
            )
            assert (await client.get("/workflow/3/pilot-review")).status_code == 400
