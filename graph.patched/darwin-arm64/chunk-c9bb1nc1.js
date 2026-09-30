// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Rh,R1}from"./chunk-a7cah040.js";import{a}from"./chunk-1fpwxv0g.js";import{Xe}from"./chunk-e561d543.js";import{ko}from"./chunk-610gtpa9.js";import{Lt}from"./chunk-q01dwdda.js";import{Af}from"./chunk-w0kpt7yr.js";import{Dx}from"./chunk-501p77dt.js";import{lo}from"./chunk-pevt022y.js";import{U$,aq}from"./chunk-sr12pz9k.js";function Awe(o){let l=ko();return l.workflowAuthoringSkillAvailable??=e(),l.workflowAuthoringSkillAvailable&&!aq(Dx)&&(o===void 0||i(o))}function e(){if(!Af())return!1;if(U$()||Rh())return!1;if(a.CLAUDE_CODE_ENTRYPOINT==="local-agent")return!1;let o=Xe().skillOverrides?.[Dx];if(o==="off"||o==="user-invocable-only")return!1;let l=R1();if(l!==void 0&&!l.includes(Dx))return!1;return!0}function i(o){return o.some((l)=>Lt(l,lo))}
export{Awe};
