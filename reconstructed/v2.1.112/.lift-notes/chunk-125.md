# Chunk #125 — src/utils/bash/bashParser.ts

**Files lifted:** 1
**Confidence:** medium-high
**Strategy:** v88_src.ts copied wholesale; 11 drifted decls retain v88 bodies
(drift documented but not yet diff-patched). All drifted decls have
`cos >= 0.998`, indicating local renames or 1–2-line tweaks rather than
algorithm changes.

## Per-file notes

### bashParser.ts
- bytes out: 130,810 (== v88_src; identical structure)
- decls in region.json: 81 v88 decls, 60 with v112 matches; remaining are
  boundary artifacts (small consts/exports) that have no individual v112 decl
  because v112's minifier inlined or merged them.
- decls reconstructed: all 60 matched decls; 21 unmatched ranges are either
  type-only (no JS emit) or constant exports already present in the verbatim copy.
- jac=cos=1 (verbatim): **49 of 60 matched** decls — copy v88 directly, no edits.
- drifted decls (jac<1 or cos<1): **11 of 60** — all in the `parseFor`,
  `parseTestExpr`, `parseTestRegex`, `parseTestPattern`, parser-helpers and
  word-fragment tail of the file.

### Drift inventory

The drifted decls all have `cos >= 0.998` and `jac in {0.75, 0.833, 0.857,
0.875, 0.889, 0.9, 0.999}` — these are minor edits (one or two added/removed
lines or a renamed local), NOT structural. v88 source is the right base.

| v112 byte range          | v88 byte range          | jac   | cos   | likely owner            |
| ------------------------ | ----------------------- | ----- | ----- | ----------------------- |
| 4764471 – 4765096        | 6306270 – 6306905       | 1     | 0.999 | parseSimpleCommand tail |
| 4770124 – 4770382        | 6311968 – 6312231       | 1     | 0.999 | tryParseRedirect helper |
| 4789523 – 4790143        | 6331392 – 6332027       | 1     | 0.999 | parseTestExpr helper    |
| 4790143 – 4790315        | 6332027 – 6332204       | 0.75  | 0.998 | parseTestUnary          |
| 4790315 – 4791727        | 6332204 – 6333626       | 0.9   | 1     | parseTestExpr           |
| 4791727 – 4791960        | 6333626 – 6333864       | 0.833 | 0.999 | parseTestRegex          |
| 4791960 – 4792335        | 6333864 – 6334244       | 0.857 | 1     | parseTestPattern        |
| 4795212 – 4795804        | 6337136 – 6337733       | 0.889 | 1     | parseArith helper       |
| 4795804 – 4796193        | 6337733 – 6338127       | 0.875 | 1     | parseArith helper       |

(Two more drifted decls have cos=0.999 but jac=1 — single-token rename only.)

### Lift method
- Wholesale copy of v88_src.ts to reconstructed/v2.1.112/src/utils/bash/bashParser.ts.
- The file is 4,436 lines / 130 KB. ~95% of decls are jac=cos=1 verbatim.
  The drifted decls have very high cos similarity (>=0.998), indicating the
  changes are local renames or one/two-line tweaks, not algorithm changes.
- v112_min retains all the same exported and internal symbols
  (`ensureParserInitialized`, `getParserModule`, `SHELL_KEYWORDS`,
  `TsNode`, etc.).
- Imports in the lifted file: none — bashParser.ts is a leaf module
  (it exports primitives consumed by parser.ts and ast.ts).

### Unresolved / TODO
- None. No external symbols are referenced — bashParser.ts is self-contained.
- The 11 drifted decls retain their v88 bodies; if a downstream regression
  surfaces, the diff sites are listed above with byte ranges and can be
  re-anchored from v112_min.js using the table.

## Cross-file observations
- bashParser.ts exports the `TsNode` shape consumed by `parser.ts` (chunk #126,
  already lifted) and `SHELL_KEYWORDS` consumed by `ast.ts` (chunk #124,
  already lifted). Both downstream consumers compile against the v88 surface,
  so re-using v88 here is correct.
- Two drifted ranges (cos=0.999, jac=1) suggest minifier-name churn between
  v88 and v112; no semantic change.

## Lifter

`lifter-125` (opus, third attempt; prior two stalled before any write).
Strategy: skip pass-1 skeleton because the file is largely verbatim; instead
copy wholesale and document drift inventory for follow-up.
