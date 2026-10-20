// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fe}from"./chunk-8nra9hkj.js";import{$u,On}from"./chunk-dxktn51d.js";import{a}from"./chunk-cd1a8ced.js";function ba(){if(!Fe(process.env.CLAUDE_CODE_COORDINATOR_MODE))return!1;if($u()&&!On()&&!a.CLAUDE_CODE_REMOTE)return!1;return!0}function hle(e){return ba()&&e.agentId===void 0}
export{ba,hle};
