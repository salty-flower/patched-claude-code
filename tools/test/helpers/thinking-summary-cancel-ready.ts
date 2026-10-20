// PTY chunks can end mid-redraw after erasing the live row but before painting
// the retained virtual message. Presence and composer readiness are completion
// gates only; callers must still assert exactly one retained copy.
export function thinkingSummaryCancelReady(
  cancelled: boolean,
  composerReady: boolean,
  screen: string,
  marker: string,
): boolean {
  return cancelled && composerReady && !screen.includes("∴ Summary") && screen.includes(marker)
}
