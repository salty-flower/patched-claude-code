// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Kc}from"./chunk-fc3dk7tx.js";import{ew,Rg}from"./chunk-yrezdw36.js";function ele(e,t){return`${Kc(e)??""}/${Kc(t)??""}`}function Nsi(e){return Kc(e)??""}function Rnr({serverName:e,toolName:t,mcpTaskId:o,toolUseId:s,pollIntervalMs:a,abortController:n,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:c,ttlExpiresAt:l}){let r=ew("mcp_task");return{...Rg(r,"mcp_task",ele(e,t),s),type:"mcp_task",status:"running",serverName:e,toolName:t,mcpTaskId:o??r,mcpStatus:"working",pollIntervalMs:a,abortController:n,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:c,ttlExpiresAt:l}}
export{ele,Nsi,Rnr};
