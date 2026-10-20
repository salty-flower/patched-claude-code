// This fixture never repeats a slash command between two successful unique probes.
// Scope result parsing to the latest probe instead of counting viewport rows.
export class ModelEffortCommandFreshness {
  private probe: string | undefined
  private commands = new Set<string>()
  private initialCommandUsed = false

  completeProbe(marker: string): void {
    this.probe = marker
    this.commands.clear()
  }

  begin(screen: string, command: string): (screen: string) => string | undefined {
    const anchor = this.probe
    if (this.commands.has(command)) throw new Error(`repeated command without a fresh probe: ${command}`)
    if (anchor === undefined) {
      if (this.initialCommandUsed || screen.includes(`❯ ${command}`)) {
        throw new Error("unanchored command is only allowed once in a new session without matching history")
      }
      this.initialCommandUsed = true
    }
    this.commands.add(command)
    return (current) => {
      if (anchor === undefined) return current
      const at = current.lastIndexOf(anchor)
      return at === -1 ? undefined : current.slice(at + anchor.length)
    }
  }
}
