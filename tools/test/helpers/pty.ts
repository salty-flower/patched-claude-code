export function shellQuote(value: string): string {
  return `'${value.replaceAll("'", "'\\''")}'`
}

export function shellEnvironment(environment: Record<string, string>): string {
  return Object.entries(environment)
    .map(([key, value]) => `${key}=${shellQuote(value)}`)
    .join(" ")
}

export function makeScriptCommand(command: string, inputCommand: string): string {
  if (process.platform === "darwin") {
    return `(${inputCommand}) | script -q -e /dev/null bash -lc ${shellQuote(command)}`
  }
  return `(${inputCommand}) | script -q -e -c ${shellQuote(command)} /dev/null`
}

export function normalizeTuiOutput(output: string): string {
  return output
    .replace(/\x1B\][^\x07]*(?:\x07|\x1B\\)/g, " ")
    .replace(/\x1B\[[0-?]*[ -/]*[@-~]/g, " ")
    .replace(/[\x00-\x1F\x7F]+/g, " ")
    .replace(/\s+/g, " ")
}
