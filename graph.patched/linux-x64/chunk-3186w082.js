// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Vc}from"./chunk-k61f6b0h.js";var e="self_hosted_runner_";function IIn(n){return n.startsWith(e)}function Ypr(n){return Vc([...n]).some(IIn)}function his(n){return Vc([n]).filter((t)=>!IIn(t)).join(",")}function gis(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Vc([t]).some(IIn)}function TOi(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!gis(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:his(o)}}
export{IIn,Ypr,his,gis,TOi};
