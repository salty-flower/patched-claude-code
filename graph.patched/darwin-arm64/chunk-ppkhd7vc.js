// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{an}from"./chunk-am8gnetv.js";import{_n}from"./chunk-d6akndrs.js";import{R}from"./chunk-rgs4nrpq.js";import{N}from"./chunk-95e36pja.js";import{gu,Ge}from"./chunk-wbbe5mtc.js";import{rr}from"./chunk-nhz30e6h.js";var a=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function gI(e){if(e===void 0)return;return an(a.has(e)?e:"other")}var d=new Set(["cold","spare","adopted"]);function r5e(e){return typeof e==="string"&&d.has(e)?e:void 0}import{mkdir as o}from"fs/promises";import{join as c}from"path";async function Uht(e,r){if(N()&&r!==void 0&&_n(e)){await i(r,{namespace:"job",jobId:e});return}await o(rr(e),{recursive:!0})}async function Rpe(e,r){if(N()&&r!==void 0&&_n(e)){await i(r,s(e));return}await o(c(rr(e),"tmp"),{recursive:!0})}function s(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=gu(t.error);throw Object.assign(new R(`job folder not made (${Ge(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}
export{gI,r5e,Uht,Rpe};
