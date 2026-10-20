// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{PUr,Vz,Sn}from"./chunk-bvn0epzr.js";import{SCe}from"./chunk-ba43k5w2.js";import{createHash as n}from"crypto";function Sqt(){let{value:e,source:r}=Sn(SCe,null);return{flag:g(e),source:r}}function g(e){let{flag:r,problem:o}=PUr(e);if(o!==void 0)t(`org-config gate: ${SCe} is malformed (${o}); treating as off`,{level:"warn"});return r}function Adi(e=Sqt,r=Vz){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function JYr(e){let r=n("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function QYr(e,r){return e.enabled&&r<e.percent}
export{Sqt,Adi,JYr,QYr};
