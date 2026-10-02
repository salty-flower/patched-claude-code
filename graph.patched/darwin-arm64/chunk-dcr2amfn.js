// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Su}from"./chunk-a7cah040.js";import{Nt}from"./chunk-a453ergf.js";import{zT}from"./chunk-e561d543.js";import{Tt,x}from"./chunk-er6f56rj.js";function iAt(){return zT("autoContinueAtUsageLimit")[0]}function C8t(e){return iAt()??e==="absent"}var u="tengu_marble_heron";function RIn(){let e=n();return o(e)?e:{}}function yEe(){let e=n();return r(o(e)?e.enabled:e)}function aAt(){return Su()&&!Tt()&&!Nt()}function $co(){return aAt()&&yEe()}function A8t(){return r(RIn().autoArm)}function n(){return x(u,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}
export{iAt,C8t,RIn,yEe,aAt,$co,A8t};
