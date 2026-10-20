// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{si}from"./chunk-m7gr14b0.js";import{Yr}from"./chunk-dxktn51d.js";import{I0}from"./chunk-2gh4h0fv.js";import{z5s}from"./chunk-7gz0pfve.js";import{B9n}from"./chunk-4qs43hr1.js";var t="(value set by your organization)";function Lqe(r,e){if(e!=="managed")return r;return{...r,url:z5s(r.url)??t,...r.headers&&{headers:Yr(r.headers,()=>t)}}}function Hot(r){return r==="cached"?"pending":r}function CAn(r){return r.map((e)=>{let o;if(e.config.type==="sse"||e.config.type==="http")o=Lqe({type:e.config.type,url:e.config.url,headers:e.config.headers},e.config.scope);else if(e.config.type==="claudeai-proxy")o={type:"claudeai-proxy",url:e.config.url,id:e.config.id};else if(e.config.type==="stdio"||e.config.type===void 0)o={type:"stdio",command:e.config.command,args:e.config.args};return{name:e.name,status:Hot(e.type),config:o,scope:e.config.scope,source:I0(e.name,e.config),serverInfo:si(e)?e.serverInfo:void 0,error:e.type==="failed"?e.error:void 0,error_code:B9n(e)}})}
export{Lqe,Hot,CAn};
