// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{gA,ch,$f,Mu}from"./chunk-4c106gcs.js";import{Ee}from"./chunk-fpk3t24b.js";import{Ad,q8t}from"./chunk-6f5agm7e.js";import{Sp}from"./chunk-nqpa0qrx.js";import{join as a}from"path";function f9(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:gA(e)}async function adt(e,t,n){return a($f(await Mu(e,Sp(n))),cNt(t))}async function cce(e,t,n){let r=await Mu(e,Sp(n)),c=a($f(r),cNt(t)),o=ch(r),i=n===void 0?void 0:yan(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function yan(e,t){let n=Ee.dirSyncRecord(e,f9(t));return Ad(n)===void 0?n:void 0}function cNt(e){return`${f9(e)}${q8t}`}
export{f9,adt,cce,yan,cNt};
