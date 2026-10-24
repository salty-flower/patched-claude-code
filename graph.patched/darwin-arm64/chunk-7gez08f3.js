// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{zc}from"./chunk-ersar6wn.js";import{Pt}from"./chunk-m2fgnje1.js";import{EM}from"./chunk-32v5ghb4.js";import{Ut,k}from"./chunk-27xjmczp.js";function aZt(){return EM("autoContinueAtUsageLimit")[0]}function kFn(e){return aZt()??e==="absent"}var u="tengu_marble_heron";function ikr(){let e=n();return o(e)?e:{}}function V1e(){let e=n();return r(o(e)?e.enabled:e)}function lZt(){return zc()&&!Ut()&&!Pt()}function iTs(){return lZt()&&V1e()}function CFn(){return r(ikr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{aZt,kFn,ikr,V1e,lZt,iTs,CFn};
