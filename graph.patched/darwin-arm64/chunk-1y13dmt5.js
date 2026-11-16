// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Qe}from"./chunk-cy76pm9m.js";function zQ(e,n){let t=e?.[n.argument],{entryKey:r}=n;if(r===void 0)return[{entry:void 0,value:t}];if(!Array.isArray(t))return[];let u=[];for(let[o,i]of t.entries())if(Qe(i))u.push({entry:o,value:Object.hasOwn(i,r)?i[r]:void 0});return u}function hcn(e,n,t){let{entryKey:r}=n;if(r===void 0){let o=t.get(void 0);return o===void 0?{...e}:{...e,[n.argument]:o}}let u=e[n.argument];if(!Array.isArray(u))return{...e};return{...e,[n.argument]:u.map((o,i)=>{let f=t.get(i);return f===void 0||!Qe(o)?o:{...o,[r]:f}})}}function x$s(e,n){let t=e[n.argument];if(n.entryKey===void 0||!Array.isArray(t))return{...e};return{...e,[n.argument]:t.map((r)=>Qe(r)?{...r}:r)}}function xrt(e){return typeof e==="string"&&e.startsWith("sha256:")}
export{zQ,hcn,x$s,xrt};
