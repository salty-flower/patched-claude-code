import type { ReactNode } from 'react';
import React from 'react';
import { Text } from 'src/ink.js';

type Props = {
  elapsedTimeSeconds: number;
  timeoutMs?: number;
};

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  if (mins > 0) {
    return `${mins}m ${secs}s`;
  }
  return `${secs}s`;
}

export function ShellTimeDisplay({
  elapsedTimeSeconds,
  timeoutMs,
}: Props): ReactNode {
  const elapsed = formatDuration(elapsedTimeSeconds);
  if (timeoutMs) {
    const timeout = formatDuration(timeoutMs / 1000);
    return (
      <Text dimColor>
        {elapsed} / {timeout}
      </Text>
    );
  }
  return <Text dimColor>{elapsed}</Text>;
}
