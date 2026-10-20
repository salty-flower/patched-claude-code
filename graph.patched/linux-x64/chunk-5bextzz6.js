// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K}from"./chunk-xdqcvzwv.js";import{cqs,pS,Mt}from"./chunk-7p6jp6kj.js";import{BH}from"./chunk-xpm3m8kf.js";import{wd}from"./chunk-t3pxbx18.js";import{w7t,SUe}from"./chunk-rncrmfyt.js";import{P,ee,vy,B}from"./chunk-a2fszd78.js";B();function t(){let[o,e]=vy((s)=>s+1,0);return P(()=>cqs(e),[]),o}function rsr(o,e){return w7t(o)??w7t(e)??pS()}function UH(o){return Mt(rsr(o.mainLoopModelForSession,o.mainLoopModel))}function R_e(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=BH(),i=t(),r=wd();return ee(()=>SUe(e,o),[e,o,s,r,i])}function BVe(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=BH(),i=t(),r=wd();return ee(()=>rsr(e,o),[e,o,s,r,i])}function Bu(){let o=K((n)=>n.mainLoopModel),e=K((n)=>n.mainLoopModelForSession),s=BH(),i=t(),r=wd();return ee(()=>UH({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,s,r,i])}
export{rsr,UH,R_e,BVe,Bu};
