// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Pg,K1}from"./chunk-hdbxv3pp.js";import{a}from"./chunk-pv906ex9.js";import{Je}from"./chunk-yhqjr2er.js";import{Os}from"./chunk-hr8wrrm4.js";import{an}from"./chunk-5cn3fpmq.js";import{PSe}from"./chunk-13bhjnrr.js";import{vc}from"./chunk-spsj3pcp.js";import{fA}from"./chunk-2q50ezkz.js";import{co}from"./chunk-hmht9gzb.js";import{Sy}from"./chunk-n62f4cf2.js";function ete(o){let l=Os();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&(o===void 0||i(o))}function e(){if(!vc()||PSe())return!1;if(Sy()||Pg())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Je().skillOverrides?.[fA];if(o==="off"||o==="user-invocable-only")return!1;let l=K1();if(l!==void 0&&!l.includes(fA))return!1;return!0}function i(o){return o.some((l)=>an(l,co))}
export{ete};
