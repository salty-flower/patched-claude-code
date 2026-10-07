// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{eh,Gj}from"./chunk-8mvda08c.js";import{a}from"./chunk-j77txbjn.js";import{ct}from"./chunk-861a7whf.js";import{bo}from"./chunk-rdy2m4vh.js";import{Ot}from"./chunk-ax2crbgp.js";import{Om}from"./chunk-z3f7qz5q.js";import{ko}from"./chunk-ac6xzhn0.js";import{iO}from"./chunk-nzydyy8q.js";import{nG,L4}from"./chunk-fy1jza16.js";function GTe(o){let l=bo();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!L4(iO)&&(o===void 0||i(o))}function e(){if(!Om())return!1;if(nG()||eh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ct().skillOverrides?.[iO];if(o==="off"||o==="user-invocable-only")return!1;let l=Gj();if(l!==void 0&&!l.includes(iO))return!1;return!0}function i(o){return o.some((l)=>Ot(l,ko))}
export{GTe};
