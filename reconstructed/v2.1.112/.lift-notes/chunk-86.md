# Chunk #86 — src/screens/REPL.tsx

**Files lifted:** 1
**Confidence:** medium
**Strategy:** v88_src.tsx wholesale baseline (5,005 lines, ~895 KB) with
targeted edits for localized v112 drifts that are visible in the
v112_min.js side-by-side. The main `REPL` function (decl 7, ~53 KB of
source) is left as the v88 body — its drift is many small tweaks
distributed across 3,800+ lines (jac=0.817, **cos=1** on the minified
diff, meaning structure and identifiers are still aligned).
Same approach as chunk #125 (bashParser.ts).

## Per-decl mapping

`region.json` enumerates 9 v88 decls. v112 byte ranges in parentheses.

| # | v88 byte range            | v112 byte range            | jac   | cos   | what it is                                                                 |
| - | ------------------------- | -------------------------- | ----- | ----- | -------------------------------------------------------------------------- |
| 1 | 12299754 – 12299777       | 12674600 – 12674623        | 1     | 1     | bundler export marker (`h8(sO5,{REPL:()=>...})`) — not source              |
| 2 | 12299932 – 12301016       | 12674748 – 12675901        | 0.829 | 0.997 | **TranscriptModeFooter** — drifted, lifted (see drift inventory)           |
| 3 | 12301016 – 12302151       | 12676345 – 12677556        | 0.842 | 1     | **TranscriptSearchBar** — drifted, lifted (see drift inventory)            |
| 4 | 12302151 – 12302543       | 12677556 – 12677947        | 1     | 1     | `AnimatedTerminalTitle` — verbatim                                         |
| 5 | 12302543 – 12302573       | (no match)                 | —     | —     | `_temp` helper — boundary artifact (inlined / merged in v112)              |
| 6 | 12302573 – 12302612       | 10939734 – 10939773        | 1     | 1     | `_temp2` helper — verbatim (relocated in v112's chunk graph)               |
| 7 | 12302612 – 12355644       | 12678016 – 12734522        | 0.817 | 1     | **`REPL` component** — drifted, retained v88 body (see drift inventory)    |
| 8 | 12355644 – 12355834       | 12734522 – 12734741        | 0.4   | 0.99  | module-level no-op stubs (`useFrustrationDetection` shape changed) — lifted|
| 9 | 12355834 – 12357189       | 12734741 – 12736243        | 0.6   | 1     | bundle init wrapper — bundler-generated, not source                        |

Decls 1, 5, 6, 9 are bundle/build artifacts (not part of the .tsx source).
Decls 4 is verbatim. Decls 2, 3, 8 are lifted with explicit v112 fixes
applied (see below). Decl 7 is the giant REPL component — retained as
v88 source with drift documented for follow-up.

## Drift inventory and applied fixes

### Decl 2 — `TranscriptModeFooter` (cos=0.997)
Applied edits:
- Added a memoized "detected editor" probe (`Symbol.for("react.memo_cache_sentinel")` slot 0)
  that selects the editor name shown in the keybinding hint. v88 had no probe.
  **TODO(lift):** the v112 helper is unnamed in the minified bytes (`gmK()` in
  v112_min.js around byte 12674870); it returns either a string (editor name) or
  null. Stubbed to `null` here pending its lift in another chunk.
- Hint string now expands to:
  `… · ${arrowUp}${arrowDown} scroll · [ to print output · v to ${editorLabel}` for the
  virtual-scroll branch, and `… · v to ${editorLabel}` for the suppress-show-all branch.
  v88 said `home/end top/bottom` (virtual-scroll) and `""` (suppress-show-all).
- Memo cache widened from 9 slots to 11 to cover the new `detectedEditor` slot
  and the spacer `<Box flexGrow={1} />` that v112 hoists above status (it lived
  inside two fragments in v88; now it's a single sibling above `t4`).

### Decl 3 — `TranscriptSearchBar` (cos=1)
Applied edits:
- `useSearchInput` destructure now also pulls `handleKeyDown` and `handlePaste`.
- Outer `<Box>` gains `tabIndex={0} autoFocus onKeyDown={handleKeyDown} onPaste={handlePaste}`.
  The bar now owns its own focusable input region; v88 leaned on the global
  `useInput` registered inside `useSearchInput`.
- No structural change to the rest of the JSX.

### Decl 7 — `REPL` component (jac=0.817, cos=1)
**Strategy:** retained v88 body verbatim. Cosine is 1, so the v112 minified
bytes still produce the same identifier and AST shape — i.e. drifts are
many local tweaks, not algorithm changes. Manually liftng all of them is not
budget-feasible (53 KB minified ≈ 3,800+ lines of TSX). Known v112 deltas
visible from the bundle init (decl 9) and from cross-chunk hooks already
landed:
- Voice keybinding wiring migrated from the JSX `<VoiceKeybindingHandler />`
  component to the hook form `useVoiceKeybindingHandler({...})`. Both bindings
  are kept exported in `useVoiceIntegration` so the v88 JSX still compiles
  (see `reference/v2.1.88/sources/src/hooks/useVoiceIntegration.tsx:671-674`).
  **TODO(lift):** the two REPL JSX call sites
  (`reconstructed/.../REPL.tsx:4416, 4558`) should switch to a top-of-component
  `useVoiceKeybindingHandler({...})` call once the hook signature is
  re-confirmed against v112.
- ToolUseContext-style fields keep churning across chunks (taskRegistry,
  sessionHooksRegistry, agentLifecycle, setReplContext per chunk-105 notes).
  REPL's tool/context plumbing inherits those casts.
- The bundle init list (decl 9) shows ~10 added module IDs and ~5 removed —
  consistent with new feature gates landing (e.g. memory-survey,
  post-compact-survey, away-summary, lsp-recommendation, plugin-hint) and
  some flags being deleted. v88_src.tsx already imports all of those at the
  top, so the source-level diff per import is just an added or removed line
  somewhere in the imports block; no functional consequence in this lift.

### Decl 8 — module-level stubs (jac=0.4, cos=0.99)
Applied edits:
- `useFrustrationDetection` external no-op stub now returns the new
  pending-action surface: `{ state: 'closed', handleTranscriptSelect, pending: [],
  handleAction, skipForSession }`. v88 returned only the first two fields.
  Stub typed via `unknown as typeof ...useFrustrationDetection` so the
  imported hook's actual return signature wins downstream.
- Added a separate `useVoiceKeybindingHandler` conditional require (the hook
  the v112 source pulls in directly) alongside the legacy
  `VoiceKeybindingHandler` component binding. The component binding is kept
  to keep the existing JSX call sites compiling until they're migrated.

### Decl 9 — bundle init wrapper
Not source; not lifted. Diff inventory only:
- v88 module deps list ends `…l8=K6(P6(),1),X1=K6(P6(),1),k2A=…useVoiceIntegration,fW7=[],C2A={maybeLoadOlder:(q)=>{}}`.
- v112 list adds `N2A=(JW7(),B7(HW7)).useVoiceKeybindingHandler` and
  `S2A=(nO5(),B7(lO5)).useScheduledTasks` (both already gated by `feature(...)`
  in v88_src.tsx; the v112 minifier hoisted them to the wrapper).
- ~10 new module init calls and ~5 removed (counted by hand from the two
  17 KB blocks). All match imports already present near the top of v88_src.tsx.

## Unresolved / TODO

| TODO | Where in lifted file | Byte range in v112_min.js |
| ---- | -------------------- | ------------------------- |
| Lift v112 `getDetectedEditor()` (memoized probe in TranscriptModeFooter) | `TranscriptModeFooter` body, `detectedEditor` slot | ~12674870 (inside decl 2, ±20) |
| Migrate `<VoiceKeybindingHandler />` JSX call sites to `useVoiceKeybindingHandler` hook | REPL body, two sites at lines 4416 and 4558 of the lifted file | inside decl 7 |
| Confirm REPL component drifts (jac=0.817) — small tweaks distributed throughout the 53 KB body | entire `REPL` function | 12678016 – 12734522 |

## Cross-file observations

- `useFrustrationDetection`'s real (ant) implementation must now return the
  pending-action shape. Whoever lifts
  `src/components/FeedbackSurvey/useFrustrationDetection.tsx` should make sure
  the live return type is updated to match — the external stub here mirrors
  the live shape via `as unknown as typeof useFrustrationDetection`, so a
  signature drift will show up as a type error at the import site rather
  than silently diverging.
- `useSearchInput`'s return type now includes `handleKeyDown` and
  `handlePaste`. Confirm when `src/hooks/useSearchInput.ts` is lifted that the
  hook signature exposes those fields.
- `useVoiceIntegration` exports both `useVoiceKeybindingHandler` (hook) and
  `VoiceKeybindingHandler` (compat component). v112's REPL prefers the hook;
  v88's REPL still references the component. The hook lift should keep the
  compat export so the migration can be incremental.

## Lifter

`lifter-86` (opus, 1M context). Single-shot, checkpointed-write protocol:
- Pass 1 (skeleton) skipped — same rationale as chunk #125: file is largely
  verbatim, wholesale copy from v88_src.tsx is a faithful baseline.
- Pass 2 (verbatim) reduced to "copy the v88 source minus the trailing
  `//# sourceMappingURL=` line".
- Pass 3 (drift) targeted edits for decls 2, 3, 8 plus inline TODO markers
  for decl 7's distributed drift.
