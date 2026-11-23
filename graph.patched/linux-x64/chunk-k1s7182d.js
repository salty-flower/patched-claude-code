// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe}from"./chunk-732yb76j.js";import{Ul,Rn}from"./chunk-r3adsed5.js";import{i}from"./chunk-5g5ea6r9.js";function ba(){if(!Pe(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Ul()&&!Rn()&&!i.CLAUDE_CODE_REMOTE)return!1;return!0}function Loe(e){return ba()&&e.agentId===void 0}
export{ba,Loe};
