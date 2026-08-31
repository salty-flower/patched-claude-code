# Releases

## Artifact Split

Release tags identify a patched Claude Code bundle, not this repo's tooling
version.

| Item | Rule |
| --- | --- |
| Tag | `claude-code-<upstream-version>-patch.<n>` |
| Moving Nix ref | `claude-code-latest` |
| Release commit title | `release: claude-code-<upstream-version>-patch.<n>` |
| Nix source | Tagged git tree containing the complete runtime payload, `prompts/catalog/`, and flake files |
| Artifact | `patched-claude-code-<upstream-version>-patch.<n>.tar.gz`; optional non-Nix install path |
| Bundle | `cli.js` plus every platform graph it dispatches to, at the release tag root and inside the artifact |
| Runtime helpers | Prompt override, release integrity, and macOS Keychain helpers at the release tag root and inside the artifact |
| Prompt catalog | Partial static audit catalog at `prompts/catalog/` on every release surface |
| Release notes | Size-bounded `release-notes.md` plus complete bundle-bound `prompt-review.md` |
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
| Platform obligation evidence | `just obligation-evidence <version> <platform>` on each real runner |
| Obligation admission | `just obligation-admission <version>` |
| Package | `just package <version> patch.<n>` |
| Prompt review notes | `test -s dist/release-notes.md` and `rg -q '^## Prompt review$' dist/release-notes.md` |
| Source tag | `just release-source <version> patch.<n>` |

Release artifacts MUST include a raw SHA-256 hash for non-flake fixed-output
fetching. Nix consumers SHOULD use the native
`github:<owner>/<repo>/<ref>` flake fetcher. Use the source tag for immutable
pinning. Use `claude-code-latest` when `nix flake update` should follow the
latest patched source commit.

Packaging MUST fail before artifact creation unless every historical patch
obligation has one target disposition and every required platform receipt is
current, successful, artifact-bound, and skip-free.
The release manifest MUST publish disposition counts.
The packaged ledger MUST preserve retirement proposals and their
digest-bound maintainer acknowledgement.
See [`Patch-Obligations.md`](Patch-Obligations.md).

A dispatcher release MUST include both `darwin-arm64/cli.js` and
`linux-x64/cli.js` under the graph directory named by `manifest.json`.
Packaging, source-tag creation, and the Nix derivation MUST fail closed when
either platform graph is absent.
The release manifest and prompt catalog MUST bind the sorted file inventory
and content hashes of the dispatcher plus every graph file.

The prompt catalog MUST be bound to the exact upstream and patched bundle
hashes. Classified contextual and opaque gaps MAY ship. Missing catalogs,
unclassified discovered candidates, hash mismatches, or artifact parity drift
MUST block release.

Release notes MUST be generated from the patched bundle's prompt catalog and
the checked-in identity ledger. They MUST include one inline unchanged list and
collapsible side-by-side hunks for changed, traced lineages. When a lower
identity ledger exists, CI and release workflows MUST fetch its newest source
tag before packaging; a missing previous catalog MUST block the release.
The GitHub release body MUST remain below the API's 125,000-character limit.
Large diff rows MAY be clipped in that body only when the complete generated
review is published as the `prompt-review.md` release asset.

Every discovered prompt occurrence MUST have exactly one committed lineage
decision in `prompt-identities/`. Missing, stale, ambiguous, duplicate, or
digest-mismatched decisions MUST block release. Lineage IDs MUST NOT be derived
from versions, ordinals, offsets, prompt bytes, or current inferred paths. See
[`../guides/Prompt-Catalog.md`](../guides/Prompt-Catalog.md).
Partial-match candidates and similarity scores MUST NOT authorize lineage
assignment without a committed maintainer rule.

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

Before packaging a new upstream version, scheduled polling MUST prepare prompt
identity state against the newest lower finalized ledger:

- **Existing valid ledger**: continue packaging.
- **Unique exact carries only; no missing predecessor**: finalize the ledger,
  push it to `automation/prompt-identities-<version>`, open a PR, and defer the
  release until that PR reaches the base branch.
- **Changed, ambiguous, new, or missing occurrence**: upload the draft and
  audit result, then block. Partial scores MUST NOT enter the bot commit path.

The workflow MUST NOT publish from an unmerged generated ledger.

CI MUST run the release audit's prompt-review check and upload both
`dist/release-notes.md` and `dist/prompt-review.md` with the patched-bundle
artifact. Release and auto-release workflows MUST use the same generated notes
for GitHub publishing and attach the complete prompt review.

Scheduled polling MUST promote that tag only after npm latest and direct latest
converge and `TARGET_SOURCE=canonical just release-dry <version> patch.1`
succeeds. Promotion MUST run `just release-source <version> patch.1`, publish
the generated Nix source tag, and update `refs/heads/claude-code-latest` to the
same minimal source commit as the canonical source tag.

Canonical staging MUST produce one audited layout:

- **Dual graph**: `staging/<version>/graph-manifest.json` with exactly two
  non-empty platform graphs under `graph/`.
- **Legacy merged bundle**:
  `staging/<version>/canonical/platform-merge-report.json` with zero
  `unclassifiedDrift`, zero `acceptedDrift`, and zero structural parse errors.

Unknown literal pairs and structural islands in the legacy layout block
promotion until merged by a deterministic transform.

## Private Repo Boundary

GitHub release artifacts and source tags are for this private repo's owner. Do
not publish reference files, staged raw bundles, or reconstructed source trees
as release assets. Static prompt catalog Markdown is an explicit exception; it
is generated from released bundle bytes and included by ADR-0002.
