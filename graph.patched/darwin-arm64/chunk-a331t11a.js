// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ne}from"./chunk-9s1z8ttt.js";import{zc,Pn}from"./chunk-ersar6wn.js";import{i}from"./chunk-9a41hw1t.js";function Ia(){if(!Ne(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(zc()&&!Pn()&&!i.CLAUDE_CODE_REMOTE)return!1;return!0}function jce(e){return Ia()&&e.agentId===void 0}
export{Ia,jce};
