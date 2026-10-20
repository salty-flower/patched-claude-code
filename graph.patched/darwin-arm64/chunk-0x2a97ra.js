// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{jy,K6}from"./chunk-kpqr86hf.js";import{a}from"./chunk-h422gpw8.js";import{ft}from"./chunk-qwytg6a7.js";import{Ro}from"./chunk-gr9e4jde.js";import{At}from"./chunk-f4yykyp9.js";import{mm}from"./chunk-14w94a54.js";import{vo}from"./chunk-waw2sr63.js";import{qH}from"./chunk-kh2d43p5.js";import{kq,Pz}from"./chunk-rxaamykc.js";function INe(o){let l=Ro();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!Pz(qH)&&(o===void 0||i(o))}function e(){if(!mm())return!1;if(kq()||jy())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ft().skillOverrides?.[qH];if(o==="off"||o==="user-invocable-only")return!1;let l=K6();if(l!==void 0&&!l.includes(qH))return!1;return!0}function i(o){return o.some((l)=>At(l,vo))}
export{INe};
