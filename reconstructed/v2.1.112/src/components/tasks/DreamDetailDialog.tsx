import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from '../../ink.js';
import { useElapsedTime } from '../../hooks/useElapsedTime.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { DreamTaskState } from '../../tasks/DreamTask/types.js';
import type { DeepImmutable } from '../../types/utils.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';

const VISIBLE_TURNS = 6;

type Props = {
  task: DeepImmutable<DreamTaskState>;
  onDismiss: () => void;
};

export function DreamDetailDialog({ task, onDismiss }: Props): ReactNode {
  const elapsed = useElapsedTime(task.startTime);
  useKeybindings({
    'confirm:no': onDismiss,
  });

  const turns = task.turns?.slice(-VISIBLE_TURNS) ?? [];

  return (
    <Dialog
      title={`Dream: ${task.name}`}
      color="suggestion"
      onCancel={onDismiss}
      hideInputGuide
    >
      <Box flexDirection="column" gap={1}>
        <Text dimColor>Running for {elapsed}</Text>
        {turns.map((turn, i) => (
          <Box key={i} flexDirection="column">
            <Text bold>{turn.role}</Text>
            <Text>{turn.content}</Text>
          </Box>
        ))}
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}
