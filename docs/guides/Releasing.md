# Releasing

## Coordinates

Use one release commit title per patched upstream Claude Code bundle:

```sh
git commit --allow-empty -m "release: claude-code-2.1.132-patch.2"
git push origin main
```

The manual `release` workflow stages the canonical Linux/Darwin bundle from
GCS native binaries before rendering, testing, and packaging.
When `publish=true`, it also writes the Nix source payload and moves the tag
to a minimal generated payload commit.

The scheduled `auto-release` workflow may publish a prerelease from a one-sided
npm or GCS candidate. It promotes only after npm latest and GCS stable converge
and canonical staging succeeds.

Manual tag release remains supported:

```sh
git tag claude-code-2.1.132-patch.2
git push origin claude-code-2.1.132-patch.2
```

Current releases stage `staging/<version>/canonical/cli.js`, then copy it to
`staging/<version>/cli.js` for the patch tools. The canonical bundle is based
on `darwin-arm64` plus `linux-x64` GCS native entrypoint JS.

Manual dry run:

```sh
just release-dry 2.1.132 patch.1
```

Manual publish:

```sh
gh workflow run release.yml \
  -f target_version=2.1.132 \
  -f release_id=patch.1 \
  -f platform_package=@anthropic-ai/claude-code-darwin-arm64 \
  -f publish=true
```

## Local Packaging

```sh
just release-dry 2.1.132 patch.1
```

Outputs land in `dist/`:

| File | Use |
| --- | --- |
| `audited-claude-code-<version>-patch.<n>.tar.gz` | Installable release artifact |
| `*.sha256` | Raw tarball hash in hex form |
| `*.manifest.json` | Machine-readable release metadata, including SRI hash |
| `release-notes.md` | GitHub release notes |

`just source-release <version> patch.<n>` writes the Nix-native payload to the
repo root:

| File | Use |
| --- | --- |
| `cli.js` | Patched runtime bundle consumed by the flake package |
| `manifest.json` | Deterministic source manifest |
| `package.json` | Minimal package metadata and `claude-audited` bin declaration |
| `bin/claude-audited` | Bun wrapper for direct shell use |

`just source-tag <version> patch.<n>` creates
`claude-code-<version>-patch.<n>` as a minimal tag commit containing that
payload plus `flake.nix` and `flake.lock`.

## Bump Rules

| Change | Action |
| --- | --- |
| Same upstream, patch text changes | Increment `patch.<n>` |
| New upstream target | Start at `patch.1` |
| CI packaging changes only | Do not tag unless the artifact changes |
