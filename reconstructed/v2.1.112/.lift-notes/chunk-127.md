# Chunk #127 — claudeInChrome + claudemd/cleanup/cli*

**Files lifted:** 12
**Confidence:** medium-high

## Per-file notes

### claudeCodeHints.ts
- bytes out: ~5,500
- decls reconstructed: ~7
- drift: low — `extractClaudeCodeHints`, `parseAttrs`, `firstCommandToken` all jac=1,cos=1.
- v112 changes:
  - `setPendingHint`, `clearPendingHint`, `markShownThisSession`, `hasShownHintThisSession`,
    `_resetClaudeCodeHintStore`, and `_test` object all have no v112 match in region.json
    [8535389..8535597] — these store-mutation helpers were dropped in v112.
  - The lazy init block retains `UZ4` (signal), `QZ4` (emit/notify), `nZ4` (subscribe).
  - `subscribeToPendingHint` and `getPendingHintSnapshot` remain (cos=0.998).
  - `pendingHint` slot is still referenced by `getPendingHintSnapshot`; lifted with TODO stub.
- unresolved symbols:
  - `_pendingHint_V112` — the store slot; mutation helpers' removal means it's never set
    from within this module in v112; probably set via an external caller or fully private now.

### claudeInChrome/chromeNativeHost.ts
- bytes out: ~13,000
- decls reconstructed: ~8
- drift: low — all decls jac≥0.986, cos=1.
- v112 changes (jac=0.986 on ChromeNativeHost.start):
  - `start()` removes the `stat(socketDir)` check before `unlink(socketDir)`. v112 calls
    `unlink(socketDir).catch(()=>{})` unconditionally (matching `yJ7(q).catch(()=>{})`).
  - One v88 decl [11518036,11518079] has no v112 match (module-level const init).
- unresolved symbols: none.

### claudeInChrome/mcpServer.ts
- bytes out: ~8,000
- decls reconstructed: ~7
- drift: medium — jac 0.857 and 0.974 on two key decls.
- v112 changes:
  - `getChromeBridgeUrl()` no longer has the `bridgeEnabled` guard; always returns a URL string
    (return type `string`, not `string | undefined`). The `ant` / feature-flag check is gone.
  - `createChromeContext()`: `bridgeConfig` is always spread unconditionally (not gated on
    `chromeBridgeUrl` truthy). The ant-only `callAnthropicMessages` block is removed — the
    minified shows `...!1` (false) spread, confirming dead code elision.
  - One v88 decl [11509240,11509284] has no v112 match (module-level init).
- unresolved symbols: none.

### claudeInChrome/prompt.ts
- bytes out: ~4,200
- decls reconstructed: 4
- drift: mixed — only one decl jac=1,cos=1 matched v112; two others have no match.
- v112 changes:
  - `BASE_CHROME_PROMPT` (AC4), `CHROME_TOOL_SEARCH_INSTRUCTIONS` (OC4), and
    `CLAUDE_IN_CHROME_SKILL_HINT` (wC4) are present in v112.
  - `CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER` absent from v112_min — dropped.
  - `getChromeSystemPrompt()` retained (jac=1,cos=1).
- unresolved symbols: none.

### claudeInChrome/setup.ts
- bytes out: ~9,500
- decls reconstructed: ~11
- drift: low-medium — most decls jac=1,cos=1; one jac=0.875.
- v112 changes (jac=0.875 on `setupClaudeInChrome`):
  - `shouldAutoEnableClaudeInChrome`: removed `process.env.USER_TYPE === 'ant'` OR-branch;
    now purely feature-flag driven (`tengu_chrome_auto_enable`).
  - `installChromeNativeHostManifest`: ant-only extra extension IDs
    (DEV_EXTENSION_ID `dihbgbndebgnbjfmelmegjepbnkhjhgni/`, ANT_EXTENSION_ID `dngcpimnedloihjnnfngkgjoidhnaolf/`)
    removed — the minified spread is `...[])` (empty array).
  - On manifest update, the reconnect path now calls `openInChrome(aiY).catch(j6)` —
    v112 added an error handler for the promise.
  - Two v88 decls have no v112 match: [10888644,10888666] (init), [10892100,10892287]
    (likely `isChromeExtensionInstalled_CACHED_MAY_BE_STALE` or an intermediate helper).
- unresolved symbols: none.

### claudemd.ts
- bytes out: ~38,000
- decls reconstructed: ~29
- drift: low-medium — most decls jac≥0.889; two at jac=0.75–0.765 (getMemoryFiles, getClaudeMds).
- v112 changes:
  - `parseMemoryFileContent`: `TeamMem` truncation branch removed — only `AutoMem` truncates.
  - `getMemoryFiles` (jac=0.962): TeamMem entrypoint block removed entirely; no
    `feature('TEAMMEM')` gate. Also adds `CLAUDE.local.md` loading inside the `--add-dir`
    loop (when `localSettings` enabled).
  - `getLargeMemoryFiles` (jac=0.765): now filters to instruction-type files first
    (`isInstructionsMemoryType(f.type) && f.content.length > MAX`).
  - `filterInjectedMemoryFiles` (jac=0.923): only filters `AutoMem` (not `TeamMem`).
  - `getClaudeMds` (jac=0.765): TeamMem description and `<team-memory-content>` wrapping
    removed; TeamMem falls through to default description.
  - Two v88 decls have no v112 match: [5014517,5014551] (bun:bundle feature import init),
    [5018686,5018720] (teamMemPaths require() block). This confirms `feature('TEAMMEM')`
    was fully excised from v112.
  - `extractIncludePathsFromTokens`: uses `path.replaceAll('\\ ', ' ')` instead of
    `.replace(/\\ /g, ' ')` (confirmed by v112_min `replaceAll` usage).
- unresolved symbols: none critical; `bun:bundle` `feature()` import removed from v112.

### cleanup.ts
- bytes out: ~14,500
- decls reconstructed: ~16
- drift: medium — several decls at jac 0.667–0.727.
- v112 changes:
  - `getCutoffDate()` now returns `Date | null` when `cleanupPeriodDays === 0`;
    all callers null-guard before using it.
  - `cleanupOldSessionFiles` (jac=0.727): adds sorting (directories after files),
    `.jsonl`-adjacent session-dir removal, and `frame/` subdirectory cleanup under
    session dirs.
  - `cleanupOldMessageFilesInBackground` (jac=0.667): new guard at top — skips when
    `userSettings` disabled AND no enabled source provides `cleanupPeriodDays`.
    Also `cleanupOldPastes` and `cleanupStaleAgentWorktrees` receive the nullable cutoff
    with a null check wrapping them.
  - Three v88 decls have no v112 match: [12105801,12105853] (intermediate helper),
    [12108454,12108465], [12108465,12108555] (likely old npm-cache or version cleanup).
  - `deferredCleanupChecks` (minified `dq5`) is an unresolved async function called at
    the start of `cleanupOldMessageFilesInBackground`; lifted as a stub with TODO.
- unresolved symbols:
  - `dq5` at byte ~12452631 — pre-cleanup async check; likely settings validation or lock.

### cleanupRegistry.ts
- bytes out: ~600
- decls reconstructed: 2
- drift: verbatim (jac=1, cos=1 for both matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: Three v88 decls have no v112 match [46368..46474] — these are the `BufferedWriter`
  factory function that was co-located in v88's generated output. The `cleanupRegistry.ts`
  source itself is unchanged; the co-location artifact is a sourcemap boundary effect.

### cliArgs.ts
- bytes out: ~1,200
- decls reconstructed: 1
- drift: low — `eagerParseCliFlag` is jac=1, cos=1.
- v112 changes:
  - `extractArgsAfterDoubleDash` has no v112 match (v88 decl [12773240,12773273] init +
    function body gone). Function removed in v112.
- unresolved symbols: none.

### cliHighlight.ts
- bytes out: ~1,800
- decls reconstructed: 1 (with stubs)
- drift: high — 4 of 5 v88 decls have no v112 match.
- v112 changes:
  - The shared async cli-highlight promise pattern (`cliHighlightPromise`,
    `loadCliHighlight`, `getCliHighlightPromise`) entirely removed.
  - `getLanguageName` signature changed from `(file_path: string): Promise<string>` to a
    synchronous token-object resolver. The v112 minified `Aaz(q)` function takes a token
    with `.type` and resolves via two unresolved lookups (`Bp8`, `mp8`).
  - Only decl [6293073,6293183] has a v112 match, at cos=0.975 — different enough to
    confirm the signature/semantics changed.
- unresolved symbols:
  - `Bp8` at byte ~7938085 — first language lookup (likely highlight.js registry lookup by token)
  - `v_K` at byte ~7938085 — name resolver for highlight.js language descriptor object
  - `mp8` at byte ~7938085 — second lookup (alias list or alternate language map)
  - All three are in the same function body; lifted body is a stub returning `token.type ?? 'unknown'`.

### collapseBackgroundBashNotifications.ts
- bytes out: ~2,200
- decls reconstructed: 2
- drift: verbatim (jac=1, cos=1 for both matched decls).
- v112 changes: none — both functions identical to v88.
- unresolved symbols: none.
- note: Two v88 decls have no v112 match [10471452,10471516] and [10472093,10472131] —
  these are boundary artifacts from adjacent file regions; not part of this module's content.

### collapseHookSummaries.ts
- bytes out: ~1,600
- decls reconstructed: 2
- drift: verbatim (jac=1, cos=1 for both matched decls).
- v112 changes: none — both functions identical to v88.
- unresolved symbols: none.
- note: One v88 decl has no v112 match [10472093,10472131] — boundary artifact from
  adjacent file (collapseBackgroundBashNotifications); not part of this module's content.

## Cross-file observations

- **TeamMem (TEAMMEM feature) removed across v112**: `claudemd.ts` shows complete
  excision of the `feature('TEAMMEM')` gate and `teamMemPaths` require() call. This is the
  most significant structural change in this chunk.
- **Chrome bridge always-on**: `mcpServer.ts` `getChromeBridgeUrl` no longer has a
  `bridgeEnabled` guard — bridge is always active in v112. The ant-only `callAnthropicMessages`
  injection was removed, simplifying the chrome context.
- **Cleanup null-safety**: `cleanup.ts` propagates nullable cutoff date from
  `getCutoffDate()` throughout; `cleanupPeriodDays === 0` is now a valid "disable cleanup"
  sentinel.
- **cliHighlight refactor**: The async shared-promise architecture was replaced with a
  synchronous token-based lookup in v112. Callers that awaited `getCliHighlightPromise()`
  must be updated. The unresolved `Bp8`/`mp8` lookups need resolution from adjacent chunks.

## Lifter

`lifter-127` (sonnet-4-6, general-purpose, team v112-lift). Chunk #127.
