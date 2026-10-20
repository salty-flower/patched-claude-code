// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{nf}from"./chunk-4qk0x4ke.js";import{Kk,gS}from"./chunk-jnkjbh3m.js";function RZ(t,r){return`${nf(t)??""}/${nf(r)??""}`}function jhs(t){return nf(t)??""}function LDn({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=Kk("mcp_task");return{...gS(e,"mcp_task",RZ(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{RZ,jhs,LDn};
