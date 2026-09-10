// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Zg,b$}from"./chunk-sgyvc67j.js";import{a}from"./chunk-dv6tepz3.js";import{Ve}from"./chunk-yyyfew8j.js";import{Ci}from"./chunk-65gr57am.js";import{oo}from"./chunk-e02s7cks.js";import{qc}from"./chunk-9sh3ncn0.js";import{Wt}from"./chunk-b9rrx1k4.js";import{Iv}from"./chunk-xk9fb22k.js";import{ph}from"./chunk-wy4wrq2p.js";function nre(o){let l=Ci();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!qc())return!1;if(ph()||Zg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ve().skillOverrides?.[Iv];if(o==="off"||o==="user-invocable-only")return!1;let l=b$();if(l!==void 0&&!l.includes(Iv))return!1;return!0}function i(o){return o.some((l)=>Wt(l,oo))}
export{nre};
