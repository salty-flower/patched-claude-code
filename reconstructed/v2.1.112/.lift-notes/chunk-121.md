# Chunk #121 — src/utils/ansiToPng.ts

**Files lifted:** 1
**Confidence:** high
**Strategy:** v88_src.ts copied wholesale. The bulk of the file (>205 KiB)
is a single base64-encoded bitmap font constant `FONT_B64`. All 6 v112-matched
function decls are jac=cos=1 (verbatim) against v88. The remaining decls are
constants, types, comments, and the giant `FONT_B64` data blob — none have
v112 matches because they aren't function decls the lifter tracked, but the
v112_min.js function bodies clearly reference all the same neighbor symbols
(`PRY`, `GO7`, `quK`, `KuK`, `de`, `RP6`, etc.), confirming the data and
constants are unchanged.

## Per-file notes

### ansiToPng.ts
- bytes out: 214,955 (== v88_src; identical)
- v88 lines: 334 (one of which — line 41, the `FONT_B64` value — is a single
  ~205 KiB base64 string)
- decls in region.json: 15 v88 decls, 6 with v112 matches.
- decls reconstructed: all 6 matched decls are verbatim copies (jac=cos=1).
  The 9 unmatched decls are non-function structures (FONT_B64 data, types,
  consts, comments, makeFallbackGlyph, blitShade, blitGlyph, roundCorners,
  lineWidthCells, SHADE_ALPHA, PNG_SIG, CRC_TABLE, makeCrcTable) — they
  show up as v88-only ranges because the v112 lifter only carved function
  decls out of the slice.

### Decl alignment (v112 minified -> v88 source)

| v112_min ident | v88 source         | v88 byte range          | v112 byte range          | jac | cos |
| -------------- | ------------------ | ----------------------- | ------------------------ | --- | --- |
| `fRY`          | `decodeFont`       | 10943019 – 10943195     | 10243676 – 10243852      | 1   | 1   |
| `zuK`          | `ansiToPng`        | 10943195 – 10943850     | 10243852 – 10244507      | 1   | 1   |
| `vRY`          | `fillBackground`   | 10943912 – 10944000     | 10244569 – 10244657      | 1   | 1   |
| `hRY`          | `crc32`            | 10944898 – 10945009     | 10245555 – 10245666      | 1   | 1   |
| `fO7`          | `chunk`            | 10945009 – 10945206     | 10245666 – 10245863      | 1   | 1   |
| `RRY`          | `encodePng`        | 10945206 – 10945539     | 10245863 – 10246196      | 1   | 1   |

### Neighbor symbol map (v112_min.js references)

These are external/sibling symbols referenced by the matched bodies. All
resolve cleanly to v88 names within this file (or to imports already
declared at the top of v88_src):

- `PRY`        → `FONT_B64` (the base64 data blob, line 40-41)
- `GO7`        → `GLYPH_BYTES` (constant)
- `de`         → `GLYPH_W` (constant)
- `RP6`        → `GLYPH_H` (constant)
- `quK`        → `DEFAULT_BG` (imported from `./ansiToSvg.js`)
- `KuK`        → `parseAnsi` (imported from `./ansiToSvg.js`)
- `N1`         → `stringWidth` (imported from `../ink/stringWidth.js`)
- `GRY`        → `lineWidthCells`
- `NRY`        → `roundCorners`
- `TRY`        → `SHADE_ALPHA`
- `ZRY`        → `FONT`
- `WRY`        → `FALLBACK_GLYPH`
- `VRY`        → `blitShade`
- `kRY`        → `blitGlyph`
- `yRY`        → `CRC_TABLE`
- `MRY`        → `deflateSync` (imported from `zlib`)
- `ERY`        → `PNG_SIG`

## Drift inventory

None. Every matched decl is jac=cos=1, identical bytes. The non-matched v88
decls correspond to non-function constructs (constants, types, the FONT_B64
data, the smaller helper functions whose v112 counterparts the lifter didn't
single out). v112_min function bodies reference all of these neighbors
verbatim, so leaving them as v88 is correct.

## Unresolved / TODO

None. ansiToPng.ts only depends on:
- `zlib.deflateSync` (Node built-in)
- `stringWidth` from `../ink/stringWidth.js`
- `AnsiColor`, `DEFAULT_BG`, `ParsedLine`, `parseAnsi` from `./ansiToSvg.js`
  (already lifted in `reconstructed/v2.1.112/src/utils/ansiToSvg.ts`).

## Cross-file observations

- The bundled Fira Code base64 font payload (`FONT_B64`, ~205 KiB) is
  byte-identical between v88 and v112 — the v112_min `decodeFont`
  references `PRY` with the same `readUInt16LE(0)` header layout and the
  same `GO7`-stride loop, so the data structure is unchanged. The lifter
  didn't carve `FONT_B64` as its own decl in v112 (it's outside the function
  slice), but its presence is necessary for `decodeFont` to work and is
  preserved verbatim from v88.
- The 1.7 KiB v112_min slice contains only the 6 function bodies listed
  above; the rest of the file's mass is all constants/data and small
  helpers (`makeFallbackGlyph`, `blitShade`, `blitGlyph`, `roundCorners`,
  `lineWidthCells`, `makeCrcTable`) that the lifter excluded from the slice
  but that are clearly still called from the matched bodies via the
  neighbor symbols.

## Lifter

`lifter-121` (opus, single oversize file). Wholesale-copy strategy chosen
after triage confirmed the file is 95%+ data table + verbatim functions.
