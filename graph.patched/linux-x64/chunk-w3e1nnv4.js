// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Rr}from"./chunk-z3qcbx87.js";import{x}from"./chunk-ekgz6skk.js";import{po}from"./chunk-cskmvz0m.js";import{Cm,bt}from"./chunk-ape075k7.js";import{z}from"./chunk-rdj492d5.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function qes(e,r){if(z()&&r!==void 0&&Rr(e)){await n(r,{namespace:"job",jobId:e});return}await i(po(e),{recursive:!0})}async function Q0e(e,r){if(z()&&r!==void 0&&Rr(e)){await n(r,c(e));return}await i(a(po(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Cm(o.error);throw Object.assign(new x(`job folder not made (${bt(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{qes,Q0e};
