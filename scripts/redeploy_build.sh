#!/usr/bin/env bash
# Redeploy a remote install in build mode (docker-compose.override.yaml present).
# Pulls latest code, rebuilds api/ui images, and restarts via remote_up.sh.
# If a build or health check fails, the previous images are restored and the
# old stack is brought back automatically.
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
BUILD_ATTEMPTS="${DOGRAH_BUILD_ATTEMPTS:-3}"

if [[ ! "$BUILD_ATTEMPTS" =~ ^[1-9][0-9]*$ ]]; then
  echo "Error: DOGRAH_BUILD_ATTEMPTS must be a positive integer." >&2
  exit 1
fi

PREVIOUS_API_IMAGE_ID=""
PREVIOUS_API_IMAGE_NAME=""
PREVIOUS_UI_IMAGE_ID=""
PREVIOUS_UI_IMAGE_NAME=""
ROLLBACK_ARMED=0

capture_service_image() {
  local service="$1"
  local container_id

  container_id="$("${COMPOSE[@]}" "${PROFILE[@]}" ps -q "$service" 2>/dev/null || true)"
  if [[ -n "$container_id" ]]; then
    "${DOCKER[@]}" inspect --format '{{.Image}} {{.Config.Image}}' "$container_id"
  fi
}

restore_previous_deployment() {
  local status="$?"
  trap - EXIT INT TERM

  if [[ "$status" -ne 0 && "$ROLLBACK_ARMED" -eq 1 ]]; then
    echo "==> Deployment failed — restoring the previous images and stack..." >&2

    if [[ -n "$PREVIOUS_API_IMAGE_ID" && -n "$PREVIOUS_API_IMAGE_NAME" ]]; then
      "${DOCKER[@]}" image tag "$PREVIOUS_API_IMAGE_ID" "$PREVIOUS_API_IMAGE_NAME"
    fi
    if [[ -n "$PREVIOUS_UI_IMAGE_ID" && -n "$PREVIOUS_UI_IMAGE_NAME" ]]; then
      "${DOCKER[@]}" image tag "$PREVIOUS_UI_IMAGE_ID" "$PREVIOUS_UI_IMAGE_NAME"
    fi

    if "$REPO_ROOT/remote_up.sh" --no-pull; then
      echo "✓ Previous deployment restored" >&2
    else
      echo "Error: automatic rollback failed. Run: ./remote_up.sh --no-pull" >&2
    fi
  fi

  exit "$status"
}

trap restore_previous_deployment EXIT

echo "==> Pulling latest code..."
git pull --ff-only
git submodule update --init --recursive

read -r PREVIOUS_API_IMAGE_ID PREVIOUS_API_IMAGE_NAME < <(capture_service_image api) || true
read -r PREVIOUS_UI_IMAGE_ID PREVIOUS_UI_IMAGE_NAME < <(capture_service_image ui) || true

echo "==> Stopping stack (frees RAM for Next.js build)..."
"${COMPOSE[@]}" "${PROFILE[@]}" down
ROLLBACK_ARMED=1

BUILD_ARGS=()
if [[ "$NO_CACHE" == "1" ]]; then
  BUILD_ARGS+=(--no-cache)
fi

echo "==> Building api and ui..."
for attempt in $(seq 1 "$BUILD_ATTEMPTS"); do
  if COMPOSE_BAKE=false "${COMPOSE[@]}" "${PROFILE[@]}" build "${BUILD_ARGS[@]}" api ui; then
    break
  fi

  if [[ "$attempt" -eq "$BUILD_ATTEMPTS" ]]; then
    echo "Error: build failed after ${BUILD_ATTEMPTS} attempts." >&2
    exit 1
  fi

  delay=$((attempt * 10))
  echo "==> Build attempt ${attempt}/${BUILD_ATTEMPTS} failed; retrying in ${delay}s..." >&2
  sleep "$delay"
done

echo "==> Starting stack..."
"$REPO_ROOT/remote_up.sh" --no-pull

PUBLIC_BASE_URL="$(grep -E '^PUBLIC_BASE_URL=' .env | cut -d= -f2- | tr -d '"' || true)"
if [[ -n "$PUBLIC_BASE_URL" ]]; then
  echo "==> Waiting for API health..."
  for _ in $(seq 1 30); do
    if curl -fsS "${PUBLIC_BASE_URL}/api/v1/health" >/dev/null 2>&1; then
      echo "✓ API healthy at ${PUBLIC_BASE_URL}/api/v1/health"
      ROLLBACK_ARMED=0
      exit 0
    fi
    sleep 2
  done
  echo "Warning: API health check timed out — run: docker compose --profile remote ps" >&2
  exit 1
fi

ROLLBACK_ARMED=0
echo "✓ Stack started (set PUBLIC_BASE_URL in .env for automatic health check)"
