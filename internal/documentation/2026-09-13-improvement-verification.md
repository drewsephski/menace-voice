---
title: Improvement implementation verification
description: Local verification and rollout requirements for the September 13 improvement pass.
---

Implemented all eleven audit fixes and both enhancements in the local checkout.
No deployment, production migration, live provider call, or Git publication was
performed.

## Implemented changes

| Area | Result |
| --- | --- |
| Development and CI | Pinned pnpm installation uses the committed lockfile; CI runs UI type checking and tests; lint commands match the repository's formatting checks. |
| Callback authentication | Cloudonix callbacks require a dedicated native Bearer secret. Twilio and Telnyx transfers verify signatures and bind callbacks to the expected provider, account, and call. |
| Webhook destinations | Hosted delivery rejects private destinations, validates every resolved IP, pins the connection while preserving TLS identity, disables redirects, and retains safe address fallback. |
| Metadata access | Storage lookup requires organization-owned run evidence; only the explicit administrator voicemail case permits an ownerless record. |
| Platform billing | A persisted per-run obligation, fenced delivery claims, bounded retries, recovery sweeper, and operator reconciliation replace completion-only delivery. Ambiguous outcomes remain parked unless receiver idempotency is verified. |
| Campaign counters | Queue acknowledgement and processed-count increment are atomic and idempotent. |
| Recording and telemetry mutations | Failed SDK responses retain drafts and records instead of showing a false success. |
| Chat drafts | A response cannot erase a newer draft; failed edit retries preserve the user's text. |
| Audio previews | Cancellation and unmount invalidate pending requests and release playback resources. |
| Campaign cancellation | Predial cancellation releases reservations; potentially accepted provider calls retain ownership for reconciliation and are not requeued. |
| Circuit breaker | Duplicate terminal callbacks count once, with failure precedence and atomic Redis updates. |
| Saved regressions | Completed conversations can be saved, replayed against a fixed draft/published snapshot, and checked for visited nodes and reply text. External-action graphs are rejected; completion integrations are skipped. |
| Pilot review | The run list links to a paginated evidence review showing recorded outcomes, transfers, usage, and webhook acceptance. Unknown costs and human receipt remain explicit. |

## Local verification

- Production UI build passed, including the new pilot-review route.
- All 429 UI tests passed across 73 files; TypeScript and ESLint passed.
- Full API suite: 2,596 passed and five failed. All five failures reproduce at
  the original revision: stale Twilio/Vobiz branding assertions, a custom-tool
  result-shape assertion, a fixed documentation-count assertion, and existing
  Python SDK generated-file drift.
- After the final callback credential guard, all 462 tests in the 30 changed
  backend test files passed. The callback-specific suite also passed its
  credential-restoration and no-provider-I/O regressions.
- Targeted backend checks include actual PostgreSQL concurrent claims and
  campaign counters, real Redis callback races, real HTTPX transport behavior,
  cryptographic signature validation, and tenant-scoped scenario persistence.
- Repository import/unused-import checks and Python formatting passed.
- Global backend mypy remains non-green: 1,859 errors in 218 files, compared
  with the initial 1,893 errors in 219 files. Focused checks for new billing,
  webhook-security, pilot-projection, and regression-service modules passed.
- OpenAPI and the generated UI client were refreshed together. Git whitespace
  checks passed.

The API tests used the test database with Docker hostnames mapped to localhost
and a disposable Redis instance. The billing migration was applied to that test
database only. Provider and model effects were mocked; these checks do not prove
live call, payment, or human-handoff behavior.

## Before deployment

1. Apply migration `c41a8d72e903` before starting the updated API and worker.
2. Prepare existing Cloudonix callback secrets using the staged instructions in
   [Cloudonix integration](/integrations/telephony/cloudonix). Verify authenticated
   inbound, completion, CDR, and transfer callbacks in a provider test environment.
3. Keep `MPS_PLATFORM_USAGE_IDEMPOTENCY_CONFIRMED` unset until the receiver's
   deduplication contract is verified. Use
   [platform usage recovery](/contribution/platform-usage-recovery) for ambiguous
   outcomes. Historical runs and campaign counters are not automatically backfilled.

User instructions for the enhancements are in
[editing a workflow](/voice-agent/editing-a-workflow) and
[calls and runs](/core-concepts/calls-and-runs).
