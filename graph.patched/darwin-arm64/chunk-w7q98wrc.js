// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ze,N}from"./chunk-wryttfdq.js";import{a}from"./chunk-mddke2ke.js";import{dX}from"./chunk-612ccmj9.js";import{j3,en}from"./chunk-gywtf5sd.js";import{ezt}from"./chunk-87yfaz1a.js";function FQ(r,o){a(ze(N(r),o))}function iwt(r){if(r.scope!==void 0&&j3(r.scope))return!0;return r.pluginSource!==void 0&&ezt(r.pluginSource)}function WG(r,o){if(!iwt(r))return o();let{pluginSource:e}=r;return dX(o,e===void 0?{}:{keepsWrite:(n)=>en(n)===en(e)})}
export{iwt,WG,FQ};
