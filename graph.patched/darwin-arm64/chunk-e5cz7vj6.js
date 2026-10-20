// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$n}from"./chunk-f66mhvm1.js";import{E0,kk,vb,tS}from"./chunk-hf1d5ysc.js";import{je}from"./chunk-jjgc4sar.js";import{ig,T2r}from"./chunk-tx4cjw3a.js";import{VT}from"./chunk-0dfxdbsw.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:E0(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?$n(e):tS(e,VT(t))}async function Nis(e,t,n,i){return a(vb(await d(e,n,i)),Ocr(t))}async function Fis(e,t,n,i){let o=await d(e,n,i),p=a(vb(o),Ocr(t)),r=kk(o),s=n===void 0?void 0:QQr(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function QQr(e,t){let n=je.dirSyncRecord(e,c(t));return ig(n)===void 0?n:void 0}function Ocr(e){return`${c(e)}${T2r}`}
export{Nis,Fis,QQr,Ocr};
