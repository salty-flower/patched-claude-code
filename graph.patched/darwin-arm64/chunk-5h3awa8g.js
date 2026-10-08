// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{q}from"./chunk-xdrvvc0e.js";import{Yps,k_,Pt}from"./chunk-gcyvvtkw.js";import{WI}from"./chunk-ym786de1.js";import{Ml}from"./chunk-06jtjbp8.js";import{dGt,MOe}from"./chunk-nwqfvmza.js";import{P,J,Xg,N}from"./chunk-f6geyac8.js";N();function t(){let[o,e]=Xg((s)=>s+1,0);return P(()=>Yps(e),[]),o}function _Wn(o,e){return dGt(o)??dGt(e)??k_()}function i3(o){return Pt(_Wn(o.mainLoopModelForSession,o.mainLoopModel))}function uue(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=WI(),i=t(),r=Ml();return J(()=>MOe(e,o),[e,o,s,r,i])}function Don(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=WI(),i=t(),r=Ml();return J(()=>_Wn(e,o),[e,o,s,r,i])}function Qd(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=WI(),i=t(),r=Ml();return J(()=>i3({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{_Wn,i3,uue,Don,Qd};
