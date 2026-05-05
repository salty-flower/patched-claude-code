/**
 * Shared spawn module for teammate creation.
 * Extracted from TeammateTool to allow reuse by AgentTool.
 */

import React from 'react'
import {
  getChromeFlagOverride,
  getFlagSettingsPath,
  getInlinePlugins,
  getMainLoopModelOverride,
  getSessionBypassPermissionsMode,
  getSessionId,
} from '../../bootstrap/state.js'
import type { AppState } from '../../state/AppState.js'
import { createTaskStateBase, generateTaskId } from '../../Task.js'
import type { ToolUseContext } from '../../Tool.js'
import type { InProcessTeammateTaskState } from '../../tasks/InProcessTeammateTask/types.js'
import { formatAgentId } from '../../utils/agentId.js'
import { quote } from '../../utils/bash/shellQuote.js'
import { isInBundledMode } from '../../utils/bundledMode.js'
import { getGlobalConfig } from '../../utils/config.js'
import { getCwd } from '../../utils/cwd.js'
import { logForDebugging } from '../../utils/debug.js'
import { errorMessage } from '../../utils/errors.js'
import { execFileNoThrow } from '../../utils/execFileNoThrow.js'
import { parseUserSpecifiedModel } from '../../utils/model/model.js'
import type { PermissionMode } from '../../utils/permissions/PermissionMode.js'
import { isTmuxAvailable } from '../../utils/swarm/backends/detection.js'
import {
  detectAndGetBackend,
  getBackendByType,
  isInProcessEnabled,
  markInProcessFallback,
  resetBackendDetection,
} from '../../utils/swarm/backends/registry.js'
import { getTeammateModeFromSnapshot } from '../../utils/swarm/backends/teammateModeSnapshot.js'
import type { BackendType } from '../../utils/swarm/backends/types.js'
import { isPaneBackend } from '../../utils/swarm/backends/types.js'
import {
  SWARM_SESSION_NAME,
  TEAM_LEAD_NAME,
  TEAMMATE_COMMAND_ENV_VAR,
  TMUX_COMMAND,
} from '../../utils/swarm/constants.js'
import { It2SetupPrompt } from '../../utils/swarm/It2SetupPrompt.js'
import { startInProcessTeammate } from '../../utils/swarm/inProcessRunner.js'
import {
  type InProcessSpawnConfig,
  spawnInProcessTeammate,
} from '../../utils/swarm/spawnInProcess.js'
import { buildInheritedEnvVars } from '../../utils/swarm/spawnUtils.js'
import {
  readTeamFileAsync,
  sanitizeAgentName,
  sanitizeName,
  writeTeamFileAsync,
} from '../../utils/swarm/teamHelpers.js'
import {
  assignTeammateColor,
  createTeammatePaneInSwarmView,
  enablePaneBorderStatus,
  isInsideTmux,
  sendCommandToPane,
} from '../../utils/swarm/teammateLayoutManager.js'
import { getHardcodedTeammateModelFallback } from '../../utils/swarm/teammateModel.js'
import { registerTask } from '../../utils/task/framework.js'
import { writeToMailbox } from '../../utils/teammateMailbox.js'
import type { CustomAgentDefinition } from '../AgentTool/loadAgentsDir.js'
import { isCustomAgent } from '../AgentTool/loadAgentsDir.js'

// v112: TeamFile registration factored into y77 helper (registerTeammateInTeamFile).
// TODO(lift): y77 at byte ~8312343 — registers teammate in team file (async).
// Signature: y77(teamName, teammateId, {tmuxPaneId, backendType}) => Promise<void>
async function _registerTeammateInTeamFile_V112(
  teamName: string,
  teammateId: string,
  opts: { tmuxPaneId: string; backendType: BackendType | 'in-process' },
): Promise<void> {
  // TODO(lift): y77 implementation at byte ~8312343
  void teamName
  void teammateId
  void opts
}

// v112: O18 — registers agent in the team file member list.
// TODO(lift): O18 at byte ~8312412 — likely writeTeamFileAsync wrapper.
async function _registerAgentInTeamFile_V112(
  sanitizedName: string,
  teamName: string,
): Promise<void> {
  // TODO(lift): O18 implementation at byte ~8312412
  void sanitizedName
  void teamName
}

// v112: E77 — shared spawn orchestration helper (new in v112).
// Wraps: name resolution, sanitization, ID generation, color assignment,
// and the per-backend spawn callback. Not in this chunk's region.
// TODO(lift): E77 at byte ~8314281 — central spawn orchestration.
// Signature: E77(name, teamName, opts, teammateColors, callback) => Promise<{data: SpawnOutput}>
type _E77TeammateIdentity = {
  sanitizedName: string
  teammateId: string
  teammateColor: string
}
type _E77Callback = (
  identity: _E77TeammateIdentity,
  registerInTeamFile: () => void,
  onAbort: (fn: () => void) => void,
) => Promise<{ data: SpawnOutput }>

function _E77_V112(
  _name: string,
  _teamName: string,
  _opts: {
    agentType?: string
    model?: string
    prompt: string
    planModeRequired?: boolean
    cwd: string
  },
  _teammateColors: unknown,
  _callback: _E77Callback,
): Promise<{ data: SpawnOutput }> {
  // TODO(lift): E77 implementation at byte ~8314281
  throw new Error('TODO(lift): E77 not implemented')
}

function getDefaultTeammateModel(leaderModel: string | null): string {
  const configured = getGlobalConfig().teammateDefaultModel
  if (configured === null) {
    return leaderModel ?? getHardcodedTeammateModelFallback()
  }
  if (configured !== undefined) {
    return parseUserSpecifiedModel(configured)
  }
  return getHardcodedTeammateModelFallback()
}

/**
 * Resolve a teammate model value. Handles the 'inherit' alias.
 * Exported for testing.
 */
export function resolveTeammateModel(
  inputModel: string | undefined,
  leaderModel: string | null,
): string {
  if (inputModel === 'inherit') {
    return leaderModel ?? getDefaultTeammateModel(leaderModel)
  }
  return inputModel ?? getDefaultTeammateModel(leaderModel)
}

// ============================================================================
// Types
// ============================================================================

export type SpawnOutput = {
  teammate_id: string
  agent_id: string
  agent_type?: string
  model?: string
  name: string
  color?: string
  tmux_session_name: string
  tmux_window_name: string
  tmux_pane_id: string
  team_name?: string
  is_splitpane?: boolean
  plan_mode_required?: boolean
}

export type SpawnTeammateConfig = {
  name: string
  prompt: string
  team_name?: string
  cwd?: string
  use_splitpane?: boolean
  plan_mode_required?: boolean
  model?: string
  agent_type?: string
  description?: string
  /** request_id of the API call whose response contained the tool_use that
   *  spawned this teammate. */
  invokingRequestId?: string
}

// Internal input type matching TeammateTool's spawn parameters
type SpawnInput = {
  name: string
  prompt: string
  team_name?: string
  cwd?: string
  use_splitpane?: boolean
  plan_mode_required?: boolean
  model?: string
  agent_type?: string
  description?: string
  invokingRequestId?: string
}

// ============================================================================
// Helper Functions
// ============================================================================

async function hasSession(sessionName: string): Promise<boolean> {
  const result = await execFileNoThrow(TMUX_COMMAND, [
    'has-session',
    '-t',
    sessionName,
  ])
  return result.code === 0
}

async function ensureSession(sessionName: string): Promise<void> {
  const exists = await hasSession(sessionName)
  if (!exists) {
    const result = await execFileNoThrow(TMUX_COMMAND, [
      'new-session',
      '-d',
      '-s',
      sessionName,
    ])
    if (result.code !== 0) {
      throw new Error(
        `Failed to create tmux session '${sessionName}': ${result.stderr || 'Unknown error'}`,
      )
    }
  }
}

function getTeammateCommand(): string {
  if (process.env[TEAMMATE_COMMAND_ENV_VAR]) {
    return process.env[TEAMMATE_COMMAND_ENV_VAR]
  }
  return isInBundledMode() ? process.execPath : process.argv[1]!
}

function buildInheritedCliFlags(options?: {
  planModeRequired?: boolean
  permissionMode?: PermissionMode
}): string {
  const flags: string[] = []
  const { planModeRequired, permissionMode } = options || {}

  if (planModeRequired) {
    // Don't inherit bypass permissions when plan mode is required
  } else if (
    permissionMode === 'bypassPermissions' ||
    getSessionBypassPermissionsMode()
  ) {
    flags.push('--dangerously-skip-permissions')
  } else if (permissionMode === 'acceptEdits') {
    flags.push('--permission-mode acceptEdits')
  } else if (permissionMode === 'auto') {
    flags.push('--permission-mode auto')
  }

  const modelOverride = getMainLoopModelOverride()
  if (modelOverride) {
    flags.push(`--model ${quote([modelOverride])}`)
  }

  const settingsPath = getFlagSettingsPath()
  if (settingsPath) {
    flags.push(`--settings ${quote([settingsPath])}`)
  }

  const inlinePlugins = getInlinePlugins()
  for (const pluginDir of inlinePlugins) {
    flags.push(`--plugin-dir ${quote([pluginDir])}`)
  }

  const chromeFlagOverride = getChromeFlagOverride()
  if (chromeFlagOverride === true) {
    flags.push('--chrome')
  } else if (chromeFlagOverride === false) {
    flags.push('--no-chrome')
  }

  return flags.join(' ')
}

/**
 * Generates a unique teammate name by checking existing team members.
 * v112 change (jac=0.994): now takes a pre-fetched team file object instead of
 * teamName string (avoids double async fetch). Sanitizes name via sanitizeAgentName
 * before uniqueness check.
 * @internal Exported for testing
 */
export async function generateUniqueTeammateName(
  baseName: string,
  teamName: string | undefined,
): Promise<string> {
  if (!teamName) {
    return baseName
  }

  const teamFile = await readTeamFileAsync(teamName)
  if (!teamFile) {
    return baseName
  }

  // v112: sanitize first, then check uniqueness against sanitized names
  const sanitized = sanitizeAgentName(baseName)
  const existingNames = new Set(teamFile.members.map(m => m.name.toLowerCase()))

  if (!existingNames.has(sanitized.toLowerCase())) {
    return sanitized
  }

  let suffix = 2
  while (existingNames.has(`${sanitized}-${suffix}`.toLowerCase())) {
    suffix++
  }

  return `${sanitized}-${suffix}`
}

// ============================================================================
// Spawn Handlers
// ============================================================================

/**
 * Handle spawn operation using split-pane view (default).
 * v112 change (jac=0.875): now uses E77 helper for shared orchestration.
 * Teammate registration in team file is factored into O18/y77 helpers.
 * `registerOutOfProcessTeammateTask` now receives `taskRegistry` from context.
 * Added `cwd` field to task state.
 */
async function handleSpawnSplitPane(
  input: SpawnInput,
  context: ToolUseContext,
): Promise<{ data: SpawnOutput }> {
  const { setAppState, getAppState } = context
  const { name, prompt, agent_type, cwd, plan_mode_required } = input

  const model = resolveTeammateModel(input.model, getAppState().mainLoopModel)

  if (!name || !prompt) {
    throw new Error('name and prompt are required for spawn operation')
  }

  const appState = getAppState()
  const teamName = input.team_name || appState.teamContext?.teamName

  if (!teamName) {
    throw new Error(
      'team_name is required for spawn operation. Either provide team_name in input or call spawnTeam first to establish team context.',
    )
  }

  const workingDir = cwd || getCwd()

  // v112: uses E77 to orchestrate teammate creation
  return _E77_V112(
    name,
    teamName,
    { agentType: agent_type, model, prompt, planModeRequired: plan_mode_required, cwd: workingDir },
    // TODO(lift): K.teammateColors is passed — context has a new `teammateColors` field
    (context as unknown as { teammateColors: unknown }).teammateColors,
    async ({ sanitizedName, teammateId, teammateColor }, registerInTeamFile, onAbort) => {
      let detectionResult = await detectAndGetBackend()

      if (detectionResult.needsIt2Setup && context.setToolJSX) {
        const tmuxAvailable = await isTmuxAvailable()

        const setupResult = await new Promise<'installed' | 'use-tmux' | 'cancelled'>(
          resolve => {
            context.setToolJSX!({
              jsx: React.createElement(It2SetupPrompt, {
                onDone: resolve,
                tmuxAvailable,
              }),
              shouldHidePromptInput: true,
            })
          },
        )

        context.setToolJSX(null)

        if (setupResult === 'cancelled') {
          throw new Error('Teammate spawn cancelled - iTerm2 setup required')
        }

        if (setupResult === 'installed' || setupResult === 'use-tmux') {
          resetBackendDetection()
          detectionResult = await detectAndGetBackend()
        }
      }

      const insideTmux = await isInsideTmux()

      const { paneId, isFirstTeammate } = await createTeammatePaneInSwarmView(
        sanitizedName,
        teammateColor,
      )

      // v112: abort handler registered via onAbort callback from E77
      onAbort(() => detectionResult.backend.killPane(paneId, !insideTmux))

      // v112: team file registration factored into y77
      await _registerTeammateInTeamFile_V112(teamName, teammateId, {
        tmuxPaneId: paneId,
        backendType: detectionResult.backend.type,
      })

      if (isFirstTeammate && insideTmux) {
        await enablePaneBorderStatus()
      }

      const binaryPath = getTeammateCommand()

      const teammateArgs = [
        `--agent-id ${quote([teammateId])}`,
        `--agent-name ${quote([sanitizedName])}`,
        `--team-name ${quote([teamName])}`,
        `--agent-color ${quote([teammateColor])}`,
        `--parent-session-id ${quote([getSessionId()])}`,
        plan_mode_required ? '--plan-mode-required' : '',
        agent_type ? `--agent-type ${quote([agent_type])}` : '',
      ]
        .filter(Boolean)
        .join(' ')

      let inheritedFlags = buildInheritedCliFlags({
        planModeRequired: plan_mode_required,
        permissionMode: appState.toolPermissionContext.mode,
      })

      if (model) {
        inheritedFlags = inheritedFlags
          .split(' ')
          .filter((flag, i, arr) => flag !== '--model' && arr[i - 1] !== '--model')
          .join(' ')
        inheritedFlags = inheritedFlags
          ? `${inheritedFlags} --model ${quote([model])}`
          : `--model ${quote([model])}`
      }

      const flagsStr = inheritedFlags ? ` ${inheritedFlags}` : ''
      const envStr = buildInheritedEnvVars()
      const spawnCommand = `cd ${quote([workingDir])} && env ${envStr} ${quote([binaryPath])} ${teammateArgs}${flagsStr}`

      // v112: O18 registers agent in team file member list (factored out)
      await _registerAgentInTeamFile_V112(sanitizedName, teamName)

      await writeToMailbox(
        sanitizedName,
        {
          from: TEAM_LEAD_NAME,
          text: prompt,
          timestamp: new Date().toISOString(),
        },
        teamName,
      )

      await sendCommandToPane(paneId, spawnCommand, !insideTmux)

      // v112: registerInTeamFile() called after spawn succeeds
      registerInTeamFile()

      const sessionName = insideTmux ? 'current' : SWARM_SESSION_NAME
      const windowName = insideTmux ? 'current' : 'swarm-view'

      setAppState(prev => ({
        ...prev,
        teamContext: {
          ...prev.teamContext,
          teamName: teamName ?? prev.teamContext?.teamName ?? 'default',
          teamFilePath: prev.teamContext?.teamFilePath ?? '',
          leadAgentId: prev.teamContext?.leadAgentId ?? '',
          teammates: {
            ...(prev.teamContext?.teammates || {}),
            [teammateId]: {
              name: sanitizedName,
              agentType: agent_type,
              color: teammateColor,
              tmuxSessionName: sessionName,
              tmuxPaneId: paneId,
              cwd: workingDir,
              spawnedAt: Date.now(),
            },
          },
        },
      }))

      // v112: taskRegistry from context (not setAppState) is passed
      registerOutOfProcessTeammateTask(
        (context as unknown as { taskRegistry: unknown }).taskRegistry as Parameters<typeof registerOutOfProcessTeammateTask>[0],
        {
          teammateId,
          sanitizedName,
          teamName,
          teammateColor,
          prompt,
          plan_mode_required,
          paneId,
          insideTmux,
          backendType: detectionResult.backend.type,
          toolUseId: context.toolUseId,
          cwd: workingDir,
        },
      )

      return {
        data: {
          teammate_id: teammateId,
          agent_id: teammateId,
          agent_type,
          model,
          name: sanitizedName,
          color: teammateColor,
          tmux_session_name: sessionName,
          tmux_window_name: windowName,
          tmux_pane_id: paneId,
          team_name: teamName,
          is_splitpane: true,
          plan_mode_required,
        },
      }
    },
  )
}

/**
 * Handle spawn operation using separate windows (legacy behavior).
 * v112 change (jac=0.866): uses E77 helper, taskRegistry from context, adds cwd.
 */
async function handleSpawnSeparateWindow(
  input: SpawnInput,
  context: ToolUseContext,
): Promise<{ data: SpawnOutput }> {
  const { setAppState, getAppState } = context
  const { name, prompt, agent_type, cwd, plan_mode_required } = input

  const model = resolveTeammateModel(input.model, getAppState().mainLoopModel)

  if (!name || !prompt) {
    throw new Error('name and prompt are required for spawn operation')
  }

  const appState = getAppState()
  const teamName = input.team_name || appState.teamContext?.teamName

  if (!teamName) {
    throw new Error(
      'team_name is required for spawn operation. Either provide team_name in input or call spawnTeam first to establish team context.',
    )
  }

  const workingDir = cwd || getCwd()

  return _E77_V112(
    name,
    teamName,
    { agentType: agent_type, model, prompt, planModeRequired: plan_mode_required, cwd: workingDir },
    (context as unknown as { teammateColors: unknown }).teammateColors,
    async ({ sanitizedName, teammateId, teammateColor }, registerInTeamFile, onAbort) => {
      const windowName = `teammate-${sanitizeName(sanitizedName)}`

      await ensureSession(SWARM_SESSION_NAME)

      const createWindowResult = await execFileNoThrow(TMUX_COMMAND, [
        'new-window',
        '-t',
        SWARM_SESSION_NAME,
        '-n',
        windowName,
        '-P',
        '-F',
        '#{pane_id}',
      ])

      if (createWindowResult.code !== 0) {
        throw new Error(
          `Failed to create tmux window: ${createWindowResult.stderr}`,
        )
      }

      const paneId = createWindowResult.stdout.trim()

      // v112: abort kills the pane via execFileNoThrow directly
      onAbort(() => {
        void execFileNoThrow(TMUX_COMMAND, ['kill-pane', '-t', paneId])
      })

      // v112: team file registration factored into y77
      await _registerTeammateInTeamFile_V112(teamName, teammateId, {
        tmuxPaneId: paneId,
        backendType: 'tmux',
      })

      const binaryPath = getTeammateCommand()

      const teammateArgs = [
        `--agent-id ${quote([teammateId])}`,
        `--agent-name ${quote([sanitizedName])}`,
        `--team-name ${quote([teamName])}`,
        `--agent-color ${quote([teammateColor])}`,
        `--parent-session-id ${quote([getSessionId()])}`,
        plan_mode_required ? '--plan-mode-required' : '',
        agent_type ? `--agent-type ${quote([agent_type])}` : '',
      ]
        .filter(Boolean)
        .join(' ')

      let inheritedFlags = buildInheritedCliFlags({
        planModeRequired: plan_mode_required,
        permissionMode: appState.toolPermissionContext.mode,
      })

      if (model) {
        inheritedFlags = inheritedFlags
          .split(' ')
          .filter((flag, i, arr) => flag !== '--model' && arr[i - 1] !== '--model')
          .join(' ')
        inheritedFlags = inheritedFlags
          ? `${inheritedFlags} --model ${quote([model])}`
          : `--model ${quote([model])}`
      }

      const flagsStr = inheritedFlags ? ` ${inheritedFlags}` : ''
      const envStr = buildInheritedEnvVars()
      const spawnCommand = `cd ${quote([workingDir])} && env ${envStr} ${quote([binaryPath])} ${teammateArgs}${flagsStr}`

      // v112: O18 registers agent in team file
      await _registerAgentInTeamFile_V112(sanitizedName, teamName)

      await writeToMailbox(
        sanitizedName,
        {
          from: TEAM_LEAD_NAME,
          text: prompt,
          timestamp: new Date().toISOString(),
        },
        teamName,
      )

      const sendKeysResult = await execFileNoThrow(TMUX_COMMAND, [
        'send-keys',
        '-t',
        `${SWARM_SESSION_NAME}:${windowName}`,
        spawnCommand,
        'Enter',
      ])

      if (sendKeysResult.code !== 0) {
        throw new Error(
          `Failed to send command to tmux window: ${sendKeysResult.stderr}`,
        )
      }

      // v112: registerInTeamFile() called after spawn succeeds
      registerInTeamFile()

      setAppState(prev => ({
        ...prev,
        teamContext: {
          ...prev.teamContext,
          teamName: teamName ?? prev.teamContext?.teamName ?? 'default',
          teamFilePath: prev.teamContext?.teamFilePath ?? '',
          leadAgentId: prev.teamContext?.leadAgentId ?? '',
          teammates: {
            ...(prev.teamContext?.teammates || {}),
            [teammateId]: {
              name: sanitizedName,
              agentType: agent_type,
              color: teammateColor,
              tmuxSessionName: SWARM_SESSION_NAME,
              tmuxPaneId: paneId,
              cwd: workingDir,
              spawnedAt: Date.now(),
            },
          },
        },
      }))

      registerOutOfProcessTeammateTask(
        (context as unknown as { taskRegistry: unknown }).taskRegistry as Parameters<typeof registerOutOfProcessTeammateTask>[0],
        {
          teammateId,
          sanitizedName,
          teamName,
          teammateColor,
          prompt,
          plan_mode_required,
          paneId,
          insideTmux: false,
          backendType: 'tmux',
          toolUseId: context.toolUseId,
          cwd: workingDir,
        },
      )

      return {
        data: {
          teammate_id: teammateId,
          agent_id: teammateId,
          agent_type,
          model,
          name: sanitizedName,
          color: teammateColor,
          tmux_session_name: SWARM_SESSION_NAME,
          tmux_window_name: windowName,
          tmux_pane_id: paneId,
          team_name: teamName,
          is_splitpane: false,
          plan_mode_required,
        },
      }
    },
  )
}

/**
 * Register a background task entry for an out-of-process (tmux/iTerm2) teammate.
 * v112 change (jac=0.971): now takes `taskRegistry` (from context) instead of
 * `setAppState`. Adds `cwd` field to InProcessTeammateTaskState.
 */
function registerOutOfProcessTeammateTask(
  taskRegistry: {
    register: (state: InProcessTeammateTaskState) => void
  },
  {
    teammateId,
    sanitizedName,
    teamName,
    teammateColor,
    prompt,
    plan_mode_required,
    paneId,
    insideTmux,
    backendType,
    toolUseId,
    cwd,
  }: {
    teammateId: string
    sanitizedName: string
    teamName: string
    teammateColor: string
    prompt: string
    plan_mode_required?: boolean
    paneId: string
    insideTmux: boolean
    backendType: BackendType
    toolUseId?: string
    cwd: string  // v112 new field
  },
): void {
  const taskId = generateTaskId('in_process_teammate')
  const description = `${sanitizedName}: ${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}`

  const abortController = new AbortController()

  const taskState: InProcessTeammateTaskState = {
    ...createTaskStateBase(
      taskId,
      'in_process_teammate',
      description,
      toolUseId,
    ),
    type: 'in_process_teammate',
    status: 'running',
    cwd, // v112 new field
    identity: {
      agentId: teammateId,
      agentName: sanitizedName,
      teamName,
      color: teammateColor,
      planModeRequired: plan_mode_required ?? false,
      parentSessionId: getSessionId(),
    },
    prompt,
    abortController,
    awaitingPlanApproval: false,
    permissionMode: plan_mode_required ? 'plan' : 'default',
    isIdle: false,
    shutdownRequested: false,
    lastReportedToolCount: 0,
    lastReportedTokenCount: 0,
    pendingUserMessages: [],
  }

  // v112: taskRegistry.register() instead of registerTask(taskState, setAppState)
  taskRegistry.register(taskState)

  abortController.signal.addEventListener(
    'abort',
    () => {
      if (isPaneBackend(backendType)) {
        void getBackendByType(backendType).killPane(paneId, !insideTmux)
      }
    },
    { once: true },
  )
}

/**
 * Handle spawn operation for in-process teammates.
 * v112 change (jac=0.839): uses E77 helper, factored team file registration.
 * `teammateColors` comes from context. Leader auto-registration uses
 * `context.teammateColors.assign(leadAgentId)` instead of assignTeammateColor.
 */
async function handleSpawnInProcess(
  input: SpawnInput,
  context: ToolUseContext,
): Promise<{ data: SpawnOutput }> {
  const { setAppState, getAppState } = context
  const { name, prompt, agent_type, plan_mode_required } = input

  const model = resolveTeammateModel(input.model, getAppState().mainLoopModel)

  if (!name || !prompt) {
    throw new Error('name and prompt are required for spawn operation')
  }

  const appState = getAppState()
  const teamName = input.team_name || appState.teamContext?.teamName

  if (!teamName) {
    throw new Error(
      'team_name is required for spawn operation. Either provide team_name in input or call spawnTeam first to establish team context.',
    )
  }

  return _E77_V112(
    name,
    teamName,
    { agentType: agent_type, model, prompt, planModeRequired: plan_mode_required, cwd: getCwd() },
    (context as unknown as { teammateColors: unknown }).teammateColors,
    async ({ sanitizedName, teammateId, teammateColor }, registerInTeamFile) => {
      // v112: team file registration factored into y77
      await _registerTeammateInTeamFile_V112(teamName, teammateId, {
        tmuxPaneId: 'in-process',
        backendType: 'in-process',
      })

      let agentDefinition: CustomAgentDefinition | undefined
      if (agent_type) {
        const allAgents = context.options.agentDefinitions.activeAgents
        const foundAgent = allAgents.find(a => a.agentType === agent_type)
        if (foundAgent && isCustomAgent(foundAgent)) {
          agentDefinition = foundAgent
        }
        logForDebugging(
          `[handleSpawnInProcess] agent_type=${agent_type}, found=${!!agentDefinition}`,
        )
      }

      const config: InProcessSpawnConfig = {
        name: sanitizedName,
        teamName,
        prompt,
        color: teammateColor,
        planModeRequired: plan_mode_required ?? false,
        model,
      }

      // v112: O18 registers agent in team file before spawning
      await _registerAgentInTeamFile_V112(sanitizedName, teamName)

      const result = await spawnInProcessTeammate(config, context)

      if (!result.success) {
        throw new Error(result.error ?? 'Failed to spawn in-process teammate')
      }

      logForDebugging(
        `[handleSpawnInProcess] spawn result: taskId=${result.taskId}, hasContext=${!!result.teammateContext}, hasAbort=${!!result.abortController}`,
      )

      if (result.taskId && result.teammateContext && result.abortController) {
        startInProcessTeammate({
          identity: {
            agentId: teammateId,
            agentName: sanitizedName,
            teamName,
            color: teammateColor,
            planModeRequired: plan_mode_required ?? false,
            parentSessionId: result.teammateContext.parentSessionId,
          },
          taskId: result.taskId,
          prompt,
          description: input.description,
          model,
          agentDefinition,
          teammateContext: result.teammateContext,
          toolUseContext: { ...context, messages: [] },
          abortController: result.abortController,
          invokingRequestId: input.invokingRequestId,
        })
        logForDebugging(
          `[handleSpawnInProcess] Started agent execution for ${teammateId}`,
        )
      }

      // v112: registerInTeamFile() called after spawn succeeds
      registerInTeamFile()

      // v112: leader setup uses context.teammateColors.assign instead of assignTeammateColor
      const contextTeammateColors = (context as unknown as { teammateColors: { assign: (id: string) => string } }).teammateColors
      const existingLeadAgentId = getAppState().teamContext?.leadAgentId
      const needsLeaderSetup = !existingLeadAgentId
      const leadAgentId = needsLeaderSetup
        ? formatAgentId(TEAM_LEAD_NAME, teamName)
        : existingLeadAgentId!
      const leadColor = needsLeaderSetup
        ? contextTeammateColors.assign(leadAgentId)
        : undefined

      setAppState(prev => {
        const existingTeammates = prev.teamContext?.teammates || {}
        const leadEntry = needsLeaderSetup
          ? {
              [leadAgentId]: {
                name: TEAM_LEAD_NAME,
                agentType: TEAM_LEAD_NAME,
                color: leadColor,
                tmuxSessionName: 'in-process',
                tmuxPaneId: 'leader',
                cwd: getCwd(),
                spawnedAt: Date.now(),
              },
            }
          : {}

        return {
          ...prev,
          teamContext: {
            ...prev.teamContext,
            teamName: teamName ?? prev.teamContext?.teamName ?? 'default',
            teamFilePath: prev.teamContext?.teamFilePath ?? '',
            leadAgentId,
            teammates: {
              ...existingTeammates,
              ...leadEntry,
              [teammateId]: {
                name: sanitizedName,
                agentType: agent_type,
                color: teammateColor,
                tmuxSessionName: 'in-process',
                tmuxPaneId: 'in-process',
                cwd: getCwd(),
                spawnedAt: Date.now(),
              },
            },
          },
        }
      })

      return {
        data: {
          teammate_id: teammateId,
          agent_id: teammateId,
          agent_type,
          model,
          name: sanitizedName,
          color: teammateColor,
          tmux_session_name: 'in-process',
          tmux_window_name: 'in-process',
          tmux_pane_id: 'in-process',
          team_name: teamName,
          is_splitpane: false,
          plan_mode_required,
        },
      }
    },
  )
}

/**
 * Handle spawn operation - creates a new Claude Code instance.
 * v112: same structure as v88.
 */
async function handleSpawn(
  input: SpawnInput,
  context: ToolUseContext,
): Promise<{ data: SpawnOutput }> {
  if (isInProcessEnabled()) {
    return handleSpawnInProcess(input, context)
  }

  try {
    await detectAndGetBackend()
  } catch (error) {
    if (getTeammateModeFromSnapshot() !== 'auto') {
      throw error
    }
    logForDebugging(
      `[handleSpawn] No pane backend available, falling back to in-process: ${errorMessage(error)}`,
    )
    markInProcessFallback()
    return handleSpawnInProcess(input, context)
  }

  const useSplitPane = input.use_splitpane !== false
  if (useSplitPane) {
    return handleSpawnSplitPane(input, context)
  }
  return handleSpawnSeparateWindow(input, context)
}

// ============================================================================
// Main Export
// ============================================================================

/**
 * Spawns a new teammate with the given configuration.
 */
export async function spawnTeammate(
  config: SpawnTeammateConfig,
  context: ToolUseContext,
): Promise<{ data: SpawnOutput }> {
  return handleSpawn(config, context)
}
