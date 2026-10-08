// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{V}from"./chunk-qp76z0mm.js";import{ups,E_,Pt}from"./chunk-cxjvwxsa.js";import{UI}from"./chunk-2adgswss.js";import{Ml}from"./chunk-g2h1fz06.js";import{Xzt,TOe}from"./chunk-g263vvvn.js";import{P,X,Yg,N}from"./chunk-y6zm4y48.js";N();function t(){let[o,e]=Yg((s)=>s+1,0);return P(()=>ups(e),[]),o}function ezn(o,e){return Xzt(o)??Xzt(e)??E_()}function J4(o){return Pt(ezn(o.mainLoopModelForSession,o.mainLoopModel))}function sue(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=UI(),i=t(),r=Ml();return X(()=>TOe(e,o),[e,o,s,r,i])}function bon(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=UI(),i=t(),r=Ml();return X(()=>ezn(e,o),[e,o,s,r,i])}function Qd(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=UI(),i=t(),r=Ml();return X(()=>J4({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{ezn,J4,sue,bon,Qd};
