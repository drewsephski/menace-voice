#!/usr/bin/env bash

set -e
set -x

mypy api
# Keep the check gate aligned with the rules applied by scripts/format.sh.
ruff check api --select I,F401
ruff format api --check
