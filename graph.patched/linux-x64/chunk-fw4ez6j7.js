// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{Hse}from"./chunk-4rkc6f3s.js";function Pve(){let e=i.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;if(!e||e.toLowerCase()==="inherit")return;if(i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE&&Hse("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim()!==e)return;return e}
export{Pve};
