// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z}from"./chunk-b5xhmzas.js";function kcs(n){if(n===null||typeof n!=="object")return;let o=n.protocols;if(!Array.isArray(o))return;let t=o.filter((r)=>typeof r==="string");return t.length>0?t:void 0}function TLi(n){let o=kcs(n);if(o===void 0)return"";return` (subprotocols: ${o.map((t)=>`"${t}"`).join(", ")})`}var Vlo=4,e=48;function A0n(n){let o=n.slice(0,Vlo).map((r)=>r.length>e?`${Z(r,e)}\u2026`:r),t=n.length-o.length;return`${o.map((r)=>`"${r}"`).join(", ")}${t>0?` (+${t} more)`:""}`}
export{kcs,TLi,Vlo,A0n};
