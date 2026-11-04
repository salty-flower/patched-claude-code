// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{J}from"./chunk-wrh0fk6w.js";import{W}from"./chunk-8915xd28.js";import{MTe}from"./chunk-axsjfnwn.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(F().host)}function OHo(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function bfn(){a().detachedSinceLastAttach=!0}function IHo(){return a().detachedSinceLastAttach}function frt(){return a().stampMs}function wfn(e){return!1}async function h5n(){for(;;){let e=Date.now();if(!wfn(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await J(Math.max(25,c)+25)}}
export{OHo,bfn,IHo,frt,wfn,h5n};
