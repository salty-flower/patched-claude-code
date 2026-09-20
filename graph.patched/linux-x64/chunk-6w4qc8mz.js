// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{hn}from"./chunk-txfrkyzp.js";import{a}from"./chunk-q2vrcqny.js";import{kt}from"./chunk-kh3dq6rw.js";import{Sw,nm}from"./chunk-30p0nwys.js";import{Pe}from"./chunk-s3hsf7ap.js";import{Xt}from"./chunk-js9x7t7j.js";function dOn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function pOn(t){let e=hn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await Sw(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Fle(t){let e;try{e=nm()?.accountUuid}catch{e=void 0}return dOn({storedAccountUuid:e,hostAccountUuid:await pOn(t)})}function TX(){return r()===void 0}function r(){if(kt()||Pe()!=="firstParty")return"egress";return Xt("allow_remote_sessions")?void 0:"policy_org"}
export{dOn,pOn,Fle,TX};
