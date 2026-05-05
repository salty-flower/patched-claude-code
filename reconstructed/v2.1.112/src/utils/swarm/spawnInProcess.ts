/**
 * In-process teammate spawning
 *
 * Creates and registers an in-process teammate task. Unlike process-based
 * teammates (tmux/iTerm2), in-process teammates run in the same Node.js
 * process using AsyncLocalStorage for context isolation.
 *
 * The actual agent execution loop is handled by InProcessTeammateTask
 * component (Task #14). This module handles:
 * 1. Creating TeammateContext
 * 2. Creating linked AbortController
 * 3. Registering InProcessTeammateTaskState in AppState
 * 4. Returning spawn result for backend
 *
 * In v112, this module was refactored to use a TaskRegistry abstraction
 * instead of direct setAppState manipulation. The killInProcessTeammate
 * function was moved here from inProcessRunner.ts.
 */

import sample from 'lodash-es/sample.js'
import { getSessionId } from '../../bootstrap/state.js'
import { getSpinnerVerbs } from '../../constants/spinnerVerbs.js'
import { TURN_COMPLETION_VERBS } from '../../constants/turnCompletionVerbs.js'
import type { AppState } from '../../state/AppState.js'
import { createTaskStateBase, generateTaskId } from '../../Task.js'
import type {
  InProcessTeammateTaskState,
  TeammateIdentity,
} from '../../tasks/InProcessTeammateTask/types.js'
import { createAbortController } from '../abortController.js'
import { formatAgentId } from '../agentId.js'
import { registerCleanup } from '../cleanupRegistry.js'
import { logForDebugging } from '../debug.js'
import { emitTaskTerminatedSdk } from '../sdkEventQueue.js'
import { evictTaskOutput } from '../task/diskOutput.js'
import {
  evictTerminalTask,
  STOPPED_DISPLAY_MS,
} from '../task/framework.js'
import { createTeammateContext } from '../teammateContext.js'
import {
  isPerfettoTracingEnabled,
  registerAgent as registerPerfettoAgent,
  unregisterAgent as unregisterPerfettoAgent,
} from '../telemetry/perfettoTracing.js'
import { removeMemberByAgentId } from './teamHelpers.js'

type SetAppStateFn = (updater: (prev: AppState) => AppState) => void

/**
 * Minimal context required for spawning an in-process teammate.
 * In v112, this was simplified to use taskRegistry instead of setAppState.
 */
export type SpawnContext = {
  setAppState: SetAppStateFn
  toolUseId?: string
  getAppState: () => AppState
  /**
   * Task registry abstraction introduced in v112.
   * Provides register(task) and evictTerminal(taskId) methods
   * to decouple task lifecycle from direct AppState manipulation.
   */
  taskRegistry: {
    register: (task: InProcessTeammateTaskState) => void
    evictTerminal: (taskId: string) => void
    update: (
      taskId: string,
      updater: (task: InProcessTeammateTaskState) => InProcessTeammateTaskState,
    ) => boolean
  }
}

/**
 * Configuration for spawning an in-process teammate.
 */
export type InProcessSpawnConfig = {
  /** Display name for the teammate, e.g., "researcher" */
  name: string
  /** Team this teammate belongs to */
  teamName: string
  /** Initial prompt/task for the teammate */
  prompt: string
  /** Optional UI color for the teammate */
  color?: string
  /** Whether teammate must enter plan mode before implementing */
  planModeRequired: boolean
  /** Optional model override for this teammate */
  model?: string
}

/**
 * Result from spawning an in-process teammate.
 */
export type InProcessSpawnOutput = {
  /** Whether spawn was successful */
  success: boolean
  /** Full agent ID (format: "name@team") */
  agentId: string
  /** Task ID for tracking in AppState */
  taskId?: string
  /** AbortController for this teammate (linked to parent) */
  abortController?: AbortController
  /** Teammate context for AsyncLocalStorage */
  teammateContext?: ReturnType<typeof createTeammateContext>
  /** Error message if spawn failed */
  error?: string
}

/**
 * Derives the permission mode for a teammate based on the leader's context.
 * In v112, this logic was extracted from spawnInProcessTeammate to handle
 * the case where the leader is in plan mode but the teammate should not be.
 */
function deriveTeammatePermissionMode(
  leaderPermissionMode: PermissionMode | undefined,
  planModeRequired: boolean,
): PermissionMode {
  if (planModeRequired) {
    return 'plan'
  }
  // If the leader is in bypass mode, the teammate inherits 'default' instead
  // so they still get tool-specific permission dialogs rather than auto-allow.
  if (leaderPermissionMode === 'bypassPermissions') {
    return 'default'
  }
  return leaderPermissionMode ?? 'default'
}

// TODO(lift): import PermissionMode type at byte ~5877666
// The v112 minified references Y0z(K.getAppState().toolPermissionContext.mode, O)
// which maps to deriveTeammatePermissionMode above.

/**
 * Spawns an in-process teammate.
 *
 * Creates the teammate's context, registers the task in AppState, and returns
 * the spawn result. The actual agent execution is driven by the
 * InProcessTeammateTask component which uses runWithTeammateContext() to
 * execute the agent loop with proper identity isolation.
 *
 * @param config - Spawn configuration
 * @param context - Context with setAppState for registering task
 * @returns Spawn result with teammate info
 */
export async function spawnInProcessTeammate(
  config: InProcessSpawnConfig,
  context: SpawnContext,
): Promise<InProcessSpawnOutput> {
  const { name, teamName, prompt, color, planModeRequired, model } = config
  const { setAppState, taskRegistry, getAppState, toolUseId } = context

  // Generate deterministic agent ID
  const agentId = formatAgentId(name, teamName)
  const taskId = generateTaskId('in_process_teammate')

  logForDebugging(
    `[spawnInProcessTeammate] Spawning ${agentId} (taskId: ${taskId})`,
  )

  try {
    // Create independent AbortController for this teammate
    // Teammates should not be aborted when the leader's query is interrupted
    const abortController = createAbortController()

    // Get parent session ID for transcript correlation
    const parentSessionId = getSessionId()

    // Create teammate identity (stored as plain data in AppState)
    const identity: TeammateIdentity = {
      agentId,
      agentName: name,
      teamName,
      color,
      planModeRequired,
      parentSessionId,
    }

    // Create teammate context for AsyncLocalStorage
    // This will be used by runWithTeammateContext() during agent execution
    const teammateContext = createTeammateContext({
      agentId,
      agentName: name,
      teamName,
      color,
      planModeRequired,
      parentSessionId,
      abortController,
    })

    // Register agent in Perfetto trace for hierarchy visualization
    if (isPerfettoTracingEnabled()) {
      registerPerfettoAgent(agentId, name, parentSessionId)
    }

    // Create task state
    const description = `${name}: ${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}`

    // In v112, permissionMode is derived from the leader's current context
    // rather than being hardcoded based on planModeRequired alone.
    const currentAppState = getAppState()
    const permissionMode = deriveTeammatePermissionMode(
      currentAppState.toolPermissionContext?.mode,
      planModeRequired,
    )

    const taskState: InProcessTeammateTaskState = {
      ...createTaskStateBase(
        taskId,
        'in_process_teammate',
        description,
        toolUseId,
      ),
      type: 'in_process_teammate',
      status: 'running',
      identity,
      prompt,
      model,
      abortController,
      awaitingPlanApproval: false,
      spinnerVerb: sample(getSpinnerVerbs()),
      pastTenseVerb: sample(TURN_COMPLETION_VERBS),
      permissionMode,
      isIdle: false,
      shutdownRequested: false,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      pendingUserMessages: [],
      messages: [], // Initialize to empty array so getDisplayedMessages works immediately
    }

    // Register cleanup handler for graceful shutdown
    const unregisterCleanup = registerCleanup(async () => {
      logForDebugging(`[spawnInProcessTeammate] Cleanup called for ${agentId}`)
      abortController.abort()
      // Task state will be updated by the execution loop when it detects abort
    })
    taskState.unregisterCleanup = unregisterCleanup

    // Register task in AppState via taskRegistry (v112 abstraction)
    taskRegistry.register(taskState)

    logForDebugging(
      `[spawnInProcessTeammate] Registered ${agentId} in AppState`,
    )

    return {
      success: true,
      agentId,
      taskId,
      abortController,
      teammateContext,
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error during spawn'
    logForDebugging(
      `[spawnInProcessTeammate] Failed to spawn ${agentId}: ${errorMessage}`,
    )
    return {
      success: false,
      agentId,
      error: errorMessage,
    }
  }
}

/**
 * Kills an in-process teammate by aborting its controller.
 *
 * In v112, this was moved from inProcessRunner.ts to here and refactored
 * to use the TaskRegistry abstraction. Instead of direct setAppState
 * manipulation for teamContext.teammates, it uses taskRegistry.update()
 * for the task state and setAppState for teamContext cleanup.
 *
 * @param taskId - Task ID of the teammate to kill
 * @param setAppState - AppState setter
 * @param taskRegistry - Task registry for task state updates
 * @returns true if killed successfully
 */
export function killInProcessTeammate(
  taskId: string,
  setAppState: SetAppStateFn,
  taskRegistry: SpawnContext['taskRegistry'],
): boolean {
  let killed = false
  let teamName: string | null = null
  let agentId: string | null = null
  let toolUseId: string | undefined
  let description: string | undefined

  // In v112, task state update uses taskRegistry.update() which returns
  // whether the update was applied (task existed and was running).
  const wasUpdated = taskRegistry.update(taskId, (task) => {
    if (task.status !== 'running') {
      return task
    }

    // Capture identity for cleanup after state update
    teamName = task.identity.teamName
    agentId = task.identity.agentId
    toolUseId = task.toolUseId
    description = task.description

    // Abort the controller to stop execution
    task.abortController?.abort()

    // Call cleanup handler
    task.unregisterCleanup?.()

    // Call pending idle callbacks to unblock any waiters (e.g., engine.waitForIdle)
    task.onIdleCallbacks?.forEach((cb) => cb())

    killed = true

    return {
      ...task,
      status: 'killed' as const,
      notified: true,
      endTime: Date.now(),
      onIdleCallbacks: [], // Clear callbacks to prevent stale references
      messages: task.messages?.length
        ? [task.messages.at(-1)!]
        : undefined,
      pendingUserMessages: [],
      inProgressToolUseIDs: undefined,
      abortController: undefined,
      unregisterCleanup: undefined,
      currentWorkAbortController: undefined,
    }
  })

  if (!wasUpdated) {
    return false
  }

  // Remove from teamContext.teammates using setAppState (separate from taskRegistry)
  if (agentId) {
    setAppState((prev) => {
      if (!prev.teamContext?.teammates?.[agentId!]) {
        return prev
      }
      const { [agentId]: _, ...remainingTeammates } = prev.teamContext.teammates
      return {
        ...prev,
        teamContext: {
          ...prev.teamContext,
          teammates: remainingTeammates,
        },
      }
    })
  }

  // Remove from team file (outside state updater to avoid file I/O in callback)
  if (teamName && agentId) {
    removeMemberByAgentId(teamName, agentId)
  }

  if (killed) {
    void evictTaskOutput(taskId)
    // notified:true was pre-set so no XML notification fires; close the SDK
    // task_started bookend directly. The in-process runner's own
    // completion/failure emit guards on status==='running' so it won't
    // double-emit after seeing status:killed.
    emitTaskTerminatedSdk(taskId, 'stopped', {
      toolUseId,
      summary: description,
    })
    setTimeout(
      () => taskRegistry.evictTerminal(taskId),
      STOPPED_DISPLAY_MS,
    )
  }

  // Release perfetto agent registry entry
  if (agentId) {
    unregisterPerfettoAgent(agentId)
  }

  return killed
}
