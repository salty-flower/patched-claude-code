// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{On}from"./chunk-ae84tp6z.js";import{DO,VE,Oh,Gy}from"./chunk-nca5bd28.js";import{Fe}from"./chunk-nv1qvpv3.js";import{Hg,zTr}from"./chunk-bf3z2ftn.js";import{wA}from"./chunk-3fs5mn0t.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:DO(e)}async function d(e,t,{isRootResolved:n=!1}={}){return n?On(e):Gy(e,wA(t))}async function CWo(e,t,n,i){return a(Oh(await d(e,n,i)),pYn(t))}async function TWo(e,t,n,i){let o=await d(e,n,i),p=a(Oh(o),pYn(t)),r=VE(o),s=n===void 0?void 0:sBr(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function sBr(e,t){let n=Fe.dirSyncRecord(e,c(t));return Hg(n)===void 0?n:void 0}function pYn(e){return`${c(e)}${zTr}`}
export{CWo,TWo,sBr,pYn};
