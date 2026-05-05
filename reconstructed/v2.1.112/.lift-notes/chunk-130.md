# Chunk #130 — src/utils/* (cronTasksLock through embeddedTools)

**Files lifted:** 23
**Confidence:** medium-high

## Per-file notes

### cronTasksLock.ts
- bytes out: ~6,300
- decls reconstructed: ~5
- drift: low — most decls jac=1,cos=1; one at jac=0.909.
- v112 changes:
  - `tryAcquireSchedulerLock` (jac=0.909): minor byte drift, logic unchanged.
  - Three v88 decls have no v112 match [12292972..12293012], [12293426..12293482], [12294332..12294352] — module-level inits/boundary artifacts.
- unresolved symbols: none.

### crossProjectResume.ts
- bytes out: ~2,100
- decls reconstructed: 1
- drift: low — `checkCrossProjectResume` jac=1,cos=0.998.
- v112 changes: none significant — ant-only worktree gate still present.
- unresolved symbols: none.
- note: Two boundary decls [10587069..10587117] and [10587678..10587710] have no v112 match.

### cwd.ts
- bytes out: ~1,500
- decls reconstructed: 3
- drift: medium — only `pwd()` has a v112 match (jac=1,cos=0.98); `runWithCwdOverride` and `getCwd` have no v112 match in this region.
- v112 changes:
  - AsyncLocalStorage now stores a `{ cwd: string }` context object instead of a bare string. The minified body is `$J8.getStore()?.cwd ?? tu()` confirming the `.cwd` projection.
  - `runWithCwdOverride` and `getCwd` likely moved or inlined elsewhere.
- unresolved symbols: none.

### debug.ts
- bytes out: ~8,000
- decls reconstructed: ~10
- drift: low — all matched decls cos≥0.992.
- v112 changes: none significant.
- unresolved symbols: none.
- note: Three boundary decls [143198..143263], [143419..143441], [143441..143467] have no v112 match.

### debugFilter.ts
- bytes out: ~5,100
- decls reconstructed: 4
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none — file is identical to v88.
- unresolved symbols: none.
- note: Boundary decls [46446..46474], [47208..47216] have no v112 match.

### deepLink/banner.ts
- bytes out: ~4,700
- decls reconstructed: 3
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decls [12763449..12763538], [12764444..12764519], [12764626..12764653], [12764653..12764685] have no v112 match.

### deepLink/parseDeepLink.ts
- bytes out: ~5,700
- decls reconstructed: 3
- drift: low — `parseDeepLink` jac=0.947,cos=1; `buildDeepLink` jac=1,cos=1.
- v112 changes: minor byte drift in `parseDeepLink` body, semantics unchanged.
- unresolved symbols: none.
- note: Boundary decl [12108465..12108555] has no v112 match.

### deepLink/protocolHandler.ts
- bytes out: ~4,900
- decls reconstructed: 4
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decl [12785897..12785954] has no v112 match.

### deepLink/terminalLauncher.ts
- bytes out: ~17,800
- decls reconstructed: ~10
- drift: low — most decls jac=1,cos=1; four at cos=0.948–0.978.
- v112 changes:
  - `launchInTerminal` and platform launchers unchanged.
  - `spawnDetached` unchanged.
  - End-of-region decls [12783328..12783413], [12783682..12783694] are boundary artifacts.
- unresolved symbols: none.

### deepLink/terminalPreference.ts
- bytes out: ~1,900
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for both matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decls [12364526..12364590], [12364848..12364856] have no v112 match.

### desktopDeepLink.ts
- bytes out: ~7,100
- decls reconstructed: ~6
- drift: low — most decls jac=1,cos=1; one at cos=0.995.
- v112 changes:
  - `isDevMode` simplified — NODE_ENV check removed, only build-dir heuristic remains.
  - `getDesktopVersion` on Windows uses `.at(-1)` instead of `versions[versions.length - 1]!`.
  - Last three v88 decls [9934793..9935192] have no v112 match — boundary artifacts.
- unresolved symbols: none.

### diagLogs.ts
- bytes out: ~2,800
- decls reconstructed: 3
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decls [907684..907721], [908278..908304] have no v112 match.

### diff.ts
- bytes out: ~4,900
- decls reconstructed: ~7
- drift: low — one decl at jac=0.875,cos=0.999 (minor byte drift).
- v112 changes: none significant.
- unresolved symbols: none.
- note: Boundary decl [8696166..8696208] has no v112 match.

### directMemberMessage.ts
- bytes out: ~1,700
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for both matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decl [11978086..11978573] has no v112 match.

### displayTags.ts
- bytes out: ~2,300
- decls reconstructed: 2
- drift: verbatim (jac=1,cos=1 for both matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decls [900403..900415], [900415..900554] have no v112 match.

### doctorContextWarnings.ts
- bytes out: ~8,100
- decls reconstructed: ~5
- drift: medium-high — `checkUnreachableRules` jac=0.75,cos=0.999; large null region.
- v112 changes:
  - `checkMcpTools` completely removed from v112 — no v112 match for the v88 decl [10063330..10064418].
  - `checkContextWarnings` returns only `{claudeMdWarning, agentWarning, unreachableRulesWarning}` — no `mcpWarning` field.
  - Signature of `checkContextWarnings` unchanged (still takes tools/agentInfo/permissionContext) but `mcpWarning` is always null in the return type.
  - Two boundary decls [10062243..10062265], [10065013..10065027] have no v112 match.
- unresolved symbols: none.

### doctorDiagnostic.ts
- bytes out: ~21,100
- decls reconstructed: ~10
- drift: low — most decls jac=1,cos=1; two at jac=0.979.
- v112 changes:
  - `getDoctorDiagnostic` now accepts `{probeKeychain?: boolean} = {}` options. When `probeKeychain` is true, an additional keychain probe runs and its warning (if any) is appended.
  - `probeKeychain` helper is unresolved — lifted as a stub returning undefined.
  - MACRO object inlined as literal in v112_min (version "2.1.112", build time 2026-04-16).
  - Boundary decl [7882002..7882107] has no v112 match.
- unresolved symbols:
  - `probeKeychain` at byte ~7878974 — keychain diagnostic helper, likely macOS Keychain accessibility check.

### dxt/helpers.ts
- bytes out: ~2,600
- decls reconstructed: 4
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decl [4875744..4875809] has no v112 match.

### dxt/zip.ts
- bytes out: ~7,700
- decls reconstructed: ~6
- drift: verbatim (jac=1,cos=1 for all matched decls).
- v112 changes: none.
- unresolved symbols: none.
- note: Boundary decls [4876324..4876351], [4876404..4876479], [4878287..4878295] have no v112 match.

### earlyInput.ts
- bytes out: ~6,100
- decls reconstructed: ~6
- drift: low-medium — first decl `startCapturingEarlyInput` jac=0.857,cos=1.
- v112 changes:
  - `processChunk` escape-sequence parser significantly more robust: handles CSI (`ESC [`), OSC/DCS/SOS/PM/APC (`ESC ]/P/X/^/_`), SS3 (`ESC O`), and ST (`ESC \`) terminators. v88 only handled generic ESC-terminated sequences.
  - Several boundary decls [3777029..3777081], [3777122..3777143], [3777143..3777169], [3777169..3777195], [3777195..3777217] have no v112 match.
- unresolved symbols: none.

### editor.ts
- bytes out: ~6,600
- decls reconstructed: ~4
- drift: low — one decl at jac=0.938,cos=0.991.
- v112 changes: none significant.
- unresolved symbols: none.
- note: Boundary decls [10082729..10082776], [10082867..10082898], [10083853..10083872] have no v112 match.

### effort.ts
- bytes out: ~12,500
- decls reconstructed: ~14
- drift: high — multiple decls with jac 0.5–0.75 and several null matches.
- v112 changes:
  - `EFFORT_LEVELS` array changed: `'xhigh'` added between `'high'` and `'max'`; `'max'` removed from the public array (still exists as a type/enum value).
  - `modelSupportsEffort`: adds `opus-4-7` to the allowlist.
  - `modelSupportsMaxEffort`: complete rewrite — now delegates to `isMaxSubscriber()` (`q5`) and `getDefaultModel()` (`hv`/`K5`) instead of direct model-name check. Ant-only path removed from visible minified.
  - `toPersistableEffort`: `'xhigh'` is now persistable (like low/medium/high).
  - `resolvePickerEffortPersistence` removed entirely.
  - `convertEffortValueToLevel`: numeric effort branch completely removed. Numeric values now fall through to `'high'`.
  - `getEffortLevelDescription`: `'xhigh'` added; `'max'` description no longer mentions Opus 4.6 exclusivity.
  - `getEffortValueDescription`: removed from v112_min — numeric effort is dead. Kept as compatibility stub.
  - `getDefaultEffortForModel`: ant-specific `resolveAntModel` / `getAntModelOverrideConfig` logic removed from this module. Ants now fall through to the public path.
  - Several boundary decls [4414878..4415008], [4415941..4416105], [4416105..4416116], [4416116..4416513] have no v112 match.
- unresolved symbols:
  - `q5` at byte ~4414037 — isMaxSubscriber() or similar subscriber check.
  - `hv` at byte ~4414037 — getDefaultModel() or similar model resolver.
  - `K5` at byte ~4414037 — model name extractor from default model.
  - `wy6` at byte ~4415328 — resolveAppliedEffort body (renamed in v112).

### embeddedTools.ts
- bytes out: ~1,000
- decls reconstructed: 2
- drift: low — `hasEmbeddedSearchTools` jac=1,cos=1; `embeddedSearchToolsBinaryPath` jac=1,cos=0.915.
- v112 changes: none significant.
- unresolved symbols: none.
- note: Boundary decl [3729732..3729813] has no v112 match.

## Cross-file observations

- **Effort level 'xhigh' added in v112**: `effort.ts` shows a new effort level between high and max, with Opus 4.7 exclusivity. Numeric effort support was completely removed.
- **MCP tools warning removed from doctor**: `doctorContextWarnings.ts` no longer checks MCP tool token counts — the `checkMcpTools` function and `mcpWarning` return field are gone.
- **AsyncLocalStorage context object**: `cwd.ts` now stores `{ cwd: string }` instead of a bare string, suggesting a richer per-async context shared with other overrides.
- **Keychain probe added to doctor**: `doctorDiagnostic.ts` `getDoctorDiagnostic` accepts an optional `probeKeychain` flag for managed-device diagnostics.
- **Early input escape parser hardened**: `earlyInput.ts` `processChunk` now handles OSC, DCS, SOS, PM, APC, and SS3 sequences correctly — a real robustness improvement.

## Lifter

`lifter-130` (kimi-for-coding, general-purpose, team v112-lift). Chunk #130.
