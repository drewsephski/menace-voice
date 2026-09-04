#!/usr/bin/env python3
"""Create Stripe products and monthly prices for Menace Voice SaaS plans.

Usage:
  source venv/bin/activate && set -a && source api/.env && set +a
  python scripts/setup_stripe_products.py

Prints price IDs to add to api/.env:
  STRIPE_STARTER_PRICE_ID=price_...
  STRIPE_PRO_PRICE_ID=price_...
"""

from __future__ import annotations

import os
import sys

from stripe import StripeClient


def main() -> int:
    secret_key = os.getenv("STRIPE_SECRET_KEY")
    if not secret_key:
        print("STRIPE_SECRET_KEY is required", file=sys.stderr)
        return 1

    client = StripeClient(secret_key)

    plans = (
        ("Starter", 4900, "10 agents, telephony, 5 concurrent calls"),
        ("Pro", 14900, "50 agents, campaigns, 20 concurrent calls"),
    )

    print("Created Stripe catalog entries:\n")
    for name, amount, description in plans:
        product = client.products.create(
            params={"name": f"Menace Voice {name}", "description": description}
        )
        price = client.prices.create(
            params={
                "product": product.id,
                "unit_amount": amount,
                "currency": "usd",
                "recurring": {"interval": "month"},
            }
        )
        env_key = f"STRIPE_{name.upper()}_PRICE_ID"
        print(f"{env_key}={price.id}")

    print(
        "\nAdd the lines above to api/.env, then configure a webhook endpoint:\n"
        "  POST https://<your-api>/api/v1/webhooks/stripe\n"
        "Events: checkout.session.completed, customer.subscription.*, invoice.payment_failed"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
