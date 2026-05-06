import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from '../../ink.js';
import { useElapsedTime } from '../../hooks/useElapsedTime.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { InProcessTeammateTaskState } from '../../tasks/InProcessTeammateTask/types.js';
import type { DeepImmutable } from '../../types/utils.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { getTaskStatusIcon, getTaskStatusColor } from './taskStatusUtils.js';

type Props = {
  task: DeepImmutable<InProcessTeammateTaskState>;
  onDismiss: () => void;
};

export function AsyncAgentDetailDialog({ task, onDismiss }: Props): ReactNode {
  const elapsed = useElapsedTime(task.startTime);
  useKeybindings({
    'confirm:no': onDismiss,
  });

  const statusColor = getTaskStatusColor(task.status, {
    isIdle: task.isIdle,
    awaitingApproval: task.awaitingPlanApproval,
    hasError: task.hasError,
    shutdownRequested: task.shutdownRequested,
  });

  return (
    <Dialog
      title={`Agent: ${task.name}`}
      color={statusColor}
      onCancel={onDismiss}
      hideInputGuide
    >
      <Box flexDirection="column" gap={1}>
        <Text>
          {getTaskStatusIcon(task.status, {
            isIdle: task.isIdle,
            awaitingApproval: task.awaitingPlanApproval,
            hasError: task.hasError,
            shutdownRequested: task.shutdownRequested,
          })}{' '}
          {task.status}
        </Text>
        <Text dimColor>Running for {elapsed}</Text>
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}
