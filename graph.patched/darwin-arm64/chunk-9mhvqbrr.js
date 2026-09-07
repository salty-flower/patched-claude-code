// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Ur}from"./chunk-gnrvsty9.js";import{gn}from"./chunk-dhrcn786.js";import{R}from"./chunk-084v19yj.js";import{L}from"./chunk-7wmynp0n.js";import{eu,We}from"./chunk-5q90j22t.js";import{Zn}from"./chunk-aybj1x5t.js";var a=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function tI(e){if(e===void 0)return;return Ur(a.has(e)?e:"other")}var d=new Set(["cold","spare","adopted"]);function SGe(e){return typeof e==="string"&&d.has(e)?e:void 0}import{mkdir as o}from"fs/promises";import{join as c}from"path";async function Sut(e,r){if(L()&&r!==void 0&&gn(e)){await i(r,{namespace:"job",jobId:e});return}await o(Zn(e),{recursive:!0})}async function Vle(e,r){if(L()&&r!==void 0&&gn(e)){await i(r,s(e));return}await o(c(Zn(e),"tmp"),{recursive:!0})}function s(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=eu(t.error);throw Object.assign(new R(`job folder not made (${We(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}
export{tI,SGe,Sut,Vle};
