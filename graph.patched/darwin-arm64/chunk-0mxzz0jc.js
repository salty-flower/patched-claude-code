// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{au}from"./chunk-vtxy0wm1.js";import{Wb,vf}from"./chunk-xs5gxdh4.js";function hU(t,r){return`${au(t)??""}/${au(r)??""}`}function h_r(t){return au(t)??""}function Hkt({serverName:t,toolName:r,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}){let e=Wb("mcp_task");return{...vf(e,"mcp_task",hU(t,r),s),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:o??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:c}}
export{hU,h_r,Hkt};
