// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ut}from"./chunk-d50ak5jt.js";import{i}from"./chunk-n1cpnz94.js";import{ym,Ud}from"./chunk-axsjfnwn.js";function A5o({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function R5o(t){let e=Ut(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await ym(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function wne(t){let e;try{e=Ud()?.accountUuid}catch{e=void 0}return A5o({storedAccountUuid:e,hostAccountUuid:await R5o(t)})}
export{A5o,R5o,wne};
