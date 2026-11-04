// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Z,Vr,Rv}from"./chunk-zmmnrc9r.js";import{a}from"./chunk-87y2sp93.js";import{aI}from"./chunk-vg97m3t3.js";import{jpo}from"./chunk-e7ymkpzd.js";import{cl}from"./chunk-wv7b91vf.js";var DYn=5,mJs="Structured output was retracted by a model fallback and no retry produced a valid result",d=600;function hJs(t,r,e){if(r>0)return`Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;let n=`Failed to provide valid structured output after ${t} attempts`;return e===void 0?n:`${n} \u2014 last StructuredOutput error: ${e}`}function DBo(t){let r=typeof t==="string"?t:Array.isArray(t)?t.flatMap((i)=>i.type==="text"?[i.text]:[]).join(`
`):void 0;if(r===void 0)return;let n=r.replace(/^<tool_use_error>/,"").replace(/<\/tool_use_error>$/,"").replace(jpo,`
`).split(`
`).map(Rv).join(`
`),o=aI(n,{prependMarker:!1}).sanitized,u=Vr(o);if(u.length===0)return;let s=u.length>d?Z(u,d)+"\u2026":u;return aI(s,{prependMarker:!1}).sanitized}function gJs(t,r){try{let e=r===void 0?0:t.lastIndexOf(r)+1;return c(e===0?t:t.slice(e))}catch(e){a(e);return}}function c(t){let r=new Set;for(let e of t){if(e?.type!=="assistant")continue;let n=e.message.content;if(!Array.isArray(n))continue;for(let o of n)if(o.type==="tool_use"&&o.name===cl)r.add(o.id)}if(r.size===0)return;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n?.type!=="user")continue;let o=n.message.content;if(!Array.isArray(o))continue;for(let u=o.length-1;u>=0;u--){let s=o[u];if(s?.type==="tool_result"&&s.is_error===!0&&r.has(s.tool_use_id))return DBo(s.content)}}return}
export{DYn,mJs,hJs,DBo,gJs};
