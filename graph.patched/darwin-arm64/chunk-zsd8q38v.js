// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";import{ne}from"./chunk-fnn4jyg7.js";import{x4}from"./chunk-ghnc2x4f.js";class s{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var r=new K(()=>new s);function o(){return r.of(W().host)}function _Zt(e){let t=o();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function Xot(){o().detachedSinceLastAttach=!0}function P6(){return o().stampMs}function O6e(e){return!1}async function Jot(){for(;;){let e=Date.now();if(!O6e(e))return;let{detachedSinceLastAttach:t,stampMs:a}=o(),c=t||a===0?500:a+500-e;await ne(Math.max(25,c)+25)}}
export{_Zt,Xot,P6,O6e,Jot};
