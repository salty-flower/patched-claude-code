// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{V}from"./chunk-8h7099gw.js";import{ars,n_,xt}from"./chunk-s46qgfx7.js";import{gI}from"./chunk-fz010evj.js";import{Al}from"./chunk-kksbpvp5.js";import{uBt,vPe}from"./chunk-y0b3kvx1.js";import{x,J,Dg,L}from"./chunk-bkksmm2y.js";L();function t(){let[o,e]=Dg((s)=>s+1,0);return x(()=>ars(e),[]),o}function F$n(o,e){return uBt(o)??uBt(e)??n_()}function Xq(o){return xt(F$n(o.mainLoopModelForSession,o.mainLoopModel))}function Rce(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=gI(),i=t(),r=Al();return J(()=>vPe(e,o),[e,o,s,r,i])}function hen(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=gI(),i=t(),r=Al();return J(()=>F$n(e,o),[e,o,s,r,i])}function Ud(){let o=V((n)=>n.mainLoopModel),e=V((n)=>n.mainLoopModelForSession),s=gI(),i=t(),r=Al();return J(()=>Xq({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{F$n,Xq,Rce,hen,Ud};
