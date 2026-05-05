type CommandLifecycleState = 'started' | 'completed'

type CommandLifecycleListener = (
  uuid: string,
  state: CommandLifecycleState,
) => void

let listener: CommandLifecycleListener | null = null

export function setCommandLifecycleListener(
  cb: CommandLifecycleListener | null,
): void {
  listener = cb
}

export function notifyCommandLifecycle(
  uuid: string,
  state: CommandLifecycleState,
): void {
  listener?.(uuid, state)
}

// TODO(lift): v112_min for this file contains only a multi-file IIFE
// (cross-file boundary artifact) — the setCommandLifecycleListener /
// notifyCommandLifecycle decls have no v112 match in this chunk's region.
// They may have been moved to another module or inlined elsewhere.
