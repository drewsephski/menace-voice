#!/usr/bin/env bash
# Redeploy a remote install in build mode (docker-compose.override.yaml present).
# Pulls latest code, rebuilds api/ui images, and restarts via remote_up.sh.
#
# Usage (from the repo root on the VPS):
#   ./scripts/redeploy_build.sh
#   ./scripts/redeploy_build.sh --no-cache
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

NO_CACHE=0
for arg in "$@"; do
  case "$arg" in
    --no-cache) NO_CACHE=1 ;;
    -h|--help)
      echo "Usage: $0 [--no-cache]"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg" >&2
      exit 1
      ;;
  esac
done

if [[ ! -f docker-compose.override.yaml ]]; then
  echo "Error: docker-compose.override.yaml not found — this script is for build-mode installs." >&2
  echo "For prebuilt installs, use: bash update_remote.sh && ./remote_up.sh" >&2
  exit 1
fi

if [[ $EUID -eq 0 ]] || ! command -v sudo >/dev/null 2>&1; then
  DOCKER=(docker)
  COMPOSE=(docker compose)
else
  DOCKER=(sudo docker)
  COMPOSE=(sudo docker compose)
fi

PROFILE=(--profile remote)

echo "==> Pulling latest code..."
git pull --ff-only
git submodule update --init --recursive

echo "==> Stopping stack (frees RAM for Next.js build)..."
"${COMPOSE[@]}" "${PROFILE[@]}" down

BUILD_ARGS=()
if [[ "$NO_CACHE" == "1" ]]; then
  BUILD_ARGS+=(--no-cache)
fi

echo "==> Building api and ui..."
if ! "${COMPOSE[@]}" "${PROFILE[@]}" build "${BUILD_ARGS[@]}" api ui; then
  echo "==> Build failed — pruning Docker build cache and retrying..."
  "${DOCKER[@]}" builder prune -af
  "${COMPOSE[@]}" "${PROFILE[@]}" build --no-cache api ui
fi

echo "==> Starting stack..."
"$REPO_ROOT/remote_up.sh"

PUBLIC_BASE_URL="$(grep -E '^PUBLIC_BASE_URL=' .env | cut -d= -f2- | tr -d '"' || true)"
if [[ -n "$PUBLIC_BASE_URL" ]]; then
  echo "==> Waiting for API health..."
  for _ in $(seq 1 30); do
    if curl -fsS "${PUBLIC_BASE_URL}/api/v1/health" >/dev/null 2>&1; then
      echo "✓ API healthy at ${PUBLIC_BASE_URL}/api/v1/health"
      exit 0
    fi
    sleep 2
  done
  echo "Warning: API health check timed out — run: docker compose --profile remote ps" >&2
  exit 1
fi

echo "✓ Stack started (set PUBLIC_BASE_URL in .env for automatic health check)"
