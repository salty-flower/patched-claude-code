// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{Y}from"./chunk-wk0rbc8w.js";import{W}from"./chunk-2fbnw5gg.js";import{nhe}from"./chunk-7p6jp6kj.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(j().host)}function FXr(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function v4t(){a().detachedSinceLastAttach=!0}function UXr(){return a().detachedSinceLastAttach}function $qe(){return a().stampMs}function E4t(e){return!1}async function PAn(){for(;;){let e=Date.now();if(!E4t(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Y(Math.max(25,c)+25)}}
export{FXr,v4t,UXr,$qe,E4t,PAn};
