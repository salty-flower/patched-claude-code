// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{X}from"./chunk-0cvfymxt.js";import{uMe}from"./chunk-e44qnbvj.js";import{W}from"./chunk-z1a5ffdv.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(F().host)}function trs(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function LPn(){a().detachedSinceLastAttach=!0}function nrs(){return a().detachedSinceLastAttach}function jpt(){return a().stampMs}function HPn(e){return!1}async function Hfr(){for(;;){let e=Date.now();if(!HPn(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await X(Math.max(25,c)+25)}}
export{trs,LPn,nrs,jpt,HPn,Hfr};
