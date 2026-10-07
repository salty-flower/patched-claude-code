// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{q}from"./chunk-m4fw81v1.js";import{Ens,t_,xt}from"./chunk-m0sj7y8g.js";import{pI}from"./chunk-hjwjezc7.js";import{Tl}from"./chunk-jp5yv6ex.js";import{JBt,gPe}from"./chunk-9wqh5j7s.js";import{x,X,Hg,L}from"./chunk-1mwacejt.js";L();function t(){let[o,e]=Hg((s)=>s+1,0);return x(()=>Ens(e),[]),o}function EFn(o,e){return JBt(o)??JBt(e)??t_()}function jK(o){return xt(EFn(o.mainLoopModelForSession,o.mainLoopModel))}function vce(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=pI(),i=t(),r=Tl();return X(()=>gPe(e,o),[e,o,s,r,i])}function ten(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=pI(),i=t(),r=Tl();return X(()=>EFn(e,o),[e,o,s,r,i])}function Ud(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),s=pI(),i=t(),r=Tl();return X(()=>jK({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{EFn,jK,vce,ten,Ud};
