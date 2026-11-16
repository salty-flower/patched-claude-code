// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{cn}from"./chunk-e5p1adf2.js";import{$H,YM,Dk,Wv}from"./chunk-ya2m8d4c.js";import{Ze}from"./chunk-fqmzf5r4.js";import{hg,z0o}from"./chunk-1fka5x2f.js";import{GO}from"./chunk-m33n00rx.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:$H(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?cn(e):Wv(e,GO(t))}async function A0i(e,t,n,i){return a(Dk(await d(e,n,i)),kao(t))}async function C0i(e,t,n,i){let o=await d(e,n,i),p=a(Dk(o),kao(t)),r=YM(o),s=n===void 0?void 0:Bas(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function Bas(e,t){let n=Ze.dirSyncRecord(e,c(t));return hg(n)===void 0?n:void 0}function kao(e){return`${c(e)}${z0o}`}
export{A0i,C0i,Bas,kao};
