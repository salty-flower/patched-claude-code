import { randomUUID } from 'crypto'
import figures from 'figures'
import * as React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useInterval } from 'usehooks-ts'
import { useRegisterOverlay } from '../../context/overlayContext.js'
import { stringWidth } from '../../ink/stringWidth.js'
// eslint-disable-next-line custom-rules/prefer-use-keybindings -- raw j/k/arrow dialog navigation
import { Box, Text, useInput } from '../../ink.js'
import { useKeybindings } from '../../keybindings/useKeybinding.js'
import { useShortcutDisplay } from '../../keybindings/useShortcutDisplay.js'
import { type AppState, useAppState, useSetAppState } from '../../state/AppState.js'
import { getEmptyToolPermissionContext } from '../../Tool.js'
import { AGENT_COLOR_TO_THEME_COLOR } from '../../tools/AgentTool/agentColorManager.js'
import { logForDebugging } from '../../utils/debug.js'
import { truncateToWidth } from '../../utils/format.js'
import { getNextPermissionMode } from '../../utils/permissions/getNextPermissionMode.js'
import { getModeColor, type PermissionMode, permissionModeFromString, permissionModeSymbol } from '../../utils/permissions/PermissionMode.js'
import { jsonStringify } from '../../utils/slowOperations.js'
import { getCachedBackend } from '../../utils/swarm/backends/registry.js'
import { removeMemberFromTeam, setMemberMode, setMultipleMemberModes } from '../../utils/swarm/teamHelpers.js'
import { listTasks, type Task } from '../../utils/tasks.js'
import { getTeammateStatuses, type TeammateStatus, type TeamSummary } from '../../utils/teamDiscovery.js'
import { createModeSetRequestMessage, sendShutdownRequestToMailbox, writeToMailbox } from '../../utils/teammateMailbox.js'
import { Dialog } from '../design-system/Dialog.js'
import ThemedText from '../design-system/ThemedText.js'

type Props = {
  initialTeams?: TeamSummary[]
  onDone: () => void
}

type DialogLevel = {
  type: 'teammateList'
  teamName: string
} | {
  type: 'teammateDetail'
  teamName: string
  memberName: string
}

/**
 * Dialog for viewing teammates in the current team
 */
export function TeamsDialog({
  initialTeams,
  onDone
}: Props): React.ReactNode {
  // Register as overlay so CancelRequestHandler doesn't intercept escape
  useRegisterOverlay('teams-dialog')

  // initialTeams is derived from teamContext in PromptInput (no filesystem I/O)
  const setAppState = useSetAppState()

  // Initialize dialogLevel with first team name if available
  const firstTeamName = initialTeams?.[0]?.name ?? ''
  const [dialogLevel, setDialogLevel] = useState<DialogLevel>({
    type: 'teammateList',
    teamName: firstTeamName
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)

  const teammateStatuses = useMemo(() => {
    return getTeammateStatuses(dialogLevel.teamName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  }, [dialogLevel.teamName, refreshKey])

  // Periodically refresh to pick up mode changes from teammates
  useInterval(() => {
    setRefreshKey(k => k + 1)
  }, 1000)

  const currentTeammate = useMemo(() => {
    if (dialogLevel.type !== 'teammateDetail') return null
    return teammateStatuses.find(t => t.name === dialogLevel.memberName) ?? null
  }, [dialogLevel, teammateStatuses])

  // Get isBypassPermissionsModeAvailable from AppState
  const isBypassAvailable = useAppState(s => s.toolPermissionContext.isBypassPermissionsModeAvailable)

  const goBackToList = (): void => {
    setDialogLevel({
      type: 'teammateList',
      teamName: dialogLevel.teamName
    })
    setSelectedIndex(0)
  }

  // Handler for confirm:cycleMode - cycle teammate permission modes
  const handleCycleMode = useCallback(() => {
    if (dialogLevel.type === 'teammateDetail' && currentTeammate) {
      // Detail view: cycle just this teammate
      cycleTeammateMode(currentTeammate, dialogLevel.teamName, isBypassAvailable)
      setRefreshKey(k => k + 1)
    } else if (dialogLevel.type === 'teammateList' && teammateStatuses.length > 0) {
      // List view: cycle all teammates in tandem
      cycleAllTeammateModes(teammateStatuses, dialogLevel.teamName, isBypassAvailable)
      setRefreshKey(k => k + 1)
    }
  }, [dialogLevel, currentTeammate, teammateStatuses, isBypassAvailable])

  // Use keybindings for mode cycling
  useKeybindings({
    'confirm:cycleMode': handleCycleMode
  }, {
    context: 'Confirmation'
  })

  useInput((input, key) => {
    // Handle left arrow to go back
    if (key.leftArrow) {
      if (dialogLevel.type === 'teammateDetail') {
        goBackToList()
      }
      return
    }

    // Handle up/down navigation
    if (key.upArrow || key.downArrow) {
      const maxIndex = getMaxIndex()
      if (key.upArrow) {
        setSelectedIndex(prev => Math.max(0, prev - 1))
      } else {
        setSelectedIndex(prev => Math.min(maxIndex, prev + 1))
      }
      return
    }

    // Handle Enter to drill down
    if (key.return) {
      if (dialogLevel.type === 'teammateList' && teammateStatuses[selectedIndex]) {
        setDialogLevel({
          type: 'teammateDetail',
          teamName: dialogLevel.teamName,
          memberName: teammateStatuses[selectedIndex].name
        })
      } else if (dialogLevel.type === 'teammateDetail' && currentTeammate) {
        onDone()
      }
      return
    }

    // Handle 'k' to kill teammate
    if (input === 'k') {
      if (dialogLevel.type === 'teammateList' && teammateStatuses[selectedIndex]) {
        void killTeammate(teammateStatuses[selectedIndex], dialogLevel.teamName, setAppState).then(() => {
          setRefreshKey(k => k + 1)
          setSelectedIndex(prev => Math.max(0, Math.min(prev, teammateStatuses.length - 2)))
        })
      } else if (dialogLevel.type === 'teammateDetail' && currentTeammate) {
        void killTeammate(currentTeammate, dialogLevel.teamName, setAppState)
        goBackToList()
      }
      return
    }

    // Handle 's' for shutdown of selected teammate
    if (input === 's') {
      if (dialogLevel.type === 'teammateList' && teammateStatuses[selectedIndex]) {
        const teammate = teammateStatuses[selectedIndex]
        void sendShutdownRequestToMailbox(teammate.name, dialogLevel.teamName, 'Graceful shutdown requested by team lead')
      } else if (dialogLevel.type === 'teammateDetail' && currentTeammate) {
        void sendShutdownRequestToMailbox(currentTeammate.name, dialogLevel.teamName, 'Graceful shutdown requested by team lead')
        goBackToList()
      }
      return
    }

    // Handle 'h' to hide/show individual teammate (only for backends that support it)
    if (input === 'h') {
      const backend = getCachedBackend()
      const teammate = dialogLevel.type === 'teammateList' ? teammateStatuses[selectedIndex] : dialogLevel.type === 'teammateDetail' ? currentTeammate : null
      if (teammate && backend?.supportsHideShow) {
        void toggleTeammateVisibility(teammate, dialogLevel.teamName).then(() => {
          setRefreshKey(k => k + 1)
        })
        if (dialogLevel.type === 'teammateDetail') {
          goBackToList()
        }
      }
      return
    }

    // Handle 'H' to hide/show all teammates (only for backends that support it)
    if (input === 'H' && dialogLevel.type === 'teammateList') {
      const backend = getCachedBackend()
      if (backend?.supportsHideShow && teammateStatuses.length > 0) {
        const anyVisible = teammateStatuses.some(t => !t.isHidden)
        void Promise.all(teammateStatuses.map(t => anyVisible ? hideTeammate(t, dialogLevel.teamName) : showTeammate(t, dialogLevel.teamName))).then(() => {
          setRefreshKey(k => k + 1)
        })
      }
      return
    }

    // Handle 'p' to prune (kill) all idle teammates
    if (input === 'p' && dialogLevel.type === 'teammateList') {
      const idleTeammates = teammateStatuses.filter(t => t.status === 'idle')
      if (idleTeammates.length > 0) {
        void Promise.all(idleTeammates.map(t => killTeammate(t, dialogLevel.teamName, setAppState))).then(() => {
          setRefreshKey(k => k + 1)
          setSelectedIndex(prev => Math.max(0, Math.min(prev, teammateStatuses.length - idleTeammates.length - 1)))
        })
      }
      return
    }
  })

  function getMaxIndex(): number {
    if (dialogLevel.type === 'teammateList') {
      return Math.max(0, teammateStatuses.length - 1)
    }
    return 0
  }

  // Render based on dialog level
  if (dialogLevel.type === 'teammateList') {
    return <TeamDetailView teamName={dialogLevel.teamName} teammates={teammateStatuses} selectedIndex={selectedIndex} onCancel={onDone} />
  }
  if (dialogLevel.type === 'teammateDetail' && currentTeammate) {
    return <TeammateDetailView teammate={currentTeammate} teamName={dialogLevel.teamName} onCancel={goBackToList} />
  }
  return null
}

type TeamDetailViewProps = {
  teamName: string
  teammates: TeammateStatus[]
  selectedIndex: number
  onCancel: () => void
}

function TeamDetailView({
  teamName,
  teammates,
  selectedIndex,
  onCancel
}: TeamDetailViewProps): React.ReactNode {
  const subtitle = `${teammates.length} ${teammates.length === 1 ? 'teammate' : 'teammates'}`
  const supportsHideShow = getCachedBackend()?.supportsHideShow ?? false
  const cycleModeShortcut = useShortcutDisplay('confirm:cycleMode', 'Confirmation', 'shift+tab')

  return (
    <>
      <Dialog title={`Team ${teamName}`} subtitle={subtitle} onCancel={onCancel} color="background" hideInputGuide>
        {teammates.length === 0 ? (
          <Text dimColor>No teammates</Text>
        ) : (
          <Box flexDirection="column">
            {teammates.map((teammate, index) => (
              <TeammateListItem key={teammate.agentId} teammate={teammate} isSelected={index === selectedIndex} />
            ))}
          </Box>
        )}
      </Dialog>
      <Box marginLeft={1}>
        <Text dimColor>
          {figures.arrowUp}/{figures.arrowDown} select · Enter view · k kill · s shutdown · p prune idle
          {supportsHideShow && ' · h hide/show · H hide/show all'}
          {' · '}{cycleModeShortcut} sync cycle modes for all · Esc close
        </Text>
      </Box>
    </>
  )
}

type TeammateListItemProps = {
  teammate: TeammateStatus
  isSelected: boolean
}

function TeammateListItem({
  teammate,
  isSelected
}: TeammateListItemProps): React.ReactNode {
  const isIdle = teammate.status === 'idle'
  const shouldDim = isIdle && !isSelected
  const mode = teammate.mode ? permissionModeFromString(teammate.mode) : 'default'
  const modeSym = permissionModeSymbol(mode)
  const modeColor = getModeColor(mode)

  return (
    <Text color={isSelected ? 'suggestion' : undefined} dimColor={shouldDim}>
      {isSelected ? `${figures.pointer} ` : '  '}
      {teammate.isHidden && <Text dimColor>[hidden] </Text>}
      {isIdle && <Text dimColor>[idle] </Text>}
      {modeSym && <Text color={modeColor}>{modeSym} </Text>}
      @{teammate.name}
      {teammate.model && <Text dimColor> ({teammate.model})</Text>}
    </Text>
  )
}

type TeammateDetailViewProps = {
  teammate: TeammateStatus
  teamName: string
  onCancel: () => void
}

function TeammateDetailView({
  teammate,
  teamName,
  onCancel
}: TeammateDetailViewProps): React.ReactNode {
  const [promptExpanded, setPromptExpanded] = useState(false)
  const cycleModeShortcut = useShortcutDisplay('confirm:cycleMode', 'Confirmation', 'shift+tab')
  const themeColor = teammate.color ? AGENT_COLOR_TO_THEME_COLOR[teammate.color as keyof typeof AGENT_COLOR_TO_THEME_COLOR] : undefined
  const [teammateTasks, setTeammateTasks] = useState<Task[]>([])

  useEffect(() => {
    let cancelled = false
    listTasks(teamName).then(allTasks => {
      if (cancelled) return
      setTeammateTasks(allTasks.filter(task => task.owner === teammate.agentId || task.owner === teammate.name))
    })
    return () => { cancelled = true }
  }, [teamName, teammate.agentId, teammate.name])

  useInput(input => {
    if (input === 'p') {
      setPromptExpanded(prev => !prev)
    }
  })

  const workingPath = teammate.worktreePath || teammate.cwd
  const subtitleParts: string[] = []
  if (teammate.model) subtitleParts.push(teammate.model)
  if (workingPath) subtitleParts.push(teammate.worktreePath ? `worktree: ${workingPath}` : workingPath)
  const subtitle = subtitleParts.join(' · ') || undefined

  const mode = teammate.mode ? permissionModeFromString(teammate.mode) : 'default'
  const modeSym = permissionModeSymbol(mode)
  const modeColor = getModeColor(mode)

  const title = (
    <>
      {modeSym && <Text color={modeColor}>{modeSym} </Text>}
      {themeColor ? <ThemedText color={themeColor}>{`@${teammate.name}`}</ThemedText> : `@${teammate.name}`}
    </>
  )

  return (
    <>
      <Dialog title={title} subtitle={subtitle} onCancel={onCancel} color="background" hideInputGuide>
        {teammateTasks.length > 0 && (
          <Box flexDirection="column">
            <Text bold>Tasks</Text>
            {teammateTasks.map(task => (
              <Text key={task.id} color={task.status === 'completed' ? 'success' : undefined}>
                {task.status === 'completed' ? figures.tick : '◼'} {task.subject}
              </Text>
            ))}
          </Box>
        )}
        {teammate.prompt && (
          <Box flexDirection="column">
            <Text bold>Prompt</Text>
            <Text>
              {promptExpanded ? teammate.prompt : truncateToWidth(teammate.prompt, 80)}
              {stringWidth(teammate.prompt) > 80 && !promptExpanded && (
                <Text dimColor> (p to expand)</Text>
              )}
            </Text>
          </Box>
        )}
      </Dialog>
      <Box marginLeft={1}>
        <Text dimColor>
          {figures.arrowLeft} back · Esc close · k kill · s shutdown
          {getCachedBackend()?.supportsHideShow && ' · h hide/show'}
          {' · '}{cycleModeShortcut} cycle mode
        </Text>
      </Box>
    </>
  )
}

async function killTeammate(
  teammate: TeammateStatus,
  teamName: string,
  setAppState: (f: (prev: AppState) => AppState) => void
): Promise<void> {
  // Remove from team config file
  removeMemberFromTeam(teamName, teammate.agentId)

  // Unassign tasks and build notification message
  const { notificationMessage } = await unassignTeammateTasks(teamName, teammate.agentId, teammate.name, 'terminated')

  // Update AppState to keep status line in sync and notify the lead
  setAppState(prev => {
    if (!prev.teamContext?.teammates) return prev
    if (!(teammate.agentId in prev.teamContext.teammates)) return prev
    const { [teammate.agentId]: _, ...remainingTeammates } = prev.teamContext.teammates
    return {
      ...prev,
      teamContext: {
        ...prev.teamContext,
        teammates: remainingTeammates
      },
      inbox: {
        messages: [...prev.inbox.messages, {
          id: randomUUID(),
          from: 'system',
          text: jsonStringify({
            type: 'teammate_terminated',
            message: notificationMessage
          }),
          timestamp: new Date().toISOString(),
          status: 'pending' as const
        }]
      }
    }
  })
  logForDebugging(`[TeamsDialog] Removed ${teammate.agentId} from teamContext`)
}

/**
 * Toggle visibility of a teammate pane (hide if visible, show if hidden)
 */
async function toggleTeammateVisibility(teammate: TeammateStatus, teamName: string): Promise<void> {
  if (teammate.isHidden) {
    await showTeammate(teammate, teamName)
  } else {
    await hideTeammate(teammate, teamName)
  }
}

/**
 * Hide a teammate pane using the backend abstraction.
 * Only available for ant users (gated for dead code elimination in external builds)
 */
async function hideTeammate(_teammate: TeammateStatus, _teamName: string): Promise<void> {}

/**
 * Show a previously hidden teammate pane using the backend abstraction.
 * Only available for ant users (gated for dead code elimination in external builds)
 */
async function showTeammate(_teammate: TeammateStatus, _teamName: string): Promise<void> {}

/**
 * Send a mode change message to a single teammate
 * Also updates config.json directly so the UI reflects the change immediately
 */
function sendModeChangeToTeammate(teammateName: string, teamName: string, targetMode: PermissionMode): void {
  // Update config.json directly so UI shows the change immediately
  setMemberMode(teamName, teammateName, targetMode)

  // Also send message so teammate updates their local permission context
  const message = createModeSetRequestMessage({
    mode: targetMode,
    from: 'team-lead'
  })
  void writeToMailbox(teammateName, {
    from: 'team-lead',
    text: jsonStringify(message),
    timestamp: new Date().toISOString()
  }, teamName)
  logForDebugging(`[TeamsDialog] Sent mode change to ${teammateName}: ${targetMode}`)
}

/**
 * Cycle a single teammate's mode
 */
function cycleTeammateMode(teammate: TeammateStatus, teamName: string, isBypassAvailable: boolean): void {
  const currentMode = teammate.mode ? permissionModeFromString(teammate.mode) : 'default'
  const context = {
    ...getEmptyToolPermissionContext(),
    mode: currentMode,
    isBypassPermissionsModeAvailable: isBypassAvailable
  }
  const nextMode = getNextPermissionMode(context)
  sendModeChangeToTeammate(teammate.name, teamName, nextMode)
}

/**
 * Cycle all teammates' modes in tandem
 * If modes differ, reset all to default first
 * If same, cycle all to next mode
 * Uses batch update to avoid race conditions
 */
function cycleAllTeammateModes(teammates: TeammateStatus[], teamName: string, isBypassAvailable: boolean): void {
  if (teammates.length === 0) return
  const modes = teammates.map(t => t.mode ? permissionModeFromString(t.mode) : 'default')
  const allSame = modes.every(m => m === modes[0])

  // Determine target mode for all teammates
  const targetMode = !allSame ? 'default' : getNextPermissionMode({
    ...getEmptyToolPermissionContext(),
    mode: modes[0] ?? 'default',
    isBypassPermissionsModeAvailable: isBypassAvailable
  })

  // Batch update config.json in a single atomic operation
  const modeUpdates = teammates.map(t => ({
    memberName: t.name,
    mode: targetMode
  }))
  setMultipleMemberModes(teamName, modeUpdates)

  // Send mailbox messages to each teammate
  for (const teammate of teammates) {
    const message = createModeSetRequestMessage({
      mode: targetMode,
      from: 'team-lead'
    })
    void writeToMailbox(teammate.name, {
      from: 'team-lead',
      text: jsonStringify(message),
      timestamp: new Date().toISOString()
    }, teamName)
  }
  logForDebugging(`[TeamsDialog] Sent mode change to all ${teammates.length} teammates: ${targetMode}`)
}
