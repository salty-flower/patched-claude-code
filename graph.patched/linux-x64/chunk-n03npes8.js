// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{So}from"./chunk-gsz4ykfe.js";import{a}from"./chunk-869zfth6.js";var n=3;var _="tengu_hazel_trellis";function Sw(){let e=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(e!==void 0)return e;let t=So();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:A}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-qjvgjqwf.js"),{getCachedClientData:S}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-x59a1gmz.js"),o=S()?.[_],r=u(o)?o:A(_,n);t.maxSubagentSpawnDepthFromGrowthBook=u(r)?r:n}return t.maxSubagentSpawnDepthFromGrowthBook}function u(e){return typeof e==="number"&&Number.isInteger(e)&&e>=1}
export{Sw};
