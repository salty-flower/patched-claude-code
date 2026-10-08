// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ln}from"./chunk-9exgg8sx.js";import{RI,dE,ph,Ey}from"./chunk-pzha2ryw.js";import{De}from"./chunk-sd0xvc0m.js";import{_g,xwr}from"./chunk-yj45yszw.js";import{Ok}from"./chunk-t68p7k5m.js";import{dirname as v,join as a}from"path";import{realpath as f}from"fs";import{promisify as m}from"util";var h=m(f.native);function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:RI(e)}async function d(e,t,{isRootResolved:n=!1}={}){return n?Ln(e):Ey(e,Ok(t))}async function dLo(e,t,n,i){return a(ph(await d(e,n,i)),nqn(t))}async function uLo(e,t,n,i){let o=await d(e,n,i),p=a(ph(o),nqn(t)),r=dE(o),s=n===void 0?void 0:GMr(r,t);return{path:p,projectKey:r,v5:n===void 0||s===void 0?void 0:{backend:n,key:s}}}function GMr(e,t){let n=De.dirSyncRecord(e,c(t));return _g(n)===void 0?n:void 0}function nqn(e){return`${c(e)}${xwr}`}
export{dLo,uLo,GMr,nqn};
