// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{t}from"./chunk-d7b0m8qy.js";import{hqr,JV,kn}from"./chunk-27xjmczp.js";import{SRe}from"./chunk-8xh6ycam.js";import{createHash as n}from"crypto";function eXt(){let{value:e,source:r}=kn(SRe,null);return{flag:g(e),source:r}}function g(e){let{flag:r,problem:o}=hqr(e);if(o!==void 0)t(`org-config gate: ${SRe} is malformed (${o}); treating as off`,{level:"warn"});return r}function iCi(e=eXt,r=JV){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function Jso(e){let r=n("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function Qso(e,r){return e.enabled&&r<e.percent}
export{eXt,iCi,Jso,Qso};
