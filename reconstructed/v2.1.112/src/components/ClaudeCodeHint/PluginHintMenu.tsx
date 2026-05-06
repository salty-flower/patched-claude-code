import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { Select } from '../CustomSelect/select.js';
import { PermissionDialog } from '../permissions/PermissionDialog.js';
type Props = {
  pluginName: string;
  pluginDescription?: string;
  marketplaceName: string;
  sourceCommand: string;
  onResponse: (response: 'yes' | 'no' | 'disable') => void;
};
const AUTO_DISMISS_MS = 30_000;
export function PluginHintMenu(t0) {
  const $ = _c(35);
  const {
    pluginName,
    pluginDescription,
    marketplaceName,
    sourceCommand,
    onResponse
  } = t0;
  const onResponseRef = React.useRef(onResponse);
  let t1;
  if ($[0] !== onResponse) {
    t1 = () => {
      onResponseRef.current = onResponse;
    };
    $[0] = onResponse;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  React.useEffect(t1);
  let t2;
  let t3;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      const B = setTimeout(UOA, gOA, onResponseRef);
      return () => clearTimeout(B);
    };
    t3 = [];
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  React.useEffect(t2, t3);
  let t4;
  if ($[4] !== onResponse) {
    t4 = function onSelect(m) {
      q: switch (m) {
        case "yes": {
          onResponse("yes");
          break q;
        }
        case "disable": {
          onResponse("disable");
          break q;
        }
        default:
          onResponse("no");
      }
    };
    $[4] = onResponse;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const onSelect = t4;
  let t5;
  if ($[6] !== pluginName) {
    t5 = {
      label: <Text>Yes, install <Text bold>{pluginName}</Text></Text>,
      value: "yes"
    };
    $[6] = pluginName;
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  let t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      label: "No",
      value: "no"
    };
    t7 = {
      label: "No, and don't show plugin installation hints again",
      value: "disable"
    };
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  let t8;
  if ($[10] !== t5) {
    t8 = [t5, t6, t7];
    $[10] = t5;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  const options = t8;
  let t9;
  if ($[12] !== sourceCommand) {
    t9 = <Box marginBottom={1}><Text dimColor>The <Text bold>{sourceCommand}</Text> command suggests installing a plugin.</Text></Box>;
    $[12] = sourceCommand;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = <Text dimColor>Plugin:</Text>;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  let t11;
  if ($[15] !== pluginName) {
    t11 = <Box>{t10}<Text> {pluginName}</Text></Box>;
    $[15] = pluginName;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  let t12;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = <Text dimColor>Marketplace:</Text>;
    $[17] = t12;
  } else {
    t12 = $[17];
  }
  let t13;
  if ($[18] !== marketplaceName) {
    t13 = <Box>{t12}<Text> {marketplaceName}</Text></Box>;
    $[18] = marketplaceName;
    $[19] = t13;
  } else {
    t13 = $[19];
  }
  let t14;
  if ($[20] !== pluginDescription) {
    t14 = pluginDescription && <Box><Text dimColor>{pluginDescription}</Text></Box>;
    $[20] = pluginDescription;
    $[21] = t14;
  } else {
    t14 = $[21];
  }
  let t15;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = <Box marginTop={1}><Text>Would you like to install it?</Text></Box>;
    $[22] = t15;
  } else {
    t15 = $[22];
  }
  let t16;
  if ($[23] !== onResponse) {
    t16 = () => onResponse("no");
    $[23] = onResponse;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  let t17;
  if ($[25] !== onSelect || $[26] !== options || $[27] !== t16) {
    t17 = <Box><Select options={options} onChange={onSelect} onCancel={t16} /></Box>;
    $[25] = onSelect;
    $[26] = options;
    $[27] = t16;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  let t18;
  if ($[29] !== t11 || $[30] !== t13 || $[31] !== t14 || $[32] !== t17 || $[33] !== t9) {
    t18 = <PermissionDialog title="Plugin Recommendation"><Box flexDirection="column" paddingX={2} paddingY={1}>{t9}{t11}{t13}{t14}{t15}{t17}</Box></PermissionDialog>;
    $[29] = t11;
    $[30] = t13;
    $[31] = t14;
    $[32] = t17;
    $[33] = t9;
    $[34] = t18;
  } else {
    t18 = $[34];
  }
  return t18;
}
