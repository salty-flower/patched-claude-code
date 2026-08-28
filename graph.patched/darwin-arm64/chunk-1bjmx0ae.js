// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qt}from"./chunk-3vs63y6b.js";import{O}from"./chunk-e5bq01yj.js";import{Pc,ze}from"./chunk-cmkfpkth.js";import{Kn}from"./chunk-9ep0zqeb.js";import{H}from"./chunk-9p9ys44p.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function frt(e,r){if(H()&&r!==void 0&&qt(e)){await n(r,{namespace:"job",jobId:e});return}await i(Kn(e),{recursive:!0})}async function Yoe(e,r){if(H()&&r!==void 0&&qt(e)){await n(r,c(e));return}await i(a(Kn(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Pc(o.error);throw Object.assign(new O(`job folder not made (${ze(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{frt,Yoe};
