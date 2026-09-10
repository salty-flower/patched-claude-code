// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{yC,qh,cf,id}from"./chunk-2dxb0egv.js";import{ve}from"./chunk-d6akndrs.js";import{Wd,ben}from"./chunk-8rqwttv3.js";import{om}from"./chunk-m5r8f40g.js";import{join as a}from"path";function TK(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:yC(e)}async function Mht(e,t,n){return a(cf(await id(e,om(n))),sjt(t))}async function vpe(e,t,n){let r=await id(e,om(n)),c=a(cf(r),sjt(t)),o=qh(r),i=n===void 0?void 0:cfn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function cfn(e,t){let n=ve.dirSyncRecord(e,TK(t));return Wd(n)===void 0?n:void 0}function sjt(e){return`${TK(e)}${ben}`}
export{TK,Mht,vpe,cfn,sjt};
