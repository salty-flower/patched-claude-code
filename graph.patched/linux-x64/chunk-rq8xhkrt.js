// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{XP,Uw,Kg,Ch}from"./chunk-h3056rfm.js";import{De}from"./chunk-7n5tp35k.js";import{ng,wmr}from"./chunk-j3629m0a.js";import{gE}from"./chunk-vnewp27j.js";import{dirname as P,join as s}from"path";import{realpath as d}from"fs";import{promisify as p}from"util";var S=p(d.native);function a(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:XP(e)}async function tRo(e,t,n){return s(Kg(await Ch(e,gE(n))),Xjn(t))}async function nRo(e,t,n){let r=await Ch(e,gE(n)),c=s(Kg(r),Xjn(t)),i=Uw(r),o=n===void 0?void 0:oRr(i,t);return{path:c,projectKey:i,v5:n===void 0||o===void 0?void 0:{backend:n,key:o}}}function oRr(e,t){let n=De.dirSyncRecord(e,a(t));return ng(n)===void 0?n:void 0}function Xjn(e){return`${a(e)}${wmr}`}
export{tRo,nRo,oRr,Xjn};
