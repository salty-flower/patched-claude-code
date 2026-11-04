// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{di}from"./chunk-ecyypctx.js";import{Tl}from"./chunk-90nskyyy.js";import{mLs,lvo}from"./chunk-qj8veqay.js";import{a}from"./chunk-87y2sp93.js";import{s6i}from"./chunk-nxc9btm2.js";import{L}from"./chunk-v07jm9dp.js";async function Ypo(r){let e=L([di(),Tl()]).filter((t)=>t!==null);for(let t of e)try{let o=await mLs(r,t);if(o!==void 0){let i=await s6i(t,o.gitRoot,r);if(typeof i==="string")lvo(i,o.gitRoot,o.canonicalRoot)}}catch(o){a(o)}}
export{Ypo};
