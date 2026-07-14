set shell := ["bash", "-euo", "pipefail", "-c"]

target := env_var_or_default("TARGET_VERSION", "2.1.208")
source := env_var_or_default("TARGET_SOURCE", "canonical")
platform := env_var_or_default("TARGET_PLATFORM", "darwin-arm64")
release_id := env_var_or_default("RELEASE_ID", "patch.local")
resume_transcript_timeout := env_var_or_default("RESUME_TRANSCRIPT_TIMEOUT_SECONDS", "16")

stage version=target source=source:
  bun run tools/patch/stage-target.ts --version "{{version}}" --source "{{source}}"

verify version=target source=source: (stage version source)
  bun run tools/patch/verify-patches.ts --against "staging/{{version}}/cli.js"
  bun run tools/patch/check-native-extraction-contract.ts

render version=target source=source: (verify version source)
  bun run tools/patch/render-patched.ts "{{version}}" --skip-verify

tool-test version=target source=source: (stage version source)
  TARGET_VERSION="{{version}}" bun run --cwd tools test

smoke version=target source=source: (render version source)
  bun "staging/{{version}}/cli.patched.js" --version

smoke-rendered version=target:
  bun "staging/{{version}}/cli.patched.js" --version

patch-test version=target source=source: (render version source)
  bun run tools/test/run-patch-tests.ts --version "{{version}}" --bundle "staging/{{version}}/cli.patched.js"

patch-test-rendered version=target:
  bun run tools/test/run-patch-tests.ts --version "{{version}}" --bundle "staging/{{version}}/cli.patched.js"

api-stub-smoke version=target source=source timeout=resume_transcript_timeout: (render version source)
  bun run tools/test/tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"

api-stub-smoke-rendered version=target timeout=resume_transcript_timeout:
  bun run tools/test/tui-stub-smoke.ts --bundle "staging/{{version}}/cli.patched.js"
  bun run tools/test/resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"

resume-transcript-smoke version=target source=source timeout=resume_transcript_timeout: (render version source)
  bun run tools/test/resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"

resume-transcript-smoke-rendered version=target timeout=resume_transcript_timeout:
  bun run tools/test/resume-transcript-tui-smoke.ts --bundle "staging/{{version}}/cli.patched.js" --timeout-seconds "{{timeout}}"

package version=target release_id=release_id source=source: (render version source)
  bun run tools/patch/package-release.ts --version "{{version}}" --release-id "{{release_id}}"

package-rendered version=target release_id=release_id:
  bun run tools/patch/package-release.ts --version "{{version}}" --release-id "{{release_id}}"

release-source version=target release_id=release_id source=source: \
  (render version source) \
  (_release-payload version release_id) \
  (_release-tag version release_id)

release-source-rendered version=target release_id=release_id: \
  (_release-payload version release_id) \
  (_release-tag version release_id)

ci-release-audit version=target release_id=release_id source=source: \
  (tool-test version source) \
  (render version source) \
  (smoke-rendered version) \
  (patch-test-rendered version) \
  (package-rendered version release_id) \
  (release-source-rendered version release_id)
  test -s cli.js
  test -s manifest.json
  test -s package.json
  test -x bin/claude-patched
  bun ./cli.js --version
  git ls-tree -r --name-only "claude-code-{{version}}-{{release_id}}" > source-tag-files.txt
  diff -u <(printf '%s\n' bin/claude-patched cli.js flake.lock flake.nix manifest.json package.json) source-tag-files.txt

_release-payload version=target release_id=release_id:
  bun run tools/patch/write-source-release.ts --version "{{version}}" --release-id "{{release_id}}"

_release-tag version=target release_id=release_id:
  bun run tools/patch/create-source-tag.ts --version "{{version}}" --release-id "{{release_id}}"

detect-upstream *args:
  bun run tools/patch/detect-upstream.ts {{args}}

check:
  prek run --all-files

release-dry version=target release_id=release_id source=source: \
  (render version source) \
  (smoke-rendered version) \
  (patch-test-rendered version) \
  (package-rendered version release_id)

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
