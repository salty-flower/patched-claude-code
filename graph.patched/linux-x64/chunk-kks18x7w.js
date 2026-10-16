// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Su}from"./chunk-d3cqnp4r.js";var e="self_hosted_runner_";function h2t(n){return n.startsWith(e)}function I3o(n){return Su([...n]).some(h2t)}function r(n){return Su([n]).filter((t)=>!h2t(t)).join(",")}function iqr(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Su([t]).some(h2t)}function O3o(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!iqr(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{h2t,I3o,iqr,O3o};
