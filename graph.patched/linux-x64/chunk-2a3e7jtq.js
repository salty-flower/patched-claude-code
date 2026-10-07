// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ep}from"./chunk-aywwjcwq.js";import{Dt}from"./chunk-v6ek3j23.js";import{GR}from"./chunk-2c0pkjse.js";import{Ht,T}from"./chunk-m0sj7y8g.js";function xLt(){return GR("autoContinueAtUsageLimit")[0]}function Icn(e){return xLt()??e==="absent"}var u="tengu_marble_heron";function gVn(){let e=n();return o(e)?e:{}}function PRe(){let e=n();return r(o(e)?e.enabled:e)}function PLt(){return ep()&&!Ht()&&!Dt()}function ZMo(){return PLt()&&PRe()}function Ocn(){return r(gVn().autoArm)}function n(){return T(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{xLt,Icn,gVn,PRe,PLt,ZMo,Ocn};
