// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nc}from"./chunk-g79wjybr.js";import{em}from"./chunk-jhxnp941.js";import{zyo,_wr}from"./chunk-amnc8bbv.js";import{c}from"./chunk-3s94kw4m.js";import{qms}from"./chunk-hesrqedr.js";import{D}from"./chunk-vmwr1ee4.js";async function Gpr(r){let e=D([nc(),em()]).filter((t)=>t!==null);for(let t of e)try{let o=await zyo(r,t);if(o!==void 0){let i=await qms(t,o.gitRoot,r);if(typeof i==="string")_wr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{Gpr};
