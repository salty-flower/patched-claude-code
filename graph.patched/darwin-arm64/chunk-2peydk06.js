// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{yu,$n}from"./chunk-sgyvc67j.js";import{Ie}from"./chunk-8yfx63va.js";import{a}from"./chunk-dv6tepz3.js";function Di(){if(!Ie(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(yu()&&!$n()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function Xke(e){return Di()&&e.agentId===void 0}
export{Di,Xke};
