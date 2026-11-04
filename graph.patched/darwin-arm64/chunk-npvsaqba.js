// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ztr,A3e}from"./chunk-fpymz31y.js";function Fgn(e,n){return{targets:e.filter((t)=>Ztr(t,n)),outOfBandNote:A3e(e,!0,n)}}async function $gn(e,n){let t=await Promise.allSettled(e.map((o)=>n(o.name))),r=0;for(let o of t)if(o.status==="fulfilled"&&o.value.client.type==="connected")r++;return{results:t,connected:r}}
export{Fgn,$gn};
