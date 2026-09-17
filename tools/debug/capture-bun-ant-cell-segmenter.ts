#!/usr/bin/env bun
// Capture the private Bun.ant.CellSegmenter contract from a Claude Code binary.
// The tool launches that exact binary under a local PTY and owns its inspector process.

import { createConnection } from "node:net"
import { resolve } from "node:path"
import { valid } from "semver"
import { createCommand, runCli } from "../lib/cli"

type Args = {
  binary?: string
  version?: string
  platform?: string
  out?: string
  port: number
}

type CdpReply = {
  id?: number
  result?: {
    result?: { value?: unknown }
    exceptionDetails?: { exception?: { description?: string }; text?: string }
  }
}

type InspectorVersion = {
  "Bun-Version"?: string
}

const CAPTURE_TOOL = "tools/debug/capture-bun-ant-cell-segmenter.ts"

function parseArgs(argv: string[]): Args {
  return createCommand("capture-bun-ant-cell-segmenter")
    .requiredOption("--binary <path>", "inspected upstream standalone binary")
    .requiredOption("--version <semver>", "upstream Claude Code version")
    .requiredOption("--platform <platform>", "binary platform, e.g. linux-x64")
    .requiredOption("--out <path>", "oracle fixture output")
    .option("--port <number>", "local Bun inspector port", (value) => Number.parseInt(value, 10), 6499)
    .parse(argv, { from: "user" })
    .opts<Args>()
}

async function sha256File(path: string): Promise<string> {
  const hasher = new Bun.CryptoHasher("sha256")
  for await (const chunk of Bun.file(path).stream()) hasher.update(chunk)
  return hasher.digest("hex")
}

async function assertInspectorPortUnused(port: number): Promise<void> {
  const occupied = await new Promise<boolean>((accept) => {
    let settled = false
    const socket = createConnection({ host: "127.0.0.1", port })
    const finish = (value: boolean): void => {
      if (settled) return
      settled = true
      socket.destroy()
      accept(value)
    }
    socket.once("connect", () => finish(true))
    socket.once("error", () => finish(false))
    socket.setTimeout(1_000, () => finish(false))
  })
  if (occupied) throw new Error(`inspector port ${port} is already in use; stop the stale process first`)
}

function launchInspectedBinary(binary: string, port: number): ReturnType<typeof Bun.spawn> {
  const script = Bun.which("script")
  if (!script) throw new Error("capture requires the `script` PTY command")
  return Bun.spawn({
    cmd: [script, "-qec", `'${binary.replaceAll("'", `'\\''`)}'`, "/dev/null"],
    stdin: "pipe",
    stdout: "ignore",
    stderr: "ignore",
    env: {
      ...process.env,
      BUN_INSPECT: `ws://127.0.0.1:${port}`,
      ANTHROPIC_API_KEY: "oracle-local-stub",
      ANTHROPIC_BASE_URL: "http://127.0.0.1:9",
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1",
      CLAUDE_CODE_SKIP_PROMPT_HISTORY: "1",
      TERM: "xterm-256color",
    },
  })
}

async function connect(port: number): Promise<{ socket: WebSocket; bunVersion: string }> {
  const deadline = Date.now() + 30_000
  let inspectorVersion: InspectorVersion | undefined
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`)
      if (response.ok) {
        inspectorVersion = (await response.json()) as InspectorVersion
        break
      }
    } catch {
      // The inspected process has not opened its local listener yet.
    }
    await Bun.sleep(250)
  }
  if (!inspectorVersion) throw new Error(`Bun inspector did not listen on 127.0.0.1:${port}`)

  const socket = new WebSocket(`ws://127.0.0.1:${port}/`)
  await new Promise<void>((accept, reject) => {
    socket.addEventListener("open", () => accept(), { once: true })
    socket.addEventListener("error", () => reject(new Error("Bun inspector websocket failed")), { once: true })
  })
  return { socket, bunVersion: inspectorVersion["Bun-Version"] ?? "unknown" }
}

async function capture(socket: WebSocket): Promise<Record<string, unknown>> {
  let nextId = 1
  const pending = new Map<number, (reply: CdpReply) => void>()
  socket.addEventListener("message", (event) => {
    const reply = JSON.parse(String(event.data)) as CdpReply
    if (reply.id === undefined) return
    pending.get(reply.id)?.(reply)
    pending.delete(reply.id)
  })

  const send = (method: string, params: Record<string, unknown>): Promise<CdpReply> => {
    const id = nextId++
    return new Promise((accept) => {
      pending.set(id, accept)
      socket.send(JSON.stringify({ id, method, params }))
    })
  }

  await send("Runtime.enable", {})
  const reply = await send("Runtime.evaluate", {
    expression: PROBE,
    returnByValue: true,
    awaitPromise: true,
  })
  const evaluation = reply.result
  if (evaluation?.exceptionDetails) {
    throw new Error(
      evaluation.exceptionDetails.exception?.description ??
        evaluation.exceptionDetails.text ??
        "CellSegmenter probe failed",
    )
  }
  const raw = evaluation?.result?.value
  if (typeof raw !== "string") throw new Error("CellSegmenter probe did not return serialized JSON")
  const result = JSON.parse(raw) as Record<string, unknown>
  if (typeof result.__error === "string") throw new Error(result.__error)
  return result
}

const PROBE = String.raw`
JSON.stringify((() => {
  try {
    const C = Bun.ant.CellSegmenter;
    const qn = (style, link, width) => style << 17 | link << 2 | width;
    const options = {
      ambiguousIsNarrow: true,
      substitute: [[1564,1564],[8234,8238],[8294,8297]],
      screen: {
        widthMask: 3, narrow: 0, wide: 1, spacerTail: 2, spacerHead: 3,
        emptyCharIndex: 0, spacerCharIndex: 1, emptyWord: qn(0,0,0), tabWidth: 8
      }
    };
    const seg = new C(options);
    const corpus = [
      "", "a", "ab", "abc", "hello world", " ", "  ", "   ", "a b", "  a  ", "\t", "a\tb", "\t\t",
      "中", "中中", "a中", "中a", "中中中", "x中y", "👍", "👍👍", "👨‍💻",
      "é", "éé", "क्ष", "é", "​", "a​b", "﻿", "️", "a️b", "؜", "‪", "⁦", "a‪b",
      "[1mb[0m", "[38;5;196mr[0m", "[38;2;1;2;3mt[0m",
      "[1m[31mbo[0m", "[0m", "[1m", "a[31mb",
      "]8;;http://xlink]8;;", "line", "0123456789",
      "x".repeat(200), "中".repeat(100), "a".repeat(300)
    ];
    const samples = corpus.map((text) => {
      const cells = new Int32Array(4096), runs = new Int32Array(4096);
      const n = seg.segment(text, cells, runs, false);
      const rows = [];
      for (let index = 0; index < Math.max(n, 0); index++) {
        rows.push([String(seg.graphemes[cells[2 * index]]), cells[2 * index + 1], runs[2 * index], runs[2 * index + 1]]);
      }
      return { text, n, grew: n < 0, rows };
    });

    const capacity = [];
    for (const text of ["abc", "中中中", "x".repeat(300), "a中b", "", "x".repeat(12)]) {
      for (const size of [0, 1, 2, 8, 64]) {
        const cells = new Int32Array(size), runs = new Int32Array(size);
        try { capacity.push({ text, size, ret: seg.segment(text, cells, runs, false) }); }
        catch (error) { capacity.push({ text, size, error: String(error && error.message || error) }); }
      }
    }

    const segmentRegression = (name, text, reordered = false) => {
      const isolated = new C(options);
      const cells = new Int32Array(1024), runs = new Int32Array(1024);
      const n = isolated.segment(text, cells, runs, reordered), rows = [];
      for (let index = 0; index < Math.max(n, 0); index++) {
        const attribute = cells[2 * index + 1], run = attribute >>> 10;
        const style = runs[2 * run], link = runs[2 * run + 1];
        rows.push([
          String(isolated.graphemes[cells[2 * index]]), attribute,
          String(isolated.sgrKeys[style] ?? ""), String(isolated.sgrCloseKeys[style] ?? ""),
          String(isolated.uris[link] ?? "")
        ]);
      }
      return { name, text, reordered, n, rows };
    };
    const segmentRegressions = [
      segmentRegression("rtl-logical", "אבג", false),
      segmentRegression("rtl-reordered", "אבג", true),
      segmentRegression("mixed-reordered", "abc אבג def", true),
      segmentRegression("rtl-styled-reordered", "[31mאב[0mגד", true),
      segmentRegression("rtl-linked-reordered", "]8;;uאב]8;;גד", true),
      segmentRegression("c1-csi", "a31mb"),
      segmentRegression("c1-st", "]8;;ub"),
      segmentRegression("unsupported-emoji-modifier", "🌀🏻"),
      segmentRegression("unicode16-pictographic-zwj", "🎜‍💻"),
      segmentRegression("non-pictographic-zwj", "🏼‍💻"),
      segmentRegression("sgr-close-bold", "[1mA[22mB"),
      segmentRegression("sgr-close-color", "[31mA[39mB"),
      segmentRegression("sgr-empty-resets", "[1mA[;31mB"),
      segmentRegression("sgr-underline-color", "[58;5;7mX"),
      segmentRegression("sgr-colon-underline", "[4:3mX"),
      segmentRegression("sgr-double-underline", "[21mX"),
      segmentRegression("sgr-fraktur", "[20mX"),
      segmentRegression("sgr-font", "[10mX"),
      segmentRegression("esc-preserves-nbsp", "A xyz"),
      segmentRegression("esc-intermediate", "A-xyz")
    ];

    const paintSeg = new C(options);
    const width = 20, height = 4, paint = [];
    for (const text of ["abc", "中", "中中", "a中b", "abc中", "a", "ab cd"]) {
      for (const [x, y] of [[0,0],[1,0],[18,0],[3,2]]) {
        const cells = new Int32Array(512), runs = new Int32Array(512);
        const count = paintSeg.segment(text, cells, runs, false);
        const pool = new Map([[" ", 0], ["", 1]]); let next = 2;
        const intern = (value) => { const key = String(value); if (!pool.has(key)) pool.set(key, next++); return pool.get(key); };
        const charIndices = new Int32Array(paintSeg.graphemes.length);
        for (let index = 0; index < charIndices.length; index++) charIndices[index] = intern(paintSeg.graphemes[index]);
        const words = new Int32Array(count);
        for (let index = 0; index < count; index++) words[index] = qn(runs[2 * index], 0, 0);
        const screen = new Int32Array(width * height * 2);
        try {
          const value = Number(paintSeg.paint(screen, width, x, y, cells, count, undefined, charIndices, words));
          const written = [];
          for (let index = 0; index < width * height; index++) {
            if (screen[2 * index] || screen[2 * index + 1]) {
              written.push([index % width, Math.floor(index / width), screen[2 * index], screen[2 * index + 1]]);
            }
          }
          paint.push({
            text, x, y, v: String(value), startCol: Math.floor(value / 1048576) % 65536,
            endCol: Math.floor(value / 68719476736), written
          });
        } catch (error) {
          paint.push({ text, x, y, error: String(error && error.message || error) });
        }
      }
    }

    const paintOnce = (screen, text, x, y) => {
      const cells = new Int32Array(512), runs = new Int32Array(512);
      const count = paintSeg.segment(text, cells, runs, false);
      const pool = new Map([[" ", 0], ["", 1]]); let next = 2;
      const intern = (value) => { const key = String(value); if (!pool.has(key)) pool.set(key, next++); return pool.get(key); };
      const charIndices = new Int32Array(paintSeg.graphemes.length);
      for (let index = 0; index < charIndices.length; index++) charIndices[index] = intern(paintSeg.graphemes[index]);
      const words = new Int32Array(count);
      for (let index = 0; index < count; index++) words[index] = qn(runs[2 * index], runs[2 * index + 1], 0);
      return Number(paintSeg.paint(screen, 20, x, y, cells, count, undefined, charIndices, words));
    };
    const overlap = new Int32Array(20 * 2);
    paintOnce(overlap, "中", 0, 0);
    const overlapReturn = paintOnce(overlap, "a", 0, 0);
    const tabScreen = new Int32Array(20 * 2);
    for (let index = 0; index < 20; index++) tabScreen[2 * index] = 66 + index;
    const tabReturn = paintOnce(tabScreen, "\t", 1, 0);
    const styledScreen = new Int32Array(20 * 2);
    const styledReturn = paintOnce(styledScreen, "a[31mb[0m", 0, 0);
    const linkedScreen = new Int32Array(20 * 2);
    const linkedReturn = paintOnce(linkedScreen, "]8;;uab]8;;", 0, 0);
    const substituteScreen = new Int32Array(20 * 2);
    const substituteReturn = paintOnce(substituteScreen, "؜", 0, 0);
    const clipped = new Int32Array(4 * 2);
    const clippedCells = new Int32Array(16), clippedRuns = new Int32Array(16);
    const clippedCount = paintSeg.segment("中", clippedCells, clippedRuns, false);
    const clippedMap = new Int32Array(paintSeg.graphemes.length);
    clippedMap[paintSeg.graphemes.indexOf("中")] = 98;
    const clippedReturn = Number(paintSeg.paint(clipped, 4, -1, 0, clippedCells, clippedCount, undefined, clippedMap, new Int32Array([0])));
    const setWide = new Int32Array([66,0,67,0,0,0,0,0]);
    const setWideReturn = Number(paintSeg.setCell(setWide, 4, 0, 0, 1098, 1));
    const setNarrow = new Int32Array([1098,1,1,2,0,0,0,0]);
    const setNarrowReturn = Number(paintSeg.setCell(setNarrow, 4, 0, 0, 1066, 0));
    const paintRegressions = {
      wideThenNarrow: { v: String(overlapReturn), screen: Array.from(overlap) },
      tabOverContent: { v: String(tabReturn), screen: Array.from(tabScreen) },
      styledRuns: { v: String(styledReturn), screen: Array.from(styledScreen) },
      linkedRun: { v: String(linkedReturn), screen: Array.from(linkedScreen) },
      substitute: { v: String(substituteReturn), screen: Array.from(substituteScreen) },
      clippedWide: { v: String(clippedReturn), screen: Array.from(clipped) },
      setWide: { v: String(setWideReturn), screen: Array.from(setWide) },
      setNarrowOverWide: { v: String(setNarrowReturn), screen: Array.from(setNarrow) }
    };

    return {
      introspection: {
        antKeys: Object.getOwnPropertyNames(Bun.ant),
        constructorLength: C.length,
        prototypeNames: Object.getOwnPropertyNames(C.prototype)
      },
      corpus: samples,
      segmentRegressions,
      capacity,
      tables: {
        sgrKeys: Array.from(seg.sgrKeys ?? []).map(String),
        sgrCloseKeys: Array.from(seg.sgrCloseKeys ?? []).map(String),
        uris: Array.from(seg.uris ?? []).map(String)
      },
      paint,
      paintRegressions,
      width,
      height
    };
  } catch (error) {
    return { __error: String(error && error.stack || error) };
  }
})())
`

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2))
  if (!args.binary || !args.version || !args.platform || !args.out) throw new Error("missing required argument")
  if (!valid(args.version)) throw new Error(`invalid upstream version: ${args.version}`)
  if (!Number.isInteger(args.port) || args.port < 1 || args.port > 65535) throw new Error(`invalid port: ${args.port}`)

  const binary = resolve(args.binary)
  const output = resolve(args.out)
  await assertInspectorPortUnused(args.port)
  const inspected = launchInspectedBinary(binary, args.port)
  try {
    const [{ socket, bunVersion }, nativeBinarySha256] = await Promise.all([connect(args.port), sha256File(binary)])
    try {
      const payload = await capture(socket)
      const fixture = {
        schema: 1,
        source: {
          upstreamVersion: args.version,
          platform: args.platform,
          bunVersion,
          nativeBinarySha256,
          captureTool: CAPTURE_TOOL,
        },
        ...payload,
      }
      await Bun.write(output, `${JSON.stringify(fixture, null, 2)}\n`)
      console.error(`captured CellSegmenter oracle: ${output}`)
      return 0
    } finally {
      socket.close()
    }
  } finally {
    inspected.kill()
    await inspected.exited
  }
}

if (import.meta.main) await runCli(main)
