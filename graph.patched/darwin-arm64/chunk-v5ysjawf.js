// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{z}from"./chunk-wzh8n28q.js";import{n2i,NE,Gt}from"./chunk-axsjfnwn.js";import{AO}from"./chunk-b4gt1yd8.js";import{Cc}from"./chunk-8hkt6jya.js";import{ivn,w5e}from"./chunk-0x9x817t.js";import{M,Q,C_,j}from"./chunk-rt5zqm44.js";j();function t(){let[o,e]=C_((s)=>s+1,0);return M(()=>n2i(e),[]),o}function G$r(o,e){return ivn(o)??ivn(e)??NE()}function mF(o){return Gt(G$r(o.mainLoopModelForSession,o.mainLoopModel))}function kxe(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),s=AO(),i=t(),r=Cc();return Q(()=>w5e(e,o),[e,o,s,r,i])}function knt(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),s=AO(),i=t(),r=Cc();return Q(()=>G$r(e,o),[e,o,s,r,i])}function Au(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),s=AO(),i=t(),r=Cc();return Q(()=>mF({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{G$r,mF,kxe,knt,Au};
