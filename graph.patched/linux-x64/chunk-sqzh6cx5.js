// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{V}from"./chunk-27jf09he.js";import{pUs,Wb,xt}from"./chunk-k16gymf7.js";import{uH}from"./chunk-2a99gfm8.js";import{gd}from"./chunk-eaxzthb2.js";import{lXt,w$e}from"./chunk-38nf1dnm.js";import{P,Z,Qh,F}from"./chunk-zx300qjj.js";F();function t(){let[o,e]=Qh((s)=>s+1,0);return P(()=>pUs(e),[]),o}function SZn(o,e){return lXt(o)??lXt(e)??Wb()}function cH(o){return xt(SZn(o.mainLoopModelForSession,o.mainLoopModel))}function mye(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=uH(),i=t(),r=gd();return Z(()=>w$e(e,o),[e,o,s,r,i])}function k2e(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=uH(),i=t(),r=gd();return Z(()=>SZn(e,o),[e,o,s,r,i])}function Au(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=uH(),i=t(),r=gd();return Z(()=>cH({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{SZn,cH,mye,k2e,Au};
