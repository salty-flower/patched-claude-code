// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{rn}from"./chunk-zjtbqw2e.js";import{k}from"./chunk-pc7b8z35.js";import{L}from"./chunk-ma94d7pd.js";import{ru,Xe}from"./chunk-t2jwg94b.js";import{rr}from"./chunk-xxz7nkzb.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function ndt(e,r){if(L()&&r!==void 0&&rn(e)){await n(r,{namespace:"job",jobId:e});return}await i(rr(e),{recursive:!0})}async function Cce(e,r){if(L()&&r!==void 0&&rn(e)){await n(r,c(e));return}await i(a(rr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=ru(o.error);throw Object.assign(new k(`job folder not made (${Xe(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{ndt,Cce};
