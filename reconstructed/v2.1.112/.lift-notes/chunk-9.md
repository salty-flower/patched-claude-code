# Chunk 9 Lift Notes

## src/commands/export/export.tsx
- **Drift**: HIGH. The direct-file-write path when `args` is provided changed significantly.
- **v88**: Used `writeFileSync_DEPRECATED` with manual `.txt` extension handling and `join(getCwd(), filename)`.
- **v112**: Uses `exportToFile(filename, content)` which handles extension and path internally. Removed `join`, `getCwd`, `writeFileSync_DEPRECATED` imports; added `exportToFile` import.
- **Status**: Reconstructed with v112 semantics.

## src/commands/export/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/extra-usage/extra-usage-core.ts
- **Drift**: LOW (jac=0.96, cos=0.999). Minified function names changed but semantics identical.
- **Status**: Copied verbatim from v88; no semantic changes detected.

## src/commands/extra-usage/extra-usage-noninteractive.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/extra-usage/extra-usage.tsx
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/extra-usage/index.ts
- **Drift**: LOW (jac=1, cos=0.972). Minor import/whitespace changes in minified output.
- **Status**: Copied verbatim; no semantic changes.

## src/commands/fast/fast.tsx
- **Drift**: MEDIUM (jac=0.873, cos=1). React compiler runtime present in both.
- **v112 changes**: Input guide uses `KeybindingHint` component instead of raw `Text` for chord hints. Added `KeybindingHint` import.
- **Status**: Reconstructed with v112 JSX changes.

## src/commands/fast/index.ts
- **Drift**: LOW (jac=0.786, cos=0.997). Minor minification differences.
- **Status**: Copied verbatim; no semantic changes.

## src/commands/feedback/feedback.tsx
- **Drift**: HIGH. v112 adds `getFeedbackUnavailableReason()` check at start of `call`.
- **v88**: `call` directly renders Feedback component.
- **v112**: `call` first checks `getFeedbackUnavailableReason()`, returns early with reason if unavailable. Added `getFeedbackUnavailableReason` import.
- **Status**: Reconstructed with v112 semantics.

## src/commands/feedback/index.ts
- **Drift**: MEDIUM (jac=0.6, cos=0.934). `isEnabled` simplified from complex env checks to `() => true`.
- **v88**: Checked `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX`, `CLAUDE_CODE_USE_FOUNDRY`, `DISABLE_FEEDBACK_COMMAND`, `DISABLE_BUG_COMMAND`, `isEssentialTrafficOnly()`, `USER_TYPE === 'ant'`, and `isPolicyAllowed('allow_product_feedback')`.
- **v112**: Always enabled (`() => true`). The gating logic moved elsewhere (likely into `getFeedbackUnavailableReason`).
- **Status**: Reconstructed with v112 semantics.

## src/commands/files/files.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/files/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/good-claude/index.js
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/heapdump/heapdump.ts
- **Drift**: MEDIUM (jac=0.714, cos=0.955). Added diagnostics output.
- **v88**: Returned `heapPath\ndiagPath` on success.
- **v112**: Added `result.diagnostics` check; if present, appends formatted diagnostics. Also adds instructional line about Chrome DevTools. Added `formatHeapDiagnostics` import.
- **Status**: Reconstructed with v112 semantics.

## src/commands/heapdump/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/help/help.tsx
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/help/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/hooks/hooks.tsx
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/hooks/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/ide/index.ts
- **Drift**: NONE (jac=1, cos=1).
- **Status**: Copied verbatim.

## src/commands/init.ts
- **Drift**: HIGH. Removed `feature('NEW_INIT')` flag and `maybeMarkProjectOnboardingComplete()`.
- **v88**: Used `feature('NEW_INIT') && (USER_TYPE === 'ant' || CLAUDE_CODE_NEW_INIT)` for prompt selection. Called `maybeMarkProjectOnboardingComplete()` in `getPromptForCommand`.
- **v112**: Simplified to `isEnvTruthy(process.env.CLAUDE_CODE_NEW_INIT)` only. Removed `feature` import and `maybeMarkProjectOnboardingComplete` import/call. Both OLD_INIT_PROMPT and NEW_INIT_PROMPT still present.
- **Status**: Reconstructed with v112 semantics.
