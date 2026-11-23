// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{kt}from"./chunk-28n1q6sq.js";import{i}from"./chunk-428zme0n.js";import{yg,Uc}from"./chunk-e44qnbvj.js";function vSs({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function kSs(t){let e=kt(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await yg(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function U8(t){let e;try{e=Uc()?.accountUuid}catch{e=void 0}return vSs({storedAccountUuid:e,hostAccountUuid:await kSs(t)})}
export{vSs,kSs,U8};
