// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Rl}from"./chunk-ecyypctx.js";import{Ct}from"./chunk-90nskyyy.js";import{I0}from"./chunk-gbez09mv.js";import{jt,k}from"./chunk-axsjfnwn.js";function Hyn(){return I0("autoContinueAtUsageLimit")[0]}function KJn(e){return Hyn()??e==="absent"}var u="tengu_marble_heron";function hKr(){let e=n();return o(e)?e:{}}function Zqe(){let e=n();return r(o(e)?e.enabled:e)}function Nyn(){return Rl()&&!jt()&&!Ct()}function Jti(){return Nyn()&&Zqe()}function qJn(){return r(hKr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{Hyn,KJn,hKr,Zqe,Nyn,Jti,qJn};
