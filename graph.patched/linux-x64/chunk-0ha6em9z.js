// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xt}from"./chunk-28fj72x7.js";import{a}from"./chunk-rptge3r8.js";import{Km,Pf}from"./chunk-cxjvwxsa.js";function f1r({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function m1r(t){let e=Xt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Km(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function use(t){let e;try{e=Pf()?.accountUuid}catch{e=void 0}return f1r({storedAccountUuid:e,hostAccountUuid:await m1r(t)})}
export{f1r,m1r,use};
