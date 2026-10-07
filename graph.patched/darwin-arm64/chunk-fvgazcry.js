// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{nr}from"./chunk-wq75sevg.js";import{P}from"./chunk-fqsygynq.js";import{U}from"./chunk-ht3pd6g4.js";import{jr}from"./chunk-t5y3xk7a.js";import{hm,ut}from"./chunk-1z7j7ar7.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function lCo(e,r){if(U()&&r!==void 0&&nr(e)){await n(r,{namespace:"job",jobId:e});return}await i(jr(e),{recursive:!0})}async function lTe(e,r){if(U()&&r!==void 0&&nr(e)){await n(r,c(e));return}await i(a(jr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=hm(o.error);throw Object.assign(new P(`job folder not made (${ut(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{lCo,lTe};
