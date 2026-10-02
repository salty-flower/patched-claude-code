// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{q,j}from"./chunk-a7cah040.js";import{Z}from"./chunk-jm8r4kd0.js";import{jne}from"./chunk-er6f56rj.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new q(()=>new r);function a(){return s.of(j().host)}function Zar(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function yEt(){a().detachedSinceLastAttach=!0}function elr(){return a().detachedSinceLastAttach}function Z0e(){return a().stampMs}function _Et(e){return!1}async function OKt(){for(;;){let e=Date.now();if(!_Et(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{Zar,yEt,elr,Z0e,_Et,OKt};
