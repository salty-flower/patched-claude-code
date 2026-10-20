// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{By,FK}from"./chunk-dxktn51d.js";import{a}from"./chunk-cd1a8ced.js";import{pt}from"./chunk-merbp8kx.js";import{Ro}from"./chunk-q5je0w38.js";import{Ct}from"./chunk-h3dn4j2q.js";import{mm}from"./chunk-r191j2js.js";import{Eo}from"./chunk-gwrkawm1.js";import{WD}from"./chunk-jfr616vp.js";import{m4,S2}from"./chunk-7p7zxzag.js";function vNe(o){let l=Ro();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!S2(WD)&&(o===void 0||i(o))}function e(){if(!mm())return!1;if(m4()||By())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=pt().skillOverrides?.[WD];if(o==="off"||o==="user-invocable-only")return!1;let l=FK();if(l!==void 0&&!l.includes(WD))return!1;return!0}function i(o){return o.some((l)=>Ct(l,Eo))}
export{vNe};
