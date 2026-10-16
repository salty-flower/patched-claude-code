// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Er}from"./chunk-zg8w8y5z.js";import{x}from"./chunk-w7m8nded.js";import{z}from"./chunk-qeqy4res.js";import{oo}from"./chunk-602wadg8.js";import{im,yt}from"./chunk-j65tknb7.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function A8o(e,r){if(z()&&r!==void 0&&Er(e)){await n(r,{namespace:"job",jobId:e});return}await i(oo(e),{recursive:!0})}async function p0e(e,r){if(z()&&r!==void 0&&Er(e)){await n(r,c(e));return}await i(a(oo(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=im(o.error);throw Object.assign(new x(`job folder not made (${yt(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{A8o,p0e};
