// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t,_}from"./chunk-ray9kegj.js";import{gn}from"./chunk-k61f6b0h.js";import{mOe,l3e}from"./chunk-rj6gcj81.js";import{Lg}from"./chunk-qc23p4d3.js";function x9t(o){return o.flatMap((e)=>mOe(l3e([{type:"addRules",destination:"session",behavior:"allow",rules:[Lg(e,"allow")]}])).map(gn))}function Bsr(o,e){let l=x9t(e);if(l.length===0)return o;return t(`Applying permission update: Adding ${l.length} allow rule(s) to source 'mcpMount': ${_(l)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:[...o.alwaysAllowRules.mcpMount??[],...l]}}}function jsr(o,e,l){let r=o.alwaysAllowRules.mcpMount??[],s=x9t(e),n=l==="every"?r.filter((i)=>!s.includes(i)):[...r];if(l==="one")for(let i of s){let u=n.lastIndexOf(i);if(u!==-1)n.splice(u,1)}if(n.length===r.length)return o;return t(`Applying permission update: Removing ${r.length-n.length} allow rule(s) from source 'mcpMount', of ${_(s)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:n}}}
export{x9t,Bsr,jsr};
