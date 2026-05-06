import { c as _c } from "react/compiler-runtime";
// biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
import * as React from 'react';
import { Suspense, useState } from 'react';
import { useKeybinding } from '../../keybindings/useKeybinding.js';
import { useExitOnCtrlCDWithKeybindings } from '../../hooks/useExitOnCtrlCDWithKeybindings.js';
import { useTerminalSize } from '../../hooks/useTerminalSize.js';
import { useIsInsideModal, useModalOrTerminalSize } from '../../context/modalContext.js';
import { Pane } from '../design-system/Pane.js';
import { Tabs, Tab } from '../design-system/Tabs.js';
import { Status, buildDiagnostics } from './Status.js';
import { Config } from './Config.js';
import { Usage } from './Usage.js';
// TODO(lift): Stats component import path — v112 references DuK (Stats tab component)
// import { Stats } from './Stats.js';
import type { LocalJSXCommandContext, CommandResultDisplay } from '../../commands.js';
type Props = {
  onClose: (result?: string, options?: {
    display?: CommandResultDisplay;
  }) => void;
  context: LocalJSXCommandContext;
  defaultTab: 'Status' | 'Config' | 'Usage' | 'Gates' | 'Stats';
};
export function Settings(t0) {
  const $ = _c(28);
  const {
    onClose,
    context,
    defaultTab
  } = t0;
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const [tabsHidden, setTabsHidden] = useState(false);
  const [configOwnsEsc, setConfigOwnsEsc] = useState(false);
  const [gatesOwnsEsc, setGatesOwnsEsc] = useState(false);
  const insideModal = useIsInsideModal();
  const {
    rows
  } = useModalOrTerminalSize(useTerminalSize());
  const contentHeight = insideModal ? rows + 1 : Math.max(15, Math.min(Math.floor(rows * 0.8), 30));
  const [diagnosticsPromise] = useState(_temp2);
  useExitOnCtrlCDWithKeybindings();
  let t1;
  if ($[0] !== onClose || $[1] !== tabsHidden) {
    t1 = () => {
      if (tabsHidden) {
        return;
      }
      onClose("Status dialog dismissed", {
        display: "system"
      });
    };
    $[0] = onClose;
    $[1] = tabsHidden;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleEscape = t1;
  // v112 change: added "Stats" tab to the escape exclusion list
  const t2 = !tabsHidden && !(selectedTab === "Config" && configOwnsEsc) && !(selectedTab === "Gates" && gatesOwnsEsc) && selectedTab !== "Stats";
  let t3;
  if ($[3] !== t2) {
    t3 = {
      context: "Settings",
      isActive: t2
    };
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  useKeybinding("confirm:no", handleEscape, t3);
  let t4;
  if ($[5] !== context || $[6] !== diagnosticsPromise) {
    t4 = <Tab key="status" title="Status"><Status context={context} diagnosticsPromise={diagnosticsPromise} /></Tab>;
    $[5] = context;
    $[6] = diagnosticsPromise;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== contentHeight || $[9] !== context || $[10] !== onClose) {
    t5 = <Tab key="config" title="Config"><Suspense fallback={null}><Config context={context} onClose={onClose} setTabsHidden={setTabsHidden} onIsSearchModeChange={setConfigOwnsEsc} contentHeight={contentHeight} /></Suspense></Tab>;
    $[8] = contentHeight;
    $[9] = context;
    $[10] = onClose;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = <Tab key="usage" title="Usage"><Usage /></Tab>;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  // v112 change: new "Stats" tab (always present, not conditional like Gates)
  let t6b;
  if ($[13] !== onClose) {
    t6b = <Tab key="stats" title="Stats"><Stats onClose={onClose} /></Tab>;
    $[13] = onClose;
    $[14] = t6b;
  } else {
    t6b = $[14];
  }
  // v112 change: Gates tab is now unconditionally empty (feature flag removed)
  let t7;
  if ($[15] !== contentHeight) {
    t7 = [];
    $[15] = contentHeight;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  let t8;
  if ($[17] !== t4 || $[18] !== t5 || $[19] !== t6b || $[20] !== t7) {
    t8 = [t4, t5, t6, t6b, ...t7];
    $[17] = t4;
    $[18] = t5;
    $[19] = t6b;
    $[20] = t7;
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  const tabs = t8;
  const t9 = defaultTab !== "Config" && defaultTab !== "Gates";
  const t10 = tabsHidden || insideModal ? undefined : contentHeight;
  let t11;
  if ($[22] !== selectedTab || $[23] !== t10 || $[24] !== t9 || $[25] !== tabs || $[26] !== tabsHidden) {
    t11 = <Pane color="permission"><Tabs color="permission" selectedTab={selectedTab} onTabChange={setSelectedTab} hidden={tabsHidden} initialHeaderFocused={t9} contentHeight={t10}>{tabs}</Tabs></Pane>;
    $[22] = selectedTab;
    $[23] = t10;
    $[24] = t9;
    $[25] = tabs;
    $[26] = tabsHidden;
    $[27] = t11;
  } else {
    t11 = $[27];
  }
  return t11;
}
function _temp2() {
  return buildDiagnostics().catch(_temp);
}
function _temp() {
  return [];
}
