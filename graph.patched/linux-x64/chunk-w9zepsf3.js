// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{s}from"./chunk-cvykgfry.js";import{l}from"./chunk-7h2h1m4y.js";import{v,n}from"./chunk-akz0cj0f.js";var c=2000,g=["session_ingress_token","environment_secret","access_token","secret","token"],f=new RegExp(`"(${g.join("|")})"\\s*:\\s*"([^"]*)"`,"g"),u=16;function Cur(e){return e.replace(f,(o,r,t)=>{if(t.length<u)return`"${r}":"[REDACTED]"`;let i=`${t.slice(0,8)}...${t.slice(-4)}`;return`"${r}":"${i}"`})}function lUt(e){let o=e.replaceAll(`
`,"\\n");if(o.length<=c)return o;return o.slice(0,c)+`... (${o.length} chars)`}function yDe(e){let o=typeof e==="string"?e:v(e),r=Cur(o);if(r.length<=c)return r;return r.slice(0,c)+`... (${r.length} chars)`}function YVe(e){let o=l(e);if(e&&typeof e==="object"&&"response"in e){let r=e.response;if(r?.data&&typeof r.data==="object"){let t=r.data,i=typeof t.message==="string"?t.message:typeof t.error==="object"&&t.error&&("message"in t.error)&&typeof t.error.message==="string"?t.error.message:void 0;if(i)return`${o}: ${i}`}}return o}function oE(e,o=Date.now()){if(!e)return;let r=Number(e);if(Number.isFinite(r)&&r>=0)return r*1000;let t=Date.parse(e);if(Number.isFinite(t)){let i=t-o;return i>0?i:void 0}return}function am(e){if(!e||typeof e!=="object")return;if("message"in e&&typeof e.message==="string")return e.message;if("error"in e&&e.error!==null&&typeof e.error==="object"&&"message"in e.error&&typeof e.error.message==="string")return e.error.message;return}function bA(e,o,r,t){if(o)n(o);s("tengu_bridge_repl_skipped",{reason:e,...r!==void 0&&{v2:r},...t})}
export{Cur,lUt,yDe,YVe,oE,am,bA};
