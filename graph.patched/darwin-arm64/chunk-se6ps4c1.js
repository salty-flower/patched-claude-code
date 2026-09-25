// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W}from"./chunk-s8xs8s76.js";import{Z}from"./chunk-zr6jq9j9.js";import{wZ}from"./chunk-twxt3h9y.js";class r{stampMs=0;detachedSinceLastAttach=!1;reset(){this.stampMs=0,this.detachedSinceLastAttach=!1}}var s=new V(()=>new r);function a(){return s.of(W().host)}function j8n(e){let t=a();if(e===0){t.reset();return}if(t.detachedSinceLastAttach||t.stampMs===0)t.stampMs=e;t.detachedSinceLastAttach=!1}function igt(){a().detachedSinceLastAttach=!0}function W8n(){return a().detachedSinceLastAttach}function XTe(){return a().stampMs}function agt(e){return!1}async function S2t(){for(;;){let e=Date.now();if(!agt(e))return;let{detachedSinceLastAttach:t,stampMs:o}=a(),c=t||o===0?500:o+500-e;await Z(Math.max(25,c)+25)}}
export{j8n,igt,W8n,XTe,agt,S2t};
