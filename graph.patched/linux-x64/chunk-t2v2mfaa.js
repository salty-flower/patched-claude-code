// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Wn}from"./chunk-bj7g1p32.js";import{a}from"./chunk-td8fcebs.js";import{St}from"./chunk-9g6v0ehs.js";import{kw,my}from"./chunk-3e93vkg3.js";import{Le}from"./chunk-0558tzyr.js";import{Lt}from"./chunk-fet7e4b8.js";function Pin({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Din(t){let e=Wn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await kw(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function kee(t){let e;try{e=my()?.accountUuid}catch{e=void 0}return Pin({storedAccountUuid:e,hostAccountUuid:await Din(t)})}function Y6(){return r()===void 0}function r(){if(St()||Le()!=="firstParty")return"egress";return Lt("allow_remote_sessions")?void 0:"policy_org"}
export{Pin,Din,kee,Y6};
