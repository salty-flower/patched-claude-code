// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Si}from"./chunk-gdxma5w6.js";import{a}from"./chunk-qymratxs.js";var o=3,_="tengu_hazel_trellis";function Rb(){let n=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(n!==void 0)return n;let t=Si();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:r}=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-qvdw6x18.js"),e=r(_,o);t.maxSubagentSpawnDepthFromGrowthBook=typeof e==="number"&&Number.isInteger(e)&&e>=1?e:o}return t.maxSubagentSpawnDepthFromGrowthBook}
export{Rb};
