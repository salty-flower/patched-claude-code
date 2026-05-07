# Releasing

## Coordinates

Use one release commit title per patched upstream Claude Code bundle:

```sh
git commit --allow-empty -m "release: claude-code-2.1.132-patch.2"
git push origin main
```

The manual `release` workflow stages from the npm/native package path. The
scheduled `auto-release` workflow sets `TARGET_SOURCE` from upstream detection
and may stage npm or GCS before rendering, testing, and packaging.

Manual tag release remains supported:

```sh
git tag claude-code-2.1.132-patch.2
git push origin claude-code-2.1.132-patch.2
```

Current releases stage `@anthropic-ai/claude-code-darwin-arm64`. The patched
asset is JavaScript, but patch locators are authored against that native
package's embedded bundle bytes.

Manual dry run:

```sh
just release-dry 2.1.132 patch.1
TARGET_SOURCE=gcs just release-dry 2.1.132 patch.1
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
TARGET_SOURCE=gcs just release-dry 2.1.132 patch.1
```

Outputs land in `dist/`:

| File | Use |
| --- | --- |
| `audited-claude-code-<version>-patch.<n>.tar.gz` | Installable release artifact |
| `*.sha256` | Raw tarball hash in hex form |
| `*.manifest.json` | Machine-readable release metadata, including SRI hash |
| `release-notes.md` | GitHub release notes |

## Bump Rules

| Change | Action |
| --- | --- |
| Same upstream, patch text changes | Increment `patch.<n>` |
| New upstream target | Start at `patch.1` |
| CI packaging changes only | Do not tag unless the artifact changes |
