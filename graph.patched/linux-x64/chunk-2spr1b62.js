// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_g,CO}from"./chunk-2vv5hpw3.js";import{a}from"./chunk-g0kfvhx3.js";import{Ve}from"./chunk-bcez0qfh.js";import{ol}from"./chunk-xw94cfq3.js";import{Xt}from"./chunk-tm6zne0x.js";import{Hu}from"./chunk-jdveajcr.js";import{cme}from"./chunk-35g0efss.js";import{Ow}from"./chunk-sqb6m4v7.js";import{So}from"./chunk-9eypbdqg.js";import{_y}from"./chunk-ayrqc6ta.js";function JX(o){let l=ol();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Hu()||cme())return!1;if(_y()||_g())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ve().skillOverrides?.[Ow];if(o==="off"||o==="user-invocable-only")return!1;let l=CO();if(l!==void 0&&!l.includes(Ow))return!1;return!0}function i(o){return o.some((l)=>Xt(l,So))}
export{JX};
