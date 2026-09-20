// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Wg,tN}from"./chunk-sgamszzq.js";import{a}from"./chunk-wkhfcbsj.js";import{Ge}from"./chunk-k515hq0v.js";import{As}from"./chunk-ec199pf4.js";import{$t}from"./chunk-qe3f6kd6.js";import{fo}from"./chunk-g4c6ggz4.js";import{Nu}from"./chunk-cmbv9pzk.js";import{DT}from"./chunk-tf6g8qks.js";import{yy}from"./chunk-wwbdzw8c.js";function Rle(o){let l=As();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Nu())return!1;if(yy()||Wg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ge().skillOverrides?.[DT];if(o==="off"||o==="user-invocable-only")return!1;let l=tN();if(l!==void 0&&!l.includes(DT))return!1;return!0}function i(o){return o.some((l)=>$t(l,fo))}
export{Rle};
