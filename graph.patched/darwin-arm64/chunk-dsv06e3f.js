// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"./chunk-4bw62nzm.js";import{Q}from"./chunk-yjc18bey.js";import{yue}from"./chunk-bk5ct2gw.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new q(()=>new r);function a(){return s.of(B().host)}function r$r(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function yUt(){a().detachedSinceLastAttach=!0}function o$r(){return a().detachedSinceLastAttach}function Qje(){return a().stampMs}function _Ut(e){return!1}async function ifn(){for(;;){let e=Date.now();if(!_Ut(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Q(Math.max(25,c)+25)}}
export{r$r,yUt,o$r,Qje,_Ut,ifn};
