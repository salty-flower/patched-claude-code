# Chunk #112 — src/tools/MCPTool, src/tools/McpAuthTool, src/tools/NotebookEditTool

**Files lifted:** 5
**Confidence:** medium — three files are high confidence (all jac=1 decls), two have significant drift requiring v112-specific inference.

## Per-file notes

### src/tools/MCPTool/UI.tsx
- bytes out: ~12 KiB
- decls reconstructed: 7 (5 jac=1, 1 jac=0.955, 1 no-match stub)
- drift: low — one drifted decl, three no-match boundary decls.
- v112 changes:
  - `renderToolUseMessage`: `feature('MCP_RICH_OUTPUT')` guard on truncation removed; truncation now unconditional.
  - `renderToolResultMessage` (jac=0.955): `feature('MCP_RICH_OUTPUT')` guards removed throughout. Array-branch per-item rendering now delegates to a `MCPOutputItem` component (`hZY` in v112) instead of inline text extraction + `OutputLine`. The new component accepts `{item, verbose}` and renders each MCP content block.
  - `MCPTextOutput`, `tryFlattenJson`, `tryUnwrapTextPayload`, `trySlackSendCompact` are unchanged (jac=1/cos=1).
  - `SLACK_ARCHIVES_RE` and module constants are unchanged.
- unresolved symbols:
  - `MCPOutputItem` (`hZY`) at byte ~9671400 — v112-only component for rendering individual MCP content blocks. Stubbed as `MCPOutputItem_V112` with `OutputLine` fallback.
- v88 decls [6599389,6599426], [6602125,6602144], [6602144,6602304]: no v112 match — boundary artifacts from sourcemap slicing (module init thunks).

### src/tools/MCPTool/classifyForCollapse.ts
- bytes out: ~3 KiB
- decls reconstructed: 2 (1 jac=1, 1 jac=0.5 completely new fn)
- drift: HIGH — the file's purpose substantially changed in v112.
- v112 changes:
  - `SEARCH_TOOLS` Set (~80 entries): no v112 match — dropped or moved to a different module.
  - `READ_TOOLS` Set (~400 entries): no v112 match — dropped or moved.
  - `normalize()` (jac=1, cos=1): function body completely different in v112. v88 used camelCase→snake_case + kebab→snake. v112 uses lowercase + replace non-alnum with `-` + trim dashes (slug normalization). This is a semantic change, not just renaming.
  - `classifyMcpToolForCollapse` export: the jac=0.5 match at v112 [9838520,9838790] is a wholly new function (`summarizeMcpCollapseActivity`/`kC6`). It processes an array of MCP result objects and returns a summary string, not a boolean classification. The `classifyMcpToolForCollapse` export is stubbed with safe-default `{isSearch: false, isRead: false}` since the backing sets are gone.
  - New `summarizeMcpCollapseActivity` function counts trailing consecutive search/read MCP calls and falls back to `activityDescription`.
- unresolved symbols:
  - `OU8` at byte ~9838650 — `formatMcpCollapseSummary(searchCount, readCount, collapsed)` — produces the display string for collapsed MCP activity. Left as TODO in stub body.
  - The replacement mechanism for SEARCH_TOOLS/READ_TOOLS classification (may be in a sibling module or consolidated into MCPTool.ts).

### src/tools/McpAuthTool/McpAuthTool.ts
- bytes out: ~8 KiB
- decls reconstructed: 3 (1 jac=1 near-verbatim, 1 jac=0.901 drifted, 1 jac=0.5 new decl)
- drift: medium-high — core auth flow significantly changed.
- v112 changes:
  - `getConfigUrl` (jac=1, cos=0.995): nearly verbatim; minor bundle-level reorder.
  - `createMcpAuthTool` (jac=0.901, cos=0.999):
    - `AbortController` removed; `performMCPOAuthFlow` signal argument changed to `undefined`.
    - Three new module-level Maps (`bl8`, `Il8`, `xl8`) added to init thunk for tracking OAuth promise/controller/resolver state.
    - `registerOAuthPromise` (`pl8`) call added after `performMCPOAuthFlow` to register promise in the map.
    - When `authUrl` is truthy: builds a `completeAuthentication` tool name via `buildMcpToolName(serverName, "complete_authentication")`.
    - `buildCallbackUrl` (`gGY`) called on `authUrl` — produces the redirect callback URL.
    - `isRemoteSession` (`pGY`) check gates two different UX messages:
      - Remote: instructs user to copy redirect URL + call `complete_authentication` tool with `callback_url`.
      - Local: shorter fallback message if browser shows connection error.
    - Result now includes both UX variants appended to the base auth URL message.
  - New `completeAuthenticationInputSchema` (jac=0.5, cos=0.997) at byte ~10963638: `lazySchema(() => z.object({title: z.string()}))`. This is the inputSchema for a sibling `complete_authentication` pseudo-tool, initialized in a separate `ox6` thunk. Not a v88 parallel — the v88 slot was the main `inputSchema` init.
- unresolved symbols:
  - `buildCallbackUrl` (`gGY`) at byte ~9735800 — builds a callback URL from the OAuth auth URL; exact transform unknown.
  - `isRemoteSession` (`pGY`) at byte ~9735850 — returns bool; likely `isRemoteSession()` from a session utils module.
  - `registerOAuthPromise` (`pl8`) at byte ~9734900 — stores oauthPromise in a module-level Map by serverName.
  - `bl8`, `Il8`, `xl8` at byte ~9734050 — three new Maps in the init thunk; purpose inferred from usage patterns.
  - The sibling `createCompleteAuthenticationTool` function (not in this source file's v112 span).

### src/tools/NotebookEditTool/UI.tsx
- bytes out: ~3 KiB
- decls reconstructed: 5 (all jac=1, cos=1)
- drift: none — all decls verbatim match.
- v112 changes: none detected.
- v88 decls [8773656,8773713], [8774945,8774952], [8774952,8775026]: no v112 match — boundary artifacts.
- unresolved symbols: none.

### src/tools/NotebookEditTool/NotebookEditTool.ts
- bytes out: ~12 KiB
- decls reconstructed: 1 large decl (jac=0.926, cos=1)
- drift: low-medium — targeted additions, logic otherwise intact.
- v112 changes:
  - `toAutoClassifierInput`: `feature('TRANSCRIPT_CLASSIFIER')` gate removed; block is always active.
  - `backfillObservableInput` hook added: normalises `notebook_path` via `resolveAbsPath` (`Wq`) before analytics/logging. Not present in v88.
  - `validateInput`: `isAbsolute/resolve` path resolution replaced by `resolveAbsPath` (`Wq`) always-absolute approach.
  - `validateInput`: new symlink-rejection gate added after the read-state check (errorCode 11). Guarded by `isRemoteSession` (`mY1`); uses `fs.stat` + mode bits (`gf6`); error message `Ff6`.
  - `call`: context destructuring changed from `{readFileState, updateFileHistoryState}` to `{readFileState, getFileHistoryState, applyFileHistoryOp}`.
  - `call`: `fileHistoryTrackEdit` API changed accordingly: `kO()` + `M96(getFileHistoryState, applyFileHistoryOp, ...)`.
  - `call`: `new_cell_id` generation changed from `Math.random().toString(36).substring(2,15)` (13 chars) to `QzY().slice(0,8)` (8 chars) via a v112-only helper.
  - `call`: `writeTextContent` call unchanged.
- unresolved symbols:
  - `resolveAbsPath` (`Wq`) at byte ~8738900 — makes path always absolute; replacement for `isAbsolute/resolve` pattern.
  - `isRemoteSession` (`mY1`) at byte ~8739300 — symlink check gate.
  - `SYMLINK_ERROR_MSG` (`Ff6`) at byte ~8739350 — error message string for symlink errorCode:11.
  - `randomCellId` (`QzY`) at byte ~8742100 — 8-char random ID generator.
  - `fileHistoryEnabled` (`kO`) at byte ~8740550 — replaces `e$()`.
  - `fileHistoryTrackEdit` (`M96`) at byte ~8740600 — takes `(getFileHistoryState, applyFileHistoryOp, path, uuid)`.
- v88 decls [8774952,8775026] and [8775092,8775107]: no v112 match — boundary artifacts from sourcemap slicing.

## Cross-file observations

- `isRemoteSession`/`pGY`/`mY1` appears in both McpAuthTool and NotebookEditTool — same utility, two different call sites. When lifted, import should come from a shared session utils module.
- The SEARCH_TOOLS/READ_TOOLS classification in classifyForCollapse.ts was large (~450 tool name entries). Their disappearance from v112 is the biggest semantic delta in this chunk. The new `normalize()` slugify logic and `summarizeMcpCollapseActivity` suggest the classification strategy shifted — possibly moved to server-side metadata or a centralized registry.
- `completeAuthentication` pseudo-tool (McpAuthTool): only the input schema is within this chunk's span. The full `createCompleteAuthenticationTool` factory is in a neighbouring chunk. Action for a later chunk: when that factory is lifted, import `completeAuthenticationInputSchema` from this file.
- `buildCallbackUrl` (`gGY`) in McpAuthTool is a new v112 helper with no v88 parallel. The fact that it takes the `authUrl` and returns a `callbackUrl` suggests it extracts/transforms the OAuth redirect URI, possibly stripping the query string or substituting the host for remote sessions.

## Lifter

`lifter-112` (sonnet-4-6, general-purpose, team v112-lift).
