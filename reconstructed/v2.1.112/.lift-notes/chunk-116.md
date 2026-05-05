# Chunk #116 — PowerShell tail + REPL/Mcp/RemoteTrigger/ScheduleCron/SendMessage

**Files lifted:** 11
**Confidence:** medium-high

## Per-file notes

### src/tools/PowerShellTool/readOnlyValidation.ts
- bytes out: ~47 KiB (large file — cmdlet allowlist + 8 exported functions + 4 private validators)
- decls reconstructed: 18
- drift: medium (jac varies 0.667–1; main drift on first decl jac=0.667)
- v112 changes:
  - `ipconfig.safeFlags`: dropped `/displaydns`; v112 has only `['/all', '/allcompartments']`.
  - `arp` safeFlags: `-N` → `-n` (lowercase); added `additionalCommandIsDangerousCallback` rejecting non-flag positionals (matching `hostname` pattern).
  - `route` `additionalCommandIsDangerousCallback`: changed from `args.find().toLowerCase() !== 'print'` to the same shape but using `find` (v88 was using `some`, v112 uses `find` — the minified shows `.find((z)=>!z.startsWith("-"))?.toLowerCase()!=="print"`).
  - `get-dnsclientcache` entry **removed** — no v112 match. `get-dnsclient` remains with its 2 safeFlags.
  - `isGhSafe`: `USER_TYPE !== 'ant'` guard **removed** — gh commands no longer restricted to ant users in v112 (the guard block is gone from the v112 minified function).
  - New function `mgq` in v112 minified (byte ~9502846 region) — lookup against a custom gh subcommand set loaded via `ugq()`/`xgq()`/`PR1()`. These are unresolved minified symbols; the function is not in the v88 source. Left as TODO stub at file bottom.
- unresolved symbols:
  - `mgq` / `ugq` / `xgq` / `PR1` — v112 new function for custom gh allowlist lookup (byte ~9502846). Not present in v88_src. Omitted from lifted file pending resolution.

### src/tools/REPLTool/constants.ts
- bytes out: 1,050
- decls reconstructed: 3
- drift: medium (jac=0.5 on isReplModeEnabled; REPL_ONLY_TOOLS decl had no v112 match — reconstructed from v88)
- v112 changes:
  - `isReplModeEnabled`: simplified — drops the `process.env.USER_TYPE === 'ant' && process.env.CLAUDE_CODE_ENTRYPOINT === 'cli'` branch. Returns false if `CLAUDE_CODE_REPL` is falsy, true if `CLAUDE_REPL_MODE` is truthy, else `false` (not the ant+cli default-on path).
  - `REPL_ONLY_TOOLS` set: no v112 match in region.json (boundary artifact). Reconstructed from v88 — content matches v88 verbatim (same tool names, same order).
- unresolved symbols: none.

### src/tools/REPLTool/primitiveTools.ts
- bytes out: 870
- decls reconstructed: 1
- drift: low (jac=0.89, cos=1 — single function body, structural change is minimal)
- v112 changes:
  - Internal lazy-init variable name changed (minified var names differ). Exported function signature and return value identical.
  - Three boundary-artifact decls have no v112 match — omitted (sourcemap slicing artifacts).
- unresolved symbols: none.

### src/tools/ReadMcpResourceTool/UI.tsx
- bytes out: 1,050
- decls reconstructed: 4 (renderToolUseMessage, userFacingName, renderToolResultMessage; plus init lazy block)
- drift: low-medium (first decl jac=0.667 due to module-init boundary; remaining 3 decls jac=cos=1)
- v112 changes: none substantive — all 3 exported functions identical. Two boundary decls with no v112 match are sourcemap artifacts.
- unresolved symbols: none.

### src/tools/ReadMcpResourceTool/prompt.ts
- bytes out: 280
- decls reconstructed: 1
- drift: medium (jac=0.667 — the single decl covers both DESCRIPTION and PROMPT vars)
- v112 changes: none — DESCRIPTION and PROMPT strings are verbatim.
- unresolved symbols: none.

### src/tools/RemoteTriggerTool/RemoteTriggerTool.ts
- bytes out: 3,200
- decls reconstructed: 2 (inputSchema/outputSchema/tool def)
- drift: low (jac=0.955, cos=1)
- v112 changes:
  - `isEnabled`: added `!S6(process.env.CLAUDE_CODE_REMOTE)` gate (i.e., `!process.env.CLAUDE_CODE_REMOTE`) at the front.
  - `body` parameter `.describe()` text changed from "JSON body for create and update" to "Required for create and update; optional for run".
  - `run` case: `data = {}` → `data = { ...body, trigger_id }` (merges optional body + trigger_id into the POST payload).
- unresolved symbols: none.

### src/tools/RemoteTriggerTool/UI.tsx
- bytes out: 480
- decls reconstructed: 3
- drift: none (all 3 decls jac=cos=1)
- v112 changes: none — both render functions are verbatim. Two boundary decls have no v112 match (sourcemap artifacts).
- unresolved symbols: none.

### src/tools/ScheduleCronTool/UI.tsx
- bytes out: 1,200
- decls reconstructed: 4 (renderCreateToolUseMessage, renderCreateResultMessage, renderDeleteResultMessage, renderListResultMessage)
- drift: none (all matched decls jac=cos=1)
- v112 changes:
  - `renderDeleteToolUseMessage` from v88 has no v112 match — **removed** in v112. Not present in the minified blob. Omitted.
  - Five boundary decls with no v112 match (section comment markers, init lazy block) are sourcemap artifacts. Omitted.
- unresolved symbols: none.

### src/tools/SendMessageTool/SendMessageTool.ts
- bytes out: 9,900
- decls reconstructed: 11
- drift: low (9 of 10 matched decls jac=cos=1; main tool decl jac=0.968)
- v112 changes:
  - `feature('UDS_INBOX')` gates entirely removed from `call()`, `checkPermissions()`, and `validateInput()`. The bridge/UDS cross-session messaging path is gone.
  - `inputSchema` `to` field description drops the UDS/bridge rows.
  - `checkPermissions`: now always returns `{ behavior: 'allow', updatedInput: input }`.
  - `validateInput`: `feature('UDS_INBOX')` blocks removed; `parseAddress()` is still used for the `bridge`/`uds` empty-target check (that guard is retained).
  - `call()` queuePendingMessage: third argument changed from `context.setAppStateForTasks ?? context.setAppState` to `context.taskRegistry`.
  - UDS/bridge `call()` branches removed entirely.
  - One boundary decl with no v112 match (export registration block artifact) omitted.
- unresolved symbols: none.

### src/tools/SendMessageTool/UI.tsx
- bytes out: 680
- decls reconstructed: 3
- drift: none (all 3 matched decls jac=cos=1)
- v112 changes: none — all functions verbatim. Two boundary decls are sourcemap artifacts.
- unresolved symbols: none.

### src/tools/SendMessageTool/prompt.ts
- bytes out: 650
- decls reconstructed: 2 (getPrompt function, DESCRIPTION const)
- drift: low (jac=1 for getPrompt; first decl is a boundary artifact with no v112 match)
- v112 changes:
  - `feature('UDS_INBOX')` conditional sections removed — `udsRow` and `udsSection` template strings are replaced by empty strings (`${""}`) in v112. The returned prompt text omits all UDS/bridge table rows and the "## Cross-session" section.
  - `getPrompt` is now a plain function without the `feature()` call-site dependency.
- unresolved symbols: none.

## Cross-file observations

- The `feature('UDS_INBOX')` flag is hardcoded false (or removed) throughout v112 — affects SendMessageTool, its prompt, and likely other peers. Any chunk that references this flag should expect it stripped.
- `isGhSafe` drops the `USER_TYPE !== 'ant'` restriction — gh commands are now allowed for all user types in v112 PowerShell readonly validation.
- The new `mgq` function in PowerShellTool/readOnlyValidation.ts (byte ~9502846) suggests v112 added a user-configurable gh subcommand allowlist, loaded via `ugq()`/`xgq()`. The symbols are unresolved pending the relevant config/settings chunk.
- `queuePendingMessage` third-argument change (`taskRegistry` vs `setAppStateForTasks`) confirms the `ToolUseContext` carries `taskRegistry` in v112 (corroborates chunk-105 findings).
- `ScheduleCronTool/UI.tsx` drops `renderDeleteToolUseMessage` — callers that referenced it (CronDeleteTool) likely switched to a default or removed the render path.

## Lifter

`lifter-116` (sonnet-4.6, subagent, team v112-lift). Wave-2.
