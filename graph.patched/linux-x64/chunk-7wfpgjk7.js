// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{eb,Dt,Xh}from"./chunk-1e5y3pjf.js";import{z}from"./chunk-war6c605.js";import{ws}from"./chunk-zb8eqkz4.js";import{A,V,ck,F}from"./chunk-v59pjxqq.js";import{xLe,Nee}from"./chunk-h6btyxas.js";F();function Xv(){let[o,e]=ck((r)=>r+1,0);return A(()=>Xh(e),[]),o}function dnt(o){return Xv(),o()}F();function IIt(o,e){return xLe(o)??xLe(e)??eb()}function fnt(o){return Dt(IIt(o.mainLoopModelForSession,o.mainLoopModel))}function C3(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),r=Xv(),i=ws();return V(()=>Nee(e,o),[e,o,r,i])}function pnt(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),r=Xv(),i=ws();return V(()=>IIt(e,o),[e,o,r,i])}function Dc(){let o=z((n)=>n.mainLoopModel),e=z((n)=>n.mainLoopModelForSession),r=Xv(),i=ws();return V(()=>fnt({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{Xv,dnt,IIt,fnt,C3,pnt,Dc};
