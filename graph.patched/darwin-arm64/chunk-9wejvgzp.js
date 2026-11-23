// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{q}from"./chunk-rvc95g5c.js";import{ERa,cw,Ut}from"./chunk-e44qnbvj.js";import{fM}from"./chunk-7z05qrj2.js";import{Cu}from"./chunk-jx97n3ke.js";import{W1n,Aet}from"./chunk-wqb2b4v0.js";import{M,J,hy,j}from"./chunk-07a1744w.js";j();function t(){let[o,e]=hy((i)=>i+1,0);return M(()=>ERa(e),[]),o}function Weo(o,e){return W1n(o)??W1n(e)??cw()}function fN(o){return Ut(Weo(o.mainLoopModelForSession,o.mainLoopModel))}function WLe(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=fM(),s=t(),r=Cu();return J(()=>Aet(e,o),[e,o,i,r,s])}function LXe(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=fM(),s=t(),r=Cu();return J(()=>Weo(e,o),[e,o,i,r,s])}function Ff(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=fM(),s=t(),r=Cu();return J(()=>fN({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,i,r,s])}
export{Weo,fN,WLe,LXe,Ff};
