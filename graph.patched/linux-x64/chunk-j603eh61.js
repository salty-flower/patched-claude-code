// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Zt}from"./chunk-wsjwtx5h.js";import{T}from"./chunk-efckqwp7.js";import{iu,We}from"./chunk-d0cr5d2v.js";import{cr}from"./chunk-dmdmtq6p.js";import{D}from"./chunk-jw0x5qwf.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function Vst(e,r){if(D()&&r!==void 0&&Zt(e)){await n(r,{namespace:"job",jobId:e});return}await i(cr(e),{recursive:!0})}async function Sae(e,r){if(D()&&r!==void 0&&Zt(e)){await n(r,c(e));return}await i(a(cr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=iu(o.error);throw Object.assign(new T(`job folder not made (${We(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{Vst,Sae};
