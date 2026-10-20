// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Rr}from"./chunk-jjgc4sar.js";import{x}from"./chunk-nre716m4.js";import{po}from"./chunk-79rentg1.js";import{Am,St}from"./chunk-d6j9r5re.js";import{z}from"./chunk-p017vfx2.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function kts(e,r){if(z()&&r!==void 0&&Rr(e)){await n(r,{namespace:"job",jobId:e});return}await i(po(e),{recursive:!0})}async function iNe(e,r){if(z()&&r!==void 0&&Rr(e)){await n(r,c(e));return}await i(a(po(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Am(o.error);throw Object.assign(new x(`job folder not made (${St(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{kts,iNe};
