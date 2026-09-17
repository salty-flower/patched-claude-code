# Bun.ant.CellSegmenter Contract (2.1.273)

Frozen from live sampling of the upstream runtime, not inferred from call sites.
Method: [Inspecting the Upstream Bun Runtime](../guides/Inspecting-Upstream-Bun-Runtime.md).

## Governing Split

> `Bun.ant` is fork-only; the host runtime must supply it or the interactive TUI
> cannot start. Sample the contract; do not guess it.

`2.1.273` ships `Bun-Version: 1.4.3`; public bun's newest is `1.4.2`.
`Bun.ant.CellSegmenter` is absent from public bun and from nixpkgs.

## Why a Compatibility Layer Is Needed

`chunk-mdeqame7.js` (`Ns`) throws before rendering:

```
This build of @anthropic-ai/bun-internal has no Bun.ant.CellSegmenter;
src/ink needs bun-internal >= the version pinned in package.json.
```

`vRe` constructs the native renderer unconditionally; there is no JS fallback.
`segment` is reached on **every** frame.

## Surface Used by 2.1.273

| `Bun.ant` key | Guard in graph | Behaviour when absent |
| --- | --- | --- |
| `CellSegmenter` | none — explicit throw | render stops |
| `memoryPressureLevel()` | `try/catch` | returns `undefined` |
| `getPeerPid(n)` | `try/catch` + `typeof … === "function"` probe | returns `null` |
| `getPeerUid(n)` | `try/catch` | returns `null` |
| `setDumpable(!1)` | `try/catch` | reports failure |

The other 13 keys (`getModifiers`, `isModifierPressed`, `waitForUrlEvent`,
`microphoneAuthorizationStatus`, recording/playback, console code page) are not
called by this version. **Only `CellSegmenter` needs implementing.**

## Constructor

```js
new Bun.ant.CellSegmenter({
  ambiguousIsNarrow: true,
  substitute: [[1564,1564],[8234,8238],[8294,8297]],   // U+061C, U+202A-202E, U+2066-2069
  screen: {
    widthMask: 3, narrow: 0, wide: 1, spacerTail: 2, spacerHead: 3,
    emptyCharIndex: 0, spacerCharIndex: 1, emptyWord: 0, tabWidth: 8,
  },
})
```

Constants resolved from the graph: `fl=17`, `Bo=2`, `Pg=10`, `hC=255`, `mC=256`,
`pC=2048`, `Nd=16384`, `Pr=32767`; `qn(n,s,u) = n<<17 | s<<2 | u`; `Fpt=8`.

## Instance Surface

| Member | Kind | Arity |
| --- | --- | --- |
| `graphemes` | getter | — |
| `sgrKeys` / `sgrCloseKeys` | getter | — |
| `uris` | getter | — |
| `segment` | method | 4 |
| `paint` | method | 9 |
| `setCell` | method | 6 |

`graphemes` holds **strings**; `uris[0]` is `""`.

## segment

```
segment(text, cells: Int32Array, runs: Int32Array, reordered: boolean) -> count
```

Returns `count`; a **negative** return means the buffer was too small and
`-return` is the required capacity. Grows `cells`/`runs` by re-calling.

| Input | n | cells | runs |
| --- | --- | --- | --- |
| `""` | 0 | — | — |
| `"a"` | 1 | `[66,1]` | `[0,0]` |
| `" "` | 1 | `[0,1]` | `[0,0]` |
| `"中"` | 1 | `[98,2]` | `[0,0]` |
| `"👍"` | 1 | `[99,2]` | `[0,0]` |
| `"👨💻"` | 1 | `[100,2]` | `[0,0]` |
| `"é"` | 1 | `[101,1]` | `[0,0]` |
| `"क्ष"` | 1 | `[102,2]` | `[0,0]` |
| `"\t"` | 1 | `[96,256]` | `[0,0]` |
| `"​"`, `"﻿"`, `"️"` | 0 | — | — |
| `"؜"`, `"‪"`, `"⁦"` | 1 | `[97,513]` | `[0,0]` |
| `"[38;5;196mr[0m"` | 1 | `[83,1]` | `[2,0]` |
| `"]8;;http://xlink]8;;"` | 4 | `[77,74,79,76]` | `[0,1,0,0,0,0,0,0]` |

### Encoding

Corrected against the fixture; an earlier reading of the attribute word was
wrong on two points and is called out below so it is not reintroduced.

- `cells[2p]` — index into the instance's own grapheme table (`graphemes`).
  Reserved slots: `0` = space (`emptyCharIndex`), `96` = tab, `97` = `U+FFFD`
  (the substitution character). Printable ASCII maps to `charCode - 31`.
  Every other grapheme is assigned from `98` in first-seen order.
- `cells[2p+1]` — packed attribute:
  - bits `0..1` (`widthMask=3`) — width class (`narrow`/`wide`/`spacerTail`/`spacerHead`)
  - bit `8` (`mC=256`) — tab stop
  - bit `9` (`512`) — substitute range hit (bidi control)
  - bits `10+` (`Pg`) — **run index into `runs`**
- `runs[2r]` / `runs[2r+1]` — style id and hyperlink index **per run**, not per
  cell. A cell reaches its style through the run index in its attribute word.
  Padding past the last run is zero, which is why a single-run sample such as
  the OSC 8 link reads `runs = [0,1,0,0,0,0,0,0]` — one run carrying the link,
  then zeros, not a link bound to the first grapheme.
- The style id is **not** carried in the attribute word. `ESC[38;5;196mr ESC[0m`
  samples as cells `[83,1]` — the attribute word has no style bits; the style
  lives only in `runs`.
- Width advance: bit 8 set → advance to the next tab stop; otherwise
  advance by `cells[2p+1] & 255`.

### SGR Tables

Escapes are consumed into `sgrKeys` / `sgrCloseKeys`, open/close paired, with
`\0` joining combined sequences:

| `sgrKeys` | `sgrCloseKeys` |
| --- | --- |
| `""` | `""` |
| `[1m` | `[22m` |
| `[38;5;196m` | `[39m` |
| `[38;2;1;2;3m` | `[39m` |
| `[1m\0[31m` | `[22m\0[39m` |

The compatibility implementation matches the fork on a 552-case matrix that
covers standalone and stateful SGR input, semicolon and colon parameter groups,
category replacement, empty-parameter reset, native close codes, and unknown
composite codes.
A 256-byte ESC matrix and four explicit C1 cases also match exactly.
Seven-bit CSI/OSC/DCS/SOS/PM/APC and their C1 forms are consumed; OSC 8 changes
the active link, while unrelated control strings do not emit cells.

## paint

```
paint(screenCells: Int32Array, width, x, y, segCells, count, undefined,
      charIndices: Int32Array, words: Int32Array) -> number
```

- Argument 7 is unused and the observed caller passes `undefined`.
- Argument 8 (`charIndices`) is **mandatory**; omitting it throws the same
  `Int32Array` type error as a bad screen.
- Writes glyphs into `screenCells`; the packed return decodes as
  `startCol = (v >> 20) & 0xffff`, `endCol = v >> 36`, the low 20 bits carrying
  the unclamped end.
- Caller (`G0`) skips the damage rect when `startCol >= endCol`.

| Text | pos | return | screen writes |
| --- | --- | --- | --- |
| `"abc"` | (3,2) | `startCol=3 endCol=6` | — |
| `"中"` | (0,0) | `startCol=0 endCol=2` | two cells, attrs 1 then 2 |
| `"中"` | (19,0) in width 20 | `startCol=19 endCol=20` | one cell, attr 3 (`spacerHead`) |
| `"  "` | any | `startCol == endCol` | none |

Wide graphemes write a spacer pair; a wide grapheme that cannot fit before the
right edge writes only the head.
Painting a narrow cell over a wide pair repairs the stale tail, painting over a
tail repairs the stale head, and a left-clipped wide grapheme does not leave an
orphan tail.
Tabs clear every covered in-bounds column through the next tab stop.
Damage ranges count attempted in-bounds writes even when the stored values are
already equal; a write with no in-bounds damage uses `startCol=-1,endCol=0`.

The compatibility implementation matches the fork exactly on a 486-case
position/screen matrix, two wide-overlap cases, and four tab cases.
Those matrices include styled, linked, substituted, clipped, and multi-run
input.

## setCell

```
setCell(cells, width, x, y, char, [style]) -> number
```

Same packed return shape as `paint`.
A wide word writes the glyph plus a spacer tail when both columns fit.
Replacing either half of an existing wide pair repairs the adjacent half.
The checked-in oracle contains both wide creation and narrow-over-wide cases.

## Character Pool Alignment

The renderer's `charPool` (`Wf`) preloads `" " → 0` and `"" → 1`, caches ASCII
in a 128-slot table seeded with only `[32] = 0`, and assigns every other string
the next free index in first-seen order. `Dd.charIndices()` interns
`graphemes[i]` through that pool, so pool indices and segmenter indices are
**separate spaces**; only `paint`'s `charIndices` argument is a pool index.

## Differential Coverage and Remaining Boundaries

The checked-in oracle is bound to the approved Linux x64 `2.1.273` binary with
SHA-256
`6c752e2cc7c110c9df15f26d8d134d438c5ae95dbd610efc1a308bf7f9c5f6c1`.
`tools/debug/capture-bun-ant-cell-segmenter.ts` launches that exact binary,
attaches to the inspector process it owns, and records the binary hash and Bun
version beside the observations.

The fixture replays 48 corpus samples, 20 focused segment regressions, 30
capacity cases, six accumulated SGR table rows, 28 paint cases, and eight paint
or `setCell` regressions.
Separate broad differential probes produced these final results:

| Surface | Result |
| --- | --- |
| SGR state and parsing | 552/552 exact |
| ESC byte inputs | 256/256 exact |
| C1 controls | 4/4 exact |
| Reordered text | 12/12 exact |
| Paint position/screen matrix | 486/486 exact |
| Wide-cell overlap | 2/2 exact |
| Tabs over existing content | 4/4 exact |
| Fresh regional-indicator pairs | 676/676 exact |

`Intl.Segmenter` and `Bun.stringWidth` back the compatibility implementation.
The host's Unicode table differs from the fork in two observed ways:
unsupported emoji modifiers require splitting, while Unicode 16
`Extended_Pictographic` additions require joining selected ZWJ sequences.
The compatibility layer normalizes both differences from the Unicode 16 emoji
data published at
<https://www.unicode.org/Public/16.0.0/ucd/emoji/emoji-data.txt>.

A 6,823-signature, shared-instance cluster probe still has 56 differences, all
in regional-indicator signatures after thousands of distinct graphemes have
already populated the instance table.
Fresh instances match all 676 ordered regional-indicator pairs, so ordinary
pair segmentation is covered; the fork's long-lived table saturation/index
behavior remains unresolved.
Width agreement outside the probed corpus, exhaustive bidi reordering, and a
Darwin-native oracle remain unproved.
