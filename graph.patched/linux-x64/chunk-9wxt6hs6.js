// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{mA,qh,cf,sd}from"./chunk-v365e4sa.js";import{ke}from"./chunk-qrernxw9.js";import{zd,KZt}from"./chunk-f4019nt1.js";import{rm}from"./chunk-0zsxbyn7.js";import{join as a}from"path";function h5(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:mA(e)}async function ght(e,t,n){return a(cf(await sd(e,rm(n))),Djt(t))}async function cpe(e,t,n){let r=await sd(e,rm(n)),c=a(cf(r),Djt(t)),o=qh(r),i=n===void 0?void 0:Opn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function Opn(e,t){let n=ke.dirSyncRecord(e,h5(t));return zd(n)===void 0?n:void 0}function Djt(e){return`${h5(e)}${KZt}`}
export{h5,ght,cpe,Opn,Djt};
