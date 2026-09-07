// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{B}from"./chunk-pv5vwvkf.js";import{th,bt}from"./chunk-3e93vkg3.js";import{Jv}from"./chunk-sw7fysf2.js";import{wi}from"./chunk-jtap7sr6.js";import{z,N}from"./chunk-vm1tjjym.js";import{f0e,Ote}from"./chunk-y3swhsrk.js";N();function Rxt(o,n){return f0e(o)??f0e(n)??th()}function qot(o){return bt(Rxt(o.mainLoopModelForSession,o.mainLoopModel))}function e6(){let o=B((e)=>e.mainLoopModel),n=B((e)=>e.mainLoopModelForSession),i=Jv(),s=wi();return z(()=>Ote(n,o),[n,o,i,s])}function Kot(){let o=B((e)=>e.mainLoopModel),n=B((e)=>e.mainLoopModelForSession),i=Jv(),s=wi();return z(()=>Rxt(n,o),[n,o,i,s])}function Ka(){let o=B((e)=>e.mainLoopModel),n=B((e)=>e.mainLoopModelForSession),i=Jv(),s=wi();return z(()=>qot({mainLoopModel:o,mainLoopModelForSession:n}),[n,o,i,s])}
export{Rxt,qot,e6,Kot,Ka};
