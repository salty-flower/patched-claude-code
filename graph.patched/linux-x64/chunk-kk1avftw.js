// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Hu}from"./chunk-7fdn9j0a.js";var e="self_hosted_runner_";function r4t(n){return n.startsWith(e)}function vts(n){return Hu([...n]).some(r4t)}function r(n){return Hu([n]).filter((t)=>!r4t(t)).join(",")}function c9r(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Hu([t]).some(r4t)}function Ets(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!c9r(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{r4t,vts,c9r,Ets};
