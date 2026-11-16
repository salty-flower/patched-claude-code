// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kt}from"./chunk-2vbvs9gw.js";import{be}from"./chunk-4rkc6f3s.js";import{f_,a5n,AZ}from"./chunk-n92h5fyt.js";function i(){return c(AZ(a5n(),"globalConfig"),Kt("userSettings")?AZ(be("userSettings")?.env,"userSettings"):{},AZ(be("flagSettings")?.env,"flagSettings"),AZ(be("policySettings")?.env,"policySettings"))}function GQ(){return g(f_(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{GQ};
