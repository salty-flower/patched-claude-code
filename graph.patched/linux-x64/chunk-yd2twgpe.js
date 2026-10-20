// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{lUr,L2,bn}from"./chunk-7p6jp6kj.js";import{fTe}from"./chunk-0qqd8bhb.js";import{createHash as n}from"crypto";function i4t(){let{value:e,source:r}=bn(fTe,null);return{flag:g(e),source:r}}function g(e){let{flag:r,problem:o}=lUr(e);if(o!==void 0)t(`org-config gate: ${fTe} is malformed (${o}); treating as off`,{level:"warn"});return r}function Wli(e=i4t,r=L2){let{flag:o,source:a}=e();return o.enabled||a==="fallback"&&r()}function w9r(e){let r=n("sha256").update(`org_config_gate:${e}`).digest("hex");return parseInt(r.slice(0,8),16)%100}function v9r(e,r){return e.enabled&&r<e.percent}
export{i4t,Wli,w9r,v9r};
