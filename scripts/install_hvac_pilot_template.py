import argparse
import asyncio
import json
import sys
from pathlib import Path

from api.db.workflow_template_client import (
    WorkflowTemplateClient,
    WorkflowTemplateInstallError,
)
from api.services.workflow.templates.hvac_missed_call import (
    BUNDLE_PATH,
    HVAC_TEMPLATE_SLUG,
    BundleValidationError,
    install_bundle,
    load_bundle,
)


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate and reconcile the versioned HVAC missed-call template."
    )
    parser.add_argument("--check", action="store_true", help="Report without writing.")
    parser.add_argument("--bundle", type=Path, default=BUNDLE_PATH)
    return parser.parse_args()


async def _run() -> int:
    args = _parse_args()
    client = WorkflowTemplateClient()
    try:
        result = await install_bundle(
            client,
            bundle=load_bundle(args.bundle),
            check=args.check,
        )
        print(
            json.dumps(
                {
                    "action": result.action,
                    "changed": result.changed,
                    "checksum": result.checksum,
                    "slug": HVAC_TEMPLATE_SLUG,
                    "template_id": result.template_id,
                    "version": result.version,
                },
                sort_keys=True,
            )
        )
        return 0
    finally:
        await client.engine.dispose()


def main() -> int:
    try:
        return asyncio.run(_run())
    except (BundleValidationError, WorkflowTemplateInstallError) as exc:
        print(
            json.dumps(
                {"error": type(exc).__name__, "message": str(exc)},
                sort_keys=True,
            ),
            file=sys.stderr,
        )
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
