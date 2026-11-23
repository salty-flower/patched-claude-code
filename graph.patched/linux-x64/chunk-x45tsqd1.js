// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Me,pe}from"./chunk-a5a37ds7.js";import{a}from"./chunk-8c4ttmk8.js";import{L,Po}from"./chunk-m55q213p.js";var l=256;function pAi(e){let n=new Set(Po(pe().seenSecurityWarnings));return e.filter((r)=>r.seenKey===void 0||!n.has(r.seenKey))}function mAi(e,n){if(e.length===0)return;Me((r)=>{let i=Po(r.seenSecurityWarnings),o=new Set(i),t=L(e).filter((s)=>!o.has(s));if(t.length===0)return r;return{...r,seenSecurityWarnings:[...i,...t].slice(-l)}},n)}async function Lcr(){try{let[{getAllBaseTools:e},{collectPermissionRuleAdvisories:n},{loadAllPermissionRulesFromDisk:r}]=await Promise.all([import("./chunk-ydv2t97p.js"),import("./chunk-wdrfm50b.js"),import("./chunk-gsmc9zky.js")]);return L(n(r(),e).map((i)=>i.line))}catch(e){return a(e),[]}}
export{pAi,mAi,Lcr};
