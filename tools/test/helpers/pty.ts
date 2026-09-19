export function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`
}

export function shellEnvironment(environment: Record<string, string>): string {
  return Object.entries(environment)
    .map(([key, value]) => `${key}=${shellQuote(value)}`)
    .join(" ")
}

export function makeScriptCommand(command: string, inputCommand: string, outputPath = "/dev/null"): string {
  const output = shellQuote(outputPath)
  if (process.platform === "darwin") {
    return `(${inputCommand}) | script -q -e ${output} bash -lc ${shellQuote(command)}`
  }
  return `(${inputCommand}) | script -q -e -c ${shellQuote(command)} ${output}`
}

export function withProcessGroupTimeout(command: string, seconds: number): string {
  if (!Number.isSafeInteger(seconds) || seconds <= 0) {
    throw new Error(`process-group timeout must be a positive integer, got ${seconds}`)
  }
  return [
    "__pcc_timeout_group=$$",
    `(sleep ${seconds}; kill -KILL -- -"$__pcc_timeout_group") &`,
    "__pcc_timeout_watchdog=$!",
    "trap 'kill \"$__pcc_timeout_watchdog\" 2>/dev/null || true' EXIT",
    command,
    "__pcc_timeout_status=$?",
    'kill "$__pcc_timeout_watchdog" 2>/dev/null || true',
    'wait "$__pcc_timeout_watchdog" 2>/dev/null || true',
    "trap - EXIT",
    'exit "$__pcc_timeout_status"',
  ].join("\n")
}

export function timeoutCommand(seconds: number, killAfterSeconds = 5): string[] {
  return ["timeout", `--kill-after=${killAfterSeconds}s`, `${seconds}s`]
}

export function isExpectedTimeoutExitCode(exitCode: number): boolean {
  return exitCode === 124 || exitCode === 137
}

export function normalizeTuiOutput(output: string): string {
  return output
    .replace(/\x1B\][^\x07]*(?:\x07|\x1B\\)/g, " ")
    .replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, " ")
    .replace(/[\x00-\x1F\x7F]+/g, " ")
    .replace(/\s+/g, " ")
}
