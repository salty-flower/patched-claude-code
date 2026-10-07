// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Jt}from"./chunk-12mdvf4x.js";import{a}from"./chunk-j77txbjn.js";import{Eh,Sg}from"./chunk-s46qgfx7.js";function wDr({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function EDr(t){let e=Jt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Eh(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Gre(t){let e;try{e=Sg()?.accountUuid}catch{e=void 0}return wDr({storedAccountUuid:e,hostAccountUuid:await EDr(t)})}
export{wDr,EDr,Gre};
