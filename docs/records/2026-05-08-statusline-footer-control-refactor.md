# Statusline Footer Control Refactor

## Control Model

Replace the widening `hideBuiltinFooter` boolean with `statusLine.disabledFooter`,
a structured list of built-in footer surfaces. Keep the boolean as a
compatibility alias until an upstream version bump creates a deliberate
migration point.

| Surface enum | Covers | Patch entry |
| --- | --- | --- |
| `footer` | Built-in prompt footer row. | `statusline-footer-control-render` |
| `effort_notification` | Effort-level notification row. | `statusline-footer-control-effort-notification` |
| `rate_limit_warning` | "You've used ..." warning banner. | `statusline-footer-control-rate-limit-warning` |
| `clipboard_image_hint` | "Image in clipboard ..." focus hint. | `statusline-footer-control-clipboard-image-hint` |
| `teammate_idle_spacer` | Idle spacer before teammate rows. | `statusline-footer-control-teammate-spinner-gap` |

`all` may exist as CLI syntax, but settings should persist the expanded enum
list so each downstream patch site has an explicit responsibility.

## Compatibility Contract

| Input | Effective hidden surfaces |
| --- | --- |
| `--hide-builtin-footer` | All known surfaces. |
| `--hide-builtin-footer footer,rate_limit_warning` | Exactly the listed surfaces for that session. |
| `statusLine.hideBuiltinFooter: true` | All known surfaces. |
| `statusLine.disabledFooter: [...]` | Exactly the listed surfaces. |
| Both boolean and list present | Union of both, with no duplicate effect. |

Do not remove `statusLine.hideBuiltinFooter` until an upstream version bump
creates a deliberate migration point.

## Implementation Shape

- Add settings schema for `statusLine.disabledFooter` as an enum list.
- Keep CLI compatibility by translating `--hide-builtin-footer` into the all
  surface set at runtime.
- Patch each banner site against the compatibility boolean or:
  `disabledFooter.includes("<surface>")`.
- Keep statusline JSON fields independent of hidden-surface selection:
  `permission_mode`, `clipboard_image`, `rate_limit_warning`, and `rate_limits`
  should remain available even when the corresponding built-in UI is visible.

## Verification Gate

- `bun test tools/test/statusline-hide-builtin-footer-cli.test.ts`
- `just verify`
- `just patch-test`
- `bun run --cwd tools test`
- `just typecheck`
- `just smoke`

## Decision

Use `statusLine.disabledFooter`. It is shorter than
`hiddenBuiltinFooterItems`, makes the controlled surface explicit through the
enum values, and avoids introducing a mode object before there is more than one
mode.
