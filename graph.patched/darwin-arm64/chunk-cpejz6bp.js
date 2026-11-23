// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Sd}from"./chunk-3qbbq2mx.js";import{Fw,M_}from"./chunk-n5274ece.js";function KRe(e,t){return`${Sd(e)??""}/${Sd(t)??""}`}function N2i(e){return Sd(e)??""}function fEr({serverName:e,toolName:t,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}){let r=Fw("mcp_task");return{...M_(r,"mcp_task",KRe(e,t),s),type:"mcp_task",status:"running",serverName:e,toolName:t,mcpTaskId:o??r,mcpStatus:"working",pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}}
export{KRe,N2i,fEr};
