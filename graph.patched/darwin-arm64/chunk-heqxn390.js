// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Sp}from"./chunk-xzypj06m.js";import{Ot}from"./chunk-xqs3dvj3.js";import{GI}from"./chunk-61p68esv.js";import{Ut,k}from"./chunk-1901fdh6.js";function N3t(){return GI("autoContinueAtUsageLimit")[0]}function JRn(e){return N3t()??e==="absent"}var u="tengu_marble_heron";function Klr(){let e=n();return o(e)?e:{}}function DLe(){let e=n();return r(o(e)?e.enabled:e)}function F3t(){return Sp()&&!Ut()&&!Ot()}function fos(){return F3t()&&DLe()}function QRn(){return r(Klr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{N3t,JRn,Klr,DLe,F3t,fos,QRn};
