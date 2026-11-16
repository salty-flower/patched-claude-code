// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-r3adsed5.js";import{X}from"./chunk-3rgses43.js";import{a0e}from"./chunk-a5a37ds7.js";import{W}from"./chunk-z1a5ffdv.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(F().host)}function Ins(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function bPn(){a().detachedSinceLastAttach=!0}function Ons(){return a().detachedSinceLastAttach}function Hpt(){return a().stampMs}function SPn(e){return!1}async function ufr(){for(;;){let e=Date.now();if(!SPn(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await X(Math.max(25,c)+25)}}
export{Ins,bPn,Ons,Hpt,SPn,ufr};
