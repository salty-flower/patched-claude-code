// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{JNo,Hy,Ht,Ku}from"./chunk-er6f56rj.js";import{B}from"./chunk-zb9h0sw8.js";import{Ua}from"./chunk-d06c6hpj.js";import{Qxt,Yve}from"./chunk-59zy4j10.js";import{T,Y,Lb,M}from"./chunk-757fgf90.js";M();function kP(){let[o,e]=Lb((r)=>r+1,0);return T(()=>Ku(e),[]),o}function L1(o){return kP(),o()}M();function t(){let[o,e]=Lb((r)=>r+1,0);return T(()=>JNo(e),[]),o}function NCn(o,e){return Qxt(o)??Qxt(e)??Hy()}function TQ(o){return Ht(NCn(o.mainLoopModelForSession,o.mainLoopModel))}function Voe(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=kP(),s=t(),i=Ua();return Y(()=>Yve(e,o),[e,o,r,i,s])}function zVt(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=kP(),s=t(),i=Ua();return Y(()=>NCn(e,o),[e,o,r,i,s])}function od(){let o=B((n)=>n.mainLoopModel),e=B((n)=>n.mainLoopModelForSession),r=kP(),s=t(),i=Ua();return Y(()=>TQ({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i,s])}
export{kP,L1,NCn,TQ,Voe,zVt,od};
