// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,q}from"./chunk-yhfssb7x.js";import{re}from"./chunk-p3vjhzt0.js";import{wq}from"./chunk-vtwn1md5.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new z(()=>new r);function a(){return s.of(q().host)}function vcn(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function eze(){a().detachedSinceLastAttach=!0}function Rcn(){return a().detachedSinceLastAttach}function Aue(){return a().stampMs}function tze(e){return!1}async function Kpt(){for(;;){let e=Date.now();if(!tze(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await re(Math.max(25,c)+25)}}
export{vcn,eze,Rcn,Aue,tze,Kpt};
