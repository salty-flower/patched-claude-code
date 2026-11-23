// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-b5xhmzas.js";import{Nv}from"./chunk-ksq2mgyv.js";import{ld}from"./chunk-gywtf5sd.js";var i=128;function UEr(e){let n="displayName"in e?e.displayName:void 0;if(typeof n!=="string")return;if(e.scope==="claudeai")return n;if(e.scope!=="dynamic"||ld(e))return;return Z(Nv(n),i).trimEnd()||void 0}function BEr(e,n){return(e.type==="claudeai-proxy"?e.displayName:void 0)??n}
export{UEr,BEr};
