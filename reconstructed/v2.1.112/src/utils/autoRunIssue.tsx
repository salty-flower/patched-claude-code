import * as React from 'react'
import { useEffect, useRef } from 'react'
import { KeyboardShortcutHint } from '../components/design-system/KeyboardShortcutHint.js'
import { Box, Text } from '../ink.js'
import { useKeybinding } from '../keybindings/useKeybinding.js'

type Props = {
  onRun: () => void
  onCancel: () => void
  reason: string
}

/**
 * Component that shows a notification about running /issue command
 * with the ability to cancel via ESC key
 *
 * v112: KeyboardShortcutHint now uses `chord` prop instead of `shortcut` prop;
 * action="cancel" preserved.
 */
export function AutoRunIssueNotification({
  onRun,
  onCancel,
  reason,
}: Props): React.ReactNode {
  const hasRunRef = useRef(false)

  // Handle ESC key to cancel
  useKeybinding('confirm:no', onCancel, { context: 'Confirmation' })

  // Run /issue immediately on mount
  useEffect(() => {
    if (!hasRunRef.current) {
      hasRunRef.current = true
      onRun()
    }
  }, [onRun])

  return (
    <Box flexDirection="column" marginTop={1}>
      <Box>
        <Text bold>Running feedback capture...</Text>
      </Box>
      <Box>
        <Text dimColor>
          Press <KeyboardShortcutHint chord="escape" action="cancel" /> anytime
        </Text>
      </Box>
      <Box>
        <Text dimColor>Reason: {reason}</Text>
      </Box>
    </Box>
  )
}

export type AutoRunIssueReason = 'feedback_survey_bad' | 'feedback_survey_good'

/**
 * Determines if /issue should auto-run for Ant users
 * v112: always returns false (external build)
 */
export function shouldAutoRunIssue(_reason: AutoRunIssueReason): boolean {
  return false
}

/**
 * Returns the appropriate command to auto-run based on the reason
 * ANT-ONLY: good-claude command only exists in ant builds
 * v112: always returns '/issue' (external build)
 */
export function getAutoRunCommand(_reason: AutoRunIssueReason): string {
  return '/issue'
}

/**
 * Gets a human-readable description of why /issue is being auto-run
 */
export function getAutoRunIssueReasonText(reason: AutoRunIssueReason): string {
  switch (reason) {
    case 'feedback_survey_bad':
      return 'You responded "Bad" to the feedback survey'
    case 'feedback_survey_good':
      return 'You responded "Good" to the feedback survey'
    default:
      return 'Unknown reason'
  }
}
