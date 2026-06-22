#!/usr/bin/env bun

import * as parser from "@babel/parser"
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, join } from "node:path"

type IoStats = {
  rchar: number
  wchar: number
  read_bytes: number
  write_bytes: number
}

type Sample = {
  rssBytes: number
  cpuTicks: number
  io: IoStats
}

type Trial = {
  mode: string
  iteration: number
  wallMs: number
  cpuSeconds: number
  peakRssBytes: number
  avgRssBytes: number
  io: IoStats
  child: Record<string, unknown>
}

const ROOT = join(import.meta.dir, "..", "..")
const DEFAULT_INPUT = join(ROOT, "staging", "2.1.181", "cli.js")
const DEFAULT_CACHE = join(ROOT, "staging", "2.1.181", "bench", "cli.ast.stripped.json.zst")
const DROP_AST_KEYS = new Set(["comments", "extra", "innerComments", "leadingComments", "loc", "range", "trailingComments"])

function parseArgs(argv: string[]): { command: string; input: string; cache: string; iterations: number } {
  const args = {
    command: argv[0] ?? "bench",
    input: DEFAULT_INPUT,
    cache: DEFAULT_CACHE,
    iterations: 3,
  }
  for (let i = 1; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--input") {
      args.input = argv[++i]
    } else if (arg === "--cache") {
      args.cache = argv[++i]
    } else if (arg === "--iterations") {
      args.iterations = Number(argv[++i])
    } else if (arg === "--help" || arg === "-h") {
      printUsage()
      process.exit(0)
    } else {
      throw new Error(`unexpected argument: ${arg}`)
    }
  }
  return args
}

function printUsage(): void {
  console.log("usage: bun run tools/bench/ast-zstd-cache.ts [bench|parse|write-cache|read-cache] [--input cli.js] [--cache ast.json.zst] [--iterations 3]")
}

function parseProgram(source: string): parser.ParseResult<any> {
  const ast = parser.parse(source, {
    allowReturnOutsideFunction: true,
    errorRecovery: true,
    plugins: ["jsx", "typescript"],
    sourceType: "script",
  })
  if ((ast.errors?.length ?? 0) > 0) {
    throw new Error(`JavaScript parse failed with ${ast.errors?.length ?? 0} error(s)`)
  }
  return ast
}

function stripAst(value: unknown): unknown {
  if (!value || typeof value !== "object") return value
  if (Array.isArray(value)) return value.map(stripAst)

  const out: Record<string, unknown> = {}
  for (const [key, child] of Object.entries(value)) {
    if (DROP_AST_KEYS.has(key)) continue
    out[key] = stripAst(child)
  }
  return out
}

function runZstdCompress(json: string, cache: string): void {
  mkdirSync(dirname(cache), { recursive: true })
  const result = Bun.spawnSync({
    cmd: ["zstd", "-q", "-3", "-f", "-o", cache],
    stdin: Buffer.from(json),
    stdout: "pipe",
    stderr: "pipe",
  })
  if (!result.success) {
    throw new Error(`zstd compress failed (${result.exitCode}): ${result.stderr.toString()}`)
  }
}

function runZstdDecompress(cache: string): string {
  const result = Bun.spawnSync({
    cmd: ["zstd", "-dcq", cache],
    stdout: "pipe",
    stderr: "pipe",
  })
  if (!result.success) {
    throw new Error(`zstd decompress failed (${result.exitCode}): ${result.stderr.toString()}`)
  }
  return new TextDecoder().decode(result.stdout)
}

function runChild(command: string, input: string, cache: string): void {
  const started = performance.now()
  const sourceBytes = existsSync(input) ? statSync(input).size : 0

  if (command === "parse") {
    const source = readFileSync(input, "utf8")
    const ast = parseProgram(source)
    console.log(
      JSON.stringify({
        sourceBytes,
        programBodyLength: Array.isArray(ast.program.body) ? ast.program.body.length : null,
        elapsedMs: Math.round(performance.now() - started),
      }),
    )
    return
  }

  if (command === "write-cache") {
    const source = readFileSync(input, "utf8")
    const ast = parseProgram(source)
    const stripped = stripAst(ast)
    const json = JSON.stringify(stripped)
    runZstdCompress(json, cache)
    console.log(
      JSON.stringify({
        sourceBytes,
        strippedJsonBytes: Buffer.byteLength(json),
        cacheBytes: statSync(cache).size,
        elapsedMs: Math.round(performance.now() - started),
      }),
    )
    return
  }

  if (command === "read-cache") {
    const json = runZstdDecompress(cache)
    const ast = JSON.parse(json) as Record<string, unknown>
    const program = ast.program as Record<string, unknown> | undefined
    console.log(
      JSON.stringify({
        cacheBytes: statSync(cache).size,
        jsonBytes: Buffer.byteLength(json),
        programBodyLength: Array.isArray(program?.body) ? program.body.length : null,
        elapsedMs: Math.round(performance.now() - started),
      }),
    )
    return
  }

  throw new Error(`unknown child command: ${command}`)
}

function readProcStat(pid: number): { ppid: number; cpuTicks: number } | null {
  try {
    const stat = readFileSync(`/proc/${pid}/stat`, "utf8")
    const end = stat.lastIndexOf(")")
    const fields = stat.slice(end + 2).trim().split(/\s+/)
    const ppid = Number(fields[1])
    const utime = Number(fields[11])
    const stime = Number(fields[12])
    return { ppid, cpuTicks: utime + stime }
  } catch {
    return null
  }
}

function readProcRss(pid: number): number {
  try {
    const status = readFileSync(`/proc/${pid}/status`, "utf8")
    const match = status.match(/^VmRSS:\s+(\d+)\s+kB$/m)
    return match ? Number(match[1]) * 1024 : 0
  } catch {
    return 0
  }
}

function readProcIo(pid: number): IoStats {
  const zero = { rchar: 0, wchar: 0, read_bytes: 0, write_bytes: 0 }
  try {
    const io = readFileSync(`/proc/${pid}/io`, "utf8")
    const out: IoStats = { ...zero }
    for (const line of io.trim().split("\n")) {
      const [key, value] = line.split(": ")
      if (key === "rchar" || key === "wchar" || key === "read_bytes" || key === "write_bytes") {
        out[key] = Number(value)
      }
    }
    return out
  } catch {
    return zero
  }
}

function processTree(rootPid: number): number[] {
  const stats = new Map<number, number>()
  for (const entry of readdirSync("/proc")) {
    if (!/^\d+$/.test(entry)) continue
    const pid = Number(entry)
    const stat = readProcStat(pid)
    if (stat) stats.set(pid, stat.ppid)
  }

  const tree = new Set([rootPid])
  let changed = true
  while (changed) {
    changed = false
    for (const [pid, ppid] of stats) {
      if (!tree.has(pid) && tree.has(ppid)) {
        tree.add(pid)
        changed = true
      }
    }
  }
  return [...tree]
}

function zeroIo(): IoStats {
  return { rchar: 0, wchar: 0, read_bytes: 0, write_bytes: 0 }
}

function addIo(left: IoStats, right: IoStats): IoStats {
  return {
    rchar: left.rchar + right.rchar,
    wchar: left.wchar + right.wchar,
    read_bytes: left.read_bytes + right.read_bytes,
    write_bytes: left.write_bytes + right.write_bytes,
  }
}

function maxIo(left: IoStats, right: IoStats): IoStats {
  return {
    rchar: Math.max(left.rchar, right.rchar),
    wchar: Math.max(left.wchar, right.wchar),
    read_bytes: Math.max(left.read_bytes, right.read_bytes),
    write_bytes: Math.max(left.write_bytes, right.write_bytes),
  }
}

function sampleProcessTree(rootPid: number): { aggregate: Sample; perPid: Map<number, Sample> } {
  const perPid = new Map<number, Sample>()
  let rssBytes = 0
  let cpuTicks = 0
  let io = zeroIo()

  for (const pid of processTree(rootPid)) {
    const stat = readProcStat(pid)
    if (!stat) continue
    const sample = {
      rssBytes: readProcRss(pid),
      cpuTicks: stat.cpuTicks,
      io: readProcIo(pid),
    }
    perPid.set(pid, sample)
    rssBytes += sample.rssBytes
    cpuTicks += sample.cpuTicks
    io = addIo(io, sample.io)
  }

  return { aggregate: { rssBytes, cpuTicks, io }, perPid }
}

async function runMeasured(command: string, input: string, cache: string, iteration: number, clockTicks: number): Promise<Trial> {
  const proc = Bun.spawn({
    cmd: [process.execPath, import.meta.path, command, "--input", input, "--cache", cache],
    cwd: ROOT,
    stdout: "pipe",
    stderr: "pipe",
  })
  const started = performance.now()
  const maxByPid = new Map<number, Sample>()
  let rssSum = 0
  let sampleCount = 0
  let peakRssBytes = 0
  let exited = false
  proc.exited.then(() => {
    exited = true
  })

  while (!exited) {
    const sample = sampleProcessTree(proc.pid)
    peakRssBytes = Math.max(peakRssBytes, sample.aggregate.rssBytes)
    rssSum += sample.aggregate.rssBytes
    sampleCount++
    for (const [pid, value] of sample.perPid) {
      const previous = maxByPid.get(pid)
      maxByPid.set(pid, {
        rssBytes: Math.max(previous?.rssBytes ?? 0, value.rssBytes),
        cpuTicks: Math.max(previous?.cpuTicks ?? 0, value.cpuTicks),
        io: previous ? maxIo(previous.io, value.io) : value.io,
      })
    }
    await Bun.sleep(20)
  }

  const finalSample = sampleProcessTree(proc.pid)
  peakRssBytes = Math.max(peakRssBytes, finalSample.aggregate.rssBytes)
  for (const [pid, value] of finalSample.perPid) {
    const previous = maxByPid.get(pid)
    maxByPid.set(pid, {
      rssBytes: Math.max(previous?.rssBytes ?? 0, value.rssBytes),
      cpuTicks: Math.max(previous?.cpuTicks ?? 0, value.cpuTicks),
      io: previous ? maxIo(previous.io, value.io) : value.io,
    })
  }

  const [exitCode, stdout, stderr] = await Promise.all([
    proc.exited,
    proc.stdout ? new Response(proc.stdout).text() : "",
    proc.stderr ? new Response(proc.stderr).text() : "",
  ])
  if (exitCode !== 0) {
    throw new Error(`${command} failed (${exitCode}): ${stderr}`)
  }

  let cpuTicks = 0
  let io = zeroIo()
  for (const sample of maxByPid.values()) {
    cpuTicks += sample.cpuTicks
    io = addIo(io, sample.io)
  }

  return {
    mode: command,
    iteration,
    wallMs: Math.round(performance.now() - started),
    cpuSeconds: Number((cpuTicks / clockTicks).toFixed(2)),
    peakRssBytes,
    avgRssBytes: sampleCount === 0 ? 0 : Math.round(rssSum / sampleCount),
    io,
    child: JSON.parse(stdout.trim()) as Record<string, unknown>,
  }
}

function average(values: number[]): number {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

function summarize(trials: Trial[]): Record<string, unknown> {
  const modes = [...new Set(trials.map((trial) => trial.mode))]
  const summary: Record<string, unknown> = {}
  for (const mode of modes) {
    const group = trials.filter((trial) => trial.mode === mode)
    summary[mode] = {
      iterations: group.length,
      wallMsAvg: Math.round(average(group.map((trial) => trial.wallMs))),
      wallMsMax: Math.max(...group.map((trial) => trial.wallMs)),
      cpuSecondsAvg: Number(average(group.map((trial) => trial.cpuSeconds)).toFixed(2)),
      cpuSecondsMax: Math.max(...group.map((trial) => trial.cpuSeconds)),
      peakRssBytesAvg: Math.round(average(group.map((trial) => trial.peakRssBytes))),
      peakRssBytesMax: Math.max(...group.map((trial) => trial.peakRssBytes)),
      avgRssBytesAvg: Math.round(average(group.map((trial) => trial.avgRssBytes))),
      logicalReadBytesAvg: Math.round(average(group.map((trial) => trial.io.rchar))),
      logicalWriteBytesAvg: Math.round(average(group.map((trial) => trial.io.wchar))),
      storageReadBytesAvg: Math.round(average(group.map((trial) => trial.io.read_bytes))),
      storageWriteBytesAvg: Math.round(average(group.map((trial) => trial.io.write_bytes))),
      child: group.at(-1)?.child,
    }
  }
  return summary
}

function clockTicksPerSecond(): number {
  const result = Bun.spawnSync({ cmd: ["getconf", "CLK_TCK"], stdout: "pipe", stderr: "ignore" })
  if (!result.success) return 100
  return Number(result.stdout.toString().trim()) || 100
}

async function runBench(input: string, cache: string, iterations: number): Promise<void> {
  const clockTicks = clockTicksPerSecond()
  const trials: Trial[] = []
  for (const mode of ["parse", "write-cache", "read-cache"]) {
    if (mode === "read-cache" && !existsSync(cache)) {
      await runMeasured("write-cache", input, cache, 0, clockTicks)
    }
    for (let i = 1; i <= iterations; i++) {
      trials.push(await runMeasured(mode, input, cache, i, clockTicks))
    }
  }

  console.log(
    JSON.stringify(
      {
        input,
        cache,
        iterations,
        trials,
        summary: summarize(trials),
      },
      null,
      2,
    ),
  )
}

const args = parseArgs(process.argv.slice(2))

if (args.command === "bench") {
  await runBench(args.input, args.cache, args.iterations)
} else {
  runChild(args.command, args.input, args.cache)
}
