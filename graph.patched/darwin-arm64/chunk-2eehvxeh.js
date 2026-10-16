// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{by,r6}from"./chunk-xzypj06m.js";import{a}from"./chunk-k4g6y57j.js";import{pt}from"./chunk-61p68esv.js";import{Ao}from"./chunk-ge9ewwa2.js";import{wt}from"./chunk-dxfmgtda.js";import{$g}from"./chunk-hkdbjhww.js";import{mo}from"./chunk-c55f34fw.js";import{uM}from"./chunk-epny780e.js";import{Lq,jG}from"./chunk-zrtgffmb.js";function KDe(o){let l=Ao();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!jG(uM)&&(o===void 0||i(o))}function e(){if(!$g())return!1;if(Lq()||by())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=pt().skillOverrides?.[uM];if(o==="off"||o==="user-invocable-only")return!1;let l=r6();if(l!==void 0&&!l.includes(uM))return!1;return!0}function i(o){return o.some((l)=>wt(l,mo))}
export{KDe};
