// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{L,ci}from"./chunk-ersar6wn.js";import{Pl}from"./chunk-m2fgnje1.js";import{AZo,N8r}from"./chunk-vh7e37w8.js";import{l}from"./chunk-thm21ca7.js";import{Ksi}from"./chunk-j2d407c1.js";async function EGr(r){let e=L([ci(),Pl()]).filter((t)=>t!==null);for(let t of e)try{let o=await AZo(r,t);if(o!==void 0){let i=await Ksi(t,o.gitRoot,r);if(typeof i==="string")N8r(i,o.gitRoot,o.canonicalRoot)}}catch(o){l(o)}}
export{EGr};
