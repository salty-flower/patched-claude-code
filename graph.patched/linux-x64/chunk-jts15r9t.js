// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fn}from"./chunk-h9cj3xp8.js";import{bH,vk,vS,eb}from"./chunk-6ta41wqs.js";import{je}from"./chunk-z3qcbx87.js";import{ig,nGr}from"./chunk-32vra4sg.js";import{WA}from"./chunk-96n07hhj.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:bH(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?Fn(e):eb(e,WA(t))}async function pis(e,t,n,i){return a(vS(await d(e,n,i)),vcr(t))}async function fis(e,t,n,i){let o=await d(e,n,i),p=a(vS(o),vcr(t)),r=vk(o),s=n===void 0?void 0:V7r(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function V7r(e,t){let n=je.dirSyncRecord(e,c(t));return ig(n)===void 0?n:void 0}function vcr(e){return`${c(e)}${nGr}`}
export{pis,fis,V7r,vcr};
