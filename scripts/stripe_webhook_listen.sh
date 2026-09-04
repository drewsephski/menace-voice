#!/usr/bin/env bash
# Forward Stripe webhooks to the local API and print the signing secret.
#
# Usage:
#   ./scripts/stripe_webhook_listen.sh
#
# 1. Copy the printed whsec_... value into api/.env as STRIPE_WEBHOOK_SECRET
# 2. Restart the API so it picks up the new secret
# 3. Leave this process running while testing checkout

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ ! -f api/.env ]]; then
  echo "api/.env not found" >&2
  exit 1
fi

set -a
# shellcheck disable=SC1091
source api/.env
set +a

if [[ -z "${STRIPE_SECRET_KEY:-}" ]]; then
  echo "STRIPE_SECRET_KEY is not set in api/.env" >&2
  exit 1
fi

BACKEND_URL="${BACKEND_API_ENDPOINT:-http://localhost:8000}"
BACKEND_URL="${BACKEND_URL%/}"
WEBHOOK_URL="${BACKEND_URL}/api/v1/webhooks/stripe"

STRIPE_BIN="${ROOT}/.tools/bin/stripe"
if [[ ! -x "$STRIPE_BIN" ]]; then
  STRIPE_BIN="stripe"
fi

echo "Forwarding Stripe webhooks to: ${WEBHOOK_URL}"
echo ""
echo "After 'Ready!' appears, copy the webhook signing secret (whsec_...) into:"
echo "  api/.env  ->  STRIPE_WEBHOOK_SECRET=whsec_..."
echo "Then restart the API."
echo ""

exec "$STRIPE_BIN" listen \
  --api-key "$STRIPE_SECRET_KEY" \
  --forward-to "$WEBHOOK_URL" \
  --events checkout.session.completed,customer.subscription.created,customer.subscription.updated,customer.subscription.deleted,invoice.payment_failed,invoice.paid
