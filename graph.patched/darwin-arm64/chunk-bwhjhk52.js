// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{mp}from"./chunk-twxt3h9y.js";import{f}from"./chunk-1y7zyxh8.js";import{Nd}from"./chunk-89ynvz58.js";import{u9,jE,Jt,G$}from"./chunk-etkg2s89.js";import{o,T,d,R}from"./chunk-rvnav1yx.js";var i="tengu_violin_soundpost";async function z$t(){try{return await Nd()&&await mp(i)}catch{return!1}}var n=1,mpn=64,mBr="offer",e=f(()=>o().regex(Jt).refine(G$)),h=f(()=>d({v:R(n),head:e(),branch:o().min(1).max(u9).refine(jE),ancestors:T(e()).max(mpn)}));function gBr({head:r,branch:a,history:s}){let t=h().safeParse({v:n,head:r,branch:a,ancestors:s.filter((c)=>c!==r).slice(0,mpn)});return t.success?t.data:null}
export{z$t,mpn,mBr,gBr};
