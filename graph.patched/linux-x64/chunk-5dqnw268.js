// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{q}from"./chunk-r004g87r.js";import{MCa,dw,Ut}from"./chunk-a5a37ds7.js";import{c0}from"./chunk-jf5ssyj8.js";import{Tu}from"./chunk-1geh6gpp.js";import{w$n,_et}from"./chunk-zaxe68t4.js";import{M,J,hy,j}from"./chunk-mp0bjfh5.js";j();function t(){let[o,e]=hy((i)=>i+1,0);return M(()=>MCa(e),[]),o}function $eo(o,e){return w$n(o)??w$n(e)??dw()}function dN(o){return Ut($eo(o.mainLoopModelForSession,o.mainLoopModel))}function GLe(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=c0(),s=t(),r=Tu();return J(()=>_et(e,o),[e,o,i,r,s])}function IXe(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=c0(),s=t(),r=Tu();return J(()=>$eo(e,o),[e,o,i,r,s])}function Nf(){let o=q((n)=>n.mainLoopModel),e=q((n)=>n.mainLoopModelForSession),i=c0(),s=t(),r=Tu();return J(()=>dN({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,i,r,s])}
export{$eo,dN,GLe,IXe,Nf};
