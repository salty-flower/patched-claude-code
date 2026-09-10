// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{F}from"./chunk-6vxadp0c.js";import{uh,Ct}from"./chunk-vryy7b5x.js";import{_v}from"./chunk-yza7m1cw.js";import{Ri}from"./chunk-282j0pj6.js";import{V,N}from"./chunk-w8p0f9k6.js";import{$Ne,Bre}from"./chunk-tavwd3sq.js";N();function WLt(o,n){return $Ne(o)??$Ne(n)??uh()}function uPe(o){return Ct(WLt(o.mainLoopModelForSession,o.mainLoopModel))}function o7(){let o=F((e)=>e.mainLoopModel),n=F((e)=>e.mainLoopModelForSession),i=_v(),s=Ri();return V(()=>Bre(n,o),[n,o,i,s])}function fct(){let o=F((e)=>e.mainLoopModel),n=F((e)=>e.mainLoopModelForSession),i=_v(),s=Ri();return V(()=>WLt(n,o),[n,o,i,s])}function Ka(){let o=F((e)=>e.mainLoopModel),n=F((e)=>e.mainLoopModelForSession),i=_v(),s=Ri();return V(()=>uPe({mainLoopModel:o,mainLoopModelForSession:n}),[n,o,i,s])}
export{WLt,uPe,o7,fct,Ka};
