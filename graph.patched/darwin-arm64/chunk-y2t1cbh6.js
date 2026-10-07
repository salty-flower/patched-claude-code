// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F}from"./chunk-8mvda08c.js";import{ee}from"./chunk-ws170zqm.js";import{Eae}from"./chunk-s46qgfx7.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new z(()=>new r);function a(){return s.of(F().host)}function iAr(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function d0t(){a().detachedSinceLastAttach=!0}function aAr(){return a().detachedSinceLastAttach}function GFe(){return a().stampMs}function u0t(e){return!1}async function krn(){for(;;){let e=Date.now();if(!u0t(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await ee(Math.max(25,c)+25)}}
export{iAr,d0t,aAr,GFe,u0t,krn};
