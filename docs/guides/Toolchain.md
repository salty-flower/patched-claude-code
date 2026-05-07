# Toolchain

The Nix devShell (`flake.nix`) provides Bun, Just, prek, jq, nushell,
Python 3, ripgrep, fd, bat, eza, gh, and git. Direnv loads it on `cd`.

Use the root `justfile` as the command facade:

| Recipe | Purpose |
| --- | --- |
| `just stage [version] [source]` | Idempotently stage `staging/<version>/cli.js`; `source` is `npm` or `gcs`. |
| `just stage-gcs [version] [platform]` | Force native-download staging for one GCS platform. |
| `just verify [version] [source]` | Stage if needed, then verify patch locators, rationale refs, embedded tests, and extraction contract. |
| `just render [version] [source]` | Stage and verify if needed, then render `staging/<version>/cli.patched.js`. |
| `just smoke [version] [source]` | Run the patched bundle with `--version`. |
| `just patch-test [version] [source]` | Execute `[[tests]]` from every patch TOML. |
| `just package [version] [release_id] [source]` | Build `dist/` release artifacts. |
| `just detect-upstream [args...]` | Compare npm and native-download stable channels. |
| `just hooks-install` | Install local hooks with `prek install`. |
| `just hooks` | Run normal pre-commit-stage hooks with `prek`. |
| `just hooks-manual` | Run manual hooks with `prek`. |
| `just hooks-run [args...]` | Run configured hooks through `prek run`. |
| `just check` | Run `prek run --all-files`. |
| `just release-dry [version] [release_id] [source]` | Run the local release gate without publishing. |
| `just platform-audit [version]` | Compare Linux and Darwin native-channel JS structure in side-by-side platform cache paths. |
| `just platform-patch-test [version]` | Run GCS patch tests sequentially for Darwin and Linux; this is the explicit portability gate. |
| `just alignment-report [version]` | Report target-vs-reference alignment coverage. |
| `just typecheck` | Typecheck all nested `tools/**/*.ts`. |

Use environment variables for default coordinates:

| Variable | Default | Meaning |
| --- | --- | --- |
| `TARGET_VERSION` | `2.1.132` | Version used when a recipe omits `[version]`. |
| `TARGET_SOURCE` | `npm` | Staging channel: `npm` or `gcs`. |
| `TARGET_PLATFORM_PACKAGE` | `@anthropic-ai/claude-code-darwin-arm64` | npm native package for npm staging. |
| `TARGET_PLATFORM` | `darwin-arm64` | GCS platform for native-download staging. |

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

Use `prek`, not `pre-commit`, for local hook operations:

```sh
just hooks-install
just hooks
just hooks-manual
just check
just hooks-run verify-patches
```
