// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{_r}from"./chunk-x0a7sawk.js";import{R}from"./chunk-36ysyspx.js";import{_o}from"./chunk-yhsjqng1.js";import{Zm,Et}from"./chunk-q6tk46bn.js";import{z}from"./chunk-mxa4mwnj.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function sgs(e,r){if(z()&&r!==void 0&&_r(e)){await n(r,{namespace:"job",jobId:e});return}await i(_o(e),{recursive:!0})}async function HUe(e,r){if(z()&&r!==void 0&&_r(e)){await n(r,c(e));return}await i(a(_o(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Zm(o.error);throw Object.assign(new R(`job folder not made (${Et(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{sgs,HUe};
