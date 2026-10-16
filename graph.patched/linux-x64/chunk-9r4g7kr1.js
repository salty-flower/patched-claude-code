// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{qt}from"./chunk-bfqfmbd0.js";import{a}from"./chunk-xwn0mfnc.js";import{Gg,ep}from"./chunk-k16gymf7.js";function mZr({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function gZr(t){let e=qt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Gg(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function wce(t){let e;try{e=ep()?.accountUuid}catch{e=void 0}return mZr({storedAccountUuid:e,hostAccountUuid:await gZr(t)})}
export{mZr,gZr,wce};
