// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,G}from"./chunk-hdbxv3pp.js";import{re}from"./chunk-gh3qnpny.js";import{jG}from"./chunk-h6md7820.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new X(()=>new r);function a(){return s.of(G().host)}function Kln(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function u4e(){a().detachedSinceLastAttach=!0}function Xln(){return a().detachedSinceLastAttach}function Kce(){return a().stampMs}function d4e(e){return!1}async function opt(){for(;;){let e=Date.now();if(!d4e(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await re(Math.max(25,c)+25)}}
export{Kln,u4e,Xln,Kce,d4e,opt};
