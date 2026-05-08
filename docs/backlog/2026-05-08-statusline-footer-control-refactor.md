# Statusline Footer Control Refactor

## Control Model

Replace the widening `hideBuiltinFooter` boolean with a structured list of
built-in footer surfaces. Keep the boolean as a compatibility alias until all
patch sites read the list.

| Surface enum | Covers | Current patch ownership |
| --- | --- | --- |
| `footer` | Built-in prompt footer row. | `statusline-hide-builtin-footer-render` |
| `effort_notification` | Effort-level notification row. | `statusline-hide-builtin-footer-effort-notification` |
| `rate_limit_warning` | "You've used ..." warning banner. | `statusline-hide-builtin-footer-rate-limit-warning` |
| `clipboard_image_hint` | "Image in clipboard ..." focus hint. | `statusline-hide-builtin-footer-clipboard-image-hint` |
| `teammate_idle_spacer` | Idle spacer before teammate rows. | `statusline-hide-builtin-footer-teammate-spinner-gap` |

`all` may exist as CLI syntax, but settings should persist the expanded enum
list so each downstream patch site has an explicit responsibility.

## Compatibility Contract

| Input | Effective hidden surfaces |
| --- | --- |
| `--hide-builtin-footer` | All known surfaces. |
| `statusLine.hideBuiltinFooter: true` | All known surfaces. |
| `statusLine.hiddenBuiltinFooterItems: [...]` | Exactly the listed surfaces. |
| Both boolean and list present | Union of both, with no duplicate effect. |

Do not remove `statusLine.hideBuiltinFooter` until an upstream version bump
creates a deliberate migration point.

## Implementation Shape

- Add settings schema for `statusLine.hiddenBuiltinFooterItems` as an enum list.
- Keep CLI compatibility by translating `--hide-builtin-footer` into the all
  surface set at runtime.
- Patch each banner site against a single predicate:
  `hiddenBuiltinFooterItems.includes("<surface>")`.
- Keep statusline JSON fields independent of hidden-surface selection:
  `permission_mode`, `clipboard_image`, `rate_limit_warning`, and `rate_limits`
  should remain available even when the corresponding built-in UI is visible.
- Update `docs/records/2026-05-08-patch-inventory.md` when the patch grouping
  changes.

## Verification Gate

- `bun test tools/test/statusline-hide-builtin-footer-cli.test.ts`
- `just verify`
- `just patch-test`
- `bun run --cwd tools test`
- `just typecheck`
- `just smoke`

## Open Decision

Decide the public spelling before patching:

| Option | Tradeoff |
| --- | --- |
| `hiddenBuiltinFooterItems` | Precise, but long. |
| `hiddenFooterItems` | Shorter, but less clear that it controls upstream built-ins. |
| `builtinFooterItems` with modes | More extensible, but over-scoped for the current patch set. |
