// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{X}from"./chunk-3kevgx4j.js";import{W}from"./chunk-3y73jbfr.js";import{nSe}from"./chunk-27xjmczp.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(U().host)}function iao(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function yXt(){a().detachedSinceLastAttach=!0}function aao(){return a().detachedSinceLastAttach}function o9e(){return a().stampMs}function _Xt(e){return!1}async function h0n(){for(;;){let e=Date.now();if(!_Xt(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await X(Math.max(25,c)+25)}}
export{iao,yXt,aao,o9e,_Xt,h0n};
