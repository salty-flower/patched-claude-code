// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ci}from"./chunk-65gr57am.js";import{a}from"./chunk-dv6tepz3.js";var o=3,_="tengu_hazel_trellis";function Nb(){let n=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(n!==void 0)return n;let t=Ci();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:r}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-sw19pm5f.js"),e=r(_,o);t.maxSubagentSpawnDepthFromGrowthBook=typeof e==="number"&&Number.isInteger(e)&&e>=1?e:o}return t.maxSubagentSpawnDepthFromGrowthBook}
export{Nb};
