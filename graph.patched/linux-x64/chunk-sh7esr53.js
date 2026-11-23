// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-h4js79s0.js";import{Lk}from"./chunk-3x18nsrw.js";import{ld}from"./chunk-374g520d.js";var i=128;function bvr(e){let n="displayName"in e?e.displayName:void 0;if(typeof n!=="string")return;if(e.scope==="claudeai")return n;if(e.scope!=="dynamic"||ld(e))return;return Z(Lk(n),i).trimEnd()||void 0}function Svr(e,n){return(e.type==="claudeai-proxy"?e.displayName:void 0)??n}
export{bvr,Svr};
