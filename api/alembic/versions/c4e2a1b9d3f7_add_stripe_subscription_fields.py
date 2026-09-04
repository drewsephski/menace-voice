"""add stripe subscription fields to organizations

Revision ID: c4e2a1b9d3f7
Revises: b8c4d2e1f0a9
Create Date: 2026-09-04 00:00:00.000000

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

revision: str = "c4e2a1b9d3f7"
down_revision: Union[str, None] = "b8c4d2e1f0a9"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "organizations",
        sa.Column("stripe_customer_id", sa.String(), nullable=True),
    )
    op.add_column(
        "organizations",
        sa.Column("stripe_subscription_id", sa.String(), nullable=True),
    )
    op.add_column(
        "organizations",
        sa.Column(
            "subscription_plan",
            sa.String(),
            nullable=False,
            server_default="free",
        ),
    )
    op.add_column(
        "organizations",
        sa.Column("subscription_status", sa.String(), nullable=True),
    )
    op.add_column(
        "organizations",
        sa.Column("subscription_current_period_end", sa.DateTime(timezone=True), nullable=True),
    )
    op.add_column(
        "organizations",
        sa.Column("trial_ends_at", sa.DateTime(timezone=True), nullable=True),
    )
    op.create_index(
        "ix_organizations_stripe_customer_id",
        "organizations",
        ["stripe_customer_id"],
        unique=True,
        postgresql_where=sa.text("stripe_customer_id IS NOT NULL"),
    )
    op.create_index(
        "ix_organizations_stripe_subscription_id",
        "organizations",
        ["stripe_subscription_id"],
        unique=True,
        postgresql_where=sa.text("stripe_subscription_id IS NOT NULL"),
    )


def downgrade() -> None:
    op.drop_index("ix_organizations_stripe_subscription_id", table_name="organizations")
    op.drop_index("ix_organizations_stripe_customer_id", table_name="organizations")
    op.drop_column("organizations", "trial_ends_at")
    op.drop_column("organizations", "subscription_current_period_end")
    op.drop_column("organizations", "subscription_status")
    op.drop_column("organizations", "subscription_plan")
    op.drop_column("organizations", "stripe_subscription_id")
    op.drop_column("organizations", "stripe_customer_id")
