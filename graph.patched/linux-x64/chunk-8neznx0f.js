// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{rp}from"./chunk-f5ksdq5a.js";import{Nv,Bm}from"./chunk-0gv2h7jq.js";function l1(t,r){return`${rp(t)??""}/${rp(r)??""}`}function M0r(t){return rp(t)??""}function NNt({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=Nv("mcp_task");return{...Bm(e,"mcp_task",l1(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{l1,M0r,NNt};
