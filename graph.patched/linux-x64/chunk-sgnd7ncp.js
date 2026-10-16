// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Np}from"./chunk-twv410wa.js";import{_k,q_}from"./chunk-f7hb96sp.js";function KQ(t,r){return`${Np(t)??""}/${Np(r)??""}`}function g7o(t){return Np(t)??""}function cTn({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=_k("mcp_task");return{...q_(e,"mcp_task",KQ(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:a,abortController:n,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{KQ,g7o,cTn};
