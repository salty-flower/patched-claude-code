set shell := ["bash", "-euo", "pipefail", "-c"]

target := env_var_or_default("TARGET_VERSION", "2.1.251")
source := env_var_or_default("TARGET_SOURCE", "canonical")
platform := env_var_or_default("TARGET_PLATFORM", "darwin-arm64")
release_id := env_var_or_default("RELEASE_ID", "patch.local")
resume_transcript_timeout := env_var_or_default("RESUME_TRANSCRIPT_TIMEOUT_SECONDS", "16")

stage version=target source=source:
  tools/patch/resource-guard.sh bun run tools/patch/stage-target.ts --version "{{version}}" --source "{{source}}"

verify version=target source=source: (stage version source)
  tools/patch/resource-guard.sh bun run tools/patch/verify-patches.ts --against "staging/{{version}}/cli.js"
  bun run tools/patch/check-native-extraction-contract.ts

render version=target source=source: (verify version source)
  tools/patch/resource-guard.sh bun run tools/patch/render-patched.ts "{{version}}" --skip-verify

tool-test version=target source=source: (stage version source)
  TARGET_VERSION="{{version}}" bun run --cwd tools test

smoke version=target source=source: \
  (render version source) \
  (smoke-rendered version)

smoke-rendered version=target:
  bun "staging/{{version}}/cli.patched.js" --version

patch-test version=target source=source: \
  (render version source) \
  (_patch-test-rendered version)

_patch-test-rendered version=target:
  tools/patch/resource-guard.sh bun run tools/test/run-patch-tests.ts --version "{{version}}" --bundle "staging/{{version}}/cli.patched.js"

api-stub-smoke version=target source=source resume_timeout=resume_transcript_timeout: \
  (render version source) \
  (_api-stub-smoke-rendered version resume_timeout)

_api-stub-smoke-rendered version=target resume_timeout=resume_transcript_timeout:
  bun run tools/test/oauth-fable-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/custom-model-slots-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/thinking-stream-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{resume_timeout}}"
  bun run tools/test/background-agent-interrupt-pty.ts --bundle "staging/{{version}}/cli.patched.js"

agent-interrupt-playground version=target source=source: (render version source)
  bun run tools/test/interactive-agent-interrupt-stub.ts --bundle "staging/{{version}}/cli.patched.js"

package version=target release_id=release_id source=source: \
  (render version source) \
  (_package-rendered version release_id)

_package-rendered version=target release_id=release_id:
  bun run tools/patch/package-release.ts --version "{{version}}" --release-id "{{release_id}}"

release-source version=target release_id=release_id source=source: \
  (render version source) \
  (_release-source-rendered version release_id)

_release-source-rendered version=target release_id=release_id: \
  (_release-payload version release_id) \
  (_release-tag version release_id)

ci-release-audit version=target release_id=release_id source=source: \
  (tool-test version source) \
  (render version source) \
  (smoke-rendered version) \
  (_patch-test-rendered version) \
  (_api-stub-smoke-rendered version resume_transcript_timeout) \
  (_package-rendered version release_id) \
  (_release-source-rendered version release_id)
  test -s cli.js
  test -s manifest.json
  test -s package.json
  test -x bin/claude-patched
  test -s prompts/catalog/manifest.json
  bun ./cli.js --version
  git ls-tree -r --name-only "claude-code-{{version}}-{{release_id}}" > source-tag-files.txt
  shopt -s nullglob globstar; catalog_files=(prompts/catalog/manifest.json prompts/catalog/gaps.json prompts/catalog/entries/**/*.md); { printf '%s\n' bin/claude-patched cli.js flake.lock flake.nix manifest.json package.json runtime/macos-keychain.ts runtime/release-integrity.ts runtime/system-prompt-overrides.ts; printf '%s\n' "${catalog_files[@]}"; for graph_file in graph.patched/**/* graph/**/*; do [[ -f "$graph_file" ]] && printf '%s\n' "$graph_file"; done; } | sort > expected-source-tag-files.txt
  diff -u expected-source-tag-files.txt source-tag-files.txt

prompt-catalog version=target release_id=release_id:
  bun run tools/patch/extract-prompt-catalog.ts --version "{{version}}" --release-id "{{release_id}}"

prompt-identity-draft version previous_version:
  bun run tools/patch/reconcile-prompt-identities.ts --version "{{version}}" --previous-version "{{previous_version}}"

prompt-identity-prepare version=target:
  bun run tools/patch/prepare-prompt-identity-bump.ts --version "{{version}}"

prompt-identity-audit *args:
  bun run tools/patch/audit-prompt-identity-history.ts {{args}}

prompt-identity-finalize draft:
  bun run tools/patch/finalize-prompt-identities.ts "{{draft}}"

bump-prepare version=target source=source:
  tools/patch/resource-guard.sh bun run tools/patch/prepare-target-bump.ts --version "{{version}}" --source "{{source}}"

_release-payload version=target release_id=release_id:
  bun run tools/patch/write-source-release.ts --version "{{version}}" --release-id "{{release_id}}"

_release-tag version=target release_id=release_id:
  bun run tools/patch/create-source-tag.ts --version "{{version}}" --release-id "{{release_id}}"

detect-upstream *args:
  bun run tools/patch/detect-upstream.ts {{args}}

check:
  prek run --all-files

release-dry version=target release_id=release_id source=source:
  #!/usr/bin/env bash
  set -euo pipefail
  exec tools/patch/resource-guard.sh bash -c '
    set -euo pipefail
    lock_path="${PATCHED_CC_HEAVY_LOCK_PATH:-${TMPDIR:-/tmp}/patched-claude-code-heavy.lock}"
    exec 9>"$lock_path"
    echo "waiting for heavy-build lock: $lock_path" >&2
    flock -w 3600 9
    export PATCHED_CC_HEAVY_LOCK_HELD=1 PATCHED_CC_HEAVY_LOCK_PATH="$lock_path"
    just render "{{version}}" "{{source}}"
    just smoke-rendered "{{version}}"
    just _patch-test-rendered "{{version}}"
    just _package-rendered "{{version}}" "{{release_id}}"
  '

platform-audit version=target:
  bun run tools/platform/platform-audit.ts --version "{{version}}"

platform-patch-test version=target:
  #!/usr/bin/env bash
  set -euo pipefail
  for audit_platform in darwin-arm64 linux-x64; do
    echo "==> patch-test {{version}} from direct ${audit_platform}"
    TARGET_SOURCE=direct TARGET_PLATFORM="${audit_platform}" just patch-test "{{version}}"
  done

alignment-report version=target:
  bun run tools/reconstruct/alignment-report.ts --target "staging/{{version}}/cli.js" --target-label "{{version}}"

typecheck:
  bun run --cwd tools typecheck
