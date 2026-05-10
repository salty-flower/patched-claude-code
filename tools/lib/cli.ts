import { Command } from "commander"

export function createCommand(name: string): Command {
  return new Command(name).exitOverride().allowExcessArguments(false).allowUnknownOption(false).showHelpAfterError()
}

export function collectOption(value: string, values: string[]): string[] {
  values.push(value)
  return values
}
