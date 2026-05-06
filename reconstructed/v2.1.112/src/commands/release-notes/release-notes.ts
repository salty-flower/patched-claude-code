import type { LocalCommandResult } from '../../types/command.js'

function formatReleaseNotes(notes: Array<[string, string[]]>): string {
  return notes
    .map(([version, notes]) => {
      const header = `Version ${version}:`
      const bulletPoints = notes.map(note => `· ${note}`).join('\n')
      return `${header}\n${bulletPoints}`
    })
    .join('\n\n')
}

function isEmptyContentBlocks(blocks: unknown[]): boolean {
  if (blocks.length === 0) return true
  for (const block of blocks) {
    if (typeof block !== 'object' || block === null) return false
    const b = block as Record<string, unknown>
    if (b.type !== 'text') return false
    if (b.text !== undefined && (b.text as string).trim() !== '') return false
  }
  return true
}

// TODO(lift): CHANGELOG_URL, fetchAndStoreChangelog, getAllReleaseNotes, getStoredChangelog at byte ~10958731
export async function call(): Promise<LocalCommandResult> {
  // Try to fetch the latest changelog with a 500ms timeout
  let freshNotes: Array<[string, string[]]> = []

  try {
    const timeoutPromise = new Promise<void>((_, reject) => {
      setTimeout(rej => rej(new Error('Timeout')), 500, reject)
    })

    // TODO(lift): fetchAndStoreChangelog at byte ~10958731
    await Promise.race([
      // TODO(lift): fetchAndStoreChangelog() at byte ~10958731
      Promise.resolve(),
      timeoutPromise,
    ])
    // TODO(lift): getAllReleaseNotes, getStoredChangelog at byte ~10958731
    freshNotes = []
  } catch {
    // Either fetch failed or timed out - just use cached notes
  }

  // If we have fresh notes from the quick fetch, use those
  if (freshNotes.length > 0) {
    return { type: 'text', value: formatReleaseNotes(freshNotes) }
  }

  // Otherwise check cached notes
  // TODO(lift): getAllReleaseNotes, getStoredChangelog at byte ~10958731
  const cachedNotes: Array<[string, string[]]> = []
  if (cachedNotes.length > 0) {
    return { type: 'text', value: formatReleaseNotes(cachedNotes) }
  }

  // Nothing available, show link
  return {
    type: 'text',
    value: `See the full changelog at: TODO(lift): CHANGELOG_URL at byte ~10958731`,
  }
}
