// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{rp}from"./chunk-ykgr5et4.js";import{$E,Bm}from"./chunk-8n1wgbzq.js";function bB(t,r){return`${rp(t)??""}/${rp(r)??""}`}function dLr(t){return rp(t)??""}function nFt({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=$E("mcp_task");return{...Bm(e,"mcp_task",bB(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{bB,dLr,nFt};
