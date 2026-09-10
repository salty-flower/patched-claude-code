// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{hn}from"./chunk-jxvdfgn0.js";import{_n}from"./chunk-tfmhv9d3.js";import{R}from"./chunk-wkyng8j1.js";import{M}from"./chunk-wmtek349.js";import{uu,We}from"./chunk-w930ag8r.js";import{or}from"./chunk-vxv2z7a4.js";var a=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function eP(e){if(e===void 0)return;return hn(a.has(e)?e:"other")}var d=new Set(["cold","spare","adopted"]);function I9e(e){return typeof e==="string"&&d.has(e)?e:void 0}import{mkdir as o}from"fs/promises";import{join as c}from"path";async function ugt(e,r){if(M()&&r!==void 0&&_n(e)){await i(r,{namespace:"job",jobId:e});return}await o(or(e),{recursive:!0})}async function Lde(e,r){if(M()&&r!==void 0&&_n(e)){await i(r,s(e));return}await o(c(or(e),"tmp"),{recursive:!0})}function s(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=uu(t.error);throw Object.assign(new R(`job folder not made (${We(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}
export{eP,I9e,ugt,Lde};
