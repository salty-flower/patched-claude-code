// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F}from"./chunk-aywwjcwq.js";import{ee}from"./chunk-0mwsqxme.js";import{gae}from"./chunk-m0sj7y8g.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new G(()=>new r);function a(){return s.of(F().host)}function ITr(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function VOt(){a().detachedSinceLastAttach=!0}function OTr(){return a().detachedSinceLastAttach}function H$e(){return a().stampMs}function KOt(e){return!1}async function Jnn(){for(;;){let e=Date.now();if(!KOt(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await ee(Math.max(25,c)+25)}}
export{ITr,VOt,OTr,H$e,KOt,Jnn};
