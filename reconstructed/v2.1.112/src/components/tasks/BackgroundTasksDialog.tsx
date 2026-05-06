import type { ReactNode } from 'react';
import React, { useMemo, useState } from 'react';
import { Box, Text } from '../../ink.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { TaskState } from '../../tasks/types.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { getTaskStatusIcon, getTaskStatusColor } from './taskStatusUtils.js';

type Props = {
  tasks: Record<string, TaskState>;
  onDismiss: () => void;
  onSelectTask: (taskId: string) => void;
};

export function BackgroundTasksDialog({
  tasks,
  onDismiss,
  onSelectTask,
}: Props): ReactNode {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const taskEntries = useMemo(
    () => Object.entries(tasks).filter(([, t]) => t.status === 'running'),
    [tasks],
  );

  useKeybindings({
    'confirm:no': onDismiss,
    up: () =>
      setSelectedIndex((i) => Math.max(0, i - 1)),
    down: () =>
      setSelectedIndex((i) =>
        Math.min(taskEntries.length - 1, i + 1),
      ),
    'confirm:yes': () => {
      const entry = taskEntries[selectedIndex];
      if (entry) onSelectTask(entry[0]);
    },
  });

  if (taskEntries.length === 0) {
    return (
      <Dialog title="Background Tasks" onCancel={onDismiss} hideInputGuide>
        <Text dimColor>No background tasks running</Text>
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Dialog>
    );
  }

  return (
    <Dialog title="Background Tasks" onCancel={onDismiss} hideInputGuide>
      <Box flexDirection="column" gap={1}>
        {taskEntries.map(([id, task], i) => {
          const isSelected = i === selectedIndex;
          const color = getTaskStatusColor(task.status);
          return (
            <Box
              key={id}
              flexDirection="row"
              gap={1}
              backgroundColor={
                isSelected ? 'suggestion' : undefined
              }
            >
              <Text color={color}>
                {getTaskStatusIcon(task.status)}
              </Text>
              <Text bold={isSelected}>{task.name ?? id}</Text>
              <Text dimColor>{task.status}</Text>
            </Box>
          );
        })}
        <Box marginTop={1} flexDirection="row" gap={2}>
          <KeyboardShortcutHint chord="↑↓" action="navigate" />
          <KeyboardShortcutHint chord="Enter" action="confirm:yes" />
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}
