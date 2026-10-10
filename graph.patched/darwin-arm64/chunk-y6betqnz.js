// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Op}from"./chunk-4bw62nzm.js";import{Ht}from"./chunk-qr9z1wer.js";import{xP}from"./chunk-x0dc37w9.js";import{Nt,k}from"./chunk-bk5ct2gw.js";function dWt(){return xP("autoContinueAtUsageLimit")[0]}function RSn(e){return dWt()??e==="absent"}var u="tengu_marble_heron";function rQn(){let e=n();return o(e)?e:{}}function _0e(){let e=n();return r(o(e)?e.enabled:e)}function uWt(){return Op()&&!Nt()&&!Ht()}function UKo(){return uWt()&&_0e()}function xSn(){return r(rQn().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{dWt,RSn,rQn,_0e,uWt,UKo,xSn};
