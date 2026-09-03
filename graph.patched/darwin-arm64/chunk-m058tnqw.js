// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Vn}from"./chunk-hdbxv3pp.js";import{a}from"./chunk-pv906ex9.js";import{vt}from"./chunk-1mtde6n1.js";import{Jw,M_}from"./chunk-h6md7820.js";import{Me}from"./chunk-j64ncx4g.js";import{Ft}from"./chunk-zskn8f78.js";function xin({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Hin(t){let e=Vn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Jw(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function ote(t){let e;try{e=M_()?.accountUuid}catch{e=void 0}return xin({storedAccountUuid:e,hostAccountUuid:await Hin(t)})}function y7(){return r()===void 0}function r(){if(vt()||Me()!=="firstParty")return"egress";return Ft("allow_remote_sessions")?void 0:"policy_org"}
export{xin,Hin,ote,y7};
