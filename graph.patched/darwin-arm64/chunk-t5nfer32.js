// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{yh,Z2}from"./chunk-vd0a9d2s.js";import{a}from"./chunk-70qqbqq4.js";import{ut}from"./chunk-48by85wp.js";import{_o}from"./chunk-cy4t0v8j.js";import{Dt}from"./chunk-q21zbtsq.js";import{zm}from"./chunk-2954ctkb.js";import{wo}from"./chunk-16227f3r.js";import{DO}from"./chunk-6pyykbna.js";import{c6,e2}from"./chunk-s1pvsse0.js";function Xxe(o){let l=_o();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!e2(DO)&&(o===void 0||i(o))}function e(){if(!zm())return!1;if(c6()||yh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ut().skillOverrides?.[DO];if(o==="off"||o==="user-invocable-only")return!1;let l=Z2();if(l!==void 0&&!l.includes(DO))return!1;return!0}function i(o){return o.some((l)=>Dt(l,wo))}
export{Xxe};
