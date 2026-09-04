import argparse
import json
import sys
from pathlib import Path
from typing import Any

from pydantic import ValidationError

from api.services.pilot.analytics import build_pilot_analytics_properties
from api.services.pilot.classification import classify_prohibited_claims
from api.services.pilot.contracts import CallbackSummary, SevereFailure


def inspect_fixture(path: Path) -> dict[str, Any]:
    document = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(document, dict):
        raise TypeError("fixture root must be an object")
    raw_results = document.get("results")
    if not isinstance(raw_results, list):
        raise TypeError("fixture must contain a results array")

    results: list[dict[str, Any]] = []
    for raw_result in raw_results:
        if not isinstance(raw_result, dict):
            raise TypeError("fixture results must be objects")
        response_text = raw_result.get("response_text", "")
        if not isinstance(response_text, str):
            raise TypeError("response_text must be a string when present")
        observed_at = raw_result.get("observed_at")
        summary_input = {
            key: value
            for key, value in raw_result.items()
            if key not in {"response_text", "observed_at"}
        }
        summary = CallbackSummary.model_validate(summary_input)
        findings = classify_prohibited_claims(response_text)
        if findings:
            summary = summary.model_copy(
                update={
                    "severe_failures": tuple(summary.severe_failures)
                    + tuple(
                        SevereFailure(
                            category=finding.category,
                            rule_id=finding.rule_id,
                            **({"observed_at": observed_at} if observed_at else {}),
                        )
                        for finding in findings
                    )
                }
            )
        results.append(
            {
                "protected_callback": summary.model_dump(mode="json"),
                "analytics": build_pilot_analytics_properties(summary),
            }
        )
    return {
        "inspection_schema_version": "1.0",
        "release_eligibility": "NOT_RELEASE_ELIGIBLE",
        "results": results,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--fixture", required=True, type=Path)
    args = parser.parse_args()
    try:
        output = inspect_fixture(args.fixture)
    except (
        OSError,
        TypeError,
        ValueError,
        ValidationError,
        json.JSONDecodeError,
    ) as error:
        print(
            f"Invalid HVAC pilot fixture: {error.__class__.__name__}", file=sys.stderr
        )
        return 2
    json.dump(output, sys.stdout, indent=2, sort_keys=True)
    sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
