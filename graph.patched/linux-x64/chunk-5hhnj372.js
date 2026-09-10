// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Kn}from"./chunk-6n7yk222.js";import{a}from"./chunk-1bwwmttj.js";import{wt}from"./chunk-p9k2m8jj.js";import{xE,zh}from"./chunk-ce4ppmnp.js";import{Ie}from"./chunk-dqr9knfd.js";import{Nt}from"./chunk-k2cr3wah.js";function Upn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Bpn(t){let e=Kn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await xE(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Yne(t){let e;try{e=zh()?.accountUuid}catch{e=void 0}return Upn({storedAccountUuid:e,hostAccountUuid:await Bpn(t)})}function nJ(){return r()===void 0}function r(){if(wt()||Ie()!=="firstParty")return"egress";return Nt("allow_remote_sessions")?void 0:"policy_org"}
export{Upn,Bpn,Yne,nJ};
