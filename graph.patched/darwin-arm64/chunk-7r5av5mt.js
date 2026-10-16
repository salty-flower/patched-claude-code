// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Nn}from"./chunk-r0a9v21k.js";import{Z0,nk,JS,M_}from"./chunk-mn5cr59w.js";import{Ue}from"./chunk-z5vzymyr.js";import{Nm,t$r}from"./chunk-td5pjp2j.js";import{fA}from"./chunk-t2f245c1.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:Z0(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?Nn(e):M_(e,fA(t))}async function KJo(e,t,n,i){return a(JS(await d(e,n,i)),osr(t))}async function YJo(e,t,n,i){let o=await d(e,n,i),p=a(JS(o),osr(t)),r=nk(o),s=n===void 0?void 0:n9r(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function n9r(e,t){let n=Ue.dirSyncRecord(e,c(t));return Nm(n)===void 0?n:void 0}function osr(e){return`${c(e)}${t$r}`}
export{KJo,YJo,n9r,osr};
