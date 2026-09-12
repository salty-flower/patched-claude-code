export function emptyPrompt(line: string): boolean {
  return /^\s*❯\s*$/.test(line)
}

export function effortCommandResult(screen: string, command: string): string | undefined {
  const position = screen.lastIndexOf(`❯ ${command}`)
  if (position === -1) return undefined
  const after = screen.slice(position + command.length + 2)
  return after.match(
    /⎿[^\S\n]+(?:Current effort level:|Set effort to|Reset effort to|Set model to|Not applied:)[^\n]*(?:\n {4,}[^\n]+)*/,
  )?.[0]
}

// Cursor-line acknowledgement prevents a historical transcript echo or a
// disappearing dialog from being mistaken for an input-ready prompt.
export async function submitPtyText(
  input: {
    line(): string
    key(value: string): Promise<void>
    waitFor(predicate: () => boolean, description: string): Promise<void>
  },
  text: string,
): Promise<void> {
  if (!text || /[\r\n]/.test(text) || text.includes("\x1b")) {
    throw new Error("PTY submission must be one nonempty line without escapes")
  }
  await input.waitFor(() => emptyPrompt(input.line()), `input prompt not ready for ${text}`)
  await input.key(`\x1b[200~${text}\x1b[201~`)
  await input.waitFor(() => input.line().trim() === `❯ ${text}`, `input did not echo ${text}`)
  await input.key("\r")
}
