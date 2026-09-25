// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Sg,kF}from"./chunk-s8xs8s76.js";import{a}from"./chunk-3a4khaz5.js";import{Ye}from"./chunk-je0c1kfp.js";import{jo}from"./chunk-9fsgjz11.js";import{Gt}from"./chunk-mvgykbex.js";import{go}from"./chunk-twxt3h9y.js";import{lp}from"./chunk-08ezdbvt.js";import{dP}from"./chunk-e30anq4d.js";import{oS}from"./chunk-c4zfw611.js";function dye(o){let l=jo();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!lp())return!1;if(oS()||Sg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ye().skillOverrides?.[dP];if(o==="off"||o==="user-invocable-only")return!1;let l=kF();if(l!==void 0&&!l.includes(dP))return!1;return!0}function i(o){return o.some((l)=>Gt(l,go))}
export{dye};
