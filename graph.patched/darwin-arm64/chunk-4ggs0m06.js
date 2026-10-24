// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{C_,VK}from"./chunk-ersar6wn.js";import{i}from"./chunk-9a41hw1t.js";import{mt}from"./chunk-32v5ghb4.js";import{Lo}from"./chunk-j350yvzv.js";import{Rt}from"./chunk-epan1q4y.js";import{jm}from"./chunk-qezssh9y.js";import{To}from"./chunk-hx3hkv7r.js";import{fL}from"./chunk-87hz2nbc.js";import{v4,$V}from"./chunk-k5t234z0.js";function n1e(o){let l=Lo();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!$V(fL)&&(o===void 0||r(o))}function e(){if(!jm())return!1;if(v4()||C_())return!1;if(i.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=mt().skillOverrides?.[fL];if(o==="off"||o==="user-invocable-only")return!1;let l=VK();if(l!==void 0&&!l.includes(fL))return!1;return!0}function r(o){return o.some((l)=>Rt(l,To))}
export{n1e};
