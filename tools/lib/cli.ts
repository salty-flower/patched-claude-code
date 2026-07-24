import { Command, CommanderError } from "commander"

export function createCommand(name: string): Command {
  return new Command(name).exitOverride().allowExcessArguments(false).allowUnknownOption(false).showHelpAfterError()
}

export function collectOption(value: string, values: string[]): string[] {
  values.push(value)
  return values
}

export async function runCli(main: () => number | Promise<number>): Promise<void> {
  try {
    process.exitCode = await main()
  } catch (error) {
    if (error instanceof CommanderError) {
      process.exitCode = error.exitCode
      return
    }
    throw error
  }
}
