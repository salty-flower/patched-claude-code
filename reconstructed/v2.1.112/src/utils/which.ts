import { execa } from 'execa'
import { execSync_DEPRECATED } from './execSyncWrapper.js'

// v112: whichNodeAsync and whichNodeSync completely rewritten.
// They now use execa with array args instead of shell strings.
// Windows: uses AF7() (which is 'where.exe') with array args, filters cwd.
// TODO(lift): verify AF7 / WU / YF7 / uA1 exact imports at byte ~960332

async function whichNodeAsync(command: string): Promise<string | null> {
  if (process.platform === 'win32') {
    // On Windows, use where.exe and return the first result
    // v112: uses execa('where.exe', [command]) instead of shell string
    const result = await execa('where.exe', [command], {
      reject: false,
    })
    if (result.exitCode !== 0 || !result.stdout) {
      return null
    }
    // where.exe returns multiple paths separated by newlines, return the first
    const paths = result.stdout.trim().split(/\r?\n/).filter(Boolean)
    // TODO(lift): v112 filters out cwd paths via uA1 at byte ~960332
    return paths[0] || null
  }

  // On POSIX systems (macOS, Linux, WSL), use which
  // v112: uses execa('which', [command]) instead of shell string
  const result = await execa('which', [command], {
    stderr: 'ignore',
    reject: false,
  })
  if (result.exitCode !== 0 || !result.stdout) {
    return null
  }
  return result.stdout.trim()
}

function whichNodeSync(command: string): string | null {
  if (process.platform === 'win32') {
    try {
      // v112: uses execSync_DEPRECATED('where.exe', [command]) instead of shell
      const result = execSync_DEPRECATED('where.exe', [command], {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      })
      const output = result.toString().trim()
      const paths = output.split(/\r?\n/).filter(Boolean)
      // TODO(lift): v112 filters out cwd paths via uA1 at byte ~960660
      return paths[0] || null
    } catch {
      return null
    }
  }

  try {
    // v112: uses execSync_DEPRECATED('which', [command]) instead of shell
    const result = execSync_DEPRECATED('which', [command], {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
    return result.toString().trim() || null
  } catch {
    return null
  }
}

const bunWhich =
  typeof Bun !== 'undefined' && typeof Bun.which === 'function'
    ? Bun.which
    : null

/**
 * Finds the full path to a command executable.
 * Uses Bun.which when running in Bun (fast, no process spawn),
 * otherwise spawns the platform-appropriate command.
 *
 * @param command - The command name to look up
 * @returns The full path to the command, or null if not found
 */
export const which: (command: string) => Promise<string | null> = bunWhich
  ? async command => bunWhich(command)
  : whichNodeAsync

/**
 * Synchronous version of `which`.
 *
 * @param command - The command name to look up
 * @returns The full path to the command, or null if not found
 */
export const whichSync: (command: string) => string | null =
  bunWhich ?? whichNodeSync
