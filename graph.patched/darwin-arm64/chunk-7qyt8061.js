// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Rn}from"./chunk-qedh1vmm.js";import{U0,vA,zE,Ew}from"./chunk-hg9h699n.js";import{Ge}from"./chunk-62j6znyn.js";import{bg,Zko}from"./chunk-qj8veqay.js";import{fP}from"./chunk-xcagrk77.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:U0(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?Rn(e):Ew(e,fP(t))}async function v7s(e,t,n,i){return a(zE(await d(e,n,i)),SGr(t))}async function C7s(e,t,n,i){let o=await d(e,n,i),p=a(zE(o),SGr(t)),r=vA(o),s=n===void 0?void 0:x1o(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function x1o(e,t){let n=Ge.dirSyncRecord(e,c(t));return bg(n)===void 0?n:void 0}function SGr(e){return`${c(e)}${Zko}`}
export{v7s,C7s,x1o,SGr};
