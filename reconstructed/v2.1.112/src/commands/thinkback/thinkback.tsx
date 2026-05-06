import * as React from 'react';
import type { CommandResultDisplay } from '../../commands.js';

// TODO(lift): ThinkbackFlow component at byte ~10935427 — v112 removed all
// thinkback implementation from this file; only the call() export remains.
// The full implementation was likely moved to a plugin or lazy-loaded chunk.

export async function call(onDone: (result?: string, options?: {
  display?: CommandResultDisplay;
  shouldQuery?: boolean;
}) => void): Promise<React.ReactNode> {
  // TODO(lift): ThinkbackFlow at byte ~10935427
  return null;
}
