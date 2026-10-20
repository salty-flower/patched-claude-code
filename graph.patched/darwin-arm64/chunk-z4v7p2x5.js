// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$e}from"./chunk-bjnpzyk4.js";import{Fu,On}from"./chunk-kpqr86hf.js";import{a}from"./chunk-h422gpw8.js";function Sa(){if(!$e(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if(Fu()&&!On()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function Ele(e){return Sa()&&e.agentId===void 0}
export{Sa,Ele};
