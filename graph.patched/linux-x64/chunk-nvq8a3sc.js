// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";import{ne}from"./chunk-rv2kd9jf.js";import{RV}from"./chunk-1e5y3pjf.js";class s{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var r=new J(()=>new s);function o(){return r.of(W().host)}function Son(e){let t=o();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function _lt(){o().detachedSinceLastAttach=!0}function TG(){return o().stampMs}function RWe(e){return!1}async function blt(){for(;;){let e=Date.now();if(!RWe(e))return;let{detachedSinceLastAttach:t,stampMs:a}=o(),c=t||a===0?500:a+500-e;await ne(Math.max(25,c)+25)}}
export{Son,_lt,TG,RWe,blt};
