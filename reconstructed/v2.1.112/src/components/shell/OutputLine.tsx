import type { ReactNode } from 'react';
import React from 'react';
import { Text } from 'src/ink.js';
import type { Theme } from 'src/utils/theme.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import { Ansi } from '../Ansi.js';

function normalizeWhitespace(content: string, _verbose: boolean): string {
  const normalized = content.replace(/\s+/g, ' ').trim();
  return normalized;
}

function truncateLine(content: string): string {
  if (content.length > 500) {
    return content;
  }
  return content
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
}

function stripAnsiCodes(content: string): string {
  // eslint-disable-next-line no-control-regex
  return content.replace(/\u001b\[[0-9;]*m/g, '');
}

type Props = {
  content: string;
  verbose: boolean;
  isError?: boolean;
  isWarning?: boolean;
};

export function OutputLine({
  content,
  verbose,
  isError,
  isWarning,
}: Props): ReactNode {
  const { columns } = useTerminalSize();
  const normalized = normalizeWhitespace(content, verbose);
  let display: ReactNode;
  if (verbose) {
    display = <Ansi>{normalized}</Ansi>;
  } else {
    display = <Ansi>{truncateLine(normalized)}</Ansi>;
  }
  const color: keyof Theme | undefined = isError
    ? 'error'
    : isWarning
      ? 'warning'
      : undefined;
  return (
    <Text color={color}>
      {display}
    </Text>
  );
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
