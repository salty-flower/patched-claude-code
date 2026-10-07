// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ep}from"./chunk-8mvda08c.js";import{Dt}from"./chunk-ev2h864q.js";import{YR}from"./chunk-861a7whf.js";import{Mt,k}from"./chunk-s46qgfx7.js";function OLt(){return YR("autoContinueAtUsageLimit")[0]}function xcn(e){return OLt()??e==="absent"}var u="tengu_marble_heron";function wVn(){let e=n();return o(e)?e:{}}function MRe(){let e=n();return r(o(e)?e.enabled:e)}function HLt(){return ep()&&!Mt()&&!Dt()}function RHo(){return HLt()&&MRe()}function Pcn(){return r(wVn().autoArm)}function n(){return k(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{OLt,xcn,wVn,MRe,HLt,RHo,Pcn};
