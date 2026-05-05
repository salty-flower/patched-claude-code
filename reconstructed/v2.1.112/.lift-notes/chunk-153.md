# Chunk 153 Lift Notes

## src/utils/settings/types.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**: The SettingsSchema declaration (v88 span [1037826,1058507]) has no v112 match. v112 minified shows:
  - `effortLevel` enum now includes `'max'` for ant users (was `['low','medium','high']` for all)
  - Feature gates removed from minified: `TRANSCRIPT_CLASSIFIER`, `LODESTONE`, `PROACTIVE`, `KAIROS`, `VOICE_MODE` spreads are gone (bundler dead-code eliminated)
  - `disableAutoMode` moved outside the `TRANSCRIPT_CLASSIFIER` feature gate in v112
  - `PermissionsSchema` no longer has `disableAutoMode` inside a feature gate in v112
  - `cleanupPeriodDays` description changed in v112 (now rejects 0)
  - `strictPluginOnlyCustomization` `.catch(undefined)` behavior confirmed in v112
  - Kept v88 source structure with feature gates since they are still present in the source code (bundler optimization, not source change)

## src/utils/settings/validateEditTool.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: None

## src/utils/settings/validation.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `formatZodError`: jac=0.907, cos=1 — v112 adds `.suggestion` to error message lines in `validateSettingsFileContent` output
  - `validateSettingsFileContent`: jac=0.909, cos=0.998 — error message lines now include suggestion when available
  - `filterInvalidPermissionRules`: jac=0.882, cos=0.999 — v112 adds `severity: 'warning'` to each ValidationError pushed

## src/utils/settings/validationTips.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `cleanupPeriodDays` tip changed: v88 said "Must be 0 or greater...", v112 says "cleanupPeriodDays must be at least 1..." and no longer checks `ctx.expected === '0'`
  - New tip added for `hooks.` prefix + `invalid_key` code: "Not a recognized hook event. Common events: PreToolUse, PostToolUse, UserPromptSubmit, SessionStart, SessionEnd, Stop."
  - The TIP_MATCHERS array declaration moved from validationTips.ts into validation.ts in v112 (inlined), but `getValidationTip` function stays here with jac=1, cos=1

## src/utils/shell/bashProvider.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `createBashShellProvider`: jac=0.906, cos=1 — several changes:
    - Session env script now appended with `\n:` suffix (v112: `D.push(`${Z}\n:`)`)
    - New remote environment handling: `if (S6(process.env.CLAUDE_CODE_REMOTE))` adds `export BUN_OPTIONS="--smol..."`
    - `getEnvironmentOverrides` signature changed: now accepts `sessionEnvVars?: Map<string, string>` and `tmuxEnv?: { getTmuxEnv: () => string | null }` parameters
    - `getEnvironmentOverrides` now sets `env.BUN_INSTALL = process.execPath`
    - TMUX env lookup now uses passed `tmuxEnv` parameter first, falls back to `getClaudeTmuxEnv()`
    - Session env vars now use passed `sessionEnvVars` parameter first, falls back to `getSessionEnvVars()`
    - Removed `ensureSocketInitialized()` call and `hasTmuxToolBeenUsed()` check from v112 (tmux logic simplified)

## src/utils/shell/outputLimits.ts
- **Status**: Copied verbatim (code identical, decl boundaries shifted in minified)
- **Drift**: None

## src/utils/shell/powershellDetection.ts
- **Status**: Copied verbatim (jac=1, cos=1 for matched decls; unmatched decls are import/export boundaries)
- **Drift**: None

## src/utils/shell/powershellProvider.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `createPowerShellProvider`: jac=0.95, cos=1 — `getEnvironmentOverrides` signature changed:
    - Now accepts `_command: string` and `sessionEnvVars?: Map<string, string>` parameters
    - Session env vars now use passed `sessionEnvVars` Map instead of calling `getSessionEnvVars()` directly
    - Removed the comment about ordering (session vars first) since the parameter is now explicit

## src/utils/shell/readOnlyCommandValidation.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - First decl (sandbox exports): jac=0.895, cos=0.999 — v112 adds `getNetworkRestrictionConfig` with conditional allowedDomains check, `getAllowUnixSockets`, `getAllowLocalBinding`, `getEnableWeakerNestedSandbox`, `getProxyPort`, `getSocksProxyPort`, `getLinuxHttpSocketPath`, `getLinuxSocksSocketPath`, `waitForNetworkInitialization`, `getSandboxViolationStore`, `annotateStderrWithSandboxFailures`, `cleanupAfterCommand` with `Vn_()` call
  - `validateFlags`: jac=0.875, cos=1 — v112 adds `egrep` and `fgrep` to the commandName check for attached numeric flags (was only `grep` and `rg` in v88)

## src/utils/shell/resolveDefaultShell.ts
- **Status**: Copied verbatim (jac=1, cos=1)
- **Drift**: None

## src/utils/shell/shellToolUtils.ts
- **Status**: Reconstructed with v112 semantic changes
- **Drift**:
  - `isPowerShellToolEnabled`: jac=0.667, cos=0.972 — v112 logic restructured:
    - v88: `if (windows) return ant ? !falsy(env) : truthy(env)`
    - v112: reads env once, checks `isEnvTruthy` first, then `isEnvDefinedFalsy`, then falls through to a feature flag `u8("tengu_cobalt_ridge", false)`
    - The ant/external distinction is gone; replaced by a feature-flag default
