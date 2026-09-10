// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Yn}from"./chunk-cet8na02.js";import{a}from"./chunk-qymratxs.js";import{bt}from"./chunk-e0gvmsm3.js";import{hA,Mh}from"./chunk-vryy7b5x.js";import{He}from"./chunk-k2g2a0ht.js";import{Nt}from"./chunk-zt6267d7.js";function Xun({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Jun(t){let e=Yn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await hA(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Cne(t){let e;try{e=Mh()?.accountUuid}catch{e=void 0}return Xun({storedAccountUuid:e,hostAccountUuid:await Jun(t)})}function V7(){return r()===void 0}function r(){if(bt()||He()!=="firstParty")return"egress";return Nt("allow_remote_sessions")?void 0:"policy_org"}
export{Xun,Jun,Cne,V7};
