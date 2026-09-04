// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{zn}from"./chunk-yhfssb7x.js";import{a}from"./chunk-g2ngvza5.js";import{Ct}from"./chunk-jx9d5yeb.js";import{uE,W_}from"./chunk-vtwn1md5.js";import{Me}from"./chunk-wg76fyda.js";import{$t}from"./chunk-kd6kxh5q.js";function Aln({storedAccountUuid:t,hostAccountUuid:e}){if(!e)return t?{status:"resolved",accountUuid:t,source:"stored"}:{status:"missing"};if(!t)return{status:"resolved",accountUuid:e,source:"env"};return t.trim().toLowerCase()===e.toLowerCase()?{status:"resolved",accountUuid:t,source:"env"}:{status:"mismatch"}}async function Cln(t){let e=zn(a.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();if(e===void 0)return;try{let n=await uE(t);return n==="env"||n==="fd"?e:void 0}catch{return}}async function Jte(t){let e;try{e=W_()?.accountUuid}catch{e=void 0}return Aln({storedAccountUuid:e,hostAccountUuid:await Cln(t)})}function rX(){return r()===void 0}function r(){if(Ct()||Me()!=="firstParty")return"egress";return $t("allow_remote_sessions")?void 0:"policy_org"}
export{Aln,Cln,Jte,rX};
