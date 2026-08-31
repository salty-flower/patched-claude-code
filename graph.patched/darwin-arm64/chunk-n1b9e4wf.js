// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Kr}from"./chunk-38213y7h.js";import{a}from"./chunk-w3k8bej2.js";import{Ct}from"./chunk-qpcjd2zp.js";import{xT,IT}from"./chunk-bsdtxcdc.js";import{Ne}from"./chunk-znxmbm58.js";import{Mt}from"./chunk-y97hdknc.js";function Drn({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Orn(t){let e=Kr(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let r=await xT(t);return r==="env"||r==="fd"?e:void 0}catch{return}}async function WZ(t){let e;try{e=IT()?.accountUuid}catch{e=void 0}return Drn({storedAccountUuid:e,hostAccountUuid:await Orn(t)})}function b8(){return!Ct()&&Ne()==="firstParty"&&Mt("allow_remote_sessions")}
export{Drn,Orn,WZ,b8};
