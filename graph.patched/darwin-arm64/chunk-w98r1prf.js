// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le}from"./chunk-29aedz4e.js";import{ep,jn}from"./chunk-8mvda08c.js";import{a}from"./chunk-j77txbjn.js";function ra(){if(!Le(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(ep()&&!jn()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function BZ(e){return ra()&&e.agentId===void 0}
export{ra,BZ};
