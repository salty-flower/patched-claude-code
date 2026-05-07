# Releases

## Artifact Split

Release tags identify a patched Claude Code bundle, not this repo's tooling
version.

| Item | Rule |
| --- | --- |
| Tag | `claude-code-<upstream-version>-patch.<n>` |
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
| Stage target | `bin/stage-claude-code <version>` |
| Verify locators | `bun run tools/verify-patches.ts` |
| Verify extraction contract | `bun run tools/check-native-extraction-contract.ts` |
| Render | `bin/render-patched <version>` |
| Smoke | `bun staging/<version>/cli.patched.js --version` |
| Package | `bun run tools/package-release.ts --version <version> --release-id patch.<n>` |

Release artifacts MUST include a raw SHA-256 hash suitable for fixed-output
fetching. Consumers pin the tag and the artifact hash.

## Private Repo Boundary

GitHub release artifacts are for this private repo's owner. Do not publish
reference files, staged raw bundles, or reconstructed source trees as release
assets.
