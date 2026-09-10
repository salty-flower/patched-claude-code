// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{an}from"./chunk-0rpkhv24.js";import{_n}from"./chunk-qrernxw9.js";import{R}from"./chunk-59zxrwfh.js";import{N}from"./chunk-mtqrv1h8.js";import{mu,Ge}from"./chunk-cmg3b5hg.js";import{rr}from"./chunk-f4v140c7.js";var a=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function o0(e){if(e===void 0)return;return an(a.has(e)?e:"other")}var d=new Set(["cold","spare","adopted"]);function W5e(e){return typeof e==="string"&&d.has(e)?e:void 0}import{mkdir as o}from"fs/promises";import{join as c}from"path";async function kht(e,r){if(N()&&r!==void 0&&_n(e)){await i(r,{namespace:"job",jobId:e});return}await o(rr(e),{recursive:!0})}async function Spe(e,r){if(N()&&r!==void 0&&_n(e)){await i(r,s(e));return}await o(c(rr(e),"tmp"),{recursive:!0})}function s(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=mu(t.error);throw Object.assign(new R(`job folder not made (${Ge(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}
export{o0,W5e,kht,Spe};
