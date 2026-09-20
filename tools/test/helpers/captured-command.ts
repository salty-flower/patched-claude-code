export type CapturedCommand = {
  exitCode: number
  stdout: string
  stderr: string
}

export type CaptureCommandOptions = {
  cmd: string[]
  cwd: string
  env?: Record<string, string | undefined>
  timeoutMs: number
  label: string
}

export async function captureCommand(options: CaptureCommandOptions): Promise<CapturedCommand> {
  const subprocess = Bun.spawn({
    cmd: options.cmd,
    cwd: options.cwd,
    ...(options.env ? { env: options.env } : {}),
    detached: true,
    stdout: "pipe",
    stderr: "pipe",
  })
  let timedOut = false
  const watchdog = setTimeout(() => {
    timedOut = true
    try {
      process.kill(-subprocess.pid, "SIGKILL")
    } catch {
      subprocess.kill("SIGKILL")
    }
  }, options.timeoutMs)
  const stdoutPromise = new Response(subprocess.stdout).text()
  const stderrPromise = new Response(subprocess.stderr).text()
  try {
    const [exitCode, stdout, stderr] = await Promise.all([subprocess.exited, stdoutPromise, stderrPromise])
    if (timedOut) {
      throw new Error(
        `${options.label} timed out after ${options.timeoutMs}ms\nstdout:\n${stdout}\nstderr:\n${stderr}`,
      )
    }
    return { exitCode, stdout, stderr }
  } finally {
    clearTimeout(watchdog)
  }
}
