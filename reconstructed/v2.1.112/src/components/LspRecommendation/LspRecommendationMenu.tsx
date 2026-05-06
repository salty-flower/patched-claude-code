import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Box, Text } from '../../ink.js';
import { Select } from '../CustomSelect/select.js';
import { PermissionDialog } from '../permissions/PermissionDialog.js';
type Props = {
  pluginName: string;
  pluginDescription?: string;
  fileExtension: string;
  onResponse: (response: 'yes' | 'no' | 'never' | 'disable') => void;
};
const AUTO_DISMISS_MS = 30_000;
export function LspRecommendationMenu({
  pluginName,
  pluginDescription,
  fileExtension,
  onResponse
}: Props): React.ReactNode {
  const $ = _c(36);
  // Use ref to avoid timer reset when onResponse changes
  const onResponseRef = React.useRef(onResponse);
  let t0;
  if ($[0] !== onResponse) {
    t0 = () => {
      onResponseRef.current = onResponse;
    };
    $[0] = onResponse;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  React.useEffect(t0);
  let t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      const timeoutId = setTimeout(ref => ref.current('no'), AUTO_DISMISS_MS, onResponseRef);
      return () => clearTimeout(timeoutId);
    };
    t2 = [];
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  React.useEffect(t1, t2);
  let t3;
  if ($[4] !== onResponse) {
    t3 = function onSelect(value: string): void {
      q: switch (value) {
        case 'yes': {
          onResponse('yes');
          break q;
        }
        case 'no': {
          onResponse('no');
          break q;
        }
        case 'never': {
          onResponse('never');
          break q;
        }
        case 'disable':
          onResponse('disable');
      }
    };
    $[4] = onResponse;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const onSelect = t3;
  let t4;
  if ($[6] !== pluginName) {
    t4 = {
      label: <Text>
            Yes, install <Text bold>{pluginName}</Text>
          </Text>,
      value: 'yes'
    };
    $[6] = pluginName;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      label: 'No, not now',
      value: 'no'
    };
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== pluginName) {
    t6 = {
      label: <Text>
            Never for <Text bold>{pluginName}</Text>
          </Text>,
      value: 'never'
    };
    $[9] = pluginName;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      label: 'Disable all LSP recommendations',
      value: 'disable'
    };
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] !== t4 || $[13] !== t6) {
    t8 = [t4, t5, t6, t7];
    $[12] = t4;
    $[13] = t6;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  const options = t8;
  let t9;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = <Box marginBottom={1}>
          <Text dimColor>
            LSP provides code intelligence like go-to-definition and error
            checking
          </Text>
        </Box>;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  let t10;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = <Text dimColor>Plugin:</Text>;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] !== pluginName) {
    t11 = <Box>{t10}<Text> {pluginName}</Text></Box>;
    $[17] = pluginName;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  let t12;
  if ($[19] !== pluginDescription) {
    t12 = pluginDescription && <Box>
            <Text dimColor>{pluginDescription}</Text>
          </Box>;
    $[19] = pluginDescription;
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  let t13;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = <Text dimColor>Triggered by:</Text>;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  let t14;
  if ($[22] !== fileExtension) {
    t14 = <Box>{t13}<Text> {fileExtension} files</Text></Box>;
    $[22] = fileExtension;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  let t15;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = <Box marginTop={1}>
          <Text>Would you like to install this LSP plugin?</Text>
        </Box>;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  let t16;
  if ($[25] !== onResponse) {
    t16 = () => onResponse('no');
    $[25] = onResponse;
    $[26] = t16;
  } else {
    t16 = $[26];
  }
  let t17;
  if ($[27] !== onSelect || $[28] !== options || $[29] !== t16) {
    t17 = <Box>
          <Select options={options} onChange={onSelect} onCancel={t16} />
        </Box>;
    $[27] = onSelect;
    $[28] = options;
    $[29] = t16;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  let t18;
  if ($[31] !== t11 || $[32] !== t12 || $[33] !== t14 || $[34] !== t17) {
    t18 = <PermissionDialog title="LSP Plugin Recommendation">
        <Box flexDirection="column" paddingX={2} paddingY={1}>
          {t9}
          {t11}
          {t12}
          {t14}
          {t15}
          {t17}
        </Box>
      </PermissionDialog>;
    $[31] = t11;
    $[32] = t12;
    $[33] = t14;
    $[34] = t17;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  return t18;
}
