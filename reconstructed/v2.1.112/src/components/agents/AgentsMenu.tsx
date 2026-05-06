import chalk from 'chalk';
import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { SettingSource } from 'src/utils/settings/constants.js';
import type { CommandResultDisplay } from '../../commands.js';
import { useExitOnCtrlCDWithKeybindings } from '../../hooks/useExitOnCtrlCDWithKeybindings.js';
import { useMergedTools } from '../../hooks/useMergedTools.js';
import { Box, Text } from '../../ink.js';
import { useAppState, useSetAppState } from '../../state/AppState.js';
import type { Tools } from '../../Tool.js';
import { type ResolvedAgent, resolveAgentOverrides } from '../../tools/AgentTool/agentDisplay.js';
import { type AgentDefinition, getActiveAgentsFromList } from '../../tools/AgentTool/loadAgentsDir.js';
import { toError } from '../../utils/errors.js';
import { logError } from '../../utils/log.js';
import { Select } from '../CustomSelect/select.js';
import { Dialog } from '../design-system/Dialog.js';
import { AgentDetail } from './AgentDetail.js';
import { AgentEditor } from './AgentEditor.js';
import { AgentNavigationFooter } from './AgentNavigationFooter.js';
import { AgentsList } from './AgentsList.js';
import { deleteAgentFromFile } from './agentFileUtils.js';
import { CreateAgentWizard } from './new-agent-creation/CreateAgentWizard.js';
import type { ModeState } from './types.js';

type Props = {
  tools: Tools;
  onExit: (result?: string, options?: {
    display?: CommandResultDisplay;
  }) => void;
};

export function AgentsMenu({ tools, onExit }: Props): React.ReactNode {
  const [modeState, setModeState] = useState<ModeState>({
    mode: 'list-agents',
    source: 'all',
  });
  const agentDefinitions = useAppState((s) => s.agentDefinitions);
  const mcpTools = useAppState((s) => s.mcp.tools);
  const toolPermissionContext = useAppState((s) => s.toolPermissionContext);
  const setAppState = useSetAppState();
  const { allAgents, activeAgents: agents } = agentDefinitions;
  const [changes, setChanges] = useState<string[]>([]);
  const mergedTools = useMergedTools(tools, mcpTools, toolPermissionContext);
  useExitOnCtrlCDWithKeybindings();

  const agentsBySource = useMemo(() => {
    return {
      'built-in': allAgents.filter((a) => a.source === 'built-in'),
      userSettings: allAgents.filter((a) => a.source === 'userSettings'),
      projectSettings: allAgents.filter((a) => a.source === 'projectSettings'),
      policySettings: allAgents.filter((a) => a.source === 'policySettings'),
      localSettings: allAgents.filter((a) => a.source === 'localSettings'),
      flagSettings: allAgents.filter((a) => a.source === 'flagSettings'),
      plugin: allAgents.filter((a) => a.source === 'plugin'),
      all: allAgents,
    };
  }, [allAgents]);

  const handleAgentCreated = useCallback(
    (message: string) => {
      setChanges((prev) => [...prev, message]);
      setModeState({ mode: 'list-agents', source: 'all' });
    },
    [],
  );

  const handleAgentDeleted = useCallback(
    async (agent: AgentDefinition) => {
      try {
        await deleteAgentFromFile(agent);
        setAppState((state) => {
          const allAgents_0 = state.agentDefinitions.allAgents.filter(
            (a_6) =>
              !(a_6.agentType === agent.agentType && a_6.source === agent.source),
          );
          return {
            ...state,
            agentDefinitions: {
              ...state.agentDefinitions,
              allAgents: allAgents_0,
              activeAgents: getActiveAgentsFromList(allAgents_0),
            },
          };
        });
        setChanges((prev_0) => [
          ...prev_0,
          `Deleted agent: ${chalk.bold(agent.agentType)}`,
        ]);
        setModeState({ mode: 'list-agents', source: 'all' });
      } catch (error) {
        logError(toError(error));
      }
    },
    [setAppState],
  );

  switch (modeState.mode) {
    case 'list-agents': {
      const agentsToShow =
        modeState.source === 'all'
          ? [
              ...agentsBySource['built-in'],
              ...agentsBySource.userSettings,
              ...agentsBySource.projectSettings,
              ...agentsBySource.localSettings,
              ...agentsBySource.policySettings,
              ...agentsBySource.flagSettings,
              ...agentsBySource.plugin,
            ]
          : agentsBySource[modeState.source];
      const allResolved = resolveAgentOverrides(agentsToShow, agents);
      const resolvedAgents = allResolved;

      const handleBack = () => {
        const exitMessage =
          changes.length > 0
            ? `Agent changes:\n${changes.join('\n')}`
            : undefined;
        onExit(exitMessage ?? 'Agents dialog dismissed', {
          display: changes.length === 0 ? 'system' : undefined,
        });
      };

      const handleSelect = (agent_0: AgentDefinition) =>
        setModeState({
          mode: 'agent-menu',
          agent: agent_0,
          previousMode: modeState,
        });

      const handleCreateNew = () => setModeState({ mode: 'create-agent' });

      return (
        <>
          <AgentsList
            source={modeState.source}
            agents={resolvedAgents}
            onBack={handleBack}
            onSelect={handleSelect}
            onCreateNew={handleCreateNew}
            changes={changes}
          />
          <AgentNavigationFooter />
        </>
      );
    }
    case 'create-agent': {
      const handleCancel = () => setModeState({ mode: 'list-agents', source: 'all' });
      return (
        <CreateAgentWizard
          tools={mergedTools}
          existingAgents={agents}
          onComplete={handleAgentCreated}
          onCancel={handleCancel}
        />
      );
    }
    case 'agent-menu': {
      const freshAgent_1 = allAgents.find(
        (a_9) =>
          a_9.agentType === modeState.agent.agentType &&
          a_9.source === modeState.agent.source,
      );
      const agentToUse = freshAgent_1 || modeState.agent;
      const isEditable =
        agentToUse.source !== 'built-in' &&
        agentToUse.source !== 'plugin' &&
        agentToUse.source !== 'flagSettings';

      const menuItems = [
        { label: 'View agent', value: 'view' },
        ...(isEditable
          ? [
              { label: 'Edit agent', value: 'edit' },
              { label: 'Delete agent', value: 'delete' },
            ]
          : []),
        { label: 'Back', value: 'back' },
      ];

      const handleMenuSelect = (value_0: string) => {
        switch (value_0) {
          case 'view':
            setModeState({
              mode: 'view-agent',
              agent: agentToUse,
              previousMode: modeState.previousMode,
            });
            break;
          case 'edit':
            setModeState({
              mode: 'edit-agent',
              agent: agentToUse,
              previousMode: modeState,
            });
            break;
          case 'delete':
            setModeState({
              mode: 'delete-confirm',
              agent: agentToUse,
              previousMode: modeState,
            });
            break;
          case 'back':
            setModeState(modeState.previousMode);
            break;
        }
      };

      const handleCancel = () => setModeState(modeState.previousMode);

      return (
        <>
          <Dialog
            title={modeState.agent.agentType}
            onCancel={handleCancel}
            hideInputGuide={true}
          >
            <Box flexDirection="column">
              <Select
                options={menuItems}
                onChange={handleMenuSelect}
                onCancel={handleCancel}
              />
              {changes.length > 0 && (
                <Box marginTop={1}>
                  <Text dimColor={true}>{changes[changes.length - 1]}</Text>
                </Box>
              )}
            </Box>
          </Dialog>
          <AgentNavigationFooter />
        </>
      );
    }
    case 'view-agent': {
      const freshAgent_0 = allAgents.find(
        (a_8) =>
          a_8.agentType === modeState.agent.agentType &&
          a_8.source === modeState.agent.source,
      );
      const agentToDisplay = freshAgent_0 || modeState.agent;
      const handleBack = () =>
        setModeState({
          mode: 'agent-menu',
          agent: agentToDisplay,
          previousMode: modeState.previousMode,
        });

      return (
        <>
          <Dialog
            title={agentToDisplay.agentType}
            onCancel={handleBack}
            hideInputGuide={true}
          >
            <AgentDetail
              agent={agentToDisplay}
              tools={mergedTools}
              allAgents={allAgents}
              onBack={handleBack}
            />
          </Dialog>
          <AgentNavigationFooter instructions="Press Enter or Esc to go back" />
        </>
      );
    }
    case 'delete-confirm': {
      const deleteOptions = [
        { label: 'Yes, delete', value: 'yes' },
        { label: 'No, cancel', value: 'no' },
      ];
      const handleCancel = () => {
        if ('previousMode' in modeState) {
          setModeState(modeState.previousMode);
        }
      };

      return (
        <>
          <Dialog title="Delete agent" onCancel={handleCancel} color="error">
            <Text>
              Are you sure you want to delete the agent{' '}
              <Text bold={true}>{modeState.agent.agentType}</Text>?
            </Text>
            <Box marginTop={1}>
              <Text dimColor={true}>Source: {modeState.agent.source}</Text>
            </Box>
            <Box marginTop={1}>
              <Select
                options={deleteOptions}
                onChange={(value) => {
                  if (value === 'yes') {
                    handleAgentDeleted(modeState.agent);
                  } else if ('previousMode' in modeState) {
                    setModeState(modeState.previousMode);
                  }
                }}
                onCancel={handleCancel}
              />
            </Box>
          </Dialog>
          <AgentNavigationFooter instructions="Press \u2191\u2193 to navigate, Enter to select, Esc to cancel" />
        </>
      );
    }
    case 'edit-agent': {
      const freshAgent = allAgents.find(
        (a_7) =>
          a_7.agentType === modeState.agent.agentType &&
          a_7.source === modeState.agent.source,
      );
      const agentToEdit = freshAgent || modeState.agent;
      const title = `Edit agent: ${agentToEdit.agentType}`;
      const handleBack = () => setModeState(modeState.previousMode);
      const handleSaved = (message_0: string) => {
        handleAgentCreated(message_0);
        setModeState(modeState.previousMode);
      };

      return (
        <>
          <Dialog title={title} onCancel={handleBack} hideInputGuide={true}>
            <AgentEditor
              agent={agentToEdit}
              tools={mergedTools}
              onSaved={handleSaved}
              onBack={handleBack}
            />
          </Dialog>
          <AgentNavigationFooter />
        </>
      );
    }
    default:
      return null;
  }
}
