// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{_Wo,pJs,RM,un}from"./chunk-a5a37ds7.js";import{m0e}from"./chunk-rmh8fqbf.js";import{createHash as g}from"crypto";function bpt(){let{value:e,source:r}=un(m0e,null);return{flag:n(e),source:r}}function n(e){let{flag:r,problem:o}=_Wo(e);if(o!==void 0)t(`org-config gate: ${m0e} is malformed (${o}); treating as off`,{level:"warn"});return r}async function Aes(e,r,o){let a=await pJs(m0e,null,e,r,o);return a.served?{flag:n(a.value),source:"payload"}:void 0}function C6a(e=bpt,r=RM){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function Ces(e){let r=g("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function Res(e,r){return e.enabled&&r<e.percent}
export{bpt,Aes,C6a,Ces,Res};
