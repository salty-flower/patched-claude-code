#!/usr/bin/env bash
# Put memory-intensive just recipes in a bounded Linux user scope.

set -euo pipefail

if (($# == 0)); then
  echo "usage: resource-guard.sh <command> [args...]" >&2
  exit 2
fi

if [[ "${PCC_RESOURCE_SCOPE_HELD:-0}" == "1" ]]; then
  exec "$@"
fi

if [[ "$(uname -s)" != "Linux" ]]; then
  exec "$@"
fi

if ! command -v systemd-run >/dev/null 2>&1; then
  if [[ "${PCC_RESOURCE_GUARD:-auto}" == "required" ]]; then
    echo "resource guard required, but systemd-run is unavailable" >&2
    exit 1
  fi
  echo "resource guard unavailable (systemd-run missing); continuing unbounded" >&2
  exec "$@"
fi

if ! systemd-run --user --scope --quiet true >/dev/null 2>&1; then
  if [[ "${PCC_RESOURCE_GUARD:-auto}" == "required" ]]; then
    echo "resource guard required, but no usable systemd user scope is available" >&2
    exit 1
  fi
  echo "resource guard unavailable (systemd user scope missing); continuing unbounded" >&2
  exec "$@"
fi

exec systemd-run --user --scope \
  -p MemoryHigh=12G \
  -p MemoryMax=20G \
  -p MemorySwapMax=8G \
  --setenv=PCC_RESOURCE_SCOPE_HELD=1 \
  -- "$@"
