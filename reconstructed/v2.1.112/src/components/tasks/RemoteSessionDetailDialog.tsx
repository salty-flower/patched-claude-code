import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from '../../ink.js';
import { useElapsedTime } from '../../hooks/useElapsedTime.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { RemoteSessionTaskState } from '../../tasks/RemoteSessionTask/types.js';
import type { DeepImmutable } from '../../types/utils.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { RemoteSessionProgress } from './RemoteSessionProgress.js';

type Props = {
  task: DeepImmutable<RemoteSessionTaskState>;
  onDismiss: () => void;
};

export function RemoteSessionDetailDialog({
  task,
  onDismiss,
}: Props): ReactNode {
  const elapsed = useElapsedTime(task.startTime);
  useKeybindings({
    'confirm:no': onDismiss,
  });

  return (
    <Dialog
      title={`Remote Session: ${task.name}`}
      color="suggestion"
      onCancel={onDismiss}
      hideInputGuide
    >
      <Box flexDirection="column" gap={1}>
        <Text dimColor>Running for {elapsed}</Text>
        {task.reviewCounts && (
          <RemoteSessionProgress counts={task.reviewCounts} />
        )}
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}
