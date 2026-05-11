# AST Transform Patches

## Status

- Phase 1 (engine) and Phase 2 (low-risk call argument patches) are complete.
  See `docs/records/2026-05-11-ast-transform-engine.md`.
- This file tracks only genuinely pending migration work.

## Pending Work

### Phase 3: Control-Flow Patches

| Family | AST patches | Legacy remaining | Blocker |
|--------|------------|------------------|---------|
| `thinking-display` | 4 | **2 literal** | `thinking-render-live-main` and `thinking-render-live-main-2-1-137` target minified JSX property expressions (`streamingText:m7&&!qb?vK:null`) where identifiers shift per version. An AST selector would need to match on JSX attribute structure independent of minified names, which is not yet exercised in production. |

Exit gate: No legacy locator remains in `thinking-display.toml`; transform ops cover every edit without raw byte locators.

### Phase 4: Statusline Footer Controls

| Family | AST patches | Legacy remaining |
|--------|------------|------------------|
| `statusline-footer-control` | 0 | **21** (19 literal + 2 regex) |

This is the largest remaining family. Most patches inject CLI options or mutate settings objects inside minified bootstrap code. The AST transform selector vocabulary may need extension (e.g., `object_property_path` or `call_chain`) before these can be expressed without raw byte locators.

Exit gate: Auto-release against the latest staged bundle fails only on real semantic drift.

### Out-of-Scope Legacy Patches

| Family | Legacy remaining | Note |
|--------|-----------------|------|
| `agent-memory-discovery` | 5 regex | Not assigned to a backlog phase. Low priority; regex locators are stable across recent versions. |

## Conversion Rules

- Every converted patch MUST use `locator_kind = "ast_transform"`.
- The transform engine MUST preserve upstream byte locality by applying range splices against parsed source offsets, not by regenerating the whole bundle.
- Legacy `literal` and `regex` locators MAY remain during migration, but new release-blocking patches SHOULD use `ast_transform` once the engine exists.
- When adding a new transform op, define explicit preconditions; do not add a broad "custom visitor" op.

## Verification Gates

`just verify <version>` MUST check:

- The target bundle parses with zero unrecovered parse errors.
- Every `ast_transform` locator resolves exactly once.
- Every transform precondition passes.
- The transformed bundle parses after all edits.
- Patch tests exist for every entry.
- Inserted snippets are non-empty and repo-owned.

`just render <version>` MUST apply AST edits in descending byte-range order and reject overlapping edits unless a later implementation defines an explicit composition rule.
