// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qr}from"./chunk-2vv5hpw3.js";import{a}from"./chunk-g0kfvhx3.js";import{kt}from"./chunk-6ce4s97h.js";import{FS,BS}from"./chunk-ns0ekkj0.js";import{Oe}from"./chunk-ryvgd9z0.js";import{xt}from"./chunk-k7k51kt3.js";function rQt({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function oQt(t){let e=qr(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let r=await FS(t);return r==="env"||r==="fd"?e:void 0}catch{return}}async function uJ(t){let e;try{e=BS()?.accountUuid}catch{e=void 0}return rQt({storedAccountUuid:e,hostAccountUuid:await oQt(t)})}function u8(){return!kt()&&Oe()==="firstParty"&&xt("allow_remote_sessions")}
export{rQt,oQt,uJ,u8};
