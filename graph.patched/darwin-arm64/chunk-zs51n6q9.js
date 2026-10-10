// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Nh,_G}from"./chunk-4bw62nzm.js";import{a}from"./chunk-yvnhkg35.js";import{ft}from"./chunk-x0dc37w9.js";import{wo}from"./chunk-75xzrg6e.js";import{It}from"./chunk-hwpb27as.js";import{dg}from"./chunk-c5zwk83v.js";import{Ro}from"./chunk-gdqk35jy.js";import{X0}from"./chunk-g5m3cxby.js";import{U6,dW}from"./chunk-jwjgedet.js";function OOe(o){let l=wo();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!dW(X0)&&(o===void 0||i(o))}function e(){if(!dg())return!1;if(U6()||Nh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ft().skillOverrides?.[X0];if(o==="off"||o==="user-invocable-only")return!1;let l=_G();if(l!==void 0&&!l.includes(X0))return!1;return!0}function i(o){return o.some((l)=>It(l,Ro))}
export{OOe};
