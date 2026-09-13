"""Add durable platform usage reports.

Revision ID: c41a8d72e903
Revises: b32f6c81d4a9
"""

import sqlalchemy as sa
from alembic import op

revision = "c41a8d72e903"
down_revision = "b32f6c81d4a9"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "platform_usage_deliveries",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column(
            "workflow_run_id",
            sa.Integer(),
            sa.ForeignKey("workflow_runs.id", ondelete="CASCADE"),
            nullable=False,
            unique=True,
        ),
        sa.Column(
            "organization_id",
            sa.Integer(),
            sa.ForeignKey("organizations.id", ondelete="CASCADE"),
            nullable=False,
        ),
        sa.Column("payload", sa.JSON(), nullable=False),
        sa.Column(
            "retry_safe", sa.Boolean(), nullable=False, server_default=sa.text("false")
        ),
        sa.Column("status", sa.String(20), nullable=False, server_default="pending"),
        sa.Column("attempt_count", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("max_attempts", sa.Integer(), nullable=False, server_default="8"),
        sa.Column("scheduled_for", sa.DateTime(timezone=True)),
        sa.Column("last_error", sa.String(100)),
        sa.Column("last_status_code", sa.Integer()),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
    )
    op.create_index(
        "idx_platform_usage_deliveries_due",
        "platform_usage_deliveries",
        ["scheduled_for"],
        postgresql_where=sa.text("status IN ('pending', 'sending')"),
    )


def downgrade():
    op.drop_table("platform_usage_deliveries")
