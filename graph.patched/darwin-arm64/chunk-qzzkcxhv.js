// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Sg,I1}from"./chunk-g4zaymy2.js";import{a}from"./chunk-bn8q5mbz.js";import{Ve}from"./chunk-jz0pchtb.js";import{rl}from"./chunk-qjvexw1x.js";import{Xt}from"./chunk-p24f2xe3.js";import{Ru}from"./chunk-g9byphym.js";import{rme}from"./chunk-gzm5sjtv.js";import{Dw}from"./chunk-1gqxn9e9.js";import{vo}from"./chunk-twpmrk6n.js";import{Sy}from"./chunk-z3a2t4ra.js";function JX(o){let l=rl();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Ru()||rme())return!1;if(Sy()||Sg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ve().skillOverrides?.[Dw];if(o==="off"||o==="user-invocable-only")return!1;let l=I1();if(l!==void 0&&!l.includes(Dw))return!1;return!0}function i(o){return o.some((l)=>Xt(l,vo))}
export{JX};
