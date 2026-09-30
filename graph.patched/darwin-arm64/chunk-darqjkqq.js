// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Jt}from"./chunk-ypa64mmn.js";import{a}from"./chunk-1fpwxv0g.js";import{Sg,ym}from"./chunk-er6f56rj.js";function Tdr({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function kdr(t){let e=Jt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Sg(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function qwe(t){let e;try{e=ym()?.accountUuid}catch{e=void 0}return Tdr({storedAccountUuid:e,hostAccountUuid:await kdr(t)})}
export{Tdr,kdr,qwe};
