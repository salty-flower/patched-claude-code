// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{bEr,OZe}from"./chunk-zaxe68t4.js";function i0n(e,n){return{targets:e.filter((t)=>bEr(t,n)),outOfBandNote:OZe(e,!0,n)}}async function a0n(e,n){let t=await Promise.allSettled(e.map((o)=>n(o.name))),r=0;for(let o of t)if(o.status==="fulfilled"&&o.value.client.type==="connected")r++;return{results:t,connected:r}}
export{i0n,a0n};
