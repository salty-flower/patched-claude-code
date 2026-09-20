// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{hn}from"./chunk-sgamszzq.js";import{a}from"./chunk-wkhfcbsj.js";import{At}from"./chunk-vzm3bfp5.js";import{ww,nm}from"./chunk-g4c6ggz4.js";import{Pe}from"./chunk-yvbqdrex.js";import{Xt}from"./chunk-2b1j7csg.js";function FOn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function $On(t){let e=hn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await ww(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Vle(t){let e;try{e=nm()?.accountUuid}catch{e=void 0}return FOn({storedAccountUuid:e,hostAccountUuid:await $On(t)})}function O7(){return r()===void 0}function r(){if(At()||Pe()!=="firstParty")return"egress";return Xt("allow_remote_sessions")?void 0:"policy_org"}
export{FOn,$On,Vle,O7};
