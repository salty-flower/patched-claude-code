import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from '../../ink.js';
import { useElapsedTime } from '../../hooks/useElapsedTime.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { InProcessTeammateTaskState } from '../../tasks/InProcessTeammateTask/types.js';
import type { DeepImmutable } from '../../types/utils.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { describeTeammateActivity } from './taskStatusUtils.js';

type Props = {
  task: DeepImmutable<InProcessTeammateTaskState>;
  onDismiss: () => void;
  onForeground?: () => void;
};

export function InProcessTeammateDetailDialog({
  task,
  onDismiss,
  onForeground,
}: Props): ReactNode {
  const elapsed = useElapsedTime(task.startTime);
  useKeybindings({
    'confirm:no': onDismiss,
    ...(onForeground ? { 'confirm:yes': onForeground } : {}),
  });

  return (
    <Dialog
      title={`Teammate: ${task.name}`}
      color={task.hasError ? 'error' : task.isIdle ? 'background' : 'suggestion'}
      onCancel={onDismiss}
      hideInputGuide
    >
      <Box flexDirection="column" gap={1}>
        <Text>{describeTeammateActivity(task)}</Text>
        <Text dimColor>Running for {elapsed}</Text>
        {onForeground && (
          <Box marginTop={1}>
            <KeyboardShortcutHint chord="Enter" action="confirm:yes" />
          </Box>
        )}
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}
