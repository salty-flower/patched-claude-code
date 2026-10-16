// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ln}from"./chunk-9t95885m.js";import{me}from"./chunk-a502zyxr.js";import{Hk,gsn,y5}from"./chunk-7dc4sv65.js";function i(){return c(y5(gsn(),"globalConfig"),ln("userSettings")?y5(me("userSettings")?.env,"userSettings"):{},y5(me("flagSettings")?.env,"flagSettings"),y5(me("policySettings")?.env,"policySettings"))}function cOt(){return g(Hk(),i())}function g(s,n){let r=new Set(Object.keys(n).map((e)=>e.toUpperCase())),t={...s};for(let e of Object.keys(t))if(!(e in n)&&r.has(e.toUpperCase()))delete t[e];return Object.assign(t,n)}function c(...s){let n=new Map;for(let t of s)for(let[e,o]of Object.entries(t))n.set(e.toUpperCase(),{key:e,value:o});let r={};for(let{key:t,value:e}of n.values())r[t]=e;return r}
export{cOt};
