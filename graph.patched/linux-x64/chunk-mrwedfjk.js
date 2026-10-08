// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{fp}from"./chunk-g79wjybr.js";import{Ht}from"./chunk-jhxnp941.js";import{fx}from"./chunk-gsa86a2x.js";import{Lt,T}from"./chunk-cxjvwxsa.js";function bUt(){return fx("autoContinueAtUsageLimit")[0]}function emn(e){return bUt()??e==="absent"}var u="tengu_marble_heron";function f5n(){let e=n();return o(e)?e:{}}function LPe(){let e=n();return r(o(e)?e.enabled:e)}function SUt(){return fp()&&!Lt()&&!Ht()}function VBo(){return SUt()&&LPe()}function tmn(){return r(f5n().autoArm)}function n(){return T(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{bUt,emn,f5n,LPe,SUt,VBo,tmn};
