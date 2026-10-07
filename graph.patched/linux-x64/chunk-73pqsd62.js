// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{eh,Oj}from"./chunk-aywwjcwq.js";import{a}from"./chunk-869zfth6.js";import{lt}from"./chunk-2c0pkjse.js";import{So}from"./chunk-gsz4ykfe.js";import{Ot}from"./chunk-1xqd80pz.js";import{Om}from"./chunk-ve4tk804.js";import{To}from"./chunk-73f64bgc.js";import{rO}from"./chunk-a0qy54rp.js";import{Gz,R6}from"./chunk-b6ahp449.js";function LCe(o){let l=So();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!R6(rO)&&(o===void 0||i(o))}function e(){if(!Om())return!1;if(Gz()||eh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=lt().skillOverrides?.[rO];if(o==="off"||o==="user-invocable-only")return!1;let l=Oj();if(l!==void 0&&!l.includes(rO))return!1;return!0}function i(o){return o.some((l)=>Ot(l,To))}
export{LCe};
