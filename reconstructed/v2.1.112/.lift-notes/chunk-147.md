# Chunk 147 Lift Notes

## Files

- `src/utils/powershell/parser.ts`
- `src/utils/preflightChecks.tsx`
- `src/utils/privacyLevel.ts`
- `src/utils/process.ts`
- `src/utils/processUserInput/processBashCommand.tsx`

---

## src/utils/powershell/parser.ts

### Drift Summary
- **jac/cos bands**: Mostly jac=1, cos=1 (verbatim). Two decls with jac=0.9, cos=0.999 and jac=0.841, cos=0.998 (tight drift). One large v88 decl [8580161, 8590844] has **no v112 match** — the PS1 script body relocated in v112 bundle.
- **hasBackgroundJob**: Added to `ParsedPowerShellCommand` type and `transformRawOutput`. The v112 minified shows `if(q.hasBackgroundJob)K.hasBackgroundJob=!0` in `YWY` (transformRawOutput). The actual PS1 script emitting this field is in the unmatched v112 region.
- **Retry loop restructured** (`parsePowerShellCommandImpl`): v112 catches spawn errors into a `spawnError` variable and retries, rather than immediately returning. Break condition changed from `!timedOut` to `code === 0`. Logging consolidated into a single per-iteration message.
- **commandHasArgAbbreviation removed**: Replaced by `commandHasDangerousAbbreviation` (minified `fWY`), which checks args against a dangerous-parameter denylist (`BEK`) and a safe-value safelist (`pEK`). Exact set contents unresolved (cross-chunk symbols).
- **PS1 script body**: Verbatim in extracted slice, but v112's actual script (with `hasBackgroundJob` detection) lives in the unmatched region. Kept v88 body with TODO.

### Unresolved
- `hasBackgroundJob` PS1 script modifications (unmatched decl)
- `BEK` (dangerous param denylist) and `pEK` (safe value safelist) contents at byte ~9502528

---

## src/utils/preflightChecks.tsx

### Drift Summary
- **jac/cos bands**: jac=1, cos=1 for both main function decls. Boundary decls (imports, React compiler runtime, `_temp`) unmatched — expected noise.
- **Verbatim lift** with updated minified names: `IM` → `cM` (React import), `PeK` → `Vw5` (PreflightStep), `InY` → `i2A` (checkEndpoints), `unY` → `r2A` (_temp).
- No semantic changes detected.

---

## src/utils/privacyLevel.ts

### Drift Summary
- **jac/cos bands**: `getPrivacyLevel` jac=0.833, cos=0.994 (real drift). Other decls jac=1, cos=1.
- **DO_NOT_TRACK support**: v112 adds `isDoNotTrack(process.env.DO_NOT_TRACK)` check in `getPrivacyLevel()`, returning `'no-telemetry'` when set. The minified uses `S6(...)` for the check — likely checks for `'1'` or `'true'`.
- `getEssentialTrafficOnlyReason` unchanged.

### Unresolved
- Exact `isDoNotTrack` implementation (minified `S6` at byte ~871904)

---

## src/utils/process.ts

### Drift Summary
- **jac/cos bands**: jac=1, cos=1 across all matched decls. One unmatched decl [142821, 142870] in v88 — the `exitWithError` function.
- **exitWithError removed**: The v112 extracted slice does not contain `exitWithError`. It was either relocated to another chunk or removed. The v112_min has 6 decls vs v88's 7 matched + 1 unmatched.
- All other functions (`registerProcessOutputErrorHandlers`, `writeToStdout`, `writeToStderr`, `peekForStdinData`) are verbatim.

### Unresolved
- `exitWithError` relocation — not in this chunk's v112 slice

---

## src/utils/processUserInput/processBashCommand.tsx

### Drift Summary
- **jac/cos bands**: jac=0.861, cos=0.998 (tight drift). Boundary decls unmatched.
- **Signature change**: Reduced from 5 params to 4. `attachmentMessages` removed from params; now accessed via `context`.
- **Progress reporting overhaul**: v112 uses `emitToolProgress` (from context) with `kind: 'bash_mode_progress'` / `kind: 'clear'` instead of direct `setToolJSX` calls for progress updates.
- **toolUseId**: Generated upfront via `_z5()` (likely `randomUUID`) and threaded through `bashModeContext` as `toolUseId: '${toolUseId}:inner'`.
- **attachmentMessages no longer spread** into returned message arrays in any code path.
- **JSX creation**: Uses `on` (React namespace) instead of `dd` (React default import).

### Unresolved
- `_z5()` — toolUseId generator at byte ~12484124 (likely `randomUUID` from crypto)
- `zu()` — `createSyntheticUserCaveatMessage` at byte ~12484161
- `_e()` — `createUserInterruptionMessage` at byte ~12484161
- `t8()` — `createUserMessage` at byte ~12484161
- `JV` — `ShellError` class at byte ~12484161
- `b6()` — `errorMessage` at byte ~12484161

---

## Cross-File Observations

1. **process.ts / processBashCommand.tsx**: `exitWithError` may have moved to a shared error-handling chunk or been inlined. Both files show bundle reorganization around utility functions.

2. **parser.ts / processBashCommand.tsx**: Both files show v112's trend toward more structured progress/event reporting (parser's retry-loop logging consolidation, bash command's `emitToolProgress`).

3. **privacyLevel.ts**: The `DO_NOT_TRACK` addition aligns with broader privacy-standard compliance (GDPR, CCPA) — a cross-cutting concern likely reflected in telemetry modules too.

4. **preflightChecks.tsx / process.ts**: Both remain largely verbatim, indicating these are stable utility modules with minimal feature churn between v88 and v112.

---

## Unresolved Symbols List

| Symbol | File | Byte Offset | Notes |
|--------|------|-------------|-------|
| `S6` | privacyLevel.ts | ~871904 | `isDoNotTrack` helper |
| `hasBackgroundJob` PS1 | parser.ts | ~9480765 | Unmatched decl — actual v112 PS1 body |
| `BEK`, `pEK` | parser.ts | ~9502528 | Dangerous param denylist / safe value safelist |
| `_z5` | processBashCommand.tsx | ~12484124 | toolUseId generator (randomUUID?) |
| `zu`, `_e`, `t8`, `JV`, `b6` | processBashCommand.tsx | ~12484161 | Message creators / error types |
| `exitWithError` | process.ts | — | Relocated or removed in v112 |
