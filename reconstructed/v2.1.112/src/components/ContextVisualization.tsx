import { c as _c } from "react/compiler-runtime";
import { feature } from 'bun:bundle';
import * as React from 'react';
import { Box, Text } from '../ink.js';
import type { ContextData } from '../utils/analyzeContext.js';
import { generateContextSuggestions } from '../utils/contextSuggestions.js';
import { getDisplayPath } from '../utils/file.js';
import { formatTokens } from '../utils/format.js';
import { getSourceDisplayName, type SettingSource } from '../utils/settings/constants.js';
import { plural } from '../utils/stringUtils.js';
import { ContextSuggestions } from './ContextSuggestions.js';
import { Tree } from './design-system/Tree.js';
// TODO(lift): _q6 (getModelDisplayName?) at byte ~10491403
const RESERVED_CATEGORY_NAME = 'Autocompact buffer';

/**
 * One-liner for the legend header showing what context-collapse has done.
 * Returns null when nothing's summarized/staged so we don't add visual
 * noise in the common case. This is the one place a user can see that
 * their context was rewritten — the <collapsed> placeholders are isMeta
 * and don't appear in the conversation view.
 */
function CollapseStatus() {
  const $ = _c(2);
  if (feature("CONTEXT_COLLAPSE")) {
    let t0;
    let t1;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
      t1 = Symbol.for("react.early_return_sentinel");
      bb0: {
        const {
          getStats,
          isContextCollapseEnabled
        } = require("../services/contextCollapse/index.js") as typeof import('../services/contextCollapse/index.js');
        if (!isContextCollapseEnabled()) {
          t1 = null;
          break bb0;
        }
        const s = getStats();
        const {
          health: h
        } = s;
        const parts = [];
        if (s.collapsedSpans > 0) {
          parts.push(`${s.collapsedSpans} ${plural(s.collapsedSpans, "span")} summarized (${s.collapsedMessages} msgs)`);
        }
        if (s.stagedSpans > 0) {
          parts.push(`${s.stagedSpans} staged`);
        }
        const summary = parts.length > 0 ? parts.join(", ") : h.totalSpawns > 0 ? `${h.totalSpawns} ${plural(h.totalSpawns, "spawn")}, nothing staged yet` : "waiting for first trigger";
        let line2 = null;
        if (h.totalErrors > 0) {
          line2 = <Text color="warning">Collapse errors: {h.totalErrors}/{h.totalSpawns} spawns failed{h.lastError ? ` (last: ${h.lastError.slice(0, 60)})` : ""}</Text>;
        } else {
          if (h.emptySpawnWarningEmitted) {
            line2 = <Text color="warning">Collapse idle: {h.totalEmptySpawns} consecutive empty runs</Text>;
          }
        }
        t0 = <><Text dimColor={true}>Context strategy: collapse ({summary})</Text>{line2}</>;
      }
      $[0] = t0;
      $[1] = t1;
    } else {
      t0 = $[0];
      t1 = $[1];
    }
    if (t1 !== Symbol.for("react.early_return_sentinel")) {
      return t1;
    }
    return t0;
  }
  return null;
}

// Order for displaying source groups: Project > User > Managed > Plugin > Built-in
const SOURCE_DISPLAY_ORDER = ['Project', 'User', 'Managed', 'Plugin', 'Built-in'];

/** Group items by source type for display, sorted by tokens descending within each group */
function groupBySource<T extends {
  source: SettingSource | 'plugin' | 'built-in';
  tokens: number;
}>(items: T[]): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const key = getSourceDisplayName(item.source);
    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  }
  // Sort each group by tokens descending
  for (const [key, group] of groups.entries()) {
    groups.set(key, group.sort((a, b) => b.tokens - a.tokens));
  }
  // Return groups in consistent order
  const orderedGroups = new Map<string, T[]>();
  for (const source of SOURCE_DISPLAY_ORDER) {
    const group = groups.get(source);
    if (group) {
      orderedGroups.set(source, group);
    }
  }
  return orderedGroups;
}
interface Props {
  data: ContextData;
}
export function ContextVisualization(t0) {
  const $ = _c(98);
  const {
    data
  } = t0;
  const {
    categories,
    totalTokens,
    rawMaxTokens,
    autocompactSource,
    percentage,
    gridRows,
    model,
    memoryFiles,
    mcpTools,
    deferredBuiltinTools: t1,
    systemTools,
    systemPromptSections,
    agents,
    skills,
    messageBreakdown
  } = data;
  let T0;
  let T1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[0] !== autocompactSource || $[1] !== categories || $[2] !== gridRows || $[3] !== mcpTools || $[4] !== model || $[5] !== percentage || $[6] !== rawMaxTokens || $[7] !== systemTools || $[8] !== t1 || $[9] !== totalTokens) {
    const deferredBuiltinTools = t1 === undefined ? [] : t1;
    const visibleCategories = categories.filter(_temp);
    let t10;
    if ($[21] !== categories) {
      t10 = categories.some(_temp2);
      $[21] = categories;
      $[22] = t10;
    } else {
      t10 = $[22];
    }
    const hasDeferredMcpTools = t10;
    const hasDeferredBuiltinTools = deferredBuiltinTools.length > 0;
    const autocompactCategory = categories.find(_temp3);
    T1 = Box;
    t6 = "column";
    t7 = 1;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
      t8 = <Text bold={true}>Context Usage</Text>;
      $[23] = t8;
    } else {
      t8 = $[23];
    }
    let t11;
    if ($[24] !== gridRows) {
      t11 = gridRows.map(_temp5);
      $[24] = gridRows;
      $[25] = t11;
    } else {
      t11 = $[25];
    }
    let t12;
    if ($[26] !== t11) {
      t12 = <Box flexDirection="column" flexShrink={0}>{t11}</Box>;
      $[26] = t11;
      $[27] = t12;
    } else {
      t12 = $[27];
    }
    let t13;
    if ($[28] !== model) {
      t13 = _q6(model) && <Text>{_q6(model)}</Text>;
      $[28] = model;
      $[29] = t13;
    } else {
      t13 = $[29];
    }
    let t14;
    if ($[30] !== model) {
      t14 = <Text dimColor={true}>{model}</Text>;
      $[30] = model;
      $[31] = t14;
    } else {
      t14 = $[31];
    }
    let t15;
    if ($[32] !== totalTokens) {
      t15 = formatTokens(totalTokens);
      $[32] = totalTokens;
      $[33] = t15;
    } else {
      t15 = $[33];
    }
    let t16;
    if ($[34] !== rawMaxTokens) {
      t16 = formatTokens(rawMaxTokens);
      $[34] = rawMaxTokens;
      $[35] = t16;
    } else {
      t16 = $[35];
    }
    let t17;
    if ($[36] !== percentage || $[37] !== t15 || $[38] !== t16) {
      t17 = <Text dimColor={true}>{t15}/{t16}{" "}tokens ({percentage}%)</Text>;
      $[36] = percentage;
      $[37] = t15;
      $[38] = t16;
      $[39] = t17;
    } else {
      t17 = $[39];
    }
    let t18;
    let t19;
    let t20;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
      t18 = <CollapseStatus />;
      t19 = <Text> </Text>;
      t20 = <Text dimColor={true} italic={true}>Estimated usage by category</Text>;
      $[40] = t18;
      $[41] = t19;
      $[42] = t20;
    } else {
      t18 = $[40];
      t19 = $[41];
      t20 = $[42];
    }
    let t21;
    if ($[43] !== rawMaxTokens) {
      t21 = (cat_2, index) => {
        const tokenDisplay = formatTokens(cat_2.tokens);
        const percentDisplay = cat_2.isDeferred ? "N/A" : `${(cat_2.tokens / rawMaxTokens * 100).toFixed(1)}%`;
        const isReserved = cat_2.name === RESERVED_CATEGORY_NAME;
        const displayName = cat_2.name;
        const symbol = cat_2.isDeferred ? " " : isReserved ? "\u26DD" : "\u26C1";
        return <Box key={index}><Text color={cat_2.color}>{symbol}</Text><Text> {displayName}: </Text><Text dimColor={true}>{tokenDisplay} tokens ({percentDisplay})</Text></Box>;
      };
      $[43] = rawMaxTokens;
      $[44] = t21;
    } else {
      t21 = $[44];
    }
    const t22 = visibleCategories.map(t21);
    let t23;
    if ($[45] !== categories || $[46] !== rawMaxTokens) {
      t23 = (categories.find(_temp6)?.tokens ?? 0) > 0 && <Box><Text dimColor={true}>⛶</Text><Text> Free space: </Text><Text dimColor={true}>{formatTokens(categories.find(_temp7)?.tokens || 0)}{" "}({((categories.find(_temp8)?.tokens || 0) / rawMaxTokens * 100).toFixed(1)}%)</Text></Box>;
      $[45] = categories;
      $[46] = rawMaxTokens;
      $[47] = t23;
    } else {
      t23 = $[47];
    }
    const t24 = autocompactCategory && autocompactCategory.tokens > 0 && <Box><Text color={autocompactCategory.color}>⛝</Text><Text dimColor={true}> {autocompactCategory.name}: </Text><Text dimColor={true}>{formatTokens(autocompactCategory.tokens)} tokens ({(autocompactCategory.tokens / rawMaxTokens * 100).toFixed(1)}%)</Text></Box>;
    let t25;
    if ($[48] !== t13 || $[49] !== t14 || $[50] !== t17 || $[51] !== t22 || $[52] !== t23 || $[53] !== t24) {
      t25 = <Box flexDirection="column" gap={0} flexShrink={0}>{t13}{t14}{t17}{t18}{t19}{t20}{t22}{t23}{t24}</Box>;
      $[48] = t13;
      $[49] = t14;
      $[50] = t17;
      $[51] = t22;
      $[52] = t23;
      $[53] = t24;
      $[54] = t25;
    } else {
      t25 = $[54];
    }
    if ($[55] !== t12 || $[56] !== t25) {
      t9 = <Box flexDirection="row" gap={2}>{t12}{t25}</Box>;
      $[55] = t12;
      $[56] = t25;
      $[57] = t9;
    } else {
      t9 = $[57];
    }
    T0 = Box;
    t2 = "column";
    t3 = -1;
    let t26;
    if ($[58] !== autocompactSource || $[59] !== rawMaxTokens) {
      t26 = autocompactSource !== "model" && <Box marginTop={1}><Text bold={true}>Auto-compact window: </Text><Text dimColor={true}>{formatTokens(rawMaxTokens)}{" "}tokens · /autocompact</Text></Box>;
      $[58] = autocompactSource;
      $[59] = rawMaxTokens;
      $[60] = t26;
    } else {
      t26 = $[60];
    }
    if ($[61] !== hasDeferredMcpTools || $[62] !== mcpTools) {
      t4 = mcpTools.length > 0 && <Box flexDirection="column" marginTop={1}><Box><Text bold={true}>MCP tools</Text><Text dimColor={true}>{" "}· /mcp{hasDeferredMcpTools ? " (loaded on-demand)" : ""}</Text></Box>{mcpTools.some(_temp9) && <Box flexDirection="column" marginTop={1}><Text dimColor={true}>Loaded</Text><Tree>{mcpTools.filter(_temp0).map(_temp1)}</Tree></Box>}{hasDeferredMcpTools && mcpTools.some(_temp10) && <Box flexDirection="column" marginTop={1}><Text dimColor={true}>Available</Text><Tree>{mcpTools.filter(_temp11).map(_temp12)}</Tree></Box>}{!hasDeferredMcpTools && <Tree>{mcpTools.map(_temp13)}</Tree>}</Box>;
      $[61] = hasDeferredMcpTools;
      $[62] = mcpTools;
      $[63] = t4;
    } else {
      t4 = $[63];
    }
    t5 = (systemTools && systemTools.length > 0 || hasDeferredBuiltinTools) && false && <Box flexDirection="column" marginTop={1}><Box><Text bold={true}>[ANT-ONLY] System tools</Text>{hasDeferredBuiltinTools && <Text dimColor={true}> (some loaded on-demand)</Text>}</Box><Box flexDirection="column" marginTop={1}><Text dimColor={true}>Loaded</Text>{systemTools?.map(_temp14)}{deferredBuiltinTools.filter(_temp15).map(_temp16)}</Box>{hasDeferredBuiltinTools && deferredBuiltinTools.some(_temp17) && <Box flexDirection="column" marginTop={1}><Text dimColor={true}>Available</Text>{deferredBuiltinTools.filter(_temp18).map(_temp19)}</Box>}</Box>;
    $[0] = autocompactSource;
    $[1] = categories;
    $[2] = gridRows;
    $[3] = mcpTools;
    $[4] = model;
    $[5] = percentage;
    $[6] = rawMaxTokens;
    $[7] = systemTools;
    $[8] = t1;
    $[9] = totalTokens;
    $[10] = T0;
    $[11] = T1;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
    $[17] = t7;
    $[18] = t8;
    $[19] = t9;
    $[20] = t26;
  } else {
    T0 = $[10];
    T1 = $[11];
    t2 = $[12];
    t3 = $[13];
    t4 = $[14];
    t5 = $[15];
    t6 = $[16];
    t7 = $[17];
    t8 = $[18];
    t9 = $[19];
    t26 = $[20];
  }
  let t10;
  if ($[64] !== systemPromptSections) {
    t10 = systemPromptSections && systemPromptSections.length > 0 && false && <Box flexDirection="column" marginTop={1}><Text bold={true}>[ANT-ONLY] System prompt sections</Text>{systemPromptSections.map(_temp20)}</Box>;
    $[64] = systemPromptSections;
    $[65] = t10;
  } else {
    t10 = $[65];
  }
  let t11;
  if ($[66] !== agents) {
    t11 = agents.length > 0 && <Box flexDirection="column" marginTop={1}><Box><Text bold={true}>Custom agents</Text><Text dimColor={true}> · /agents</Text></Box>{Array.from(groupBySource(agents).entries()).map(_temp22)}</Box>;
    $[66] = agents;
    $[67] = t11;
  } else {
    t11 = $[67];
  }
  let t12;
  if ($[68] !== memoryFiles) {
    t12 = memoryFiles.length > 0 && <Box flexDirection="column" marginTop={1}><Box><Text bold={true}>Memory files</Text><Text dimColor={true}> · /memory</Text></Box><Tree>{memoryFiles.map(_temp23)}</Tree></Box>;
    $[68] = memoryFiles;
    $[69] = t12;
  } else {
    t12 = $[69];
  }
  let t13;
  if ($[70] !== skills) {
    t13 = skills && skills.tokens > 0 && <Box flexDirection="column" marginTop={1}><Box><Text bold={true}>Skills</Text><Text dimColor={true}> · /skills</Text></Box>{Array.from(groupBySource(skills.skillFrontmatter).entries()).map(_temp25)}</Box>;
    $[70] = skills;
    $[71] = t13;
  } else {
    t13 = $[71];
  }
  let t14;
  if ($[72] !== messageBreakdown) {
    t14 = messageBreakdown && false && <Box flexDirection="column" marginTop={1}><Text bold={true}>[ANT-ONLY] Message breakdown</Text><Box flexDirection="column" marginLeft={1}><Box><Text>Tool calls: </Text><Text dimColor={true}>{formatTokens(messageBreakdown.toolCallTokens)} tokens</Text></Box><Box><Text>Tool results: </Text><Text dimColor={true}>{formatTokens(messageBreakdown.toolResultTokens)} tokens</Text></Box><Box><Text>Attachments: </Text><Text dimColor={true}>{formatTokens(messageBreakdown.attachmentTokens)} tokens</Text></Box><Box><Text>Assistant messages (non-tool): </Text><Text dimColor={true}>{formatTokens(messageBreakdown.assistantMessageTokens)} tokens</Text></Box><Box><Text>User messages (non-tool-result): </Text><Text dimColor={true}>{formatTokens(messageBreakdown.userMessageTokens)} tokens</Text></Box></Box>{messageBreakdown.toolCallsByType.length > 0 && <Box flexDirection="column" marginTop={1}><Text bold={true}>[ANT-ONLY] Top tools</Text>{messageBreakdown.toolCallsByType.slice(0, 5).map(_temp26)}</Box>}{messageBreakdown.attachmentsByType.length > 0 && <Box flexDirection="column" marginTop={1}><Text bold={true}>[ANT-ONLY] Top attachments</Text>{messageBreakdown.attachmentsByType.slice(0, 5).map(_temp27)}</Box>}</Box>;
    $[72] = messageBreakdown;
    $[73] = t14;
  } else {
    t14 = $[73];
  }
  let t15;
  if ($[74] !== T0 || $[75] !== t10 || $[76] !== t11 || $[77] !== t12 || $[78] !== t13 || $[79] !== t14 || $[80] !== t2 || $[81] !== t3 || $[82] !== t4 || $[83] !== t5 || $[84] !== t26) {
    t15 = <T0 flexDirection={t2} marginLeft={t3}>{t26}{t4}{t5}{t10}{t11}{t12}{t13}{t14}</T0>;
    $[74] = T0;
    $[75] = t10;
    $[76] = t11;
    $[77] = t12;
    $[78] = t13;
    $[79] = t14;
    $[80] = t2;
    $[81] = t3;
    $[82] = t4;
    $[83] = t5;
    $[84] = t26;
    $[85] = t15;
  } else {
    t15 = $[85];
  }
  let t16;
  if ($[86] !== data) {
    t16 = generateContextSuggestions(data);
    $[86] = data;
    $[87] = t16;
  } else {
    t16 = $[87];
  }
  let t17;
  if ($[88] !== t16) {
    t17 = <ContextSuggestions suggestions={t16} />;
    $[88] = t16;
    $[89] = t17;
  } else {
    t17 = $[89];
  }
  let t18;
  if ($[90] !== T1 || $[91] !== t9 || $[92] !== t15 || $[93] !== t17 || $[94] !== t6 || $[95] !== t7 || $[96] !== t8 || $[97] !== t9) {
    t18 = <T1 flexDirection={t6} paddingLeft={t7}>{t8}{t9}{t15}{t17}</T1>;
    $[90] = T1;
    $[91] = t9;
    $[92] = t15;
    $[93] = t17;
    $[94] = t6;
    $[95] = t7;
    $[96] = t8;
    $[97] = t9;
    $[98] = t18;
  } else {
    t18 = $[98];
  }
  return t18;
}
function _temp27(attachment, i_10) {
  return <Box key={i_10} marginLeft={1}><Text>└ {attachment.name}: </Text><Text dimColor={true}>{formatTokens(attachment.tokens)} tokens</Text></Box>;
}
function _temp26(tool_5, i_9) {
  return <Box key={i_9} marginLeft={1}><Text>└ {tool_5.name}: </Text><Text dimColor={true}>calls {formatTokens(tool_5.callTokens)}, results{" "}{formatTokens(tool_5.resultTokens)}</Text></Box>;
}
function _temp25(t0) {
  const [sourceDisplay_0, sourceSkills] = t0;
  return <Box key={sourceDisplay_0} flexDirection="column" marginTop={1}><Text dimColor={true}>{sourceDisplay_0}</Text><Tree>{sourceSkills.map(_temp24)}</Tree></Box>;
}
function _temp24(skill, i_8) {
  return <Tree.Node key={i_8}><Text>└ {skill.name}: </Text><Text dimColor={true}>{formatTokens(skill.tokens)} tokens</Text></Tree.Node>;
}
function _temp23(file, i_7) {
  return <Tree.Node key={i_7}><Text>└ {getDisplayPath(file.path)}: </Text><Text dimColor={true}>{formatTokens(file.tokens)} tokens</Text></Tree.Node>;
}
function _temp22(t0) {
  const [sourceDisplay, sourceAgents] = t0;
  return <Box key={sourceDisplay} flexDirection="column" marginTop={1}><Text dimColor={true}>{sourceDisplay}</Text><Tree>{sourceAgents.map(_temp21)}</Tree></Box>;
}
function _temp21(agent, i_6) {
  return <Tree.Node key={i_6}><Text>└ {agent.agentType}: </Text><Text dimColor={true}>{formatTokens(agent.tokens)} tokens</Text></Tree.Node>;
}
function _temp20(section, i_5) {
  return <Box key={i_5}><Text>└ {section.name}: </Text><Text dimColor={true}>{formatTokens(section.tokens)} tokens</Text></Box>;
}
function _temp19(tool_4, i_4) {
  return <Box key={i_4}><Text dimColor={true}>└ {tool_4.name}</Text></Box>;
}
function _temp18(t_4) {
  return !t_4.isLoaded;
}
function _temp17(t_5) {
  return !t_5.isLoaded;
}
function _temp16(tool_3, i_3) {
  return <Box key={`def-${i_3}`}><Text>└ {tool_3.name}: </Text><Text dimColor={true}>{formatTokens(tool_3.tokens)} tokens</Text></Box>;
}
function _temp15(t_3) {
  return t_3.isLoaded;
}
function _temp14(tool_2, i_2) {
  return <Box key={`sys-${i_2}`}><Text>└ {tool_2.name}: </Text><Text dimColor={true}>{formatTokens(tool_2.tokens)} tokens</Text></Box>;
}
function _temp13(tool_1, i_1) {
  return <Box key={i_1}><Text>└ {tool_1.name}: </Text><Text dimColor={true}>{formatTokens(tool_1.tokens)} tokens</Text></Box>;
}
function _temp12(tool_0, i_0) {
  return <Box key={i_0}><Text dimColor={true}>└ {tool_0.name}</Text></Box>;
}
function _temp11(t_1) {
  return !t_1.isLoaded;
}
function _temp10(t_2) {
  return !t_2.isLoaded;
}
function _temp1(tool, i) {
  return <Box key={i}><Text>└ {tool.name}: </Text><Text dimColor={true}>{formatTokens(tool.tokens)} tokens</Text></Box>;
}
function _temp0(t) {
  return t.isLoaded;
}
function _temp9(t_0) {
  return t_0.isLoaded;
}
function _temp8(c_0) {
  return c_0.name === "Free space";
}
function _temp7(c) {
  return c.name === "Free space";
}
function _temp6(c_1) {
  return c_1.name === "Free space";
}
function _temp5(row, rowIndex) {
  return <Box key={rowIndex} flexDirection="row" marginLeft={-1}>{row.map(_temp4)}</Box>;
}
function _temp4(square, colIndex) {
  if (square.categoryName === "Free space") {
    return <Text key={colIndex} dimColor={true}>{"\u26F6 "}</Text>;
  }
  if (square.categoryName === RESERVED_CATEGORY_NAME) {
    return <Text key={colIndex} color={square.color}>{"\u26DD "}</Text>;
  }
  return <Text key={colIndex} color={square.color}>{square.squareFullness >= 0.7 ? "\u26C1 " : "\u26C0 "}</Text>;
}
function _temp3(cat_1) {
  return cat_1.name === RESERVED_CATEGORY_NAME;
}
function _temp2(cat_0) {
  return cat_0.isDeferred && cat_0.name.includes("MCP");
}
function _temp(cat) {
  return cat.tokens > 0 && cat.name !== "Free space" && cat.name !== RESERVED_CATEGORY_NAME && !cat.isDeferred;
}
