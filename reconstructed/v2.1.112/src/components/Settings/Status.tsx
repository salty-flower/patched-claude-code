import { c as _c } from "react/compiler-runtime";
import figures from 'figures';
import * as React from 'react';
import { Suspense, use } from 'react';
import { getSessionId } from '../../bootstrap/state.js';
import type { LocalJSXCommandContext } from '../../commands.js';
import { useIsInsideModal } from '../../context/modalContext.js';
import { Box, Text, useTheme } from '../../ink.js';
import { type AppState, useAppState } from '../../state/AppState.js';
import { getCwd } from '../../utils/cwd.js';
import { getCurrentSessionTitle } from '../../utils/sessionStorage.js';
import {
  buildIDEProperties,
  buildInstallationDiagnostics,
  buildInstallationHealthDiagnostics,
  buildMcpProperties,
  buildMemoryDiagnostics,
  buildSandboxProperties,
  buildSettingSourcesProperties,
  type Diagnostic,
  getModelDisplayLabel,
  type Property,
} from '../../utils/status.js';
import type { ThemeName } from '../../utils/theme.js';
import { ConfigurableShortcutHint } from '../ConfigurableShortcutHint.js';

type Props = {
  context: LocalJSXCommandContext;
  diagnosticsPromise: Promise<Diagnostic[]>;
};

function buildPrimarySection(): Property[] {
  const sessionId = getSessionId();
  const customTitle = getCurrentSessionTitle(sessionId);
  const nameValue = customTitle ?? <Text dimColor>/rename to add a name</Text>;
  return [
    { label: 'Version', value: MACRO.VERSION },
    // TODO(lift): v112 removed account/API provider properties from primary section
    ...[],
    { label: 'Session name', value: nameValue },
    { label: 'Session ID', value: sessionId },
    { label: 'cwd', value: getCwd() },
    ...buildAccountProperties(),
    ...buildAPIProviderProperties(),
  ];
}

function buildSecondarySection({
  mainLoopModel,
  mcp,
  theme,
  context,
}: {
  mainLoopModel: AppState['mainLoopModel'];
  mcp: AppState['mcp'];
  theme: ThemeName;
  context: LocalJSXCommandContext;
}): Property[] {
  const modelLabel = getModelDisplayLabel(mainLoopModel);
  return [
    { label: 'Model', value: modelLabel },
    ...buildIDEProperties(
      mcp.clients,
      context.options.ideInstallationStatus,
      theme,
    ),
    ...buildMcpProperties(mcp.clients, theme),
    ...buildSandboxProperties(),
    ...buildSettingSourcesProperties(),
  ];
}

export async function buildDiagnostics(): Promise<Diagnostic[]> {
  return [
    ...(await buildInstallationDiagnostics()),
    ...(await buildInstallationHealthDiagnostics()),
    ...(await buildMemoryDiagnostics()),
  ];
}

function PropertyValue(t0) {
  const $ = _c(8);
  const {
    value
  } = t0;
  if (Array.isArray(value)) {
    let t1;
    if ($[0] !== value) {
      let t2;
      if ($[2] !== value.length) {
        t2 = (item, i) => <Text key={i}>{item}{i < value.length - 1 ? "," : ""}</Text>;
        $[2] = value.length;
        $[3] = t2;
      } else {
        t2 = $[3];
      }
      t1 = value.map(t2);
      $[0] = value;
      $[1] = t1;
    } else {
      t1 = $[1];
    }
    let t2;
    if ($[4] !== t1) {
      t2 = <Box flexWrap="wrap" columnGap={1} flexShrink={99}>{t1}</Box>;
      $[4] = t1;
      $[5] = t2;
    } else {
      t2 = $[5];
    }
    return t2;
  }
  if (typeof value === "string") {
    let t1;
    if ($[6] !== value) {
      t1 = <Text>{value}</Text>;
      $[6] = value;
      $[7] = t1;
    } else {
      t1 = $[7];
    }
    return t1;
  }
  return value;
}

// TODO(lift): v112 added these helper functions for table rendering
function renderPropertyRow(property, index) {
  // TODO(lift): exact filter logic for dLY — v112 uses Wn table component
  return property.length > 0;
}

function flattenProperties(section, sectionIndex) {
  // TODO(lift): exact flatMap logic for QLY
  return section.map((prop, propIndex) => ({ ...prop, key: `${sectionIndex}-${propIndex}` }));
}

export function Status(t0) {
  const $ = _c(21);
  const {
    context,
    diagnosticsPromise
  } = t0;
  const mainLoopModel = useAppState(_temp);
  const mcp = useAppState(_temp2);
  const [theme] = useTheme();
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = buildPrimarySection();
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== context || $[2] !== mainLoopModel || $[3] !== mcp || $[4] !== theme) {
    t2 = buildSecondarySection({
      mainLoopModel,
      mcp,
      theme,
      context
    });
    $[1] = context;
    $[2] = mainLoopModel;
    $[3] = mcp;
    $[4] = theme;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== t2) {
    t3 = [t1, t2];
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const sections = t3;
  const grow = useIsInsideModal() ? 1 : undefined;
  // v112 change: added columns config cache slot
  let t4;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [{ bold: true }, {}];
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== sections) {
    // v112 change: uses Wn (Table) component with box="plain" and columns instead of map+Box
    t5 = <Wn box="plain" columns={t4}>{sections.filter(renderPropertyRow).flatMap(flattenProperties)}</Wn>;
    $[9] = sections;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== diagnosticsPromise) {
    t6 = <Suspense fallback={null}><Diagnostics promise={diagnosticsPromise} /></Suspense>;
    $[11] = diagnosticsPromise;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== grow || $[14] !== t5 || $[15] !== t6) {
    t7 = <Box flexDirection="column" gap={1} flexGrow={grow}>{t5}{t6}</Box>;
    $[13] = grow;
    $[14] = t5;
    $[15] = t6;
    $[16] = t7;
  } else {
    t7 = $[16];
  }
  let t8;
  if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = <Text dimColor={true}><ConfigurableShortcutHint action="confirm:no" context="Settings" fallback="Esc" description="cancel" /></Text>;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  let t9;
  if ($[18] !== grow || $[19] !== t7) {
    t9 = <Box flexDirection="column" flexGrow={grow}>{t7}{t8}</Box>;
    $[18] = grow;
    $[19] = t7;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  return t9;
}

function _temp4(properties, i) {
  return properties.length > 0 && <Box key={i} flexDirection="column">{properties.map(_temp3)}</Box>;
}

function _temp3(t0, j) {
  const {
    label,
    value
  } = t0;
  return <Box key={j} flexDirection="row" gap={1} flexShrink={0}>{label !== undefined && <Text bold={true}>{label}:</Text>}<PropertyValue value={value} /></Box>;
}

function _temp2(s_0) {
  return s_0.mcp;
}

function _temp(s) {
  return s.mainLoopModel;
}

function Diagnostics(t0) {
  const $ = _c(5);
  const {
    promise
  } = t0;
  const diagnostics = use(promise);
  if (diagnostics.length === 0) {
    return null;
  }
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    // v112 change: "System diagnostics" lowercase 'd' (was "System Diagnostics" in v88)
    t1 = <Text bold={true}>System diagnostics</Text>;
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== diagnostics) {
    t2 = diagnostics.map(_temp5);
    $[1] = diagnostics;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== t2) {
    t3 = <Box flexDirection="column" paddingBottom={1}>{t1}{t2}</Box>;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}

function _temp5(diagnostic, i) {
  // v112 change: uses D4 component with status="warning" instead of figures.warning
  return <Box key={i} flexDirection="row" gap={1} paddingX={1}><D4 status="warning" />{typeof diagnostic === "string" ? <Text wrap="wrap">{diagnostic}</Text> : diagnostic}</Box>;
}
