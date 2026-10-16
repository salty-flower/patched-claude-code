// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{As}from"./chunk-d9vq4daa.js";import{zr}from"./chunk-xzypj06m.js";import{oL}from"./chunk-dvmwj6gj.js";import{T2s}from"./chunk-718k5xe7.js";import{t4n}from"./chunk-1jaxs49d.js";var t="(value set by your organization)";function I6e(r,e){if(e!=="managed")return r;return{...r,url:T2s(r.url)??t,...r.headers&&{headers:zr(r.headers,()=>t)}}}function vnt(r){return r==="cached"?"pending":r}function MEn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=I6e({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:vnt(e.type),config:o,scope:e.config.scope,source:oL(e.name,e.config),serverInfo:As(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:t4n(e)}})}
export{I6e,vnt,MEn};
