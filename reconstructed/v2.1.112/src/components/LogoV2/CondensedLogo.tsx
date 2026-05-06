import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { type ReactNode, useEffect } from 'react';
import { useMainLoopModel } from '../../hooks/useMainLoopModel.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import { stringWidth } from '../../ink/stringWidth.js';
import { Box, Text } from '../../ink.js';
import { useAppState } from '../../state/AppState.js';
import { getEffortSuffix } from '../../utils/effort.js';
import { truncate } from '../../utils/format.js';
import { isFullscreenEnvEnabled } from '../../utils/fullscreen.js';
import { formatModelAndBilling, getLogoDisplayData, truncatePath } from '../../utils/logoV2Utils.js';
import { renderModelSetting } from '../../utils/model/model.js';
import { OffscreenFreeze } from '../OffscreenFreeze.js';
import { AnimatedClawd } from './AnimatedClawd.js';
import { Clawd } from './Clawd.js';
import { GuestPassesUpsell, incrementGuestPassesSeenCount, useShowGuestPassesUpsell } from './GuestPassesUpsell.js';
import { incrementOverageCreditUpsellSeenCount, OverageCreditUpsell, useShowOverageCreditUpsell } from './OverageCreditUpsell.js';
// TODO(lift): v112 adds new upsell components; verify imports once lifted
// import { TuiSwitchNotice, useShowTuiSwitchNotice } from './TuiSwitchNotice.js';
// import { SomeOtherUpsell, useShowSomeOtherUpsell } from './SomeOtherUpsell.js';
export function CondensedLogo() {
  const $ = _c(55);
  const {
    columns
  } = useTerminalSize();
  const agent = useAppState(_temp);
  const effortValue = useAppState(_temp2);
  const model = useMainLoopModel();
  const modelDisplayName = renderModelSetting(model);
  const {
    version,
    cwd,
    billingType,
    agentName: agentNameFromSettings
  } = getLogoDisplayData();
  const agentName = agent ?? agentNameFromSettings;
  const showGuestPassesUpsell = useShowGuestPassesUpsell();
  const showOverageCreditUpsell = useShowOverageCreditUpsell();
  // TODO(lift): v112 adds TUI switch notice and possibly other upsells
  // const showTuiSwitchNotice = useShowTuiSwitchNotice();
  const tuiJustSwitched = process.env.CLAUDE_CODE_TUI_JUST_SWITCHED !== undefined;
  const showTuiSwitchNotice = false; // TODO(lift): placeholder
  const showSomeOtherUpsell = false; // TODO(lift): placeholder

  // Effect for guest passes upsell
  let t0;
  let t1;
  if ($[0] !== showGuestPassesUpsell) {
    t0 = () => {
      if (showGuestPassesUpsell) {
        incrementGuestPassesSeenCount();
      }
    };
    t1 = [showGuestPassesUpsell];
    $[0] = showGuestPassesUpsell;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);

  // Effect for overage credit upsell
  let t2;
  let t3;
  if ($[3] !== showGuestPassesUpsell || $[4] !== showOverageCreditUpsell) {
    t2 = () => {
      if (showOverageCreditUpsell && !showGuestPassesUpsell) {
        incrementOverageCreditUpsellSeenCount();
      }
    };
    t3 = [showOverageCreditUpsell, showGuestPassesUpsell];
    $[3] = showGuestPassesUpsell;
    $[4] = showOverageCreditUpsell;
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  useEffect(t2, t3);

  // TODO(lift): v112 adds effects for TUI switch notice and other upsells
  // Effect for TUI switch notice
  let t4;
  let t5;
  if ($[7] !== showTuiSwitchNotice) {
    t4 = () => {
      if (showTuiSwitchNotice) {
        // TODO(lift): call incrementTuiSwitchSeenCount() once component is lifted
      }
    };
    t5 = [showTuiSwitchNotice];
    $[7] = showTuiSwitchNotice;
    $[8] = t4;
    $[9] = t5;
  } else {
    t4 = $[8];
    t5 = $[9];
  }
  useEffect(t4, t5);

  // Effect for some other upsell
  let t6;
  let t7;
  if ($[10] !== showOverageCreditUpsell || $[11] !== showTuiSwitchNotice) {
    t6 = () => {
      if (showOverageCreditUpsell && !showTuiSwitchNotice) {
        incrementOverageCreditUpsellSeenCount();
      }
    };
    t7 = [showOverageCreditUpsell, showTuiSwitchNotice];
    $[10] = showOverageCreditUpsell;
    $[11] = showTuiSwitchNotice;
    $[12] = t6;
    $[13] = t7;
  } else {
    t6 = $[12];
    t7 = $[13];
  }
  useEffect(t6, t7);

  // Effect for yet another upsell
  let t8;
  let t9;
  if ($[14] !== showSomeOtherUpsell || $[15] !== showGuestPassesUpsell || $[16] !== showOverageCreditUpsell || $[17] !== showTuiSwitchNotice) {
    t8 = () => {
      if (showSomeOtherUpsell && !showGuestPassesUpsell && !showOverageCreditUpsell && !showTuiSwitchNotice) {
        // TODO(lift): increment some other counter
      }
    };
    t9 = [showSomeOtherUpsell, showGuestPassesUpsell, showOverageCreditUpsell, showTuiSwitchNotice];
    $[14] = showSomeOtherUpsell;
    $[15] = showGuestPassesUpsell;
    $[16] = showOverageCreditUpsell;
    $[17] = showTuiSwitchNotice;
    $[18] = t8;
    $[19] = t9;
  } else {
    t8 = $[18];
    t9 = $[19];
  }
  useEffect(t8, t9);

  const textWidth = Math.max(columns - 15, 20);
  const truncatedVersion = truncate(version, Math.max(textWidth - 13, 6));
  const effortSuffix = getEffortSuffix(model, effortValue);
  const {
    shouldSplit,
    truncatedModel,
    truncatedBilling
  } = formatModelAndBilling(modelDisplayName + effortSuffix, billingType, textWidth);
  const cwdAvailableWidth = agentName ? textWidth - 1 - stringWidth(agentName) - 3 : textWidth;
  const truncatedCwd = truncatePath(cwd, Math.max(cwdAvailableWidth, 10));
  let t10;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = isFullscreenEnvEnabled() ? <AnimatedClawd /> : <Clawd />;
    $[20] = t10;
  } else {
    t10 = $[20];
  }
  let t11;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = <Text bold={true}>Claude Code</Text>;
    $[21] = t11;
  } else {
    t11 = $[21];
  }
  let t12;
  if ($[22] !== truncatedVersion) {
    t12 = <Text>{t11}{" "}<Text dimColor={true}>v{truncatedVersion}</Text></Text>;
    $[22] = truncatedVersion;
    $[23] = t12;
  } else {
    t12 = $[23];
  }
  let t13;
  if ($[24] !== shouldSplit || $[25] !== truncatedBilling || $[26] !== truncatedModel) {
    t13 = shouldSplit ? <><Text dimColor={true}>{truncatedModel}</Text><Text dimColor={true}>{truncatedBilling}</Text></> : <Text dimColor={true}>{truncatedModel} · {truncatedBilling}</Text>;
    $[24] = shouldSplit;
    $[25] = truncatedBilling;
    $[26] = truncatedModel;
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  const t14 = agentName ? `@${agentName} · ${truncatedCwd}` : truncatedCwd;
  let t15;
  if ($[28] !== t14) {
    t15 = <Text dimColor={true}>{t14}</Text>;
    $[28] = t14;
    $[29] = t15;
  } else {
    t15 = $[29];
  }
  let t16;
  if ($[30] !== showGuestPassesUpsell || $[31] !== textWidth) {
    t16 = showGuestPassesUpsell && <GuestPassesUpsell />;
    $[30] = showGuestPassesUpsell;
    $[31] = textWidth;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  let t17;
  if ($[33] !== showOverageCreditUpsell || $[34] !== showGuestPassesUpsell) {
    t17 = !showGuestPassesUpsell && showOverageCreditUpsell && <OverageCreditUpsell maxWidth={textWidth} twoLine={true} />;
    $[33] = showOverageCreditUpsell;
    $[34] = showGuestPassesUpsell;
    $[35] = t17;
  } else {
    t17 = $[35];
  }
  // TODO(lift): v112 adds TUI switch notice and other upsell render slots
  let t18;
  if ($[36] !== showTuiSwitchNotice) {
    t18 = tuiJustSwitched && showTuiSwitchNotice && (
      <Box paddingLeft={2} flexDirection="column" marginTop={1}>
        {/* TODO(lift): <TuiSwitchNotice /> */}
      </Box>
    );
    $[36] = showTuiSwitchNotice;
    $[37] = t18;
  } else {
    t18 = $[37];
  }
  let t19;
  if ($[38] !== showSomeOtherUpsell || $[39] !== showGuestPassesUpsell || $[40] !== showOverageCreditUpsell || $[41] !== showTuiSwitchNotice) {
    t19 = !showGuestPassesUpsell && !showOverageCreditUpsell && !showTuiSwitchNotice && showSomeOtherUpsell && (
      <Box paddingLeft={2} flexDirection="column" marginTop={1}>
        {/* TODO(lift): <SomeOtherUpsell /> */}
      </Box>
    );
    $[38] = showSomeOtherUpsell;
    $[39] = showGuestPassesUpsell;
    $[40] = showOverageCreditUpsell;
    $[41] = showTuiSwitchNotice;
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  let t20;
  if ($[43] !== t10 || $[44] !== t12 || $[45] !== t13 || $[46] !== t15 || $[47] !== t16 || $[48] !== t17) {
    t20 = <Box flexDirection="row" gap={2} alignItems="center">{t10}<Box flexDirection="column">{t12}{t13}{t15}{t16}{t17}</Box></Box>;
    $[43] = t10;
    $[44] = t12;
    $[45] = t13;
    $[46] = t15;
    $[47] = t16;
    $[48] = t17;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  let t21;
  if ($[50] !== t20 || $[51] !== t18 || $[52] !== t19) {
    t21 = <OffscreenFreeze><Box flexDirection="column">{t20}{t18}{t19}</Box></OffscreenFreeze>;
    $[50] = t20;
    $[51] = t18;
    $[52] = t19;
    $[53] = t21;
  } else {
    t21 = $[53];
  }
  return t21;
}
function _temp2(s_0) {
  return s_0.effortValue;
}
function _temp(s) {
  return s.agent;
}
