// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{rn}from"./chunk-w9w461gr.js";import{a}from"./chunk-3a4khaz5.js";import{xt}from"./chunk-0dpks9t0.js";import{He}from"./chunk-m9hfdm3b.js";import{Bh,um}from"./chunk-twxt3h9y.js";import{Xt}from"./chunk-9hpfkyew.js";function oJn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function sJn(t){let e=rn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Bh(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Lye(t){let e;try{e=um()?.accountUuid}catch{e=void 0}return oJn({storedAccountUuid:e,hostAccountUuid:await sJn(t)})}function Jte(){return r()===void 0}function r(){if(xt()||He()!=="firstParty")return"egress";return Xt("allow_remote_sessions")?void 0:"policy_org"}
export{oJn,sJn,Lye,Jte};
