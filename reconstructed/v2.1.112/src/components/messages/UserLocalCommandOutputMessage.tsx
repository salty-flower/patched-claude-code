import * as React from 'react';
import { DIAMOND_FILLED, DIAMOND_OPEN } from '../../constants/figures.js';
import { NO_CONTENT_MESSAGE } from '../../constants/messages.js';
import { Box, Text } from '../../ink.js';
import { extractTag } from '../../utils/messages.js';
import { Markdown } from '../Markdown.js';
import { MessageResponse } from '../MessageResponse.js';

type Props = {
  content: string;
};

export function UserLocalCommandOutputMessage({
  content,
}: Props): React.ReactNode {
  const stdout = extractTag(content, "local-command-stdout");
  const stderr = extractTag(content, "local-command-stderr");
  if (!stdout && !stderr) {
    return (
      <MessageResponse><Text dimColor={true}>{NO_CONTENT_MESSAGE}</Text></MessageResponse>
    );
  }

  const lines: React.ReactNode[] = [];
  if (stdout?.trim()) {
    lines.push(<IndentedContent key="stdout">{stdout.trim()}</IndentedContent>);
  }
  if (stderr?.trim()) {
    lines.push(<IndentedContent key="stderr">{stderr.trim()}</IndentedContent>);
  }
  return lines;
}

function IndentedContent({ children }: { children: string }): React.ReactNode {
  if (
    children.startsWith(`${DIAMOND_OPEN} `) ||
    children.startsWith(`${DIAMOND_FILLED} `)
  ) {
    return <CloudLaunchContent>{children}</CloudLaunchContent>;
  }
  return (
    <Box flexDirection="row">
      <Text dimColor={true}>{"  \u23BF  "}</Text>
      <Box flexDirection="column" flexGrow={1}>
        <Markdown>{children}</Markdown>
      </Box>
    </Box>
  );
}

function CloudLaunchContent({
  children,
}: {
  children: string
}): React.ReactNode {
  const diamond = children[0]!;
  const nl = children.indexOf("\n");
  const header = nl === -1 ? children.slice(2) : children.slice(2, nl);
  const rest = nl === -1 ? "" : children.slice(nl + 1).trim();
  const sep = header.indexOf(" \u00B7 ");
  const label = sep === -1 ? header : header.slice(0, sep);
  const suffix = sep === -1 ? "" : header.slice(sep);
  return (
    <Box flexDirection="column">
      <Text>
        <Text color="background">{diamond} </Text>
        <Text bold={true}>{label}</Text>
        {suffix && <Text dimColor={true}>{suffix}</Text>}
      </Text>
      {rest && (
        <Box flexDirection="row">
          <Text dimColor={true}>{"  \u23BF  "}</Text>
          <Text dimColor={true}>{rest}</Text>
        </Box>
      )}
    </Box>
  );
}
