/**
 * Compatibility implementation of the fork-only `Bun.ant.CellSegmenter` API.
 *
 * Claude Code 2.1.273 builds its native renderer with `new Bun.ant.CellSegmenter(...)` and has
 * no JavaScript fallback, so on a stock Bun (1.4.2, the newest public release) the interactive
 * TUI throws before the first frame. The `claude-patched` launcher preloads this module, which
 * installs a compatible constructor as a side effect of being evaluated.
 *
 * Implemented against the frozen contract in
 * `docs/records/2026-09-17-bun-ant-cell-segmenter-contract.md`, sampled from the fork at
 * runtime. Two host primitives back it instead of hand-written Unicode algorithms:
 * `Intl.Segmenter` for grapheme clusters and `Bun.stringWidth` for cell width. Focused
 * normalizers cover the observed Unicode 16 emoji deltas; the contract records the remaining
 * differential boundaries, and the implementation fails closed when either primitive is absent.
 *
 * The four other `Bun.ant` members the graph calls (`memoryPressureLevel`, `getPeerPid`,
 * `getPeerUid`, `setDumpable`) are deliberately left absent: the caller wraps them in
 * `try/catch`, and stubbing them would fabricate peer credentials and memory-pressure results
 * that the graph acts on.
 */

export const CELL_SEGMENTER_DIAGNOSTICS = Symbol.for("patched-claude-code.bun-ant-cell-segmenter.v1")

type SubstituteRange = readonly [number, number]

type ResolvedScreenOptions = {
  widthMask: number
  narrow: number
  wide: number
  spacerTail: number
  spacerHead: number
  emptyCharIndex: number
  spacerCharIndex: number
  emptyWord: number
  tabWidth: number
}

export type CellSegmenterOptions = {
  ambiguousIsNarrow?: boolean
  substitute?: ReadonlyArray<readonly number[]>
  screen?: Partial<ResolvedScreenOptions>
}

/** One parsed grapheme, before it is folded into a run. */
type CollectedCell = {
  grapheme: string
  char: number
  columns: number
  tab: boolean
  substitute: boolean
  style: number
  link: number
  word: number
}

type GraphemeSegments = Iterable<{ segment: string; index: number }>
type GraphemeSegmenter = (input: string) => GraphemeSegments

// ---------------------------------------------------------------------------------------
// Packing constants
// ---------------------------------------------------------------------------------------

// Segmented-cell attribute word (`cells[2p + 1]`).
const CELL_COLUMNS_MASK = 3
const CELL_TAB_BIT = 256
const CELL_SUBSTITUTE_BIT = 512
const CELL_WORD_SHIFT = 10

// Screen-cell word, mirroring the renderer's own packing: `styleId << 17 | link << 2 | class`.
const WORD_STYLE_SHIFT = 17
const WORD_LINK_SHIFT = 2
const WORD_LINK_MASK = 32767

// Grapheme table. Slots 0 and 1 are the empty/spacer characters, 2..95 mirror printable ASCII
// as `code - 31`, 96 and 97 are the tab and substitute characters, and every other grapheme
// takes the next index from 98 upward, in first-seen order.
const EMPTY_CHAR_INDEX = 0
const SPACER_CHAR_INDEX = 1
const ASCII_BLOCK_FIRST = 2
const ASCII_BLOCK_LAST = 95
const ASCII_INDEX_OFFSET = 31
const TAB_CHAR_INDEX = 96
const SUBSTITUTE_CHAR_INDEX = 97
const FIRST_DYNAMIC_CHAR_INDEX = 98
const ASCII_PRINTABLE_FIRST = 33
const ASCII_PRINTABLE_LAST = 126

// Return-value packing of `paint` / `setCell`.
const RANGE_START_SHIFT = 20
const RANGE_START_MASK = 0xffff
const RANGE_END_SHIFT = 36
const RANGE_UNCLAMPED_MASK = 0xfffff

const ESC = 0x1b
const BEL = 0x07
const C1_DCS = 0x90
const C1_CSI = 0x9b
const C1_ST = 0x9c
const C1_OSC = 0x9d
const C1_SOS = 0x98
const C1_PM = 0x9e
const C1_APC = 0x9f
const TAB_CODE = 0x09
const SPACE = " "
/** Graphemes inside a `substitute` range are interned as U+FFFD, not as themselves. */
const SUBSTITUTE_CHARACTER = "�"

const DEFAULT_SUBSTITUTE_RANGES: ReadonlyArray<SubstituteRange> = [
  [0x061c, 0x061c],
  [0x202a, 0x202e],
  [0x2066, 0x2069],
]

const DEFAULT_SCREEN_OPTIONS: ResolvedScreenOptions = {
  widthMask: CELL_COLUMNS_MASK,
  narrow: 0,
  wide: 1,
  spacerTail: 2,
  spacerHead: 3,
  emptyCharIndex: EMPTY_CHAR_INDEX,
  spacerCharIndex: SPACER_CHAR_INDEX,
  emptyWord: 0,
  tabWidth: 8,
}

/** The subset of SGR parameter shapes the renderer's own `ansiCodes()` accepts. */
const SGR_CODE_PATTERN = /^\d{1,3}(?:;5;\d{1,3}|;2;\d{1,3};\d{1,3};\d{1,3})?$/

const EMOJI_MODIFIER_PATTERN = /\p{Emoji_Modifier}/u
const EMOJI_MODIFIER_BASE_PATTERN = /\p{Emoji_Modifier_Base}/u
const EXTENDED_PICTOGRAPHIC_PATTERN = /\p{Extended_Pictographic}/u
// Unicode 16 Extended_Pictographic points absent from the host Bun 1.4.2 Unicode table.
// Generated from https://www.unicode.org/Public/16.0.0/ucd/emoji/emoji-data.txt.
const UNICODE_16_EXTENDED_PICTOGRAPHIC_DELTA = [
  9096, 9096, 9733, 9733, 9735, 9741, 9743, 9744, 9746, 9746, 9750, 9751, 9753, 9756, 9758, 9759, 9761, 9761, 9764,
  9765, 9767, 9769, 9771, 9773, 9776, 9783, 9787, 9791, 9793, 9793, 9795, 9799, 9812, 9822, 9825, 9826, 9828, 9828,
  9831, 9831, 9833, 9850, 9852, 9853, 9856, 9861, 9872, 9873, 9880, 9880, 9882, 9882, 9885, 9887, 9890, 9894, 9896,
  9897, 9900, 9903, 9906, 9916, 9919, 9923, 9926, 9927, 9929, 9933, 9936, 9936, 9938, 9938, 9941, 9960, 9963, 9967,
  9974, 9974, 9979, 9980, 9982, 9985, 9987, 9988, 9998, 9998, 10000, 10001, 10085, 10087, 126976, 126979, 126981,
  127019, 127024, 127123, 127136, 127150, 127153, 127167, 127169, 127182, 127185, 127221, 127245, 127247, 127279,
  127279, 127340, 127343, 127405, 127405, 127584, 127589, 127778, 127779, 127892, 127893, 127896, 127896, 127900,
  127901, 127985, 127986, 127990, 127990, 128254, 128254, 128326, 128328, 128335, 128335, 128360, 128366, 128369,
  128370, 128379, 128390, 128392, 128393, 128398, 128399, 128401, 128404, 128407, 128419, 128422, 128423, 128425,
  128432, 128435, 128443, 128445, 128449, 128453, 128464, 128468, 128475, 128479, 128480, 128482, 128482, 128484,
  128487, 128489, 128494, 128496, 128498, 128500, 128505, 128710, 128714, 128723, 128724, 128742, 128744, 128746,
  128746, 128753, 128754, 128884, 128895, 128981, 128985, 129200, 129211, 129216, 129217, 129232, 129240, 129536,
  129623, 129632, 129645,
] as const
const RTL_PATTERN = /[\p{Script=Hebrew}\p{Script=Arabic}]/u
const STRONG_LTR_PATTERN = /[\p{Letter}\p{Number}]/u

function isForkExtendedPictographic(character: string): boolean {
  if (EXTENDED_PICTOGRAPHIC_PATTERN.test(character)) return true
  const codePoint = character.codePointAt(0)
  if (codePoint === undefined) return false
  for (let index = 0; index < UNICODE_16_EXTENDED_PICTOGRAPHIC_DELTA.length; index += 2) {
    if (
      codePoint >= (UNICODE_16_EXTENDED_PICTOGRAPHIC_DELTA[index] as number) &&
      codePoint <= (UNICODE_16_EXTENDED_PICTOGRAPHIC_DELTA[index + 1] as number)
    )
      return true
  }
  return false
}

function normalizeHostSegments(segments: GraphemeSegments): GraphemeSegments {
  return {
    *[Symbol.iterator]() {
      const entries = [...segments]
      for (let index = 0; index < entries.length; index += 1) {
        const entry = entries[index] as { segment: string; index: number }
        let segment = entry.segment
        if (
          segment.endsWith("‍") &&
          index + 1 < entries.length &&
          isForkExtendedPictographic([...segment][0] as string)
        ) {
          index += 1
          segment += (entries[index] as { segment: string }).segment
        }
        const codePoints = [...segment]
        if (
          codePoints.length === 2 &&
          EMOJI_MODIFIER_PATTERN.test(codePoints[1] as string) &&
          !EMOJI_MODIFIER_BASE_PATTERN.test(codePoints[0] as string)
        ) {
          yield { segment: codePoints[0] as string, index: entry.index }
          yield { segment: codePoints[1] as string, index: entry.index + (codePoints[0] as string).length }
        } else {
          yield { segment, index: entry.index }
        }
      }
    },
  }
}

function reorderBidiRuns(cells: CollectedCell[]): void {
  const firstStrong = cells.find((cell) => RTL_PATTERN.test(cell.grapheme) || STRONG_LTR_PATTERN.test(cell.grapheme))
  const startsRtl = firstStrong !== undefined && RTL_PATTERN.test(firstStrong.grapheme)
  if (startsRtl && cells.some((cell) => STRONG_LTR_PATTERN.test(cell.grapheme) && !RTL_PATTERN.test(cell.grapheme))) {
    cells.reverse()
    reverseRuns(cells, (cell) => STRONG_LTR_PATTERN.test(cell.grapheme) && !RTL_PATTERN.test(cell.grapheme))
    return
  }
  reverseRuns(cells, (cell) => RTL_PATTERN.test(cell.grapheme))
}

function reverseRuns(cells: CollectedCell[], member: (cell: CollectedCell) => boolean): void {
  let index = 0
  while (index < cells.length) {
    if (!member(cells[index] as CollectedCell)) {
      index += 1
      continue
    }
    let end = index + 1
    while (end < cells.length && member(cells[end] as CollectedCell)) end += 1
    cells.splice(index, end - index, ...cells.slice(index, end).reverse())
    index = end
  }
}

type HostGlobals = {
  Bun?: { stringWidth?: (input: string, options?: { ambiguousIsNarrow?: boolean }) => number }
  Intl?: {
    Segmenter?: new (locale?: string, options?: { granularity: string }) => { segment(input: string): GraphemeSegments }
  }
}

function hostGlobals(): HostGlobals {
  return globalThis as unknown as HostGlobals
}

function hostStringWidth(): ((input: string, options?: object) => number) | undefined {
  const bun = hostGlobals().Bun
  return typeof bun?.stringWidth === "function" ? bun.stringWidth : undefined
}

function createGraphemeSegmenter(): GraphemeSegmenter {
  const SegmenterConstructor = hostGlobals().Intl?.Segmenter
  if (typeof SegmenterConstructor !== "function") {
    throw new Error("CellSegmenter requires Intl.Segmenter from the host Bun runtime")
  }
  for (const locale of [undefined, "en"]) {
    try {
      const segmenter = new SegmenterConstructor(locale, { granularity: "grapheme" })
      return (input: string) => normalizeHostSegments(segmenter.segment(input))
    } catch {
      // Try the next locale before failing closed.
    }
  }
  throw new Error("CellSegmenter could not construct Intl.Segmenter in the host Bun runtime")
}

function measureColumns(grapheme: string, ambiguousIsNarrow: boolean): number {
  const stringWidth = hostStringWidth()
  if (!stringWidth) throw new Error("CellSegmenter requires Bun.stringWidth from the host Bun runtime")
  return stringWidth(grapheme, { ambiguousIsNarrow })
}

// ---------------------------------------------------------------------------------------
// Escape sequence handling
// ---------------------------------------------------------------------------------------

/** Index just past the escape sequence starting at `start` (which holds the ESC). */
function escapeEnd(text: string, start: number): number {
  const next = text.charCodeAt(start + 1)
  if (next === 0x5b) return csiEnd(text, start + 2)
  if (next === 0x5d || next === 0x50 || next === 0x58 || next === 0x5e || next === 0x5f) {
    return stringSequenceEnd(text, start + 2)
  }
  if (Number.isNaN(next)) return start + 1
  if (next < 0x20 || next > 0x7e) return start + 1
  let index = start + 1
  while (index < text.length && text.charCodeAt(index) >= 0x20 && text.charCodeAt(index) <= 0x2f) index += 1
  return index < text.length && text.charCodeAt(index) >= 0x30 && text.charCodeAt(index) <= 0x7e ? index + 1 : start + 1
}

function isC1SequenceStart(code: number): boolean {
  return code === C1_CSI || code === C1_OSC || code === C1_DCS || code === C1_SOS || code === C1_PM || code === C1_APC
}

function c1SequenceEnd(text: string, start: number): number {
  const kind = text.charCodeAt(start)
  if (kind === C1_CSI) return csiEnd(text, start + 1)
  if (kind === C1_OSC || kind === C1_DCS || kind === C1_SOS || kind === C1_PM || kind === C1_APC) {
    return stringSequenceEnd(text, start + 1)
  }
  return start + 1
}

function csiEnd(text: string, from: number): number {
  for (let index = from; index < text.length; index += 1) {
    const code = text.charCodeAt(index)
    if (code >= 0x40 && code <= 0x7e) return index + 1
  }
  return text.length
}

function stringSequenceEnd(text: string, from: number): number {
  for (let index = from; index < text.length; index += 1) {
    const code = text.charCodeAt(index)
    if (code === BEL || code === C1_ST) return index + 1
    if (code === ESC) return text.charCodeAt(index + 1) === 0x5c ? index + 2 : index
  }
  return text.length
}

/** Offset of the terminator inside a string sequence body, or its length when unterminated. */
function stringSequenceBodyEnd(body: string): number {
  for (let index = 0; index < body.length; index += 1) {
    const code = body.charCodeAt(index)
    if (code === BEL || code === ESC || code === C1_ST) return index
  }
  return body.length
}

function normaliseSgrCodes(parameters: string): string[] {
  if (parameters === "") return ["0"]
  const tokens = parameters.split(";")
  if (
    tokens.every((token) => /^\d+$/.test(token as string)) &&
    tokens.some((token) => !isKnownSgrHead(Number.parseInt(token as string, 10)))
  ) {
    return [parameters]
  }
  const codes: string[] = []
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index] as string
    if (token === "") {
      codes.push("0")
      continue
    }
    if ((token === "38" || token === "48" || token === "58") && tokens[index + 1] === "5" && tokens[index + 2]) {
      codes.push(`${token};5;${tokens[index + 2]}`)
      index += 2
      continue
    }
    if ((token === "38" || token === "48" || token === "58") && tokens[index + 1] === "2") {
      const colorSpaceOffset = tokens[index + 2] === "" ? 1 : 0
      const end = index + 4 + colorSpaceOffset
      if (end < tokens.length && tokens.slice(index + 2 + colorSpaceOffset, end + 1).every(Boolean)) {
        codes.push(tokens.slice(index, end + 1).join(";"))
        index = end
        continue
      }
    }
    if (SGR_CODE_PATTERN.test(token) || /^\d{1,3}(?::[\d:]*)+$/.test(token)) codes.push(token)
  }
  return codes
}

function isKnownSgrHead(head: number): boolean {
  return (
    (head >= 0 && head <= 59) ||
    (head >= 73 && head <= 75) ||
    (head >= 90 && head <= 97) ||
    (head >= 100 && head <= 107)
  )
}

function sgrCategory(code: string): string | undefined {
  const head = Number.parseInt(code, 10)
  if (head === 1) return "bold"
  if (head === 2) return "faint"
  if (head === 3 || head === 20) return "italic"
  if (head === 4 || head === 21) return "underline"
  if (head === 5 || head === 6) return "blink"
  if (head === 7) return "inverse"
  if (head === 8) return "conceal"
  if (head === 9) return "strike"
  if (head >= 10 && head <= 19) return "font"
  if ((head >= 30 && head <= 38) || (head >= 90 && head <= 97)) return "foreground"
  if ((head >= 40 && head <= 48) || (head >= 100 && head <= 107)) return "background"
  if (head === 51 || head === 52) return "frame"
  if (head === 53) return "overline"
  if (head === 58) return "underlineColor"
  if (head === 73 || head === 74) return "ideogram"
  return undefined
}

function sgrResetCategory(code: string): string | "all" | undefined {
  const head = Number.parseInt(code, 10)
  if (head === 0) return "all"
  if (head === 22) return "intensity"
  if (head === 23) return "italic"
  if (head === 24) return "underline"
  if (head === 25) return "blink"
  if (head === 27) return "inverse"
  if (head === 28) return "conceal"
  if (head === 29) return "strike"
  if (head === 39) return "foreground"
  if (head === 49) return "background"
  if (head === 54) return "frame"
  if (head === 55) return "overline"
  if (head === 59) return "underlineColor"
  if (head === 75) return "ideogram"
  return undefined
}

function closeCodeFor(parameters: string): string {
  const head = Number.parseInt(parameters, 10)
  if (head === 1 || head === 2) return "22"
  if (head === 3 || head === 20) return "23"
  if (head === 4 || head === 21) return "24"
  if (head === 5 || head === 6) return "25"
  if (head === 7) return "27"
  if (head === 8) return "28"
  if (head === 9) return "29"
  if (head >= 30 && head <= 38) return "39"
  if (head >= 90 && head <= 97) return "39"
  if (head >= 40 && head <= 48) return "49"
  if (head >= 100 && head <= 107) return "49"
  if (head === 51 || head === 52) return "54"
  if (head === 53) return "55"
  if (head === 58) return "59"
  if (head === 73 || head === 74) return "75"
  return "0"
}

/** `["1", "31"]` -> `"\x1b[1m\x00\x1b[31m"`, the shape the renderer splits on `\x00`. */
function joinEscapeParts(parts: readonly string[]): string {
  return parts.map((part) => `\x1b[${part}m`).join("\x00")
}

function packRange(startColumn: number, endColumn: number, unclampedEnd: number): number {
  const start = packedInteger(startColumn) & RANGE_START_MASK
  const end = packedInteger(endColumn) & RANGE_START_MASK
  const tail = packedInteger(unclampedEnd) & RANGE_UNCLAMPED_MASK
  return end * 2 ** RANGE_END_SHIFT + start * 2 ** RANGE_START_SHIFT + tail
}

function packedInteger(column: number): number {
  return Number.isFinite(column) ? Math.trunc(column) : 0
}

function requireInt32Array(value: unknown, name: string): Int32Array {
  if (!(value instanceof Int32Array)) {
    throw new TypeError(`CellSegmenter: ${name} must be an Int32Array`)
  }
  return value
}

// ---------------------------------------------------------------------------------------
// CellSegmenter
// ---------------------------------------------------------------------------------------

export class CellSegmenter {
  #graphemes: string[] = createGraphemeTable()
  #graphemeIds = new Map<string, number>()
  #sgrKeys: string[] = [""]
  #sgrCloseKeys: string[] = [""]
  #sgrIds = new Map<string, number>([["", 0]])
  #uris: string[] = [""]
  #uriIds = new Map<string, number>([["", 0]])
  #substituteRanges: SubstituteRange[]
  #screen: ResolvedScreenOptions
  #ambiguousIsNarrow: boolean
  #segments: GraphemeSegmenter

  // Escape tables accumulate across calls; the active style and link reset per segment.
  #styleKey = ""
  #styleCloseKey = ""
  #styleId = 0
  #activeSgr = new Map<string, string>()
  #unknownSgr: string[] = []
  #linkId = 0

  #cells: CollectedCell[] = []
  #wordStyles: number[] = []
  #wordLinks: number[] = []

  constructor(options: CellSegmenterOptions = {}) {
    this.#screen = { ...DEFAULT_SCREEN_OPTIONS, ...(options.screen ?? {}) }
    this.#ambiguousIsNarrow = options.ambiguousIsNarrow !== false
    this.#substituteRanges = normaliseSubstituteRanges(options.substitute)
    this.#segments = createGraphemeSegmenter()
  }

  get graphemes(): string[] {
    return this.#graphemes
  }

  get sgrKeys(): string[] {
    return this.#sgrKeys
  }

  get sgrCloseKeys(): string[] {
    return this.#sgrCloseKeys
  }

  get uris(): string[] {
    return this.#uris
  }

  /**
   * Splits `text` into grapheme cells, consuming escape sequences into the SGR and URI tables.
   *
   * Writes `[charIndex, attributeWord]` pairs into `cells` — the attribute word holding the
   * column count in bits 0..1, the tab flag at bit 8, the substitute flag at bit 9 and the run
   * index from bit 10 — and `[styleId, linkId]` pairs into `runs`, one pair per run of cells that
   * share a style and a hyperlink. Cells reference their run through the attribute word's run
   * index, which is what the caller's run builder resolves into screen words.
   *
   * Returns the number of cells written. A negative return means the buffers were too small, and
   * `-return` is the required capacity in cells; the caller re-calls with doubled buffers.
   */
  segment(text: string, cells: Int32Array, runs: Int32Array, reordered?: boolean): number {
    requireInt32Array(cells, "cells")
    requireInt32Array(runs, "runs")
    if (typeof text !== "string" || text.length === 0) return 0

    // Escape state is per call: a segment starts unstyled and unlinked even though the SGR and
    // URI tables keep accumulating across calls (verified against the sampled corpus, where plain
    // text after escape-bearing samples still carries style id 0).
    this.#styleKey = ""
    this.#styleCloseKey = ""
    this.#styleId = 0
    this.#activeSgr.clear()
    this.#unknownSgr.length = 0
    this.#linkId = 0

    this.#collect(text)
    const words = this.#assignWords()
    if (reordered === true) reorderBidiRuns(this.#cells)
    const required = this.#cells.length
    if (cells.length < required * 2 || runs.length < words * 2) return -required

    for (let index = 0; index < required; index += 1) {
      const cell = this.#cells[index] as CollectedCell
      cells[index * 2] = cell.char
      cells[index * 2 + 1] = this.#cellAttribute(cell)
    }
    for (let word = 0; word < words; word += 1) {
      runs[word * 2] = this.#wordStyles[word] as number
      runs[word * 2 + 1] = this.#wordLinks[word] as number
    }
    // The caller reuses one `runs` buffer across frames; blank the tail so a shrinking segment
    // cannot expose the previous frame's words.
    const tailLimit = Math.min(runs.length, required * 2)
    for (let tail = words * 2; tail < tailLimit; tail += 1) {
      runs[tail] = 0
    }
    return required
  }

  /**
   * Paints a segmented run into `screenCells` at `(x, y)` and returns the packed damage range:
   * start column, end column, and the unclamped end column the cursor reached.
   *
   * `charIndices` maps grapheme-table indices to the renderer's character-pool indices and is
   * mandatory; `words` carries the packed screen words produced by the caller's run builder.
   */
  paint(
    screenCells: Int32Array,
    width: number,
    x: number,
    y: number,
    segCells: Int32Array,
    count: number,
    _charMap: Int32Array | undefined,
    charIndices: Int32Array,
    words: Int32Array,
  ): number {
    requireInt32Array(screenCells, "screenCells")
    requireInt32Array(charIndices, "charIndices")

    const screen = this.#screen
    const tabWidth = screen.tabWidth > 0 ? screen.tabWidth : DEFAULT_SCREEN_OPTIONS.tabWidth
    let column = x
    let changedStart = -1
    let changedEnd = -1

    const writeRaw = (target: number, char: number, word: number): void => {
      if (!this.#screenCellInBounds(screenCells, width, y, target)) return
      this.#writeScreenCell(screenCells, width, y, target, char, word)
      if (changedStart < 0 || target < changedStart) changedStart = target
      if (target + 1 > changedEnd) changedEnd = target + 1
    }
    const clear = (target: number): void => writeRaw(target, screen.emptyCharIndex, screen.emptyWord)
    const repairRange = (start: number, end: number): void => {
      for (let target = Math.max(0, start); target < Math.min(width, end); target += 1) {
        const oldClass = this.#screenClass(screenCells, width, y, target)
        if (oldClass === screen.wide && target + 1 >= end) clear(target + 1)
        if (oldClass === screen.spacerTail && target - 1 < start) clear(target - 1)
      }
    }
    const writeRange = (target: number, chars: readonly number[], wordsToWrite: readonly number[]): void => {
      repairRange(target, target + chars.length)
      for (let offset = 0; offset < chars.length; offset += 1) {
        writeRaw(target + offset, chars[offset] as number, wordsToWrite[offset] as number)
      }
    }

    for (let index = 0; index < count; index += 1) {
      const attribute = segCells[index * 2 + 1] as number
      if ((attribute & CELL_TAB_BIT) !== 0) {
        const next = column >= width ? column : Math.min(width, column + (tabWidth - (column % tabWidth)))
        repairRange(column, next)
        for (let target = column; target < next; target += 1) clear(target)
        column = next
        continue
      }

      const word = readWord(words, attribute >>> CELL_WORD_SHIFT)
      const style = word >>> WORD_STYLE_SHIFT
      const link = (word >>> WORD_LINK_SHIFT) & WORD_LINK_MASK
      const grapheme = segCells[index * 2] as number
      const char = (charIndices[grapheme] as number | undefined) ?? grapheme
      const columns = attribute & screen.widthMask

      if (columns >= 2) {
        if (column < 0) {
          column += columns
          continue
        }
        const head = (style << WORD_STYLE_SHIFT) | (link << WORD_LINK_SHIFT) | screen.wide
        if (column + columns <= width) {
          const tail = (style << WORD_STYLE_SHIFT) | (link << WORD_LINK_SHIFT) | screen.spacerTail
          writeRange(
            column,
            [char, ...Array.from({ length: columns - 1 }, () => screen.spacerCharIndex)],
            [head, ...Array.from({ length: columns - 1 }, () => tail)],
          )
          column += columns
          continue
        }
        repairRange(column, column + 1)
        writeRaw(
          column,
          screen.emptyCharIndex,
          (style << WORD_STYLE_SHIFT) | (link << WORD_LINK_SHIFT) | screen.spacerHead,
        )
        column += 1
        continue
      }

      writeRange(column, [char], [(style << WORD_STYLE_SHIFT) | (link << WORD_LINK_SHIFT) | screen.narrow])
      column += 1
    }

    if (changedStart < 0) return packRange(-1, 0, Math.max(0, column))
    return packRange(changedStart, changedEnd, column)
  }

  /** Writes one character-pool cell while repairing any adjacent wide-cell geometry. */
  setCell(cells: Int32Array, width: number, x: number, y: number, char: number, style?: number | undefined): number {
    requireInt32Array(cells, "cells")
    const word = typeof style === "number" ? style : 0
    const screen = this.#screen
    let changedStart = -1
    let changedEnd = -1
    const write = (target: number, nextChar: number, nextWord: number): void => {
      if (!this.#screenCellInBounds(cells, width, y, target)) return
      this.#writeScreenCell(cells, width, y, target, nextChar, nextWord)
      if (changedStart < 0 || target < changedStart) changedStart = target
      if (target + 1 > changedEnd) changedEnd = target + 1
    }
    const clear = (target: number): void => write(target, screen.emptyCharIndex, screen.emptyWord)
    const columns = (word & screen.widthMask) === screen.wide ? 2 : 1
    for (let target = x; target < x + columns; target += 1) {
      const oldClass = this.#screenClass(cells, width, y, target)
      if (oldClass === screen.wide && target + 1 >= x + columns) clear(target + 1)
      if (oldClass === screen.spacerTail && target - 1 < x) clear(target - 1)
    }
    if (columns === 2 && x >= 0 && x + 2 <= width) {
      const styleAndLink = word & ~screen.widthMask
      write(x, char, styleAndLink | screen.wide)
      write(x + 1, screen.spacerCharIndex, styleAndLink | screen.spacerTail)
    } else {
      write(x, char, word)
    }
    if (changedStart < 0) return packRange(x, x, x + 1)
    return packRange(changedStart, changedEnd, x + 1)
  }

  // -------------------------------------------------------------------------------------
  // Text collection
  // -------------------------------------------------------------------------------------

  #collect(text: string): void {
    this.#cells.length = 0
    const segments = [...this.#segments(text)]
    for (let index = 0; index < segments.length; index += 1) {
      const entry = segments[index] as { segment: string; index: number }
      const code = entry.segment.charCodeAt(0)
      if (code === ESC || isC1SequenceStart(code)) {
        const end = code === ESC ? escapeEnd(text, entry.index) : c1SequenceEnd(text, entry.index)
        if (code === ESC) this.#consumeEscape(text.slice(entry.index, end))
        else this.#consumeC1(text.slice(entry.index, end))
        while (index + 1 < segments.length && (segments[index + 1] as { index: number }).index < end) {
          index += 1
        }
        continue
      }
      this.#emitGrapheme(entry.segment)
    }
  }

  #emitGrapheme(grapheme: string): void {
    if (grapheme.charCodeAt(0) === TAB_CODE && grapheme.length === 1) {
      this.#cells.push({
        grapheme,
        char: this.#charIndexFor(grapheme),
        columns: 0,
        tab: true,
        substitute: false,
        style: this.#styleId,
        link: this.#linkId,
        word: 0,
      })
      return
    }

    const substitute = this.#isSubstituted(grapheme)
    const columns = measureColumns(grapheme, this.#ambiguousIsNarrow)
    if (!substitute && columns <= 0) {
      // Zero-width graphemes (U+200B, U+FEFF, U+FE0F, other format controls) own no cell.
      return
    }
    const capped = columns > this.#screen.widthMask ? this.#screen.widthMask : columns
    this.#cells.push({
      grapheme: substitute ? SUBSTITUTE_CHARACTER : grapheme,
      char: this.#charIndexFor(substitute ? SUBSTITUTE_CHARACTER : grapheme),
      columns: substitute && capped < 1 ? 1 : capped,
      tab: false,
      substitute,
      style: this.#styleId,
      link: this.#linkId,
      word: 0,
    })
  }

  #isSubstituted(grapheme: string): boolean {
    if (this.#substituteRanges.length === 0) return false
    for (const character of grapheme) {
      const code = character.codePointAt(0) as number
      for (const [first, last] of this.#substituteRanges) {
        if (code >= first && code <= last) return true
      }
    }
    return false
  }

  #charIndexFor(grapheme: string): number {
    if (grapheme === SPACE) return this.#screen.emptyCharIndex
    if (grapheme === "\t") return TAB_CHAR_INDEX
    if (grapheme === SUBSTITUTE_CHARACTER) return SUBSTITUTE_CHAR_INDEX
    if (grapheme.length === 1) {
      const code = grapheme.charCodeAt(0)
      if (code >= ASCII_PRINTABLE_FIRST && code <= ASCII_PRINTABLE_LAST) {
        return code - ASCII_INDEX_OFFSET
      }
    }
    const existing = this.#graphemeIds.get(grapheme)
    if (existing !== undefined) return existing
    const index = this.#graphemes.length
    this.#graphemes.push(grapheme)
    this.#graphemeIds.set(grapheme, index)
    return index
  }

  /** Folds the collected cells into runs and returns the number of runs (words) produced. */
  #assignWords(): number {
    this.#wordStyles.length = 0
    this.#wordLinks.length = 0
    let words = 0
    let previousStyle = -1
    let previousLink = -1
    for (const cell of this.#cells) {
      if (words === 0 || cell.style !== previousStyle || cell.link !== previousLink) {
        previousStyle = cell.style
        previousLink = cell.link
        this.#wordStyles.push(cell.style)
        this.#wordLinks.push(cell.link)
        cell.word = words
        words += 1
        continue
      }
      cell.word = words - 1
    }
    return words
  }

  #cellAttribute(cell: CollectedCell): number {
    let attribute = cell.word << CELL_WORD_SHIFT
    if (cell.columns > 0) attribute |= cell.columns & this.#screen.widthMask
    if (cell.tab) attribute |= CELL_TAB_BIT
    if (cell.substitute) attribute |= CELL_SUBSTITUTE_BIT
    return attribute
  }

  // -------------------------------------------------------------------------------------
  // Escape state
  // -------------------------------------------------------------------------------------

  #consumeEscape(sequence: string): void {
    const kind = sequence.charCodeAt(1)
    if (kind === 0x5b) {
      if (sequence.charCodeAt(sequence.length - 1) === 0x6d) {
        this.#applySgr(sequence.slice(2, sequence.length - 1))
      }
      return
    }
    if (kind === 0x5d) {
      const body = sequence.slice(2)
      this.#applyOsc(body.slice(0, stringSequenceBodyEnd(body)))
    }
  }

  #consumeC1(sequence: string): void {
    const kind = sequence.charCodeAt(0)
    if (kind === C1_CSI) {
      if (sequence.charCodeAt(sequence.length - 1) === 0x6d) this.#applySgr(sequence.slice(1, -1))
      return
    }
    if (kind === C1_OSC) {
      const body = sequence.slice(1)
      this.#applyOsc(body.slice(0, stringSequenceBodyEnd(body)))
    }
  }

  #applySgr(parameters: string): void {
    for (const code of normaliseSgrCodes(parameters)) {
      const reset = sgrResetCategory(code)
      if (reset === "all") {
        this.#activeSgr.clear()
        this.#unknownSgr.length = 0
        continue
      }
      if (reset !== undefined) {
        if (reset === "intensity") {
          this.#activeSgr.delete("bold")
          this.#activeSgr.delete("faint")
        } else {
          this.#activeSgr.delete(reset)
        }
        continue
      }
      const category = sgrCategory(code)
      if (category !== undefined) this.#activeSgr.set(category, code)
      else if (!this.#unknownSgr.includes(code)) this.#unknownSgr.push(code)
    }
    const codes = [...this.#activeSgr.values(), ...this.#unknownSgr]
    if (codes.length === 0) {
      this.#styleKey = ""
      this.#styleCloseKey = ""
      this.#styleId = 0
      return
    }
    this.#styleKey = codes.join("\x00")
    this.#styleCloseKey = codes.map(closeCodeFor).join("\x00")
    this.#styleId = this.#internStyle(this.#styleKey, this.#styleCloseKey)
  }

  #applyOsc(payload: string): void {
    if (!payload.startsWith("8;")) return
    const rest = payload.slice(2)
    const separator = rest.indexOf(";")
    if (separator < 0) return
    const uri = rest.slice(separator + 1)
    if (uri === "") {
      this.#linkId = 0
      return
    }
    this.#linkId = this.#internUri(uri)
  }

  #internStyle(key: string, closeKey: string): number {
    const existing = this.#sgrIds.get(key)
    if (existing !== undefined) return existing
    const index = this.#sgrKeys.length
    this.#sgrKeys.push(joinEscapeParts(key.split("\x00")))
    this.#sgrCloseKeys.push(joinEscapeParts(closeKey.split("\x00")))
    this.#sgrIds.set(key, index)
    return index
  }

  #internUri(uri: string): number {
    const existing = this.#uriIds.get(uri)
    if (existing !== undefined) return existing
    const index = this.#uris.length
    this.#uris.push(uri)
    this.#uriIds.set(uri, index)
    return index
  }

  // -------------------------------------------------------------------------------------
  // Screen writes
  // -------------------------------------------------------------------------------------

  #screenCellInBounds(screenCells: Int32Array, width: number, y: number, column: number): boolean {
    if (width <= 0 || y < 0 || column < 0 || column >= width) return false
    const index = (y * width + column) * 2
    return index >= 0 && index + 1 < screenCells.length
  }

  #screenClass(screenCells: Int32Array, width: number, y: number, column: number): number | undefined {
    if (!this.#screenCellInBounds(screenCells, width, y, column)) return undefined
    const index = (y * width + column) * 2 + 1
    return (screenCells[index] as number) & this.#screen.widthMask
  }

  #writeScreenCell(
    screenCells: Int32Array,
    width: number,
    y: number,
    column: number,
    char: number,
    word: number,
  ): boolean {
    if (width <= 0 || y < 0 || column < 0 || column >= width) return false
    const index = (y * width + column) * 2
    if (index < 0 || index + 1 >= screenCells.length) return false
    if (screenCells[index] === char && screenCells[index + 1] === word) return false
    screenCells[index] = char
    screenCells[index + 1] = word
    return true
  }
}

function readWord(words: Int32Array | undefined, index: number): number {
  if (!words || typeof words.length !== "number" || index < 0 || index >= words.length) return 0
  return words[index] as number
}

function createGraphemeTable(): string[] {
  const strings: string[] = new Array(FIRST_DYNAMIC_CHAR_INDEX)
  strings[EMPTY_CHAR_INDEX] = SPACE
  strings[SPACER_CHAR_INDEX] = ""
  for (let index = ASCII_BLOCK_FIRST; index <= ASCII_BLOCK_LAST; index += 1) {
    strings[index] = String.fromCharCode(index + ASCII_INDEX_OFFSET)
  }
  strings[TAB_CHAR_INDEX] = "\t"
  strings[SUBSTITUTE_CHAR_INDEX] = SUBSTITUTE_CHARACTER
  return strings
}

function normaliseSubstituteRanges(substitute: ReadonlyArray<readonly number[]> | undefined): SubstituteRange[] {
  if (!substitute) return [...DEFAULT_SUBSTITUTE_RANGES]
  const ranges: SubstituteRange[] = []
  for (const range of substitute) {
    const first = range[0]
    const last = range.length > 1 ? range[1] : first
    if (typeof first !== "number" || typeof last !== "number") continue
    ranges.push([first, last] as const)
  }
  return ranges
}

// ---------------------------------------------------------------------------------------
// Install
// ---------------------------------------------------------------------------------------

type BunNamespace = { ant?: Record<string, unknown> | undefined }

/**
 * Installs `Bun.ant.CellSegmenter` unless the host already exposes one, creating `Bun.ant` when
 * it is missing. Returns whether this call installed the compatibility implementation.
 */
export function installBunAntCellSegmenter(): boolean {
  const bun = (globalThis as { Bun?: BunNamespace }).Bun
  if (!bun || typeof bun !== "object") return false

  let ant = bun.ant
  if (ant === undefined || ant === null) {
    ant = {}
    try {
      bun.ant = ant
    } catch {
      try {
        Object.defineProperty(bun, "ant", { value: ant, writable: true, configurable: true })
      } catch {
        return false
      }
    }
  }
  if (typeof ant !== "object") return false
  // A real fork build (or an earlier preload of this shim) wins; never clobber it.
  if (typeof ant.CellSegmenter === "function") return false

  try {
    ant.CellSegmenter = CellSegmenter
  } catch {
    return false
  }
  Reflect.set(globalThis, CELL_SEGMENTER_DIAGNOSTICS, {
    installed: true,
    implementation: "patched-claude-code/bun-ant-cell-segmenter",
    graphemePrimitive: hostGlobals().Intl?.Segmenter ? "Intl.Segmenter" : "missing",
    widthPrimitive: hostStringWidth() ? "Bun.stringWidth" : "missing",
  })
  return true
}

try {
  if (!installBunAntCellSegmenter()) {
    Reflect.set(globalThis, CELL_SEGMENTER_DIAGNOSTICS, {
      installed: false,
      reason: "Bun.ant.CellSegmenter is already present, or Bun.ant could not be extended",
    })
  }
} catch (error) {
  // A preload must never take the CLI down; the renderer's own guard reports the missing API.
  Reflect.set(globalThis, CELL_SEGMENTER_DIAGNOSTICS, {
    installed: false,
    reason: error instanceof Error ? error.message : String(error),
  })
}
