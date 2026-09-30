// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Co}from"./chunk-ff0zt7cd.js";import{a}from"./chunk-5054mktj.js";var n=3;var _="tengu_hazel_trellis";function Ov(){let o=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(o!==void 0)return o;let t=Co();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:r}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-yqtfpe1q.js"),e=r(_,n);t.maxSubagentSpawnDepthFromGrowthBook=typeof e==="number"&&Number.isInteger(e)&&e>=1?e:n}return t.maxSubagentSpawnDepthFromGrowthBook}
export{Ov};
