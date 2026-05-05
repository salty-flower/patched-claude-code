import { getCurrentTimezone } from './getCurrentTimezone.js'

/**
 * Format a unix timestamp (in seconds) for the brief/chat message label line.
 *
 * Display scales with age (like a messaging app):
 *   - within 24h: "1:30 pm"
 *   - older:      "Feb 20, 4:30 pm" (year added if different from current year)
 *
 * @param unixSeconds - Unix timestamp in seconds; if falsy returns undefined
 * @param showTimezone - When true, append the IANA timezone label (e.g. " (America/Los_Angeles)")
 * @param use12Hour - When true (default), format hours as 12-hour with am/pm
 */
export function formatBriefTimestamp(
  unixSeconds: number | undefined,
  showTimezone: boolean = false,
  use12Hour: boolean = true,
): string | undefined {
  if (!unixSeconds) return
  const date = new Date(unixSeconds * 1000)
  const now = new Date()
  const minute = date.getMinutes()

  const hoursAgo = (date.getTime() - now.getTime()) / 3_600_000
  if (hoursAgo > 24) {
    const opts: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: use12Hour ? 'numeric' : undefined,
      minute: !use12Hour || minute === 0 ? undefined : '2-digit',
      hour12: use12Hour ? true : undefined,
    }
    if (date.getFullYear() !== now.getFullYear()) {
      opts.year = 'numeric'
    }
    return (
      date
        .toLocaleString('en-US', opts)
        .replace(/ ([AP]M)/i, (_, ampm) => ampm.toLowerCase()) +
      (showTimezone ? ` (${getCurrentTimezone()})` : '')
    )
  }
  return (
    date
      .toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: minute === 0 ? undefined : '2-digit',
        hour12: true,
      })
      .replace(/ ([AP]M)/i, (_, ampm) => ampm.toLowerCase()) +
    (showTimezone ? ` (${getCurrentTimezone()})` : '')
  )
}

const localeCache = new Map<string, string | undefined>()

/**
 * Derive a BCP 47 locale tag from POSIX env vars.
 * LC_ALL > LC_TIME > LANG, falls back to undefined (system default).
 * Converts POSIX format (en_GB.UTF-8) to BCP 47 (en-GB).
 *
 * Result is cached per env var value to avoid repeated `new Intl.DateTimeFormat`
 * construction on the hot path.
 */
export function getLocale(): string | undefined {
  const raw =
    process.env.LC_ALL || process.env.LC_TIME || process.env.LANG || ''
  if (localeCache.has(raw)) {
    return localeCache.get(raw)
  }
  const tag = computeLocale(raw)
  localeCache.set(raw, tag)
  return tag
}

function computeLocale(raw: string): string | undefined {
  if (!raw || raw === 'C' || raw === 'POSIX') {
    return undefined
  }
  // Strip codeset (.UTF-8) and modifier (@euro), replace _ with -
  const base = raw.split('.')[0]!.split('@')[0]!
  if (!base) {
    return undefined
  }
  const tag = base.replaceAll('_', '-')
  // Validate by trying to construct an Intl locale — invalid tags throw
  try {
    new Intl.DateTimeFormat(tag)
    return tag
  } catch {
    return undefined
  }
}

/**
 * The midnight (local time) at the start of the day containing `d`,
 * returned as a unix epoch milliseconds value. Used for day-difference math.
 */
export function startOfDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}
