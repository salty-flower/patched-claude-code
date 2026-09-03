// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{td}from"./chunk-5b4s2jqq.js";import{yd,ZX}from"./chunk-darxmw8c.js";function Ict({recipientName:i,leaderMode:t,proactivityLevel:e,tasks:r}){let n=s(i,r)?t:ZX(t,e),o=td(n);return o==="plan"?"default":o}function s(i,t){return Object.values(t).some((e)=>yd(e)&&e.status==="running"&&e.identity.agentName===i&&e.paneTeardown===void 0&&e.identity.resumableAgentId!==void 0)}
export{Ict};
