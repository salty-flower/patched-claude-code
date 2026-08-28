// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{ne}from"./chunk-m09j9ze8.js";import{T4}from"./chunk-ns0ekkj0.js";class s{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var r=new K(()=>new s);function o(){return r.of(z().host)}function cZt(e){let t=o();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function Kot(){o().detachedSinceLastAttach=!0}function Cj(){return o().stampMs}function Rje(e){return!1}async function Yot(){for(;;){let e=Date.now();if(!Rje(e))return;let{detachedSinceLastAttach:t,stampMs:a}=o(),c=t||a===0?500:a+500-e;await ne(Math.max(25,c)+25)}}
export{cZt,Kot,Cj,Rje,Yot};
