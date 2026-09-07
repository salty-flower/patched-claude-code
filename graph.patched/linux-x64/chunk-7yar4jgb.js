// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{vi}from"./chunk-n9r1w949.js";import{a}from"./chunk-td8fcebs.js";var o=3,_="tengu_hazel_trellis";function Nb(){let n=a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;if(n!==void 0)return n;let t=vi();if(t.maxSubagentSpawnDepthFromGrowthBook===void 0){let{getFeatureValue_CACHED_MAY_BE_STALE:r}=import.meta.require("./chunk-914ykmbt.js"),e=r(_,o);t.maxSubagentSpawnDepthFromGrowthBook=typeof e==="number"&&Number.isInteger(e)&&e>=1?e:o}return t.maxSubagentSpawnDepthFromGrowthBook}
export{Nb};
