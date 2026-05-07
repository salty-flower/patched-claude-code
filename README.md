# audited-claude-code

A private mirror that turns each new Claude Code release into an auditable,
patched runtime — by anchoring every minified function back to the leaked
v2.1.88 TypeScript source via sourcemap correspondence.

Entry point: **`flake.nix`** (Nix devShell with the toolchain) and
**`AGENTS.md`** (operating instructions for AI agents and humans).

## Project direction

This repo is a **bundle-first patch framework plus audit/reconstruction
corpus**.

The original ambition was broader: fully buildable v2.1.112 decompilation and
future-version native recompilation with v2.1.88 as the Rosetta baseline. The
current evidence does not support that as the default goal:

- `reference/v2.1.88/` is source-map recovered reference material, not a
  buildable upstream source tree.
- Later reconstructions can contain imports for modules that were inlined,
  excluded from public bundles, or supplied by private packages.
- Public npm bundles and Bun standalone binaries do not include the full
  private build pipeline needed to regenerate official artifacts.

Buildability work is still useful, but it must be scoped to selected
entrypoints or compatibility shims and documented as such. The durable path is
to patch released bundles directly, prove each patch with byte/AST locators,
and use reconstructed source only to explain, audit, and test behavior.

## What this does

For each new Claude Code release we want to ship, we:

1. **Extract** the minified `cli.js` (npm tarball) or the embedded JS (Bun
   standalone binary, post-2.1.113).
2. **Align** every top-level declaration in the new bundle to its counterpart
   in `reference/v2.1.88/cli.js`, using AST-shape + literal-set fingerprints
   (identifier names are deliberately ignored — they reminify per release).
3. **Resolve** each aligned declaration's source intent via
   `reference/v2.1.88/cli.js.map` → the embedded `sourcesContent` TS source,
   giving us the original comments, feature flags, and typed identifiers.
4. **Author patches** at the TS level (with rationale references into
   `reference/v2.1.88/sources/`) and emit them as
   `(locator-pattern, replacement)` pairs that apply textually to the new
   minified bundle.
5. **Run** the patched JS directly via Node or Bun — no rebuild required.

## What this is **not**

- Not a redistribution of Claude Code. The repo is private. Reference and
  patched artifacts are for personal audit and use only.
- Not a full deminifier. We do not attempt to mass-recover TS source for
  `v_new`; we only resolve enough context to write small, reviewed patches.
- Not a promise that `reference/` or `reconstructed/` trees are buildable.
  They are evidence corpora. Treat buildable subsets as explicit engineering
  projects with documented gaps.
- Not a Bun-binary repacker. Patched output is plain JS; if the upstream
  release is a Bun binary, we run the patched bundle on a Bun runtime
  installed separately.

## Layout

| Path | Contains |
| --- | --- |
| `reference/v2.1.88/` | Pinned audit baseline: `cli.js`, `cli.js.map`, extracted `sources/` |
| `tools/` | Alignment, lift, and patch-application scripts |
| `patches/` | TOML-described patches with rationale references |
| `bin/` | User-facing entry points (`build-audited`, etc.) |
| `experiments/` | POC scripts that established viability — kept for re-running |
| `docs/rules/` | Strict policies agents must follow |
| `docs/guides/` | Operational how-to for humans |
| `docs/records/` | Frozen audit notes (POC, design decisions) |

## Quick start

```sh
direnv allow                  # loads the Nix devShell
bun install --cwd tools       # toolchain deps
bun run tools/align.ts        # align v_new to v2.1.88 (sample run)
bin/build-audited <new-cli.js> patched.js
```

Versions and patch authoring workflow: see [`docs/guides/Adding-Patches.md`](docs/guides/Adding-Patches.md).
Release and installation workflow: see [`docs/guides/Releasing.md`](docs/guides/Releasing.md)
and [`docs/guides/Installing.md`](docs/guides/Installing.md).
