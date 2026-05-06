import * as React from 'react';
import { Stats } from '../../components/Stats.js';
import type { LocalJSXCommandCall } from '../../types/command.js';
// TODO(lift): v112 changed call signature to accept { options: { commands } } at byte ~10568375
export const call: LocalJSXCommandCall = async (onDone, context) => {
  // TODO(lift): v112 passes commands from context.options.commands at byte ~10568375
  return <Stats onClose={onDone} />;
};
