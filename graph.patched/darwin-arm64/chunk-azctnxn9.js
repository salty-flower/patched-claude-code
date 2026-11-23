// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ul}from"./chunk-m8nhymg4.js";import{wt}from"./chunk-0qf90h64.js";import{tI}from"./chunk-x4r54n7x.js";import{Xt,b}from"./chunk-e44qnbvj.js";function SDn(){return tI("autoContinueAtUsageLimit")[0]}function xSr(e){return SDn()??e==="absent"}var u="tengu_marble_heron";function $uo(){let e=n();return o(e)?e:{}}function TQe(){let e=n();return r(o(e)?e.enabled:e)}function bDn(){return Ul()&&!Xt()&&!wt()}function N1i(){return bDn()&&TQe()}function PSr(){return r($uo().autoArm)}function n(){return b(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{SDn,xSr,$uo,TQe,bDn,N1i,PSr};
