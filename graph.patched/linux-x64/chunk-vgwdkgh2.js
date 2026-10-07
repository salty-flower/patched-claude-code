// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{dc}from"./chunk-aywwjcwq.js";import{rg}from"./chunk-v6ek3j23.js";import{Fco,Imr}from"./chunk-j3629m0a.js";import{c}from"./chunk-z9b8syjk.js";import{lss}from"./chunk-0wqb5n04.js";import{D}from"./chunk-6xtc8snm.js";async function dir(r){let e=D([dc(),rg()]).filter((t)=>t!==null);for(let t of e)try{let o=await Fco(r,t);if(o!==void 0){let i=await lss(t,o.gitRoot,r);if(typeof i==="string")Imr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{dir};
