import { c as _c } from "react/compiler-runtime";
import capitalize from 'lodash-es/capitalize.js';
import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { useExitOnCtrlCDWithKeybindings } from 'src/hooks/useExitOnCtrlCDWithKeybindings.js';
import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent } from 'src/services/analytics/index.js';
import { FAST_MODE_MODEL_DISPLAY, isFastModeAvailable, isFastModeCooldown, isFastModeEnabled } from 'src/utils/fastMode.js';
import { Box, Text } from '../ink.js';
import { useKeybindings } from '../keybindings/useKeybinding.js';
import { useAppState, useSetAppState } from '../state/AppState.js';
import { convertEffortValueToLevel, type EffortLevel, getDefaultEffortForModel, modelSupportsEffort, modelSupportsMaxEffort, modelSupportsXhighEffort, resolvePickerEffortPersistence, toPersistableEffort } from '../utils/effort.js';
import { getDefaultMainLoopModel, type ModelSetting, modelDisplayString, parseUserSpecifiedModel } from '../utils/model/model.js';
import { getModelOptions } from '../utils/model/modelOptions.js';
import { getSettingsForSource, updateSettingsForSource } from '../utils/settings/settings.js';
import { ConfigurableShortcutHint } from './ConfigurableShortcutHint.js';
import { Select } from './CustomSelect/index.js';
import { Byline } from './design-system/Byline.js';
import { KeyboardShortcutHint } from './design-system/KeyboardShortcutHint.js';
import { Pane } from './design-system/Pane.js';
import { effortLevelToSymbol } from './EffortIndicator.js';

export type Props = {
  initial: string | null;
  sessionModel?: ModelSetting;
  onSelect: (model: string | null, effort: EffortLevel | undefined) => void;
  onCancel?: () => void;
  isStandaloneCommand?: boolean;
  showFastModeNotice?: boolean;
  /** Overrides the dim header line below "Select model". */
  headerText?: string;
  /**
   * When true, skip writing effortLevel to userSettings on selection.
   * Used by the assistant installer wizard where the model choice is
   * project-scoped (written to the assistant's .claude/settings.json via
   * install.ts) and should not leak to the user's global ~/.claude/settings.
   */
  skipSettingsWrite?: boolean;
};

const NO_PREFERENCE = '__NO_PREFERENCE__';

export function ModelPicker(t0: Props): React.ReactNode {
  const $ = _c(82);
  const {
    initial,
    sessionModel,
    onSelect,
    onCancel,
    isStandaloneCommand,
    showFastModeNotice,
    headerText,
    skipSettingsWrite
  } = t0;
  const setAppState = useSetAppState();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const initialValue = initial === null ? NO_PREFERENCE : initial;
  const [focusedValue, setFocusedValue] = useState(initialValue);
  const isFastMode = useAppState(_temp);
  const [hasToggledEffort, setHasToggledEffort] = useState(false);
  const effortValue = useAppState(_temp2);
  let t1;
  if ($[0] !== effortValue) {
    t1 = effortValue !== undefined ? convertEffortValueToLevel(effortValue) : undefined;
    $[0] = effortValue;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const [effort, setEffort] = useState(t1);
  const t2 = isFastMode ?? false;
  let t3;
  if ($[2] !== t2) {
    t3 = getModelOptions(t2);
    $[2] = t2;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const modelOptions = t3;
  let t4;
  bb0: {
    if (initial !== null && !modelOptions.some(opt => opt.value === initial)) {
      let t5;
      if ($[4] !== initial) {
        t5 = modelDisplayString(initial);
        $[4] = initial;
        $[5] = t5;
      } else {
        t5 = $[5];
      }
      let t6;
      if ($[6] !== initial || $[7] !== t5) {
        t6 = {
          value: initial,
          label: t5,
          description: "Current model"
        };
        $[6] = initial;
        $[7] = t5;
        $[8] = t6;
      } else {
        t6 = $[8];
      }
      let t7;
      if ($[9] !== modelOptions || $[10] !== t6) {
        t7 = [...modelOptions, t6];
        $[9] = modelOptions;
        $[10] = t6;
        $[11] = t7;
      } else {
        t7 = $[11];
      }
      t4 = t7;
      break bb0;
    }
    t4 = modelOptions;
  }
  const optionsWithInitial = t4;
  let t5;
  if ($[12] !== optionsWithInitial) {
    t5 = optionsWithInitial.map(_temp3);
    $[12] = optionsWithInitial;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const selectOptions = t5;
  let t6;
  if ($[14] !== initialValue || $[15] !== selectOptions) {
    t6 = selectOptions.some(_ => _.value === initialValue) ? initialValue : selectOptions[0]?.value ?? undefined;
    $[14] = initialValue;
    $[15] = selectOptions;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  const initialFocusValue = t6;
  const visibleCount = Math.min(10, selectOptions.length);
  const hiddenCount = Math.max(0, selectOptions.length - visibleCount);
  let t7;
  if ($[17] !== focusedValue || $[18] !== selectOptions) {
    t7 = selectOptions.find(opt_1 => opt_1.value === focusedValue)?.label;
    $[17] = focusedValue;
    $[18] = selectOptions;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  const focusedModelName = t7;
  let focusedSupportsEffort;
  let focusedSupportsXhigh;
  let t8;
  if ($[20] !== focusedValue) {
    const focusedModel = resolveOptionModel(focusedValue);
    focusedSupportsEffort = focusedModel ? modelSupportsEffort(focusedModel) : false;
    t8 = focusedModel ? modelSupportsMaxEffort(focusedModel) : false;
    focusedSupportsXhigh = focusedModel ? modelSupportsXhighEffort(focusedModel) : false;
    $[20] = focusedValue;
    $[21] = focusedSupportsEffort;
    $[22] = t8;
    $[23] = focusedSupportsXhigh;
  } else {
    focusedSupportsEffort = $[21];
    t8 = $[22];
    focusedSupportsXhigh = $[23];
  }
  const focusedSupportsMax = t8;
  let t9;
  if ($[24] !== focusedValue) {
    t9 = getDefaultEffortLevelForOption(focusedValue);
    $[24] = focusedValue;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  const focusedDefaultEffort = t9;
  // xhigh pinning: if the model supports xhigh and we're in the opus-4-7 launch
  // window, pin effort to xhigh unless the user has explicitly unpinned.
  const isXhighPinned = !hasToggledEffort && !!resolveOptionModel(focusedValue) &&
    parseUserSpecifiedModel(focusedValue).includes("opus-4-7") &&
    !getGlobalConfig().unpinOpus47LaunchEffort;
  const displayEffort = isXhighPinned ? "xhigh" :
    effort === "max" && !focusedSupportsMax || effort === "xhigh" && !focusedSupportsXhigh ? "high" : effort;
  let t10;
  if ($[26] !== effortValue || $[27] !== hasToggledEffort) {
    t10 = value => {
      setFocusedValue(value);
      if (!hasToggledEffort && effortValue === undefined) {
        setEffort(getDefaultEffortLevelForOption(value));
      }
    };
    $[26] = effortValue;
    $[27] = hasToggledEffort;
    $[28] = t10;
  } else {
    t10 = $[28];
  }
  const handleFocus = t10;
  let t11;
  if ($[29] !== focusedDefaultEffort || $[30] !== focusedSupportsEffort || $[31] !== focusedSupportsMax || $[32] !== focusedSupportsXhigh) {
    t11 = direction => {
      if (!focusedSupportsEffort) {
        return;
      }
      setEffort(prev => cycleEffortLevel(prev ?? focusedDefaultEffort, direction, focusedSupportsMax, focusedSupportsXhigh));
      setHasToggledEffort(true);
    };
    $[29] = focusedDefaultEffort;
    $[30] = focusedSupportsEffort;
    $[31] = focusedSupportsMax;
    $[32] = focusedSupportsXhigh;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  const handleCycleEffort = t11;
  let t12;
  if ($[34] !== handleCycleEffort) {
    t12 = {
      "modelPicker:decreaseEffort": () => handleCycleEffort("left"),
      "modelPicker:increaseEffort": () => handleCycleEffort("right")
    };
    $[34] = handleCycleEffort;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  let t13;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = {
      context: "ModelPicker"
    };
    $[36] = t13;
  } else {
    t13 = $[36];
  }
  useKeybindings(t12, t13);
  let t14;
  if ($[37] !== effort || $[38] !== hasToggledEffort || $[39] !== onSelect || $[40] !== setAppState || $[41] !== skipSettingsWrite) {
    t14 = function handleSelect(value_0: string) {
      logEvent("tengu_model_command_menu_effort", {
        effort: effort as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
      });
      if (!skipSettingsWrite && hasToggledEffort) {
        const effortLevel = resolvePickerEffortPersistence(effort, getDefaultEffortLevelForOption(value_0), getSettingsForSource("userSettings")?.effortLevel, hasToggledEffort);
        const persistable = toPersistableEffort(effortLevel);
        if (persistable !== undefined) {
          updateSettingsForSource("userSettings", {
            effortLevel: persistable
          });
        }
        setAppState(prev_0 => ({
          ...prev_0,
          effortValue: effortLevel
        }));
      }
      const selectedModel = resolveOptionModel(value_0);
      const selectedEffort = hasToggledEffort && selectedModel && modelSupportsEffort(selectedModel) ? effort : undefined;
      if (value_0 === NO_PREFERENCE) {
        onSelect(null, selectedEffort);
        return;
      }
      onSelect(value_0, selectedEffort);
    };
    $[37] = effort;
    $[38] = hasToggledEffort;
    $[39] = onSelect;
    $[40] = setAppState;
    $[41] = skipSettingsWrite;
    $[42] = t14;
  } else {
    t14 = $[42];
  }
  const handleSelect = t14;
  let t15;
  if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = <Text color="remember" bold={true}>Select model</Text>;
    $[43] = t15;
  } else {
    t15 = $[43];
  }
  const t16 = headerText ?? "Switch between Claude models. Applies to this session and future Claude Code sessions. For other/previous model names, specify with --model.";
  let t17;
  if ($[44] !== t16) {
    t17 = <Text dimColor={true}>{t16}</Text>;
    $[44] = t16;
    $[45] = t17;
  } else {
    t17 = $[45];
  }
  let t18;
  if ($[46] !== sessionModel) {
    t18 = sessionModel && <Text dimColor={true}>Currently using {modelDisplayString(sessionModel)} for this session (set by plan mode). Selecting a model will undo this.</Text>;
    $[46] = sessionModel;
    $[47] = t18;
  } else {
    t18 = $[47];
  }
  let t19;
  if ($[48] !== t17 || $[49] !== t18) {
    t19 = <Box marginBottom={1} flexDirection="column">{t15}{t17}{t18}</Box>;
    $[48] = t17;
    $[49] = t18;
    $[50] = t19;
  } else {
    t19 = $[50];
  }
  const t20 = onCancel ?? _temp4;
  let t21;
  if ($[51] !== handleFocus || $[52] !== handleSelect || $[53] !== initialFocusValue || $[54] !== initialValue || $[55] !== selectOptions || $[56] !== t20 || $[57] !== visibleCount) {
    t21 = <Box flexDirection="column"><Select defaultValue={initialValue} defaultFocusValue={initialFocusValue} options={selectOptions} onChange={handleSelect} onFocus={handleFocus} onCancel={t20} visibleOptionCount={visibleCount} /></Box>;
    $[51] = handleFocus;
    $[52] = handleSelect;
    $[53] = initialFocusValue;
    $[54] = initialValue;
    $[55] = selectOptions;
    $[56] = t20;
    $[57] = visibleCount;
    $[58] = t21;
  } else {
    t21 = $[58];
  }
  let t22;
  if ($[59] !== hiddenCount) {
    t22 = hiddenCount > 0 && <Box paddingLeft={3}><Text dimColor={true}>and {hiddenCount} more…</Text></Box>;
    $[59] = hiddenCount;
    $[60] = t22;
  } else {
    t22 = $[60];
  }
  let t23;
  if ($[61] !== t21 || $[62] !== t22) {
    t23 = <Box flexDirection="column" marginBottom={1}>{t21}{t22}</Box>;
    $[61] = t21;
    $[62] = t22;
    $[63] = t23;
  } else {
    t23 = $[63];
  }
  let t24;
  if ($[64] !== displayEffort || $[65] !== focusedDefaultEffort || $[66] !== focusedModelName || $[67] !== focusedSupportsEffort) {
    t24 = <Box marginBottom={1} flexDirection="column">{focusedSupportsEffort ? <Text dimColor={true}><EffortLevelIndicator effort={displayEffort} />{" "}{displayEffort === "xhigh" ? "xHigh" : capitalize(displayEffort)} effort{displayEffort === focusedDefaultEffort ? " (default)" : ""}{" "}<Text color="subtle"><KeyboardShortcutHint chord={["left", "right"]} action="adjust" format={{ arrowSep: " " }} /></Text></Text> : <Text color="subtle"><EffortLevelIndicator effort={undefined} /> Effort not supported{focusedModelName ? ` for ${focusedModelName}` : ""}</Text>}</Box>;
    $[64] = displayEffort;
    $[65] = focusedDefaultEffort;
    $[66] = focusedModelName;
    $[67] = focusedSupportsEffort;
    $[68] = t24;
  } else {
    t24 = $[68];
  }
  let t25;
  if ($[69] !== showFastModeNotice) {
    t25 = isFastModeEnabled() ? showFastModeNotice ? <Box marginBottom={1}><Text dimColor={true}>Fast mode is <Text bold={true}>ON</Text> and available with{" "}{FAST_MODE_MODEL_DISPLAY} only (/fast). Switching to other models turn off fast mode.</Text></Box> : isFastModeAvailable() && !isFastModeCooldown() ? <Box marginBottom={1}><Text dimColor={true}>Use <Text bold={true}>/fast</Text> to turn on Fast mode ({FAST_MODE_MODEL_DISPLAY} only).</Text></Box> : null : null;
    $[69] = showFastModeNotice;
    $[70] = t25;
  } else {
    t25 = $[70];
  }
  let t26;
  if ($[71] !== t19 || $[72] !== t23 || $[73] !== t24 || $[74] !== t25) {
    t26 = <Box flexDirection="column">{t19}{t23}{t24}{t25}</Box>;
    $[71] = t19;
    $[72] = t23;
    $[73] = t24;
    $[74] = t25;
    $[75] = t26;
  } else {
    t26 = $[75];
  }
  let t27;
  if ($[76] !== exitState || $[77] !== isStandaloneCommand) {
    t27 = isStandaloneCommand && <Text dimColor={true} italic={true}>{exitState.pending ? <>Press {exitState.keyName} again to exit</> : <Byline><KeyboardShortcutHint shortcut="Enter" action="confirm" /><ConfigurableShortcutHint action="select:cancel" context="Select" fallback="Esc" description="exit" /></Byline>}</Text>;
    $[76] = exitState;
    $[77] = isStandaloneCommand;
    $[78] = t27;
  } else {
    t27 = $[78];
  }
  let t28;
  if ($[79] !== t26 || $[80] !== t27) {
    t28 = <Box flexDirection="column">{t26}{t27}</Box>;
    $[79] = t26;
    $[80] = t27;
    $[81] = t28;
  } else {
    t28 = $[81];
  }
  const content = t28;
  if (!isStandaloneCommand) {
    return content;
  }
  let t29;
  if ($[82] !== content) {
    t29 = <Pane color="permission">{content}</Pane>;
    $[82] = content;
    $[83] = t29;
  } else {
    t29 = $[83];
  }
  return t29;
}
function _temp4() {}
function _temp3(opt_0: { value: string | null; label: string; description?: string }) {
  return {
    ...opt_0,
    value: opt_0.value === null ? NO_PREFERENCE : opt_0.value
  };
}
function _temp2(s_0: { effortValue: unknown }) {
  return s_0.effortValue;
}
function _temp(s: { fastMode: boolean }) {
  return isFastModeEnabled() ? s.fastMode : false;
}
function resolveOptionModel(value?: string): string | undefined {
  if (!value) return undefined;
  return value === NO_PREFERENCE ? getDefaultMainLoopModel() : parseUserSpecifiedModel(value);
}
function EffortLevelIndicator(t0: { effort?: EffortLevel }): React.ReactNode {
  const $ = _c(5);
  const {
    effort
  } = t0;
  const t1 = effort ? "claude" : "subtle";
  const t2 = effort ?? "low";
  let t3;
  if ($[0] !== t2) {
    t3 = effortLevelToSymbol(t2);
    $[0] = t2;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] !== t1 || $[3] !== t3) {
    t4 = <Text color={t1}>{t3}</Text>;
    $[2] = t1;
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  return t4;
}
function cycleEffortLevel(current: EffortLevel, direction: 'left' | 'right', includeMax: boolean, includeXhigh: boolean): EffortLevel {
  const levels: EffortLevel[] = ['low', 'medium', 'high'];
  if (includeXhigh) {
    levels.push('xhigh');
  }
  if (includeMax) {
    levels.push('max');
  }
  // If the current level isn't in the cycle (e.g. 'max' after switching to a
  // non-Opus model), clamp to 'high'.
  const idx = levels.indexOf(current);
  const currentIndex = idx !== -1 ? idx : levels.indexOf('high');
  if (direction === 'right') {
    return levels[(currentIndex + 1) % levels.length]!;
  } else {
    return levels[(currentIndex - 1 + levels.length) % levels.length]!;
  }
}
function getDefaultEffortLevelForOption(value?: string): EffortLevel {
  const resolved = resolveOptionModel(value) ?? getDefaultMainLoopModel();
  const defaultValue = getDefaultEffortForModel(resolved);
  return defaultValue !== undefined ? convertEffortValueToLevel(defaultValue) : 'high';
}

// TODO(lift): getGlobalConfig imported from '../utils/config.js' — verify path
function getGlobalConfig(): { unpinOpus47LaunchEffort?: boolean } {
  // TODO(lift): v112 accesses H8().unpinOpus47LaunchEffort; this is a stub
  return { unpinOpus47LaunchEffort: false };
}
