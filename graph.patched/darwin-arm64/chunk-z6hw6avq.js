// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{Wjo,zJs,O0,un}from"./chunk-e44qnbvj.js";import{yMe}from"./chunk-jx58mnc4.js";import{createHash as g}from"crypto";function Cpt(){let{value:e,source:r}=un(yMe,null);return{flag:n(e),source:r}}function n(e){let{flag:r,problem:o}=Wjo(e);if(o!==void 0)t(`org-config gate: ${yMe} is malformed (${o}); treating as off`,{level:"warn"});return r}async function rts(e,r,o){let a=await zJs(yMe,null,e,r,o);return a.served?{flag:n(a.value),source:"payload"}:void 0}function hKa(e=Cpt,r=O0){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function ots(e){let r=g("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function sts(e,r){return e.enabled&&r<e.percent}
export{Cpt,rts,hKa,ots,sts};
