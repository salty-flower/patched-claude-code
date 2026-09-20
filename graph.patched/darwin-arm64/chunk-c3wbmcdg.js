// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{bk,i_,Zp,ip}from"./chunk-rffpe63a.js";import{ke}from"./chunk-aj022wxj.js";import{Jp,hyn}from"./chunk-w0wezkwh.js";import{rg}from"./chunk-x3acnwwa.js";import{join as a}from"path";function T7(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:bk(e)}async function kxt(e,t,n){return a(Zp(await ip(e,rg(n))),aXt(t))}async function $_e(e,t,n){let r=await ip(e,rg(n)),c=a(Zp(r),aXt(t)),o=i_(r),i=n===void 0?void 0:EPn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function EPn(e,t){let n=ke.dirSyncRecord(e,T7(t));return Jp(n)===void 0?n:void 0}function aXt(e){return`${T7(e)}${hyn}`}
export{T7,kxt,$_e,EPn,aXt};
