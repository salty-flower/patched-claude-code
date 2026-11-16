// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ze,N}from"./chunk-5p3mkpyy.js";import{a}from"./chunk-8c4ttmk8.js";import{eX}from"./chunk-kqhk9vfq.js";import{L4,Zt}from"./chunk-374g520d.js";import{zzt}from"./chunk-46nysa3j.js";function xQ(r,o){a(ze(N(r),o))}function ZSt(r){if(r.scope!==void 0&&L4(r.scope))return!0;return r.pluginSource!==void 0&&zzt(r.pluginSource)}function Bz(r,o){if(!ZSt(r))return o();let{pluginSource:e}=r;return eX(o,e===void 0?{}:{keepsWrite:(n)=>Zt(n)===Zt(e)})}
export{ZSt,Bz,xQ};
