// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Xe,N}from"./chunk-sktwb66b.js";import{a}from"./chunk-87y2sp93.js";import{xee}from"./chunk-gbez09mv.js";import{e6,$n}from"./chunk-h21zbzen.js";import{yEr}from"./chunk-r038mtsb.js";function Wre(r,o){a(Xe(N(r),o))}function Jct(r){if(r.scope!==void 0&&e6(r.scope))return!0;return r.pluginSource!==void 0&&yEr(r.pluginSource)}function BH(r,o){if(!Jct(r))return o();let{pluginSource:e}=r;return xee(o,e===void 0?{}:{keepsWrite:(n)=>$n(n)===$n(e)})}
export{Jct,BH,Wre};
