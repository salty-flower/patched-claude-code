// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zy}from"./chunk-egdprn6h.js";import{b}from"./chunk-e44qnbvj.js";import{p6}from"./chunk-c6xqhaxc.js";import{OHe}from"./chunk-ds047pd6.js";import{Ra}from"./chunk-wqb2b4v0.js";function Tmr(e,s,o,r,i){return r||Zy(o)||e.suppressesAlwaysAllowRule?.(s,!b("tengu_valiant_crayon",!1))===!0&&!(i??[]).some((n)=>(n.type==="addRules"||n.type==="replaceRules")&&n.behavior==="allow"&&n.rules.some((t)=>t.ruleContent!==void 0))||void 0}function Cmr(e,s,o,r){return r.suggestions}function jJt(e,s,o){if(Ra(e.decisionReason,p6)!==void 0||OHe(o))return!0;if(s.requiresUserInteraction?.())return!0;return e.forcedByCaller===!0||e.personOnly===!0}
export{Tmr,Cmr,jJt};
