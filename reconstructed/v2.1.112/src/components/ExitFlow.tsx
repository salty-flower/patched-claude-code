import { c as _c } from "react/compiler-runtime";
import sample from 'lodash-es/sample.js';
import React from 'react';
import { gracefulShutdown } from '../utils/gracefulShutdown.js';
import { WorktreeExitDialog } from './WorktreeExitDialog.js';
const GOODBYE_MESSAGES = ['Goodbye!', 'See ya!', 'Bye!', 'Catch you later!'];
function getRandomGoodbyeMessage(): string {
  return sample(GOODBYE_MESSAGES) ?? 'Goodbye!';
}
type Props = {
  onDone: (message?: string) => void;
  onCancel?: () => void;
  showWorktree: boolean;
  // TODO(lift): backgroundItems at byte ~11480440
  backgroundItems?: Array<{
    label: string;
    value: string;
  }>;
};
export function ExitFlow(t0) {
  const $ = _c(11);
  const {
    showWorktree,
    backgroundItems,
    onDone,
    onCancel
  } = t0;
  let t1;
  if ($[0] !== onDone) {
    t1 = async function onExit(resultMessage) {
      onDone(resultMessage ?? getRandomGoodbyeMessage());
      await gracefulShutdown(0, "prompt_input_exit");
    };
    $[0] = onDone;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const onExit = t1;
  if (showWorktree) {
    let t2;
    if ($[2] !== onCancel || $[3] !== onExit) {
      t2 = <WorktreeExitDialog onDone={onExit} onCancel={onCancel} />;
      $[2] = onCancel;
      $[3] = onExit;
      $[4] = t2;
    } else {
      t2 = $[4];
    }
    return t2;
  }
  if (backgroundItems && backgroundItems.length > 0) {
    let t2;
    if ($[5] !== onExit) {
      t2 = () => void onExit();
      $[5] = onExit;
      $[6] = t2;
    } else {
      t2 = $[6];
    }
    const handleBackgroundExit = t2;
    const handleCancel = onCancel ?? _temp;
    let t3;
    if ($[7] !== backgroundItems || $[8] !== handleBackgroundExit || $[9] !== handleCancel) {
      t3 = <BackgroundItemsDialog items={backgroundItems} onExit={handleBackgroundExit} onCancel={handleCancel} />;
      $[7] = backgroundItems;
      $[8] = handleBackgroundExit;
      $[9] = handleCancel;
      $[10] = t3;
    } else {
      t3 = $[10];
    }
    return t3;
  }
  return null;
}
function _temp() {}
// TODO(lift): BackgroundItemsDialog at byte ~11480440
function BackgroundItemsDialog(_props: {
  items: Array<{ label: string; value: string }>;
  onExit: () => void;
  onCancel: () => void;
}): React.ReactNode {
  return null;
}
