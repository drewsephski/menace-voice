"""Add organization-owned voice clones.

Revision ID: b32f6c81d4a9
Revises: c4e2a1b9d3f7
"""

import sqlalchemy as sa
from alembic import op

revision = "b32f6c81d4a9"
down_revision = "c4e2a1b9d3f7"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "voice_clones",
        sa.Column("id", sa.String(36), primary_key=True),
        sa.Column(
            "organization_id",
            sa.Integer(),
            sa.ForeignKey("organizations.id"),
            nullable=False,
        ),
        sa.Column(
            "created_by", sa.Integer(), sa.ForeignKey("users.id"), nullable=False
        ),
        sa.Column("name", sa.String(80), nullable=False),
        sa.Column("provider_voice_id", sa.String(128), nullable=False),
        sa.Column("credential_source", sa.String(20), nullable=False),
        sa.Column("status", sa.String(30), nullable=False),
        sa.Column("consent_version", sa.String(30), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
    )
    op.create_index(
        "ix_voice_clones_organization_id", "voice_clones", ["organization_id"]
    )


def downgrade():
    op.drop_table("voice_clones")
