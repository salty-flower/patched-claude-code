// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{fp}from"./chunk-vd0a9d2s.js";import{Mt}from"./chunk-7194gg2b.js";import{yx}from"./chunk-48by85wp.js";import{Lt,C}from"./chunk-gcyvvtkw.js";function v1t(){return yx("autoContinueAtUsageLimit")[0]}function Qfn(e){return v1t()??e==="absent"}var u="tengu_marble_heron";function g9n(){let e=n();return o(e)?e:{}}function UPe(){let e=n();return r(o(e)?e.enabled:e)}function k1t(){return fp()&&!Lt()&&!Mt()}function EBo(){return k1t()&&UPe()}function Zfn(){return r(g9n().autoArm)}function n(){return C(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{v1t,Qfn,g9n,UPe,k1t,EBo,Zfn};
