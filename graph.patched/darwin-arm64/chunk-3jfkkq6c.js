// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Z,Zr,mx}from"./chunk-b5xhmzas.js";import{P3t}from"./chunk-29cd2nzs.js";import{a}from"./chunk-mddke2ke.js";import{JM}from"./chunk-87f2mg6f.js";import{Xa}from"./chunk-xjqp3eha.js";var rgr=5,NDi="Structured output was retracted by a model fallback and no retry produced a valid result",d=600;function FDi(t,r,e){if(r>0)return`Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;let n=`Failed to provide valid structured output after ${t} attempts`;return e===void 0?n:`${n} \u2014 last StructuredOutput error: ${e}`}function cds(t){let r=typeof t==="string"?t:Array.isArray(t)?t.flatMap((i)=>i.type==="text"?[i.text]:[]).join(`
`):void 0;if(r===void 0)return;let n=r.replace(/^<tool_use_error>/,"").replace(/<\/tool_use_error>$/,"").replace(P3t,`
`).split(`
`).map(mx).join(`
`),o=JM(n,{prependMarker:!1}).sanitized,u=Zr(o);if(u.length===0)return;let s=u.length>d?Z(u,d)+"\u2026":u;return JM(s,{prependMarker:!1}).sanitized}function $Di(t,r){try{let e=r===void 0?0:t.lastIndexOf(r)+1;return c(e===0?t:t.slice(e))}catch(e){a(e);return}}function c(t){let r=new Set;for(let e of t){if(e?.type!=="assistant")continue;let n=e.message.content;if(!Array.isArray(n))continue;for(let o of n)if(o.type==="tool_use"&&o.name===Xa)r.add(o.id)}if(r.size===0)return;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n?.type!=="user")continue;let o=n.message.content;if(!Array.isArray(o))continue;for(let u=o.length-1;u>=0;u--){let s=o[u];if(s?.type==="tool_result"&&s.is_error===!0&&r.has(s.tool_use_id))return cds(s.content)}}return}
export{rgr,NDi,FDi,cds,$Di};
