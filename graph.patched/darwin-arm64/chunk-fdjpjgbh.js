// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{UR,mb,Vm,Ag}from"./chunk-3vg91ev9.js";import{He}from"./chunk-k7eq4ze9.js";import{tm,fXn}from"./chunk-a453ergf.js";import{Hw}from"./chunk-hvb4d6cb.js";import{dirname as f,join as s}from"path";function c(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:UR(e)}async function Lso(e,r,n){return s(Vm(await Ag(e,Hw(n))),Oxn(r))}async function Nso(e,r,n){let t=await Ag(e,Hw(n)),d=s(Vm(t),Oxn(r)),i=mb(t),o=n===void 0?void 0:Pdr(i,r);return{path:d,projectKey:i,v5:n===void 0||o===void 0?void 0:{backend:n,key:o}}}function Pdr(e,r){let n=He.dirSyncRecord(e,c(r));return tm(n)===void 0?n:void 0}function Oxn(e){return`${c(e)}${fXn}`}
export{Lso,Nso,Pdr,Oxn};
