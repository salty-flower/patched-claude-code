// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{T}from"./chunk-m0sj7y8g.js";import{a}from"./chunk-869zfth6.js";import{ks,re}from"./chunk-z6am4wsr.js";import{c}from"./chunk-z9b8syjk.js";import{BPe}from"./chunk-9wqh5j7s.js";import{id}from"./chunk-1xqd80pz.js";import{_9o}from"./chunk-hbchkmzp.js";var P=0.5,d=4,p=1600,M=25000;function i(){let e=a.MAX_MCP_OUTPUT_TOKENS;if(e!==void 0&&e>0)return e;let t=T("tengu_velvet_ibis",{})?.mcp_tool;if(typeof t==="number"&&Number.isFinite(t)&&t>0)return t;return M}function ude(e){if(!e||typeof e==="string"||!Array.isArray(e))return e;let n=e,t=!1;for(let r of n)if(r.type==="text"&&"_meta"in r&&r._meta){t=!0;break}if(!t)return e;return n.map((r)=>{if(r.type==="text"&&"_meta"in r&&r._meta){let{_meta:o,...s}=r;return s}return r})}function f(e){return e.type==="text"}function C(e){return e.type==="image"}function ICe(e){if(!e)return 0;if(typeof e==="string")return id(e);if(!Array.isArray(e))return 0;return e.reduce((n,t)=>{if(f(t))return n+id(t.text);else if(C(t))return n+p;return n},0)}function OCe(){return i()*4}var x="[OUTPUT TRUNCATED - exceeded ";function _(){return`

${x}${i()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`}async function g(e,n){let t=[],r=0;for(let o of e)if(f(o)){let s=n-r;if(s<=0)break;if(o.text.length<=s)t.push(o),r+=o.text.length;else{let u=re(o.text,s);if(u){let m={type:"text",text:u};if(o._meta)m._meta=o._meta;t.push(m)}break}}else if(C(o)){let s=p*4;if(r+s<=n)t.push(o),r+=s;else{let u=n-r;if(u>0){let m=Math.floor(u*0.75);try{let l=await _9o(o,m);if(t.push(l),l.source.type==="base64")r+=l.source.data.length;else r+=s}catch{}}}}else t.push(o);return t}async function IHt(e,n){if(!e)return!1;let t=ICe(e);if(t<=i()*P)return!1;if(ICe(typeof e==="string"?e:e.filter(f))>i()*d)return!0;try{return(await BPe(typeof e==="string"?[{role:"user",content:e}]:[{role:"user",content:e}],[],void 0,{credentials:n})??t)>i()}catch(o){return c(o),t>i()}}async function OHt(e){if(!e)return e;let n=OCe(),t=_();if(typeof e==="string")return ks(e,n)+t;else{let r=await g(e,n);return r.push({type:"text",text:t}),r}}async function ure(e,n){if(!await IHt(e,n))return e;return await OHt(e)}
export{ude,ICe,OCe,IHt,OHt,ure};
