// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{sn}from"./chunk-a190bznh.js";import{k}from"./chunk-dsb06hq9.js";import{L}from"./chunk-0xdcm8sp.js";import{pu,Xe}from"./chunk-84crg0gy.js";import{nr}from"./chunk-0xb8rq8q.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function Vpt(e,r){if(L()&&r!==void 0&&sn(e)){await n(r,{namespace:"job",jobId:e});return}await i(nr(e),{recursive:!0})}async function Tue(e,r){if(L()&&r!==void 0&&sn(e)){await n(r,c(e));return}await i(a(nr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=pu(o.error);throw Object.assign(new k(`job folder not made (${Xe(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{Vpt,Tue};
