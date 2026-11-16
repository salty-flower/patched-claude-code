// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gr}from"./chunk-wgxe6brw.js";import{i}from"./chunk-5g5ea6r9.js";var n=3;var _="tengu_hazel_trellis";function AR(){let e=i.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(e!==void 0)return e;let t=gr();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:a}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-0kb95qpq.js"),{getCachedClientData:A}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-skw1pjrj.js"),o=A()?.[_],r=u(o)?o:a(_,n);t.maxSubagentSpawnDepthFromGrowthBook=u(r)?r:n}return t.maxSubagentSpawnDepthFromGrowthBook}function u(e){return typeof e==="number"&&Number.isInteger(e)&&e>=1}
export{AR};
