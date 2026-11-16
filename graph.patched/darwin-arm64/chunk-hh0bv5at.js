// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t,_}from"./chunk-bdfv2ky4.js";import{gn}from"./chunk-cxygx051.js";import{yIe,pKe}from"./chunk-cq3w4egf.js";import{Lg}from"./chunk-05bmcw96.js";function U8t(o){return o.flatMap((e)=>yIe(pKe([{type:"addRules",destination:"session",behavior:"allow",rules:[Lg(e,"allow")]}])).map(gn))}function cir(o,e){let l=U8t(e);if(l.length===0)return o;return t(`Applying permission update: Adding ${l.length} allow rule(s) to source 'mcpMount': ${_(l)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:[...o.alwaysAllowRules.mcpMount??[],...l]}}}function uir(o,e,l){let r=o.alwaysAllowRules.mcpMount??[],s=U8t(e),n=l==="every"?r.filter((i)=>!s.includes(i)):[...r];if(l==="one")for(let i of s){let u=n.lastIndexOf(i);if(u!==-1)n.splice(u,1)}if(n.length===r.length)return o;return t(`Applying permission update: Removing ${r.length-n.length} allow rule(s) from source 'mcpMount', of ${_(s)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:n}}}
export{U8t,cir,uir};
