/**
 * Shared helpers for building the API cache-key prefix (systemPrompt,
 * userContext, systemContext) for query() calls.
 *
 * Lives in its own file because it imports from context.ts and
 * constants/prompts.ts, which are high in the dependency graph. Putting
 * these imports in systemPrompt.ts or sideQuestion.ts (both reachable
 * from commands.ts) would create cycles. Only entrypoint-layer files
 * import from here (QueryEngine.ts, cli/print.ts).
 */

import type { Command } from '../commands.js'
import { getSystemPrompt } from '../constants/prompts.js'
import { getSystemContext, getUserContext } from '../context.js'
import type { MCPServerConnection } from '../services/mcp/types.js'
import type { AppState } from '../state/AppStateStore.js'
import type { Tools, ToolUseContext } from '../Tool.js'
import type { AgentDefinition } from '../tools/AgentTool/loadAgentsDir.js'
import type { Message } from '../types/message.js'
import { createAbortController } from './abortController.js'
import type { FileStateCache } from './fileStateCache.js'
import type { CacheSafeParams } from './forkedAgent.js'
import { getMainLoopModel } from './model/model.js'
import { asSystemPrompt } from './systemPromptType.js'
import {
  shouldEnableThinkingByDefault,
  type ThinkingConfig,
} from './thinking.js'
// TODO(lift): Yl8 at byte ~13433860 (getCacheBreakerContext)
// TODO(lift): $2 at byte ~13433860 (getUserContext — verify import)
// TODO(lift): fj at byte ~13434332 (getSystemContext with cacheBreaker)

/**
 * Fetch the three context pieces that form the API cache-key prefix:
 * systemPrompt parts, userContext, systemContext.
 *
 * When customSystemPrompt is set, the default getSystemPrompt build and
 * getSystemContext are skipped — the custom prompt replaces the default
 * entirely, and systemContext would be appended to a default that isn't
 * being used.
 *
 * Callers assemble the final systemPrompt from defaultSystemPrompt (or
 * customSystemPrompt) + optional extras + appendSystemPrompt. QueryEngine
 * injects coordinator userContext and memory-mechanics prompt on top;
 * sideQuestion's fallback uses the base result directly.
 */
export async function fetchSystemPromptParts({
  tools,
  mainLoopModel,
  additionalWorkingDirectories,
  customSystemPrompt,
  excludeDynamicSections,
  cacheBreakerPhrase,
}: {
  tools: Tools
  mainLoopModel: string
  additionalWorkingDirectories: string[]
  customSystemPrompt: string | string[] | undefined
  excludeDynamicSections?: boolean
  cacheBreakerPhrase?: string
}): Promise<{
  defaultSystemPrompt: string[]
  userContext: { [k: string]: string }
  systemContext: { [k: string]: string }
}> {
  const [
    defaultSystemPrompt,
    userContext,
    systemContext,
    cacheBreakerContext,
  ] = await Promise.all([
    customSystemPrompt !== undefined
      ? Promise.resolve([])
      : getSystemPrompt(
          tools,
          mainLoopModel,
          additionalWorkingDirectories,
          // TODO(lift): verify whether mcpClients param was removed or moved
          [],
        ),
    getUserContext(),
    customSystemPrompt !== undefined ? Promise.resolve({}) : getSystemContext(cacheBreakerPhrase),
    excludeDynamicSections && customSystemPrompt === undefined
      ? // TODO(lift): Yl8 at byte ~13433860
        Promise.resolve({})
      : Promise.resolve({}),
  ])

  if (excludeDynamicSections) {
    return {
      defaultSystemPrompt,
      userContext: { ...systemContext, ...userContext, ...cacheBreakerContext },
      systemContext: {},
    }
  }

  return { defaultSystemPrompt, userContext, systemContext }
}

/**
 * Build CacheSafeParams from raw inputs when getLastCacheSafeParams() is null.
 *
 * Used by the SDK side_question handler (print.ts) on resume before a turn
 * completes — there's no stopHooks snapshot yet. Mirrors the system prompt
 * assembly in QueryEngine.ts:ask() so the rebuilt prefix matches what the
 * main loop will send, preserving the cache hit in the common case.
 *
 * May still miss the cache if the main loop applies extras this path doesn't
 * know about (coordinator mode, memory-mechanics prompt). That's acceptable —
 * the alternative is returning null and failing the side question entirely.
 */
export async function buildSideQuestionFallbackParams({
  tools,
  commands,
  mcpClients,
  messages,
  readFileState,
  getAppState,
  setAppState,
  customSystemPrompt,
  appendSystemPrompt,
  excludeDynamicSections,
  thinkingConfig,
  agents,
}: {
  tools: Tools
  commands: Command[]
  mcpClients: MCPServerConnection[]
  messages: Message[]
  readFileState: FileStateCache
  getAppState: () => AppState
  setAppState: (f: (prev: AppState) => AppState) => void
  customSystemPrompt: string | string[] | undefined
  appendSystemPrompt: string | undefined
  excludeDynamicSections?: boolean
  thinkingConfig: ThinkingConfig | undefined
  agents: AgentDefinition[]
}): Promise<CacheSafeParams> {
  const mainLoopModel = getMainLoopModel()
  const appState = getAppState()

  const { defaultSystemPrompt, userContext, systemContext } =
    await fetchSystemPromptParts({
      tools,
      mainLoopModel,
      additionalWorkingDirectories: Array.from(
        appState.toolPermissionContext.additionalWorkingDirectories.keys(),
      ),
      customSystemPrompt,
      excludeDynamicSections,
      cacheBreakerPhrase: appState.cacheBreakerPhrase,
    })

  const systemPrompt = asSystemPrompt([
    ...(customSystemPrompt !== undefined
      ? Array.isArray(customSystemPrompt)
        ? customSystemPrompt
        : [customSystemPrompt]
      : defaultSystemPrompt),
    ...(appendSystemPrompt ? [appendSystemPrompt] : []),
  ])

  // Strip in-progress assistant message (stop_reason === null) — same guard
  // as btw.tsx. The SDK can fire side_question mid-turn.
  const last = messages.at(-1)
  const forkContextMessages =
    last?.type === 'assistant' && last.message.stop_reason === null
      ? messages.slice(0, -1)
      : messages

  const toolUseContext: ToolUseContext = {
    options: {
      commands,
      debug: false,
      mainLoopModel,
      tools,
      verbose: false,
      thinkingConfig:
        thinkingConfig ??
        (shouldEnableThinkingByDefault() !== false
          ? { type: 'adaptive' }
          : { type: 'disabled' }),
      mcpClients,
      mcpResources: {},
      isNonInteractiveSession: true,
      agentDefinitions: { activeAgents: agents, allAgents: [] },
      customSystemPrompt,
      appendSystemPrompt,
    },
    abortController: createAbortController(),
    readFileState,
    getAppState,
    setAppState,
    messages: forkContextMessages,
    turnStartIndex: 0,
    setInProgressToolUseIDs: () => {},
    addResponseLength: () => {},
    resetResponseLength: () => {},
    getFileHistoryState: () => {
      return
    },
    applyFileHistoryOp: () => {},
    applyAttributionOp: () => {},
    // TODO(lift): Uk at byte ~13435976 (taskRegistry)
    // TODO(lift): OM6 at byte ~13435976 (sessionHooksRegistry)
    // TODO(lift): qF at byte ~13435976 (setClassifierApprovals)
    // TODO(lift): H06 at byte ~13435976 (setReplContext)
    // TODO(lift): P36 at byte ~13435976 (setWebBrowserSlice)
    // TODO(lift): gD at byte ~13435976 (abortSpeculation)
    // TODO(lift): YW6 at byte ~13435976 (agentLifecycle)
    // TODO(lift): AW6 at byte ~13435976 (teammateColors)
    setToolPermissionContext: (v) =>
      setAppState((prev) => {
        const next =
          typeof v === 'function'
            ? v(prev.toolPermissionContext)
            : v
        return prev.toolPermissionContext === next
          ? prev
          : { ...prev, toolPermissionContext: next }
      }),
  }

  return {
    systemPrompt,
    userContext,
    systemContext,
    toolUseContext,
    forkContextMessages,
  }
}
