// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{yC,s_,Qp,sp}from"./chunk-4knvtbyn.js";import{Ce}from"./chunk-679ytzs5.js";import{Xp,Khn}from"./chunk-qrf0f0ev.js";import{tg}from"./chunk-qrs05k6s.js";import{join as a}from"path";function mX(e){return/^[A-Za-z0-9_-]{1,128}$/.test(e)?e:yC(e)}async function YRt(e,t,n){return a(Qp(await sp(e,tg(n))),EXt(t))}async function I_e(e,t,n){let r=await sp(e,tg(n)),c=a(Qp(r),EXt(t)),o=s_(r),i=n===void 0?void 0:$Pn(o,t);return{path:c,projectKey:o,v5:n===void 0||i===void 0?void 0:{backend:n,key:i}}}function $Pn(e,t){let n=Ce.dirSyncRecord(e,mX(t));return Xp(n)===void 0?n:void 0}function EXt(e){return`${mX(e)}${Khn}`}
export{mX,YRt,I_e,$Pn,EXt};
