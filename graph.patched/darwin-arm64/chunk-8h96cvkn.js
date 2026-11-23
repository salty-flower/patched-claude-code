// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Jkr,BZe}from"./chunk-wqb2b4v0.js";function kMn(e,n){return{targets:e.filter((t)=>Jkr(t,n)),outOfBandNote:BZe(e,!0,n)}}async function TMn(e,n){let t=await Promise.allSettled(e.map((o)=>n(o.name))),r=0;for(let o of t)if(o.status==="fulfilled"&&o.value.client.type==="connected")r++;return{results:t,connected:r}}
export{kMn,TMn};
