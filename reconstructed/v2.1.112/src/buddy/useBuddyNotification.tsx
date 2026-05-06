import React, { useEffect } from 'react'
import { useNotifications } from '../context/notifications.js'
import { Text } from '../ink.js'
import { getGlobalConfig } from '../utils/config.js'
import { getRainbowColor } from '../utils/thinking.js'

// v112: Buddy teaser window logic removed. The /buddy command is now
// always available (no date gating).

// v112: RainbowText now accepts an optional phase prop for color offset.
function RainbowText({ text, phase = 0 }: { text: string; phase?: number }) {
  const chars = [...text]
  return (
    <>
      {chars.map((ch, i) => (
        <Text key={i} color={getRainbowColor(i + phase)}>
          {ch}
        </Text>
      ))}
    </>
  )
}

// v112: useBuddyNotification is a no-op. The buddy teaser notification
// was removed; /buddy is now a permanent command.
export function useBuddyNotification(): void {
  const { addNotification, removeNotification } = useNotifications()

  useEffect(() => {
    // No-op in v112 — buddy is always live, no teaser needed.
    return undefined
  }, [addNotification, removeNotification])
}

// v112: findBuddyTriggerPositions always returns empty array.
// The /buddy trigger detection moved to a different module.
export function findBuddyTriggerPositions(
  _text: string,
): Array<{ start: number; end: number }> {
  return []
}
