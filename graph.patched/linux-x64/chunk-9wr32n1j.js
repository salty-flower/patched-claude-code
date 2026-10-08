// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{G,F}from"./chunk-g79wjybr.js";import{Z}from"./chunk-670y7hd9.js";import{ece}from"./chunk-cxjvwxsa.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new G(()=>new r);function a(){return s.of(F().host)}function KOr(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function M0t(){a().detachedSinceLastAttach=!0}function YOr(){return a().detachedSinceLastAttach}function QUe(){return a().stampMs}function H0t(e){return!1}async function Ean(){for(;;){let e=Date.now();if(!H0t(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{KOr,M0t,YOr,QUe,H0t,Ean};
