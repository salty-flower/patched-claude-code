# Releases

## Artifact Split

Release tags identify a patched Claude Code bundle, not this repo's tooling
version.

| Item | Rule |
| --- | --- |
| Tag | `claude-code-<upstream-version>-patch.<n>` |
| Release commit title | `release: claude-code-<upstream-version>-patch.<n>` |
| Artifact | `audited-claude-code-<upstream-version>-patch.<n>.tar.gz` |
| Bundle | `cli.js` inside the artifact; never committed to git |
| Runtime | Bun supplied by the consumer |
| Native package | Canonicalized from GCS `darwin-arm64` and `linux-x64` native binaries |
| Manifest | `manifest.json` inside the artifact plus `<artifact>.manifest.json` beside it |

`patch.<n>` increments whenever the rendered bundle changes for the same
upstream Claude Code version. Reset it to `patch.1` when the upstream version
changes.

## Release Gate

A release MUST pass:

| Gate | Command |
| --- | --- |
| Stage target | `TARGET_SOURCE=canonical just stage <version>` |
| Verify locators and extraction contract | `just verify` |
| Render | `just render <version>` |
| Smoke | `just smoke <version>` |
| Patch tests | `just patch-test <version>` |
| Package | `just package <version> patch.<n>` |

Release artifacts MUST include a raw SHA-256 hash suitable for fixed-output
fetching. Consumers pin the tag and the artifact hash.

## Automation

Pushing a commit to `main` with title
`release: claude-code-<upstream-version>-patch.<n>` MUST publish that release
from the pushed commit. Manual tag pushes remain supported. Do not rely on a
workflow-created tag to trigger another workflow; GitHub suppresses most
`GITHUB_TOKEN`-created workflow events.

Scheduled polling MUST run four times daily via `auto-release.yml`.
It MAY publish `claude-code-<version>-patch.1` as a prerelease when either
npm latest or GCS stable exposes an unhandled version. It MUST promote that
tag only after npm latest and GCS stable converge and `TARGET_SOURCE=canonical
just release-dry <version> patch.1` succeeds.

Canonical staging MUST write
`staging/<version>/canonical/platform-merge-report.json` with zero
`unclassifiedDrift` and zero `acceptedDrift` entries. Unknown literal pairs and
structural islands block promotion until merged by a deterministic transform.

## Private Repo Boundary

GitHub release artifacts are for this private repo's owner. Do not publish
reference files, staged raw bundles, or reconstructed source trees as release
assets.
