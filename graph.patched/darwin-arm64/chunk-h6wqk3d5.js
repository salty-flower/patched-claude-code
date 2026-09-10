// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Kn}from"./chunk-sgyvc67j.js";import{a}from"./chunk-dv6tepz3.js";import{wt}from"./chunk-2rebt4am.js";import{HA,zh}from"./chunk-e02s7cks.js";import{He}from"./chunk-xsncbnja.js";import{Ft}from"./chunk-ea584spk.js";function gfn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function hfn(t){let e=Kn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await HA(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function ire(t){let e;try{e=zh()?.accountUuid}catch{e=void 0}return gfn({storedAccountUuid:e,hostAccountUuid:await hfn(t)})}function uX(){return r()===void 0}function r(){if(wt()||He()!=="firstParty")return"egress";return Ft("allow_remote_sessions")?void 0:"policy_org"}
export{gfn,hfn,ire,uX};
