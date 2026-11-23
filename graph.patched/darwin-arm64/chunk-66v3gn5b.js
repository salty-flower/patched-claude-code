// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-m8nhymg4.js";import{bw}from"./chunk-pdder716.js";import{mP,aT,yg,Dt,y2,hn,Uc}from"./chunk-e44qnbvj.js";function sTt(e){return e?`this session holds no gateway credential (${e})`:"this session holds no gateway credential"}function h5e(){return Dt()||n()}function n(){if(bw()!=="env-quad")return!1;try{return mP()&&y2()}catch{return!1}}function ghn(){return!Dt()&&n()}function kzt(){let{info:e,storeBearerOnly:t}=m6r();if(!t||e===void 0)return e;return aT()==="store"?e:void 0}function m6r(){let e=hn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return ghn()?{info:Uc(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function iTt(e){let{info:t,storeBearerOnly:r}=m6r();if(!r||t===void 0)return t;return await yg(e)==="store"?t:void 0}function xb(e){return K()?`This session could not reach Artifacts: ${e}`:`Not authenticated \u2014 run /login (${e})`}
export{sTt,h5e,ghn,kzt,m6r,iTt,xb};
