// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{qn}from"./chunk-zhtwayh2.js";import{a}from"./chunk-dq2s4wjn.js";import{bt}from"./chunk-c5ajdz5z.js";import{RT,__}from"./chunk-n495pc0t.js";import{Pe}from"./chunk-d5e21f8p.js";import{Pt}from"./chunk-2q73xrvs.js";function Wan({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Gan(t){let e=qn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await RT(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Mee(t){let e;try{e=__()?.accountUuid}catch{e=void 0}return Wan({storedAccountUuid:e,hostAccountUuid:await Gan(t)})}function a7(){return r()===void 0}function r(){if(bt()||Pe()!=="firstParty")return"egress";return Pt("allow_remote_sessions")?void 0:"policy_org"}
export{Wan,Gan,Mee,a7};
