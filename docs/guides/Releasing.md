# Releasing

## Coordinates

Use one release commit title per patched upstream Claude Code bundle:

```sh
git commit --allow-empty -m "release: claude-code-2.1.181-patch.3"
git push origin main
```

The manual `release` workflow stages the canonical Linux/Darwin bundle from
Claude direct-download native binaries before rendering, testing, and
packaging.
When `publish=true`, it also writes the Nix source payload and moves the tag
to a minimal generated payload commit. It also moves `claude-code-latest` to
that same source commit for `nix flake update` users.

The scheduled `auto-release` workflow may publish a prerelease from a one-sided
npm or direct-download candidate. It promotes only after npm latest and direct
latest converge and canonical staging succeeds. Prereleases upload artifacts
only. A new version's prompt ledger must first reach the base branch; exact-only
transitions receive an automated ledger PR, while all other transitions block
with a review artifact. Promotion creates the exact Nix source tag and moves
`claude-code-latest`.

The repository must permit `GITHUB_TOKEN` pull-request creation for the
exact-only ledger path.

Manual tag release remains supported:

```sh
git tag claude-code-2.1.181-patch.3
git push origin claude-code-2.1.181-patch.3
```

Current releases stage `staging/<version>/canonical/cli.js`, then copy it to
`staging/<version>/cli.js` for the patch tools. The canonical bundle is based
on `darwin-arm64` plus `linux-x64` direct-download native entrypoint JS.

Manual dry run:

```sh
just release-dry 2.1.181 patch.3
```

Manual publish:

```sh
gh workflow run release.yml \
  -f target_version=2.1.181 \
  -f release_id=patch.3 \
  -f publish=true
```

## CI audit and admission

After canonical staging, Linux runtime auditing, Darwin tool tests, and both
platform evidence jobs run concurrently.
`just ci-runtime-audit <version>` renders once, checks the committed prompt ledger,
then runs tool tests, version smoke, patch tests, and the full API-stub PTY matrix.
Use `just prompt-identity-check <version>` for a read-only check of an existing render;
missing or stale decisions fail without preparing or finalizing a ledger.

The final job downloads the successful runtime job's staged and rendered bundle
and both platform receipts from the same workflow run.
`just ci-package-audit <version> <release-id>` performs obligation admission,
packaging, source-tag generation, and payload inventory checks without rendering again.
Packaging still validates prompt identities against the rendered bundle.
Only the final job uploads the release-consumable artifact.
`just ci-release-audit` composes both halves for local use with platform receipts available.

For branch debugging, dispatch `ci.yml` with the branch ref and `target_version`;
watch the run with `gh run watch <run-id> --exit-status`.
Do not publish artifacts from a failed or incomplete audit.

To publish a successfully audited branch without first merging it, dispatch
`release.yml` on that exact branch commit with `target_version`, `release_id`,
`publish=true`, and `ci_run_id=<successful-ci-run-id>`.
Explicit reuse requires a successful `ci.yml` run on the same commit and its
requested target artifact; mismatches and missing artifacts fail closed.
The release workflow repeats admission and packaging with the final release ID.

## Local Packaging

```sh
just release-dry 2.1.181 patch.3
```

Outputs land in `dist/`:

| File | Use |
| --- | --- |
| `patched-claude-code-<version>-patch.<n>.tar.gz` | Installable release artifact |
| `*.sha256` | Raw tarball hash in hex form |
| `*.manifest.json` | Machine-readable release metadata, including SRI hash |
| `release-notes.md` | Size-bounded GitHub release body with prompt-review previews |
| `prompt-review.md` | Complete bundle-bound structured prompt review |

Packaging derives the prompt-review section from the rendered bundle's catalog
and the checked-in identity ledger. When a lower ledger exists, make its
`claude-code-<version>-patch.<n>` source tag available locally so packaging can
render traced side-by-side changes; packaging fails closed when that catalog
is unavailable. The GitHub body keeps every changed lineage collapsible but
clips very large diff rows; the complete unabridged review ships beside it as
`prompt-review.md`.

`just release-source <version> patch.<n>` writes the Nix-native payload to the
repo root and creates the matching minimal source tag. Manual release publish
and scheduled promotion also move `claude-code-latest` to that tag commit.

| File | Use |
| --- | --- |
| `cli.js` | Patched runtime bundle consumed by the flake package |
| `graph.patched/` | Complete Darwin and Linux module graphs loaded by dispatcher releases |
| `manifest.json` | Deterministic source manifest |
| `package.json` | Minimal package metadata and `claude-patched` bin declaration |
| `bin/claude-patched` | Bun wrapper for direct shell use |
| `runtime/macos-keychain.ts` | Explicit macOS credential-Keychain bridge |
| `runtime/release-integrity.ts` | Shared dispatcher and graph inventory verifier |
| `runtime/system-prompt-overrides.ts` | Preloaded section-override helper |
| `prompts/catalog/` | Partial, version-bound static prompt audit catalog |

## Bump Rules

| Change | Action |
| --- | --- |
| Same upstream, patch text changes | Increment `patch.<n>` |
| New upstream target | Start at `patch.1` |
| CI packaging changes only | Do not tag unless the artifact changes |
