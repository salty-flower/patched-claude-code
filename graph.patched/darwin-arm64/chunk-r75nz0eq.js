// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe}from"./chunk-5p4f0tx0.js";import{Ul,Rn}from"./chunk-m8nhymg4.js";import{i}from"./chunk-428zme0n.js";function Sa(){if(!Pe(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Ul()&&!Rn()&&!i.CLAUDE_CODE_REMOTE)return!1;return!0}function Woe(e){return Sa()&&e.agentId===void 0}
export{Sa,Woe};
