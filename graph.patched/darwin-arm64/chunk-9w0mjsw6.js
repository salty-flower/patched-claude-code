// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{s}from"./chunk-kzyd0fd4.js";import{l}from"./chunk-pc7b8z35.js";import{S,t}from"./chunk-t2jwg94b.js";var c=2000,g=["session_ingress_token","environment_secret","access_token","secret","token"],f=new RegExp(`"(${g.join("|")})"\\s*:\\s*"([^"]*)"`,"g"),u=16;function Ewr(e){return e.replace(f,(o,n,r)=>{if(r.length<u)return`"${n}":"[REDACTED]"`;let i=`${r.slice(0,8)}...${r.slice(-4)}`;return`"${n}":"${i}"`})}function C4t(e){let o=e.replaceAll(`
`,"\\n");if(o.length<=c)return o;return o.slice(0,c)+`... (${o.length} chars)`}function vFe(e){let o=typeof e==="string"?e:S(e),n=Ewr(o);if(n.length<=c)return n;return n.slice(0,c)+`... (${n.length} chars)`}function KYe(e){let o=l(e);if(e&&typeof e==="object"&&"response"in e){let n=e.response;if(n?.data&&typeof n.data==="object"){let r=n.data,i=typeof r.message==="string"?r.message:typeof r.error==="object"&&r.error&&("message"in r.error)&&typeof r.error.message==="string"?r.error.message:void 0;if(i)return`${o}: ${i}`}}return o}function aS(e,o=Date.now()){if(!e)return;let n=Number(e);if(Number.isFinite(n)&&n>=0)return n*1000;let r=Date.parse(e);if(Number.isFinite(r)){let i=r-o;return i>0?i:void 0}return}function bg(e){if(!e||typeof e!=="object")return;if("message"in e&&typeof e.message==="string")return e.message;if("error"in e&&e.error!==null&&typeof e.error==="object"&&"message"in e.error&&typeof e.error.message==="string")return e.error.message;return}function bb(e,o,n,r){if(o)t(o);s("tengu_bridge_repl_skipped",{reason:e,...n!==void 0&&{v2:n},...r})}
export{Ewr,C4t,vFe,KYe,aS,bg,bb};
