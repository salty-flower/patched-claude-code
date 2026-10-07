// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{eI,jw,Yg,Th}from"./chunk-1affnqfa.js";import{De}from"./chunk-wq75sevg.js";import{ng,Gmr}from"./chunk-ts0309p1.js";import{_v}from"./chunk-gk3dgtc1.js";import{dirname as P,join as s}from"path";import{realpath as d}from"fs";import{promisify as p}from"util";var S=p(d.native);function a(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:eI(e)}async function PRo(e,t,n){return s(Yg(await Th(e,_v(n))),p2n(t))}async function IRo(e,t,n){let r=await Th(e,_v(n)),c=s(Yg(r),p2n(t)),i=jw(r),o=n===void 0?void 0:ERr(i,t);return{path:c,projectKey:i,v5:n===void 0||o===void 0?void 0:{backend:n,key:o}}}function ERr(e,t){let n=De.dirSyncRecord(e,a(t));return ng(n)===void 0?n:void 0}function p2n(e){return`${a(e)}${Gmr}`}
export{PRo,IRo,ERr,p2n};
