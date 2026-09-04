// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Mg,cF}from"./chunk-yhfssb7x.js";import{a}from"./chunk-g2ngvza5.js";import{Je}from"./chunk-03hrg0m9.js";import{Ps}from"./chunk-hmvddskw.js";import{en}from"./chunk-ajb75vkj.js";import{Mbe}from"./chunk-eks7ckt9.js";import{Oc}from"./chunk-y9nf44bb.js";import{vA}from"./chunk-r4y4fwqb.js";import{uo}from"./chunk-w8h4p1xr.js";import{Ry}from"./chunk-y3z0esqa.js";function jte(o){let l=Ps();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!Oc()||Mbe())return!1;if(Ry()||Mg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Je().skillOverrides?.[vA];if(o==="off"||o==="user-invocable-only")return!1;let l=cF();if(l!==void 0&&!l.includes(vA))return!1;return!0}function i(o){return o.some((l)=>en(l,uo))}
export{jte};
