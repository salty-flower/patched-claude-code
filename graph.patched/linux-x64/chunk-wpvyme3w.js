// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{os}from"./chunk-r3adsed5.js";import{rl}from"./chunk-y3a8g8e0.js";import{hli,n4o}from"./chunk-1jy029p2.js";import{a}from"./chunk-8c4ttmk8.js";import{EIa}from"./chunk-5z5dtbrz.js";import{L}from"./chunk-m55q213p.js";async function SFo(r){let e=L([os(),rl()]).filter((t)=>t!==null);for(let t of e)try{let o=await hli(r,t);if(o!==void 0){let i=await EIa(t,o.gitRoot,r);if(typeof i==="string")n4o(i,o.gitRoot,o.canonicalRoot)}}catch(o){a(o)}}
export{SFo};
