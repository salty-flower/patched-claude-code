// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ln}from"./chunk-gwj7v27h.js";import{kI,lv,uh,vy}from"./chunk-mb5hcwe1.js";import{Le}from"./chunk-hrwjwwzw.js";import{_g,iwr}from"./chunk-amnc8bbv.js";import{xk}from"./chunk-qpqx74we.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:kI(e)}async function d(e,t,{isRootResolved:n=!1}={}){return n?Ln(e):vy(e,xk(t))}async function D0o(e,t,n,i){return a(uh(await d(e,n,i)),UVn(t))}async function L0o(e,t,n,i){let o=await d(e,n,i),p=a(uh(o),UVn(t)),r=lv(o),s=n===void 0?void 0:CDr(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function CDr(e,t){let n=Le.dirSyncRecord(e,c(t));return _g(n)===void 0?n:void 0}function UVn(e){return`${c(e)}${iwr}`}
export{D0o,L0o,CDr,UVn};
