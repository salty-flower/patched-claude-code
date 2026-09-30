// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{zn}from"./chunk-k7eq4ze9.js";import{P}from"./chunk-hs50vfa7.js";import{L}from"./chunk-nynxm73s.js";import{Pr}from"./chunk-fggdnxfn.js";import{yf,nt}from"./chunk-ve6dydk0.js";import{mkdir as i}from"fs/promises";import{join as a}from"path";async function IKt(e,r){if(L()&&r!==void 0&&zn(e)){await n(r,{namespace:"job",jobId:e});return}await i(Pr(e),{recursive:!0})}async function X0e(e,r){if(L()&&r!==void 0&&zn(e)){await n(r,c(e));return}await i(a(Pr(e),"tmp"),{recursive:!0})}function c(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function n(e,r){let o=await e.ensureScope(r);if(!o.ok){let t=yf(o.error);throw Object.assign(new P(`job folder not made (${nt(o.error)})`,"job folder not made"),t!==void 0?{code:t}:{})}}
export{IKt,X0e};
