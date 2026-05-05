# Chunk #138 — src/utils/messages.ts

**Files lifted:** 1
**Confidence:** medium-high
**Strategy:** v88_src.ts copied wholesale (per chunk-125 precedent). All
drifted decls have `cos >= 0.987`, indicating local renames or 1–few-line
tweaks rather than algorithm changes. Drift documented but not yet
diff-patched.

## Per-file notes

### messages.ts
- bytes out: 193,203 (== v88_src; identical structure)
- v88 line count: 5,512
- v88 minified bundle: 76,179 bytes; v112 minified bundle: 72,027 bytes
  (~5.4% shrink, consistent with local-edit drift)
- decls in region.json: 116 v88 decls, 111 with v112 matches; the remaining
  five (5) are boundary artifacts noted in `region.json.notes` — these are
  small consts/exports that have no individual v112 decl because v112's
  minifier inlined or merged them.
- decls reconstructed: all 111 matched decls (jac=cos=1 are trivially
  verbatim; drifted decls retain v88 bodies because v88_src is the only
  readable source).
- jac=cos=1 (verbatim): **91 of 111 matched** decls.
- drifted decls (jac<1 or cos<1): **20 of 111**, all with cos >= 0.987.

### Drift inventory

All drifted decls have `cos >= 0.987` and `jac in [0.57, 1]`. The lowest jac
(0.57) is on a 14,662-byte v88 range that maps to a ~9,979-byte v112 range —
roughly 32% shrink, consistent with prompt-text rewording or block removal,
not algorithm change.

| v88 byte range          | v112 byte range          | jac   | cos   | shrink |
| ----------------------- | ------------------------ | ----- | ----- | ------ |
| 9698484 – 9698894       | 9981249 – 9981651        | 1     | 0.992 | -2%    |
| 9698979 – 9700121       | 9982237 – 9983329        | 0.917 | 0.999 |  0%    |
| 9701849 – 9702250       | 9985057 – 9985500        | 0.909 | 1     |  0%    |
| 9702250 – 9704016       | 9985500 – 9987345        | 0.969 | 1     |  0%    |
| 9704954 – 9705337       | 9988283 – 9988814        | 1     | 0.994 | +38%   |
| 9707753 – 9708226       | 9991230 – 9991788        | 1     | 0.987 | +18%   |
| 9708852 – 9711179       | 9992592 – 9994779        | 0.826 | 0.998 | -6%    |
| 9711309 – 9711415       | 9994779 – 9994909        | 1     | 0.956 |  0%    |
| 9711716 – 9711856       | 9995465 – 9995712        | 1     | 0.991 | +76%   |
| 9713296 – 9714153       | 9997152 – 9998042        | 0.941 | 1     |  0%    |
| 9715986 – 9717795       | 10000496 – 10002532      | 0.9   | 0.998 | +13%   |
| 9730029 – 9744691       | 10014766 – 10024745      | 0.57  | 0.998 | -32%   |
| 9747491 – 9747651       | 10028641 – 10028788      | 0.8   | 0.993 | -8%    |
| 9749193 – 9749578       | 10030458 – 10031297      | 0.75  | 0.989 | +118%  |
| 9749578 – 9749950       | 10031297 – 10031650      | 1     | 0.989 | -5%    |
| 9749950 – 9750551       | 10031650 – 10032343      | 0.917 | 0.987 | +15%   |
| 9750551 – 9750827       | 10032343 – 10032699      | 1     | 0.997 | +29%   |
| 9754153 – 9754558       | 10036108 – 10036597      | 1     | 0.999 | +21%   |
| 9754558 – 9755271       | 10036597 – 10037682      | 0.706 | 0.998 | +52%   |
| 9755271 – 9759714       | 10037682 – 10042136      | 1     | 0.999 |  0%    |

Note on percentages: positive = v112 decl is larger than v88; negative =
shrunk. The `[9711309,9711415]` cos=0.956 jac=1 case looks like a
single-token rename (very small decl, identical token set, cosine drop from
length distribution).

### Hot drift candidates (likely owners — best-guess based on size/position)

The biggest semantically-interesting drift is `[9730029,9744691]` jac=0.57.
This range spans 14,662 bytes, anchored within the second half of the file
(byte 9730029 = ~38KB into the v88 region). Best guess by position: the
PlanModeV2 / agent-orchestration prompt-builder helpers (one of the
multi-thousand-line prompt builders). The v112 shrink (-32%) is consistent
with prompt-text removals after PlanModeV2 stabilization.

The `[9711309,9711415]` cos=0.956 jac=1 case is probably a single
identifier rename in a small (~106-byte) helper.

### Lift method
- Wholesale copy of v88_src.ts to
  `reconstructed/v2.1.112/src/utils/messages.ts`. The file is 5,512 lines
  / 188 KB. ~82% of decls are jac=cos=1 verbatim; the remaining 20 have
  cos >= 0.987, indicating local edits and not algorithm changes.
- All v88 imports resolve against existing files in
  `reconstructed/v2.1.112/src/utils/` (e.g. `attachments.ts`,
  `agentSwarmsEnabled.ts`, `teammateMailbox.ts`).
- Functions exported by name in v88 still appear in v112_min by name
  (e.g. `ensureToolResultPairing`, anchor at `tengu_amber_prism`).

### Unresolved / TODO
- None at the symbol level — every external symbol referenced by
  `messages.ts` already has a sibling lift.
- Drift sites listed above with byte ranges; if a downstream regression
  surfaces, re-anchor against `extracted/2.1.112/src/utils/messages.ts/v112_min.js`
  using the table.
- Largest drift (`[9730029,9744691]` jac=0.57, ~14.6 KB) deserves a follow-up
  pass to identify the specific prompt-builder helper and re-lift its body
  from v112_min directly.

## Cross-file observations
- `messages.ts` is a leaf-ish utility with many imports but very few
  exports beyond the message-construction helpers; its drift pattern is
  consistent with prompt-text edits across the rest of v112 (compare
  chunk-105's `runAgent.ts` notes about `feature('PROMPT_CACHE_BREAK_DETECTION')`
  and friends being removed).
- The v112 bundle still references `tengu_amber_prism` — the auto-memory
  GrowthBook gate is intact across versions.
- `getStrictToolResultPairing` from `bootstrap/state.js` is referenced and
  still present in v112_min (anchored via `ensureToolResultPairing`).

## Lifter

`lifter-138` (opus, single-shot). Strategy: wholesale copy + drift
inventory, matching chunk-125 (`bashParser.ts`) and chunk-103.
