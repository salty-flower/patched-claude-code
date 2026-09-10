// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{hu,Fn}from"./chunk-6n7yk222.js";import{He}from"./chunk-d8qjp6nk.js";import{a}from"./chunk-1bwwmttj.js";function Oi(){if(!He(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(hu()&&!Fn()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function jCe(e){return Oi()&&e.agentId===void 0}
export{Oi,jCe};
