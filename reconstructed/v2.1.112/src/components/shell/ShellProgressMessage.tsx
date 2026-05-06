import type { ReactNode } from 'react';
import React from 'react';
import { Box, Text } from 'src/ink.js';
import stripAnsi from 'strip-ansi';
import { OffscreenFreeze } from '../OffscreenFreeze.js';
import { ShellTimeDisplay } from './ShellTimeDisplay.js';

type Props = {
  output: string;
  fullOutput: string;
  elapsedTimeSeconds: number;
  totalLines?: number;
  totalBytes?: number;
  timeoutMs?: number;
  verbose: boolean;
};

function nonEmptyLines(content: string): string[] {
  return content.split('\n').filter((line) => line.trim().length > 0);
}

export function ShellProgressMessage({
  output,
  fullOutput,
  elapsedTimeSeconds,
  totalLines,
  totalBytes,
  timeoutMs,
  verbose,
}: Props): ReactNode {
  const fullLines = nonEmptyLines(stripAnsi(fullOutput.trim()));
  const outputLines = nonEmptyLines(stripAnsi(output.trim()));
  const visibleLines = verbose ? fullLines : outputLines.slice(-5);
  const displayText = visibleLines.join('\n');

  if (!outputLines.length) {
    return (
      <OffscreenFreeze>
        <Text dimColor>Running… </Text>
        <ShellTimeDisplay
          elapsedTimeSeconds={elapsedTimeSeconds}
          timeoutMs={timeoutMs}
        />
      </OffscreenFreeze>
    );
  }

  const hiddenCount = totalLines ? Math.max(0, totalLines - 5) : 0;
  let overflowLabel = '';
  if (!verbose && totalBytes && totalLines) {
    overflowLabel = `~${totalLines} lines`;
  } else if (!verbose && hiddenCount > 0) {
    overflowLabel = `+${hiddenCount} lines`;
  }

  const height = verbose ? undefined : Math.min(5, outputLines.length);

  return (
    <OffscreenFreeze>
      <Box flexDirection="column">
        <Box height={height} flexDirection="column" overflow="hidden">
          <Text dimColor>{displayText}</Text>
        </Box>
        <Box flexDirection="row" gap={1}>
          {overflowLabel ? (
            <Text dimColor>{overflowLabel}</Text>
          ) : null}
          <ShellTimeDisplay
            elapsedTimeSeconds={elapsedTimeSeconds}
            timeoutMs={timeoutMs}
          />
          {totalBytes ? (
            <Text dimColor>{formatBytes(totalBytes)}</Text>
          ) : null}
        </Box>
      </Box>
    </OffscreenFreeze>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
