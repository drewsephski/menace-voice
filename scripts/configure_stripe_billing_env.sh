#!/usr/bin/env bash
# Upsert Stripe billing keys into the compose-root .env (next to docker-compose.yaml).
# Run from the dograh repo root on the VPS after creating a production webhook in Stripe.
#
# Usage:
#   ./scripts/configure_stripe_billing_env.sh
# Or non-interactive:
#   STRIPE_SECRET_KEY=sk_live_... STRIPE_PUBLISHABLE_KEY=pk_live_... \
#   STRIPE_WEBHOOK_SECRET=whsec_... STRIPE_STARTER_PRICE_ID=price_... \
#   STRIPE_PRO_PRICE_ID=price_... ./scripts/configure_stripe_billing_env.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${DOGRAH_ENV_FILE:-$ROOT/.env}"

upsert() {
  local key="$1"
  local value="$2"
  local tmp="${ENV_FILE}.tmp.$$"
  if [[ ! -f "$ENV_FILE" ]]; then
    touch "$ENV_FILE"
  fi
  awk -v key="$key" -v val="$value" '
    BEGIN { done = 0 }
    $0 ~ "^" key "=" {
      print key "=" val
      done = 1
      next
    }
    { print }
    END { if (!done) print key "=" val }
  ' "$ENV_FILE" > "$tmp"
  mv "$tmp" "$ENV_FILE"
}

prompt_if_empty() {
  local var_name="$1"
  local prompt="$2"
  local current="${!var_name:-}"
  if [[ -z "$current" ]]; then
    read -r -p "$prompt: " current
  fi
  printf -v "$var_name" '%s' "$current"
}

cd "$ROOT"

if [[ ! -f docker-compose.yaml ]]; then
  echo "docker-compose.yaml not found in $ROOT" >&2
  exit 1
fi

echo "Updating Stripe billing keys in: $ENV_FILE"
echo ""

prompt_if_empty STRIPE_SECRET_KEY "STRIPE_SECRET_KEY (sk_live_... or sk_test_...)"
prompt_if_empty STRIPE_PUBLISHABLE_KEY "STRIPE_PUBLISHABLE_KEY (pk_live_... or pk_test_...)"
prompt_if_empty STRIPE_WEBHOOK_SECRET "STRIPE_WEBHOOK_SECRET (whsec_... from Stripe Dashboard webhook)"
prompt_if_empty STRIPE_STARTER_PRICE_ID "STRIPE_STARTER_PRICE_ID"
prompt_if_empty STRIPE_PRO_PRICE_ID "STRIPE_PRO_PRICE_ID"

for var in STRIPE_SECRET_KEY STRIPE_PUBLISHABLE_KEY STRIPE_WEBHOOK_SECRET \
  STRIPE_STARTER_PRICE_ID STRIPE_PRO_PRICE_ID; do
  if [[ -z "${!var:-}" ]]; then
    echo "$var is required" >&2
    exit 1
  fi
done

upsert STRIPE_SECRET_KEY "$STRIPE_SECRET_KEY"
upsert STRIPE_PUBLISHABLE_KEY "$STRIPE_PUBLISHABLE_KEY"
upsert STRIPE_WEBHOOK_SECRET "$STRIPE_WEBHOOK_SECRET"
upsert STRIPE_STARTER_PRICE_ID "$STRIPE_STARTER_PRICE_ID"
upsert STRIPE_PRO_PRICE_ID "$STRIPE_PRO_PRICE_ID"

echo ""
echo "Done. Redeploy so the API container picks up the new values:"
echo "  ./scripts/redeploy_build.sh"
echo ""
PUBLIC_BASE_URL="$(grep -E '^PUBLIC_BASE_URL=' "$ENV_FILE" 2>/dev/null | cut -d= -f2- | tr -d '"' || true)"
PUBLIC_HOST="$(grep -E '^PUBLIC_HOST=' "$ENV_FILE" 2>/dev/null | cut -d= -f2- | tr -d '"' || true)"
WEBHOOK_BASE="${PUBLIC_BASE_URL:-https://${PUBLIC_HOST}}"
if [[ -n "$WEBHOOK_BASE" && "$WEBHOOK_BASE" != "https://" ]]; then
  echo "Stripe Dashboard webhook URL:"
  echo "  ${WEBHOOK_BASE%/}/api/v1/webhooks/stripe"
fi
