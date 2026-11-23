// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cn}from"./chunk-0sn0736b.js";import{WH,Q0,Hv,GE}from"./chunk-a0s0k7pm.js";import{Ze}from"./chunk-jhh9hbv6.js";import{hg,_Do}from"./chunk-apc08a8f.js";import{qI}from"./chunk-snkw0pyv.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:WH(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?cn(e):GE(e,qI(t))}async function XMi(e,t,n,i){return a(Hv(await d(e,n,i)),Fao(t))}async function JMi(e,t,n,i){let o=await d(e,n,i),p=a(Hv(o),Fao(t)),r=Q0(o),s=n===void 0?void 0:Kas(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function Kas(e,t){let n=Ze.dirSyncRecord(e,c(t));return hg(n)===void 0?n:void 0}function Fao(e){return`${c(e)}${_Do}`}
export{XMi,JMi,Kas,Fao};
