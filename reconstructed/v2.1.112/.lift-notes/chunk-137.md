# Chunk #137 Lift Notes

## Files (7)
- `src/utils/mcpOutputStorage.ts`
- `src/utils/mcpValidation.ts`
- `src/utils/memory/types.ts`
- `src/utils/memory/versions.ts`
- `src/utils/memoryFileDetection.ts`
- `src/utils/messagePredicates.ts`
- `src/utils/messageQueueManager.ts`

## File-by-file summary

### mcpOutputStorage.ts
- **Drift**: jac=1, cos=0.999 for most decls; one decl at jac=0.545, cos=0.983 (`getLargeOutputInstructions`) due to parameter reordering in v112 (v88 had `rawOutputPath` as 2nd param in the string template, v112 restructured the template literal concatenation).
- **Reconstruction**: Verbatim from v88 source. No API changes. The `getLargeOutputInstructions` function body is structurally identical; only minified string concatenation order differs.
- **Unresolved**: None.

### mcpValidation.ts
- **Drift**: Mostly jac=1, cos=1. One decl at jac=0.667, cos=0.999 (`getContentSizeEstimate`) — minor minification drift in reduce callback. One decl at jac=0.8, cos=1 (`truncateContentBlocks`) — same.
- **Key change**: `truncateMcpContentIfNeeded` removed in v112. No v112 code imports it. The v88 caller (`services/mcp/client.ts`) was refactored and no longer uses this helper.
- **Reconstruction**: Verbatim from v88 source, minus `truncateMcpContentIfNeeded` export.
- **Unresolved**: None.

### memory/types.ts
- **Drift**: jac=0.833, cos=0.996 — tight drift.
- **Key change**: `feature('TEAMMEM')` gate removed. v112 hardcodes `['User', 'Project', 'Local', 'Managed', 'AutoMem']` without conditional `TeamMem`.
- **Reconstruction**: Removed the `feature('TEAMMEM')` conditional; `TeamMem` is no longer in `MEMORY_TYPE_VALUES`.
- **Unresolved**: None.

### memory/versions.ts
- **Drift**: v88 `projectIsInGitRepo` has **no v112 match** (notes confirm). The single matched decl (jac=1, cos=1) is a bundler co-located init block for the doctor command — not actual memory/versions.ts content.
- **Key change**: `projectIsInGitRepo` removed in v112. The only v88 importer was `components/memory/MemoryFileSelector.tsx`, which also does not exist in v112 reconstructed.
- **Reconstruction**: Empty file with comment explaining removal. No v112 code imports from this module.
- **Unresolved**: None.

### memoryFileDetection.ts
- **Drift**: Mostly jac=1, cos=1. One decl at jac=0.6, cos=0.984 (`isMemoryDirectory`) — real drift in the v112 minified due to symbol renames in path helper calls, but source logic is unchanged.
- **Key change**: `replace(/\\/g, '/')` in `isAutoManagedMemoryPattern` changed to `replaceAll("\\", "/")` in v112 minified. This is a semantic no-op; kept `replace(/\\/g, '/')` in source for compatibility.
- **Reconstruction**: Verbatim from v88 source. All exports are preserved and used by v112 (`collapseReadSearch.ts`, `FileReadTool.ts`).
- **Unresolved**: None.

### messagePredicates.ts
- **Drift**: jac=1, cos=1 — verbatim.
- **Reconstruction**: Verbatim from v88 source.
- **Unresolved**: None.

### messageQueueManager.ts
- **Drift**: Mostly jac=1, cos=1. One decl at jac=0.75, cos=0.993 (backward-compat aliases block) — the aliases are still present in v88 source but the v112 minified bundles them differently.
- **Key changes**:
  - `isPromptInputModeEditable` (v88: `wa_`) has no v112 match in the slice, but v112's `isQueuedCommandEditable` (`hj6`) still calls `i7z(q.mode)`. The function definition is not in any extracted slice; it likely still exists in this module but outside the matched region. Defined locally in reconstruction.
  - All backward-compat aliases (`subscribeToPendingNotifications`, etc.) are preserved in v88 source and still present in the reconstructed file. They may or may not be tree-shaken in v112; the minified shows some bundling differences.
  - v112 adds `dP4((q)=>Dj({mode:"prompt",value:`/${q}`}))` in the init block — an auto-slash-command enqueue hook. This is a runtime registration that doesn't affect the source file structure.
- **Reconstruction**: Verbatim from v88 source, with local definition of `isPromptInputModeEditable` since its v112 definition is not in the slice.
- **Unresolved**: `isPromptInputModeEditable` — defined locally based on v88 semantics; v112 minified references `i7z` at byte ~2048 but the definition is not in the slice.
