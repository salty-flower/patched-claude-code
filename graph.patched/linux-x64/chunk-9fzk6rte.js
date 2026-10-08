// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{yh,BW}from"./chunk-g79wjybr.js";import{a}from"./chunk-rptge3r8.js";import{ut}from"./chunk-gsa86a2x.js";import{_o}from"./chunk-946598ze.js";import{Dt}from"./chunk-vecj8twx.js";import{Gm}from"./chunk-mwhvxmyp.js";import{wo}from"./chunk-w5yav6fr.js";import{OO}from"./chunk-q3ty06fp.js";import{QG,Bj}from"./chunk-vk00drv7.js";function Bxe(o){let l=_o();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!Bj(OO)&&(o===void 0||i(o))}function e(){if(!Gm())return!1;if(QG()||yh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=ut().skillOverrides?.[OO];if(o==="off"||o==="user-invocable-only")return!1;let l=BW();if(l!==void 0&&!l.includes(OO))return!1;return!0}function i(o){return o.some((l)=>Dt(l,wo))}
export{Bxe};
