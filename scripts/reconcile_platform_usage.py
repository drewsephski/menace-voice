"""Operator-only platform billing recovery; requires existing server DB access.

No billing API call is made here. Verify MPS processing status externally before
using either confirmation command. See docs/contribution/platform-usage-recovery.mdx.
"""

import argparse
import asyncio
import json

from api.db import db_client


async def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "action", choices=["list", "confirm-processed", "confirm-not-processed"]
    )
    parser.add_argument("--organization-id", type=int, required=True)
    parser.add_argument("--delivery-id", type=int)
    parser.add_argument("--after-id", type=int, default=0)
    args = parser.parse_args()
    if args.action != "list" and args.delivery_id is None:
        parser.error("--delivery-id is required for a confirmation")
    try:
        if args.action == "list":
            deliveries = await db_client.list_platform_usage_dead_letters(
                args.organization_id,
                after_id=args.after_id,
            )
            for delivery in deliveries:
                print(
                    json.dumps(
                        {
                            "id": delivery.id,
                            "workflow_run_id": delivery.workflow_run_id,
                            "attempt_count": delivery.attempt_count,
                            "last_error": delivery.last_error,
                            "last_status_code": delivery.last_status_code,
                        }
                    )
                )
        else:
            changed = await db_client.reconcile_platform_usage_delivery(
                args.delivery_id,
                args.organization_id,
                processed=args.action == "confirm-processed",
            )
            if not changed:
                raise SystemExit(
                    "No matching dead letter in the specified organization"
                )
            print("Confirmed; the durable state was updated.")
    finally:
        await db_client.engine.dispose()


if __name__ == "__main__":
    asyncio.run(main())
