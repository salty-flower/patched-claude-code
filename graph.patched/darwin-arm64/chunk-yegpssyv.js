// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{xb}from"./chunk-gsnfhe7n.js";import{a7,o8e,$v,St,Kmn,In,Bv}from"./chunk-ghnc2x4f.js";function Fbe(){return St()||n()}function n(){if(xb()!=="env-quad")return!1;try{return a7()&&Kmn()}catch{return!1}}function Wft(){return!St()&&n()}function Fze(){let{info:e,storeBearerOnly:t}=L$t();if(!t||e===void 0)return e;return o8e()==="store"?e:void 0}function L$t(){let e=In();if(e!==void 0)return{info:e,storeBearerOnly:!1};return Wft()?{info:Bv(),storeBearerOnly:!0}:{info:void 0,storeBearerOnly:!1}}async function zft(e){let{info:t,storeBearerOnly:r}=L$t();if(!r||t===void 0)return t;return await $v(e)==="store"?t:void 0}function sp(e){return`Not authenticated \u2014 run /login (${e})`}
export{Fbe,Wft,Fze,L$t,zft,sp};
