// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Of}from"./chunk-a7cah040.js";import{nm}from"./chunk-xs651030.js";import{nqr,AXn}from"./chunk-a453ergf.js";import{u}from"./chunk-zwbw6dvp.js";import{L1o}from"./chunk-q8pmvej3.js";import{U}from"./chunk-7xx63g64.js";async function gqn(r){let e=U([Of(),nm()]).filter((t)=>t!==null);for(let t of e)try{let o=await nqr(r,t);if(o!==void 0){let i=await L1o(t,o.gitRoot,r);if(typeof i==="string")AXn(i,o.gitRoot,o.canonicalRoot)}}catch(o){u(o)}}
export{gqn};
