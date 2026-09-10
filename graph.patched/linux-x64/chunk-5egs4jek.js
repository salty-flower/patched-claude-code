// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{oe,ko,RH}from"./chunk-cmg3b5hg.js";import{h}from"./chunk-p9k2m8jj.js";import{sqt,fk}from"./chunk-2byjyg85.js";import{di}from"./chunk-wb09wmfd.js";var Vgt=5,w6n="Structured output was retracted by a model fallback and no retry produced a valid result",d=600;function v6n(t,r,e){if(r>0)return`Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;let n=`Failed to provide valid structured output after ${t} attempts`;return e===void 0?n:`${n} \u2014 last StructuredOutput error: ${e}`}function tpn(t){let r=typeof t==="string"?t:Array.isArray(t)?t.flatMap((i)=>i.type==="text"?[i.text]:[]).join(`
`):void 0;if(r===void 0)return;let n=r.replace(/^<tool_use_error>/,"").replace(/<\/tool_use_error>$/,"").replace(sqt,`
`).split(`
`).map(RH).join(`
`),o=fk(n,{prependMarker:!1}).sanitized,u=ko(o);if(u.length===0)return;let s=u.length>d?oe(u,d)+"\u2026":u;return fk(s,{prependMarker:!1}).sanitized}function E6n(t,r){try{let e=r===void 0?0:t.lastIndexOf(r)+1;return a(e===0?t:t.slice(e))}catch(e){h(e);return}}function a(t){let r=new Set;for(let e of t){if(e?.type!=="assistant")continue;let n=e.message.content;if(!Array.isArray(n))continue;for(let o of n)if(o.type==="tool_use"&&o.name===di)r.add(o.id)}if(r.size===0)return;for(let e=t.length-1;e>=0;e--){let n=t[e];if(n?.type!=="user")continue;let o=n.message.content;if(!Array.isArray(o))continue;for(let u=o.length-1;u>=0;u--){let s=o[u];if(s?.type==="tool_result"&&s.is_error===!0&&r.has(s.tool_use_id))return tpn(s.content)}}return}
export{Vgt,w6n,v6n,tpn,E6n};
