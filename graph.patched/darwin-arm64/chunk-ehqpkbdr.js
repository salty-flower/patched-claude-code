// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Mh}from"./chunk-hh4awqht.js";import{$y,Np}from"./chunk-z0473pgd.js";function Jae(t,r){return`${Mh(t)??""}/${Mh(r)??""}`}function gdr({serverName:t,toolName:r,mcpTaskId:s,toolUseId:o,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}){let e=$y("mcp_task");return{...Np(e,"mcp_task",Jae(t,r),o),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:s??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}}
export{Jae,gdr};
