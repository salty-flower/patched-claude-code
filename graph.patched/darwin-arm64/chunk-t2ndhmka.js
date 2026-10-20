// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Hu}from"./chunk-paax7ahr.js";var e="self_hosted_runner_";function hqt(n){return n.startsWith(e)}function Qts(n){return Hu([...n]).some(hqt)}function r(n){return Hu([n]).filter((t)=>!hqt(t)).join(",")}function UYr(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Hu([t]).some(hqt)}function Zts(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!UYr(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{hqt,Qts,UYr,Zts};
