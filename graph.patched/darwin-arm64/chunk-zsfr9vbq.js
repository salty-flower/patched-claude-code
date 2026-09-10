// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{j,B}from"./chunk-cet8na02.js";import{Z}from"./chunk-awrvr02y.js";import{H4}from"./chunk-vryy7b5x.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new j(()=>new r);function a(){return s.of(B().host)}function Idn(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function M9e(){a().detachedSinceLastAttach=!0}function Pdn(){return a().detachedSinceLastAttach}function Fde(){return a().stampMs}function N9e(e){return!1}async function pgt(){for(;;){let e=Date.now();if(!N9e(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{Idn,M9e,Pdn,Fde,N9e,pgt};
