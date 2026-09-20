// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Gh,Rt,Ap}from"./chunk-g4c6ggz4.js";import{B}from"./chunk-myc7nzmw.js";import{oa}from"./chunk-dyy171ax.js";import{bst,hue}from"./chunk-nq62bgfy.js";import{A,q,LH,M}from"./chunk-ncc6kxz8.js";M();function sx(){let[o,e]=LH((r)=>r+1,0);return A(()=>Ap(e),[]),o}function ix(o){return sx(),o()}M();function i4t(o,e){return bst(o)??bst(e)??Gh()}function Whe(o){return Rt(i4t(o.mainLoopModelForSession,o.mainLoopModel))}function oee(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=sx(),i=oa();return q(()=>hue(e,o),[e,o,r,i])}function kEt(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=sx(),i=oa();return q(()=>i4t(e,o),[e,o,r,i])}function Nl(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=sx(),i=oa();return q(()=>Whe({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{sx,ix,i4t,Whe,oee,kEt,Nl};
