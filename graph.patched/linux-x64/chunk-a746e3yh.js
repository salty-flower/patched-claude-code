// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-r3adsed5.js";import{bw}from"./chunk-r36tv6ee.js";import{fP,oT,yg,Dt,hj,hn,Uc}from"./chunk-a5a37ds7.js";function eTt(e){return e?`this session holds no gateway credential (${e})`:"this session holds no gateway credential"}function c5e(){return Dt()||n()}function n(){if(bw()!=="env-quad")return!1;try{return fP()&&hj()}catch{return!1}}function ehn(){return!Dt()&&n()}function hVt(){let{info:e,storeBearerOnly:t}=W2r();if(!t||e===void 0)return e;return oT()==="store"?e:void 0}function W2r(){let e=hn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return ehn()?{info:Uc(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function tTt(e){let{info:t,storeBearerOnly:r}=W2r();if(!r||t===void 0)return t;return await yg(e)==="store"?t:void 0}function RS(e){return K()?`This session could not reach Artifacts: ${e}`:`Not authenticated \u2014 run /login (${e})`}
export{eTt,c5e,ehn,hVt,W2r,tTt,RS};
