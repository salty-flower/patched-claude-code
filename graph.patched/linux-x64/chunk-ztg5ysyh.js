// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Eg,XO}from"./chunk-30zk17wm.js";import{a}from"./chunk-m9gbfvns.js";import{Je}from"./chunk-30zpf1a7.js";import{Na}from"./chunk-7vs7qneb.js";import{on}from"./chunk-aqwdkmxp.js";import{Qu}from"./chunk-p68befxb.js";import{Jhe}from"./chunk-yw7yjsp7.js";import{IE}from"./chunk-vkqz5eqn.js";import{Po}from"./chunk-8shpct85.js";import{o_}from"./chunk-h0wtkwgx.js";function SZ(o){let l=Na();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Qu()||Jhe())return!1;if(o_()||Eg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Je().skillOverrides?.[IE];if(o==="off"||o==="user-invocable-only")return!1;let l=XO();if(l!==void 0&&!l.includes(IE))return!1;return!0}function i(o){return o.some((l)=>on(l,Po))}
export{SZ};
