# Chunk #122 — src/utils (ansiToSvg, api, apiPreconnect, argumentSubstitution, array, attachments)

**Files lifted:** 6
**Confidence:** medium — attachments.ts has significant drift and several TODO stubs; all other files are high confidence

## Per-file notes

### ansiToSvg.ts
- bytes out: ~7,200
- decls reconstructed: 5 (ANSI_COLORS, DEFAULT_FG, DEFAULT_BG, get256Color, parseAnsi, ansiToSvg)
- drift: none — region.json shows only `parseAnsi` matched (jac=1, cos=1); remaining 4 decls have no v112 entry but v112_min confirms identical logic for all.
- v112 changes: none detected.
- unresolved symbols: none.
- note: the no-match decls appear to be sourcemap boundary artifacts from the chunk slice, not removals.

### api.ts
- bytes out: ~18,000
- decls reconstructed: 13 (all matched); 1 boundary artifact with no v112 match.
- drift: low-medium — most decls jac=cos=1; three localized changes.
- v112 changes:
  - `prependUserContext`: removed `process.env.NODE_ENV === 'test'` early-return guard (v112_min `Ac8` jumps straight to `Object.entries(K).length === 0`).
  - `normalizeToolInput` FileEditTool case (`ObK`): adds `old_str` → `old_string` / `new_str` → `new_string` migration shim before parsing, for backward-compat with callers passing deprecated field names.
  - `normalizeToolInput` new case for an unknown tool constant `U16`: decodes `\uXXXX` unicode escape sequences in the `message` field — left as TODO since `U16` is an unresolved minified constant.
- unresolved symbols:
  - `U16` (byte ~6,600,000 in v112_min) — normalizeToolInput case; tool name unknown; annotated `// TODO(lift): U16 at byte ~6600000`.

### apiPreconnect.ts
- bytes out: ~2,400
- decls reconstructed: 1 (preconnectAnthropicApi)
- drift: low — jac score not in region.json (single-decl file); v112_min diff is clear.
- v112 changes:
  - Added two extra cloud-provider short-circuit guards in the early-return block:
    `CLAUDE_CODE_USE_ANTHROPIC_AWS` and `CLAUDE_CODE_USE_MANTLE` (in addition to the v88 Bedrock/Vertex/Foundry checks). Confirmed by v112_min literal strings.
- unresolved symbols: none.

### argumentSubstitution.ts
- bytes out: ~4,800
- decls reconstructed: 5 (parseArguments, parseArgumentNames, generateProgressiveArgumentHint, substituteArguments, plus one unexplained boundary entry)
- drift: negligible — 4 of 5 decls jac=cos=1.
- v112 changes: none detected in lifted decls.
- unresolved symbols: none.
- note: The first v88 decl range [8533757, 8533925] maps in region.json to the same v112 byte range as the second decl. In v112_min that range contains `yU8` — a team-memory secret-scan guard completely absent from v88. This indicates a file-level reorganization: `parseArguments` shifted position or the chunk boundary captured a stray non-argument-substitution function. `yU8` is not relevant to this file and was not transcribed; the v88 `parseArguments` is reproduced as authoritative since it appears in v112_min elsewhere.

### array.ts
- bytes out: ~650
- decls reconstructed: 3 (intersperse, count, uniq)
- drift: none — `intersperse` matched (jac=1, cos=1); `count` and `uniq` have no v112 match in this slice but are imported by other v112 files (bashPermissions imports `count`; attachments imports `uniq`), confirming they remain present in v112.
- v112 changes: none detected.
- unresolved symbols: none.

### attachments.ts
- bytes out: ~246,000 (chunk estimate); reconstructed file ~900+ lines
- decls reconstructed: 67 matched; 8 boundary artifacts with no v112 match.
- drift: medium-high on several decls; majority (≈55) are jac=cos=1.
- v112 changes:
  - `getAgentPendingMessageAttachments`: uses `toolUseContext.taskRegistry` (new v112 task-registry pattern) instead of v88's `getAppState`/`setAppStateForTasks` pair.
  - `getAttachments` (main): `TRANSCRIPT_CLASSIFIER` feature gate removed from `auto_mode` / `auto_mode_exit` paths — those attachments are unconditionally included in v112.
  - `getSkillListingAttachments`: removed `process.env.NODE_ENV === 'test'` early-return guard.
  - `getAgentListingDeltaAttachment` / `showConcurrencyNote`: guard extended to also check `!isAgentSwarmsEnabled()`.
  - `startRelevantMemoryPrefetch`: checks `memorySelector` presence on `toolUseContext`; skip-sources set (`bMY`) now includes `extract_memories`, `auto_dream`, and related sources (exact set unresolved — see TODO).
  - `getTokenUsageAttachment`: added `autoCompactWindow` parameter pulled from `toolUseContext.getAppState().autoCompactWindow`.
  - `isFileReadDenied`: uses renamed helper `matchingRuleForInput` (v88 used a different internal call).
- unresolved symbols:
  - `bMY` (byte ~9999000) — skip-sources constant in `startRelevantMemoryPrefetch`; annotated `// TODO(lift): bMY at byte ~9999000`.
  - `Ac` (byte ~10005000) — function used in `isContentEqual`; approximated as string equality; annotated `// TODO(lift): Ac at byte ~10005000`.
  - `QE` / `Ex` (byte ~10010000) — server-name constants in `getMcpInstructionsDeltaAttachment`; annotated `// TODO(lift): QE/Ex at byte ~10010000`.
  - `getTeammateMailboxAttachments` (jac=0.692) — high-drift decl; returned as empty stub pending teammate-mailbox module lift; annotated `// TODO(lift): getTeammateMailboxAttachments drifted (jac=0.692)`.

## Cross-file observations

- `prependUserContext` in `api.ts` loses its test-mode short-circuit alongside the same removal in `getSkillListingAttachments` in `attachments.ts` — v112 removes test-environment special-casing broadly.
- `normalizeToolInput`'s `old_str` → `old_string` shim in `api.ts` is a forward-compat migration introduced in v112; callers across the codebase using the old field names will still work.
- `taskRegistry` on `ToolUseContext` (seen in `attachments.ts`) is consistent with the pattern established in chunk #105 (`resumeAgent.ts`, `runAgent.ts`). When the v112 `Tool.ts` / context type definition is lifted, these access patterns should be reconciled.
- `TRANSCRIPT_CLASSIFIER` feature gate removal from `attachments.ts` aligns with its removal elsewhere in v112 — the classifier is unconditionally active.

## Lifter

`lifter-122` (claude-sonnet-4-6, subagent, v112-lift). Rosetta method: v88 source as ground truth, v112_min diffs applied per region.json alignment data.
