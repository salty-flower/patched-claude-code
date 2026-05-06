import figures from 'figures';
import React, { useCallback, useMemo, useState } from 'react';
import { mcpInfoFromString } from 'src/services/mcp/mcpStringUtils.js';
import { isMcpTool } from 'src/services/mcp/utils.js';
import type { Tool, Tools } from 'src/Tool.js';
import { filterToolsForAgent } from 'src/tools/AgentTool/agentToolUtils.js';
import { AGENT_TOOL_NAME } from 'src/tools/AgentTool/constants.js';
import { BashTool } from 'src/tools/BashTool/BashTool.js';
import { ExitPlanModeV2Tool } from 'src/tools/ExitPlanModeTool/ExitPlanModeV2Tool.js';
import { FileEditTool } from 'src/tools/FileEditTool/FileEditTool.js';
import { FileReadTool } from 'src/tools/FileReadTool/FileReadTool.js';
import { FileWriteTool } from 'src/tools/FileWriteTool/FileWriteTool.js';
import { GlobTool } from 'src/tools/GlobTool/GlobTool.js';
import { GrepTool } from 'src/tools/GrepTool/GrepTool.js';
import { ListMcpResourcesTool } from 'src/tools/ListMcpResourcesTool/ListMcpResourcesTool.js';
import { NotebookEditTool } from 'src/tools/NotebookEditTool/NotebookEditTool.js';
import { ReadMcpResourceTool } from 'src/tools/ReadMcpResourceTool/ReadMcpResourceTool.js';
import { TaskOutputTool } from 'src/tools/TaskOutputTool/TaskOutputTool.js';
import { TaskStopTool } from 'src/tools/TaskStopTool/TaskStopTool.js';
import { TodoWriteTool } from 'src/tools/TodoWriteTool/TodoWriteTool.js';
import { TungstenTool } from 'src/tools/TungstenTool/TungstenTool.js';
import { WebFetchTool } from 'src/tools/WebFetchTool/WebFetchTool.js';
import { WebSearchTool } from 'src/tools/WebSearchTool/WebSearchTool.js';
import type { KeyboardEvent } from '../../ink/events/keyboard-event.js';
import { Box, Text } from '../../ink.js';
import { useKeybinding } from '../../keybindings/useKeybinding.js';
import { count } from '../../utils/array.js';
import { plural } from '../../utils/stringUtils.js';
import { Divider } from '../design-system/Divider.js';

type Props = {
  tools: Tools;
  initialTools: string[] | undefined;
  onComplete: (selectedTools: string[] | undefined) => void;
  onCancel?: () => void;
};

type ToolBucket = {
  name: string;
  toolNames: Set<string>;
  isMcp?: boolean;
};

type ToolBuckets = {
  READ_ONLY: ToolBucket;
  EDIT: ToolBucket;
  EXECUTION: ToolBucket;
  MCP: ToolBucket;
  OTHER: ToolBucket;
};

function getToolBuckets(): ToolBuckets {
  return {
    READ_ONLY: {
      name: 'Read-only tools',
      toolNames: new Set([
        GlobTool.name,
        GrepTool.name,
        ExitPlanModeV2Tool.name,
        FileReadTool.name,
        WebFetchTool.name,
        TodoWriteTool.name,
        WebSearchTool.name,
        TaskStopTool.name,
        TaskOutputTool.name,
        ListMcpResourcesTool.name,
        ReadMcpResourceTool.name,
      ]),
    },
    EDIT: {
      name: 'Edit tools',
      toolNames: new Set([
        FileEditTool.name,
        FileWriteTool.name,
        NotebookEditTool.name,
      ]),
    },
    EXECUTION: {
      name: 'Execution tools',
      toolNames: new Set(
        [
          BashTool.name,
          'external' === 'ant' ? TungstenTool.name : undefined,
        ].filter((n): n is string => n !== undefined),
      ),
    },
    MCP: {
      name: 'MCP tools',
      toolNames: new Set(),
      // Dynamic - no static list
      isMcp: true,
    },
    OTHER: {
      name: 'Other tools',
      toolNames: new Set(), // Dynamic - catch-all for uncategorized tools
    },
  };
}

// Helper to get MCP server buckets dynamically
function getMcpServerBuckets(
  tools: Tools,
): Array<{ serverName: string; tools: Tools }> {
  const serverMap = new Map<string, Tool[]>();
  tools.forEach((tool) => {
    if (isMcpTool(tool)) {
      const mcpInfo = mcpInfoFromString(tool.name);
      if (mcpInfo?.serverName) {
        const existing = serverMap.get(mcpInfo.serverName) || [];
        existing.push(tool);
        serverMap.set(mcpInfo.serverName, existing);
      }
    }
  });
  return Array.from(serverMap.entries())
    .map(([serverName, tools]) => ({
      serverName,
      tools,
    }))
    .sort((a, b) => a.serverName.localeCompare(b.serverName));
}

export function ToolSelector({
  tools,
  initialTools,
  onComplete,
  onCancel,
}: Props): React.ReactNode {
  const customAgentTools = useMemo(
    () =>
      filterToolsForAgent({
        tools,
        isBuiltIn: false,
        isAsync: false,
      }),
    [tools],
  );

  const expandedInitialTools = useMemo(() => {
    return !initialTools || initialTools.includes('*')
      ? customAgentTools.map((t) => t.name)
      : initialTools;
  }, [customAgentTools, initialTools]);

  const [selectedTools, setSelectedTools] = useState(expandedInitialTools);
  const [focusIndex, setFocusIndex] = useState(0);
  const [showIndividualTools, setShowIndividualTools] = useState(false);

  const toolNames = useMemo(
    () => new Set(customAgentTools.map((t) => t.name)),
    [customAgentTools],
  );

  const validSelectedTools = useMemo(
    () => selectedTools.filter((name) => toolNames.has(name)),
    [selectedTools, toolNames],
  );

  const selectedSet = useMemo(
    () => new Set(validSelectedTools),
    [validSelectedTools],
  );

  const isAllSelected =
    validSelectedTools.length === customAgentTools.length &&
    customAgentTools.length > 0;

  const handleToggleTool = useCallback((toolName: string) => {
    if (!toolName) {
      return;
    }
    setSelectedTools((current) =>
      current.includes(toolName)
        ? current.filter((t) => t !== toolName)
        : [...current, toolName],
    );
  }, []);

  const handleToggleTools = useCallback(
    (toolNames_0: string[], select: boolean) => {
      setSelectedTools((current_0) => {
        if (select) {
          const toolsToAdd = toolNames_0.filter((t) => !current_0.includes(t));
          return [...current_0, ...toolsToAdd];
        } else {
          return current_0.filter((t) => !toolNames_0.includes(t));
        }
      });
    },
    [],
  );

  const handleConfirm = useCallback(() => {
    const allToolNames = customAgentTools.map((t) => t.name);
    const areAllToolsSelected =
      validSelectedTools.length === allToolNames.length &&
      allToolNames.every((name) => validSelectedTools.includes(name));
    const finalTools = areAllToolsSelected ? undefined : validSelectedTools;
    onComplete(finalTools);
  }, [customAgentTools, validSelectedTools, onComplete]);

  const toolsByBucket = useMemo(() => {
    const toolBuckets = getToolBuckets();
    const buckets: {
      readOnly: Tool[];
      edit: Tool[];
      execution: Tool[];
      mcp: Tool[];
      other: Tool[];
    } = {
      readOnly: [],
      edit: [],
      execution: [],
      mcp: [],
      other: [],
    };
    customAgentTools.forEach((tool) => {
      if (isMcpTool(tool)) {
        buckets.mcp.push(tool);
      } else if (toolBuckets.READ_ONLY.toolNames.has(tool.name)) {
        buckets.readOnly.push(tool);
      } else if (toolBuckets.EDIT.toolNames.has(tool.name)) {
        buckets.edit.push(tool);
      } else if (toolBuckets.EXECUTION.toolNames.has(tool.name)) {
        buckets.execution.push(tool);
      } else if (tool.name !== AGENT_TOOL_NAME) {
        buckets.other.push(tool);
      }
    });
    return buckets;
  }, [customAgentTools]);

  const createBucketToggleAction = useCallback(
    (bucketTools: Tool[]) => {
      const selected = count(bucketTools, (t) => selectedSet.has(t.name));
      const needsSelection = selected < bucketTools.length;
      return () => {
        const toolNames_1 = bucketTools.map((t) => t.name);
        handleToggleTools(toolNames_1, needsSelection);
      };
    },
    [selectedSet, handleToggleTools],
  );

  const navigableItems = useMemo(() => {
    const items: Array<{
      id: string;
      label: string;
      action: () => void;
      isContinue?: boolean;
      isToggle?: boolean;
      isHeader?: boolean;
    }> = [];

    items.push({
      id: 'continue',
      label: 'Continue',
      action: handleConfirm,
      isContinue: true,
    });

    items.push({
      id: 'bucket-all',
      label: `${isAllSelected ? figures.checkboxOn : figures.checkboxOff} All tools`,
      action: () => {
        const allToolNames_0 = customAgentTools.map((t) => t.name);
        handleToggleTools(allToolNames_0, !isAllSelected);
      },
    });

    const toolBuckets_0 = getToolBuckets();
    const bucketConfigs = [
      {
        id: 'bucket-readonly',
        name: toolBuckets_0.READ_ONLY.name,
        tools: toolsByBucket.readOnly,
      },
      {
        id: 'bucket-edit',
        name: toolBuckets_0.EDIT.name,
        tools: toolsByBucket.edit,
      },
      {
        id: 'bucket-execution',
        name: toolBuckets_0.EXECUTION.name,
        tools: toolsByBucket.execution,
      },
      {
        id: 'bucket-mcp',
        name: toolBuckets_0.MCP.name,
        tools: toolsByBucket.mcp,
      },
      {
        id: 'bucket-other',
        name: toolBuckets_0.OTHER.name,
        tools: toolsByBucket.other,
      },
    ];

    bucketConfigs.forEach(({ id, name, tools: bucketTools_0 }) => {
      if (bucketTools_0.length === 0) {
        return;
      }
      const selected_0 = count(bucketTools_0, (t) => selectedSet.has(t.name));
      const isFullySelected = selected_0 === bucketTools_0.length;
      items.push({
        id,
        label: `${isFullySelected ? figures.checkboxOn : figures.checkboxOff} ${name}`,
        action: createBucketToggleAction(bucketTools_0),
      });
    });

    const toggleButtonIndex = items.length;
    items.push({
      id: 'toggle-individual',
      label: showIndividualTools
        ? 'Hide advanced options'
        : 'Show advanced options',
      action: () => {
        setShowIndividualTools((prev) => {
          const newValue = !prev;
          if (prev && focusIndex > toggleButtonIndex) {
            setFocusIndex(toggleButtonIndex);
          }
          return newValue;
        });
      },
      isToggle: true,
    });

    const mcpServerBuckets = getMcpServerBuckets(customAgentTools);
    if (showIndividualTools) {
      if (mcpServerBuckets.length > 0) {
        items.push({
          id: 'mcp-servers-header',
          label: 'MCP Servers:',
          action: () => {},
          isHeader: true,
        });
        mcpServerBuckets.forEach(({ serverName, tools: serverTools }) => {
          const selected_1 = count(serverTools, (t) =>
            selectedSet.has(t.name),
          );
          const isFullySelected_0 = selected_1 === serverTools.length;
          items.push({
            id: `mcp-server-${serverName}`,
            label: `${isFullySelected_0 ? figures.checkboxOn : figures.checkboxOff} ${serverName} (${serverTools.length} ${plural(serverTools.length, 'tool')})`,
            action: () => {
              const toolNames_2 = serverTools.map((t) => t.name);
              handleToggleTools(toolNames_2, !isFullySelected_0);
            },
          });
        });
        items.push({
          id: 'tools-header',
          label: 'Individual Tools:',
          action: () => {},
          isHeader: true,
        });
      }
      customAgentTools.forEach((tool_0) => {
        let displayName = tool_0.name;
        if (tool_0.name.startsWith('mcp__')) {
          const mcpInfo = mcpInfoFromString(tool_0.name);
          displayName = mcpInfo
            ? `${mcpInfo.toolName} (${mcpInfo.serverName})`
            : tool_0.name;
        }
        items.push({
          id: `tool-${tool_0.name}`,
          label: `${selectedSet.has(tool_0.name) ? figures.checkboxOn : figures.checkboxOff} ${displayName}`,
          action: () => handleToggleTool(tool_0.name),
        });
      });
    }

    return items;
  }, [
    customAgentTools,
    toolsByBucket,
    selectedSet,
    isAllSelected,
    showIndividualTools,
    focusIndex,
    handleConfirm,
    handleToggleTools,
    createBucketToggleAction,
    handleToggleTool,
  ]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    } else {
      onComplete(initialTools);
    }
  }, [onCancel, onComplete, initialTools]);

  useKeybinding('confirm:no', handleCancel, { context: 'Confirmation' });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'return') {
        e.preventDefault();
        const item = navigableItems[focusIndex];
        if (item && !item.isHeader) {
          item.action();
        }
      } else if (e.key === 'up') {
        e.preventDefault();
        let newIndex = focusIndex - 1;
        while (newIndex > 0 && navigableItems[newIndex]?.isHeader) {
          newIndex--;
        }
        setFocusIndex(Math.max(0, newIndex));
      } else if (e.key === 'down') {
        e.preventDefault();
        let newIndex_0 = focusIndex + 1;
        while (
          newIndex_0 < navigableItems.length - 1 &&
          navigableItems[newIndex_0]?.isHeader
        ) {
          newIndex_0++;
        }
        setFocusIndex(Math.min(navigableItems.length - 1, newIndex_0));
      }
    },
    [focusIndex, navigableItems],
  );

  const continueItemColor = focusIndex === 0 ? 'suggestion' : undefined;
  const continueItemBold = focusIndex === 0;
  const continueItemPrefix = focusIndex === 0 ? `${figures.pointer} ` : '  ';

  const remainingItems = navigableItems.slice(1);

  const selectionSummary = isAllSelected
    ? 'All tools selected'
    : `${selectedSet.size} of ${customAgentTools.length} tools selected`;

  return (
    <Box
      flexDirection="column"
      marginTop={1}
      tabIndex={0}
      autoFocus
      onKeyDown={handleKeyDown}
    >
      <Text color={continueItemColor} bold={continueItemBold}>
        {continueItemPrefix}[ Continue ]
      </Text>
      <Divider width={40} />
      {remainingItems.map((item_0, index) => {
        const isCurrentlyFocused = index + 1 === focusIndex;
        const isToggleButton = item_0.isToggle;
        const isHeader = item_0.isHeader;
        return (
          <React.Fragment key={item_0.id}>
            {isToggleButton && <Divider width={40} />}
            {isHeader && index > 0 && <Box marginTop={1} />}
            <Text
              color={isHeader ? undefined : isCurrentlyFocused ? 'suggestion' : undefined}
              dimColor={isHeader}
              bold={isToggleButton && isCurrentlyFocused}
            >
              {isHeader
                ? ''
                : isCurrentlyFocused
                  ? `${figures.pointer} `
                  : '  '}
              {isToggleButton ? `[ ${item_0.label} ]` : item_0.label}
            </Text>
          </React.Fragment>
        );
      })}
      <Box marginTop={1} flexDirection="column">
        <Text dimColor={true}>{selectionSummary}</Text>
      </Box>
    </Box>
  );
}
