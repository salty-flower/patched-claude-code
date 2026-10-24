// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Vt}from"./chunk-9sbknd2z.js";import{i}from"./chunk-9a41hw1t.js";import{Lh,cp}from"./chunk-27xjmczp.js";function wyo({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Eyo(t){let e=Vt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Lh(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function kme(t){let e;try{e=cp()?.accountUuid}catch{e=void 0}return wyo({storedAccountUuid:e,hostAccountUuid:await Eyo(t)})}
export{wyo,Eyo,kme};
