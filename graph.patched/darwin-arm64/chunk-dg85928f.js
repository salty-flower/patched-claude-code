// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{cpe}from"./chunk-gbez09mv.js";function ije(){let e=i.CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL;if(!e||e.toLowerCase()==="inherit")return;if(i.CLAUDE_CODE_SUBAGENT_MODEL_FORCE&&cpe("CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL")?.trim()!==e)return;return e}
export{ije};
