// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Wt}from"./chunk-fz00m7zs.js";import{L}from"./chunk-7h2h1m4y.js";import{Rc,Ge}from"./chunk-akz0cj0f.js";import{Kn}from"./chunk-zve9wwgw.js";import{D}from"./chunk-6fnbbyjg.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function Brt(e,r){if(D()&&r!==void 0&&Wt(e)){await n(r,{namespace:"job",jobId:e});return}await i(Kn(e),{recursive:!0})}async function iie(e,r){if(D()&&r!==void 0&&Wt(e)){await n(r,c(e));return}await i(a(Kn(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=Rc(o.error);throw Object.assign(new L(`job folder not made (${Ge(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{Brt,iie};
