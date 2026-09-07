// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{i}from"./chunk-skkcgpsw.js";import{l}from"./chunk-7s5qs9ea.js";import{b,t}from"./chunk-1tk5haqn.js";var c=2000,g=["session_ingress_token","environment_secret","access_token","secret","token"],f=new RegExp(`"(${g.join("|")})"\\s*:\\s*"([^"]*)"`,"g"),u=16;function a(e){return e.replace(f,(s,n,r)=>{if(r.length<u)return`"${n}":"[REDACTED]"`;let o=`${r.slice(0,8)}...${r.slice(-4)}`;return`"${n}":"${o}"`})}function _Kt(e){let s=e.replaceAll(`
`,"\\n");if(s.length<=c)return s;return s.slice(0,c)+`... (${s.length} chars)`}function lFe(e){let s=typeof e==="string"?e:b(e),n=a(s);if(n.length<=c)return n;return n.slice(0,c)+`... (${n.length} chars)`}function YXe(e){let s=l(e);if(e&&typeof e==="object"&&"response"in e){let n=e.response;if(n?.data&&typeof n.data==="object"){let r=n.data,o=typeof r.message==="string"?r.message:typeof r.error==="object"&&r.error&&("message"in r.error)&&typeof r.error.message==="string"?r.error.message:void 0;if(o)return`${s}: ${o}`}}return s}function U_(e,s=Date.now()){if(!e)return;let n=Number(e);if(Number.isFinite(n)&&n>=0)return n*1000;let r=Date.parse(e);if(Number.isFinite(r)){let o=r-s;return o>0?o:void 0}return}function eg(e){if(!e||typeof e!=="object")return;if("message"in e&&typeof e.message==="string")return e.message;if("error"in e&&e.error!==null&&typeof e.error==="object"&&"message"in e.error&&typeof e.error.message==="string")return e.error.message;return}function Kb(e,s,n,r){if(s)t(s);i("tengu_bridge_repl_skipped",{reason:e,...n!==void 0&&{v2:n},...r})}
export{_Kt,lFe,YXe,U_,eg,Kb};
