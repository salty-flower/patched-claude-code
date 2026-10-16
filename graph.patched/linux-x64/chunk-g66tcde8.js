// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{by,q2}from"./chunk-eqmywwjn.js";import{a}from"./chunk-xwn0mfnc.js";import{ut}from"./chunk-a502zyxr.js";import{Ao}from"./chunk-7z1je35j.js";import{wt}from"./chunk-dpk0tdne.js";import{Fg}from"./chunk-5jsx4t95.js";import{mo}from"./chunk-msq59jfd.js";import{lD}from"./chunk-x4mnjr17.js";import{Aq,OG}from"./chunk-b9mwwf31.js";function F0e(o){let l=Ao();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!OG(lD)&&(o===void 0||i(o))}function e(){if(!Fg())return!1;if(Aq()||by())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ut().skillOverrides?.[lD];if(o==="off"||o==="user-invocable-only")return!1;let l=q2();if(l!==void 0&&!l.includes(lD))return!1;return!0}function i(o){return o.some((l)=>wt(l,mo))}
export{F0e};
