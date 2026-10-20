// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{D,pi}from"./chunk-kpqr86hf.js";import{nd}from"./chunk-r2k1mk6b.js";import{bVo,F2r}from"./chunk-tx4cjw3a.js";import{l}from"./chunk-277zhca1.js";import{K4s}from"./chunk-ex8w1b3a.js";async function ALr(r){let e=D([pi(),nd()]).filter((t)=>t!==null);for(let t of e)try{let o=await bVo(r,t);if(o!==void 0){let i=await K4s(t,o.gitRoot,r);if(typeof i==="string")F2r(i,o.gitRoot,o.canonicalRoot)}}catch(o){l(o)}}
export{ALr};
