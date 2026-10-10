// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{V}from"./chunk-7n39kxwj.js";import{zvs,q_,Dt}from"./chunk-bk5ct2gw.js";import{JO}from"./chunk-5g03s1vd.js";import{Kl}from"./chunk-5s72w42v.js";import{Wqt,hMe}from"./chunk-sfn1dbxq.js";import{P,Z,hh,N}from"./chunk-kexg5hxg.js";N();function t(){let[o,e]=hh((s)=>s+1,0);return P(()=>zvs(e),[]),o}function l3n(o,e){return Wqt(o)??Wqt(e)??q_()}function CU(o){return Dt(l3n(o.mainLoopModelForSession,o.mainLoopModel))}function Mfe(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=JO(),i=t(),r=Kl();return Z(()=>hMe(e,o),[e,o,s,r,i])}function rdn(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=JO(),i=t(),r=Kl();return Z(()=>l3n(e,o),[e,o,s,r,i])}function cu(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=JO(),i=t(),r=Kl();return Z(()=>CU({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{l3n,CU,Mfe,rdn,cu};
