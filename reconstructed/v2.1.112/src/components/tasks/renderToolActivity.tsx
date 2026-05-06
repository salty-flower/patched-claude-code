import type { ReactNode } from 'react';
import React from 'react';
import { Text } from '../../ink.js';
import type { ToolName } from '../../Tool.js';
import type { ActivityItem } from '../../tasks/types.js';

type Props = {
  activity: ActivityItem;
  tools: Record<ToolName, { name: string }>;
  theme: 'light' | 'dark';
};

export function renderToolActivity(
  activity: ActivityItem,
  tools: Record<ToolName, { name: string }>,
  theme: 'light' | 'dark',
): ReactNode {
  const tool = tools[activity.tool];
  const toolName = tool?.name ?? activity.tool;
  return (
    <Text dimColor={theme === 'dark'}>
      {toolName}: {activity.description}
    </Text>
  );
}
