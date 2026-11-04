// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{g_o,tTs,YW,yn}from"./chunk-axsjfnwn.js";import{BTe}from"./chunk-m8fpb68j.js";import{createHash as g}from"crypto";function prt(){let{value:e,source:r}=yn(BTe,null);return{flag:n(e),source:r}}function n(e){let{flag:r,problem:o}=g_o(e);if(o!==void 0)t(`org-config gate: ${BTe} is malformed (${o}); treating as off`,{level:"warn"});return r}async function uHo(e,r,o){let a=await tTs(BTe,null,e,r,o);return a.served?{flag:n(a.value),source:"payload"}:void 0}function $sa(e=prt,r=YW){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function pHo(e){let r=g("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function fHo(e,r){return e.enabled&&r<e.percent}
export{prt,uHo,$sa,pHo,fHo};
