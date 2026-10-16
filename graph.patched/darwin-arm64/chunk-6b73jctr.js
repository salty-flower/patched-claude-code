// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-xzypj06m.js";import{J}from"./chunk-54xe5s81.js";import{z}from"./chunk-r0a9v21k.js";import{Kme}from"./chunk-1901fdh6.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new z(()=>new r);function a(){return s.of(j().host)}function NKr(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function Xzt(){a().detachedSinceLastAttach=!0}function FKr(){return a().detachedSinceLastAttach}function k6e(){return a().stampMs}function Jzt(e){return!1}async function yEn(){for(;;){let e=Date.now();if(!Jzt(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await J(Math.max(25,c)+25)}}
export{NKr,Xzt,FKr,k6e,Jzt,yEn};
