import * as React from 'react'
import { Box, Text } from '../../ink.js'
import type { ToolProgressData } from '../../Tool.js'
import type { ProgressMessage } from '../../types/message.js'
import type { ThemeName } from '../../utils/theme.js'
import type { Output } from './EnterWorktreeTool.js'

export function renderToolUseMessage(): React.ReactNode {
  return 'Creating worktree\u2026'
}

// v112: renderToolResultMessage now includes worktreeBranch in a conditional
// (jac=0.667 — the branch display changed from a single bold text line to
//  a conditional branch sub-row similar to ExitWorktreeTool/UI.tsx)
export function renderToolResultMessage(
  output: Output,
  _progressMessagesForMessage: ProgressMessage<ToolProgressData>[],
  _options: { theme: ThemeName },
): React.ReactNode {
  return (
    <Box flexDirection="column">
      <Text>
        Switched to worktree
        {output.worktreeBranch ? (
          <Text>
            {' '}
            on branch <Text bold>{output.worktreeBranch}</Text>
          </Text>
        ) : null}
      </Text>
      <Text dimColor>{output.worktreePath}</Text>
    </Box>
  )
}
