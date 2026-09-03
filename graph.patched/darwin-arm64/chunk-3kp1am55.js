// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{KA,Em,Bu,hl}from"./chunk-0s8h31st.js";import{Ae}from"./chunk-zjtbqw2e.js";import{zn,XRt}from"./chunk-d0r3tzx0.js";import{Iu}from"./chunk-c6hsjvnf.js";import{join as a}from"path";function kz(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:KA(e)}async function Qut(e,t,n){return a(Bu(await hl(e,Iu(n))),XNt(t))}async function wce(e,t,n){let r=await hl(e,Iu(n)),c=a(Bu(r),XNt(t)),o=Em(r),i=n===void 0?void 0:_sn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function _sn(e,t){let n=Ae.dirSyncRecord(e,kz(t));return zn(n)===void 0?n:void 0}function XNt(e){return`${kz(e)}${XRt}`}
export{kz,Qut,wce,_sn,XNt};
