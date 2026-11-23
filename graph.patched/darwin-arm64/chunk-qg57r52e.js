// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{os}from"./chunk-m8nhymg4.js";import{rl}from"./chunk-0qf90h64.js";import{Kli,P3o}from"./chunk-v2bkh5ab.js";import{a}from"./chunk-mddke2ke.js";import{pIa}from"./chunk-29cd2nzs.js";import{L}from"./chunk-zqmjz0gj.js";async function VFo(r){let e=L([os(),rl()]).filter((t)=>t!==null);for(let t of e)try{let o=await Kli(r,t);if(o!==void 0){let i=await pIa(t,o.gitRoot,r);if(typeof i==="string")P3o(i,o.gitRoot,o.canonicalRoot)}}catch(o){a(o)}}
export{VFo};
