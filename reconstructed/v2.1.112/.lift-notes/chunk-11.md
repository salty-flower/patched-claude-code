# Chunk 11 Lift Notes

## Files Reconstructed

### Verbatim copies (jac=1, cos=1)

| File | Status | Notes |
|------|--------|-------|
| `src/commands/install-slack-app/index.ts` | verbatim | No changes |
| `src/commands/install-slack-app/install-slack-app.ts` | verbatim | No changes |
| `src/commands/issue/index.js` | verbatim | No changes |
| `src/commands/login/index.ts` | verbatim | No changes |
| `src/commands/mcp/index.ts` | verbatim | No changes |
| `src/commands/memory/index.ts` | verbatim | No changes |
| `src/commands/install-github-app/CheckGitHubStep.tsx` | verbatim | No changes |
| `src/commands/install-github-app/ErrorStep.tsx` | verbatim | No changes |
| `src/commands/keybindings/keybindings.ts` | verbatim | No changes |

### Reconstructed with v112 semantic changes

| File | jac | cos | Key Changes |
|------|-----|-----|-------------|
| `src/commands/install-github-app/ApiKeyStep.tsx` | 0.86 | 1 | Replaced raw `↑/↓ to select · Enter to continue` hint text with `<ConfigurableShortcutHint>` components for up/down select and enter continue |
| `src/commands/install-github-app/CheckExistingSecretStep.tsx` | 0.851 | 1 | Same hint replacement as ApiKeyStep; uses `<ConfigurableShortcutHint>` components |
| `src/commands/install-github-app/ChooseRepoStep.tsx` | 0.833 | 1 | Same hint replacement; uses `<ConfigurableShortcutHint>` for up/down select (conditional on currentRepo) and enter continue |
| `src/commands/install-github-app/CreatingStep.tsx` | 0.941 | 1 | Title changed from `<Text bold>` to `<ku subtitle="...">` wrapper; minor JSX structural change in header |
| `src/commands/install-github-app/SuccessStep.tsx` | 0.763 | 1 | Replaced raw `✓ ` checkmark with `<StatusIcon status="success" withSpace />` component; title uses `<ku subtitle="Success">` wrapper |
| `src/commands/install-github-app/WarningsStep.tsx` | 0.639/1/1 | 0.999/1/1 | Major changes: replaced raw "Press Enter to continue anyway, or Ctrl+C to exit and fix issues" text with `<ConfigurableShortcutHint>` components for enter and ctrl+c; uses `<A8>` (ConfigurableShortcutHint) component |
| `src/commands/install-github-app/OAuthFlowStep.tsx` | 0.72 | 0.998 | Significant restructuring: extracted render logic into separate `qIY` component (not fully reconstructed here); uses `KeyboardShortcutHint` for copy action; v112 has `urlOutdent` prop on `ConsoleOAuthFlow` not present in v88 |
| `src/commands/login/login.tsx` | 0.875 | 0.999 | Removed `feature('TRANSCRIPT_CLASSIFIER')` guard around auto-mode killswitch checks — v112 unconditionally calls `resetAutoModeGateCheck()` and `checkAndDisableAutoModeIfNeeded()`; removed `import { feature } from 'bun:bundle'` |
| `src/commands/logout/logout.tsx` | mixed | mixed | `performLogout` body is jac=1 but call() wrapper changed: v112 removes `clearOnboarding` parameter from `performLogout` call in `call()`, always passing `{clearOnboarding: true}`; v88 had it parameterized |
| `src/commands/mcp/mcp.tsx` | mixed | mixed | Removed `/plugins` redirect branch for "ant" users — v112 always returns `<MCPSettings onComplete={onDone} />` for base command; removed `PluginSettings` import and the `if ("external" === 'ant')` redirect block |

## Unresolved Symbols

- `OAuthFlowStep.tsx`: The `qIY` sub-component extracted in v112 minified code is not fully reconstructed — the inline render function `renderStatusMessage()` is kept as a local function instead.
- `OAuthFlowStep.tsx`: `logEvent` import may need verification against v112 exports.
- `WarningsStep.tsx`: `A8` component alias for `ConfigurableShortcutHint` — verified as same component.
- `SuccessStep.tsx`: `D4` alias for `StatusIcon` — verified as same component.
- `CreatingStep.tsx`: `ku` alias for dialog title wrapper component.
