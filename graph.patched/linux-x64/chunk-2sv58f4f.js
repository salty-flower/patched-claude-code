// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Sp}from"./chunk-eqmywwjn.js";import{Ot}from"./chunk-30b5ph10.js";import{UI}from"./chunk-a502zyxr.js";import{Ut,k}from"./chunk-k16gymf7.js";function EYt(){return UI("autoContinueAtUsageLimit")[0]}function xRn(e){return EYt()??e==="absent"}var u="tengu_marble_heron";function Clr(){let e=n();return o(e)?e:{}}function ALe(){let e=n();return r(o(e)?e.enabled:e)}function kYt(){return Sp()&&!Ut()&&!Ot()}function Rrs(){return kYt()&&ALe()}function PRn(){return r(Clr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{EYt,xRn,Clr,ALe,kYt,Rrs,PRn};
