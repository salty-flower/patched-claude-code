// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne}from"./chunk-fdxhcr6b.js";import{Op,jn}from"./chunk-4bw62nzm.js";import{a}from"./chunk-yvnhkg35.js";function xa(){if(!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Op()&&!jn()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function pre(e){return xa()&&e.agentId===void 0}
export{xa,pre};
