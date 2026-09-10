// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{nv,Uh,Zp,rd}from"./chunk-v6bnm6m1.js";import{Ce}from"./chunk-tfmhv9d3.js";import{Md,KJt}from"./chunk-jreee4z9.js";import{Xf}from"./chunk-gsk2a3da.js";import{join as a}from"path";function i5(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:nv(e)}async function Jmt(e,t,n){return a(Zp(await rd(e,Xf(n))),JUt(t))}async function Ade(e,t,n){let r=await rd(e,Xf(n)),c=a(Zp(r),JUt(t)),o=Uh(r),i=n===void 0?void 0:zun(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function zun(e,t){let n=Ce.dirSyncRecord(e,i5(t));return Md(n)===void 0?n:void 0}function JUt(e){return`${i5(e)}${KJt}`}
export{i5,Jmt,Ade,zun,JUt};
