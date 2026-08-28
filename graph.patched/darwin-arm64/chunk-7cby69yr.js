// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Vr}from"./chunk-g4zaymy2.js";import{a}from"./chunk-bn8q5mbz.js";import{Ct}from"./chunk-w2hwjymv.js";import{$v,Bv}from"./chunk-ghnc2x4f.js";import{Me}from"./chunk-2d75qem6.js";import{xt}from"./chunk-dd7crjgj.js";function iQt({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function sQt(t){let e=Vr(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let r=await $v(t);return r==="env"||r==="fd"?e:void 0}catch{return}}async function mJ(t){let e;try{e=Bv()?.accountUuid}catch{e=void 0}return iQt({storedAccountUuid:e,hostAccountUuid:await sQt(t)})}function h8(){return!Ct()&&Me()==="firstParty"&&xt("allow_remote_sessions")}
export{iQt,sQt,mJ,h8};
