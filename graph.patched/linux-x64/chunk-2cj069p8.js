// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{J}from"./chunk-r2xfgg0x.js";import{G}from"./chunk-pzq28dp7.js";import{jme}from"./chunk-k16gymf7.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new G(()=>new r);function a(){return s.of(j().host)}function V4r(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function W2t(){a().detachedSinceLastAttach=!0}function K4r(){return a().detachedSinceLastAttach}function TVe(){return a().stampMs}function z2t(e){return!1}async function _vn(){for(;;){let e=Date.now();if(!z2t(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await J(Math.max(25,c)+25)}}
export{V4r,W2t,K4r,TVe,z2t,_vn};
