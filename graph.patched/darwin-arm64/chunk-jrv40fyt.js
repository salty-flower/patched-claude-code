// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{fg,w1}from"./chunk-zhtwayh2.js";import{a}from"./chunk-dq2s4wjn.js";import{qe}from"./chunk-pe4nmbcg.js";import{Ci}from"./chunk-kk1kt2t6.js";import{vc}from"./chunk-v3gsmtah.js";import{oo}from"./chunk-n7zmtfbc.js";import{Xt}from"./chunk-3hs7jdtb.js";import{OE}from"./chunk-848t3d1m.js";import{Dy}from"./chunk-a4yjcp97.js";function _ee(o){let l=Ci();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!vc())return!1;if(Dy()||fg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=qe().skillOverrides?.[OE];if(o==="off"||o==="user-invocable-only")return!1;let l=w1();if(l!==void 0&&!l.includes(OE))return!1;return!0}function i(o){return o.some((l)=>Xt(l,oo))}
export{_ee};
