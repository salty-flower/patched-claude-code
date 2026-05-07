# Toolchain

The Nix devShell (`flake.nix`) provides bun, jq, nushell, python3, ripgrep,
fd, bat, eza, gh, git. Direnv loads it on `cd`. Bun is the JS runtime; we
intentionally avoid Node-only tooling so patched JS can target either Node or
Bun without retesting.

Native Claude Code extraction is governed by
[`../rules/Native-Bundle-Extraction.md`](../rules/Native-Bundle-Extraction.md).
Tools may stage future versions, but a staged native bundle is audit-grade
only when that rule lists the version as known-good.

## Scripts

| Path | Purpose |
| --- | --- |
| `tools/align.ts` | AST function-level alignment of a target bundle vs `reference/v2.1.88/cli.js`. Used during patch authoring. |
| `tools/decode-mappings.py` | Walk `reference/v2.1.88/cli.js.map` segments and slice `cli.js` at chosen positions. Useful when verifying a sourcemap chain. |
| `tools/extract-bun-standalone.ts` | Extract embedded files from current `bun build --compile` standalone binaries. Used by `bin/stage-claude-code`; keep it generic to Bun standalone layout. |
| `tools/extract-sources.ts` | Materialise `reference/v2.1.88/cli.js.map` `sourcesContent` into `reference/v2.1.88/sources/`. Run once; output is committed. |
| `tools/format-staged-cli.ts` | Copy `staging/<ver>/cli.js` to `staging/<ver>/cli.formatted.js` and format the copy with Biome for inspection. Never use the formatted copy for patch locators. |
| `tools/render-patched.ts` | Verify patches against a staged bundle, then render `staging/<ver>/cli.patched.js`. |
| `tools/stage-claude-code.ts` | Download `@anthropic-ai/claude-code@<ver>` from npm and stage `staging/<ver>/cli.js`, including extraction from native optional packages. |
| `tools/verify-patches.ts` | Validate every `patches/*.toml`: locator hits exactly once on the staged target, `rationale_ref` resolves. Run in CI. |
| `bin/build-audited` | Apply every patch to a given input bundle, write to a given output path. |
| `bin/format-staged-cli` | Wrapper for `tools/format-staged-cli.ts`. |
| `bin/render-patched` | Wrapper for `tools/render-patched.ts`. |
| `bin/stage-claude-code` | Wrapper for `tools/stage-claude-code.ts`. |

## When to add a tool

Tools must serve patch authoring or verification. Investigation-only scripts
go to `experiments/`, not `tools/`. The `tools/` set is small on purpose —
any addition raises maintenance burden on every reference-version bump.

## When to retire a tool

When upstream Claude Code changes shape so completely that the tool no
longer applies (e.g., we move to a different alignment strategy), retire
the tool in the same commit that introduces the replacement. Document the
transition in `docs/records/`.
