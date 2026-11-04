// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{jS,k}from"./chunk-axsjfnwn.js";import{iq}from"./chunk-s82zkvnf.js";import{sPe}from"./chunk-8918khyp.js";import{il}from"./chunk-0x9x817t.js";function o8n(e,r,n,s,i){return s||jS(n)||e.suppressesAlwaysAllowRule?.(r,!k("tengu_valiant_crayon",!1))===!0&&!(i??[]).some((o)=>(o.type==="addRules"||o.type==="replaceRules")&&o.behavior==="allow"&&o.rules.some((t)=>t.ruleContent!==void 0))||void 0}function hGt(e,r,n){if(il(e.decisionReason,iq)!==void 0||sPe(n))return!0;if(r.requiresUserInteraction?.())return!0;return e.forcedByCaller===!0||e.personOnly===!0}
export{o8n,hGt};
