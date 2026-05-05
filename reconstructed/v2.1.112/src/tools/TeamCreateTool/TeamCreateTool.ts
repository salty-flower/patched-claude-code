import { z } from 'zod/v4'
import { getSessionId } from '../../bootstrap/state.js'
import { logEvent } from '../../services/analytics/index.js'
import type { AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS } from '../../services/analytics/metadata.js'
import type { Tool } from '../../Tool.js'
import { buildTool, type ToolDef } from '../../Tool.js'
import { formatAgentId } from '../../utils/agentId.js'
import { isAgentSwarmsEnabled } from '../../utils/agentSwarmsEnabled.js'
import { getCwd } from '../../utils/cwd.js'
import { lazySchema } from '../../utils/lazySchema.js'
import {
  getDefaultMainLoopModel,
  parseUserSpecifiedModel,
} from '../../utils/model/model.js'
import { jsonStringify } from '../../utils/slowOperations.js'
import { getResolvedTeammateMode } from '../../utils/swarm/backends/registry.js'
import { TEAM_LEAD_NAME } from '../../utils/swarm/constants.js'
import type { TeamFile } from '../../utils/swarm/teamHelpers.js'
import {
  getTeamFilePath,
  registerTeamForSessionCleanup,
  sanitizeName,
  writeTeamFileAsync,
} from '../../utils/swarm/teamHelpers.js'
import {
  ensureTasksDir,
  resetTaskList,
  setLeaderTeamName,
} from '../../utils/tasks.js'
import { TEAM_CREATE_TOOL_NAME } from './constants.js'
import { getPrompt } from './prompt.js'
import { renderToolUseMessage } from './UI.js'

const inputSchema = lazySchema(() =>
  z.strictObject({
    team_name: z.string().describe('Name for the new team to create.'),
    description: z.string().optional().describe('Team description/purpose.'),
    agent_type: z
      .string()
      .optional()
      .describe(
        'Type/role of the team lead (e.g., "researcher", "test-runner"). ' +
          'Used for team file and inter-agent coordination.',
      ),
  }),
)
type InputSchema = ReturnType<typeof inputSchema>

export type Output = {
  team_name: string
  team_file_path: string
  lead_agent_id: string
}

export type Input = z.infer<InputSchema>

// v112: jac=0.841 drift — key changes vs v88:
// - generateUniqueTeamName removed; v112 writes exclusively and throws if team exists
// - writeTeamFileAsync replaced with Bd8(name, file, {exclusive:true}) — exclusive write
// - Error handling: EEXIST check with mw8() for path, Cc for TeamDelete name
// - teammateColors.assign() from context replaces assignTeammateColor()
// - T96(j) for task list ID (wraps sanitizeName)
//
// TODO(lift): Bd8() — exclusive writeTeamFileAsync at byte ~9230500
// TODO(lift): Q1() — error code extractor at byte ~9230600
// TODO(lift): mw8() — path from error at byte ~9230700
// TODO(lift): Cc — TEAM_DELETE_TOOL_NAME constant at byte ~9230800
// TODO(lift): T96() — sanitizeName wrapper for task list ID at byte ~9230900
// TODO(lift): context.teammateColors — new ToolUseContext field at byte ~9231000
// TODO(lift): xb8() — resetTaskList alias at byte ~9231100
// TODO(lift): An1() — ensureTasksDir alias at byte ~9231200
// TODO(lift): _R4() — setLeaderTeamName alias at byte ~9231300

export const TeamCreateTool: Tool<InputSchema, Output> = buildTool({
  name: TEAM_CREATE_TOOL_NAME,
  searchHint: 'create a multi-agent swarm team',
  maxResultSizeChars: 100_000,
  shouldDefer: true,

  userFacingName() {
    return ''
  },

  get inputSchema(): InputSchema {
    return inputSchema()
  },

  isEnabled() {
    return isAgentSwarmsEnabled()
  },

  toAutoClassifierInput(input) {
    return input.team_name
  },

  async validateInput(input, _context) {
    if (!input.team_name || input.team_name.trim().length === 0) {
      return {
        result: false,
        message: 'team_name is required for TeamCreate',
        errorCode: 9,
      }
    }
    return { result: true }
  },

  async description() {
    return 'Create a new team for coordinating multiple agents'
  },

  async prompt() {
    return getPrompt()
  },

  mapToolResultToToolResultBlockParam(data, toolUseID) {
    return {
      tool_use_id: toolUseID,
      type: 'tool_result' as const,
      content: [
        {
          type: 'text' as const,
          text: jsonStringify(data),
        },
      ],
    }
  },

  async call(input, context) {
    const { setAppState, getAppState } = context
    const { team_name, description: _description, agent_type } = input

    const appState = getAppState()
    const existingTeam = appState.teamContext?.teamName

    if (existingTeam) {
      throw new Error(
        // v112: references TeamDelete tool name (Cc constant)
        // TODO(lift): Cc = TEAM_DELETE_TOOL_NAME at byte ~9230800
        `Already leading team "${existingTeam}". A leader can only manage one team at a time. Use TeamDelete to end the current team before creating a new one.`,
      )
    }

    // v112: no longer calls generateUniqueTeamName — uses provided name directly
    // and throws with detailed error if team already exists (exclusive write)
    const finalTeamName = team_name
    const leadAgentId = formatAgentId(TEAM_LEAD_NAME, finalTeamName)
    const leadAgentType = agent_type || TEAM_LEAD_NAME
    const leadModel = parseUserSpecifiedModel(
      appState.mainLoopModelForSession ??
        appState.mainLoopModel ??
        getDefaultMainLoopModel(),
    )

    const teamFilePath = getTeamFilePath(finalTeamName)

    const teamFile: TeamFile = {
      name: finalTeamName,
      description: _description,
      createdAt: Date.now(),
      leadAgentId,
      leadSessionId: getSessionId(),
      members: [
        {
          agentId: leadAgentId,
          name: TEAM_LEAD_NAME,
          agentType: leadAgentType,
          model: leadModel,
          joinedAt: Date.now(),
          tmuxPaneId: '',
          cwd: getCwd(),
          subscriptions: [],
        },
      ],
    }

    // v112: exclusive write — throws if file already exists (EEXIST)
    // TODO(lift): Bd8(finalTeamName, teamFile, {exclusive: true}) at byte ~9230500
    try {
      await writeTeamFileAsync(finalTeamName, teamFile)
    } catch (err) {
      // v112: EEXIST error check with path comparison
      // TODO(lift): Q1(err) === 'EEXIST' && mw8(err) === teamFilePath at byte ~9230600
      throw err
    }
    registerTeamForSessionCleanup(finalTeamName)

    // v112: T96(finalTeamName) wraps sanitizeName for task list ID
    const taskListId = sanitizeName(finalTeamName)
    // TODO(lift): xb8(taskListId) — resetTaskList at byte ~9231100
    await resetTaskList(taskListId)
    // TODO(lift): An1(taskListId) — ensureTasksDir at byte ~9231200
    await ensureTasksDir(taskListId)
    // TODO(lift): _R4(T96(finalTeamName)) — setLeaderTeamName at byte ~9231300
    setLeaderTeamName(sanitizeName(finalTeamName))

    // v112: context.teammateColors.assign() instead of assignTeammateColor()
    // TODO(lift): context.teammateColors field on ToolUseContext at byte ~9231000
    const leadColor = (context as unknown as { teammateColors: { assign: (id: string) => unknown } })
      .teammateColors.assign(leadAgentId)

    setAppState(prev => ({
      ...prev,
      teamContext: {
        teamName: finalTeamName,
        teamFilePath,
        leadAgentId,
        teammates: {
          [leadAgentId]: {
            name: TEAM_LEAD_NAME,
            agentType: leadAgentType,
            color: leadColor,
            tmuxSessionName: '',
            tmuxPaneId: '',
            cwd: getCwd(),
            spawnedAt: Date.now(),
          },
        },
      },
    }))

    logEvent('tengu_team_created', {
      team_name:
        finalTeamName as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      teammate_count: 1,
      lead_agent_type:
        leadAgentType as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
      teammate_mode:
        getResolvedTeammateMode() as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
    })

    return {
      data: {
        team_name: finalTeamName,
        team_file_path: teamFilePath,
        lead_agent_id: leadAgentId,
      },
    }
  },

  renderToolUseMessage,
} satisfies ToolDef<InputSchema, Output>)
