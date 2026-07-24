export type CheckedProcessOptions = {
  cwd?: string
  env?: Record<string, string | undefined>
}

export function runChecked(command: string[], options: CheckedProcessOptions = {}): void {
  const result = Bun.spawnSync({
    cmd: command,
    cwd: options.cwd,
    env: options.env === undefined ? undefined : { ...process.env, ...options.env },
    stdout: "inherit",
    stderr: "inherit",
  })
  if (!result.success) throw commandError(command, result.exitCode)
}

export function captureChecked(command: string[], options: CheckedProcessOptions = {}): string {
  const result = Bun.spawnSync({
    cmd: command,
    cwd: options.cwd,
    env: options.env === undefined ? undefined : { ...process.env, ...options.env },
    stdout: "pipe",
    stderr: "inherit",
  })
  if (!result.success) throw commandError(command, result.exitCode)
  return result.stdout.toString().trim()
}

function commandError(command: string[], exitCode: number): Error {
  return new Error(`command failed (${exitCode}): ${command.join(" ")}`)
}
