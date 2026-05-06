import type { ReactNode } from 'react';
import React, { Suspense, useDeferredValue } from 'react';
import { Box, Text } from '../../ink.js';
import { useKeybindings } from '../../hooks/useKeybindings.js';
import type { LocalShellTaskState } from '../../tasks/LocalShellTask/guards.js';
import type { DeepImmutable } from '../../types/utils.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { ShellProgress } from './ShellProgress.js';

// Lazy load the file tailing utility to avoid blocking the UI
type TailFileResult = {
  lines: string[];
  isLoading: boolean;
};

function tailFile(_path: string, _lines: number): TailFileResult {
  // Placeholder - actual implementation would use a file tailing utility
  return { lines: [], isLoading: true };
}

type Props = {
  task: DeepImmutable<LocalShellTaskState>;
  onDismiss: () => void;
};

export function ShellDetailDialog({ task, onDismiss }: Props): ReactNode {
  useKeybindings({
    'confirm:no': onDismiss,
  });

  const deferredOutput = useDeferredValue(task.output ?? '');

  return (
    <Dialog
      title={`Shell: ${task.name}`}
      color={task.status === 'failed' ? 'error' : 'suggestion'}
      onCancel={onDismiss}
      hideInputGuide
    >
      <Box flexDirection="column" gap={1}>
        <ShellProgress shell={task} />
        <Suspense fallback={<Text dimColor>Loading output...</Text>}>
          <ShellOutput output={deferredOutput} />
        </Suspense>
        <Box marginTop={1}>
          <KeyboardShortcutHint chord="Esc" action="confirm:no" />
        </Box>
      </Box>
    </Dialog>
  );
}

function ShellOutput({ output }: { output: string }): ReactNode {
  const lines = output.split('\n').slice(-20);
  return (
    <Box flexDirection="column" height={20} overflow="hidden">
      {lines.map((line, i) => (
        <Text key={i} dimColor>
          {line}
        </Text>
      ))}
    </Box>
  );
}
