// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Op}from"./chunk-e5371f2n.js";import{xe}from"./chunk-jr30bz1x.js";function BWe(o){let t=xe().loadedModules.find((s)=>s.name===o);return t===void 0||Op(t)}function _gs(){let o=new Map,t=new Map,s=new Set;return{list:(e)=>BWe(e)?[...o.get(e)?.values()??[]]:[],own:(e)=>{let r=o.get(e)??new Map;return o.set(e,r),r},serverKey:(e)=>t.get(e),ownerOfKey:(e)=>[...t.entries()].find(([,r])=>r===e)?.[0],keyed:(e,r)=>{t.set(e,r),s.add(r)},minted:(e)=>s.has(e),forget:(e)=>{o.delete(e),t.delete(e)}}}var QH=_gs();export{BWe,_gs,QH};
