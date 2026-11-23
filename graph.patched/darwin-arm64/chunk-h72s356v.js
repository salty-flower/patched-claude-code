// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kt}from"./chunk-97kv5dxm.js";import{Se}from"./chunk-x4r54n7x.js";import{f_,P5n,HZ}from"./chunk-vdcyef6s.js";function i(){return c(HZ(P5n(),"globalConfig"),Kt("userSettings")?HZ(Se("userSettings")?.env,"userSettings"):{},HZ(Se("flagSettings")?.env,"flagSettings"),HZ(Se("policySettings")?.env,"policySettings"))}function QQ(){return g(f_(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{QQ};
