# AI Agent Instructions

Entry Point: **`flake.nix`** and **`reference/v2.1.88/`**.
See [README](./README.md) for the project's purpose and shape.

The TypeScript and JavaScript files under `reference/v2.1.88/` are derivative
works of Anthropic's Claude Code, recovered from a publicly-leaked source map
(npm `@anthropic-ai/claude-code@2.1.88` published 2026-03-31). Treat them as
**read-only audit reference** — never modify, never publish, never extract
into other projects.

## Project direction

This repo is bundle-first. The primary deliverable is a traceable patching
pipeline for released Claude Code bundles, not a fully buildable decompilation.

Use `reference/v2.1.88/` and `reconstructed/` as audit corpora:

- Use recovered source to explain behavior, locate patch sites, and justify
  `patches/*.toml` rationale.
- Do not assume source-map recovered trees are buildable. The v2.1.88 reference
  itself is not a complete upstream build tree.
- Treat buildability as a scoped task for named entrypoints or compatibility
  layers. Document unrecoverable gaps instead of filling them with guessed
  behavior.
- Private packages, never-bundled modules, and inlined source-map imports are
  reconstruction boundaries unless local/private evidence is supplied.

## Hard rules

You MUST:

- Keep every `patches/*.toml` entry traceable to a specific line range in
  `reference/v2.1.88/sources/...` via the `rationale_ref` field.
  See [`docs/rules/Patch-Format.md`](docs/rules/Patch-Format.md).
- Express patches as `(locator_pattern, replacement)` pairs that operate on
  minified bytes, not as tree manipulations of `reference/`.
- Run `bun run tools/verify-patches.ts` before committing any change under
  `patches/`. The script confirms each patch's locator still hits exactly
  once on the latest staged target bundle.
- When adding a new reference version, follow
  [`docs/rules/Reference-Versions.md`](docs/rules/Reference-Versions.md). Do
  not silently bump the baseline.

You MUST NOT:

- Redistribute `reference/v2.1.88/cli.js`, `cli.js.map`, or extracted
  `sources/` outside this private repo.
- Embed Anthropic source verbatim in patch replacement text. Replacement
  text is original to this repo (typically a one-line override that
  short-circuits the gate being patched).
- Use this repo's tooling on third-party JS unrelated to Claude Code without
  the user's explicit go-ahead.

## Documentation Layout

| Directory | Contains | Audience |
| --- | --- | --- |
| `docs/rules/` | Policies and contracts agents must follow | agents |
| `docs/guides/` | Operational how-to | humans |
| `docs/records/` | Frozen audit notes (POC, decisions) | both |

When writing or editing docs, apply the `doc-style` skill if available.

## Common tasks

### Add a new patch

See [`docs/guides/Adding-Patches.md`](docs/guides/Adding-Patches.md).

### Bump the target Claude Code version (the version we patch)

See [`docs/guides/Bumping-Target.md`](docs/guides/Bumping-Target.md).
Native bundle extraction support is governed by
[`docs/rules/Native-Bundle-Extraction.md`](docs/rules/Native-Bundle-Extraction.md).

### Add a new reference version (rare, audit-grade decision)

See [`docs/rules/Reference-Versions.md`](docs/rules/Reference-Versions.md).
Adds friction on purpose — re-anchoring the baseline invalidates every
existing patch's `rationale_ref`.

### Commit messages

See [`docs/rules/Commit-Messages.md`](docs/rules/Commit-Messages.md).
