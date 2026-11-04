// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Le,pe}from"./chunk-axsjfnwn.js";import{a}from"./chunk-87y2sp93.js";import{L,Xs}from"./chunk-v07jm9dp.js";var l=256;function l4s(e){let n=new Set(Xs(pe().seenSecurityWarnings));return e.filter((r)=>r.seenKey===void 0||!n.has(r.seenKey))}function d4s(e,n){if(e.length===0)return;Le((r)=>{let i=Xs(r.seenSecurityWarnings),o=new Set(i),t=L(e).filter((s)=>!o.has(s));if(t.length===0)return r;return{...r,seenSecurityWarnings:[...i,...t].slice(-l)}},n)}async function q4n(){try{let[{getAllBaseTools:e},{collectPermissionRuleAdvisories:n},{loadAllPermissionRulesFromDisk:r}]=await Promise.all([import("./chunk-x3dahztt.js"),import("./chunk-yz5ndgw5.js"),import("./chunk-5v9zdd0v.js")]);return L(n(r(),e).map((i)=>i.line))}catch(e){return a(e),[]}}
export{l4s,d4s,q4n};
