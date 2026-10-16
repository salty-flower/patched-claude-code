// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Np}from"./chunk-9cn774tb.js";import{bk,Y_}from"./chunk-gbvgjqem.js";function tQ(t,r){return`${Np(t)??""}/${Np(r)??""}`}function tZo(t){return Np(t)??""}function ICn({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=bk("mcp_task");return{...Y_(e,"mcp_task",tQ(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{tQ,tZo,ICn};
