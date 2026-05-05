# Chunk #111 — FileEditTool tail + FileRead/Write + MCP entry

**Files lifted:** 11
**Confidence:** medium — high on most files; medium on FileReadTool.ts and FileWriteTool.ts which have moderate drift and several unresolved v112-only helpers.

## Per-file notes

### src/tools/FileEditTool/UI.tsx
- bytes out: ~8 KiB
- decls reconstructed: ~9 (all jac=1, cos=0.994–1.0 — near-verbatim)
- drift: low. One substantive v112 change: `renderToolResultMessage` (`IRK` in v112 vs `Q$K` in v88) adds `filePath=""` default param and a null-guard `if (!filePath) return null` at the top.
- v112 changes:
  - `renderToolResultMessage` now defaults `filePath=""` and guards `if (!filePath) return null`.
  - `firstLine` computation uses `oY(originalFile)` helper (firstLineOf) instead of `originalFile.split('\n')[0] ?? null`, and passes `fileContent: originalFile || undefined` instead of `originalFile`.
  - React compiler cache slot (`_c`) removed — lifted to idiomatic hook-free form.
- unresolved symbols: none.
- Two v88 boundary decls ([8738641,8738652] and [8738652,8738773]) have no v112 match; these are sourcemap slicing artifacts.

### src/tools/FileEditTool/constants.ts
- bytes out: ~600 B
- decls reconstructed: 1 (jac=0.5 — content expanded in v112)
- drift: medium. v88 had 3 exports; v112 minified slice shows 4 string vars (`J4`, `VL8`, `kL8`, `NL8`, `EL8`).
- v112 changes:
  - `FILE_UNEXPECTEDLY_MODIFIED_ERROR` removed/renamed.
  - `FILE_NOT_READ_ERROR` = `'File has not been read yet. Read it first before writing to it.'` (new string).
  - `FILE_CONTENT_CHANGED_ERROR` = `'File content has changed since it was last read...'` (new string for linter-rewrite case).
  - Both errors now have distinct messages in v112.
- unresolved symbols: none.

### src/tools/FileEditTool/prompt.ts
- bytes out: ~1.4 KiB
- decls reconstructed: 1 matched (jac=0.444, cos=0.982) + 3 unmatched v88 boundary decls
- drift: medium. The main `getDefaultEditDescription()` function changed significantly.
- v112 changes:
  - `minimalUniquenessHint` now uses `getFeatureValue_CACHED_MAY_BE_STALE('tengu_edit_minimalanchor_jrn', false)` flag instead of `process.env.USER_TYPE === 'ant'` check.
  - When flag is true: shorter "keep old_string minimal — 1-3 lines" hint replaces the longer uniqueness advice.
  - When flag is false: standard hint (same text as v88 without the ant-specific branch).
- unresolved symbols: none.

### src/tools/FileReadTool/FileReadTool.ts
- bytes out: ~18 KiB
- decls reconstructed: ~10 (2 unmatched boundary, jac range 0.903–1.0)
- drift: medium (jac=0.903 on main tool object, jac=0.949 on call/map section).
- v112 changes:
  - `stripForStorage` method added — strips content/base64/cells from stored results.
  - `MITIGATION_EXEMPT_MODELS` changed from a `Set<string>` with one entry to a `RegExp[]` array covering all claude-3/4 model families.
  - `inputSchema` offset/limit descriptions gated on `tengu_slate_reef` feature flag.
  - `call()` now logs `tengu_file_read_reread` event before dedup check (tracks prior op type: `'edit_write'` vs `'read'`).
  - `readImage()` (w17/F97) takes a new `mainLoopModel` parameter; passes it to `maybeResizeAndDownsampleImageBuffer` for model-aware image processing.
  - `callInner()` (aDK/dyK) extracts `mainLoopModel` from `context.options.mainLoopModel` and passes it to `readImage`.
  - PDF page extraction returns image blocks via `sE({data, mediaType, limits: mainLoopModel})` instead of `LL(buffer, size, mediaType)` — model-aware image builder.
  - After storing text result in readFileState, calls `MR8(fullFilePath)` — unknown side-effect notification.
  - `mapToolResultToToolResultBlockParam` for `file_unchanged` now calls a stub function `getFileUnchangedStubContent()` instead of inlining `FILE_UNCHANGED_STUB`.
  - `file_unchanged` content function (`A44()`) is separate from the constant.
- unresolved symbols:
  - `MR8` at byte ~9609100 — side-effect notification call after text read completes. Left as `notifyFileRead_V112` stub.
  - `sE` at byte ~9607000 — model-aware image block builder for PDF page extraction. Left as `buildImageBlock_V112` stub.
  - `Iy_()` at byte ~3767000 in prompt.ts — additional prompt suffix function. Left as `getAdditionalPromptSuffix` returning `''`.
  - `A44()` — file_unchanged content getter; identified as simple FILE_UNCHANGED_STUB wrapper.

### src/tools/FileReadTool/limits.ts
- bytes out: ~2 KiB
- decls reconstructed: 2 (jac=1.0, cos=1.0 — verbatim)
- drift: none. Exact match. `getDefaultFileReadingLimits` now uses `P1` (lodash memoize) directly in v112 but semantics identical.
- unresolved symbols: none.

### src/tools/FileReadTool/prompt.ts
- bytes out: ~2 KiB
- decls reconstructed: 2 (jac=1.0 and jac=0.667; cos=0.992 and 0.995)
- drift: low on `renderPromptTemplate`; medium on the constants block.
- v112 changes:
  - New constants: `FILE_UNCHANGED_STUB_WASTED`, `FILE_STATE_CURRENT_NOTE`, `by_` (re-read-after-edit note).
  - `by_` = `'\n- Do NOT re-read a file you just edited to verify...'` appended when `qN6()` is true.
  - `ok8` = `' (file state is current in your context — no need to Read it back)'` — appended to write/edit tool_results.
  - `renderPromptTemplate` appends `qN6() ? by_ : ""` and `Iy_()` suffix — two new callouts.
  - `FILE_UNCHANGED_STUB` text unchanged.
  - `DESCRIPTION` = `'Read a file from the local filesystem.'` (unchanged).
- unresolved symbols:
  - `Iy_()` at byte ~3767000 — second additional prompt suffix. Stubbed as `getAdditionalPromptSuffix()` returning `''`.
  - `qN6()` / `isReReadAfterEditEnabled()` — feature flag predicate. Stubbed with import placeholder.

### src/tools/FileWriteTool/FileWriteTool.ts
- bytes out: ~14 KiB
- decls reconstructed: 1 large tool object (jac=0.756, cos=0.999 — significant drift)
- drift: medium-high.
- v112 changes:
  - Output schema adds `userModified: z.boolean().optional()` field.
  - `stripForStorage` method added — strips `content`/`originalFile` from update results.
  - `inputsEquivalent` method added — compares file_path and content (trimming trailing newlines).
  - `validateInput` adds subagent report block: if `tengu_sub_nomdrep_q7k` flag and `agentId` present, blocks writing REPORT/SUMMARY/FINDINGS/ANALYSIS .md files.
  - `validateInput` adds binary file mode check (`gf6(mode)`) → errorCode 6.
  - `validateInput` content-mismatch check uses `Ac(j, P)` (content compare) as fallback for full reads, matching FileEditTool's approach.
  - `call()` uses `getFileHistoryState`/`applyFileHistoryOp` instead of `updateFileHistoryState`.
  - `call()` content goes through `XR8(fullFilePath, content)` normalizer before `S16` (writeTextContent).
  - `call()` calls `kI8` then `NI8` before `changeFile` on LSP manager.
  - `call()` git diff gate: v88 required both `CLAUDE_CODE_REMOTE` and `tengu_quartz_lantern` flag; v112 only requires `CLAUDE_CODE_REMOTE`.
  - `mapToolResultToToolResultBlockParam` appends `userModifiedNote` and `fileStateSuffix` (via `qN6`/`ok8`).
  - `structuredPatch` in update result computed by `U56` (getPatchForDisplay with `convertTabs:true`) in v112.
- unresolved symbols:
  - `XR8` at byte ~8691500 — content normalizer before write. Stubbed as `normalizeLineEndings_V112` (identity).
  - `NI8` at byte ~8692500 — additional LSP notification call. Stubbed with TODO comment.
  - `qN6`/`ok8` at byte ~8694000 — re-read-after-edit suffix. Stubbed as `getFileStateCurrentSuffix_V112` returning `''`.
  - `gf6` — binary file mode check. Stubbed as `hasBinaryFileMode`.
  - `U56` — `getPatchForDisplay` with `convertTabs:true`. Used directly in lifted code with convertTabs.

### src/tools/FileWriteTool/UI.tsx
- bytes out: ~9 KiB
- decls reconstructed: ~13 (jac range 0.5–1.0; main tool UI block jac=0.916)
- drift: low-medium.
- v112 changes:
  - `FileWriteToolCreatedMessage` (`M_Y` in v112): `columns` now comes from `s1()` call, width computation changes (`Math.max(1, A-12)` same), `truncated` content sliced differently (uses `slice(0, j58*(O+1))`), plusLines calc uses `WPK`.
  - `renderToolResultMessage` adds `filePath=""` default and `if (!filePath) return null` guard.
  - `renderToolResultMessage` uses `oY(K)` (`firstLineOf(content)`) for firstLine in update case.
  - `loadRejectionDiff` uses `J_Y` (isAbsolute) and `X_Y` (resolve) from path — same functions.
  - One v88 decl uses `countLines` named `$35` but v112 re-implements with same logic as `PPK`.
  - `renderToolUseRejectedMessage` passes `firstLineOf` via `oY` for the rejected view.
- unresolved symbols:
  - `WPK` at byte ~8684000 — "extra lines" calculation for display truncation. Stubbed with `plusLines` computed inline.

### src/tools/FileWriteTool/prompt.ts
- bytes out: ~500 B
- decls reconstructed: 3 (all jac=1.0, cos=1.0 — verbatim)
- drift: none. Exact match with v88.
- unresolved symbols: none.

### src/tools/ListMcpResourcesTool/UI.tsx
- bytes out: ~600 B
- decls reconstructed: 2 (jac=1.0, cos=1.0 — verbatim)
- drift: none. Exact match.
- unresolved symbols: none.
- Two v88 boundary decls ([6594779,6594889], [6595211,6595219], [6595219,6595272]) have no v112 match; sourcemap slicing artifacts.

### src/tools/MCPTool/MCPTool.ts
- bytes out: ~2 KiB
- decls reconstructed: 1 (jac=0.897, cos=0.996 — low drift)
- drift: low.
- v112 changes:
  - `isResultTruncated` expanded: v88 just called `isOutputLineTruncated(output)`; v112 checks if result is a string or an array of content blocks with type='text', calling `isOutputLineTruncated` on each text block's text.
  - `mapToolResultToToolResultBlockParam` wraps content through `i38(q)` serializer instead of passing raw. Likely serializes content block arrays to the appropriate API format.
- unresolved symbols:
  - `i38` at byte ~9673900 — MCP result content serializer. Stubbed as `serializeMcpContent_V112` (identity).

## Cross-file observations

- `isReReadAfterEditEnabled()` / `qN6()` appears across prompt.ts, FileWriteTool.ts, and FileReadTool.ts — when this feature is enabled, both the Read tool prompt and Write/Edit tool_results append hints about not re-reading after edits. The v112 feature flag `tengu_re_read_after_edit` or similar name is unresolved; stubbed with import placeholder in prompt.ts.
- `ok8` string ` (file state is current in your context — no need to Read it back)` appears in FileWriteTool and FileEditTool tool_result mappers — gated on `qN6() && !userModified`.
- `XR8(filePath, content)` appears in both FileEditTool.ts and FileWriteTool.ts calls — a shared content normalizer run before every write. Identity-stubbed; actual transform likely handles CRLF normalization or similar.
- `U56` in FileWriteTool.ts is `getPatchForDisplay` with `convertTabs:true` — slightly different from v88's `_y`/`_88` calls that didn't pass `convertTabs`. This means tab characters in content diffs are expanded for display in v112.
- `userModified` field flows from `context.userModified` through both FileEditTool and FileWriteTool into the output schema and tool_result text. This enables the permission dialog "user edited before accepting" flow.
- `getFileHistoryState`/`applyFileHistoryOp` replaces `updateFileHistoryState` in both FileEditTool.ts (already noted in chunk-110) and FileWriteTool.ts — consistent API change across the write-capable tools.

## Lifter

`lifter-111` (sonnet-4-6, general-purpose, team v112-lift).
