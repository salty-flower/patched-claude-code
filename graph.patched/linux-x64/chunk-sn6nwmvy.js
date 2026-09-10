// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Qg,fU}from"./chunk-6n7yk222.js";import{a}from"./chunk-1bwwmttj.js";import{qe}from"./chunk-sp4f0zv3.js";import{Ai}from"./chunk-7xfwsz67.js";import{oo}from"./chunk-ce4ppmnp.js";import{qc}from"./chunk-5cmmpk59.js";import{zt}from"./chunk-v87fkm5m.js";import{Pk}from"./chunk-ntf4qdc5.js";import{dh}from"./chunk-6ak6017c.js";function Gne(o){let l=Ai();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!qc())return!1;if(dh()||Qg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=qe().skillOverrides?.[Pk];if(o==="off"||o==="user-invocable-only")return!1;let l=fU();if(l!==void 0&&!l.includes(Pk))return!1;return!0}function i(o){return o.some((l)=>zt(l,oo))}
export{Gne};
