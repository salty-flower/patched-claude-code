// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{wu,Ln}from"./chunk-g4zaymy2.js";import{De}from"./chunk-vpkz5m05.js";import{a}from"./chunk-bn8q5mbz.js";function js(){if(!De(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(wu()&&!Ln()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function pbe(e){return js()&&e.agentId===void 0}
export{js,pbe};
