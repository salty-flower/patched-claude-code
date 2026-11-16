// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bd}from"./chunk-eajc1kv8.js";import{Nw,M_}from"./chunk-7k96963f.js";function HRe(e,t){return`${bd(e)??""}/${bd(t)??""}`}function d1i(e){return bd(e)??""}function GSr({serverName:e,toolName:t,mcpTaskId:o,toolUseId:s,pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}){let r=Nw("mcp_task");return{...M_(r,"mcp_task",HRe(e,t),s),type:"mcp_task",status:"running",serverName:e,toolName:t,mcpTaskId:o??r,mcpStatus:"working",pollIntervalMs:n,abortController:a,backgroundedToDeliverMessage:i,protocol:p,driveAbortController:l,ttlExpiresAt:c}}
export{HRe,d1i,GSr};
