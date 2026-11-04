// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{qt}from"./chunk-fx3z0wwe.js";import{be}from"./chunk-gbez09mv.js";import{Lg,PLn,rX}from"./chunk-9x7xhvaz.js";function i(){return c(rX(PLn(),"globalConfig"),qt("userSettings")?rX(be("userSettings")?.env,"userSettings"):{},rX(be("flagSettings")?.env,"flagSettings"),rX(be("policySettings")?.env,"policySettings"))}function RY(){return g(Lg(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{RY};
