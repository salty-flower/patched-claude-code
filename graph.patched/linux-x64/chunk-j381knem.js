// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{x_}from"./chunk-sd094199.js";import{rY,o8e,FS,vt,Vmn,In,BS}from"./chunk-ns0ekkj0.js";function P_e(){return vt()||n()}function n(){if(x_()!=="env-quad")return!1;try{return rY()&&Vmn()}catch{return!1}}function jft(){return!vt()&&n()}function $qe(){let{info:e,storeBearerOnly:t}=PFt();if(!t||e===void 0)return e;return o8e()==="store"?e:void 0}function PFt(){let e=In();if(e!==void 0)return{info:e,storeBearerOnly:!1};return jft()?{info:BS(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function zft(e){let{info:t,storeBearerOnly:r}=PFt();if(!r||t===void 0)return t;return await FS(e)==="store"?t:void 0}function ip(e){return`Not authenticated \u2014 run /login (${e})`}
export{P_e,jft,$qe,PFt,zft,ip};
