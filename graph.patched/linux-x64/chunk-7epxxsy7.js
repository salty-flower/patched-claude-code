// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{dg,pN}from"./chunk-bj7g1p32.js";import{a}from"./chunk-td8fcebs.js";import{ze}from"./chunk-33bqb969.js";import{vi}from"./chunk-n9r1w949.js";import{Ac}from"./chunk-4tttmnme.js";import{oo}from"./chunk-d3z3njyb.js";import{Yt}from"./chunk-ns5b1f8h.js";import{LE}from"./chunk-s3w1vcp8.js";import{P_}from"./chunk-0a5h9bvp.js";function gee(o){let l=vi();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Ac())return!1;if(P_()||dg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ze().skillOverrides?.[LE];if(o==="off"||o==="user-invocable-only")return!1;let l=pN();if(l!==void 0&&!l.includes(LE))return!1;return!0}function i(o){return o.some((l)=>Yt(l,oo))}
export{gee};
