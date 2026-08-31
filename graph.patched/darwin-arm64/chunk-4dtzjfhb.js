// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{cb}from"./chunk-t08x6k34.js";import{zV,H7e,xT,Tt,nwn,Dn,IT}from"./chunk-bsdtxcdc.js";function $Te(){return Tt()||n()}function n(){if(cb()!=="env-quad")return!1;try{return zV()&&nwn()}catch{return!1}}function P_t(){return!Tt()&&n()}function Y5e(){let{info:e,storeBearerOnly:t}=Vjt();if(!t||e===void 0)return e;return H7e()==="store"?e:void 0}function Vjt(){let e=Dn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return P_t()?{info:IT(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function D_t(e){let{info:t,storeBearerOnly:r}=Vjt();if(!r||t===void 0)return t;return await xT(e)==="store"?t:void 0}function fp(e){return`Not authenticated \u2014 run /login (${e})`}
export{$Te,P_t,Y5e,Vjt,D_t,fp};
