import { readFileSync } from "node:fs"
import { join } from "node:path"
import type { ClaudeApiRequest, ClaudeApiStub } from "./claude-api-stub"

/** Real supervisor -> PTY host -> spare -> session worker, with isolated HOME/config. */
export async function captureStructuredPromptDaemonRequest(options: {
  command: string[]
  cwd: string
  env: Record<string, string>
  directory: string
  stub: ClaudeApiStub
  marker: string
}): Promise<ClaudeApiRequest> {
  const jsonPath = join(options.directory, "daemon.json")
  const logPath = join(options.directory, "daemon.log")
  const stderrPath = join(options.directory, "supervisor.stderr")
  // The packaged launcher passes flags. Do not hide reexecution regressions by
  // injecting BUN_OPTIONS; the dispatcher owns preload propagation to children.
  const env = { ...process.env, ...options.env, BUN_OPTIONS: "" }
  async function run(args: string[]) {
    const child = Bun.spawn({
      cmd: [...options.command, ...args],
      cwd: options.cwd,
      env,
      stdout: "pipe",
      stderr: "pipe",
    })
    const timeout = setTimeout(() => child.kill(), 20_000)
    const [exitCode, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    clearTimeout(timeout)
    return { exitCode, stdout, stderr }
  }
  const daemon = Bun.spawn({
    cmd: [
      ...options.command,
      "daemon",
      "run",
      "--json-path",
      jsonPath,
      "--log-file",
      logPath,
      "--origin",
      "foreground",
    ],
    cwd: options.cwd,
    env,
    stdout: Bun.file(join(options.directory, "supervisor.stdout")),
    stderr: Bun.file(stderrPath),
  })
  let jobId: string | undefined
  try {
    await new Promise((resolve) => setTimeout(resolve, 1_500))
    const before = options.stub.requests.length
    const launched = await run(["--bg", "--model", "sonnet", "structured daemon prompt test"])
    jobId = launched.stdout.match(/backgrounded\s*·\s*([a-f0-9]+)/)?.[1]
    if (launched.exitCode !== 0 || !jobId)
      throw new Error(`daemon background launch failed: ${JSON.stringify(launched)}`)
    // Title generation is another real request and must not be mistaken for the
    // main session assembly under test.
    return await options.stub.waitForRequest(
      (request) =>
        request.order >= before &&
        request.path.endsWith("/messages") &&
        JSON.stringify(request.jsonBody).includes(options.marker),
      25_000,
    )
  } catch (error) {
    const log = readFileSync(logPath, "utf8")
    const stderr = readFileSync(stderrPath, "utf8")
    throw new Error(`${String(error)}\n${log}\n${stderr}`)
  } finally {
    if (jobId) await run(["stop", jobId])
    // SIGTERM alone intentionally preserves detached upstream workers.
    await run(["daemon", "stop", "--any", "--json-path", jsonPath, "--log-file", logPath])
    daemon.kill()
    await daemon.exited
  }
}
