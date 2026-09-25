// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{jd}from"./chunk-s8xs8s76.js";import{Nt}from"./chunk-5cz12mxk.js";import{DA}from"./chunk-je0c1kfp.js";import{At,x}from"./chunk-twxt3h9y.js";function X_t(){return DA("autoContinueAtUsageLimit")[0]}function Kzt(e){return X_t()??e==="absent"}var u="tengu_marble_heron";function oEn(){let e=n();return o(e)?e:{}}function f_e(){let e=n();return r(o(e)?e.enabled:e)}function J_t(){return jd()&&!At()&&!Nt()}function YKr(){return J_t()&&f_e()}function Yzt(){return r(oEn().autoArm)}function n(){return x(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{X_t,Kzt,oEn,f_e,J_t,YKr,Yzt};
