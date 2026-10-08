// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{or}from"./chunk-hrwjwwzw.js";import{x}from"./chunk-5g6j8x8p.js";import{B}from"./chunk-4p5wb748.js";import{Gr}from"./chunk-ztvkra0t.js";import{Cm,ft}from"./chunk-yrs75gf9.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function YIo(e,r){if(B()&&r!==void 0&&or(e)){await n(r,{namespace:"job",jobId:e});return}await i(Gr(e),{recursive:!0})}async function lxe(e,r){if(B()&&r!==void 0&&or(e)){await n(r,c(e));return}await i(a(Gr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Cm(o.error);throw Object.assign(new x(`job folder not made (${ft(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{YIo,lxe};
