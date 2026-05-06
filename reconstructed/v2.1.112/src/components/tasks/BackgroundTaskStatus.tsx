import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import { Box, Text } from '../../ink.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import { calculateHorizontalScrollWindow } from '../../utils/calculateHorizontalScrollWindow.js';
import type { TaskState } from '../../tasks/types.js';

type Props = {
  tasks: Record<string, TaskState>;
};

export function BackgroundTaskStatus({ tasks }: Props): ReactNode {
  const { columns } = useTerminalSize();
  const taskEntries = useMemo(
    () => Object.entries(tasks).filter(([, t]) => t.status === 'running'),
    [tasks],
  );

  if (taskEntries.length === 0) {
    return null;
  }

  const content = taskEntries
    .map(([id, t]) => `${t.name ?? id}: ${t.status}`)
    .join('  ');

  const { text, offset } = calculateHorizontalScrollWindow(content, columns - 4, {
    speed: 200,
  });

  return (
    <Box marginLeft={2}>
      <Text dimColor>
        {text.slice(offset, offset + columns - 4)}
      </Text>
    </Box>
  );
}
