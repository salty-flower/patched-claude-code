// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{Z}from"./chunk-q2h0fawe.js";import{R5}from"./chunk-g4c6ggz4.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new G(()=>new r);function a(){return s.of(z().host)}function TCn(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function jJe(){a().detachedSinceLastAttach=!0}function kCn(){return a().detachedSinceLastAttach}function bye(){return a().stampMs}function WJe(e){return!1}async function Gvt(){for(;;){let e=Date.now();if(!WJe(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{TCn,jJe,kCn,bye,WJe,Gvt};
