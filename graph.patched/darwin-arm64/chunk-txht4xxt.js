// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Wg,Z1}from"./chunk-cet8na02.js";import{a}from"./chunk-qymratxs.js";import{Ge}from"./chunk-ja8knfm8.js";import{Si}from"./chunk-gdxma5w6.js";import{jc}from"./chunk-mmyses0x.js";import{io}from"./chunk-79hnjxh7.js";import{zt}from"./chunk-4sa61azs.js";import{yC}from"./chunk-8hqq8f75.js";import{sh}from"./chunk-h4djyd62.js";function bne(o){let l=Si();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!jc())return!1;if(sh()||Wg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ge().skillOverrides?.[yC];if(o==="off"||o==="user-invocable-only")return!1;let l=Z1();if(l!==void 0&&!l.includes(yC))return!1;return!0}function i(o){return o.some((l)=>zt(l,io))}
export{bne};
