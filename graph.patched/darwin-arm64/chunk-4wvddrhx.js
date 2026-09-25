// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{cu}from"./chunk-q2ay87b6.js";import{MS,om}from"./chunk-xaj6s8tf.js";function Zye(t,r){return`${cu(t)??""}/${cu(r)??""}`}function Bqr({serverName:t,toolName:r,mcpTaskId:s,toolUseId:o,pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}){let e=MS("mcp_task");return{...om(e,"mcp_task",Zye(t,r),o),type:"mcp_task",status:"running",serverName:t,toolName:r,mcpTaskId:s??e,mcpStatus:"working",pollIntervalMs:n,abortController:a,protocol:i,driveAbortController:p,ttlExpiresAt:l}}
export{Zye,Bqr};
