// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{V}from"./chunk-dyec77x8.js";import{JUs,GS,xt}from"./chunk-1901fdh6.js";import{mH}from"./chunk-djkvgvf9.js";import{gd}from"./chunk-n8zkrxv6.js";import{EXt,PFe}from"./chunk-996thspe.js";import{P,Z,ey,F}from"./chunk-57p87fb1.js";F();function t(){let[o,e]=ey((s)=>s+1,0);return P(()=>JUs(e),[]),o}function $Zn(o,e){return EXt(o)??EXt(e)??GS()}function fH(o){return xt($Zn(o.mainLoopModelForSession,o.mainLoopModel))}function wye(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=mH(),i=t(),r=gd();return Z(()=>PFe(e,o),[e,o,s,r,i])}function Oze(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=mH(),i=t(),r=gd();return Z(()=>$Zn(e,o),[e,o,s,r,i])}function Au(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=mH(),i=t(),r=gd();return Z(()=>fH({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{$Zn,fH,wye,Oze,Au};
