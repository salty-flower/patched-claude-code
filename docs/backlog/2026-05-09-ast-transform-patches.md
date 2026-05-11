# AST Transform Patches

## Status

- Phase 1 (engine) and Phase 2 (low-risk call argument patches) are complete.
  See `docs/records/2026-05-11-ast-transform-engine.md`.
- Phase 3 (control-flow patches) is complete. `thinking-display.toml` has zero
  legacy locators remaining.
- Phase 4 (statusline footer controls) is partially done.
  `statusline-footer-control-schema` is converted; 20 legacy locators remain.
- This file tracks only genuinely pending migration work.

## Pending Work

### Phase 4: Statusline Footer Controls

| Family | AST patches | Legacy remaining | Notes |
|--------|------------|------------------|-------|
| `statusline-footer-control` | 6 | **15** (13 literal + 2 regex) | Schema, render, permission-mode, clipboard-image-refresh, and refresh-effect converted. Remaining patches inject CLI options, mutate settings objects, or rewrite function bodies. Many require version-specific minified variable names in replacements even with drift-resistant locators. |

Remaining patches by category:

| Category | Count | Convertibility |
|----------|-------|----------------|
| CLI option injection (`statusline-footer-control-cli-option`) | 1 regex | Hard: needs to match a method chain (`addOption(...).option(...)`). May need `call_chain` selector extension. |
| Settings object mutation (`cli-settings`, `cli-settings-2-1-137`) | 2 literal | Medium: could use `replace_function_body` on the enclosing function if the minified variable names for `hideBuiltinFooter` can be derived. |
| Clipboard image hint (`clipboard-image-hint`, `*-2-1-137`) | 2 literal | Hard: replaces entire function bodies. Would need multi-statement `replace_function_body` or a sequence-aware transform. |
| Effort notification (`effort-notification`, `*-2-1-137`) | 2 literal | Medium: prepends a conditional to a variable declaration. Could use `replace_substring` on the assignment if the left-hand side identifier is stable. |
| Rate limit warning (`rate-limit-warning`, `*-2-1-137`) | 2 literal | Hard: injects statements into the middle of a function. |
| Footer render (`render`, `render-2-1-137`) | 0 | Converted to `wrap_expression` on `CallExpression` with `strings = ["exitMessage", "isInputEmpty", "onOpenTasksDialog"]`. |
| Teammate spinner gap (`teammate-spinner-gap`, `*-2-1-137`) | 2 literal | Hard: large function body rewrite. |
| StatusLine JSON (`json-permission-mode`, `json-clipboard-image-refresh`, `json-clipboard-image-refresh-effect`, `*-2-1-137`) | 0 | `json-permission-mode` converted to `replace_substring_regex` on `ReturnStatement`; refresh patches converted to `insert_before_node` (effect) and `replace_substring_regex` on `VariableDeclaration`. |

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
