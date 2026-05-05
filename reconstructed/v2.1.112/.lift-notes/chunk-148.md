# Chunk 148 Lift Notes

## Files

- `src/utils/processUserInput/processSlashCommand.tsx`
- `src/utils/processUserInput/processTextPrompt.ts`
- `src/utils/processUserInput/processUserInput.ts`
- `src/utils/profilerBase.ts`
- `src/utils/promptCategory.ts`
- `src/utils/promptEditor.ts`
- `src/utils/promptShellExecution.ts`

---

## Per-File Drift Summary

### processTextPrompt.ts — VERBATIM
- **jac=1, cos=1** across all decls.
- No semantic changes between v88 and v112. Minified names shifted but structure is identical.

### profilerBase.ts — VERBATIM
- **jac=1, cos=1** across all decls.
- No semantic changes. Import block and all three functions unchanged.

### promptCategory.ts — VERBATIM
- **jac=1, cos=1** across all decls.
- No semantic changes.

### promptShellExecution.ts — TIGHT DRIFT (import block only)
- First decl: **jac=0.926, cos=1** — import block drift due to added PowerShellTool fields in v112 (background task-related schema changes).
- All other decls: **jac=1, cos=1**.
- Core `executeShellCommandsInPrompt` logic unchanged. PowerShellTool schema gained `backgroundTaskId`, `backgroundedByUser`, `assistantAutoBackgrounded` fields.

### promptEditor.ts — MODERATE DRIFT
- `editFileInEditor`: **jac=0.583, cos=0.992** — significant structural change.
  - v112 uses cross-platform `execSync` with `shell: true` on win32 and argv-style spawn elsewhere.
  - Error handling expanded: catches `j.error`, `j.signal`, and non-zero `j.status`.
  - Returns structured error messages including editor name and exit reason.
- `recollapsePastedContent`: **jac=1, cos=1** — verbatim.
- `editPromptInEditor`: **jac=1, cos=0.999** — nearly verbatim; minor change in temp file prefix generation (`_?jbY(_)+A:A`).

### processUserInput.ts — MODERATE DRIFT
- `processUserInput` (outer): **jac=0.978, cos=0.999** — tight drift.
  - Added `shouldQuery?: boolean` param.
  - Added `sessionTitle` collection from hook results.
  - Added `setSessionTitle(sessionTitle)` call after hooks complete.
- `applyTruncation`: **jac=0.5, cos=0.931** — moved out of this file in v112. Now an external utility (EoK at byte ~10110030).
- `processUserInputBase`: **jac=0.703, cos=0.999** — moderate drift.
  - Image resizing now takes model-aware limits (`vO` / `getModelImageResizeLimits`).
  - `storeImages` now takes `setAppState` as second arg (`Fq5`).
  - Bridge-safe handling: added command-suggestion fallback (`WH7` / `getSuggestedCommand`) for unsafe bridge commands; rewrites input string and injects suggested command into context.options.commands.
  - Ultraplan routing unchanged.
  - `getAttachmentMessages` signature simplified — no `querySource` param.
  - Added thinking-mode system prompt append when `customSystemPrompt === undefined`, `thinkingConfig.type !== 'disabled'`, model is thinking-capable, and IDE selection contains assistant-type items.

### processSlashCommand.tsx — MODERATE DRIFT
- `executeForkedSlashCommand`: **jac=0.859, cos=1** — tight drift.
  - KAIROS background fork logic **removed entirely**.
  - Added `emitToolProgress` calls for progress/clear events.
- `processSlashCommand`: **jac=0.773, cos=0.999** — moderate drift.
  - Added non-interactive session guard for built-in commands.
  - Added fuzzy command suggestion (`Yb6` / `suggestCommand`) for unknown commands with `had_suggestion` telemetry field.
  - Unknown command message changed from `Unknown skill: ${H}` to `Unknown command: /${H}` (with optional "Did you mean?").
  - Telemetry: removed ant-only `skill_*` fields.
- `getMessagesForSlashCommand`: **jac=0.98, cos=1** — tight drift.
  - Added `local-jsx` non-interactive session check at top of function.
  - `local-jsx` handler: fullscreen check now uses `isFullscreenEnvEnabled()`; non-interactive guard moved earlier.
  - `local` case: synthetic caveat message creation moved inside try block.
  - `compact` case: uses `buildPostCompactMessages` (Yt) — same as v88.
- `getMessagesForPromptSlashCommand`: **jac=0.952, cos=1** — tight drift.
  - COORDINATOR_MODE block **removed entirely**.
  - `getAttachmentMessages` call no longer passes `planSlugSeed: K`.

---

## Cross-File Observations

1. **KAIROS removal**: The background fork logic in `executeForkedSlashCommand` was completely excised. This is a significant feature removal affecting only forked prompt commands in assistant mode.

2. **COORDINATOR_MODE removal**: The coordinator-mode short-circuit in `getMessagesForPromptSlashCommand` was removed. This simplifies prompt slash command handling.

3. **Bridge command suggestion**: v112 adds a new fallback path in `processUserInputBase` where unsafe bridge commands get replaced with a suggested safe alternative (`getSuggestedCommand`), rather than just erroring.

4. **Thinking mode integration**: `processUserInputBase` now appends a thinking-mode system prompt under specific conditions (model capability + no custom system prompt + thinking not disabled + assistant IDE selection).

5. **Telemetry simplification**: ant-only `skill_name`, `skill_source`, `skill_loaded_from`, `skill_kind` fields removed from slash command telemetry.

6. **Image processing model-awareness**: Both `processUserInputBase` and image resizer paths now pass model-aware resize limits.

7. **storeImages API change**: Now requires `setAppState` as a second argument.

8. **getAttachmentMessages API change**: `querySource` parameter removed in v112.

---

## Unresolved Symbols List

| Symbol | Minified Name | Byte Offset | File | Description |
|--------|---------------|-------------|------|-------------|
| `getModelImageResizeLimits` | `vO` | ~12485985 | processUserInput.ts | Model-aware image resize limits |
| `resizePastedImage` | `sE` | ~12485985 | processUserInput.ts | Structured pasted-image resize helper |
| `storeImages(v112)` | `Fq5` | ~12485985 | processUserInput.ts | storeImages with setAppState arg |
| `getSuggestedCommand` | `WH7` | ~12485985 | processUserInput.ts | Bridge command suggestion fallback |
| `setSessionTitle` | `Ma8` | ~12490497 | processUserInput.ts | Apply hook-derived session title |
| `THINKING_MODE_PROMPT` | `G85` | ~12490497 | processUserInput.ts | Thinking mode system prompt text |
| `isThinkingCapableModel` | `fJ7` | ~12490497 | processUserInput.ts | Model capability check for thinking |
| `suggestCommand` | `Yb6` | ~8548529 | processSlashCommand.tsx | Fuzzy command suggestion utility |
| `applyTruncation` | `EoK` | ~10110030 | external | Truncation helper moved out of file |
| `truncateContent` | `S$7` | ~10110030 | external | MAX_HOOK_OUTPUT_LENGTH constant |
