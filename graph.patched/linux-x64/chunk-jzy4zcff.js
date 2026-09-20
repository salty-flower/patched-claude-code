// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,W}from"./chunk-txfrkyzp.js";import{Z}from"./chunk-d3xvzk7s.js";import{S8}from"./chunk-30p0nwys.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new G(()=>new r);function a(){return s.of(W().host)}function nAn(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function R7e(){a().detachedSinceLastAttach=!0}function rAn(){return a().detachedSinceLastAttach}function pye(){return a().stampMs}function x7e(e){return!1}async function PEt(){for(;;){let e=Date.now();if(!x7e(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{nAn,R7e,rAn,pye,x7e,PEt};
