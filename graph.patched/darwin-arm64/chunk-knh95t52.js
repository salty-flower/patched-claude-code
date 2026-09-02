// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{zu,$n}from"./chunk-38213y7h.js";import{Me}from"./chunk-5b2g0bc6.js";import{a}from"./chunk-w3k8bej2.js";function Fs(){if(!Me(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(zu()&&!$n()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function oTe(e){return Fs()&&e.agentId===void 0}
export{Fs,oTe};
