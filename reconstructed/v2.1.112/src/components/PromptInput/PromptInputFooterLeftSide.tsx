// biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
import { feature } from 'bun:bundle';
import { Box, Text, Link } from '../../ink.js';
import * as React from 'react';
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import figures from 'figures';
import type { VimMode, PromptInputMode } from '../../types/textInputTypes.js';
import type { ToolPermissionContext } from '../../Tool.js';
import { isVimModeEnabled } from './utils.js';
import { useShortcutDisplay } from '../../keybindings/useShortcutDisplay.js';
import { isDefaultMode, permissionModeSymbol, permissionModeTitle, getModeColor } from '../../utils/permissions/PermissionMode.js';
import { BackgroundTaskStatus } from '../tasks/BackgroundTaskStatus.js';
import { isBackgroundTask } from '../../tasks/types.js';
import { isAgentSwarmsEnabled } from '../../utils/agentSwarmsEnabled.js';
import { TeamStatus } from '../teams/TeamStatus.js';
import { isInProcessEnabled } from '../../utils/swarm/backends/registry.js';
import { useAppState, useAppStateStore } from 'src/state/AppState.js';
import { getIsRemoteMode } from '../../bootstrap/state.js';
import HistorySearchInput from './HistorySearchInput.js';
import { usePrStatus } from '../../hooks/usePrStatus.js';
import { KeyboardShortcutHint } from '../design-system/KeyboardShortcutHint.js';
import { Byline } from '../design-system/Byline.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import { useTasksV2 } from '../../hooks/useTasksV2.js';
import { formatDuration } from '../../utils/format.js';
import { VoiceWarmupHint } from './VoiceIndicator.js';
import { useVoiceEnabled } from '../../hooks/useVoiceEnabled.js';
import { useVoiceState } from '../../context/voice.js';
import { isFullscreenEnvEnabled } from '../../utils/fullscreen.js';
import { isXtermJs } from '../../ink/terminal.js';
import { useHasSelection, useSelection } from '../../ink/hooks/use-selection.js';
import { getGlobalConfig, saveGlobalConfig } from '../../utils/config.js';
import { getPlatform } from '../../utils/platform.js';
import { PrBadge } from '../PrBadge.js';

const NO_OP_SUBSCRIBE = (_cb: () => void) => () => {};
const NULL = () => null;
const MAX_VOICE_HINT_SHOWS = 3;

type Props = {
  exitMessage: {
    show: boolean;
    key?: string;
  };
  vimMode: VimMode | undefined;
  mode: PromptInputMode;
  toolPermissionContext: ToolPermissionContext;
  suppressHint: boolean;
  isLoading: boolean;
  showMemoryTypeSelector?: boolean;
  tasksSelected: boolean;
  teamsSelected: boolean;
  tmuxSelected: boolean;
  teammateFooterIndex?: number;
  isPasting?: boolean;
  isSearching: boolean;
  historyQuery: string;
  setHistoryQuery: (query: string) => void;
  historyFailedMatch: boolean;
  onOpenTasksDialog?: (taskId?: string) => void;
};

export function PromptInputFooterLeftSide(t0: Props): React.ReactNode {
  const {
    exitMessage,
    vimMode,
    mode,
    toolPermissionContext,
    suppressHint,
    isLoading,
    tasksSelected,
    teamsSelected,
    tmuxSelected,
    teammateFooterIndex,
    isPasting,
    isSearching,
    historyQuery,
    setHistoryQuery,
    historyFailedMatch,
    onOpenTasksDialog,
  } = t0;

  if (exitMessage.show) {
    return (
      <Text dimColor={true} key="exit-message">
        Press {exitMessage.key} again to exit
      </Text>
    );
  }
  if (isPasting) {
    return <Text dimColor={true} key="pasting-message">Pasting text…</Text>;
  }

  const showVim = isVimModeEnabled() && vimMode === 'INSERT' && !isSearching;
  const historySearchInput = isSearching && (
    <HistorySearchInput
      value={historyQuery}
      onChange={setHistoryQuery}
      historyFailedMatch={historyFailedMatch}
    />
  );
  const vimIndicator = showVim ? (
    <Text dimColor={true} key="vim-insert">-- INSERT --</Text>
  ) : null;

  const showHint = !suppressHint && !showVim;

  return (
    <Box justifyContent="flex-start" gap={1}>
      {historySearchInput}
      {vimIndicator}
      <ModeIndicator
        mode={mode}
        toolPermissionContext={toolPermissionContext}
        showHint={showHint}
        isLoading={isLoading}
        tasksSelected={tasksSelected}
        teamsSelected={teamsSelected}
        teammateFooterIndex={teammateFooterIndex}
        tmuxSelected={tmuxSelected}
        onOpenTasksDialog={onOpenTasksDialog}
      />
    </Box>
  );
}

type ModeIndicatorProps = {
  mode: PromptInputMode;
  toolPermissionContext: ToolPermissionContext;
  showHint: boolean;
  isLoading: boolean;
  tasksSelected: boolean;
  teamsSelected: boolean;
  tmuxSelected: boolean;
  teammateFooterIndex?: number;
  onOpenTasksDialog?: (taskId?: string) => void;
};

function ModeIndicator({
  mode,
  toolPermissionContext,
  showHint,
  isLoading,
  tasksSelected,
  teamsSelected,
  tmuxSelected,
  teammateFooterIndex,
  onOpenTasksDialog,
}: ModeIndicatorProps): React.ReactNode {
  const { columns } = useTerminalSize();
  const modeCycleShortcut = useShortcutDisplay('chat:cycleMode', 'Chat', 'shift+tab');
  const tasks = useAppState(s => s.tasks);
  // v112: taskDecorations subscription added (unused in this component)
  const _taskDecorations = useAppState(s => s.taskDecorations);
  const teamContext = useAppState(s_0 => s_0.teamContext);
  const store = useAppStateStore();
  const [remoteSessionUrl] = useState(() => store.getState().remoteSessionUrl);
  const viewSelectionMode = useAppState(s_1 => s_1.viewSelectionMode);
  const viewingAgentTaskId = useAppState(s_2 => s_2.viewingAgentTaskId);
  const expandedView = useAppState(s_3 => s_3.expandedView);
  const showSpinnerTree = expandedView === 'teammates';
  const prStatus = usePrStatus(isLoading, isPrStatusEnabled());
  // v112: tmux session check removed, always false
  const hasTmuxSession = false;
  // v112: proactiveModule / nextTickAt removed
  // v112: voice hooks no longer gated by feature('VOICE_MODE')
  const voiceEnabled = useVoiceEnabled();
  const voiceState = useVoiceState(s_5 => s_5.voiceState);
  const voiceWarmingUp = useVoiceState(s_6 => s_6.voiceWarmingUp);
  const hasSelection = useHasSelection();
  const selGetState = useSelection().getState;
  // v112: coordinator mode removed
  const isCoordinator = false;
  // v112: panel agent task exclusion removed (!0 instead of ant-only check)
  const runningTaskCount = useMemo(
    () => count(Object.values(tasks), t => isBackgroundTask(t) && true),
    [tasks],
  );
  const tasksV2 = useTasksV2();
  const hasTaskItems = tasksV2 !== undefined && tasksV2.length > 0;
  const escShortcut = useShortcutDisplay('chat:cancel', 'Chat', 'esc').toLowerCase();
  const todosShortcut = useShortcutDisplay('app:toggleTodos', 'Global', 'ctrl+t');
  const killAgentsShortcut = useShortcutDisplay('chat:killAgents', 'Chat', 'ctrl+x ctrl+k');
  const voiceKeyShortcut = useShortcutDisplay('voice:pushToTalk', 'Chat', 'Space');
  const [voiceHintUnderCap] = useState(
    () => (getGlobalConfig().voiceFooterHintSeenCount ?? 0) < MAX_VOICE_HINT_SHOWS,
  );
  const voiceHintIncrementedRef = useRef(false);
  useEffect(() => {
    if (!voiceEnabled || !voiceHintUnderCap) return;
    if (voiceHintIncrementedRef.current) return;
    voiceHintIncrementedRef.current = true;
    const newCount = (getGlobalConfig().voiceFooterHintSeenCount ?? 0) + 1;
    saveGlobalConfig(prev => {
      if ((prev.voiceFooterHintSeenCount ?? 0) >= newCount) return prev;
      return { ...prev, voiceFooterHintSeenCount: newCount };
    });
  }, [voiceEnabled, voiceHintUnderCap]);
  const isKillAgentsConfirmShowing = useAppState(
    s_7 => s_7.notifications.current?.key === 'kill-agents-confirm',
  );

  const hasTeams =
    isAgentSwarmsEnabled() &&
    !isInProcessEnabled() &&
    teamContext !== undefined &&
    count(Object.values(teamContext.teammates), t_0 => t_0.name !== 'team-lead') > 0;

  if (mode === 'bash') {
    return <Text color="bashBorder">! for bash mode</Text>;
  }

  const currentMode = toolPermissionContext?.mode;
  const hasActiveMode = !isDefaultMode(currentMode);
  const viewedTask = viewingAgentTaskId ? tasks[viewingAgentTaskId] : undefined;
  const isViewingTeammate =
    viewSelectionMode === 'viewing-agent' && viewedTask?.type === 'in_process_teammate';
  const isViewingCompletedTeammate =
    isViewingTeammate && viewedTask != null && viewedTask.status !== 'running';
  const hasBackgroundTasks = runningTaskCount > 0 || isViewingTeammate;

  const primaryItemCount =
    (isCoordinator || hasActiveMode ? 1 : 0) +
    (hasBackgroundTasks ? 1 : 0) +
    (hasTeams ? 1 : 0);

  const shouldShowPrStatus =
    isPrStatusEnabled() &&
    prStatus.number !== null &&
    prStatus.reviewState !== null &&
    prStatus.url !== null &&
    primaryItemCount < 2 &&
    (primaryItemCount === 0 || columns >= 80);

  const shouldShowModeHint = primaryItemCount < 2;

  const hasInProcessTeammates =
    !showSpinnerTree &&
    hasBackgroundTasks &&
    Object.values(tasks).some(t_1 => t_1.type === 'in_process_teammate');
  const hasTeammatePills = hasInProcessTeammates || (!showSpinnerTree && isViewingTeammate);

  const modePart =
    currentMode && hasActiveMode && !getIsRemoteMode() ? (
      <Text color={getModeColor(currentMode)} key="mode">
        {permissionModeSymbol(currentMode)}{' '}
        {permissionModeTitle(currentMode).toLowerCase()} on
        {shouldShowModeHint && (
          <Text dimColor>
            {' '}
            <KeyboardShortcutHint
              chord={modeCycleShortcut}
              action="cycle"
              parens
              format={{ keyCase: 'lower' }}
            />
          </Text>
        )}
      </Text>
    ) : null;

  const parts: React.ReactElement[] = [
    ...(remoteSessionUrl
      ? [
          <Link url={remoteSessionUrl} key="remote">
            <Text color="ide">{figures.circleDouble} remote</Text>
          </Link>,
        ]
      : []),
    // v112: tmux pill removed
    ...(isAgentSwarmsEnabled() && hasTeams
      ? [
          <TeamStatus
            key="teams"
            teamsSelected={teamsSelected}
            showHint={showHint && !hasBackgroundTasks}
          />,
        ]
      : []),
    ...(shouldShowPrStatus
      ? [
          <PrBadge
            key="pr-status"
            number={prStatus.number!}
            url={prStatus.url!}
            reviewState={prStatus.reviewState!}
          />,
        ]
      : []),
  ];

  const hasAnyInProcessTeammates = Object.values(tasks).some(
    t_2 => t_2.type === 'in_process_teammate' && t_2.status === 'running',
  );
  const hasRunningAgentTasks = Object.values(tasks).some(
    t_3 => t_3.type === 'local_agent' && t_3.status === 'running',
  );

  const hintParts = showHint
    ? getSpinnerHintParts(
        isLoading,
        escShortcut,
        todosShortcut,
        killAgentsShortcut,
        hasTaskItems,
        expandedView,
        hasAnyInProcessTeammates,
        hasRunningAgentTasks,
        isKillAgentsConfirmShowing,
      )
    : [];

  if (isViewingCompletedTeammate) {
    parts.push(
      <Text dimColor key="esc-return">
        <KeyboardShortcutHint
          chord={escShortcut}
          action="return to team lead"
          format={{ keyCase: 'lower' }}
        />
      </Text>,
    );
  } else if (!hasTeammatePills && showHint) {
    parts.push(...hintParts);
  }

  if (hasTeammatePills) {
    const otherParts = [
      ...(modePart ? [modePart] : []),
      ...parts,
      ...(isViewingCompletedTeammate ? [] : hintParts),
    ];
    return (
      <Box flexDirection="column">
        <Box>
          <BackgroundTaskStatus
            tasksSelected={tasksSelected}
            isViewingTeammate={isViewingTeammate}
            teammateFooterIndex={teammateFooterIndex}
            isLeaderIdle={!isLoading}
            onOpenDialog={onOpenTasksDialog}
          />
        </Box>
        {otherParts.length > 0 && (
          <Box>
            <Byline>{otherParts}</Byline>
          </Box>
        )}
      </Box>
    );
  }

  // v112: coordinator tasks check removed (always false)
  const hasCoordinatorTasks = false;

  const tasksPart =
    hasBackgroundTasks && !hasTeammatePills && !shouldHideTasksFooter(tasks, showSpinnerTree) ? (
      <BackgroundTaskStatus
        tasksSelected={tasksSelected}
        isViewingTeammate={isViewingTeammate}
        teammateFooterIndex={teammateFooterIndex}
        isLeaderIdle={!isLoading}
        onOpenDialog={onOpenTasksDialog}
      />
    ) : null;

  if (parts.length === 0 && !tasksPart && !modePart && showHint) {
    parts.push(
      <Text dimColor key="shortcuts-hint">
        ? for shortcuts
      </Text>,
    );
  }

  const copyOnSelect = getGlobalConfig().copyOnSelect ?? true;
  const selectionHintHasContent = hasSelection && (!copyOnSelect || isXtermJs());

  if (voiceEnabled && voiceWarmingUp) {
    parts.push(<VoiceWarmupHint key="voice-warmup" />);
  } else if (isFullscreenEnvEnabled() && selectionHintHasContent) {
    const isMac = getPlatform() === 'macos';
    const altClickFailed = isMac && (selGetState()?.lastPressHadAlt ?? false);
    parts.push(
      <Text dimColor key="selection-copy">
        <Byline>
          {!copyOnSelect && (
            <KeyboardShortcutHint chord="ctrl+c" action="copy" format={{ keyCase: 'lower' }} />
          )}
          {isXtermJs() &&
            (altClickFailed ? (
              <Text>set macOptionClickForcesSelection in VS Code settings</Text>
            ) : (
              <Text>
                {isMac ? 'option+click' : 'shift+click'} to native select
              </Text>
            ))}
        </Byline>
      </Text>,
    );
  } else if (
    parts.length > 0 &&
    showHint &&
    voiceEnabled &&
    voiceState === 'idle' &&
    hintParts.length === 0 &&
    voiceHintUnderCap
  ) {
    parts.push(
      <Text dimColor key="voice-hint">
        hold {voiceKeyShortcut} to speak
      </Text>,
    );
  }

  if ((tasksPart || hasCoordinatorTasks) && showHint && !hasTeams) {
    parts.push(
      <Text dimColor key="manage-tasks">
        {tasksSelected ? (
          <KeyboardShortcutHint chord="enter" action="view tasks" format={{ keyCase: 'lower' }} />
        ) : (
          <KeyboardShortcutHint chord="down" action="manage" format={{ keyCase: 'lower' }} />
        )}
      </Text>,
    );
  }

  if (parts.length === 0 && !tasksPart && !modePart) {
    return isFullscreenEnvEnabled() ? <Text> </Text> : null;
  }

  return (
    <Box height={1} overflow="hidden">
      {modePart && (
        <Box flexShrink={0}>
          {modePart}
          {(tasksPart || parts.length > 0) && <Text dimColor> · </Text>}
        </Box>
      )}
      {tasksPart && (
        <Box flexShrink={0}>
          {tasksPart}
          {parts.length > 0 && <Text dimColor> · </Text>}
        </Box>
      )}
      {parts.length > 0 && (
        <Text wrap="truncate">
          <Byline>{parts}</Byline>
        </Text>
      )}
    </Box>
  );
}

function getSpinnerHintParts(
  isLoading: boolean,
  escShortcut: string,
  todosShortcut: string,
  killAgentsShortcut: string,
  hasTaskItems: boolean,
  expandedView: 'none' | 'tasks' | 'teammates',
  hasTeammates: boolean,
  hasRunningAgentTasks: boolean,
  isKillAgentsConfirmShowing: boolean,
): React.ReactElement[] {
  let toggleAction: string;
  if (hasTeammates) {
    switch (expandedView) {
      case 'none':
        toggleAction = 'show tasks';
        break;
      case 'tasks':
        toggleAction = 'show teammates';
        break;
      case 'teammates':
        toggleAction = 'hide';
        break;
    }
  } else {
    toggleAction = expandedView === 'tasks' ? 'hide tasks' : 'show tasks';
  }

  const showToggleHint = hasTaskItems || hasTeammates;
  return [
    ...(isLoading
      ? [
          <Text dimColor key="esc">
            <KeyboardShortcutHint
              chord={escShortcut}
              action="interrupt"
              format={{ keyCase: 'lower' }}
            />
          </Text>,
        ]
      : []),
    ...(!isLoading && hasRunningAgentTasks && !isKillAgentsConfirmShowing
      ? [
          <Text dimColor key="kill-agents">
            <KeyboardShortcutHint
              chord={killAgentsShortcut}
              action="stop agents"
              format={{ keyCase: 'lower' }}
            />
          </Text>,
        ]
      : []),
    ...(showToggleHint
      ? [
          <Text dimColor key="toggle-tasks">
            <KeyboardShortcutHint
              chord={todosShortcut}
              action={toggleAction}
              format={{ keyCase: 'lower' }}
            />
          </Text>,
        ]
      : []),
  ];
}

function isPrStatusEnabled(): boolean {
  return getGlobalConfig().prStatusFooterEnabled ?? true;
}
