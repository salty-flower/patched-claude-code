// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ql}from"./chunk-4bw62nzm.js";import{df}from"./chunk-qr9z1wer.js";import{HCo,rRr}from"./chunk-bf3z2ftn.js";import{c}from"./chunk-gsnbskq4.js";import{HCs}from"./chunk-r2vtj1kh.js";import{D}from"./chunk-3qabb19b.js";async function wSr(r){let e=D([ql(),df()]).filter((t)=>t!==null);for(let t of e)try{let o=await HCo(r,t);if(o!==void 0){let i=await HCs(t,o.gitRoot,r);if(typeof i==="string")rRr(i,o.gitRoot,o.canonicalRoot)}}catch(o){c(o)}}
export{wSr};
