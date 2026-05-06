import { type AppState } from '../state/AppState.js';
import { type LocalAgentTaskState } from '../tasks/LocalAgentTask/LocalAgentTask.js';
import { isPanelAgentTask } from '../tasks/LocalAgentTask/LocalAgentTask.js';

/**
 * Which panel-managed tasks currently have a visible row.
 * Presence in AppState.tasks IS visibility — the 1s tick in
 * CoordinatorTaskPanel evicts tasks past their evictAfter deadline. The
 * evictAfter !== 0 check handles immediate dismiss (x key) without making
 * the filter time-dependent. Shared by panel render, useCoordinatorTaskCount,
 * and index resolvers so the math can't drift.
 */
export function getVisibleAgentTasks(tasks: AppState['tasks']): LocalAgentTaskState[] {
  return Object.values(tasks).filter((t): t is LocalAgentTaskState => isPanelAgentTask(t) && t.evictAfter !== 0).sort((a, b) => a.startTime - b.startTime);
}

// TODO(lift): CoordinatorTaskPanel at byte ~11987808 — removed/moved in v112
// TODO(lift): useCoordinatorTaskCount at byte ~11987852 — removed/moved in v112
// TODO(lift): MainLine at byte ~11987883 — removed/moved in v112
// TODO(lift): AgentLine at byte ~11987891 — removed/moved in v112
