# Toolchain

The Nix devShell (`flake.nix`) provides Bun, Just, prek, jq, nushell,
Python 3, ripgrep, fd, bat, eza, gh, and git. Direnv loads it on `cd`.

Use the root `justfile` as the command facade:

| Recipe | Purpose |
| --- | --- |
| `just stage [version] [source]` | Stage `staging/<version>/cli.js`; `source` is `canonical`, `npm`, or `direct`. |
| `just verify [version] [source]` | Stage if needed, then verify patch locators, rationale refs, embedded tests, and extraction contract. |
| `just render [version] [source]` | Stage and verify if needed, then render `staging/<version>/cli.patched.js`. |
| `just smoke [version] [source]` | Run the patched bundle with `--version`. |
| `just patch-test [version] [source]` | Execute `[[tests]]` from every patch TOML. |
| `just api-stub-smoke [version] [source]` | Run the local-only OAuth, TUI, resume, and background-agent PTY matrix. |
| `just package [version] [release_id] [source]` | Build `dist/` release artifacts. |
| `just release-source [version] [release_id] [source]` | Write the Nix source payload and create the matching minimal source tag. |
| `just detect-upstream [args...]` | Compare npm and Claude direct-download latest channels. |
| `just check` | Run `prek run --all-files`. |
| `just release-dry [version] [release_id] [source]` | Run the local release gate without publishing. |
| `just platform-audit [version]` | Compare Linux and Darwin native-channel JS structure in side-by-side platform cache paths. |
| `just platform-patch-test [version]` | Run direct-download patch tests sequentially for Darwin and Linux; this is the explicit portability gate. |
| `just alignment-report [version]` | Report target-vs-reference alignment coverage. |
| `just typecheck` | Typecheck all nested `tools/**/*.ts`. |

Use environment variables for default coordinates:

| Variable | Default | Meaning |
| --- | --- | --- |
| `TARGET_VERSION` | `2.1.221` | Version used when a recipe omits `[version]`. |
| `TARGET_SOURCE` | `canonical` | Staging channel: `canonical`, `npm`, or `direct`. |
| `TARGET_PLATFORM_PACKAGE` | `@anthropic-ai/claude-code-darwin-arm64` | npm native package for npm staging. |
| `TARGET_PLATFORM` | `darwin-arm64` | Direct-download platform for native staging. |
| `TARGET_CANONICAL_BASE` | `darwin-arm64` | Canonical merge base platform. |
| `RELEASE_ID` | `patch.local` | Release id used when release recipes omit `[release_id]`. |

## Tool Groups

| Path | Contains |
| --- | --- |
| `tools/patch/` | Staging, verifying, rendering, package assembly, release detection. |
| `tools/reconstruct/` | v2.1.88/v2.1.112 reconstruction, region extraction, chunking. |
| `tools/platform/` | Native-channel JS comparison and platform-constant audit. |
| `tools/test/` | Patch TOML tests, CLI tests, PTY tests. |
| `tools/lib/` | Shared TOML, release detection, standalone extraction, helper code. |

Native Claude Code extraction is governed by
[`../rules/Native-Bundle-Extraction.md`](../rules/Native-Bundle-Extraction.md).
Investigation-only scripts stay out of the maintained toolchain. Preserve
their findings in `docs/records/` or promote reusable probes into `tools/`.
Recipes prefixed with `_` are implementation details used by public recipes.

`.pre-commit-config.yaml` owns the hook suite and path filters. Use `prek`,
not `pre-commit`, for hook operations:

```sh
prek install --overwrite
prek run --stage pre-commit
prek run --stage manual
just check
prek run verify-patches
```
