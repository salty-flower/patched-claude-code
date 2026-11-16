// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Et}from"./chunk-pjehsasc.js";import{i}from"./chunk-5g5ea6r9.js";import{yg,Uc}from"./chunk-a5a37ds7.js";function Wys({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Gys(t){let e=Et(i.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await yg(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function P9(t){let e;try{e=Uc()?.accountUuid}catch{e=void 0}return Wys({storedAccountUuid:e,hostAccountUuid:await Gys(t)})}
export{Wys,Gys,P9};
