// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{jg,WL}from"./chunk-txfrkyzp.js";import{a}from"./chunk-q2vrcqny.js";import{Ge}from"./chunk-ggjhe3cp.js";import{ks}from"./chunk-wmyy1anw.js";import{Ft}from"./chunk-3bn1z6rt.js";import{fo}from"./chunk-30p0nwys.js";import{Nu}from"./chunk-gs70f5fb.js";import{HT}from"./chunk-h9brabjn.js";import{hy}from"./chunk-ts9gpq5q.js";function wle(o){let l=ks();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Nu())return!1;if(hy()||jg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Ge().skillOverrides?.[HT];if(o==="off"||o==="user-invocable-only")return!1;let l=WL();if(l!==void 0&&!l.includes(HT))return!1;return!0}function i(o){return o.some((l)=>Ft(l,fo))}
export{wle};
