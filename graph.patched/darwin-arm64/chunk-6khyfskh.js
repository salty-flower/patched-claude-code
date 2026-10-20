// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fu}from"./chunk-kpqr86hf.js";import{Rt}from"./chunk-r2k1mk6b.js";import{fO}from"./chunk-qwytg6a7.js";import{Ft,k}from"./chunk-bvn0epzr.js";function A9t(){return fO("autoContinueAtUsageLimit")[0]}function JIn(e){return A9t()??e==="absent"}var u="tengu_marble_heron";function Cmr(){let e=n();return o(e)?e:{}}function _Fe(){let e=n();return r(o(e)?e.enabled:e)}function R9t(){return Fu()&&!Ft()&&!Rt()}function Sps(){return R9t()&&_Fe()}function QIn(){return r(Cmr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{A9t,JIn,Cmr,_Fe,R9t,Sps,QIn};
