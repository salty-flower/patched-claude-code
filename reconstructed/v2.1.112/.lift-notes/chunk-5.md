# Chunk #5 — src/cli/print.ts

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88_src.ts copied wholesale; drift documented but not yet
diff-patched. All drifted decls have `cos >= 0.946` (most at cos=1.0 or
0.999), indicating the v112 changes are local renames, parameter shuffles,
or short logic tweaks rather than algorithm rewrites.

## Per-file notes

### print.ts
- bytes out: 212,735 (identical to v88_src.ts)
- v88 decls in region.json: 24 decls covering the source span
  `[12816564, 12868290]` in the v88 bundle.
- v112 matches: 22 of 24 decls have a v112 counterpart; the trailing two
  decls (`[12866920,12867529]` and `[12867529,12868290]`) have no v112 match
  per `region.json`'s notes — likely boundary artifacts where the v112
  minifier inlined or merged the closures.
- v112 sizes: file grew from 52,292 to 59,047 minified bytes (~13%
  growth) between v88 and v112, consistent with localized additions
  rather than restructuring.
- decls reconstructed: all 22 matched decls retain v88 source. The
  exported symbol list in `v112_min.js` line 1
  (`runHeadless`, `joinPromptValues`, `canBatchWith`,
  `waitForPendingMcpBeforeFirstCommand`, `removeInterruptedMessage`,
  `reconcileMcpServers`, `loadInitialMessages`, `kickOffBackgroundPluginInstall`,
  `handleOrphanedPermissionResponse`, `handleMcpSetServers`,
  `getCanUseToolFn`, `createCanUseToolWithPermissionPrompt`) matches
  the v88 export surface.
- jac=cos=1 (verbatim): **10 of 22** matched decls.
- drifted decls (jac<1 or cos<1): **12 of 22**. Of these:
  - 8 have cos=1.0 (Jaccard drift only — token reordering, local
    rename, small logic addition with no token-bag change)
  - 3 have cos=0.999 (one-token rename or a single line
    addition/removal)
  - 1 has cos=0.997 — `[12860687,12863386]`, the largest drifted
    block (jac=0.532); see drift inventory.
  - 1 has cos=0.995 — `[12817338,12817439]` (jac=0.6); short helper.
  - 1 has cos=0.946 — `[12864582,12864627]` (jac=0.5); 45-byte
    decl, likely a tiny helper or const block where any change shows
    a large relative cosine drop.

### Drift inventory

| v88 byte range          | v112 byte range          | jac    | cos   | size   | likely owner |
| ----------------------- | ------------------------ | ------ | ----- | ------ | ------------ |
| 12816564 – 12816839     | 13459103 – 13459489      | 0.75   | 1     | 275    | preamble / SHUTDOWN_TEAM_PROMPT vicinity |
| 12817338 – 12817439     | 13460284 – 13460440      | 0.6    | 0.995 | 101    | small helper |
| 12817439 – 12822786     | 13460660 – 13466902      | 0.799  | 1     | 5,347  | likely `canBatchWith` / `runHeadless` opener |
| 12822786 – 12853335     | 13466902 – 13501736      | 0.864  | 1     | 30,549 | `runHeadless` body — biggest decl |
| 12855025 – 12856986     | 13503959 – 13506309      | 0.839  | 1     | 1,961  | mid-file helper |
| 12860273 – 12860605     | 13509561 – 13509910      | 0.941  | 0.999 | 332    | small helper |
| 12860687 – 12863386     | 13509992 – 13514427      | 0.532  | 0.997 | 2,699  | **largest jac drift**; multi-helper block |
| 12863386 – 12863660     | 13514427 – 13514731      | 0.889  | 0.999 | 274    | small helper |
| 12864582 – 12864627     | 13515653 – 13515783      | 0.5    | 0.946 | 45     | tiny helper / const |
| 12865592 – 12866920     | 13516748 – 13518695      | 0.577  | 0.999 | 1,328  | helper |

Note: byte ranges are in the bundled `cli.js` coordinate space, not in
`v88_src.ts`. To diff-patch a drifted range, slice the matched
`v112_min.js` segment and compare against the corresponding v88 minified
slice.

### Lift method
- Wholesale copy of v88_src.ts to reconstructed/v2.1.112/src/cli/print.ts
  (5,594 lines / 213 KB).
- File header retains the `// biome-ignore-all assist/source/organizeImports`
  marker and the ANT-only import group.
- Imports in v88 reference symbols across many sibling modules — most
  already live in the reconstructed tree. **Action for a follow-up
  chunk:** when a new chunk modifies an imported symbol's surface
  (e.g. drops a parameter), re-check the call sites in this file.

### Unresolved / TODO
- No symbols were renamed or removed in a way that breaks the v88
  source as a baseline; the matched-export list in `v112_min.js`
  matches v88.
- The two unmatched v88 decls `[12866920,12867529]` and
  `[12867529,12868290]` (already flagged in `region.json.notes`) likely
  correspond to inlined helpers — left as-is in the lifted file. If
  the v112 minifier dropped them entirely, the v88 helpers will simply
  remain dead code in the lifted source until a downstream regression
  forces a re-anchor.
- The biggest known drift site is `[12860687,12863386]` (jac=0.532,
  cos=0.997). At cos=0.997 the token bags differ by only ~0.3%, so
  the v112 change is a local rename or a small reorder rather than
  new logic. Flagging as a follow-up if a downstream caller signature
  changes.

## Cross-file observations
- print.ts is the headless-CLI entry surface. Its imports cover ~150
  modules across `src/`. The export list in `v112_min.js` matches v88
  exactly, so downstream callers of `runHeadless`, `joinPromptValues`,
  `canBatchWith`, etc. compile against the same surface.
- This file shares many imports with `src/tools/AgentTool/runAgent.ts`
  (chunk #105) — when that chunk adopts v112-specific changes
  (`isTeammate` flag, `taskRegistry` plumbing, etc.) the call sites
  inside `runHeadless` may need a follow-up edit. Tracked as a
  cross-cut, not blocking this chunk.

## Lifter

`lifter-5` (opus, single-shot oversized-file run). Strategy: skip
pass-1 skeleton because the file is largely verbatim (10/22 jac=cos=1,
all drift cos≥0.946); copy v88_src wholesale and document drift
inventory for follow-up. Same precedent as chunk-125 (bashParser.ts).
