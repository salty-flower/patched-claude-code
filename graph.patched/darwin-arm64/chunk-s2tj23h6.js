// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nc}from"./chunk-vd0a9d2s.js";import{em}from"./chunk-7194gg2b.js";import{b_o,Bwr}from"./chunk-yj45yszw.js";import{c}from"./chunk-tdmgys2e.js";import{Pgs}from"./chunk-zp1a5mr6.js";import{D}from"./chunk-3ebwax4f.js";async function ffr(r){let e=D([nc(),em()]).filter((t)=>t!==null);for(let t of e)try{let o=await b_o(r,t);if(o!==void 0){let i=await Pgs(t,o.gitRoot,r);if(typeof i==="string")Bwr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{ffr};
