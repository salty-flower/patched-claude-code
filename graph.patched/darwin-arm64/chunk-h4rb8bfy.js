// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Kt}from"./chunk-esv3b1gm.js";import{a}from"./chunk-h422gpw8.js";import{lh,mp}from"./chunk-bvn0epzr.js";function cio({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function uio(t){let e=Kt(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await lh(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Gue(t){let e;try{e=mp()?.accountUuid}catch{e=void 0}return cio({storedAccountUuid:e,hostAccountUuid:await uio(t)})}
export{cio,uio,Gue};
