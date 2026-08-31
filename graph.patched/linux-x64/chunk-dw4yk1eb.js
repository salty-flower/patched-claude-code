// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{sg}from"./chunk-zqv7v2m2.js";import{Dh,$d}from"./chunk-ctzahqyh.js";function QQ(t,r){return`${sg(t)??""}/${sg(r)??""}`}function INn({serverName:t,toolName:r,mcpTaskId:s,toolUseId:o,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}){let e=Dh("mcp_task");return{...$d(e,"mcp_task",QQ(t,r),o),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:s??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}}
export{QQ,INn};
