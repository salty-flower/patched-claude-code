// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_A,dh,Dp,Nu}from"./chunk-3pft38xm.js";import{Ae}from"./chunk-dhrcn786.js";import{Ad,y5t}from"./chunk-1rkars97.js";import{wf}from"./chunk-8vfzn6r5.js";import{join as a}from"path";function yz(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:_A(e)}async function _dt(e,t,n){return a(Dp(await Nu(e,wf(n))),S1t(t))}async function lce(e,t,n){let r=await Nu(e,wf(n)),c=a(Dp(r),S1t(t)),o=dh(r),i=n===void 0?void 0:Nan(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function Nan(e,t){let n=Ae.dirSyncRecord(e,yz(t));return Ad(n)===void 0?n:void 0}function S1t(e){return`${yz(e)}${y5t}`}
export{yz,_dt,lce,Nan,S1t};
