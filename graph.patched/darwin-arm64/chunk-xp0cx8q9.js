// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Zt}from"./chunk-8ath6mn8.js";import{R}from"./chunk-qr1avfxy.js";import{iu,Ge}from"./chunk-ynzt0fm1.js";import{cr}from"./chunk-wwwdzdhk.js";import{O}from"./chunk-vvpqfcj1.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function Xst(e,r){if(O()&&r!==void 0&&Zt(e)){await n(r,{namespace:"job",jobId:e});return}await i(cr(e),{recursive:!0})}async function Eae(e,r){if(O()&&r!==void 0&&Zt(e)){await n(r,c(e));return}await i(a(cr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=iu(o.error);throw Object.assign(new R(`job folder not made (${Ge(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{Xst,Eae};
