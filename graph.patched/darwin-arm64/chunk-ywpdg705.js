// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{k}from"./chunk-axsjfnwn.js";import{hr}from"./chunk-ecyypctx.js";import{i}from"./chunk-n1cpnz94.js";import{FUt,zu}from"./chunk-3e6pdcy8.js";var LIt=5000;function JA(){if(i.CLAUDE_CODE_DISABLE_MCP_TASKS)return!1;return k("tengu_glowing_lark",zu()===FUt&&!i.CLAUDE_CODE_REMOTE&&!hr())}function VOn(){return JA()&&k("tengu_mcp_task_worker_wake",!1)}function Qcs(){return i.CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND}
export{LIt,JA,VOn,Qcs};
