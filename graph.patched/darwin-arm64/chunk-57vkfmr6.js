// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{or}from"./chunk-sd0xvc0m.js";import{x}from"./chunk-tnh13g2g.js";import{B}from"./chunk-a48152q4.js";import{zr}from"./chunk-28k2pyza.js";import{Tm,ft}from"./chunk-zentsqzm.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function B0o(e,r){if(B()&&r!==void 0&&or(e)){await n(r,{namespace:"job",jobId:e});return}await i(zr(e),{recursive:!0})}async function Exe(e,r){if(B()&&r!==void 0&&or(e)){await n(r,c(e));return}await i(a(zr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Tm(o.error);throw Object.assign(new x(`job folder not made (${ft(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{B0o,Exe};
