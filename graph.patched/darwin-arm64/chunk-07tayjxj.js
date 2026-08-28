// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{CJ as i,DJ as m}from"./_344.js";import"./_763.js";import"./_764.js";import"./_765.js";import"./_766.js";import"./_767.js";import"./_769.js";import"./_770.js";import"./_774.js";import"./_793.js";import"./_794.js";import"./_795.js";import"./_796.js";import{bad as l}from"./_797.js";import"./_798.js";import"./_799.js";import"./_800.js";import"./_801.js";import"./_802.js";import"./_803.js";import"./_804.js";import"./_805.js";import"./_806.js";import"./_807.js";import"./_808.js";import"./_809.js";import"./_810.js";import"./_811.js";import"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_825.js";import"./_833.js";import"./_834.js";import"./_835.js";import"./_836.js";import"./_837.js";import"./_838.js";import{Exd as u}from"./_839.js";async function v(){let t=await i();if(!t.success)return{type:"text",value:`Failed to create heap dump: ${t.error}`};let e=[t.heapPath,t.diagPath,"",d(t.diagnostics)];return e.push("","Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers."),{type:"text",value:e.join(`
`)}}function d(t){let{memoryUsage:e,resourceUsage:a,analysis:o}=t,s=e.external-e.arrayBuffers,r=Math.max(0,e.rss-e.heapTotal-e.external),p=e.heapTotal>e.external+r?"\u2014 most memory is JS heap (inspect the .heapsnapshot)":"\u2014 most memory is native (NOT in the .heapsnapshot)",h=o.potentialLeaks.length?o.potentialLeaks.map((c)=>`  \u26A0 ${c}`).join(`
`):"  (no obvious leak indicators)";return[`RSS ${n(e.rss)} (peak ${n(a.maxRSS)}) ${p}`,`  JS heap        ${n(e.heapTotal).padStart(8)}  in snapshot`,`  array buffers  ${n(e.arrayBuffers).padStart(8)}  not in snapshot`,`  other external ${n(s).padStart(8)}  not in snapshot`,`  unaccounted    ${n(r).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,h].join(`
`)}function n(t){return`${(t/1073741824).toFixed(2)} GB`}var y=u(()=>{l();m()});y();export{v as call};
