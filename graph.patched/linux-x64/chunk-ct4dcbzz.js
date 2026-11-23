// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qy}from"./chunk-0v2b7d33.js";import{S}from"./chunk-a5a37ds7.js";import{uG}from"./chunk-a912yhws.js";import{xHe}from"./chunk-174p4qv0.js";import{Ra}from"./chunk-zaxe68t4.js";function imr(e,s,o,r,i){return r||Qy(o)||e.suppressesAlwaysAllowRule?.(s,!S("tengu_valiant_crayon",!1))===!0&&!(i??[]).some((n)=>(n.type==="addRules"||n.type==="replaceRules")&&n.behavior==="allow"&&n.rules.some((t)=>t.ruleContent!==void 0))||void 0}function amr(e,s,o,r){return r.suggestions}function DJt(e,s,o){if(Ra(e.decisionReason,uG)!==void 0||xHe(o))return!0;if(s.requiresUserInteraction?.())return!0;return e.forcedByCaller===!0||e.personOnly===!0}
export{imr,amr,DJt};
