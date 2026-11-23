// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-b5xhmzas.js";var MJe=2000,RV="[line break] ";function fmt(r,t=0){let e=MJe+(r.startsWith(RV,t)?RV.length:0);if(r.length-t<=e)return{code:r.slice(t),truncatedChars:0};let o=r.slice(t,t+e+1),n=Z(o,e);return{code:n,truncatedChars:r.length-t-n.length}}function DJe(r){return` \u2026 [+${r} chars]`}
export{MJe,RV,fmt,DJe};
