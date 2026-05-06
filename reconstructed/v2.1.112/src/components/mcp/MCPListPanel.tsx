import figures from 'figures';
import React, { useCallback, useState } from 'react';
import type { CommandResultDisplay } from '../../commands.js';
import { Box, color, Link, Text, useTheme } from '../../ink.js';
import { useKeybindings } from '../../keybindings/useKeybinding.js';
import type { ConfigScope } from '../../services/mcp/types.js';
import { describeMcpConfigFilePath } from '../../services/mcp/utils.js';
import { isDebugMode } from '../../utils/debug.js';
import { plural } from '../../utils/stringUtils.js';
import { ConfigurableShortcutHint } from '../ConfigurableShortcutHint.js';
import { Byline } from '../design-system/Byline.js';
import { Dialog } from '../design-system/Dialog.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { McpParsingWarnings } from './McpParsingWarnings.js';
import type { AgentMcpServerInfo, ServerInfo } from './types.js';

type Props = {
  servers: ServerInfo[];
  agentServers?: AgentMcpServerInfo[];
  onSelectServer: (server: ServerInfo) => void;
  onSelectAgentServer?: (agentServer: AgentMcpServerInfo) => void;
  onComplete: (result?: string, options?: {
    display?: CommandResultDisplay;
  }) => void;
  defaultTab?: string;
};

type SelectableItem = {
  type: 'server';
  server: ServerInfo;
} | {
  type: 'agent-server';
  agentServer: AgentMcpServerInfo;
};

// Define scope order for display (constant, outside component)
// 'dynamic' (built-in) is rendered separately at the end
const SCOPE_ORDER: ConfigScope[] = ['project', 'local', 'user', 'enterprise'];

// Get scope heading parts (label is bold, path is grey)
function getScopeHeading(scope: ConfigScope): {
  label: string;
  path?: string;
} {
  switch (scope) {
    case 'project':
      return {
        label: 'Project MCPs',
        path: describeMcpConfigFilePath(scope),
      };
    case 'user':
      return {
        label: 'User MCPs',
        path: describeMcpConfigFilePath(scope),
      };
    case 'local':
      return {
        label: 'Local MCPs',
        path: describeMcpConfigFilePath(scope),
      };
    case 'enterprise':
      return {
        label: 'Enterprise MCPs',
      };
    case 'dynamic':
      return {
        label: 'Built-in MCPs',
        path: 'always available',
      };
    default:
      return {
        label: scope,
      };
  }
}

// Group servers by scope
function groupServersByScope(serverList: ServerInfo[]): Map<ConfigScope, ServerInfo[]> {
  const groups = new Map<ConfigScope, ServerInfo[]>();
  for (const server of serverList) {
    const scope = server.scope;
    if (!groups.has(scope)) {
      groups.set(scope, []);
    }
    groups.get(scope)!.push(server);
  }
  // Sort servers within each group alphabetically
  for (const [, groupServers] of groups) {
    groupServers.sort((a, b) => a.name.localeCompare(b.name));
  }
  return groups;
}

export function MCPListPanel({
  servers,
  agentServers: agentServersProp,
  onSelectServer,
  onSelectAgentServer,
  onComplete,
}: Props): React.ReactNode {
  const agentServers = agentServersProp === undefined ? [] : agentServersProp;
  const [theme] = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const regularServers = servers.filter(s => s.client.config.type !== 'claudeai-proxy');
  const serversByScope = groupServersByScope(regularServers);

  const claudeAiServers = servers
    .filter(s => s.client.config.type === 'claudeai-proxy')
    .sort((a, b) => a.name.localeCompare(b.name));

  const dynamicServers = (serversByScope.get('dynamic') ?? [])
    .sort((a, b) => a.name.localeCompare(b.name));

  const dynamicHeading = getScopeHeading('dynamic');

  const items: SelectableItem[] = [];
  for (const scope of SCOPE_ORDER) {
    const scopeServers = serversByScope.get(scope) ?? [];
    for (const server of scopeServers) {
      items.push({
        type: 'server',
        server,
      });
    }
  }
  for (const server of claudeAiServers) {
    items.push({
      type: 'server',
      server,
    });
  }
  for (const agentServer of agentServers) {
    items.push({
      type: 'agent-server',
      agentServer,
    });
  }
  for (const server of dynamicServers) {
    items.push({
      type: 'server',
      server,
    });
  }

  const selectableItems = items;

  const handleCancel = useCallback(() => {
    onComplete('MCP dialog dismissed', {
      display: 'system',
    });
  }, [onComplete]);

  const handleSelect = useCallback(() => {
    const item = selectableItems[selectedIndex];
    if (!item) {
      return;
    }
    if (item.type === 'server') {
      onSelectServer(item.server);
    } else {
      if (item.type === 'agent-server' && onSelectAgentServer) {
        onSelectAgentServer(item.agentServer);
      }
    }
  }, [onSelectAgentServer, onSelectServer, selectableItems, selectedIndex]);

  const handlePrevious = useCallback(() => {
    setSelectedIndex(prev => prev === 0 ? selectableItems.length - 1 : prev - 1);
  }, [selectableItems.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex(prev => prev === selectableItems.length - 1 ? 0 : prev + 1);
  }, [selectableItems.length]);

  useKeybindings({
    'confirm:previous': handlePrevious,
    'confirm:next': handleNext,
    'confirm:yes': handleSelect,
    'confirm:no': handleCancel,
  }, {
    context: 'Confirmation',
  });

  const getServerIndex = useCallback(
    (server: ServerInfo) => selectableItems.findIndex(
      item => item.type === 'server' && item.server === server,
    ),
    [selectableItems],
  );

  const getAgentServerIndex = useCallback(
    (agentServer: AgentMcpServerInfo) => selectableItems.findIndex(
      item => item.type === 'agent-server' && item.agentServer === agentServer,
    ),
    [selectableItems],
  );

  const debugMode = isDebugMode();
  const hasFailedClients = servers.some(s => s.client.type === 'failed');

  if (servers.length === 0 && agentServers.length === 0) {
    return null;
  }

  const renderServerItem = (server: ServerInfo) => {
    const index = getServerIndex(server);
    const isSelected = selectedIndex === index;
    let statusIcon;
    let statusText;
    if (server.client.type === 'disabled') {
      statusIcon = color('inactive', theme)(figures.radioOff);
      statusText = 'disabled';
    } else if (server.client.type === 'connected') {
      statusIcon = color('success', theme)(figures.tick);
      statusText = 'connected';
    } else if (server.client.type === 'pending') {
      statusIcon = color('inactive', theme)(figures.radioOff);
      const { reconnectAttempt, maxReconnectAttempts } = server.client;
      if (reconnectAttempt && maxReconnectAttempts) {
        statusText = `reconnecting (${reconnectAttempt}/${maxReconnectAttempts})…`;
      } else {
        statusText = 'connecting…';
      }
    } else if (server.client.type === 'needs-auth') {
      statusIcon = color('warning', theme)(figures.triangleUpOutline);
      statusText = 'needs authentication';
    } else {
      statusIcon = color('error', theme)(figures.cross);
      statusText = 'failed';
    }
    return (
      <Box key={`${server.name}-${index}`}>
        <Text color={isSelected ? 'suggestion' : undefined}>
          {isSelected ? `${figures.pointer} ` : '  '}
        </Text>
        <Text color={isSelected ? 'suggestion' : undefined}>{server.name}</Text>
        <Text dimColor={!isSelected}> · {statusIcon} </Text>
        <Text dimColor={!isSelected}>{statusText}</Text>
      </Box>
    );
  };

  const renderAgentServerItem = (agentServer: AgentMcpServerInfo) => {
    const index = getAgentServerIndex(agentServer);
    const isSelected = selectedIndex === index;
    const statusIcon = agentServer.needsAuth
      ? color('warning', theme)(figures.triangleUpOutline)
      : color('inactive', theme)(figures.radioOff);
    const statusText = agentServer.needsAuth ? 'may need auth' : 'agent-only';
    return (
      <Box key={`agent-${agentServer.name}-${index}`}>
        <Text color={isSelected ? 'suggestion' : undefined}>
          {isSelected ? `${figures.pointer} ` : '  '}
        </Text>
        <Text color={isSelected ? 'suggestion' : undefined}>{agentServer.name}</Text>
        <Text dimColor={!isSelected}> · {statusIcon} </Text>
        <Text dimColor={!isSelected}>{statusText}</Text>
      </Box>
    );
  };

  const totalServers = servers.length + agentServers.length;
  const serverLabel = plural(totalServers, 'server');
  const subtitle = `${totalServers} ${serverLabel}`;

  return (
    <Box flexDirection="column">
      <McpParsingWarnings />
      <Dialog
        title="Manage MCP servers"
        subtitle={subtitle}
        onCancel={handleCancel}
        hideInputGuide={true}
      >
        <Box flexDirection="column">
          {SCOPE_ORDER.map(scope => {
            const scopeServers = serversByScope.get(scope);
            if (!scopeServers || scopeServers.length === 0) {
              return null;
            }
            const heading = getScopeHeading(scope);
            return (
              <Box key={scope} flexDirection="column" marginBottom={1}>
                <Box paddingLeft={2}>
                  <Text bold>{heading.label}</Text>
                  {heading.path && (
                    <Text dimColor> ({heading.path})</Text>
                  )}
                </Box>
                {scopeServers.map(server => renderServerItem(server))}
              </Box>
            );
          })}
          {claudeAiServers.length > 0 && (
            <Box flexDirection="column" marginBottom={1}>
              <Box paddingLeft={2}>
                <Text bold>claude.ai</Text>
              </Box>
              {claudeAiServers.map(server => renderServerItem(server))}
            </Box>
          )}
          {agentServers.length > 0 && (
            <Box flexDirection="column" marginBottom={1}>
              <Box paddingLeft={2}>
                <Text bold>Agent MCPs</Text>
              </Box>
              {[...new Set(agentServers.flatMap(s => s.sourceAgents))].map(
                agentName => (
                  <Box key={agentName} flexDirection="column" marginTop={1}>
                    <Box paddingLeft={2}>
                      <Text dimColor>@{agentName}</Text>
                    </Box>
                    {agentServers
                      .filter(s => s.sourceAgents.includes(agentName))
                      .map(agentServer => renderAgentServerItem(agentServer))}
                  </Box>
                ),
              )}
            </Box>
          )}
          {dynamicServers.length > 0 && (
            <Box flexDirection="column" marginBottom={1}>
              <Box paddingLeft={2}>
                <Text bold>{dynamicHeading.label}</Text>
                {dynamicHeading.path && (
                  <Text dimColor> ({dynamicHeading.path})</Text>
                )}
              </Box>
              {dynamicServers.map(server => renderServerItem(server))}
            </Box>
          )}
          <Box flexDirection="column">
            {hasFailedClients && (
              <Text dimColor>
                {debugMode
                  ? '※ Error logs shown inline with --debug'
                  : '※ Run claude --debug to see error logs'}
              </Text>
            )}
            <Text dimColor>
              <Link url="https://code.claude.com/docs/en/mcp">
                https://code.claude.com/docs/en/mcp
              </Link>{' '}
              for help
            </Text>
          </Box>
        </Box>
      </Dialog>
      <Box paddingX={1}>
        <Text dimColor italic>
          <Byline>
            <KeyboardShortcutHint chord="↑↓" action="navigate" />
            <KeyboardShortcutHint chord="Enter" action="confirm" />
            <ConfigurableShortcutHint
              action="confirm:no"
              context="Confirmation"
              fallback="Esc"
              description="cancel"
            />
          </Byline>
        </Text>
      </Box>
    </Box>
  );
}
