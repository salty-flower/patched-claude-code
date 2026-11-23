// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Me,pe}from"./chunk-a5a37ds7.js";import{g,c}from"./chunk-ztxp0r5w.js";import{E5s,T5s}from"./chunk-rb5kx98w.js";function Nfr(e){let r=T5s(e);if(r===null){c("feedback_refusal_memory","no_principal");return}g("feedback_refusal_memory"),Me((o)=>({...o,feedbackRefusedByServer:r}))}function $xi(){let e=pe().feedbackRefusedByServer;if(typeof e?.principal==="string"&&typeof e.at==="number")E5s(e)}
export{Nfr,$xi};
