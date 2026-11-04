// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{De}from"./chunk-w5484khd.js";import{Rl,On}from"./chunk-ecyypctx.js";import{i}from"./chunk-n1cpnz94.js";function za(){if(!De(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Rl()&&!On()&&!i.CLAUDE_CODE_REMOTE)return!1;return!0}function Qye(e){return za()&&e.agentId===void 0}
export{za,Qye};
