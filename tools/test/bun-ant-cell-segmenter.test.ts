import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { lt } from "semver"
import { targetVersion } from "../lib/target"
// Side-effect import: installs `Bun.ant.CellSegmenter` into this runtime, which
// stock bun does not provide.
import "../../runtime/bun-ant-cell-segmenter"

/**
 * Differential test against a fixture captured from the upstream bun fork.
 *
 * The fixture was sampled by attaching a debugger to the 2.1.281 standalone
 * binary and evaluating the real `Bun.ant.CellSegmenter` over a corpus. The
 * original 2.1.273 contract investigation is recorded in
 * docs/records/2026-09-17-bun-ant-cell-segmenter-contract.md. It is the
 * only source of truth for behaviour the host runtime does not document, so the
 * comparison is denormalized: raw cell indices are mapped back to grapheme
 * strings before comparing, because the fork's index space is an internal
 * first-seen ordering that this implementation need not reproduce.
 */

const FIXTURE = join(import.meta.dir, "fixtures", "bun-ant-cell-segmenter-oracle.json")

type Row = [string, number, number, number]
type Sample = { text: string; n: number; grew: boolean; rows: Row[] }
type CapacityCase = { text: string; size: number; ret?: number; error?: string }
type PaintCase = {
  text: string
  x: number
  y: number
  v?: string
  startCol?: number
  endCol?: number
  written?: Array<[number, number, number, number]>
  error?: string
}
type SegmentRegression = {
  name: string
  text: string
  reordered: boolean
  n: number
  rows: Array<[string, number, string, string, string]>
}
type PaintRegression = { v: string; screen: number[] }
type Fixture = {
  schema: 1
  source: {
    upstreamVersion: string
    platform: string
    bunVersion: string
    nativeBinarySha256: string
    captureTool: string
  }
  corpus: Sample[]
  segmentRegressions: SegmentRegression[]
  capacity: CapacityCase[]
  tables: { sgrKeys: string[]; sgrCloseKeys: string[]; uris: string[] }
  paint: PaintCase[]
  paintRegressions: {
    wideThenNarrow: PaintRegression
    tabOverContent: PaintRegression
    styledRuns: PaintRegression
    linkedRun: PaintRegression
    substitute: PaintRegression
    clippedWide: PaintRegression
    setWide: PaintRegression
    setNarrowOverWide: PaintRegression
  }
  width: number
  height: number
}

const fixture = JSON.parse(readFileSync(FIXTURE, "utf8")) as Fixture
const activeTarget = targetVersion()
const oracleTest = test.skipIf(activeTarget !== fixture.source.upstreamVersion)

const qn = (n: number, s: number, u: number): number => (n << 17) | (s << 2) | u
const OPTIONS = {
  ambiguousIsNarrow: true,
  substitute: [
    [1564, 1564],
    [8234, 8238],
    [8294, 8297],
  ],
  screen: {
    widthMask: 3,
    narrow: 0,
    wide: 1,
    spacerTail: 2,
    spacerHead: 3,
    emptyCharIndex: 0,
    spacerCharIndex: 1,
    emptyWord: qn(0, 0, 0),
    tabWidth: 8,
  },
}

type Segmenter = {
  graphemes: string[]
  sgrKeys: string[]
  sgrCloseKeys: string[]
  uris: string[]
  segment(text: string, cells: Int32Array, runs: Int32Array, reordered: boolean): number
  setCell(cells: Int32Array, width: number, x: number, y: number, char: number, style?: number): number
  paint(
    screen: Int32Array,
    width: number,
    x: number,
    y: number,
    cells: Int32Array,
    count: number,
    charMap: undefined,
    charIndices: Int32Array,
    words: Int32Array,
  ): number
}

const makeSegmenter = (): Segmenter =>
  new (Bun as unknown as { ant: { CellSegmenter: new (options: unknown) => Segmenter } }).ant.CellSegmenter(OPTIONS)

const segmentRows = (
  seg: Segmenter,
  text: string,
  reordered: boolean,
): { n: number; rows: SegmentRegression["rows"] } => {
  const cells = new Int32Array(4096)
  const runs = new Int32Array(4096)
  const n = seg.segment(text, cells, runs, reordered)
  const rows: SegmentRegression["rows"] = []
  for (let index = 0; index < Math.max(n, 0); index += 1) {
    const attribute = cells[2 * index + 1] as number
    const run = attribute >>> 10
    const style = runs[2 * run] as number
    const link = runs[2 * run + 1] as number
    rows.push([
      String(seg.graphemes[cells[2 * index]]),
      attribute,
      String(seg.sgrKeys[style] ?? ""),
      String(seg.sgrCloseKeys[style] ?? ""),
      String(seg.uris[link] ?? ""),
    ])
  }
  return { n, rows }
}

test.skipIf(lt(activeTarget, fixture.source.upstreamVersion))(
  "oracle fixture is bound to the active target and capture tool",
  () => {
    expect(fixture.schema).toBe(1)
    expect(fixture.source.upstreamVersion).toBe(targetVersion())
    expect(fixture.source.platform).toBe("darwin-arm64")
    expect(fixture.source.bunVersion).toBe("1.4.3")
    expect(fixture.source.nativeBinarySha256).toMatch(/^[0-9a-f]{64}$/)
    expect(fixture.source.captureTool).toBe("tools/debug/capture-bun-ant-cell-segmenter.ts")
  },
)

test("installs Bun.ant.CellSegmenter into a runtime that lacks it", () => {
  const ant = (Bun as unknown as { ant?: Record<string, unknown> }).ant
  expect(ant).toBeDefined()
  expect(typeof ant?.CellSegmenter).toBe("function")
})

oracleTest("segment reproduces the sampled corpus", () => {
  const seg = makeSegmenter()
  const failures: string[] = []
  for (const sample of fixture.corpus) {
    const cells = new Int32Array(4096)
    const runs = new Int32Array(4096)
    const n = seg.segment(sample.text, cells, runs, false)
    if (n !== sample.n) {
      failures.push(`${JSON.stringify(sample.text.slice(0, 24))}: count ${n} != ${sample.n}`)
      continue
    }
    const graphemes = seg.graphemes
    for (let p = 0; p < n; p += 1) {
      const actual: Row = [String(graphemes[cells[2 * p]]), cells[2 * p + 1], runs[2 * p], runs[2 * p + 1]]
      const expected = sample.rows[p]
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        failures.push(
          `${JSON.stringify(sample.text.slice(0, 24))}[${p}]: ${JSON.stringify(actual)} != ${JSON.stringify(expected)}`,
        )
      }
    }
  }
  expect(failures).toEqual([])
})

oracleTest("segment reproduces reordered, control, Unicode, and SGR regressions", () => {
  const failures: string[] = []
  for (const expected of fixture.segmentRegressions) {
    const actual = segmentRows(makeSegmenter(), expected.text, expected.reordered)
    if (actual.n !== expected.n || JSON.stringify(actual.rows) !== JSON.stringify(expected.rows)) {
      failures.push(
        `${expected.name}: ${JSON.stringify(actual)} != ${JSON.stringify({ n: expected.n, rows: expected.rows })}`,
      )
    }
  }
  expect(failures).toEqual([])
})

oracleTest("segment reports the required capacity for an undersized buffer", () => {
  const seg = makeSegmenter()
  const failures: string[] = []
  for (const testCase of fixture.capacity) {
    const cells = new Int32Array(testCase.size)
    const runs = new Int32Array(testCase.size)
    try {
      const ret = seg.segment(testCase.text, cells, runs, false)
      if (testCase.error !== undefined) {
        failures.push(
          `${JSON.stringify(testCase.text)} size=${testCase.size}: expected error ${testCase.error}, got ${ret}`,
        )
      } else if (testCase.ret !== undefined && ret !== testCase.ret) {
        failures.push(`${JSON.stringify(testCase.text)} size=${testCase.size}: ${ret} != ${testCase.ret}`)
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      if (testCase.error === undefined || message !== testCase.error) {
        failures.push(
          `${JSON.stringify(testCase.text)} size=${testCase.size}: error ${message} != ${testCase.error ?? "no error"}`,
        )
      }
    }
  }
  expect(failures).toEqual([])
})

oracleTest("SGR tables match the sampled pairs", () => {
  const seg = makeSegmenter()
  for (const sample of fixture.corpus) {
    const cells = new Int32Array(4096)
    const runs = new Int32Array(4096)
    seg.segment(sample.text, cells, runs, false)
  }
  expect(seg.sgrKeys).toEqual(fixture.tables.sgrKeys)
  expect(seg.sgrCloseKeys).toEqual(fixture.tables.sgrCloseKeys)
  expect(seg.uris).toEqual(fixture.tables.uris)
})

oracleTest("paint reproduces the sampled screen writes and packed ranges", () => {
  const seg = makeSegmenter()
  const W = fixture.width
  const H = fixture.height
  const failures: string[] = []
  for (const testCase of fixture.paint) {
    const sc = new Int32Array(512)
    const rn = new Int32Array(512)
    const count = seg.segment(testCase.text, sc, rn, false)
    // charMap is indexed by GRAPHEME index, not by cell position, and its values
    // come from a pool that preloads " " -> 0 and "" -> 1 (Wf semantics). This
    // mirrors Dd.charIndices().
    const graphemes = seg.graphemes
    const pool = new Map<string, number>([
      [" ", 0],
      ["", 1],
    ])
    let nextIndex = 2
    const intern = (value: string): number => {
      const key = String(value)
      if (!pool.has(key)) pool.set(key, nextIndex++)
      return pool.get(key) as number
    }
    const charIndices = new Int32Array(graphemes.length)
    for (let i = 0; i < graphemes.length; i += 1) charIndices[i] = intern(graphemes[i])
    const words = new Int32Array(count)
    for (let i = 0; i < count; i += 1) words[i] = qn(rn[2 * i], 0, 0)
    const screen = new Int32Array(W * H * 2)
    let v: number
    try {
      v = seg.paint(screen, W, testCase.x, testCase.y, sc, count, undefined, charIndices, words)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      if (testCase.error === undefined || message !== testCase.error) {
        failures.push(
          `${JSON.stringify(testCase.text)} @(${testCase.x},${testCase.y}): error ${message} != ${testCase.error ?? "no error"}`,
        )
      }
      continue
    }
    if (testCase.error !== undefined) {
      failures.push(`${JSON.stringify(testCase.text)} @(${testCase.x},${testCase.y}): expected error ${testCase.error}`)
      continue
    }
    if (testCase.v !== undefined && String(v) !== testCase.v) {
      failures.push(
        `${JSON.stringify(testCase.text)} @(${testCase.x},${testCase.y}): packed ${String(v)} != ${testCase.v}`,
      )
    }
    const startCol = Math.floor(v / 1048576) % 65536
    const endCol = Math.floor(v / 68719476736)
    if (startCol !== testCase.startCol || endCol !== testCase.endCol) {
      failures.push(
        `${JSON.stringify(testCase.text)} @(${testCase.x},${testCase.y}): range [${startCol},${endCol}) != [${testCase.startCol},${testCase.endCol})`,
      )
    }
    const written: Array<[number, number, number, number]> = []
    for (let i = 0; i < W * H; i += 1) {
      if (screen[2 * i] || screen[2 * i + 1]) written.push([i % W, Math.floor(i / W), screen[2 * i], screen[2 * i + 1]])
    }
    if (JSON.stringify(written) !== JSON.stringify(testCase.written)) {
      failures.push(
        `${JSON.stringify(testCase.text)} @(${testCase.x},${testCase.y}): writes ${JSON.stringify(written)} != ${JSON.stringify(testCase.written)}`,
      )
    }
  }
  expect(failures).toEqual([])
})

oracleTest("paint and setCell repair wide cells, tabs, and clipping", () => {
  const seg = makeSegmenter()
  const paintOnce = (screen: Int32Array, width: number, text: string, x: number): number => {
    const cells = new Int32Array(512)
    const runs = new Int32Array(512)
    const count = seg.segment(text, cells, runs, false)
    const pool = new Map<string, number>([
      [" ", 0],
      ["", 1],
    ])
    let next = 2
    const intern = (value: string): number => {
      if (!pool.has(value)) pool.set(value, next++)
      return pool.get(value) as number
    }
    const charIndices = new Int32Array(seg.graphemes.length)
    for (let index = 0; index < charIndices.length; index += 1)
      charIndices[index] = intern(String(seg.graphemes[index]))
    const words = new Int32Array(count)
    for (let index = 0; index < count; index += 1)
      words[index] = qn(runs[2 * index] as number, runs[2 * index + 1] as number, 0)
    return seg.paint(screen, width, x, 0, cells, count, undefined, charIndices, words)
  }
  const actual: Fixture["paintRegressions"] = {
    wideThenNarrow: (() => {
      const screen = new Int32Array(20 * 2)
      paintOnce(screen, 20, "中", 0)
      return { v: String(paintOnce(screen, 20, "a", 0)), screen: [...screen] }
    })(),
    tabOverContent: (() => {
      const screen = new Int32Array(20 * 2)
      for (let index = 0; index < 20; index += 1) screen[2 * index] = 66 + index
      return { v: String(paintOnce(screen, 20, "\t", 1)), screen: [...screen] }
    })(),
    styledRuns: (() => {
      const screen = new Int32Array(20 * 2)
      return { v: String(paintOnce(screen, 20, "a[31mb[0m", 0)), screen: [...screen] }
    })(),
    linkedRun: (() => {
      const screen = new Int32Array(20 * 2)
      return { v: String(paintOnce(screen, 20, "]8;;uab]8;;", 0)), screen: [...screen] }
    })(),
    substitute: (() => {
      const screen = new Int32Array(20 * 2)
      return { v: String(paintOnce(screen, 20, "؜", 0)), screen: [...screen] }
    })(),
    clippedWide: (() => {
      const screen = new Int32Array(4 * 2)
      return { v: String(paintOnce(screen, 4, "中", -1)), screen: [...screen] }
    })(),
    setWide: (() => {
      const screen = new Int32Array([66, 0, 67, 0, 0, 0, 0, 0])
      return { v: String(seg.setCell(screen, 4, 0, 0, 1098, 1)), screen: [...screen] }
    })(),
    setNarrowOverWide: (() => {
      const screen = new Int32Array([1098, 1, 1, 2, 0, 0, 0, 0])
      return { v: String(seg.setCell(screen, 4, 0, 0, 1066, 0)), screen: [...screen] }
    })(),
  }
  expect(actual).toEqual(fixture.paintRegressions)
})

oracleTest("setCell reports only in-bounds writes", () => {
  const seg = makeSegmenter()
  const screen = new Int32Array(4 * 2 * 2)
  const changed = seg.setCell(screen, 4, 2, 1, 7, 11)
  expect(screen[12]).toBe(7)
  expect(screen[13]).toBe(11)
  expect(Math.floor(changed / 1048576) % 65536).toBe(2)
  expect(Math.floor(changed / 68719476736)).toBe(3)

  const before = [...screen]
  const outside = seg.setCell(screen, 4, 0, 2, 9, 13)
  expect([...screen]).toEqual(before)
  expect(Math.floor(outside / 1048576) % 65536).toBe(0)
  expect(Math.floor(outside / 68719476736)).toBe(0)
})
