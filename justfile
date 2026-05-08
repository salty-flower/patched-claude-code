set shell := ["bash", "-euo", "pipefail", "-c"]

target := env_var_or_default("TARGET_VERSION", "2.1.132")
platform_package := env_var_or_default("TARGET_PLATFORM_PACKAGE", "@anthropic-ai/claude-code-darwin-arm64")
source := env_var_or_default("TARGET_SOURCE", "canonical")
platform := env_var_or_default("TARGET_PLATFORM", "darwin-arm64")
canonical_base := env_var_or_default("TARGET_CANONICAL_BASE", "darwin-arm64")

stage version=target source=source:
  #!/usr/bin/env bash
  set -euo pipefail
  manifest="staging/{{version}}/stage-manifest.json"
  if [[ -s "staging/{{version}}/cli.js" && -f "$manifest" ]]; then
    current_channel="$(jq -r '.channel // "npm"' "$manifest")"
    current_platform_package="$(jq -r '.platformPackage // ""' "$manifest")"
    current_gcs_platform="$(jq -r '.gcsPlatform // ""' "$manifest")"
    if [[ "{{source}}" == "npm" && "$current_channel" == "npm" && "$current_platform_package" == "{{platform_package}}" ]]; then
      echo "staging/{{version}}/cli.js already staged from npm"
      exit 0
    fi
    if [[ "{{source}}" == "gcs" && "$current_channel" == "gcs" && "$current_gcs_platform" == "{{platform}}" ]]; then
      echo "staging/{{version}}/cli.js already staged from GCS {{platform}}"
      exit 0
    fi
  fi
  if [[ "{{source}}" == "canonical" ]]; then
    just canonical-stage "{{version}}"
  elif [[ "{{source}}" == "gcs" ]]; then
    bun run tools/patch/stage-claude-code.ts "{{version}}" --source gcs --platform "{{platform}}"
  elif [[ "{{source}}" == "npm" ]]; then
    bun run tools/patch/stage-claude-code.ts "{{version}}" --platform-package "{{platform_package}}"
  else
    echo "unsupported TARGET_SOURCE={{source}}; expected canonical, npm, or gcs" >&2
    exit 2
  fi

canonical-stage version=target:
  bun run tools/platform/merge-platform-bundles.ts --version "{{version}}" --platform darwin-arm64 --platform linux-x64 --base "{{canonical_base}}" --generalize-unknown-string-literals

stage-gcs version=target platform=platform:
  bun run tools/patch/stage-claude-code.ts "{{version}}" --source gcs --platform "{{platform}}"

verify version=target source=source: (stage version source)
  bun run tools/patch/verify-patches.ts --against "staging/{{version}}/cli.js"
  bun run tools/patch/check-native-extraction-contract.ts

render version=target source=source: (verify version source)
  bun run tools/patch/render-patched.ts "{{version}}"

smoke version=target source=source: (render version source)
  bun "staging/{{version}}/cli.patched.js" --version

patch-test version=target source=source: (render version source)
  bun run tools/test/run-patch-tests.ts --bundle "staging/{{version}}/cli.patched.js"

package version=target release_id="patch.local" source=source: (render version source)
  bun run tools/patch/package-release.ts --version "{{version}}" --release-id "{{release_id}}"

source-release version=target release_id="patch.local" source=source: (render version source)
  bun run tools/patch/write-source-release.ts --version "{{version}}" --release-id "{{release_id}}"

source-tag version=target release_id="patch.local":
  bun run tools/patch/create-source-tag.ts --version "{{version}}" --release-id "{{release_id}}"

detect-upstream *args:
  bun run tools/patch/detect-upstream.ts {{args}}

hooks-install:
  prek install --overwrite

hooks:
  prek run --stage pre-commit

hooks-manual:
  prek run --stage manual

hooks-run *args:
  prek run {{args}}

check:
  prek run --all-files

release-dry version=target release_id="patch.local" source=source: \
  (smoke version source) \
  (patch-test version source) \
  (package version release_id source)

platform-audit version=target:
  bun run tools/platform/platform-audit.ts --version "{{version}}"

platform-patch-test version=target:
  #!/usr/bin/env bash
  set -euo pipefail
  for audit_platform in darwin-arm64 linux-x64; do
    echo "==> patch-test {{version}} from GCS ${audit_platform}"
    TARGET_SOURCE=gcs TARGET_PLATFORM="${audit_platform}" just patch-test "{{version}}"
  done

alignment-report version=target:
  bun run tools/reconstruct/alignment-report.ts --target "staging/{{version}}/cli.js" --target-label "{{version}}"

typecheck:
  bun run --cwd tools typecheck
