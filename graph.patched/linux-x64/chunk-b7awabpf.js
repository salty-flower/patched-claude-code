// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{nr}from"./chunk-7n5tp35k.js";import{P}from"./chunk-fdatg9ax.js";import{B}from"./chunk-f16c4jnr.js";import{jr}from"./chunk-vanx1pds.js";import{hm,ut}from"./chunk-b8nanznj.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function AEo(e,r){if(B()&&r!==void 0&&nr(e)){await n(r,{namespace:"job",jobId:e});return}await i(jr(e),{recursive:!0})}async function tCe(e,r){if(B()&&r!==void 0&&nr(e)){await n(r,c(e));return}await i(a(jr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=hm(o.error);throw Object.assign(new P(`job folder not made (${ut(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{AEo,tCe};
