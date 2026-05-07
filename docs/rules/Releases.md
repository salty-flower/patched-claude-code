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
| Native package | Explicitly staged; current target is `@anthropic-ai/claude-code-darwin-arm64` |
| Manifest | `manifest.json` inside the artifact plus `<artifact>.manifest.json` beside it |

`patch.<n>` increments whenever the rendered bundle changes for the same
upstream Claude Code version. Reset it to `patch.1` when the upstream version
changes.

## Release Gate

A release MUST pass:

| Gate | Command |
| --- | --- |
| Stage target | `just stage <version>` |
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
tag only after npm latest and GCS stable converge and `just platform-audit
<version>` reports no Linux/Darwin structural extracted-JS drift. Platform
drift blocks promotion until repaired by explicit runtime-platform patches or
a documented audit decision.

The current `2.1.132` patch set is verified against the npm target and the GCS
`darwin-arm64` native bundle. It is not Linux-portable: GCS `linux-x64`
locator verification fails for most patches. Treat `just platform-patch-test
<version>` as the named portability gate before claiming a patched release is
cross-platform.

## Private Repo Boundary

GitHub release artifacts are for this private repo's owner. Do not publish
reference files, staged raw bundles, or reconstructed source trees as release
assets.
