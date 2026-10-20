// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{Y}from"./chunk-2ckwvz0j.js";import{W}from"./chunk-cne7d53x.js";import{lhe}from"./chunk-bvn0epzr.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new W(()=>new r);function a(){return s.of(j().host)}function i7r(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function Dqt(){a().detachedSinceLastAttach=!0}function a7r(){return a().detachedSinceLastAttach}function VKe(){return a().stampMs}function Lqt(e){return!1}async function KTn(){for(;;){let e=Date.now();if(!Lqt(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Y(Math.max(25,c)+25)}}
export{i7r,Dqt,a7r,VKe,Lqt,KTn};
