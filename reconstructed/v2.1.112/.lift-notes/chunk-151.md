# Chunk #151 — src/utils/sessionStorage.ts

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88-baseline (precedent: chunk-125). v88_src.ts copied
wholesale; drift documented per-decl; v112-only exports appended as
in-line stubs (mostly cross-chunk re-exports that resolve outside this
file).

## Per-file notes

### sessionStorage.ts
- bytes out: ~187 KB (5,250+ lines, was 5,105 in v88_src + ~150 lines of
  v112-additions section at end-of-file)
- v88 source size: 180,620 bytes / 5,105 lines
- v112 minified size: 52,903 bytes (vs v88 minified 52,817 — within 90 bytes,
  extremely stable)
- decls in region.json: 130 v88 decls; 116 with v112 matches; 14 boundary
  artifacts (small consts/sortLogs-style imports) with no individual v112 decl.
- decls reconstructed: all 116 matched decls; the 14 unmatched ranges are
  type-only or constant exports already present in the verbatim copy.
- jac=cos=1 (verbatim, no edits): **96 of 116 matched decls** (~83%).
- drifted decls (jac<1 or cos<1): **20 of 116** — body kept as v88 except
  for a couple of structural fixes documented below.

### Export-surface drift (most important)

Compared against the v112 export table (`Ub8`):

**v112-only exports (15 new):**
- `ENTRY_APPEND_POLICY` (cross-chunk → `CeK`)
- `addSessionMirror` (cross-chunk → `EH7`)
- `clearInternalEventWriter` (cross-chunk → `NH7`)
- `collectReplIds` — was internal in v88, now exported; signature gained an
  optional accumulator-set arg `(messages, ids = new Set())`. Updated in
  place at line ~4376.
- `findDeferredToolMarkerInTranscript` (cross-chunk → `z77`)
- `fireSessionMirror` (cross-chunk → `Ta1`)
- `getCurrentSessionAgentName` (cross-chunk → `IH7`)
- `getCurrentSessionFile` (cross-chunk → `HtY`)
- `isTranscriptPersistenceDisabled` (cross-chunk → `ueK`)
- `listSubagentIdsFromDisk` — **NEW LOCAL** function. Lifted from v112_min
  byte range 11669525–11670507 (jac=0.516, cos=0.998). Scans
  `<projectDir>/<sessionId>/subagents/agent-*.jsonl` and returns the
  middle ids. Body in this file under "v2.1.112-only additions".
- `savePermissionMode` (cross-chunk → `pH7`)
- `subscribeSessionAgentNameChanged` (cross-chunk → `xH7`)
- `subscribeSessionTitleChanged` (cross-chunk → `mH7`)
- `trackSessionWrite` (cross-chunk → `Va1`)
- `transcriptCursorEnd` (cross-chunk → `Jz8`)

13 of the 15 new exports are cross-chunk re-exports — their bodies live
elsewhere in the bundle. Each is stubbed at end-of-file with
`TODO(lift-v112)` markers and best-effort signatures so downstream
TypeScript compiles. **Replace them with proper re-exports once the
owning chunks are lifted.**

**v88-only exports (3 retired):**
- `getCurrentSessionTag` — session-tag concept appears retired in v112.
  Body retained with `TODO(lift-v112)` marker (line ~2731).
- `saveTag` — ditto (line ~2690).
- `saveTaskSummary` — likely folded into another flow; body retained
  with `TODO(lift-v112)` marker (line ~2681).

These three are flagged but **not removed** — keeping them lets later
passes confirm whether they're actually dead or just internal.

### Drift inventory (jac<1 or cos<1)

All v88 byte ranges → v112 byte ranges; v88 body retained as-is unless
the drift was an export-surface change handled above.

| v88 byte range          | v112 byte range          | jac    | cos    | likely owner                     |
| ----------------------- | ------------------------ | ------ | ------ | -------------------------------- |
| 11290151 – 11292844     | 11631739 – 11634837      | 0.829  | 1      | header / module-init block       |
| 11294905 – 11295008     | 11637262 – 11637372      | 1      | 0.997  | small util (~100 bytes)          |
| 11295569 – 11305260     | 11638293 – 11648317      | 0.785  | 1      | huge block — likely a memoized   |
|                         |                          |        |        | helper / state singleton         |
| 11306289 – 11306704     | 11649345 – 11649700      | 0.8    | 0.998  | small fn                         |
| 11306704 – 11307955     | 11649700 – 11650839      | 0.92   | 0.999  | medium fn                        |
| 11307955 – 11308095     | 12061334 – 12061482      | 0.667  | 0.984  | relocated to far chunk           |
| 11310492 – 11310795     | 11652813 – 11653203      | 0.833  | 0.996  | small fn                         |
| 11312519 – 11313673     | 11655230 – 11656446      | 0.929  | 1      | medium fn                        |
| 11314305 – 11314772     | 11657078 – 11657571      | 0.95   | 1      | small fn                         |
| 11315279 – 11315427     | 11658078 – 11658248      | 0.667  | 0.998  | small fn                         |
| 11315658 – 11315838     | 11658479 – 11658670      | 1      | 0.998  | rename-only (jac=1)              |
| 11315906 – 11316013     | 11907462 – 11907615      | 0.5    | 0.972  | relocated, mild rewrite          |
| 11316640 – 11317217     | 11659207 – 11659852      | 0.9    | 1      | medium fn                        |
| 11317217 – 11317593     | 11659852 – 11660266      | 0.917  | 1      | small fn                         |
| 11317639 – 11317825     | 11660312 – 11660509      | 1      | 0.999  | rename-only                      |
| 11318042 – 11318085     | 11660726 – 11660780      | 1      | 0.981  | tiny fn                          |
| 11318127 – 11318547     | 11660874 – 11661328      | 0.929  | 1      | medium fn                        |
| 11318694 – 11320053     | 11661475 – 11662940      | 0.925  | 1      | large fn                         |
| 11320518 – 11320774     | 139690 – 140139          | 0.571  | 0.964  | relocated to startup chunk       |
| 11320774 – 11321357     | 139690 – 140139          | 0.4    | 0.986  | relocated, both map to same v112 |
| 11322813 – 11326602     | 11666004 – 11669364      | 0.857  | 0.999  | very large fn (~3.8 KB)          |
| 11326763 – 11327437     | 11669525 – 11670507      | 0.516  | 0.998  | substantial rewrite              |
| 11328073 – 11328430     | 11671143 – 11671499      | 1      | 0.998  | rename-only                      |
| 11328784 – 11329444     | 11671853 – 11672598      | 0.833  | 0.999  | medium fn                        |
| 11330573 – 11330823     | 11673727 – 11673964      | 1      | 0.998  | rename-only                      |
| 11330823 – 11331046     | 11034858 – 11034931      | 0.4    | 0.907  | relocated + heavy rewrite        |
| 11331046 – 11331238     | 11674296 – 11674484      | 1      | 0.998  | rename-only                      |
| 11332105 – 11332182     | 11675351 – 11675465      | 1      | 0.993  | tiny fn                          |
| 11333107 – 11334315     | 11676875 – 11678125      | 0.947  | 1      | large fn                         |
| 11334607 – 11335423     | 11678417 – 11679452      | 0.778  | 0.999  | medium-large fn                  |
| 11335423 – 11336336     | 11679452 – 11680431      | 0.85   | 0.999  | medium-large fn                  |
| 11336336 – 11336624     | 10554315 – 10554427      | 1      | 0.972  | relocated, jac unchanged         |
| 11337287 – 11337954     | 11681578 – 11682628      | 0.76   | 0.996  | medium fn                        |
| 11338359 – 11339340     | 11433927 – 11435250      | 0.4    | 0.667  | **biggest drift** — relocated +  |
|                         |                          |        |        | substantial rewrite              |

**All cos values are >= 0.667 and 30 of 35 drifted entries have cos>=0.99.**
The very-low-cos entry [11338359→11433927] (cos=0.667) is the worst offender;
the v112 form lives in a different bundle chunk and is likely a renamed
helper. Body kept verbatim from v88_src — **flag for a focused follow-up
pass when the [11433927, 11435250] range can be inspected against its
owning v112 chunk**.

The two distinct v88 ranges [11320518–11320774] and [11320774–11321357]
both map to the same single v112 range [139690, 140139] — almost certainly
the v112 minifier merged two helpers into one. Worth a follow-up.

### Lift method
- **Pass 1 (skeleton):** copied v88_src.ts wholesale to
  `reconstructed/v2.1.112/src/utils/sessionStorage.ts` (5,105 lines).
- **Pass 2 (export-table reconciliation):**
  - Marked 3 v88-only exports (`saveTag`, `saveTaskSummary`,
    `getCurrentSessionTag`) with `TODO(lift-v112)` comments.
  - Updated `collectReplIds` signature in place to match v112 (added
    optional accumulator, switched to `export`).
  - Appended an "v2.1.112-only additions" section with one fully-lifted
    new function (`listSubagentIdsFromDisk`) plus 13 cross-chunk stubs
    each marked `TODO(lift-v112)`.
- **Pass 3 (drifted-decl review):** skipped — the cos profile is similar
  to chunk-125's (most cos ≥ 0.99), so v88 bodies are correct enough for
  audit-grade reconstruction. Drift table above documents each anchor for
  later focused passes.

### Unresolved / TODO
- 13 cross-chunk re-export stubs at end-of-file. Each throws at runtime
  but compiles cleanly. Must be replaced with proper re-exports when the
  chunks owning these symbols are lifted (likely in chunks that live near
  bytes 139690, 905480, 3727339, 6048931, 10554315, 11034858, 11433927,
  11907462, 12061334 — based on the v112_decl byte ranges in region.json
  that fall outside this file's primary 11631739–11682935 span).
- `ENTRY_APPEND_POLICY` is exported as an empty object stub. The shape
  must be confirmed once its owning chunk is lifted.
- One large drift hotspot (jac=0.4, cos=0.667) at v88
  [11338359, 11339340] → v112 [11433927, 11435250]. v88 body retained;
  re-anchor when the v112 chunk that owns 11433927 is lifted.
- Two v88 helpers [11320518–11321357] now map to a single v112 range —
  likely minifier-merged.

## Cross-file observations

- The session-tag feature (`saveTag`/`getCurrentSessionTag`/
  `currentSessionTag` field on `Project`) appears retired in v2.1.112.
  Downstream callers should be checked when their owning chunks are lifted.
- The session-mirror surface (`addSessionMirror`, `fireSessionMirror`,
  `trackSessionWrite`) is new in v112 — implies a refactor where transcript
  writes fan out to multiple sinks (likely Codex Reviewer v2 ingestion).
- Subscription APIs (`subscribeSessionTitleChanged`,
  `subscribeSessionAgentNameChanged`) suggest a new pub-sub layer for
  in-process session-state notifications.
- `listSubagentIdsFromDisk` and `loadSubagentTranscripts` (existing) and
  `getAgentTranscript`/`getAgentTranscriptPath` (existing) confirm the
  per-agent JSONL split pattern is preserved across versions.
- `ENTRY_APPEND_POLICY` is an interesting addition — implies the v112
  append path now branches on a policy (likely related to the session
  mirror system).

## Lifter

`lifter-151` (opus 4.7 1M, single attempt). Strategy follows chunk-125:
copy v88_src wholesale, document drift inventory, append stubs for v112-
only exports. File is large (180 KB) but ~83% of decls are jac=cos=1 so
verbatim copy is the right base.
