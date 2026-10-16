// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Nn}from"./chunk-pzq28dp7.js";import{XM,ek,Xb,M_}from"./chunk-sbc6y92x.js";import{Ue}from"./chunk-zg8w8y5z.js";import{Nm,I$r}from"./chunk-n1y0nb3t.js";import{cA}from"./chunk-qg2h6e2h.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:XM(e)||"empty-id"}async function d(e,t,{isRootResolved:n=!1}={}){return n?Nn(e):M_(e,cA(t))}async function pQo(e,t,n,i){return a(Xb(await d(e,n,i)),Lor(t))}async function fQo(e,t,n,i){let o=await d(e,n,i),p=a(Xb(o),Lor(t)),r=ek(o),s=n===void 0?void 0:H5r(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function H5r(e,t){let n=Ue.dirSyncRecord(e,c(t));return Nm(n)===void 0?n:void 0}function Lor(e){return`${c(e)}${I$r}`}
export{pQo,fQo,H5r,Lor};
