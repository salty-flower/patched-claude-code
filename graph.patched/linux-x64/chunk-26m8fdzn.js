// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Kr}from"./chunk-30zk17wm.js";import{a}from"./chunk-m9gbfvns.js";import{vt}from"./chunk-ma4xtxwv.js";import{Rw,xw}from"./chunk-1e5y3pjf.js";import{Oe}from"./chunk-4n7ktjmt.js";import{Mt}from"./chunk-k7gygany.js";function trn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function nrn(t){let e=Kr(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let r=await Rw(t);return r==="env"||r==="fd"?e:void 0}catch{return}}async function NZ(t){let e;try{e=xw()?.accountUuid}catch{e=void 0}return trn({storedAccountUuid:e,hostAccountUuid:await nrn(t)})}function g6(){return!vt()&&Oe()==="firstParty"&&Mt("allow_remote_sessions")}
export{trn,nrn,NZ,g6};
