// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{cS}from"./chunk-rv365wnb.js";import{G5,TYe,Rw,wt,tHn,Pn,xw}from"./chunk-1e5y3pjf.js";function Mwe(){return wt()||n()}function n(){if(cS()!=="env-quad")return!1;try{return G5()&&tHn()}catch{return!1}}function Iyt(){return!wt()&&n()}function K8e(){let{info:e,storeBearerOnly:t}=qzt();if(!t||e===void 0)return e;return TYe()==="store"?e:void 0}function qzt(){let e=Pn();if(e!==void 0)return{info:e,storeBearerOnly:!1};return Iyt()?{info:xw(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function Ryt(e){let{info:t,storeBearerOnly:r}=qzt();if(!r||t===void 0)return t;return await Rw(e)==="store"?t:void 0}function pf(e){return`Not authenticated \u2014 run /login (${e})`}
export{Mwe,Iyt,K8e,qzt,Ryt,pf};
