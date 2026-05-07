# Releasing

## Coordinates

Use one release tag per patched upstream Claude Code bundle:

```sh
git tag claude-code-2.1.132-patch.1
git push origin claude-code-2.1.132-patch.1
```

The `release` workflow stages the upstream npm package, renders the patched
bundle, packages it, uploads workflow artifacts, and creates the GitHub release
for pushed tags.

Manual dry run:

```sh
gh workflow run release.yml \
  -f target_version=2.1.132 \
  -f release_id=patch.1 \
  -f publish=false
```

Manual publish:

```sh
gh workflow run release.yml \
  -f target_version=2.1.132 \
  -f release_id=patch.1 \
  -f publish=true
```

## Local Packaging

```sh
bin/stage-claude-code 2.1.132
bin/render-patched 2.1.132
bun run tools/package-release.ts --version 2.1.132 --release-id patch.1
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
