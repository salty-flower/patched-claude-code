// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Eg,QN}from"./chunk-38213y7h.js";import{a}from"./chunk-w3k8bej2.js";import{Je}from"./chunk-cx07awjk.js";import{Fa}from"./chunk-w4pcf9py.js";import{on}from"./chunk-vb9my8xr.js";import{Zu}from"./chunk-92en3jeh.js";import{c_e}from"./chunk-02drrn6q.js";import{IE}from"./chunk-twnw06x3.js";import{Do}from"./chunk-bqw67h0a.js";import{iy}from"./chunk-1cz7cxv4.js";function kZ(o){let l=Fa();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Zu()||c_e())return!1;if(iy()||Eg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Je().skillOverrides?.[IE];if(o==="off"||o==="user-invocable-only")return!1;let l=QN();if(l!==void 0&&!l.includes(IE))return!1;return!0}function i(o){return o.some((l)=>on(l,Do))}
export{kZ};
