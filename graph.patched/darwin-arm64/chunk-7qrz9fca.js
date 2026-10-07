// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{dc}from"./chunk-8mvda08c.js";import{rg}from"./chunk-ev2h864q.js";import{gdo,egr}from"./chunk-ts0309p1.js";import{c}from"./chunk-qfs4y3ww.js";import{Vss}from"./chunk-ma17m27h.js";import{D}from"./chunk-n6jrzhpg.js";async function Oir(r){let e=D([dc(),rg()]).filter((t)=>t!==null);for(let t of e)try{let o=await gdo(r,t);if(o!==void 0){let i=await Vss(t,o.gitRoot,r);if(typeof i==="string")egr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{Oir};
