// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$u}from"./chunk-dxktn51d.js";import{Rt}from"./chunk-6vj87cqe.js";import{lO}from"./chunk-merbp8kx.js";import{$t,k}from"./chunk-7p6jp6kj.js";function _3t(){return lO("autoContinueAtUsageLimit")[0]}function $In(e){return _3t()??e==="absent"}var u="tengu_marble_heron";function amr(){let e=n();return o(e)?e:{}}function d$e(){let e=n();return r(o(e)?e.enabled:e)}function b3t(){return $u()&&!$t()&&!Rt()}function Fus(){return b3t()&&d$e()}function FIn(){return r(amr().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{_3t,$In,amr,d$e,b3t,Fus,FIn};
