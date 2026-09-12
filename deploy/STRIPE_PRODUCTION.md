# Menace Voice Stripe production cutover

Prepared September 12, 2026. The application is still running sandbox billing.
The code changes in this checkout have not been deployed. Live credentials and
a separate API image are staged on the VPS; the running application is unchanged.

## Verified Stripe resources

Account: `acct_1UBuZ1RfvqcBSjAe` (Menace, live mode).

| Plan | Monthly USD | Live price |
| --- | ---: | --- |
| Starter | 49 | `price_1UEuKtRfvqcBSjAello4EqyU` |
| Pro | 149 | `price_1UEuL2RfvqcBSjAetwdux9t6` |

Product IDs are `menace_voice_starter` and `menace_voice_pro`.
Webhook `we_1UEuO0RfvqcBSjAefBBnDWZi` points to
`https://voice.menaceui.com/api/v1/webhooks/stripe`, pins API version
`2026-07-29.dahlia` (the installed Stripe Python SDK version), and is **disabled**
pending cutover. It subscribes to:

- `checkout.session.completed`
- `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
- `invoice.paid`, `invoice.payment_failed`

The signing secret and resource IDs are in the ignored, mode-0600
`.env.stripe-live` file, also staged at `/home/ubuntu/dograh/.env.stripe-live` on
the VPS. Do not commit or display this file. It is a partial settings file, not a
replacement for the production `.env`.

## Credentials and portal verified

The user supplied live API and publishable keys in the ignored, mode-0600
`.env.stripe-live-keys`. This file is also staged at
`/home/ubuntu/dograh/.env.stripe-live-keys`. The API key successfully authenticated
as `acct_1UBuZ1RfvqcBSjAe` and read both live prices. The publishable key has a live
prefix; an authenticated live Checkout remains to be verified.

Live customer portal `bpc_1UEulDRfvqcBSjAe6NSwvwDt` is active and is the account's
default configuration. It enables invoice history, payment method updates,
cancellation at period end, and changes between the two Menace Voice prices with
`create_prorations`. It returns customers to `https://voice.menaceui.com/billing`.

## Blocking prerequisite: activate Stripe

Stripe's live account API reports:

- `charges_enabled=false`
- `payouts_enabled=false`
- `details_submitted=false`

The owner must complete business verification in the live account's Stripe
Dashboard. Do not switch application billing until the API confirms charges are
enabled. Live credentials alone do not activate the account. No payment or
subscription was created in live mode during this preparation.

Tax collection is not configured by this change. Confirm applicable registrations
before enabling automatic tax.

## Staged API image

The remote billing source exactly matched the local unchanged baseline before
staging. The staged image overlays only the tested billing module onto the
currently deployed API image, preserving other production changes:

- Ready image: `dograh-local/dograh-api:stripe-ready-20260912`
- Rollback base: `dograh-local/dograh-api:stripe-baseline-20260912`
- Build context and base-image record: `/home/ubuntu/dograh/run/stripe-cutover-20260912`

Do not activate this image without completing the account and data checks below.
When releasing, apply the same source change to the server checkout so a later
regular build retains the fix. No Git commit or push has been made.

## Existing sandbox state

Production has three organizations. Organization `3` stores customer
`cus_VCNHNnkmVSDTqr` and subscription `sub_1UByYyDcsYWMnGMjYtuFigfo`, with local
Pro/active access. Stripe confirmed this subscription is **sandbox**, not live.
These IDs cannot be used with the live account. No database records were changed.

Before cutover, back up this organization's billing fields. Remove the sandbox
customer/subscription references and reconcile its plan/status/period/trial fields
in one transaction. Do not carry a test subscription forward as paid entitlement.
If continued complimentary access is intended, decide that explicitly first.
Preserve organizations, workflows, credentials, and usage history. Preserve local
trial fields for other organizations; this is not a blanket trial reset.

## Cutover order

1. Confirm Stripe account activation and the credential, portal, and tax checks above.
2. Take a database backup and a mode-0600 backup of the production `.env`.
3. Build and test the billing changes before interrupting the healthy deployment.
   Capture the current API image ID for rollback. Do not rebuild unrelated UI work.
4. Briefly stop billing traffic/API while reconciling the one sandbox organization
   and installing the live API key, publishable key, prices, and webhook secret
   together into the existing root `.env`.
5. Validate Compose with `docker compose --profile remote config --quiet`, deploy
   the tested API image, and restart the API with the new environment.
6. Verify health and that the public publishable key is live. This is configuration
   proof only, not proof of successful billing.
7. Enable the staged live webhook. Confirm signature rejection, successful event
   delivery, retry behavior, and no handler errors.
8. Verify authenticated Checkout prices and portal access. Complete a separately
   authorized real purchase with the owner, confirm its Stripe payment and webhook,
   local entitlement, invoice, and portal cancellation/update behavior. Do not use
   test cards in live mode or claim launch completion from a redirect alone.

Rollback before any live purchase: disable the live webhook, restore the previous
API image, root `.env`, and saved sandbox billing fields, then verify health.
After real purchases, reconcile live events and subscriptions before any rollback;
restoring stale sandbox data would discard payment truth.

## Code verification

Focused suite: `api/tests/test_stripe_webhook.py` and
`api/tests/test_stripe_subscription_access.py`. Tests cover retry after failure,
concurrent delivery, Redis failure, mode mismatch, item billing periods, modern
invoice parent fields, delayed invoice/subscription events, customer ownership,
one-off invoices, and existing-subscription Checkout rejection.

Local verification: 31 focused tests passed; Ruff lint/format, focused mypy, and
`git diff --check` passed. Production lifecycle verification remains pending the
prerequisites above.
