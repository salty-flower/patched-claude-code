import { c as _c } from "react/compiler-runtime";
import React from 'react';
import { Text } from '../ink.js';
import type { ValidationError } from '../utils/settings/validation.js';
import { Select } from './CustomSelect/index.js';
import { Dialog } from './design-system/Dialog.js';
import { ValidationErrorsList } from './ValidationErrorsList.js';

type Props = {
  settingsErrors: ValidationError[];
  onContinue: () => void;
  onExit: () => void;
};

/**
 * Dialog shown when settings files have validation errors.
 * User must choose to continue (skipping invalid files) or exit to fix them.
 */
export function InvalidSettingsDialog(t0) {
  const $ = _c(20);
  const {
    settingsErrors,
    onContinue,
    onExit
  } = t0;
  let t1;
  if ($[0] !== onContinue || $[1] !== onExit) {
    t1 = function handleSelect(value) {
      if (value === "exit") {
        onExit();
      } else {
        onContinue();
      }
    };
    $[0] = onContinue;
    $[1] = onExit;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleSelect = t1;
  let t2;
  if ($[3] !== settingsErrors) {
    t2 = settingsErrors.some(isSevereError_V112);
    $[3] = settingsErrors;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const hasSevereErrors = t2;
  let t3;
  if ($[5] !== hasSevereErrors) {
    t3 = hasSevereErrors
      ? [{ label: "Exit and fix manually", value: "exit" }, { label: "Continue without these settings", value: "continue" }]
      : [{ label: "Continue", value: "continue" }, { label: "Exit and fix manually", value: "exit" }];
    $[5] = hasSevereErrors;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const options = t3;
  const dialogTitle = hasSevereErrors ? "Settings Error" : "Settings Warning";
  const cancelAction = hasSevereErrors ? onExit : onContinue;
  let t4;
  if ($[7] !== settingsErrors) {
    t4 = <ValidationErrorsList errors={settingsErrors} />;
    $[7] = settingsErrors;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const messageText = hasSevereErrors
    ? "Files with errors are skipped entirely, not just the invalid settings."
    : "The values listed above were skipped; the rest of the file is in effect.";
  let t5;
  if ($[9] !== messageText) {
    t5 = <Text dimColor={true}>{messageText}</Text>;
    $[9] = messageText;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== handleSelect || $[12] !== options) {
    t6 = <Select options={options} onChange={handleSelect} />;
    $[11] = handleSelect;
    $[12] = options;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== dialogTitle || $[15] !== cancelAction || $[16] !== t4 || $[17] !== t5 || $[18] !== t6) {
    t7 = <Dialog title={dialogTitle} onCancel={cancelAction} color="warning">{t4}{t5}{t6}</Dialog>;
    $[14] = dialogTitle;
    $[15] = cancelAction;
    $[16] = t4;
    $[17] = t5;
    $[18] = t6;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  return t7;
}

// TODO: unresolved symbol isSevereError_V112 — v112 checks `_.some(I$A)` for severe errors
// This determines whether the dialog shows "Settings Error" vs "Settings Warning" and
// reorders/adjusts the options. Byte range: 12804933-12806121
