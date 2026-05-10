# Releases

## Artifact Split

Release tags identify a patched Claude Code bundle, not this repo's tooling
version.

| Item | Rule |
| --- | --- |
| Tag | `claude-code-<upstream-version>-patch.<n>` |
| Moving Nix ref | `claude-code-latest` |
| Release commit title | `release: claude-code-<upstream-version>-patch.<n>` |
| Nix source | Tagged git tree containing `cli.js`, `manifest.json`, `package.json`, `bin/claude-patched`, and flake files |
| Artifact | `patched-claude-code-<upstream-version>-patch.<n>.tar.gz`; optional non-Nix install path |
| Bundle | `cli.js` at the release tag root and inside the artifact |
| Runtime | Bun supplied by the consumer |
| Native package | Canonicalized from Claude direct-download `darwin-arm64` and `linux-x64` native binaries |
| Manifest | `manifest.json` in the tagged tree and artifact, plus `<artifact>.manifest.json` beside it |

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
| Source tag | `just release-source <version> patch.<n>` |

Release artifacts MUST include a raw SHA-256 hash for non-flake fixed-output
fetching. Nix consumers SHOULD use the native
`github:<owner>/<repo>/<ref>` flake fetcher. Use the source tag for immutable
pinning. Use `claude-code-latest` when `nix flake update` should follow the
latest patched source commit.

## Automation

Pushing a commit to `main` with title
`release: claude-code-<upstream-version>-patch.<n>` MUST publish that release
and MUST create or update the matching source tag with the generated release
payload committed into a minimal tagged tree. It MUST also update
`refs/heads/claude-code-latest` to the same source commit. Manual tag pushes
remain supported. Do not rely on a workflow-created tag to trigger another
workflow; GitHub suppresses most `GITHUB_TOKEN`-created workflow events.

Scheduled polling MUST run four times daily via `auto-release.yml`.
It MAY publish `claude-code-<version>-patch.1` as a prerelease when either
npm latest or direct latest exposes an unhandled version. Prereleases are
artifact-only: they MUST NOT run `just release-source`, MUST NOT publish the
generated Nix source tag, and MUST NOT update `refs/heads/claude-code-latest`.

Scheduled polling MUST promote that tag only after npm latest and direct latest
converge and `TARGET_SOURCE=canonical just release-dry <version> patch.1`
succeeds. Promotion MUST run `just release-source <version> patch.1`, publish
the generated Nix source tag, and update `refs/heads/claude-code-latest` to the
same minimal source commit as the canonical source tag.

Canonical staging MUST write
`staging/<version>/canonical/platform-merge-report.json` with zero
`unclassifiedDrift` and zero `acceptedDrift` entries. Unknown literal pairs and
structural islands block promotion until merged by a deterministic transform.

## Private Repo Boundary

GitHub release artifacts and source tags are for this private repo's owner. Do
not publish reference files, staged raw bundles, or reconstructed source trees
as release assets.
