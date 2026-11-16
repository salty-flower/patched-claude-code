// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Vc}from"./chunk-cxygx051.js";var e="self_hosted_runner_";function LOn(n){return n.startsWith(e)}function mmr(n){return Vc([...n]).some(LOn)}function his(n){return Vc([n]).filter((t)=>!LOn(t)).join(",")}function gis(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Vc([t]).some(LOn)}function $Ii(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!gis(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:his(o)}}
export{LOn,mmr,his,gis,$Ii};
