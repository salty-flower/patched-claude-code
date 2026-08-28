// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{I}from"./chunk-2h7wbm8s.js";import{av}from"./chunk-1fqfesc3.js";import{Q}from"./chunk-pgxpv80n.js";var i={MCP:"run /mcp for details",plugins:"run /plugin for details",sandbox:"run /sandbox for details",settings:"run `claude doctor` for details",install:"run `claude doctor` for details"};function JA(e,r){if(r<=0)return;let o=i[e];n(`${r} setup ${I(r,"issue")}: ${e}${o?` (${o})`:""}`,{level:"info"})}function pAt(e,r,o){if(av(e))return!1;if(e.config.type==="claudeai-proxy"){if(e.config.eligible===!1&&!o(e.name))return!1;return r(e.name)}return e.config.type!=="sse-ide"&&e.config.type!=="ws-ide"}function zqt(e,r,o){return Q(e,(t)=>t.type==="needs-auth"&&pAt(t,r,o))}
export{JA,pAt,zqt};
