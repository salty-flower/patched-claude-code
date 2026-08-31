// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{C}from"./chunk-764j5mtt.js";import{KS}from"./chunk-4banhw28.js";import{Q}from"./chunk-enaab290.js";var i={MCP:"run /mcp for details",plugins:"run /plugin for details",sandbox:"run /sandbox for details",settings:"run `claude doctor` for details",install:"run `claude doctor` for details"};function qv(e,r){if(r<=0)return;let o=i[e];n(`${r} setup ${C(r,"issue")}: ${e}${o?` (${o})`:""}`,{level:"info"})}function yCt(e,r,o){if(KS(e))return!1;if(e.config.type==="claudeai-proxy"){if(e.config.eligible===!1&&!o(e.name))return!1;return r(e.name)}return e.config.type!=="sse-ide"&&e.config.type!=="ws-ide"}function sYt(e,r,o){return Q(e,(t)=>t.type==="needs-auth"&&yCt(t,r,o))}
export{qv,yCt,sYt};
