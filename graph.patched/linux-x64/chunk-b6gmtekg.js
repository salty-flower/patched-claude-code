// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ul}from"./chunk-r3adsed5.js";import{wt}from"./chunk-y3a8g8e0.js";import{QI}from"./chunk-4rkc6f3s.js";import{Xt,S}from"./chunk-a5a37ds7.js";function rDn(){return QI("autoContinueAtUsageLimit")[0]}function ibr(e){return rDn()??e==="absent"}var u="tengu_marble_heron";function yuo(){let e=n();return o(e)?e:{}}function gQe(){let e=n();return r(o(e)?e.enabled:e)}function oDn(){return Ul()&&!Xt()&&!wt()}function l$i(){return oDn()&&gQe()}function abr(){return r(yuo().autoArm)}function n(){return S(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{rDn,ibr,yuo,gQe,oDn,l$i,abr};
