// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_,t}from"./chunk-5nh49npx.js";import{fn}from"./chunk-tftvcgfc.js";import{P_}from"./chunk-0rfh1g70.js";import{Ept,dXe}from"./chunk-w64mkcdc.js";function vBt(o){return o.flatMap((e)=>Ept(dXe([{type:"addRules",destination:"session",behavior:"allow",rules:[P_(e,"allow")]}])).map(fn))}function M6n(o,e){let l=vBt(e);if(l.length===0)return o;return t(`Applying permission update: Adding ${l.length} allow rule(s) to source 'mcpMount': ${_(l)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:[...o.alwaysAllowRules.mcpMount??[],...l]}}}function D6n(o,e,l){let r=o.alwaysAllowRules.mcpMount??[],s=vBt(e),n=l==="every"?r.filter((i)=>!s.includes(i)):[...r];if(l==="one")for(let i of s){let u=n.lastIndexOf(i);if(u!==-1)n.splice(u,1)}if(n.length===r.length)return o;return t(`Applying permission update: Removing ${r.length-n.length} allow rule(s) from source 'mcpMount', of ${_(s)}`),{...o,alwaysAllowRules:{...o.alwaysAllowRules,mcpMount:n}}}
export{vBt,M6n,D6n};
