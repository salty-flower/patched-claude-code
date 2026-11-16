// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Me,pe}from"./chunk-e44qnbvj.js";import{a}from"./chunk-mddke2ke.js";import{L,Po}from"./chunk-zqmjz0gj.js";var l=256;function qCi(e){let n=new Set(Po(pe().seenSecurityWarnings));return e.filter((r)=>r.seenKey===void 0||!n.has(r.seenKey))}function KCi(e,n){if(e.length===0)return;Me((r)=>{let i=Po(r.seenSecurityWarnings),o=new Set(i),t=L(e).filter((s)=>!o.has(s));if(t.length===0)return r;return{...r,seenSecurityWarnings:[...i,...t].slice(-l)}},n)}async function sur(){try{let[{getAllBaseTools:e},{collectPermissionRuleAdvisories:n},{loadAllPermissionRulesFromDisk:r}]=await Promise.all([import("./chunk-p3q7czm7.js"),import("./chunk-vc23xgrz.js"),import("./chunk-dk89hg6e.js")]);return L(n(r(),e).map((i)=>i.line))}catch(e){return a(e),[]}}
export{qCi,KCi,sur};
