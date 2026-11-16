// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Me,pe}from"./chunk-e44qnbvj.js";import{g,c}from"./chunk-f8g4f3e3.js";import{y9s,S9s}from"./chunk-ft922s45.js";function upr(e){let r=S9s(e);if(r===null){c("feedback_refusal_memory","no_principal");return}g("feedback_refusal_memory"),Me((o)=>({...o,feedbackRefusedByServer:r}))}function EPi(){let e=pe().feedbackRefusedByServer;if(typeof e?.principal==="string"&&typeof e.at==="number")y9s(e)}
export{upr,EPi};
