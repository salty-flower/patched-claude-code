// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{pu}from"./chunk-a9jqgh3e.js";import{$C,KS}from"./chunk-e4p6qc31.js";function Jte(t,e){return`${pu(t)??""}/${pu(e)??""}`}function APs(t){return pu(t)??""}function ujn({serverName:t,toolName:e,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,protocol:p,driveAbortController:i,ttlExpiresAt:c}){let r=$C("mcp_task");return{...KS(r,"mcp_task",Jte(t,e),s),type:"mcp_task",status:"running",serverName:t,toolName:e,mcpTaskId:o??r,mcpStatus:"working",pollIntervalMs:a,abortController:n,protocol:p,driveAbortController:i,ttlExpiresAt:c}}
export{Jte,APs,ujn};
