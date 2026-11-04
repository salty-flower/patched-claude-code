// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{pu}from"./chunk-tftvcgfc.js";var e="self_hosted_runner_";function vmn(n){return n.startsWith(e)}function K9n(n){return pu([...n]).some(vmn)}function V$o(n){return pu([n]).filter((t)=>!vmn(t)).join(",")}function K$o(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return pu([t]).some(vmn)}function uYs(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!K$o(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:V$o(o)}}
export{vmn,K9n,V$o,K$o,uYs};
